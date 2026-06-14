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
                        module.exports = JSON.parse('{"package":"com.shell.liangyi","name":"Shell++","versionName":"1.0.0","versionCode":1,"minPlatformVersion":1000,"icon":"/common/logo.png","deviceTypeList":["watch"],"features":[{"name":"system.router"},{"name":"system.file"},{"name":"system.device"},{"name":"system.vibrator"},{"name":"system.prompt"}],"config":{"logLevel":"log","designWidth":"device-width"},"router":{"entry":"pages/index","pages":{"pages/index":{"component":"index","launchMode":"singleTask"},"pages/detail":{"component":"detail"},"pages/log":{"component":"log"},"pages/info":{"component":"info"},"pages/setting":{"component":"setting"},"pages/terminal":{"component":"terminal","launchMode":"clearTask"},"pages/about":{"component":"about"},"pages/settings":{"component":"settings"}}}}');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy9qc29ufC9ydW4vbWVkaWEvdmVudGkv5paw5Yqg5Y23L+mhueebri9WZWxhIEx1YeaWh+ahoyvlkITnp43pobnnm67mlofku7blpLkv6aG555uuLy50ZW1wX1NoZWxsKysvc3JjL21hbmlmZXN0Lmpzb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvYXBwLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gSlNPTi5wYXJzZSgne1wicGFja2FnZVwiOlwiY29tLnNoZWxsLmxpYW5neWlcIixcIm5hbWVcIjpcIlNoZWxsKytcIixcInZlcnNpb25OYW1lXCI6XCIxLjAuMFwiLFwidmVyc2lvbkNvZGVcIjoxLFwibWluUGxhdGZvcm1WZXJzaW9uXCI6MTAwMCxcImljb25cIjpcIi9jb21tb24vbG9nby5wbmdcIixcImRldmljZVR5cGVMaXN0XCI6W1wid2F0Y2hcIl0sXCJmZWF0dXJlc1wiOlt7XCJuYW1lXCI6XCJzeXN0ZW0ucm91dGVyXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5maWxlXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5kZXZpY2VcIn0se1wibmFtZVwiOlwic3lzdGVtLnZpYnJhdG9yXCJ9LHtcIm5hbWVcIjpcInN5c3RlbS5wcm9tcHRcIn1dLFwiY29uZmlnXCI6e1wibG9nTGV2ZWxcIjpcImxvZ1wiLFwiZGVzaWduV2lkdGhcIjpcImRldmljZS13aWR0aFwifSxcInJvdXRlclwiOntcImVudHJ5XCI6XCJwYWdlcy9pbmRleFwiLFwicGFnZXNcIjp7XCJwYWdlcy9pbmRleFwiOntcImNvbXBvbmVudFwiOlwiaW5kZXhcIixcImxhdW5jaE1vZGVcIjpcInNpbmdsZVRhc2tcIn0sXCJwYWdlcy9kZXRhaWxcIjp7XCJjb21wb25lbnRcIjpcImRldGFpbFwifSxcInBhZ2VzL2xvZ1wiOntcImNvbXBvbmVudFwiOlwibG9nXCJ9LFwicGFnZXMvaW5mb1wiOntcImNvbXBvbmVudFwiOlwiaW5mb1wifSxcInBhZ2VzL3NldHRpbmdcIjp7XCJjb21wb25lbnRcIjpcInNldHRpbmdcIn0sXCJwYWdlcy90ZXJtaW5hbFwiOntcImNvbXBvbmVudFwiOlwidGVybWluYWxcIixcImxhdW5jaE1vZGVcIjpcImNsZWFyVGFza1wifSxcInBhZ2VzL2Fib3V0XCI6e1wiY29tcG9uZW50XCI6XCJhYm91dFwifSxcInBhZ2VzL3NldHRpbmdzXCI6e1wiY29tcG9uZW50XCI6XCJzZXR0aW5nc1wifX19fScpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKCgpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHNjcmlwdD5cbmltcG9ydCBmaWxlIGZyb20gXCJAc3lzdGVtLmZpbGVcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uQ3JlYXRlKCkge1xuICAgIGZpbGUud3JpdGVUZXh0KHtcbiAgICAgIHVyaTogXCJpbnRlcm5hbDovL2ZpbGVzL2NtZF9yZXN1bHQuanNvblwiLFxuICAgICAgdGV4dDogJ3tcInNlcVwiOi0xfScsXG4gICAgICBhcHBlbmQ6IGZhbHNlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIlNoZWxsKysgcHJvamVjdCBjcmVhdGVkXCIpXG4gIH0sXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNoZWxsKysgcHJvamVjdCBkZXN0cm95ZWRcIilcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiSlNPTiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJvbkNyZWF0ZSIsImZpbGUiLCJ3cml0ZVRleHQiLCJ1cmkiLCJ0ZXh0IiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozt3QkFBQUEsT0FBTyxPQUFPLEdBQUdDLEtBQUssS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7OztvQkNBNUJDLG9CQUFvQixDQUFDLEdBQUcsQUFBQzt3QkFDeEIsSUFBSSxBQUFzQixZQUF0QixPQUFPQyxZQUF5QixPQUFPQTt3QkFDM0MsSUFBSTs0QkFDSCxPQUFPLElBQUksSUFBSSxJQUFJQyxTQUFTO3dCQUM3QixFQUFFLE9BQU9DLEdBQUc7NEJBQ1gsSUFBSSxBQUFrQixZQUFsQixPQUFPQyxRQUFxQixPQUFPQTt3QkFDeEM7b0JBQ0Q7OztvQkNQQUosb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7O3dCQ0MzQixJQUFBSyxVQUFBQyx1QkFBQUMsZUFBQTt3QkFBK0IsU0FBQUQsdUJBQUFILENBQUE7NEJBQUEsT0FBQUEsS0FBQUEsRUFBQUssVUFBQSxHQUFBTCxJQUFBO2dDQUFBTSxTQUFBTjs0QkFBQTt3QkFBQTt3QkFBQSxJQUFBTyxXQUFBQyxRQUFBRixPQUFBLEdBRWhCOzRCQUNiRztnQ0FDRUMsUUFBQUEsT0FBSSxDQUFDQyxTQUFTLENBQUM7b0NBQ2JDLEtBQUs7b0NBQ0xDLE1BQU07b0NBQ05DLFFBQVE7Z0NBQ1Y7Z0NBQ0FDLFFBQVFDLEdBQUcsQ0FBQzs0QkFDZDs0QkFDQUM7Z0NBQ0VGLFFBQVFDLEdBQUcsQ0FBQzs0QkFDZDt3QkFDRiJ9