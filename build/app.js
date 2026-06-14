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
                                console.log("Shell project created");
                            },
                            onDestroy () {
                                console.log("Shell project destroyed");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwvanNvbnwvcnVuL21lZGlhL3ZlbnRpL+aWsOWKoOWNty/pobnnm64vVmVsYSBMdWHmlofmoaMr5ZCE56eN6aG555uu5paH5Lu25aS5L+mhueebri8udGVtcF9TaGVsbCsrL3NyYy9tYW5pZmVzdC5qc29uIiwid2VicGFjazovL1NoZWxsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vU2hlbGwvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsL3NyYy9hcHAudXgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBKU09OLnBhcnNlKCd7XCJwYWNrYWdlXCI6XCJjb20uc2hlbGwubGlhbmd5aVwiLFwibmFtZVwiOlwiU2hlbGwrK1wiLFwidmVyc2lvbk5hbWVcIjpcIjEuMC4wXCIsXCJ2ZXJzaW9uQ29kZVwiOjEsXCJtaW5QbGF0Zm9ybVZlcnNpb25cIjoxMDAwLFwiaWNvblwiOlwiL2NvbW1vbi9sb2dvLnBuZ1wiLFwiZGV2aWNlVHlwZUxpc3RcIjpbXCJ3YXRjaFwiXSxcImZlYXR1cmVzXCI6W3tcIm5hbWVcIjpcInN5c3RlbS5yb3V0ZXJcIn0se1wibmFtZVwiOlwic3lzdGVtLmZpbGVcIn0se1wibmFtZVwiOlwic3lzdGVtLmRldmljZVwifSx7XCJuYW1lXCI6XCJzeXN0ZW0udmlicmF0b3JcIn1dLFwiY29uZmlnXCI6e1wibG9nTGV2ZWxcIjpcImxvZ1wiLFwiZGVzaWduV2lkdGhcIjpcImRldmljZS13aWR0aFwifSxcInJvdXRlclwiOntcImVudHJ5XCI6XCJwYWdlcy9pbmRleFwiLFwicGFnZXNcIjp7XCJwYWdlcy9pbmRleFwiOntcImNvbXBvbmVudFwiOlwiaW5kZXhcIn0sXCJwYWdlcy9kZXRhaWxcIjp7XCJjb21wb25lbnRcIjpcImRldGFpbFwifSxcInBhZ2VzL2xvZ1wiOntcImNvbXBvbmVudFwiOlwibG9nXCJ9LFwicGFnZXMvaW5mb1wiOntcImNvbXBvbmVudFwiOlwiaW5mb1wifSxcInBhZ2VzL3NldHRpbmdcIjp7XCJjb21wb25lbnRcIjpcInNldHRpbmdcIn0sXCJwYWdlcy90ZXJtaW5hbFwiOntcImNvbXBvbmVudFwiOlwidGVybWluYWxcIn0sXCJwYWdlcy9hYm91dFwiOntcImNvbXBvbmVudFwiOlwiYWJvdXRcIn19fX0nKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjxzY3JpcHQ+XG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbkNyZWF0ZSgpIHtcbiAgICBmaWxlLndyaXRlVGV4dCh7XG4gICAgICB1cmk6IFwiaW50ZXJuYWw6Ly9maWxlcy9jbWRfcmVzdWx0Lmpzb25cIixcbiAgICAgIHRleHQ6ICd7XCJzZXFcIjotMX0nLFxuICAgICAgYXBwZW5kOiBmYWxzZVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJTaGVsbCBwcm9qZWN0IGNyZWF0ZWRcIilcbiAgfSxcbiAgb25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKFwiU2hlbGwgcHJvamVjdCBkZXN0cm95ZWRcIilcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiSlNPTiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJvbkNyZWF0ZSIsImZpbGUiLCJ3cml0ZVRleHQiLCJ1cmkiLCJ0ZXh0IiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozt3QkFBQUEsT0FBTyxPQUFPLEdBQUdDLEtBQUssS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7OztvQkNBNUJDLG9CQUFvQixDQUFDLEdBQUcsQUFBQzt3QkFDeEIsSUFBSSxBQUFzQixZQUF0QixPQUFPQyxZQUF5QixPQUFPQTt3QkFDM0MsSUFBSTs0QkFDSCxPQUFPLElBQUksSUFBSSxJQUFJQyxTQUFTO3dCQUM3QixFQUFFLE9BQU9DLEdBQUc7NEJBQ1gsSUFBSSxBQUFrQixZQUFsQixPQUFPQyxRQUFxQixPQUFPQTt3QkFDeEM7b0JBQ0Q7OztvQkNQQUosb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7O3dCQ0MzQixJQUFBSyxVQUFBQyx1QkFBQUMsZUFBQTt3QkFBK0IsU0FBQUQsdUJBQUFILENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUssVUFBQSxHQUFBTCxJQUFBO2dDQUFBTSxTQUFBTjs0QkFBQTt3QkFBQTt3QkFBQSxJQUFBTyxXQUFBQyxRQUFBRixPQUFBLEdBRWhCOzRCQUNiRztnQ0FDRUMsUUFBQUEsT0FBSSxDQUFDQyxTQUFTLENBQUM7b0NBQ2JDLEtBQUs7b0NBQ0xDLE1BQU07b0NBQ05DLFFBQVE7Z0NBQ1Y7Z0NBQ0FDLFFBQVFDLEdBQUcsQ0FBQzs0QkFDZDs0QkFDQUM7Z0NBQ0VGLFFBQVFDLEdBQUcsQ0FBQzs0QkFDZDt3QkFDRiJ9