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
                    "./src/manifest.json" (module) {
                        "use strict";
                        module.exports = JSON.parse('{"package":"com.shell.liangyi","name":"Shell++","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.file"},{"name":"system.device"},{"name":"system.vibrator"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index"},"pages/detail":{"component":"detail"},"pages/log":{"component":"log"},"pages/info":{"component":"info"},"pages/setting":{"component":"setting"},"pages/terminal":{"component":"terminal"},"pages/about":{"component":"about"}}}}');
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
                (()=>{
                    var $app_style$ = [];
                    var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.default = void 0;
                        var _system = _interopRequireDefault($app_require$1("@app-module/system.file"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var _default = exports.default = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy9qc29ufC9Vc2Vycy9pa3VuX2N4a3Byby8udGVtcF9zaGVsbC1wbHVzLXBsdXMvc3JjL21hbmlmZXN0Lmpzb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvYXBwLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gSlNPTi5wYXJzZSgne1wicGFja2FnZVwiOlwiY29tLnNoZWxsLmxpYW5neWlcIixcIm5hbWVcIjpcIlNoZWxsKytcIixcInZlcnNpb25OYW1lXCI6XCIxLjAuMFwiLFwidmVyc2lvbkNvZGVcIjoxLFwibWluUGxhdGZvcm1WZXJzaW9uXCI6MTAwMCxcImljb25cIjpcIi9jb21tb24vbG9nby5wbmdcIixcImRldmljZVR5cGVMaXN0XCI6W1wid2F0Y2hcIl0sXCJmZWF0dXJlc1wiOlt7XCJuYW1lXCI6XCJzeXN0ZW0ucm91dGVyXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5maWxlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5kZXZpY2VcIn0se1wibmFtZVwiOlwic3lzdGVtLnZpYnJhdG9yXCJ9XSxcImNvbmZpZ1wiOntcImxvZ0xldmVsXCI6XCJsb2dcIixcImRlc2lnbldpZHRoXCI6XCJkZXZpY2Utd2lkdGhcIn0sXCJyb3V0ZXJcIjp7XCJlbnRyeVwiOlwicGFnZXMvaW5kZXhcIixcInBhZ2VzXCI6e1wicGFnZXMvaW5kZXhcIjp7XCJjb21wb25lbnRcIjpcImluZGV4XCJ9LFwicGFnZXMvZGV0YWlsXCI6e1wiY29tcG9uZW50XCI6XCJkZXRhaWxcIn0sXCJwYWdlcy9sb2dcIjp7XCJjb21wb25lbnRcIjpcImxvZ1wifSxcInBhZ2VzL2luZm9cIjp7XCJjb21wb25lbnRcIjpcImluZm9cIn0sXCJwYWdlcy9zZXR0aW5nXCI6e1wiY29tcG9uZW50XCI6XCJzZXR0aW5nXCJ9LFwicGFnZXMvdGVybWluYWxcIjp7XCJjb21wb25lbnRcIjpcInRlcm1pbmFsXCJ9LFwicGFnZXMvYWJvdXRcIjp7XCJjb21wb25lbnRcIjpcImFib3V0XCJ9fX19JykiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoKCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjExXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTFcIjsiLCI8c2NyaXB0PlxuaW1wb3J0IGZpbGUgZnJvbSBcIkBzeXN0ZW0uZmlsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25DcmVhdGUoKSB7XG4gICAgZmlsZS53cml0ZVRleHQoe1xuICAgICAgdXJpOiBcImludGVybmFsOi8vZmlsZXMvY21kX3Jlc3VsdC5qc29uXCIsXG4gICAgICB0ZXh0OiAne1wic2VxXCI6LTF9JyxcbiAgICAgIGFwcGVuZDogZmFsc2VcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwiU2hlbGwrKyBwcm9qZWN0IGNyZWF0ZWRcIilcbiAgfSxcbiAgb25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKFwiU2hlbGwrKyBwcm9qZWN0IGRlc3Ryb3llZFwiKVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJKU09OIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm9uQ3JlYXRlIiwiZmlsZSIsIndyaXRlVGV4dCIsInVyaSIsInRleHQiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3dCQUFBQSxPQUFPLE9BQU8sR0FBR0MsS0FBSyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7O29CQ0E1QkMsb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBT0MsR0FBRzs0QkFDWCxJQUFJLEFBQWtCLFlBQWxCLE9BQU9DLFFBQXFCLE9BQU9BO3dCQUN4QztvQkFDRDs7O29CQ1BBSixvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7d0JDQzNCLElBQUFLLFVBQUFDLHVCQUFBQyxlQUFBO3dCQUErQixTQUFBRCx1QkFBQUgsQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBSyxVQUFBLEdBQUFMLElBQUE7Z0NBQUFNLFNBQUFOOzRCQUFBO3dCQUFBO3dCQUFBLElBQUFPLFdBQUFDLFFBQUFGLE9BQUEsR0FFaEI7NEJBQ2JHO2dDQUNFQyxRQUFBQSxPQUFJLENBQUNDLFNBQVMsQ0FBQztvQ0FDYkMsS0FBSztvQ0FDTEMsTUFBTTtvQ0FDTkMsUUFBUTtnQ0FDVjtnQ0FDQUMsUUFBUUMsR0FBRyxDQUFDOzRCQUNkOzRCQUNBQztnQ0FDRUYsUUFBUUMsR0FBRyxDQUFDOzRCQUNkO3dCQUNGIn0=