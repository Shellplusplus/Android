/**
 * Interconnect 通信封装
 * 参考 varclass 的 InterconnectHelper 实现
 */

var interconnect = require("@system.interconnect")

var InterconnectHelper = function () {
  this.conn = null
  this.callbacks = {}
  this.eventListeners = []
  this.chunkBuffers = {}
  this.isInitialized = false
}

/**
 * 初始化连接
 */
InterconnectHelper.prototype.init = function () {
  if (this.isInitialized) {
    return
  }

  this.conn = interconnect.instance()
  var self = this

  this.conn.onmessage = function (messageObj) {
    self._handleMessage(messageObj)
  }

  this.conn.onclose = function () {
    self._emitEvent("close")
  }

  this.conn.onerror = function (error) {
    self._emitEvent("error", error)
  }

  this.conn.onopen = function () {
    self._emitEvent("open")
  }

  this.isInitialized = true
}

/**
 * 处理接收到的消息
 */
InterconnectHelper.prototype._handleMessage = function (messageObj) {
  var data = messageObj.data
  var payload

  if (typeof data === "string") {
    try {
      payload = JSON.parse(data)
    } catch (e) {
      payload = data
    }
  } else {
    payload = data
  }

  // 检查是否为分片数据
  if (payload && payload.__c === true) {
    this._handleChunk(payload)
    return
  }

  // 按 type 路由
  if (payload && payload.type) {
    var callback = this.callbacks[payload.type]
    if (callback) {
      callback(payload)
    } else if (this.callbacks["*"]) {
      this.callbacks["*"](payload)
    }
  }
}

/**
 * 处理分片数据
 */
InterconnectHelper.prototype._handleChunk = function (payload) {
  var id = payload.id
  var index = payload.i
  var total = payload.t
  var data = payload.d

  if (!id || typeof index !== "number" || typeof total !== "number" || !data) {
    return
  }

  if (index < 0 || index >= total) {
    return
  }

  if (!this.chunkBuffers[id]) {
    this.chunkBuffers[id] = {
      count: 0,
      total: total,
      parts: new Array(total),
      ts: Date.now()
    }
  }

  var buffer = this.chunkBuffers[id]

  if (buffer.parts[index]) {
    return
  }

  buffer.parts[index] = data
  buffer.count++

  if (buffer.count === buffer.total) {
    var fullData = buffer.parts.join("")

    if (payload.e === "b64") {
      fullData = this._base64Decode(fullData)
    }

    delete this.chunkBuffers[id]

    try {
      var parsed = JSON.parse(fullData)
      this._handleMessage({ data: parsed })
    } catch (e) {
      this._handleMessage({ data: fullData })
    }
  }
}

/**
 * 发送消息
 */
InterconnectHelper.prototype.send = function (type, payload) {
  if (!this.conn) {
    return Promise.reject(new Error("Not initialized"))
  }

  var data
  if (typeof payload === "object") {
    data = Object.assign({}, payload, { type: type })
  } else {
    data = { msg: payload, type: type }
  }

  var self = this
  return new Promise(function (resolve, reject) {
    self.conn.send({
      data: JSON.stringify(data),
      success: function () {
        resolve()
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}

/**
 * 分片发送大数据
 */
InterconnectHelper.prototype.sendChunked = function (type, payload, chunkSize) {
  chunkSize = chunkSize || 4096

  var data = JSON.stringify(payload)
  var id = type + "-" + Date.now()

  if (data.length <= chunkSize) {
    return this.send(type, payload)
  }

  var chunks = []
  for (var i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize))
  }

  var total = chunks.length
  var self = this

  return new Promise(function (resolve, reject) {
    var sentCount = 0

    function sendNext () {
      if (sentCount >= total) {
        resolve()
        return
      }

      var chunk = {
        __c: true,
        id: id,
        i: sentCount,
        t: total,
        d: chunks[sentCount]
      }

      self.conn.send({
        data: JSON.stringify(chunk),
        success: function () {
          sentCount++
          sendNext()
        },
        fail: function (error) {
          reject(error)
        }
      })
    }

    sendNext()
  })
}

/**
 * Base64 编码
 */
InterconnectHelper.prototype._base64Encode = function (str) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  var result = ""
  var i = 0

  while (i < str.length) {
    var a = str.charCodeAt(i++)
    var b = i < str.length ? str.charCodeAt(i++) : 0
    var c = i < str.length ? str.charCodeAt(i++) : 0

    var bitmap = (a << 16) | (b << 8) | c

    result += chars.charAt((bitmap >> 18) & 63)
    result += chars.charAt((bitmap >> 12) & 63)
    result += i - 2 < str.length ? chars.charAt((bitmap >> 6) & 63) : "="
    result += i - 1 < str.length ? chars.charAt(bitmap & 63) : "="
  }

  return result
}

/**
 * Base64 解码
 */
InterconnectHelper.prototype._base64Decode = function (str) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  var result = ""

  str = str.replace(/[^A-Za-z0-9+/]/g, "")

  for (var i = 0; i < str.length; i += 4) {
    var a = chars.indexOf(str[i])
    var b = chars.indexOf(str[i + 1])
    var c = chars.indexOf(str[i + 2])
    var d = chars.indexOf(str[i + 3])

    var bitmap = (a << 18) | (b << 12) | (c << 6) | d

    result += String.fromCharCode((bitmap >> 16) & 255)
    if (c !== 64) {
      result += String.fromCharCode((bitmap >> 8) & 255)
    }
    if (d !== 64) {
      result += String.fromCharCode(bitmap & 255)
    }
  }

  return result
}

/**
 * 监听消息类型
 */
InterconnectHelper.prototype.addListener = function (type, callback) {
  this.callbacks[type] = callback
}

/**
 * 移除消息监听
 */
InterconnectHelper.prototype.removeListener = function (type) {
  delete this.callbacks[type]
}

/**
 * 监听连接状态
 */
InterconnectHelper.prototype.addEventListener = function (callback) {
  this.eventListeners.push(callback)
  return this.eventListeners.length - 1
}

/**
 * 移除连接状态监听
 */
InterconnectHelper.prototype.removeEventListener = function (index) {
  this.eventListeners.splice(index, 1)
}

/**
 * 触发连接状态事件
 */
InterconnectHelper.prototype._emitEvent = function (eventName, data) {
  for (var i = 0; i < this.eventListeners.length; i++) {
    if (typeof this.eventListeners[i] === "function") {
      this.eventListeners[i](eventName, data)
    }
  }
}

/**
 * 获取连接状态
 */
InterconnectHelper.prototype.getReadyState = function () {
  if (!this.conn) {
    return Promise.reject(new Error("Not initialized"))
  }

  var self = this
  return new Promise(function (resolve, reject) {
    self.conn.getReadyState({
      success: function (data) {
        resolve(data.readyState)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}

module.exports = InterconnectHelper
