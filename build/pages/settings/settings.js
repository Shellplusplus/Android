export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
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
                    __webpack_require__.rv = ()=>"1.7.11";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.11";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "336px",
                            height: "480px",
                            backgroundColor: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "content-full"
                            ]
                        ],
                        {
                            width: "336px",
                            height: "480px",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "header-area"
                            ]
                        ],
                        {
                            width: "336px",
                            height: "102px",
                            position: "relative"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "header-bg"
                            ]
                        ],
                        {
                            width: "336px",
                            height: "102px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hd-title"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "78px",
                            top: "35px",
                            width: "180px",
                            height: "42px",
                            textAlign: "center",
                            fontSize: "32px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hd-back"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "6px",
                            top: "6px",
                            width: "72px",
                            height: "72px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hd-time"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "78px",
                            top: "7px",
                            width: "180px",
                            height: "32px",
                            textAlign: "center",
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "rgba(255, 255, 255, 0.6)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "pill-header"
                            ]
                        ],
                        {
                            display: "none"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "scroll-inner"
                            ]
                        ],
                        {
                            marginTop: 0,
                            paddingTop: "0",
                            paddingRight: "6px",
                            paddingBottom: "20px",
                            paddingLeft: "6px",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "card"
                            ]
                        ],
                        {
                            width: "324px",
                            height: "112px",
                            marginTop: "8px",
                            backgroundColor: "#262626",
                            borderRadius: "36px",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "card-left"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            flex: 1
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "card-label"
                            ]
                        ],
                        {
                            fontSize: "32px",
                            lineHeight: "40px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            lines: 1
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "card-sub"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            lineHeight: "37px",
                            fontWeight: "bold",
                            color: "rgba(255, 255, 255, 0.6)",
                            marginTop: "4px",
                            lines: 1
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "card-primary"
                            ]
                        ],
                        {
                            backgroundColor: "#0d6eff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "card-sub-primary"
                            ]
                        ],
                        {
                            color: "rgba(255, 255, 255, 0.7)"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "spacer"
                            ]
                        ],
                        {
                            height: "20px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:rect)"
                        },
                        [
                            [
                                0,
                                "scroll-inner"
                            ]
                        ],
                        {
                            marginTop: "-15px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "490px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "content-full"
                            ]
                        ],
                        {
                            width: "192px",
                            height: "490px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "header-area"
                            ]
                        ],
                        {
                            display: "none"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "pill-header"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "192px",
                            height: "92px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "pill-more-wrap"
                            ]
                        ],
                        {
                            width: "102px",
                            height: "72px",
                            borderRadius: "36px",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "pill-more"
                            ]
                        ],
                        {
                            width: "102px",
                            height: "72px",
                            backgroundImage: "/common/back_capsule.png",
                            backgroundSize: "102px 72px",
                            borderRadius: "36px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "scroll-inner"
                            ]
                        ],
                        {
                            paddingTop: "0",
                            paddingRight: "4px",
                            paddingBottom: "16px",
                            paddingLeft: "4px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "card"
                            ]
                        ],
                        {
                            width: "184px",
                            height: "110px",
                            borderRadius: "27px",
                            paddingLeft: "14px",
                            paddingRight: "16px",
                            marginTop: "8px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "card-label"
                            ]
                        ],
                        {
                            fontSize: "32px",
                            lineHeight: "38px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "card-sub"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            lineHeight: "34px",
                            marginTop: "6px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "spacer"
                            ]
                        ],
                        {
                            height: "16px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "212px",
                            height: "520px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "content-full"
                            ]
                        ],
                        {
                            width: "212px",
                            height: "520px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "header-area"
                            ]
                        ],
                        {
                            display: "none"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "pill-header"
                            ]
                        ],
                        {
                            display: "flex",
                            width: "212px",
                            height: "92px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "pill-more-wrap"
                            ]
                        ],
                        {
                            width: "102px",
                            height: "72px",
                            borderRadius: "36px",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "pill-more"
                            ]
                        ],
                        {
                            width: "102px",
                            height: "72px",
                            backgroundImage: "/common/back_capsule.png",
                            backgroundSize: "102px 72px",
                            borderRadius: "36px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "scroll-inner"
                            ]
                        ],
                        {
                            paddingTop: "0",
                            paddingRight: "4px",
                            paddingBottom: "16px",
                            paddingLeft: "4px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "card"
                            ]
                        ],
                        {
                            width: "204px",
                            height: "110px",
                            borderRadius: "27px",
                            paddingLeft: "14px",
                            paddingRight: "16px",
                            marginTop: "8px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "card-label"
                            ]
                        ],
                        {
                            fontSize: "32px",
                            lineHeight: "38px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "card-sub"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            lineHeight: "34px",
                            marginTop: "9px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "spacer"
                            ]
                        ],
                        {
                            height: "16px"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var DEBUG_FILE = "internal://files/debug_mode.json";
                    var _default = exports.default = {
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            debugEnabled: false,
                            debugStatusText: "",
                            debugCardClass: "",
                            debugSubClass: "",
                            pendingEnable: false
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            self.loadDebugMode();
                        },
                        onShow () {
                            if (this.pendingEnable) {
                                this.pendingEnable = false;
                                this.writeDebugMode(true);
                            }
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        loadDebugMode () {
                            var self = this;
                            _system2.default.readText({
                                uri: DEBUG_FILE,
                                success: function(data) {
                                    try {
                                        var json = JSON.parse(data.text);
                                        self.debugEnabled = true === json.enabled;
                                    } catch (e) {
                                        self.debugEnabled = false;
                                    }
                                    self.updateDebugText();
                                },
                                fail: function() {
                                    self.debugEnabled = false;
                                    self.updateDebugText();
                                }
                            });
                        },
                        updateDebugText () {
                            if (this.debugEnabled) {
                                this.debugStatusText = this.$t("settings.debugOn");
                                this.debugCardClass = "card-primary";
                                this.debugSubClass = "card-sub-primary";
                            } else {
                                this.debugStatusText = this.$t("settings.debugOff");
                                this.debugCardClass = "";
                                this.debugSubClass = "";
                            }
                        },
                        writeDebugMode (enabled) {
                            var self = this;
                            _system2.default.writeText({
                                uri: DEBUG_FILE,
                                text: JSON.stringify({
                                    enabled: enabled
                                }),
                                append: false,
                                success: function() {
                                    self.debugEnabled = enabled;
                                    self.updateDebugText();
                                }
                            });
                        },
                        toggleDebug () {
                            var self = this;
                            if (self.debugEnabled) self.writeDebugMode(false);
                            else {
                                self.pendingEnable = true;
                                var disclaimer = self.$t("settings.disclaimer");
                                _system.default.push({
                                    uri: "/pages/log",
                                    params: {
                                        content: disclaimer,
                                        title: self.$t("settings.disclaimerTitle")
                                    }
                                });
                            }
                        },
                        goBack () {
                            _system.default.back();
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ]
                        }
                    }, [
                        aiot.__ce__("scroll", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "content-full"
                                ],
                                scrollY: "true",
                                bounces: "true"
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "header-area"
                                    ]
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: "/common/hd.png",
                                        classList: [
                                            "header-bg"
                                        ]
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "hd-time"
                                        ],
                                        value: function() {
                                            return _vm_.nowTime;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "hd-title"
                                        ],
                                        value: function() {
                                            return _vm_.$t("settings.title");
                                        }
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: "/common/back.png",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goBack(evt);
                                            }
                                        },
                                        classList: [
                                            "hd-back"
                                        ]
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "pill-header"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "pill-more-wrap"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goBack(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "pill-more"
                                            ]
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "scroll-inner"
                                    ]
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: function() {
                                            const $classValue$ = "card " + _vm_.debugCardClass;
                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                            return $classValue$;
                                        },
                                        events: {
                                            click: function(evt) {
                                                return _vm_.toggleDebug(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "card-left"
                                            ]
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-label"
                                                ],
                                                value: function() {
                                                    return _vm_.$t("settings.debugMode");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: function() {
                                                    const $classValue$ = "card-sub " + _vm_.debugSubClass;
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                },
                                                value: function() {
                                                    return _vm_.debugStatusText;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "spacer"
                                        ]
                                    }
                                }, [])
                            ])
                        ])
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsKysvc3JjL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8c2Nyb2xsIGNsYXNzPVwiY29udGVudC1mdWxsXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgYm91bmNlcz1cInRydWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vaGQucG5nXCIgY2xhc3M9XCJoZWFkZXItYmdcIiAvPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpbWVcIj57eyBub3dUaW1lIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpdGxlXCI+e3sgJHQoXCJzZXR0aW5ncy50aXRsZVwiKSB9fTwvdGV4dD5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2JhY2sucG5nXCIgQGNsaWNrPVwiZ29CYWNrXCIgY2xhc3M9XCJoZC1iYWNrXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBpbGwtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmUtd3JhcFwiIEBjbGljaz1cImdvQmFja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxuXG4gICAgICAgIDwhLS0g6LCD6K+V5qih5byPIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB7eyBkZWJ1Z0NhcmRDbGFzcyB9fVwiIG9uY2xpY2s9XCJ0b2dnbGVEZWJ1Z1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwic2V0dGluZ3MuZGVidWdNb2RlXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YiB7eyBkZWJ1Z1N1YkNsYXNzIH19XCI+e3sgZGVidWdTdGF0dXNUZXh0IH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Njcm9sbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuaW1wb3J0IGZpbGUgZnJvbSBcIkBzeXN0ZW0uZmlsZVwiXG5cbnZhciBERUJVR19GSUxFID0gXCJpbnRlcm5hbDovL2ZpbGVzL2RlYnVnX21vZGUuanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJpdmF0ZToge1xuICAgIG5vd1RpbWU6IFwiMDA6MDBcIixcbiAgICB0aW1lcjogbnVsbCxcbiAgICBkZWJ1Z0VuYWJsZWQ6IGZhbHNlLFxuICAgIGRlYnVnU3RhdHVzVGV4dDogXCJcIixcbiAgICBkZWJ1Z0NhcmRDbGFzczogXCJcIixcbiAgICBkZWJ1Z1N1YkNsYXNzOiBcIlwiLFxuICAgIHBlbmRpbmdFbmFibGU6IGZhbHNlXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICAgIHNlbGYubG9hZERlYnVnTW9kZSgpXG4gIH0sXG5cbiAgb25TaG93KCkge1xuICAgIC8qIOS7juWFjei0o+WjsOaYjui/lOWbnuWQju+8jOaJp+ihjOW+heWumueahOiwg+ivleaooeW8j+W8gOWQryAqL1xuICAgIGlmICh0aGlzLnBlbmRpbmdFbmFibGUpIHtcbiAgICAgIHRoaXMucGVuZGluZ0VuYWJsZSA9IGZhbHNlXG4gICAgICB0aGlzLndyaXRlRGVidWdNb2RlKHRydWUpXG4gICAgfVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIGxvYWREZWJ1Z01vZGUoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IERFQlVHX0ZJTEUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICBzZWxmLmRlYnVnRW5hYmxlZCA9IGpzb24uZW5hYmxlZCA9PT0gdHJ1ZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICBzZWxmLmRlYnVnRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi51cGRhdGVEZWJ1Z1RleHQoKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmRlYnVnRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHNlbGYudXBkYXRlRGVidWdUZXh0KClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHVwZGF0ZURlYnVnVGV4dCgpIHtcbiAgICBpZiAodGhpcy5kZWJ1Z0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGVidWdTdGF0dXNUZXh0ID0gdGhpcy4kdChcInNldHRpbmdzLmRlYnVnT25cIilcbiAgICAgIHRoaXMuZGVidWdDYXJkQ2xhc3MgPSBcImNhcmQtcHJpbWFyeVwiXG4gICAgICB0aGlzLmRlYnVnU3ViQ2xhc3MgPSBcImNhcmQtc3ViLXByaW1hcnlcIlxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnU3RhdHVzVGV4dCA9IHRoaXMuJHQoXCJzZXR0aW5ncy5kZWJ1Z09mZlwiKVxuICAgICAgdGhpcy5kZWJ1Z0NhcmRDbGFzcyA9IFwiXCJcbiAgICAgIHRoaXMuZGVidWdTdWJDbGFzcyA9IFwiXCJcbiAgICB9XG4gIH0sXG5cbiAgd3JpdGVEZWJ1Z01vZGUoZW5hYmxlZCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUud3JpdGVUZXh0KHtcbiAgICAgIHVyaTogREVCVUdfRklMRSxcbiAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHsgZW5hYmxlZDogZW5hYmxlZCB9KSxcbiAgICAgIGFwcGVuZDogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5kZWJ1Z0VuYWJsZWQgPSBlbmFibGVkXG4gICAgICAgIHNlbGYudXBkYXRlRGVidWdUZXh0KClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHRvZ2dsZURlYnVnKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGlmIChzZWxmLmRlYnVnRW5hYmxlZCkge1xuICAgICAgLyog5YWz6Zet77ya55u05o6l5YaZ5YWlICovXG4gICAgICBzZWxmLndyaXRlRGVidWdNb2RlKGZhbHNlKVxuICAgIH0gZWxzZSB7XG4gICAgICAvKiDlvIDlkK/vvJrlhYjlsZXnpLrlhY3otKPlo7DmmI4gKi9cbiAgICAgIHNlbGYucGVuZGluZ0VuYWJsZSA9IHRydWVcbiAgICAgIHZhciBkaXNjbGFpbWVyID0gc2VsZi4kdChcInNldHRpbmdzLmRpc2NsYWltZXJcIilcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiBcIi9wYWdlcy9sb2dcIiwgcGFyYW1zOiB7IGNvbnRlbnQ6IGRpc2NsYWltZXIsIHRpdGxlOiBzZWxmLiR0KFwic2V0dGluZ3MuZGlzY2xhaW1lclRpdGxlXCIpIH0gfSlcbiAgICB9XG4gIH0sXG5cbiAgZ29CYWNrKCkgeyByb3V0ZXIuYmFjaygpIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucGFnZSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiA0ODBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgfVxuLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiA0ODBweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLmhlYWRlci1hcmVhIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5oZWFkZXItYmcgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IH1cbi5oZC10aXRsZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiAzNXB4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogNDJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgfVxuLmhkLWJhY2sgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDZweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5oZC10aW1lIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3OHB4OyB0b3A6IDdweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDMycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgfVxuLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogbm9uZTsgfVxuLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IDA7IHBhZGRpbmc6IDAgNnB4IDIwcHggNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uY2FyZCB7IHdpZHRoOiAzMjRweDsgaGVpZ2h0OiAxMTJweDsgbWFyZ2luLXRvcDogOHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2OyBib3JkZXItcmFkaXVzOiAzNnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nLWxlZnQ6IDIwcHg7IHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cbi5jYXJkLWxlZnQgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBmbGV4OiAxOyB9XG4uY2FyZC1sYWJlbCB7IGZvbnQtc2l6ZTogMzJweDsgbGluZS1oZWlnaHQ6IDQwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgbGluZXM6IDE7IH1cbi5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM3cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOyBtYXJnaW4tdG9wOiA0cHg7IGxpbmVzOiAxOyB9XG4uY2FyZC1wcmltYXJ5IHsgYmFja2dyb3VuZC1jb2xvcjogIzBENkVGRjsgfVxuLmNhcmQtc3ViLXByaW1hcnkgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyB9XG4uc3BhY2VyIHsgaGVpZ2h0OiAyMHB4OyB9XG5cbkBtZWRpYSAoc2hhcGU6IHJlY3QpIHtcbiAgLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC0xNXB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDQ5MHB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDRweCAxNnB4IDRweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxODRweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDMycHg7IGxpbmUtaGVpZ2h0OiAzOHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM0cHg7IG1hcmdpbi10b3A6IDZweDsgfVxuICAuc3BhY2VyIHsgaGVpZ2h0OiAxNnB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtaW4td2lkdGg6IDEwMSkge1xuICAucGFnZSB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDRweCAxNnB4IDRweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAyMDRweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDMycHg7IGxpbmUtaGVpZ2h0OiAzOHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM0cHg7IG1hcmdpbi10b3A6IDlweDsgfVxuICAuc3BhY2VyIHsgaGVpZ2h0OiAxNnB4OyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkRFQlVHX0ZJTEUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwiZGVidWdFbmFibGVkIiwiZGVidWdTdGF0dXNUZXh0IiwiZGVidWdDYXJkQ2xhc3MiLCJkZWJ1Z1N1YkNsYXNzIiwicGVuZGluZ0VuYWJsZSIsIm9uSW5pdCIsInNlbGYiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJsb2FkRGVidWdNb2RlIiwib25TaG93Iiwid3JpdGVEZWJ1Z01vZGUiLCJvbkRlc3Ryb3kiLCJjbGVhckludGVydmFsIiwiZCIsIkRhdGUiLCJnZXRIb3VycyIsInNsaWNlIiwiZ2V0TWludXRlcyIsImZpbGUiLCJyZWFkVGV4dCIsInVyaSIsInN1Y2Nlc3MiLCJkYXRhIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJlbmFibGVkIiwidXBkYXRlRGVidWdUZXh0IiwiZmFpbCIsIiR0Iiwid3JpdGVUZXh0Iiwic3RyaW5naWZ5IiwiYXBwZW5kIiwidG9nZ2xlRGVidWciLCJkaXNjbGFpbWVyIiwicm91dGVyIiwicHVzaCIsInBhcmFtcyIsImNvbnRlbnQiLCJ0aXRsZSIsImdvQmFjayIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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