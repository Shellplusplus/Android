var COMMAND_DATA = {
  templates: {
    i18nKey: "category.templates",
    items: [
      { cmd: "ls -l /",      label: "cmd.lsRoot",    desc: "cmd.lsRootDesc" },
      { cmd: "ls -la /data", label: "cmd.lsData",    desc: "cmd.lsDataDesc" },
      { cmd: "ps",           label: "cmd.ps",        desc: "cmd.psDesc" },
      { cmd: "free",         label: "cmd.free",      desc: "cmd.freeDesc" },
      { cmd: "df",           label: "cmd.df",        desc: "cmd.dfDesc" },
      { cmd: "uname -a",     label: "cmd.unameA",    desc: "cmd.unameADesc" },
      { cmd: "dmesg",        label: "cmd.dmesg",     desc: "cmd.dmesgDesc" },
      { cmd: "uptime",       label: "cmd.uptime",    desc: "cmd.uptimeDesc" },
      { cmd: "ifconfig",     label: "cmd.ifconfig",  desc: "cmd.ifconfigDesc" },
      { cmd: "help",         label: "cmd.help",      desc: "cmd.helpDesc" }
    ]
  },
  file: {
    i18nKey: "category.file",
    items: [
      { cmd: "ls",    label: "cmd.ls",      desc: "cmd.lsDesc" },
      { cmd: "cat",   label: "cmd.cat",     desc: "cmd.catDesc" },
      { cmd: "cp",    label: "cmd.cp",      desc: "cmd.cpDesc" },
      { cmd: "mv",    label: "cmd.mv",      desc: "cmd.mvDesc" },
      { cmd: "rm",    label: "cmd.rm",      desc: "cmd.rmDesc",      danger: true },
      { cmd: "mkdir", label: "cmd.mkdir",   desc: "cmd.mkdirDesc" },
      { cmd: "pwd",   label: "cmd.pwd",     desc: "cmd.pwdDesc" },
      { cmd: "dd",    label: "cmd.dd",      desc: "cmd.ddDesc",      danger: true }
    ]
  },
  system: {
    i18nKey: "category.system",
    items: [
      { cmd: "uname",  label: "cmd.uname",   desc: "cmd.unameDesc" },
      { cmd: "uptime", label: "cmd.uptime",  desc: "cmd.uptimeDesc" },
      { cmd: "date",   label: "cmd.date",    desc: "cmd.dateDesc" },
      { cmd: "dmesg",  label: "cmd.dmesg",   desc: "cmd.dmesgDesc" },
      { cmd: "free",   label: "cmd.free",    desc: "cmd.freeDesc" },
      { cmd: "reboot", label: "cmd.reboot",  desc: "cmd.rebootDesc",  danger: true }
    ]
  },
  process: {
    i18nKey: "category.process",
    items: [
      { cmd: "ps",    label: "cmd.ps",      desc: "cmd.psDesc" },
      { cmd: "sleep", label: "cmd.sleep",   desc: "cmd.sleepDesc" },
      { cmd: "kill",  label: "cmd.kill",    desc: "cmd.killDesc",    danger: true }
    ]
  },
  network: {
    i18nKey: "category.network",
    items: [
      { cmd: "ifconfig", label: "cmd.ifconfig", desc: "cmd.ifconfigDesc" },
      { cmd: "ping",     label: "cmd.ping",     desc: "cmd.pingDesc" },
      { cmd: "curl",     label: "cmd.curl",     desc: "cmd.curlDesc" },
      { cmd: "nslookup", label: "cmd.nslookup", desc: "cmd.nslookupDesc" }
    ]
  }
}

var CATEGORY_DEFS = [
  { id: "favorites", titleKey: "category.favorites", previewKey: "category.favoritesPreview" },
  { id: "templates", titleKey: "category.templates", previewKey: "category.templatesPreview" },
  { id: "file",      titleKey: "category.file",      previewKey: "category.filePreview" },
  { id: "system",    titleKey: "category.system",    previewKey: "category.systemPreview" },
  { id: "process",   titleKey: "category.process",   previewKey: "category.processPreview" },
  { id: "network",   titleKey: "category.network",   previewKey: "category.networkPreview" }
]

var HISTORY_LIMIT_OPTIONS = [3, 5, 10]
var DEFAULT_HISTORY_LIMIT = 5

function buildCommandLookup() {
  var lookup = {}
  for (var categoryId in COMMAND_DATA) {
    if (!COMMAND_DATA.hasOwnProperty(categoryId)) continue
    var items = COMMAND_DATA[categoryId].items
    for (var i = 0; i < items.length; i++) {
      var item = items[i]
      if (!lookup[item.cmd]) {
        lookup[item.cmd] = item
      }
    }
  }
  return lookup
}

function normalizeHistoryLimit(limit) {
  limit = parseInt(limit)
  for (var i = 0; i < HISTORY_LIMIT_OPTIONS.length; i++) {
    if (HISTORY_LIMIT_OPTIONS[i] === limit) {
      return limit
    }
  }
  return DEFAULT_HISTORY_LIMIT
}

export default {
  commandData: COMMAND_DATA,
  categoryDefs: CATEGORY_DEFS,
  historyLimitOptions: HISTORY_LIMIT_OPTIONS,
  defaultHistoryLimit: DEFAULT_HISTORY_LIMIT,
  buildCommandLookup: buildCommandLookup,
  normalizeHistoryLimit: normalizeHistoryLimit
}
