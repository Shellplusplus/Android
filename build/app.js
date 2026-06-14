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
                        module.exports = JSON.parse('{"package":"com.shell.liangyi","name":"Shell++","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.file"},{"name":"system.device"},{"name":"system.vibrator"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index","launchMode":"singleTask"},"pages/detail":{"component":"detail"},"pages/log":{"component":"log"},"pages/info":{"component":"info"},"pages/setting":{"component":"setting"},"pages/terminal":{"component":"terminal","launchMode":"clearTask"},"pages/about":{"component":"about"}}}}');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy9qc29ufC9ydW4vbWVkaWEvdmVudGkv5paw5Yqg5Y23L+mhueebri9WZWxhIEx1YeaWh+ahoyvlkITnp43pobnnm67mlofku7blpLkv6aG555uuLy50ZW1wX1NoZWxsKysvc3JjL21hbmlmZXN0Lmpzb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvYXBwLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gSlNPTi5wYXJzZSgne1wicGFja2FnZVwiOlwiY29tLnNoZWxsLmxpYW5neWlcIixcIm5hbWVcIjpcIlNoZWxsKytcIixcInZlcnNpb25OYW1lXCI6XCIxLjAuMFwiLFwidmVyc2lvbkNvZGVcIjoxLFwibWluUGxhdGZvcm1WZXJzaW9uXCI6MTAwMCxcImljb25cIjpcIi9jb21tb24vbG9nby5wbmdcIixcImRldmljZVR5cGVMaXN0XCI6W1wid2F0Y2hcIl0sXCJmZWF0dXJlc1wiOlt7XCJuYW1lXCI6XCJzeXN0ZW0ucm91dGVyXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5maWxlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5kZXZpY2VcIn0se1wibmFtZVwiOlwic3lzdGVtLnZpYnJhdG9yXCJ9XSxcImNvbmZpZ1wiOntcImxvZ0xldmVsXCI6XCJsb2dcIixcImRlc2lnbldpZHRoXCI6XCJkZXZpY2Utd2lkdGhcIn0sXCJyb3V0ZXJcIjp7XCJlbnRyeVwiOlwicGFnZXMvaW5kZXhcIixcInBhZ2VzXCI6e1wicGFnZXMvaW5kZXhcIjp7XCJjb21wb25lbnRcIjpcImluZGV4XCIsXCJsYXVuY2hNb2RlXCI6XCJzaW5nbGVUYXNrXCJ9LFwicGFnZXMvZGV0YWlsXCI6e1wiY29tcG9uZW50XCI6XCJkZXRhaWxcIn0sXCJwYWdlcy9sb2dcIjp7XCJjb21wb25lbnRcIjpcImxvZ1wifSxcInBhZ2VzL2luZm9cIjp7XCJjb21wb25lbnRcIjpcImluZm9cIn0sXCJwYWdlcy9zZXR0aW5nXCI6e1wiY29tcG9uZW50XCI6XCJzZXR0aW5nXCJ9LFwicGFnZXMvdGVybWluYWxcIjp7XCJjb21wb25lbnRcIjpcInRlcm1pbmFsXCIsXCJsYXVuY2hNb2RlXCI6XCJjbGVhclRhc2tcIn0sXCJwYWdlcy9hYm91dFwiOntcImNvbXBvbmVudFwiOlwiYWJvdXRcIn19fX0nKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjxzY3JpcHQ+XG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkNyZWF0ZSgpIHtcbiAgICBmaWxlLndyaXRlVGV4dCh7XG4gICAgICB1cmk6IFwiaW50ZXJuYWw6Ly9maWxlcy9jbWRfcmVzdWx0Lmpzb25cIixcbiAgICAgIHRleHQ6ICd7XCJzZXFcIjotMX0nLFxuICAgICAgYXBwZW5kOiBmYWxzZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJTaGVsbCsrIHByb2plY3QgY3JlYXRlZFwiKVxuICB9LFxuICBvbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coXCJTaGVsbCsrIHByb2plY3QgZGVzdHJveWVkXCIpXG4gIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsIkpTT04iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwib25DcmVhdGUiLCJmaWxlIiwid3JpdGVUZXh0IiwidXJpIiwidGV4dCIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7d0JBQUFBLE9BQU8sT0FBTyxHQUFHQyxLQUFLLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7b0JDQTVCQyxvQkFBb0IsQ0FBQyxHQUFHLEFBQUM7d0JBQ3hCLElBQUksQUFBc0IsWUFBdEIsT0FBT0MsWUFBeUIsT0FBT0E7d0JBQzNDLElBQUk7NEJBQ0gsT0FBTyxJQUFJLElBQUksSUFBSUMsU0FBUzt3QkFDN0IsRUFBRSxPQUFPQyxHQUFHOzRCQUNYLElBQUksQUFBa0IsWUFBbEIsT0FBT0MsUUFBcUIsT0FBT0E7d0JBQ3hDO29CQUNEOzs7b0JDUEFKLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozt3QkNDM0IsSUFBQUssVUFBQUMsdUJBQUFDLGVBQUE7d0JBQStCLFNBQUFELHVCQUFBSCxDQUFBOzRCQUFBLE9BQUFBLEtBQUFBLEVBQUFLLFVBQUEsR0FBQUwsSUFBQTtnQ0FBQU0sU0FBQU47NEJBQUE7d0JBQUE7d0JBQUEsSUFBQU8sV0FBQUMsUUFBQUYsT0FBQSxHQUVoQjs0QkFDYkc7Z0NBQ0VDLFFBQUFBLE9BQUksQ0FBQ0MsU0FBUyxDQUFDO29DQUNiQyxLQUFLO29DQUNMQyxNQUFNO29DQUNOQyxRQUFRO2dDQUNWO2dDQUNBQyxRQUFRQyxHQUFHLENBQUM7NEJBQ2Q7NEJBQ0FDO2dDQUNFRixRQUFRQyxHQUFHLENBQUM7NEJBQ2Q7d0JBQ0YifQ==