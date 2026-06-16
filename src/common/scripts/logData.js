var LOG_CONFIG_FILE = "internal://files/log_config.json"
var QUICKAPP_LOG_HISTORY_FILE = "internal://files/quickapp_log_history.json"
var LUA_LOG_HISTORY_FILE = "internal://files/lua_log_history.json"
var QUICKAPP_RUNTIME_FILE = "internal://files/quickapp_runtime_state.json"
var DEFAULT_LOG_HISTORY_LIMIT = 30

function pad2(value) {
  value = parseInt(value, 10) || 0
  return value < 10 ? "0" + value : "" + value
}

function toUnixSeconds(value) {
  value = parseInt(value, 10) || 0
  if (value > 9999999999) {
    return Math.floor(value / 1000)
  }
  return value
}

function safeParse(text, fallback) {
  try {
    return JSON.parse(text)
  } catch (e) {
    return fallback
  }
}

function buildLogId(index, capturedAtUnix) {
  var unix = toUnixSeconds(capturedAtUnix) || Math.floor(Date.now() / 1000)
  var d = new Date(unix * 1000)
  if (isNaN(d.getTime())) {
    d = new Date()
  }
  return formatDateTime(d) + "#" + (parseInt(index, 10) || 1)
}

function formatDateTime(input) {
  var d = input instanceof Date ? input : new Date((toUnixSeconds(input) || Math.floor(Date.now() / 1000)) * 1000)
  if (isNaN(d.getTime())) {
    d = new Date()
  }
  var timePart = ""
  timePart += d.getFullYear()
  timePart += pad2(d.getMonth() + 1)
  timePart += pad2(d.getDate())
  timePart += pad2(d.getHours())
  timePart += pad2(d.getMinutes())
  timePart += pad2(d.getSeconds())
  return timePart
}

function formatDisplayTime(input) {
  var d = input instanceof Date ? input : new Date((toUnixSeconds(input) || Math.floor(Date.now() / 1000)) * 1000)
  if (isNaN(d.getTime())) {
    d = new Date()
  }
  return d.getFullYear() + "-" +
    pad2(d.getMonth() + 1) + "-" +
    pad2(d.getDate()) + " " +
    pad2(d.getHours()) + ":" +
    pad2(d.getMinutes()) + ":" +
    pad2(d.getSeconds())
}

function buildLogFileName(source, logId) {
  var safeId = String(logId || "00000000000000#1").replace("#", "_")
  return "log_" + source + "_" + safeId + ".txt"
}

function buildLogFileUri(source, logId) {
  return "internal://files/" + buildLogFileName(source, logId)
}

function normalizeLogItems(items, defaultSource) {
  var normalized = []
  var seen = {}
  if (!(items instanceof Array)) {
    return normalized
  }
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    if (!item) continue
    var source = item.source || defaultSource || "quickapp"
    var index = parseInt(item.index, 10) || (i + 1)
    var capturedAtUnix = toUnixSeconds(item.capturedAtUnix) || Math.floor(Date.now() / 1000)
    var logId = item.logId || buildLogId(index, capturedAtUnix)
    var uniqueKey = source + "::" + logId
    if (seen[uniqueKey]) continue
    seen[uniqueKey] = true
    normalized.push({
      id: "log-" + source + "-" + logId,
      source: source,
      index: index,
      logId: logId,
      file: item.file || buildLogFileUri(source, logId),
      name: item.name || buildLogFileName(source, logId),
      capturedAt: item.capturedAt || "",
      capturedAtUnix: capturedAtUnix,
      title: item.title || "",
      summary: item.summary || ""
    })
  }
  normalized.sort(function(a, b) {
    if ((b.capturedAtUnix || 0) !== (a.capturedAtUnix || 0)) {
      return (b.capturedAtUnix || 0) - (a.capturedAtUnix || 0)
    }
    return (b.index || 0) - (a.index || 0)
  })
  return normalized
}

function normalizeLogStore(store, defaultSource) {
  var rawItems = []
  var nextIndex = 1
  if (store && store.items instanceof Array) {
    rawItems = store.items
    nextIndex = parseInt(store.nextIndex, 10) || 1
  } else if (store instanceof Array) {
    rawItems = store
  }
  var items = normalizeLogItems(rawItems, defaultSource)
  var maxIndex = 0
  for (var i = 0; i < items.length; i++) {
    if ((items[i].index || 0) > maxIndex) {
      maxIndex = items[i].index || 0
    }
  }
  if (nextIndex <= maxIndex) {
    nextIndex = maxIndex + 1
  }
  return {
    items: items,
    nextIndex: nextIndex,
    lastItem: items.length > 0 ? items[0] : null
  }
}

export default {
  logConfigFile: LOG_CONFIG_FILE,
  quickAppLogHistoryFile: QUICKAPP_LOG_HISTORY_FILE,
  luaLogHistoryFile: LUA_LOG_HISTORY_FILE,
  quickAppRuntimeFile: QUICKAPP_RUNTIME_FILE,
  defaultLogHistoryLimit: DEFAULT_LOG_HISTORY_LIMIT,
  safeParse: safeParse,
  formatDateTime: formatDateTime,
  formatDisplayTime: formatDisplayTime,
  buildLogId: buildLogId,
  buildLogFileName: buildLogFileName,
  buildLogFileUri: buildLogFileUri,
  normalizeLogItems: normalizeLogItems,
  normalizeLogStore: normalizeLogStore
}
