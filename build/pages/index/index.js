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
                                "text-danger"
                            ]
                        ],
                        {
                            color: "#ff4444"
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
                    ],
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
                                "hd-more"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "258px",
                            top: "6px",
                            width: "72px",
                            height: "72px"
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
                            borderRadius: "36px",
                            backgroundImage: "/common/more_capsule.png",
                            backgroundSize: "102px 72px"
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
                            backgroundImage: "/common/more_capsule.png",
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
                    var SYSINFO_FILE = "internal://files/system_info.json";
                    var _default = exports.default = {
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            sysTimer: null,
                            statusText: "",
                            titleTapCount: 0,
                            titleTapTimer: null
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.statusText = self.$t("index.waitingConnection");
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                        },
                        onShow () {
                            var self = this;
                            self.checkConn();
                            if (!self.sysTimer) self.sysTimer = setInterval(function() {
                                self.checkConn();
                            }, 5000);
                        },
                        onHide () {
                            if (this.sysTimer) {
                                clearInterval(this.sysTimer);
                                this.sysTimer = null;
                            }
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                            if (this.sysTimer) clearInterval(this.sysTimer);
                            if (this.titleTapTimer) clearTimeout(this.titleTapTimer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        resetTitleTap () {
                            this.titleTapCount = 0;
                            if (this.titleTapTimer) {
                                clearTimeout(this.titleTapTimer);
                                this.titleTapTimer = null;
                            }
                        },
                        onTitleTap () {
                            var self = this;
                            self.titleTapCount = self.titleTapCount + 1;
                            if (self.titleTapTimer) clearTimeout(self.titleTapTimer);
                            self.titleTapTimer = setTimeout(function() {
                                self.resetTitleTap();
                            }, 1500);
                            if (self.titleTapCount < 10) return;
                            self.resetTitleTap();
                            _system.default.push({
                                uri: "/pages/debug"
                            });
                        },
                        checkConn () {
                            var self = this;
                            _system2.default.readText({
                                uri: SYSINFO_FILE,
                                success: function(data) {
                                    try {
                                        var json = JSON.parse(data.text);
                                        if (json._init) {
                                            self.statusText = self.$t("index.disconnected");
                                            return;
                                        }
                                        if (json.timestamp) {
                                            var now = Math.floor(Date.now() / 1000);
                                            var ts = parseInt(json.timestamp);
                                            if (isNaN(ts)) {
                                                self.statusText = self.$t("index.disconnected");
                                                return;
                                            }
                                            if (now - ts > 15) {
                                                self.statusText = self.$t("index.disconnected");
                                                return;
                                            }
                                        }
                                        self.statusText = self.$t("index.connected");
                                    } catch (e) {
                                        self.statusText = self.$t("index.disconnected");
                                    }
                                },
                                fail: function() {
                                    self.statusText = self.$t("index.disconnected");
                                }
                            });
                        },
                        goTerminal () {
                            _system.default.push({
                                uri: "/pages/terminal"
                            });
                        },
                        goScreenshot () {
                            _system.default.push({
                                uri: "/pages/screenshot"
                            });
                        },
                        goDetail () {
                            _system.default.push({
                                uri: "/pages/detail"
                            });
                        },
                        goSettings () {
                            _system.default.push({
                                uri: "/pages/settings"
                            });
                        },
                        goAbout () {
                            _system.default.push({
                                uri: "/pages/about"
                            });
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
                                        events: {
                                            click: function(evt) {
                                                return _vm_.onTitleTap(evt);
                                            }
                                        },
                                        value: function() {
                                            return _vm_.$t("index.title");
                                        }
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: "/common/back.png",
                                        classList: [
                                            "hd-back"
                                        ]
                                    }
                                }, []),
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        src: "/common/More_B@1x.png",
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goAbout(evt);
                                            }
                                        },
                                        classList: [
                                            "hd-more"
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
                                                return _vm_.goAbout(evt);
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
                                        classList: [
                                            "card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goDetail(evt);
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
                                                    return _vm_.$t("index.status");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub"
                                                ],
                                                value: function() {
                                                    return _vm_.statusText;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "card",
                                            "card-primary"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goTerminal(evt);
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
                                                    return _vm_.$t("index.terminal");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub",
                                                    "card-sub-primary"
                                                ],
                                                value: function() {
                                                    return _vm_.$t("index.terminalDesc");
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goScreenshot(evt);
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
                                                    return _vm_.$t("index.screenshot");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub"
                                                ],
                                                value: function() {
                                                    return _vm_.$t("index.screenshotDesc");
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goSettings(evt);
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
                                                    return _vm_.$t("index.settings");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub"
                                                ],
                                                value: function() {
                                                    return _vm_.$t("index.settingsDesc");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXgvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsKysvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8c2Nyb2xsIGNsYXNzPVwiY29udGVudC1mdWxsXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgYm91bmNlcz1cInRydWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vaGQucG5nXCIgY2xhc3M9XCJoZWFkZXItYmdcIiAvPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpbWVcIj57eyBub3dUaW1lIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpdGxlXCIgb25jbGljaz1cIm9uVGl0bGVUYXBcIj57eyAkdChcImluZGV4LnRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vTW9yZV9CQDF4LnBuZ1wiIEBjbGljaz1cImdvQWJvdXRcIiBjbGFzcz1cImhkLW1vcmVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29BYm91dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxuXG4gICAgICAgIDwhLS0g6L+e5o6l54q25oCBIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIG9uY2xpY2s9XCJnb0RldGFpbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiaW5kZXguc3RhdHVzXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7IHN0YXR1c1RleHQgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0g57uI56uvIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLXByaW1hcnlcIiBvbmNsaWNrPVwiZ29UZXJtaW5hbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiaW5kZXgudGVybWluYWxcIikgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViIGNhcmQtc3ViLXByaW1hcnlcIj57eyAkdChcImluZGV4LnRlcm1pbmFsRGVzY1wiKSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSDmiKrlm77mn6XnnIsgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgb25jbGljaz1cImdvU2NyZWVuc2hvdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiaW5kZXguc2NyZWVuc2hvdFwiKSB9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1zdWJcIj57eyAkdChcImluZGV4LnNjcmVlbnNob3REZXNjXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIOiuvue9riAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBvbmNsaWNrPVwiZ29TZXR0aW5nc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiaW5kZXguc2V0dGluZ3NcIikgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+e3sgJHQoXCJpbmRleC5zZXR0aW5nc0Rlc2NcIikgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcblxudmFyIFNZU0lORk9fRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9zeXN0ZW1faW5mby5qc29uXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcml2YXRlOiB7XG4gICAgbm93VGltZTogXCIwMDowMFwiLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIHN5c1RpbWVyOiBudWxsLFxuICAgIHN0YXR1c1RleHQ6IFwiXCIsXG4gICAgdGl0bGVUYXBDb3VudDogMCxcbiAgICB0aXRsZVRhcFRpbWVyOiBudWxsXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi5zdGF0dXNUZXh0ID0gc2VsZi4kdChcImluZGV4LndhaXRpbmdDb25uZWN0aW9uXCIpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICB9LFxuXG4gIG9uU2hvdygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNoZWNrQ29ubigpXG4gICAgaWYgKCFzZWxmLnN5c1RpbWVyKSB7XG4gICAgICBzZWxmLnN5c1RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IHNlbGYuY2hlY2tDb25uKCkgfSwgNTAwMClcbiAgICB9XG4gIH0sXG5cbiAgb25IaWRlKCkge1xuICAgIGlmICh0aGlzLnN5c1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3lzVGltZXIpXG4gICAgICB0aGlzLnN5c1RpbWVyID0gbnVsbFxuICAgIH1cbiAgfSxcblxuICBvbkRlc3Ryb3koKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIGlmICh0aGlzLnN5c1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3lzVGltZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLnRpdGxlVGFwVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpdGxlVGFwVGltZXIpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICByZXNldFRpdGxlVGFwKCkge1xuICAgIHRoaXMudGl0bGVUYXBDb3VudCA9IDBcbiAgICBpZiAodGhpcy50aXRsZVRhcFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aXRsZVRhcFRpbWVyKVxuICAgICAgdGhpcy50aXRsZVRhcFRpbWVyID0gbnVsbFxuICAgIH1cbiAgfSxcblxuICBvblRpdGxlVGFwKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudGl0bGVUYXBDb3VudCA9IHNlbGYudGl0bGVUYXBDb3VudCArIDFcbiAgICBpZiAoc2VsZi50aXRsZVRhcFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2VsZi50aXRsZVRhcFRpbWVyKVxuICAgIH1cbiAgICBzZWxmLnRpdGxlVGFwVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5yZXNldFRpdGxlVGFwKClcbiAgICB9LCAxNTAwKVxuICAgIGlmIChzZWxmLnRpdGxlVGFwQ291bnQgPCAxMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNlbGYucmVzZXRUaXRsZVRhcCgpXG4gICAgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL2RlYnVnXCIgfSlcbiAgfSxcblxuICBjaGVja0Nvbm4oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IFNZU0lORk9fRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoZGF0YS50ZXh0KVxuICAgICAgICAgIGlmIChqc29uLl9pbml0KSB7XG4gICAgICAgICAgICBzZWxmLnN0YXR1c1RleHQgPSBzZWxmLiR0KFwiaW5kZXguZGlzY29ubmVjdGVkXCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLyog5qOA5p+l5b+D6Lez5piv5ZCm6LaF5pe277yI6LaF6L+HIDE1IOenkuinhuS4uuaWreW8gO+8iSAqL1xuICAgICAgICAgIGlmIChqc29uLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdmFyIG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgICAgICAgICB2YXIgdHMgPSBwYXJzZUludChqc29uLnRpbWVzdGFtcClcbiAgICAgICAgICAgIGlmIChpc05hTih0cykpIHtcbiAgICAgICAgICAgICAgc2VsZi5zdGF0dXNUZXh0ID0gc2VsZi4kdChcImluZGV4LmRpc2Nvbm5lY3RlZFwiKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3cgLSB0cyA+IDE1KSB7XG4gICAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJpbmRleC5kaXNjb25uZWN0ZWRcIilcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJpbmRleC5jb25uZWN0ZWRcIilcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgLyog5b+D6Lez5paH5Lu25o2f5Z2P5oiW5qC85byP5byC5bi4ICovXG4gICAgICAgICAgc2VsZi5zdGF0dXNUZXh0ID0gc2VsZi4kdChcImluZGV4LmRpc2Nvbm5lY3RlZFwiKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJpbmRleC5kaXNjb25uZWN0ZWRcIilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdvVGVybWluYWwoKSB7IHJvdXRlci5wdXNoKHsgdXJpOiBcIi9wYWdlcy90ZXJtaW5hbFwiIH0pIH0sXG4gIGdvU2NyZWVuc2hvdCgpIHsgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL3NjcmVlbnNob3RcIiB9KSB9LFxuICBnb0RldGFpbCgpICAgeyByb3V0ZXIucHVzaCh7IHVyaTogXCIvcGFnZXMvZGV0YWlsXCIgfSkgfSxcbiAgZ29TZXR0aW5ncygpIHsgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL3NldHRpbmdzXCIgfSkgfSxcbiAgZ29BYm91dCgpICAgIHsgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL2Fib3V0XCIgfSkgfSxcbiAgZ29CYWNrKCkgICAgIHsgcm91dGVyLmJhY2soKSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2NhcmQuY3NzJztcblxuLnBhZ2UgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IH1cbi5jb250ZW50LWZ1bGwgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5oZWFkZXItYXJlYSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uaGVhZGVyLWJnIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4uaGQtdGl0bGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogMzVweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDQycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNmZmZmZmY7IH1cbi5oZC1iYWNrIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA2cHg7IHRvcDogNnB4OyB3aWR0aDogNzJweDsgaGVpZ2h0OiA3MnB4OyB9XG4uaGQtdGltZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiA3cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbi5oZC1tb3JlIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAyNThweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5waWxsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5zY3JvbGwtaW5uZXIgeyBtYXJnaW4tdG9wOiAwOyBwYWRkaW5nOiAwIDZweCAyMHB4IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG5AbWVkaWEgKHNoYXBlOiByZWN0KSB7XG4gIC5zY3JvbGwtaW5uZXIgeyBtYXJnaW4tdG9wOiAtMTVweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWF4LXdpZHRoOiAxMDApIHtcbiAgLnBhZ2UgeyB3aWR0aDogMTkycHg7IGhlaWdodDogNDkwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5waWxsLW1vcmUgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vbW9yZV9jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogMTAycHggNzJweDsgfVxuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA0cHggMTZweCA0cHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5wYWdlIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5jb250ZW50LWZ1bGwgeyB3aWR0aDogMjEycHg7IGhlaWdodDogNTIwcHg7IH1cbiAgLmhlYWRlci1hcmVhIHsgZGlzcGxheTogbm9uZTsgfVxuICAucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMjEycHg7IGhlaWdodDogOTJweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5waWxsLW1vcmUtd3JhcCB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAucGlsbC1tb3JlIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL21vcmVfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDEwMnB4IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IH1cbiAgLnNjcm9sbC1pbm5lciB7IHBhZGRpbmc6IDAgNHB4IDE2cHggNHB4OyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIlNZU0lORk9fRklMRSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJub3dUaW1lIiwidGltZXIiLCJzeXNUaW1lciIsInN0YXR1c1RleHQiLCJ0aXRsZVRhcENvdW50IiwidGl0bGVUYXBUaW1lciIsIm9uSW5pdCIsInNlbGYiLCJ1cGRhdGVUaW1lIiwiJHQiLCJzZXRJbnRlcnZhbCIsIm9uU2hvdyIsImNoZWNrQ29ubiIsIm9uSGlkZSIsImNsZWFySW50ZXJ2YWwiLCJvbkRlc3Ryb3kiLCJjbGVhclRpbWVvdXQiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwicmVzZXRUaXRsZVRhcCIsIm9uVGl0bGVUYXAiLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwicHVzaCIsInVyaSIsImZpbGUiLCJyZWFkVGV4dCIsInN1Y2Nlc3MiLCJkYXRhIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJfaW5pdCIsInRpbWVzdGFtcCIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInRzIiwicGFyc2VJbnQiLCJpc05hTiIsImZhaWwiLCJnb1Rlcm1pbmFsIiwiZ29TY3JlZW5zaG90IiwiZ29EZXRhaWwiLCJnb1NldHRpbmdzIiwiZ29BYm91dCIsImdvQmFjayIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkN5RDNCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO29CQUErQixTQUFBRCx1QkFBQUcsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUUvQixJQUFJRyxlQUFlO29CQUFtQyxJQUFBQyxXQUFBQyxRQUFBSCxPQUFBLEdBRXZDO3dCQUNiSSxTQUFTOzRCQUNQQyxTQUFTOzRCQUNUQyxPQUFPOzRCQUNQQyxVQUFVOzRCQUNWQyxZQUFZOzRCQUNaQyxlQUFlOzRCQUNmQyxlQUFlO3dCQUNqQjt3QkFFQUM7NEJBQ0UsSUFBSUMsT0FBTyxJQUFJOzRCQUNmQSxLQUFLQyxVQUFVOzRCQUNmRCxLQUFLSixVQUFVLEdBQUdJLEtBQUtFLEVBQUUsQ0FBQzs0QkFDMUJGLEtBQUtOLEtBQUssR0FBR1MsWUFBWTtnQ0FBYUgsS0FBS0MsVUFBVTs0QkFBRyxHQUFHO3dCQUM3RDt3QkFFQUc7NEJBQ0UsSUFBSUosT0FBTyxJQUFJOzRCQUNmQSxLQUFLSyxTQUFTOzRCQUNkLElBQUksQ0FBQ0wsS0FBS0wsUUFBUSxFQUNoQkssS0FBS0wsUUFBUSxHQUFHUSxZQUFZO2dDQUFhSCxLQUFLSyxTQUFTOzRCQUFHLEdBQUc7d0JBRWpFO3dCQUVBQzs0QkFDRSxJQUFJLElBQUksQ0FBQ1gsUUFBUSxFQUFFO2dDQUNqQlksY0FBYyxJQUFJLENBQUNaLFFBQVE7Z0NBQzNCLElBQUksQ0FBQ0EsUUFBUSxHQUFHOzRCQUNsQjt3QkFDRjt3QkFFQWE7NEJBQ0VELGNBQWMsSUFBSSxDQUFDYixLQUFLOzRCQUN4QixJQUFJLElBQUksQ0FBQ0MsUUFBUSxFQUNmWSxjQUFjLElBQUksQ0FBQ1osUUFBUTs0QkFFN0IsSUFBSSxJQUFJLENBQUNHLGFBQWEsRUFDcEJXLGFBQWEsSUFBSSxDQUFDWCxhQUFhO3dCQUVuQzt3QkFFQUc7NEJBQ0UsSUFBSVMsSUFBSSxJQUFJQzs0QkFDWixJQUFJLENBQUNsQixPQUFPLEdBQUcsQUFBQyxPQUFNaUIsRUFBRUUsUUFBUSxFQUFDLEVBQUdDLEtBQUssQ0FBQyxNQUFNLE1BQU0sQUFBQyxPQUFNSCxFQUFFSSxVQUFVLEVBQUMsRUFBR0QsS0FBSyxDQUFDO3dCQUNyRjt3QkFFQUU7NEJBQ0UsSUFBSSxDQUFDbEIsYUFBYSxHQUFHOzRCQUNyQixJQUFJLElBQUksQ0FBQ0MsYUFBYSxFQUFFO2dDQUN0QlcsYUFBYSxJQUFJLENBQUNYLGFBQWE7Z0NBQy9CLElBQUksQ0FBQ0EsYUFBYSxHQUFHOzRCQUN2Qjt3QkFDRjt3QkFFQWtCOzRCQUNFLElBQUloQixPQUFPLElBQUk7NEJBQ2ZBLEtBQUtILGFBQWEsR0FBR0csS0FBS0gsYUFBYSxHQUFHOzRCQUMxQyxJQUFJRyxLQUFLRixhQUFhLEVBQ3BCVyxhQUFhVCxLQUFLRixhQUFhOzRCQUVqQ0UsS0FBS0YsYUFBYSxHQUFHbUIsV0FBVztnQ0FDOUJqQixLQUFLZSxhQUFhOzRCQUNwQixHQUFHOzRCQUNILElBQUlmLEtBQUtILGFBQWEsR0FBRyxJQUN2Qjs0QkFFRkcsS0FBS2UsYUFBYTs0QkFDbEJHLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUFFQyxLQUFLOzRCQUFlO3dCQUNwQzt3QkFFQWY7NEJBQ0UsSUFBSUwsT0FBTyxJQUFJOzRCQUNmcUIsU0FBQUEsT0FBSSxDQUFDQyxRQUFRLENBQUM7Z0NBQ1pGLEtBQUsvQjtnQ0FDTGtDLFNBQVMsU0FBU0MsSUFBSTtvQ0FDcEIsSUFBSTt3Q0FDRixJQUFJQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNILEtBQUtJLElBQUk7d0NBQy9CLElBQUlILEtBQUtJLEtBQUssRUFBRTs0Q0FDZDdCLEtBQUtKLFVBQVUsR0FBR0ksS0FBS0UsRUFBRSxDQUFDOzRDQUMxQjt3Q0FDRjt3Q0FFQSxJQUFJdUIsS0FBS0ssU0FBUyxFQUFFOzRDQUNsQixJQUFJQyxNQUFNQyxLQUFLQyxLQUFLLENBQUN0QixLQUFLb0IsR0FBRyxLQUFLOzRDQUNsQyxJQUFJRyxLQUFLQyxTQUFTVixLQUFLSyxTQUFTOzRDQUNoQyxJQUFJTSxNQUFNRixLQUFLO2dEQUNibEMsS0FBS0osVUFBVSxHQUFHSSxLQUFLRSxFQUFFLENBQUM7Z0RBQzFCOzRDQUNGOzRDQUNBLElBQUk2QixNQUFNRyxLQUFLLElBQUk7Z0RBQ2pCbEMsS0FBS0osVUFBVSxHQUFHSSxLQUFLRSxFQUFFLENBQUM7Z0RBQzFCOzRDQUNGO3dDQUNGO3dDQUNBRixLQUFLSixVQUFVLEdBQUdJLEtBQUtFLEVBQUUsQ0FBQztvQ0FDNUIsRUFBRSxPQUFNaEIsR0FBRzt3Q0FFVGMsS0FBS0osVUFBVSxHQUFHSSxLQUFLRSxFQUFFLENBQUM7b0NBQzVCO2dDQUNGO2dDQUNBbUMsTUFBTTtvQ0FDSnJDLEtBQUtKLFVBQVUsR0FBR0ksS0FBS0UsRUFBRSxDQUFDO2dDQUM1Qjs0QkFDRjt3QkFDRjt3QkFFQW9DOzRCQUFlcEIsUUFBQUEsT0FBTSxDQUFDQyxJQUFJLENBQUM7Z0NBQUVDLEtBQUs7NEJBQWtCO3dCQUFHO3dCQUN2RG1COzRCQUFpQnJCLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUFFQyxLQUFLOzRCQUFvQjt3QkFBRzt3QkFDM0RvQjs0QkFBZXRCLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUFFQyxLQUFLOzRCQUFnQjt3QkFBRzt3QkFDckRxQjs0QkFBZXZCLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUFFQyxLQUFLOzRCQUFrQjt3QkFBRzt3QkFDdkRzQjs0QkFBZXhCLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUFFQyxLQUFLOzRCQUFlO3dCQUFHO3dCQUNwRHVCOzRCQUFlekIsUUFBQUEsT0FBTSxDQUFDMEIsSUFBSTt3QkFBRztvQkFDL0IifQ==