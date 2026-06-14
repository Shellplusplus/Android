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
                                "pill-header"
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
                            width: "92px",
                            height: "72px",
                            borderRadius: "32px",
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
                            width: "92px",
                            height: "72px",
                            backgroundImage: "/common/back_capsule.png",
                            backgroundSize: "92px 72px",
                            borderRadius: "32px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "hd-title"
                            ]
                        ],
                        {
                            width: "192px",
                            top: "22px",
                            fontSize: "22px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "hd-back"
                            ]
                        ],
                        {
                            left: "4px",
                            top: "4px",
                            width: "52px",
                            height: "52px"
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
                                "hd-title"
                            ]
                        ],
                        {
                            width: "212px",
                            top: "22px",
                            fontSize: "22px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "hd-back"
                            ]
                        ],
                        {
                            left: "4px",
                            top: "4px",
                            width: "52px",
                            height: "52px"
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
                            refreshTimer: null,
                            luaConnected: false,
                            lastHeartbeat: ""
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                        },
                        onShow () {
                            var self = this;
                            self.refresh();
                            if (!self.refreshTimer) self.refreshTimer = setInterval(function() {
                                self.refresh();
                            }, 2000);
                        },
                        onHide () {
                            if (this.refreshTimer) {
                                clearInterval(this.refreshTimer);
                                this.refreshTimer = null;
                            }
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                            if (this.refreshTimer) clearInterval(this.refreshTimer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        refresh () {
                            var self = this;
                            _system2.default.readText({
                                uri: SYSINFO_FILE,
                                success: function(data) {
                                    try {
                                        var json = JSON.parse(data.text);
                                        if (json._init) {
                                            self.luaConnected = false;
                                            self.lastHeartbeat = "";
                                            return;
                                        }
                                        if (json.timestamp) {
                                            var now = Math.floor(Date.now() / 1000);
                                            var ts = parseInt(json.timestamp);
                                            if (isNaN(ts)) {
                                                self.luaConnected = false;
                                                self.lastHeartbeat = "";
                                                return;
                                            }
                                            if (now - ts > 15) {
                                                self.luaConnected = false;
                                                self.lastHeartbeat = json.timestamp + " (" + self.$t("detail.timeout") + ")";
                                                return;
                                            }
                                        }
                                        self.luaConnected = true;
                                        var ht = parseInt(json.timestamp);
                                        if (isNaN(ht)) self.lastHeartbeat = json.timestamp || self.$t("detail.unknown");
                                        else {
                                            var d = new Date(1000 * ht);
                                            self.lastHeartbeat = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
                                        }
                                    } catch (e) {
                                        self.luaConnected = false;
                                        self.lastHeartbeat = "";
                                    }
                                },
                                fail: function() {
                                    self.luaConnected = false;
                                    self.lastHeartbeat = "";
                                }
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
                                        value: function() {
                                            return _vm_.$t("detail.title");
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
                                        classList: [
                                            "card",
                                            "card-primary"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.refresh(evt);
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
                                                    return _vm_.$t("detail.status");
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
                                                    return _vm_.luaConnected ? _vm_.$t("detail.connected") : _vm_.$t("detail.disconnected");
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
                                        ]
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
                                                    return _vm_.$t("detail.lastSync");
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
                                                    return _vm_.lastHeartbeat || _vm_.$t("detail.none");
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
                                        ]
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
                                                    return _vm_.$t("detail.dataDir");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub"
                                                ],
                                                value: "/data/quickapp/files/com.shell.liangyi/"
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "card"
                                        ]
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
                                                    return _vm_.$t("detail.luaBackend");
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
                                                    return _vm_.luaConnected ? _vm_.$t("detail.running") : _vm_.$t("detail.stopped");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjExXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTFcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtZnVsbFwiIHNjcm9sbC15PVwidHJ1ZVwiIGJvdW5jZXM9XCJ0cnVlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPnt7ICR0KFwiZGV0YWlsLnRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtcHJpbWFyeVwiIG9uY2xpY2s9XCJyZWZyZXNoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJHQoXCJkZXRhaWwuc3RhdHVzXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YiBjYXJkLXN1Yi1wcmltYXJ5XCI+e3sgbHVhQ29ubmVjdGVkID8gJHQoXCJkZXRhaWwuY29ubmVjdGVkXCIpIDogJHQoXCJkZXRhaWwuZGlzY29ubmVjdGVkXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiZGV0YWlsLmxhc3RTeW5jXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7IGxhc3RIZWFydGJlYXQgfHwgJHQoXCJkZXRhaWwubm9uZVwiKSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj57eyAkdChcImRldGFpbC5kYXRhRGlyXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPi9kYXRhL3F1aWNrYXBwL2ZpbGVzL2NvbS5zaGVsbC5saWFuZ3lpLzwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj57eyAkdChcImRldGFpbC5sdWFCYWNrZW5kXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7IGx1YUNvbm5lY3RlZCA/ICR0KFwiZGV0YWlsLnJ1bm5pbmdcIikgOiAkdChcImRldGFpbC5zdG9wcGVkXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Njcm9sbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuaW1wb3J0IGZpbGUgZnJvbSBcIkBzeXN0ZW0uZmlsZVwiXG5cbnZhciBTWVNJTkZPX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvc3lzdGVtX2luZm8uanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJpdmF0ZToge1xuICAgIG5vd1RpbWU6IFwiMDA6MDBcIixcbiAgICB0aW1lcjogbnVsbCxcbiAgICByZWZyZXNoVGltZXI6IG51bGwsXG4gICAgbHVhQ29ubmVjdGVkOiBmYWxzZSxcbiAgICBsYXN0SGVhcnRiZWF0OiBcIlwiXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICB9LFxuXG4gIG9uU2hvdygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnJlZnJlc2goKVxuICAgIGlmICghc2VsZi5yZWZyZXNoVGltZXIpIHtcbiAgICAgIHNlbGYucmVmcmVzaFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IHNlbGYucmVmcmVzaCgpIH0sIDIwMDApXG4gICAgfVxuICB9LFxuXG4gIG9uSGlkZSgpIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoVGltZXIpXG4gICAgICB0aGlzLnJlZnJlc2hUaW1lciA9IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICBpZiAodGhpcy5yZWZyZXNoVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoVGltZXIpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICByZWZyZXNoKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUucmVhZFRleHQoe1xuICAgICAgdXJpOiBTWVNJTkZPX0ZJTEUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICBpZiAoanNvbi5faW5pdCkge1xuICAgICAgICAgICAgc2VsZi5sdWFDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgc2VsZi5sYXN0SGVhcnRiZWF0ID0gXCJcIlxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChqc29uLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdmFyIG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgICAgICAgICB2YXIgdHMgPSBwYXJzZUludChqc29uLnRpbWVzdGFtcClcbiAgICAgICAgICAgIGlmIChpc05hTih0cykpIHtcbiAgICAgICAgICAgICAgc2VsZi5sdWFDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICBzZWxmLmxhc3RIZWFydGJlYXQgPSBcIlwiXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdyAtIHRzID4gMTUpIHtcbiAgICAgICAgICAgICAgc2VsZi5sdWFDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICBzZWxmLmxhc3RIZWFydGJlYXQgPSBqc29uLnRpbWVzdGFtcCArIFwiIChcIiArIHNlbGYuJHQoXCJkZXRhaWwudGltZW91dFwiKSArIFwiKVwiXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBVbml4IOaXtumXtOaIs+i9rOS4uuWPr+ivu+agvOW8jyAqL1xuICAgICAgICAgIHNlbGYubHVhQ29ubmVjdGVkID0gdHJ1ZVxuICAgICAgICAgIHZhciBodCA9IHBhcnNlSW50KGpzb24udGltZXN0YW1wKVxuICAgICAgICAgIGlmICghaXNOYU4oaHQpKSB7XG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGh0ICogMTAwMClcbiAgICAgICAgICAgIHNlbGYubGFzdEhlYXJ0YmVhdCA9IChcIjBcIiArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBkLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBkLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYubGFzdEhlYXJ0YmVhdCA9IGpzb24udGltZXN0YW1wIHx8IHNlbGYuJHQoXCJkZXRhaWwudW5rbm93blwiKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgLyog5b+D6Lez5paH5Lu25o2f5Z2P5oiW5qC85byP5byC5bi4ICovXG4gICAgICAgICAgc2VsZi5sdWFDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgIHNlbGYubGFzdEhlYXJ0YmVhdCA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmx1YUNvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgIHNlbGYubGFzdEhlYXJ0YmVhdCA9IFwiXCJcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdvQmFjaygpIHsgcm91dGVyLmJhY2soKSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2JhY2stcGFnZS5jc3MnO1xuQGltcG9ydCAnLi4vLi4vY29tbW9uL2NhcmQuY3NzJztcblxuLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IDA7IHBhZGRpbmc6IDAgNnB4IDIwcHggNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbkBtZWRpYSAoc2hhcGU6IHJlY3QpIHtcbiAgLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC0xNXB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA0cHggMTZweCA0cHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDRweCAxNnB4IDRweDsgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJTWVNJTkZPX0ZJTEUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwicmVmcmVzaFRpbWVyIiwibHVhQ29ubmVjdGVkIiwibGFzdEhlYXJ0YmVhdCIsIm9uSW5pdCIsInNlbGYiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJvblNob3ciLCJyZWZyZXNoIiwib25IaWRlIiwiY2xlYXJJbnRlcnZhbCIsIm9uRGVzdHJveSIsImQiLCJEYXRlIiwiZ2V0SG91cnMiLCJzbGljZSIsImdldE1pbnV0ZXMiLCJmaWxlIiwicmVhZFRleHQiLCJ1cmkiLCJzdWNjZXNzIiwiZGF0YSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiX2luaXQiLCJ0aW1lc3RhbXAiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJ0cyIsInBhcnNlSW50IiwiaXNOYU4iLCIkdCIsImh0IiwiZ2V0U2Vjb25kcyIsImZhaWwiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDbUQzQixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTtvQkFBK0IsU0FBQUQsdUJBQUFHLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFFL0IsSUFBSUcsZUFBZTtvQkFBbUMsSUFBQUMsV0FBQUMsUUFBQUgsT0FBQSxHQUV2Qzt3QkFDYkksU0FBUzs0QkFDUEMsU0FBUzs0QkFDVEMsT0FBTzs0QkFDUEMsY0FBYzs0QkFDZEMsY0FBYzs0QkFDZEMsZUFBZTt3QkFDakI7d0JBRUFDOzRCQUNFLElBQUlDLE9BQU8sSUFBSTs0QkFDZkEsS0FBS0MsVUFBVTs0QkFDZkQsS0FBS0wsS0FBSyxHQUFHTyxZQUFZO2dDQUFhRixLQUFLQyxVQUFVOzRCQUFHLEdBQUc7d0JBQzdEO3dCQUVBRTs0QkFDRSxJQUFJSCxPQUFPLElBQUk7NEJBQ2ZBLEtBQUtJLE9BQU87NEJBQ1osSUFBSSxDQUFDSixLQUFLSixZQUFZLEVBQ3BCSSxLQUFLSixZQUFZLEdBQUdNLFlBQVk7Z0NBQWFGLEtBQUtJLE9BQU87NEJBQUcsR0FBRzt3QkFFbkU7d0JBRUFDOzRCQUNFLElBQUksSUFBSSxDQUFDVCxZQUFZLEVBQUU7Z0NBQ3JCVSxjQUFjLElBQUksQ0FBQ1YsWUFBWTtnQ0FDL0IsSUFBSSxDQUFDQSxZQUFZLEdBQUc7NEJBQ3RCO3dCQUNGO3dCQUVBVzs0QkFDRUQsY0FBYyxJQUFJLENBQUNYLEtBQUs7NEJBQ3hCLElBQUksSUFBSSxDQUFDQyxZQUFZLEVBQ25CVSxjQUFjLElBQUksQ0FBQ1YsWUFBWTt3QkFFbkM7d0JBRUFLOzRCQUNFLElBQUlPLElBQUksSUFBSUM7NEJBQ1osSUFBSSxDQUFDZixPQUFPLEdBQUcsQUFBQyxPQUFNYyxFQUFFRSxRQUFRLEVBQUMsRUFBR0MsS0FBSyxDQUFDLE1BQU0sTUFBTSxBQUFDLE9BQU1ILEVBQUVJLFVBQVUsRUFBQyxFQUFHRCxLQUFLLENBQUM7d0JBQ3JGO3dCQUVBUDs0QkFDRSxJQUFJSixPQUFPLElBQUk7NEJBQ2ZhLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUNaQyxLQUFLekI7Z0NBQ0wwQixTQUFTLFNBQVNDLElBQUk7b0NBQ3BCLElBQUk7d0NBQ0YsSUFBSUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSCxLQUFLSSxJQUFJO3dDQUMvQixJQUFJSCxLQUFLSSxLQUFLLEVBQUU7NENBQ2R0QixLQUFLSCxZQUFZLEdBQUc7NENBQ3BCRyxLQUFLRixhQUFhLEdBQUc7NENBQ3JCO3dDQUNGO3dDQUNBLElBQUlvQixLQUFLSyxTQUFTLEVBQUU7NENBQ2xCLElBQUlDLE1BQU1DLEtBQUtDLEtBQUssQ0FBQ2pCLEtBQUtlLEdBQUcsS0FBSzs0Q0FDbEMsSUFBSUcsS0FBS0MsU0FBU1YsS0FBS0ssU0FBUzs0Q0FDaEMsSUFBSU0sTUFBTUYsS0FBSztnREFDYjNCLEtBQUtILFlBQVksR0FBRztnREFDcEJHLEtBQUtGLGFBQWEsR0FBRztnREFDckI7NENBQ0Y7NENBQ0EsSUFBSTBCLE1BQU1HLEtBQUssSUFBSTtnREFDakIzQixLQUFLSCxZQUFZLEdBQUc7Z0RBQ3BCRyxLQUFLRixhQUFhLEdBQUdvQixLQUFLSyxTQUFTLEdBQUcsT0FBT3ZCLEtBQUs4QixFQUFFLENBQUMsb0JBQW9CO2dEQUN6RTs0Q0FDRjt3Q0FDRjt3Q0FFQTlCLEtBQUtILFlBQVksR0FBRzt3Q0FDcEIsSUFBSWtDLEtBQUtILFNBQVNWLEtBQUtLLFNBQVM7d0NBQ2hDLElBQUtNLE1BQU1FLEtBSVQvQixLQUFLRixhQUFhLEdBQUdvQixLQUFLSyxTQUFTLElBQUl2QixLQUFLOEIsRUFBRSxDQUFDOzZDQUpqQzs0Q0FDZCxJQUFJdEIsSUFBSSxJQUFJQyxLQUFLc0IsQUFBSyxPQUFMQTs0Q0FDakIvQixLQUFLRixhQUFhLEdBQUcsQUFBQyxPQUFNVSxFQUFFRSxRQUFRLEVBQUMsRUFBR0MsS0FBSyxDQUFDLE1BQU0sTUFBTSxBQUFDLE9BQU1ILEVBQUVJLFVBQVUsRUFBQyxFQUFHRCxLQUFLLENBQUMsTUFBTSxNQUFNLEFBQUMsT0FBTUgsRUFBRXdCLFVBQVUsRUFBQyxFQUFHckIsS0FBSyxDQUFDO3dDQUNwSTtvQ0FHRixFQUFFLE9BQU14QixHQUFHO3dDQUVUYSxLQUFLSCxZQUFZLEdBQUc7d0NBQ3BCRyxLQUFLRixhQUFhLEdBQUc7b0NBQ3ZCO2dDQUNGO2dDQUNBbUMsTUFBTTtvQ0FDSmpDLEtBQUtILFlBQVksR0FBRztvQ0FDcEJHLEtBQUtGLGFBQWEsR0FBRztnQ0FDdkI7NEJBQ0Y7d0JBQ0Y7d0JBRUFvQzs0QkFBV0MsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUFHO29CQUMzQiJ9