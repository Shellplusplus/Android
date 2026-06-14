// 精简版：移除中文/日文词库，仅保留接口兼容性
let SimpleInputMethod = {
  dict: { py2hz: {}, py2hz2: {} }
}

SimpleInputMethod.initDict = function() {
  // 词库已删除，仅英文输入
}

SimpleInputMethod.getHanzi = function(word, lang) {
  // 仅英文模式，直接返回空
  return []
}

SimpleInputMethod.getPinyin = function(word) {
  return ""
}

export { SimpleInputMethod }
