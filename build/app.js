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
                        module.exports = JSON.parse('{"package":"com.shell.liangyi","name":"Shell++","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.file"},{"name":"system.device"},{"name":"system.vibrator"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index","launchMode":"singleTask"},"pages/detail":{"component":"detail"},"pages/log":{"component":"log"},"pages/info":{"component":"info"},"pages/setting":{"component":"setting"},"pages/terminal":{"component":"terminal","launchMode":"clearTask"},"pages/history":{"component":"history"},"pages/favorites":{"component":"favorites"},"pages/about":{"component":"about"},"pages/settings":{"component":"settings"}}}}');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvY29tbW9uL3NjcmlwdHMvc2hlbGxEYXRhLmpzIiwid2VicGFjazovL1NoZWxsKysvanNvbnwvcnVuL21lZGlhL3ZlbnRpL+aWsOWKoOWNty/pobnnm64vVmVsYSBMdWHmlofmoaMr5ZCE56eN6aG555uu5paH5Lu25aS5L+mhueebri8udGVtcF9TaGVsbCsrL3NyYy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsKysvc3JjL2FwcC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ09NTUFORF9EQVRBID0ge1xuICB0ZW1wbGF0ZXM6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LnRlbXBsYXRlc1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGNtZDogXCJscyAtbCAvXCIsICAgICAgbGFiZWw6IFwiY21kLmxzUm9vdFwiLCAgICBkZXNjOiBcImNtZC5sc1Jvb3REZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImxzIC1sYSAvZGF0YVwiLCBsYWJlbDogXCJjbWQubHNEYXRhXCIsICAgIGRlc2M6IFwiY21kLmxzRGF0YURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwicHNcIiwgICAgICAgICAgIGxhYmVsOiBcImNtZC5wc1wiLCAgICAgICAgZGVzYzogXCJjbWQucHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImZyZWVcIiwgICAgICAgICBsYWJlbDogXCJjbWQuZnJlZVwiLCAgICAgIGRlc2M6IFwiY21kLmZyZWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRmXCIsICAgICAgICAgICBsYWJlbDogXCJjbWQuZGZcIiwgICAgICAgIGRlc2M6IFwiY21kLmRmRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJ1bmFtZSAtYVwiLCAgICAgbGFiZWw6IFwiY21kLnVuYW1lQVwiLCAgICBkZXNjOiBcImNtZC51bmFtZUFEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRtZXNnXCIsICAgICAgICBsYWJlbDogXCJjbWQuZG1lc2dcIiwgICAgIGRlc2M6IFwiY21kLmRtZXNnRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJ1cHRpbWVcIiwgICAgICAgbGFiZWw6IFwiY21kLnVwdGltZVwiLCAgICBkZXNjOiBcImNtZC51cHRpbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImlmY29uZmlnXCIsICAgICBsYWJlbDogXCJjbWQuaWZjb25maWdcIiwgIGRlc2M6IFwiY21kLmlmY29uZmlnRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJoZWxwXCIsICAgICAgICAgbGFiZWw6IFwiY21kLmhlbHBcIiwgICAgICBkZXNjOiBcImNtZC5oZWxwRGVzY1wiIH1cbiAgICBdXG4gIH0sXG4gIGZpbGU6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LmZpbGVcIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwibHNcIiwgICAgbGFiZWw6IFwiY21kLmxzXCIsICAgICAgZGVzYzogXCJjbWQubHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImNhdFwiLCAgIGxhYmVsOiBcImNtZC5jYXRcIiwgICAgIGRlc2M6IFwiY21kLmNhdERlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiY3BcIiwgICAgbGFiZWw6IFwiY21kLmNwXCIsICAgICAgZGVzYzogXCJjbWQuY3BEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcIm12XCIsICAgIGxhYmVsOiBcImNtZC5tdlwiLCAgICAgIGRlc2M6IFwiY21kLm12RGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJybVwiLCAgICBsYWJlbDogXCJjbWQucm1cIiwgICAgICBkZXNjOiBcImNtZC5ybURlc2NcIiwgICAgICBkYW5nZXI6IHRydWUgfSxcbiAgICAgIHsgY21kOiBcIm1rZGlyXCIsIGxhYmVsOiBcImNtZC5ta2RpclwiLCAgIGRlc2M6IFwiY21kLm1rZGlyRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJwd2RcIiwgICBsYWJlbDogXCJjbWQucHdkXCIsICAgICBkZXNjOiBcImNtZC5wd2REZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRkXCIsICAgIGxhYmVsOiBcImNtZC5kZFwiLCAgICAgIGRlc2M6IFwiY21kLmRkRGVzY1wiLCAgICAgIGRhbmdlcjogdHJ1ZSB9XG4gICAgXVxuICB9LFxuICBzeXN0ZW06IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LnN5c3RlbVwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGNtZDogXCJ1bmFtZVwiLCAgbGFiZWw6IFwiY21kLnVuYW1lXCIsICAgZGVzYzogXCJjbWQudW5hbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInVwdGltZVwiLCBsYWJlbDogXCJjbWQudXB0aW1lXCIsICBkZXNjOiBcImNtZC51cHRpbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRhdGVcIiwgICBsYWJlbDogXCJjbWQuZGF0ZVwiLCAgICBkZXNjOiBcImNtZC5kYXRlRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJkbWVzZ1wiLCAgbGFiZWw6IFwiY21kLmRtZXNnXCIsICAgZGVzYzogXCJjbWQuZG1lc2dEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImZyZWVcIiwgICBsYWJlbDogXCJjbWQuZnJlZVwiLCAgICBkZXNjOiBcImNtZC5mcmVlRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJyZWJvb3RcIiwgbGFiZWw6IFwiY21kLnJlYm9vdFwiLCAgZGVzYzogXCJjbWQucmVib290RGVzY1wiLCAgZGFuZ2VyOiB0cnVlIH1cbiAgICBdXG4gIH0sXG4gIHByb2Nlc3M6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LnByb2Nlc3NcIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwicHNcIiwgICAgbGFiZWw6IFwiY21kLnBzXCIsICAgICAgZGVzYzogXCJjbWQucHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInNsZWVwXCIsIGxhYmVsOiBcImNtZC5zbGVlcFwiLCAgIGRlc2M6IFwiY21kLnNsZWVwRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJraWxsXCIsICBsYWJlbDogXCJjbWQua2lsbFwiLCAgICBkZXNjOiBcImNtZC5raWxsRGVzY1wiLCAgICBkYW5nZXI6IHRydWUgfVxuICAgIF1cbiAgfSxcbiAgbmV0d29yazoge1xuICAgIGkxOG5LZXk6IFwiY2F0ZWdvcnkubmV0d29ya1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGNtZDogXCJpZmNvbmZpZ1wiLCBsYWJlbDogXCJjbWQuaWZjb25maWdcIiwgZGVzYzogXCJjbWQuaWZjb25maWdEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInBpbmdcIiwgICAgIGxhYmVsOiBcImNtZC5waW5nXCIsICAgICBkZXNjOiBcImNtZC5waW5nRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJjdXJsXCIsICAgICBsYWJlbDogXCJjbWQuY3VybFwiLCAgICAgZGVzYzogXCJjbWQuY3VybERlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwibnNsb29rdXBcIiwgbGFiZWw6IFwiY21kLm5zbG9va3VwXCIsIGRlc2M6IFwiY21kLm5zbG9va3VwRGVzY1wiIH1cbiAgICBdXG4gIH1cbn1cblxudmFyIENBVEVHT1JZX0RFRlMgPSBbXG4gIHsgaWQ6IFwiZmF2b3JpdGVzXCIsIHRpdGxlS2V5OiBcImNhdGVnb3J5LmZhdm9yaXRlc1wiLCBwcmV2aWV3S2V5OiBcImNhdGVnb3J5LmZhdm9yaXRlc1ByZXZpZXdcIiB9LFxuICB7IGlkOiBcInRlbXBsYXRlc1wiLCB0aXRsZUtleTogXCJjYXRlZ29yeS50ZW1wbGF0ZXNcIiwgcHJldmlld0tleTogXCJjYXRlZ29yeS50ZW1wbGF0ZXNQcmV2aWV3XCIgfSxcbiAgeyBpZDogXCJmaWxlXCIsICAgICAgdGl0bGVLZXk6IFwiY2F0ZWdvcnkuZmlsZVwiLCAgICAgIHByZXZpZXdLZXk6IFwiY2F0ZWdvcnkuZmlsZVByZXZpZXdcIiB9LFxuICB7IGlkOiBcInN5c3RlbVwiLCAgICB0aXRsZUtleTogXCJjYXRlZ29yeS5zeXN0ZW1cIiwgICAgcHJldmlld0tleTogXCJjYXRlZ29yeS5zeXN0ZW1QcmV2aWV3XCIgfSxcbiAgeyBpZDogXCJwcm9jZXNzXCIsICAgdGl0bGVLZXk6IFwiY2F0ZWdvcnkucHJvY2Vzc1wiLCAgIHByZXZpZXdLZXk6IFwiY2F0ZWdvcnkucHJvY2Vzc1ByZXZpZXdcIiB9LFxuICB7IGlkOiBcIm5ldHdvcmtcIiwgICB0aXRsZUtleTogXCJjYXRlZ29yeS5uZXR3b3JrXCIsICAgcHJldmlld0tleTogXCJjYXRlZ29yeS5uZXR3b3JrUHJldmlld1wiIH1cbl1cblxudmFyIEhJU1RPUllfTElNSVRfT1BUSU9OUyA9IFszLCA1LCAxMF1cbnZhciBERUZBVUxUX0hJU1RPUllfTElNSVQgPSA1XG5cbmZ1bmN0aW9uIGJ1aWxkQ29tbWFuZExvb2t1cCgpIHtcbiAgdmFyIGxvb2t1cCA9IHt9XG4gIGZvciAodmFyIGNhdGVnb3J5SWQgaW4gQ09NTUFORF9EQVRBKSB7XG4gICAgaWYgKCFDT01NQU5EX0RBVEEuaGFzT3duUHJvcGVydHkoY2F0ZWdvcnlJZCkpIGNvbnRpbnVlXG4gICAgdmFyIGl0ZW1zID0gQ09NTUFORF9EQVRBW2NhdGVnb3J5SWRdLml0ZW1zXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXVxuICAgICAgaWYgKCFsb29rdXBbaXRlbS5jbWRdKSB7XG4gICAgICAgIGxvb2t1cFtpdGVtLmNtZF0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBsb29rdXBcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplSGlzdG9yeUxpbWl0KGxpbWl0KSB7XG4gIGxpbWl0ID0gcGFyc2VJbnQobGltaXQpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgSElTVE9SWV9MSU1JVF9PUFRJT05TLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKEhJU1RPUllfTElNSVRfT1BUSU9OU1tpXSA9PT0gbGltaXQpIHtcbiAgICAgIHJldHVybiBsaW1pdFxuICAgIH1cbiAgfVxuICByZXR1cm4gREVGQVVMVF9ISVNUT1JZX0xJTUlUXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tbWFuZERhdGE6IENPTU1BTkRfREFUQSxcbiAgY2F0ZWdvcnlEZWZzOiBDQVRFR09SWV9ERUZTLFxuICBoaXN0b3J5TGltaXRPcHRpb25zOiBISVNUT1JZX0xJTUlUX09QVElPTlMsXG4gIGRlZmF1bHRIaXN0b3J5TGltaXQ6IERFRkFVTFRfSElTVE9SWV9MSU1JVCxcbiAgYnVpbGRDb21tYW5kTG9va3VwOiBidWlsZENvbW1hbmRMb29rdXAsXG4gIG5vcm1hbGl6ZUhpc3RvcnlMaW1pdDogbm9ybWFsaXplSGlzdG9yeUxpbWl0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IEpTT04ucGFyc2UoJ3tcInBhY2thZ2VcIjpcImNvbS5zaGVsbC5saWFuZ3lpXCIsXCJuYW1lXCI6XCJTaGVsbCsrXCIsXCJ2ZXJzaW9uTmFtZVwiOlwiMS4wLjBcIixcInZlcnNpb25Db2RlXCI6MSxcIm1pblBsYXRmb3JtVmVyc2lvblwiOjEwMDAsXCJpY29uXCI6XCIvY29tbW9uL2xvZ28ucG5nXCIsXCJkZXZpY2VUeXBlTGlzdFwiOltcIndhdGNoXCJdLFwiZmVhdHVyZXNcIjpbe1wibmFtZVwiOlwic3lzdGVtLnJvdXRlclwifSx7XCJuYW1lXCI6XCJzeXN0ZW0uZmlsZVwifSx7XCJuYW1lXCI6XCJzeXN0ZW0uZGV2aWNlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS52aWJyYXRvclwifSx7XCJuYW1lXCI6XCJzeXN0ZW0ucHJvbXB0XCJ9XSxcImNvbmZpZ1wiOntcImxvZ0xldmVsXCI6XCJsb2dcIixcImRlc2lnbldpZHRoXCI6XCJkZXZpY2Utd2lkdGhcIn0sXCJyb3V0ZXJcIjp7XCJlbnRyeVwiOlwicGFnZXMvaW5kZXhcIixcInBhZ2VzXCI6e1wicGFnZXMvaW5kZXhcIjp7XCJjb21wb25lbnRcIjpcImluZGV4XCIsXCJsYXVuY2hNb2RlXCI6XCJzaW5nbGVUYXNrXCJ9LFwicGFnZXMvZGV0YWlsXCI6e1wiY29tcG9uZW50XCI6XCJkZXRhaWxcIn0sXCJwYWdlcy9sb2dcIjp7XCJjb21wb25lbnRcIjpcImxvZ1wifSxcInBhZ2VzL2luZm9cIjp7XCJjb21wb25lbnRcIjpcImluZm9cIn0sXCJwYWdlcy9zZXR0aW5nXCI6e1wiY29tcG9uZW50XCI6XCJzZXR0aW5nXCJ9LFwicGFnZXMvdGVybWluYWxcIjp7XCJjb21wb25lbnRcIjpcInRlcm1pbmFsXCIsXCJsYXVuY2hNb2RlXCI6XCJjbGVhclRhc2tcIn0sXCJwYWdlcy9oaXN0b3J5XCI6e1wiY29tcG9uZW50XCI6XCJoaXN0b3J5XCJ9LFwicGFnZXMvZmF2b3JpdGVzXCI6e1wiY29tcG9uZW50XCI6XCJmYXZvcml0ZXNcIn0sXCJwYWdlcy9hYm91dFwiOntcImNvbXBvbmVudFwiOlwiYWJvdXRcIn0sXCJwYWdlcy9zZXR0aW5nc1wiOntcImNvbXBvbmVudFwiOlwic2V0dGluZ3NcIn19fX0nKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjxzY3JpcHQ+XG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcbmltcG9ydCBzaGVsbERhdGEgZnJvbSBcIi4vY29tbW9uL3NjcmlwdHMvc2hlbGxEYXRhLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzaGVsbERhdGE6IHNoZWxsRGF0YSxcbiAgb25DcmVhdGUoKSB7XG4gICAgZmlsZS53cml0ZVRleHQoe1xuICAgICAgdXJpOiBcImludGVybmFsOi8vZmlsZXMvY21kX3Jlc3VsdC5qc29uXCIsXG4gICAgICB0ZXh0OiAne1wic2VxXCI6LTF9JyxcbiAgICAgIGFwcGVuZDogZmFsc2VcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwiU2hlbGwrKyBwcm9qZWN0IGNyZWF0ZWRcIilcbiAgfSxcbiAgb25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKFwiU2hlbGwrKyBwcm9qZWN0IGRlc3Ryb3llZFwiKVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJDT01NQU5EX0RBVEEiLCJ0ZW1wbGF0ZXMiLCJpMThuS2V5IiwiaXRlbXMiLCJjbWQiLCJsYWJlbCIsImRlc2MiLCJmaWxlIiwiZGFuZ2VyIiwic3lzdGVtIiwicHJvY2VzcyIsIm5ldHdvcmsiLCJDQVRFR09SWV9ERUZTIiwiaWQiLCJ0aXRsZUtleSIsInByZXZpZXdLZXkiLCJISVNUT1JZX0xJTUlUX09QVElPTlMiLCJERUZBVUxUX0hJU1RPUllfTElNSVQiLCJidWlsZENvbW1hbmRMb29rdXAiLCJsb29rdXAiLCJjYXRlZ29yeUlkIiwiaGFzT3duUHJvcGVydHkiLCJpIiwibGVuZ3RoIiwiaXRlbSIsIm5vcm1hbGl6ZUhpc3RvcnlMaW1pdCIsImxpbWl0IiwicGFyc2VJbnQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJjb21tYW5kRGF0YSIsImNhdGVnb3J5RGVmcyIsImhpc3RvcnlMaW1pdE9wdGlvbnMiLCJkZWZhdWx0SGlzdG9yeUxpbWl0IiwibW9kdWxlIiwiSlNPTiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3NoZWxsRGF0YSIsInJlcXVpcmUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInNoZWxsRGF0YSIsIm9uQ3JlYXRlIiwid3JpdGVUZXh0IiwidXJpIiwidGV4dCIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUFBLElBQUlBLGVBQWU7NEJBQ2pCQyxXQUFXO2dDQUNUQyxTQUFTO2dDQUNUQyxPQUFPO29DQUNMO3dDQUFFQyxLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQWlCO29DQUN0RTt3Q0FBRUYsS0FBSzt3Q0FBZ0JDLE9BQU87d0NBQWlCQyxNQUFNO29DQUFpQjtvQ0FDdEU7d0NBQUVGLEtBQUs7d0NBQWdCQyxPQUFPO3dDQUFpQkMsTUFBTTtvQ0FBYTtvQ0FDbEU7d0NBQUVGLEtBQUs7d0NBQWdCQyxPQUFPO3dDQUFpQkMsTUFBTTtvQ0FBZTtvQ0FDcEU7d0NBQUVGLEtBQUs7d0NBQWdCQyxPQUFPO3dDQUFpQkMsTUFBTTtvQ0FBYTtvQ0FDbEU7d0NBQUVGLEtBQUs7d0NBQWdCQyxPQUFPO3dDQUFpQkMsTUFBTTtvQ0FBaUI7b0NBQ3RFO3dDQUFFRixLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQWdCO29DQUNyRTt3Q0FBRUYsS0FBSzt3Q0FBZ0JDLE9BQU87d0NBQWlCQyxNQUFNO29DQUFpQjtvQ0FDdEU7d0NBQUVGLEtBQUs7d0NBQWdCQyxPQUFPO3dDQUFpQkMsTUFBTTtvQ0FBbUI7b0NBQ3hFO3dDQUFFRixLQUFLO3dDQUFnQkMsT0FBTzt3Q0FBaUJDLE1BQU07b0NBQWU7aUNBQUM7NEJBRXpFOzRCQUNBQyxNQUFNO2dDQUNKTCxTQUFTO2dDQUNUQyxPQUFPO29DQUNMO3dDQUFFQyxLQUFLO3dDQUFTQyxPQUFPO3dDQUFlQyxNQUFNO29D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