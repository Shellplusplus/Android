export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createAppHandler = function() {
            return (()=>{
                var __webpack_modules__ = {
                    "./src/common/scripts/shellData.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports["default"] = void 0;
                        var COMMAND_DATA = {
                            templates: {
                                i18nKey: "category.templates",
                                items: [
                                    {
                                        cmd: "ls -l /",
                                        label: "cmd.lsRoot",
                                        desc: "cmd.lsRootDesc"
                                    },
                                    {
                                        cmd: "ls -la /data",
                                        label: "cmd.lsData",
                                        desc: "cmd.lsDataDesc"
                                    },
                                    {
                                        cmd: "ps",
                                        label: "cmd.ps",
                                        desc: "cmd.psDesc"
                                    },
                                    {
                                        cmd: "free",
                                        label: "cmd.free",
                                        desc: "cmd.freeDesc"
                                    },
                                    {
                                        cmd: "df",
                                        label: "cmd.df",
                                        desc: "cmd.dfDesc"
                                    },
                                    {
                                        cmd: "uname -a",
                                        label: "cmd.unameA",
                                        desc: "cmd.unameADesc"
                                    },
                                    {
                                        cmd: "dmesg",
                                        label: "cmd.dmesg",
                                        desc: "cmd.dmesgDesc"
                                    },
                                    {
                                        cmd: "uptime",
                                        label: "cmd.uptime",
                                        desc: "cmd.uptimeDesc"
                                    },
                                    {
                                        cmd: "ifconfig",
                                        label: "cmd.ifconfig",
                                        desc: "cmd.ifconfigDesc"
                                    },
                                    {
                                        cmd: "help",
                                        label: "cmd.help",
                                        desc: "cmd.helpDesc"
                                    }
                                ]
                            },
                            file: {
                                i18nKey: "category.file",
                                items: [
                                    {
                                        cmd: "ls",
                                        label: "cmd.ls",
                                        desc: "cmd.lsDesc"
                                    },
                                    {
                                        cmd: "cat",
                                        label: "cmd.cat",
                                        desc: "cmd.catDesc"
                                    },
                                    {
                                        cmd: "cp",
                                        label: "cmd.cp",
                                        desc: "cmd.cpDesc"
                                    },
                                    {
                                        cmd: "mv",
                                        label: "cmd.mv",
                                        desc: "cmd.mvDesc"
                                    },
                                    {
                                        cmd: "rm",
                                        label: "cmd.rm",
                                        desc: "cmd.rmDesc",
                                        danger: true
                                    },
                                    {
                                        cmd: "mkdir",
                                        label: "cmd.mkdir",
                                        desc: "cmd.mkdirDesc"
                                    },
                                    {
                                        cmd: "pwd",
                                        label: "cmd.pwd",
                                        desc: "cmd.pwdDesc"
                                    },
                                    {
                                        cmd: "dd",
                                        label: "cmd.dd",
                                        desc: "cmd.ddDesc",
                                        danger: true
                                    }
                                ]
                            },
                            system: {
                                i18nKey: "category.system",
                                items: [
                                    {
                                        cmd: "uname",
                                        label: "cmd.uname",
                                        desc: "cmd.unameDesc"
                                    },
                                    {
                                        cmd: "uptime",
                                        label: "cmd.uptime",
                                        desc: "cmd.uptimeDesc"
                                    },
                                    {
                                        cmd: "date",
                                        label: "cmd.date",
                                        desc: "cmd.dateDesc"
                                    },
                                    {
                                        cmd: "dmesg",
                                        label: "cmd.dmesg",
                                        desc: "cmd.dmesgDesc"
                                    },
                                    {
                                        cmd: "free",
                                        label: "cmd.free",
                                        desc: "cmd.freeDesc"
                                    },
                                    {
                                        cmd: "reboot",
                                        label: "cmd.reboot",
                                        desc: "cmd.rebootDesc",
                                        danger: true
                                    }
                                ]
                            },
                            process: {
                                i18nKey: "category.process",
                                items: [
                                    {
                                        cmd: "ps",
                                        label: "cmd.ps",
                                        desc: "cmd.psDesc"
                                    },
                                    {
                                        cmd: "sleep",
                                        label: "cmd.sleep",
                                        desc: "cmd.sleepDesc"
                                    },
                                    {
                                        cmd: "kill",
                                        label: "cmd.kill",
                                        desc: "cmd.killDesc",
                                        danger: true
                                    }
                                ]
                            },
                            network: {
                                i18nKey: "category.network",
                                items: [
                                    {
                                        cmd: "ifconfig",
                                        label: "cmd.ifconfig",
                                        desc: "cmd.ifconfigDesc"
                                    },
                                    {
                                        cmd: "ping",
                                        label: "cmd.ping",
                                        desc: "cmd.pingDesc"
                                    },
                                    {
                                        cmd: "curl",
                                        label: "cmd.curl",
                                        desc: "cmd.curlDesc"
                                    },
                                    {
                                        cmd: "nslookup",
                                        label: "cmd.nslookup",
                                        desc: "cmd.nslookupDesc"
                                    }
                                ]
                            }
                        };
                        var CATEGORY_DEFS = [
                            {
                                id: "favorites",
                                titleKey: "category.favorites",
                                previewKey: "category.favoritesPreview"
                            },
                            {
                                id: "templates",
                                titleKey: "category.templates",
                                previewKey: "category.templatesPreview"
                            },
                            {
                                id: "file",
                                titleKey: "category.file",
                                previewKey: "category.filePreview"
                            },
                            {
                                id: "system",
                                titleKey: "category.system",
                                previewKey: "category.systemPreview"
                            },
                            {
                                id: "process",
                                titleKey: "category.process",
                                previewKey: "category.processPreview"
                            },
                            {
                                id: "network",
                                titleKey: "category.network",
                                previewKey: "category.networkPreview"
                            }
                        ];
                        var HISTORY_LIMIT_OPTIONS = [
                            3,
                            5,
                            10
                        ];
                        var DEFAULT_HISTORY_LIMIT = 5;
                        function buildCommandLookup() {
                            var lookup = {};
                            for(var categoryId in COMMAND_DATA)if (COMMAND_DATA.hasOwnProperty(categoryId)) {
                                var items = COMMAND_DATA[categoryId].items;
                                for(var i = 0; i < items.length; i++){
                                    var item = items[i];
                                    if (!lookup[item.cmd]) lookup[item.cmd] = item;
                                }
                            }
                            return lookup;
                        }
                        function normalizeHistoryLimit(limit) {
                            limit = parseInt(limit);
                            for(var i = 0; i < HISTORY_LIMIT_OPTIONS.length; i++)if (HISTORY_LIMIT_OPTIONS[i] === limit) return limit;
                            return DEFAULT_HISTORY_LIMIT;
                        }
                        var _default = exports["default"] = {
                            commandData: COMMAND_DATA,
                            categoryDefs: CATEGORY_DEFS,
                            historyLimitOptions: HISTORY_LIMIT_OPTIONS,
                            defaultHistoryLimit: DEFAULT_HISTORY_LIMIT,
                            buildCommandLookup: buildCommandLookup,
                            normalizeHistoryLimit: normalizeHistoryLimit
                        };
                    },
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.shell.liangyi","name":"Shell++","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.file"},{"name":"system.device"},{"name":"system.vibrator"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index","launchMode":"singleTask"},"pages/detail":{"component":"detail"},"pages/log":{"component":"log"},"pages/info":{"component":"info"},"pages/setting":{"component":"setting"},"pages/terminal":{"component":"terminal","launchMode":"clearTask"},"pages/history":{"component":"history"},"pages/favorites":{"component":"favorites"},"pages/about":{"component":"about"},"pages/settings":{"component":"settings"},"pages/debug":{"component":"debug"},"pages/screenshot":{"component":"screenshot"}}}}');
                    }
                };
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.11";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.11";
                })();
                var __webpack_exports__ = {};
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.file"));
                        var _shellData = _interopRequireDefault(__webpack_require__("./src/common/scripts/shellData.js"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
                            shellData: _shellData.default,
                            onCreate () {
                                _system.default.writeText({
                                    uri: "internal://files/cmd_result.json",
                                    text: '{"seq":-1}',
                                    append: false
                                });
                                console.log("Shell++ project created");
                            },
                            onDestroy () {
                                console.log("Shell++ project destroyed");
                            }
                        };
                    };
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.style = $app_style$;
                    $app_exports$.default.manifest = __webpack_require__("./src/manifest.json");
                    var $translateStyle$ = function(value) {
                        if ('string' == typeof value) return Object.fromEntries(value.split(';').filter((item)=>Boolean(item && item.trim())).map((item)=>{
                            const matchs = item.match(/([^:]+):(.*)/);
                            if (matchs && matchs.length > 2) return [
                                matchs[1].trim().replace(/-([a-z])/g, (_, match)=>match.toUpperCase()),
                                matchs[2].trim()
                            ];
                            return [];
                        }));
                        return value;
                    };
                    __webpack_require__.g.$translateStyle$ = $translateStyle$;
                })();
            })();
        };
        return createAppHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvY29tbW9uL3NjcmlwdHMvc2hlbGxEYXRhLmpzIiwid2VicGFjazovL1NoZWxsKysvanNvbnwvcnVuL21lZGlhL3ZlbnRpL+aWsOWKoOWNty/pobnnm64vVmVsYSBMdWHmlofmoaMr5ZCE56eN6aG555uu5paH5Lu25aS5L+mhueebri8udGVtcF9TaGVsbCsrL3NyYy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsKysvc3JjL2FwcC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ09NTUFORF9EQVRBID0ge1xuICB0ZW1wbGF0ZXM6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LnRlbXBsYXRlc1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGNtZDogXCJscyAtbCAvXCIsICAgICAgbGFiZWw6IFwiY21kLmxzUm9vdFwiLCAgICBkZXNjOiBcImNtZC5sc1Jvb3REZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImxzIC1sYSAvZGF0YVwiLCBsYWJlbDogXCJjbWQubHNEYXRhXCIsICAgIGRlc2M6IFwiY21kLmxzRGF0YURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwicHNcIiwgICAgICAgICAgIGxhYmVsOiBcImNtZC5wc1wiLCAgICAgICAgZGVzYzogXCJjbWQucHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImZyZWVcIiwgICAgICAgICBsYWJlbDogXCJjbWQuZnJlZVwiLCAgICAgIGRlc2M6IFwiY21kLmZyZWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRmXCIsICAgICAgICAgICBsYWJlbDogXCJjbWQuZGZcIiwgICAgICAgIGRlc2M6IFwiY21kLmRmRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJ1bmFtZSAtYVwiLCAgICAgbGFiZWw6IFwiY21kLnVuYW1lQVwiLCAgICBkZXNjOiBcImNtZC51bmFtZUFEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRtZXNnXCIsICAgICAgICBsYWJlbDogXCJjbWQuZG1lc2dcIiwgICAgIGRlc2M6IFwiY21kLmRtZXNnRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJ1cHRpbWVcIiwgICAgICAgbGFiZWw6IFwiY21kLnVwdGltZVwiLCAgICBkZXNjOiBcImNtZC51cHRpbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImlmY29uZmlnXCIsICAgICBsYWJlbDogXCJjbWQuaWZjb25maWdcIiwgIGRlc2M6IFwiY21kLmlmY29uZmlnRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJoZWxwXCIsICAgICAgICAgbGFiZWw6IFwiY21kLmhlbHBcIiwgICAgICBkZXNjOiBcImNtZC5oZWxwRGVzY1wiIH1cbiAgICBdXG4gIH0sXG4gIGZpbGU6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LmZpbGVcIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwibHNcIiwgICAgbGFiZWw6IFwiY21kLmxzXCIsICAgICAgZGVzYzogXCJjbWQubHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImNhdFwiLCAgIGxhYmVsOiBcImNtZC5jYXRcIiwgICAgIGRlc2M6IFwiY21kLmNhdERlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiY3BcIiwgICAgbGFiZWw6IFwiY21kLmNwXCIsICAgICAgZGVzYzogXCJjbWQuY3BEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcIm12XCIsICAgIGxhYmVsOiBcImNtZC5tdlwiLCAgICAgIGRlc2M6IFwiY21kLm12RGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJybVwiLCAgICBsYWJlbDogXCJjbWQucm1cIiwgICAgICBkZXNjOiBcImNtZC5ybURlc2NcIiwgICAgICBkYW5nZXI6IHRydWUgfSxcbiAgICAgIHsgY21kOiBcIm1rZGlyXCIsIGxhYmVsOiBcImNtZC5ta2RpclwiLCAgIGRlc2M6IFwiY21kLm1rZGlyRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJwd2RcIiwgICBsYWJlbDogXCJjbWQucHdkXCIsICAgICBkZXNjOiBcImNtZC5wd2REZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRkXCIsICAgIGxhYmVsOiBcImNtZC5kZFwiLCAgICAgIGRlc2M6IFwiY21kLmRkRGVzY1wiLCAgICAgIGRhbmdlcjogdHJ1ZSB9XG4gICAgXVxuICB9LFxuICBzeXN0ZW06IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LnN5c3RlbVwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGNtZDogXCJ1bmFtZVwiLCAgbGFiZWw6IFwiY21kLnVuYW1lXCIsICAgZGVzYzogXCJjbWQudW5hbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInVwdGltZVwiLCBsYWJlbDogXCJjbWQudXB0aW1lXCIsICBkZXNjOiBcImNtZC51cHRpbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRhdGVcIiwgICBsYWJlbDogXCJjbWQuZGF0ZVwiLCAgICBkZXNjOiBcImNtZC5kYXRlRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJkbWVzZ1wiLCAgbGFiZWw6IFwiY21kLmRtZXNnXCIsICAgZGVzYzogXCJjbWQuZG1lc2dEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImZyZWVcIiwgICBsYWJlbDogXCJjbWQuZnJlZVwiLCAgICBkZXNjOiBcImNtZC5mcmVlRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJyZWJvb3RcIiwgbGFiZWw6IFwiY21kLnJlYm9vdFwiLCAgZGVzYzogXCJjbWQucmVib290RGVzY1wiLCAgZGFuZ2VyOiB0cnVlIH1cbiAgICBdXG4gIH0sXG4gIHByb2Nlc3M6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LnByb2Nlc3NcIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwicHNcIiwgICAgbGFiZWw6IFwiY21kLnBzXCIsICAgICAgZGVzYzogXCJjbWQucHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInNsZWVwXCIsIGxhYmVsOiBcImNtZC5zbGVlcFwiLCAgIGRlc2M6IFwiY21kLnNsZWVwRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJraWxsXCIsICBsYWJlbDogXCJjbWQua2lsbFwiLCAgICBkZXNjOiBcImNtZC5raWxsRGVzY1wiLCAgICBkYW5nZXI6IHRydWUgfVxuICAgIF1cbiAgfSxcbiAgbmV0d29yazoge1xuICAgIGkxOG5LZXk6IFwiY2F0ZWdvcnkubmV0d29ya1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGNtZDogXCJpZmNvbmZpZ1wiLCBsYWJlbDogXCJjbWQuaWZjb25maWdcIiwgZGVzYzogXCJjbWQuaWZjb25maWdEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInBpbmdcIiwgICAgIGxhYmVsOiBcImNtZC5waW5nXCIsICAgICBkZXNjOiBcImNtZC5waW5nRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJjdXJsXCIsICAgICBsYWJlbDogXCJjbWQuY3VybFwiLCAgICAgZGVzYzogXCJjbWQuY3VybERlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwibnNsb29rdXBcIiwgbGFiZWw6IFwiY21kLm5zbG9va3VwXCIsIGRlc2M6IFwiY21kLm5zbG9va3VwRGVzY1wiIH1cbiAgICBdXG4gIH1cbn1cblxudmFyIENBVEVHT1JZX0RFRlMgPSBbXG4gIHsgaWQ6IFwiZmF2b3JpdGVzXCIsIHRpdGxlS2V5OiBcImNhdGVnb3J5LmZhdm9yaXRlc1wiLCBwcmV2aWV3S2V5OiBcImNhdGVnb3J5LmZhdm9yaXRlc1ByZXZpZXdcIiB9LFxuICB7IGlkOiBcInRlbXBsYXRlc1wiLCB0aXRsZUtleTogXCJjYXRlZ29yeS50ZW1wbGF0ZXNcIiwgcHJldmlld0tleTogXCJjYXRlZ29yeS50ZW1wbGF0ZXNQcmV2aWV3XCIgfSxcbiAgeyBpZDogXCJmaWxlXCIsICAgICAgdGl0bGVLZXk6IFwiY2F0ZWdvcnkuZmlsZVwiLCAgICAgIHByZXZpZXdLZXk6IFwiY2F0ZWdvcnkuZmlsZVByZXZpZXdcIiB9LFxuICB7IGlkOiBcInN5c3RlbVwiLCAgICB0aXRsZUtleTogXCJjYXRlZ29yeS5zeXN0ZW1cIiwgICAgcHJldmlld0tleTogXCJjYXRlZ29yeS5zeXN0ZW1QcmV2aWV3XCIgfSxcbiAgeyBpZDogXCJwcm9jZXNzXCIsICAgdGl0bGVLZXk6IFwiY2F0ZWdvcnkucHJvY2Vzc1wiLCAgIHByZXZpZXdLZXk6IFwiY2F0ZWdvcnkucHJvY2Vzc1ByZXZpZXdcIiB9LFxuICB7IGlkOiBcIm5ldHdvcmtcIiwgICB0aXRsZUtleTogXCJjYXRlZ29yeS5uZXR3b3JrXCIsICAgcHJldmlld0tleTogXCJjYXRlZ29yeS5uZXR3b3JrUHJldmlld1wiIH1cbl1cblxudmFyIEhJU1RPUllfTElNSVRfT1BUSU9OUyA9IFszLCA1LCAxMF1cbnZhciBERUZBVUxUX0hJU1RPUllfTElNSVQgPSA1XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tbWFuZExvb2t1cCgpIHtcbiAgdmFyIGxvb2t1cCA9IHt9XG4gIGZvciAodmFyIGNhdGVnb3J5SWQgaW4gQ09NTUFORF9EQVRBKSB7XG4gICAgaWYgKCFDT01NQU5EX0RBVEEuaGFzT3duUHJvcGVydHkoY2F0ZWdvcnlJZCkpIGNvbnRpbnVlXG4gICAgdmFyIGl0ZW1zID0gQ09NTUFORF9EQVRBW2NhdGVnb3J5SWRdLml0ZW1zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXVxuICAgICAgaWYgKCFsb29rdXBbaXRlbS5jbWRdKSB7XG4gICAgICAgIGxvb2t1cFtpdGVtLmNtZF0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBsb29rdXBcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplSGlzdG9yeUxpbWl0KGxpbWl0KSB7XG4gIGxpbWl0ID0gcGFyc2VJbnQobGltaXQpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgSElTVE9SWV9MSU1JVF9PUFRJT05TLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEhJU1RPUllfTElNSVRfT1BUSU9OU1tpXSA9PT0gbGltaXQpIHtcbiAgICAgIHJldHVybiBsaW1pdFxuICAgIH1cbiAgfVxuICByZXR1cm4gREVGQVVMVF9ISVNUT1JZX0xJTUlUXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tbWFuZERhdGE6IENPTU1BTkRfREFUQSxcbiAgY2F0ZWdvcnlEZWZzOiBDQVRFR09SWV9ERUZTLFxuICBoaXN0b3J5TGltaXRPcHRpb25zOiBISVNUT1JZX0xJTUlUX09QVElPTlMsXG4gIGRlZmF1bHRIaXN0b3J5TGltaXQ6IERFRkFVTFRfSElTVE9SWV9MSU1JVCxcbiAgYnVpbGRDb21tYW5kTG9va3VwOiBidWlsZENvbW1hbmRMb29rdXAsXG4gIG5vcm1hbGl6ZUhpc3RvcnlMaW1pdDogbm9ybWFsaXplSGlzdG9yeUxpbWl0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IEpTT04ucGFyc2UoJ3tcInBhY2thZ2VcIjpcImNvbS5zaGVsbC5saWFuZ3lpXCIsXCJuYW1lXCI6XCJTaGVsbCsrXCIsXCJ2ZXJzaW9uTmFtZVwiOlwiMS4wLjBcIixcInZlcnNpb25Db2RlXCI6MSxcIm1pblBsYXRmb3JtVmVyc2lvblwiOjEwMDAsXCJpY29uXCI6XCIvY29tbW9uL2xvZ28ucG5nXCIsXCJkZXZpY2VUeXBlTGlzdFwiOltcIndhdGNoXCJdLFwiZmVhdHVyZXNcIjpbe1wibmFtZVwiOlwic3lzdGVtLnJvdXRlclwifSx7XCJuYW1lXCI6XCJzeXN0ZW0uZmlsZVwifSx7XCJuYW1lXCI6XCJzeXN0ZW0uZGV2aWNlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS52aWJyYXRvclwifSx7XCJuYW1lXCI6XCJzeXN0ZW0ucHJvbXB0XCJ9XSxcImNvbmZpZ1wiOntcImxvZ0xldmVsXCI6XCJsb2dcIixcImRlc2lnbldpZHRoXCI6XCJkZXZpY2Utd2lkdGhcIn0sXCJyb3V0ZXJcIjp7XCJlbnRyeVwiOlwicGFnZXMvaW5kZXhcIixcInBhZ2VzXCI6e1wicGFnZXMvaW5kZXhcIjp7XCJjb21wb25lbnRcIjpcImluZGV4XCIsXCJsYXVuY2hNb2RlXCI6XCJzaW5nbGVUYXNrXCJ9LFwicGFnZXMvZGV0YWlsXCI6e1wiY29tcG9uZW50XCI6XCJkZXRhaWxcIn0sXCJwYWdlcy9sb2dcIjp7XCJjb21wb25lbnRcIjpcImxvZ1wifSxcInBhZ2VzL2luZm9cIjp7XCJjb21wb25lbnRcIjpcImluZm9cIn0sXCJwYWdlcy9zZXR0aW5nXCI6e1wiY29tcG9uZW50XCI6XCJzZXR0aW5nXCJ9LFwicGFnZXMvdGVybWluYWxcIjp7XCJjb21wb25lbnRcIjpcInRlcm1pbmFsXCIsXCJsYXVuY2hNb2RlXCI6XCJjbGVhclRhc2tcIn0sXCJwYWdlcy9oaXN0b3J5XCI6e1wiY29tcG9uZW50XCI6XCJoaXN0b3J5XCJ9LFwicGFnZXMvZmF2b3JpdGVzXCI6e1wiY29tcG9uZW50XCI6XCJmYXZvcml0ZXNcIn0sXCJwYWdlcy9hYm91dFwiOntcImNvbXBvbmVudFwiOlwiYWJvdXRcIn0sXCJwYWdlcy9zZXR0aW5nc1wiOntcImNvbXBvbmVudFwiOlwic2V0dGluZ3NcIn0sXCJwYWdlcy9kZWJ1Z1wiOntcImNvbXBvbmVudFwiOlwiZGVidWdcIn0sXCJwYWdlcy9zY3JlZW5zaG90XCI6e1wiY29tcG9uZW50XCI6XCJzY3JlZW5zaG90XCJ9fX19JykiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoKCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjExXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTFcIjsiLCI8c2NyaXB0PlxuaW1wb3J0IGZpbGUgZnJvbSBcIkBzeXN0ZW0uZmlsZVwiXG5pbXBvcnQgc2hlbGxEYXRhIGZyb20gXCIuL2NvbW1vbi9zY3JpcHRzL3NoZWxsRGF0YS5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2hlbGxEYXRhOiBzaGVsbERhdGEsXG4gIG9uQ3JlYXRlKCkge1xuICAgIGZpbGUud3JpdGVUZXh0KHtcbiAgICAgIHVyaTogXCJpbnRlcm5hbDovL2ZpbGVzL2NtZF9yZXN1bHQuanNvblwiLFxuICAgICAgdGV4dDogJ3tcInNlcVwiOi0xfScsXG4gICAgICBhcHBlbmQ6IGZhbHNlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIlNoZWxsKysgcHJvamVjdCBjcmVhdGVkXCIpXG4gIH0sXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNoZWxsKysgcHJvamVjdCBkZXN0cm95ZWRcIilcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiQ09NTUFORF9EQVRBIiwidGVtcGxhdGVzIiwiaTE4bktleSIsIml0ZW1zIiwiY21kIiwibGFiZWwiLCJkZXNjIiwiZmlsZSIsImRhbmdlciIsInN5c3RlbSIsInByb2Nlc3MiLCJuZXR3b3JrIiwiQ0FURUdPUllfREVGUyIsImlkIiwidGl0bGVLZXkiLCJwcmV2aWV3S2V5IiwiSElTVE9SWV9MSU1JVF9PUFRJT05TIiwiREVGQVVMVF9ISVNUT1JZX0xJTUlUIiwiYnVpbGRDb21tYW5kTG9va3VwIiwibG9va3VwIiwiY2F0ZWdvcnlJZCIsImhhc093blByb3BlcnR5IiwiaSIsImxlbmd0aCIsIml0ZW0iLCJub3JtYWxpemVIaXN0b3J5TGltaXQiLCJsaW1pdCIsInBhcnNlSW50IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwiY29tbWFuZERhdGEiLCJjYXRlZ29yeURlZnMiLCJoaXN0b3J5TGltaXRPcHRpb25zIiwiZGVmYXVsdEhpc3RvcnlMaW1pdCIsIm1vZHVsZSIsIkpTT04iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zaGVsbERhdGEiLCJyZXF1aXJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJzaGVsbERhdGEiLCJvbkNyZWF0ZSIsIndyaXRlVGV4dCIsInVyaSIsInRleHQiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFBQSxJQUFJQSxlQUFlOzRCQUNqQkMsV0FBVztnQ0FDVEMsU0FBUztnQ0FDVEMsT0FBTztvQ0FDTDt3Q0FBRUMsS0FBSzt3Q0FBZ0JDLE9BQU87d0NBQWlCQyxNQUFNO29DQUFpQjtvQ0FDdEU7d0NBQUVGLEtBQUs7d0NBQWdCQyxPQUFPO3dDQUFpQkMsTUFBTTtvQ0FBaUI7b0NBQ3RFO3dDQUFFRixLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQWE7b0NBQ2xFO3dDQUFFRixLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQWU7b0NBQ3BFO3dDQUFFRixLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQWE7b0NBQ2xFO3dDQUFFRixLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQWlCO29DQUN0RTt3Q0FBRUYsS0FBSzt3Q0FBZ0JDLE9BQU87d0NBQWlCQyxNQUFNO29DQUFnQjtvQ0FDckU7d0NBQUVGLEtBQUs7d0NBQWdCQyxPQUFPO3dDQUFpQkMsTUFBTTtvQ0FBaUI7b0NBQ3RFO3dDQUFFRixLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQW1CO29DQUN4RTt3Q0FBRUYsS0FBSzt3Q0FBZ0JDLE9BQU87d0NBQWlCQyxNQUFNO29DQUFl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