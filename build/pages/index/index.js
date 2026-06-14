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
                            marginTop: "-7px",
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
                    var SYSINFO_FILE = "internal://files/system_info.json";
                    var _default = exports.default = {
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            sysTimer: null,
                            statusText: "等待连接..."
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            self.checkConn();
                            self.sysTimer = setInterval(function() {
                                self.checkConn();
                            }, 5000);
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                            clearInterval(this.sysTimer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
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
                                            var now = new Date();
                                            var parts = json.timestamp.split(":");
                                            var ts = new Date();
                                            ts.setHours(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]), 0);
                                            var diff = (now.getTime() - ts.getTime()) / 1000;
                                            if (diff > 15) {
                                                self.statusText = self.$t("index.disconnected");
                                                return;
                                            }
                                        }
                                        self.statusText = self.$t("index.connected");
                                    } catch (e) {}
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
                        goDetail () {
                            _system.default.push({
                                uri: "/pages/detail"
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
                                                return _vm_.goAbout(evt);
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
                                                    return _vm_.$t("index.about");
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
                                                    return _vm_.$t("index.aboutDesc");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXgvaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsKysvc3JjL3BhZ2VzL2luZGV4L2luZGV4LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8c2Nyb2xsIGNsYXNzPVwiY29udGVudC1mdWxsXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgYm91bmNlcz1cInRydWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vaGQucG5nXCIgY2xhc3M9XCJoZWFkZXItYmdcIiAvPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpbWVcIj57eyBub3dUaW1lIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpdGxlXCI+e3sgJHQoXCJpbmRleC50aXRsZVwiKSB9fTwvdGV4dD5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2JhY2sucG5nXCIgY2xhc3M9XCJoZC1iYWNrXCIgLz5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL01vcmVfQkAxeC5wbmdcIiBAY2xpY2s9XCJnb0Fib3V0XCIgY2xhc3M9XCJoZC1tb3JlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBpbGwtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmUtd3JhcFwiIEBjbGljaz1cImdvQWJvdXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtaW5uZXJcIj5cblxuICAgICAgICA8IS0tIOi/nuaOpeeKtuaAgSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBvbmNsaWNrPVwiZ29EZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj57eyAkdChcImluZGV4LnN0YXR1c1wiKSB9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1zdWJcIj57eyBzdGF0dXNUZXh0IH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIOe7iOerryAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1wcmltYXJ5XCIgb25jbGljaz1cImdvVGVybWluYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj57eyAkdChcImluZGV4LnRlcm1pbmFsXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YiBjYXJkLXN1Yi1wcmltYXJ5XCI+e3sgJHQoXCJpbmRleC50ZXJtaW5hbERlc2NcIikgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0g5L2/55So6K+05piOIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIG9uY2xpY2s9XCJnb0Fib3V0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJHQoXCJpbmRleC5hYm91dFwiKSB9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1zdWJcIj57eyAkdChcImluZGV4LmFib3V0RGVzY1wiKSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zY3JvbGw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcbmltcG9ydCBmaWxlIGZyb20gXCJAc3lzdGVtLmZpbGVcIlxuXG52YXIgU1lTSU5GT19GSUxFID0gXCJpbnRlcm5hbDovL2ZpbGVzL3N5c3RlbV9pbmZvLmpzb25cIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgc3lzVGltZXI6IG51bGwsXG4gICAgc3RhdHVzVGV4dDogXCLnrYnlvoXov57mjqUuLi5cIlxuICB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVUaW1lKCkgfSwgMTAwMClcbiAgICBzZWxmLmNoZWNrQ29ubigpXG4gICAgc2VsZi5zeXNUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLmNoZWNrQ29ubigpIH0sIDUwMDApXG4gIH0sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICBjbGVhckludGVydmFsKHRoaXMuc3lzVGltZXIpXG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIGNoZWNrQ29ubigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBmaWxlLnJlYWRUZXh0KHtcbiAgICAgIHVyaTogU1lTSU5GT19GSUxFLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpXG4gICAgICAgICAgaWYgKGpzb24uX2luaXQpIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJpbmRleC5kaXNjb25uZWN0ZWRcIilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvKiDmo4Dmn6Xlv4Pot7PmmK/lkKbotoXml7bvvIjotoXov4cgMTUg56eS6KeG5Li65pat5byA77yJICovXG4gICAgICAgICAgaWYgKGpzb24udGltZXN0YW1wKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgdmFyIHBhcnRzID0ganNvbi50aW1lc3RhbXAuc3BsaXQoXCI6XCIpXG4gICAgICAgICAgICB2YXIgdHMgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICB0cy5zZXRIb3VycyhwYXJzZUludChwYXJ0c1swXSksIHBhcnNlSW50KHBhcnRzWzFdKSwgcGFyc2VJbnQocGFydHNbMl0pLCAwKVxuICAgICAgICAgICAgdmFyIGRpZmYgPSAobm93LmdldFRpbWUoKSAtIHRzLmdldFRpbWUoKSkgLyAxMDAwXG4gICAgICAgICAgICBpZiAoZGlmZiA+IDE1KSB7XG4gICAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJpbmRleC5kaXNjb25uZWN0ZWRcIilcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJpbmRleC5jb25uZWN0ZWRcIilcbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnN0YXR1c1RleHQgPSBzZWxmLiR0KFwiaW5kZXguZGlzY29ubmVjdGVkXCIpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnb1Rlcm1pbmFsKCkgeyByb3V0ZXIucHVzaCh7IHVyaTogXCIvcGFnZXMvdGVybWluYWxcIiB9KSB9LFxuICBnb0RldGFpbCgpICB7IHJvdXRlci5wdXNoKHsgdXJpOiBcIi9wYWdlcy9kZXRhaWxcIiB9KSB9LFxuICBnb0Fib3V0KCkgICB7IHJvdXRlci5wdXNoKHsgdXJpOiBcIi9wYWdlcy9hYm91dFwiIH0pIH0sXG4gIGdvQmFjaygpICAgIHsgcm91dGVyLmJhY2soKSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnBhZ2UgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IH1cbi5jb250ZW50LWZ1bGwgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5oZWFkZXItYXJlYSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uaGVhZGVyLWJnIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4uaGQtdGl0bGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogMzVweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDQycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNmZmZmZmY7IH1cbi5oZC1iYWNrIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA2cHg7IHRvcDogNnB4OyB3aWR0aDogNzJweDsgaGVpZ2h0OiA3MnB4OyB9XG4uaGQtdGltZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiA3cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbi5oZC1tb3JlIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAyNThweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5waWxsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5zY3JvbGwtaW5uZXIgeyBtYXJnaW4tdG9wOiAtN3B4OyBwYWRkaW5nOiAwIDZweCAyMHB4IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLmNhcmQgeyB3aWR0aDogMzI0cHg7IGhlaWdodDogMTEycHg7IG1hcmdpbi10b3A6IDhweDsgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZy1sZWZ0OiAyMHB4OyBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG4uY2FyZC1sZWZ0IHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZmxleDogMTsgfVxuLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDMycHg7IGxpbmUtaGVpZ2h0OiA0MHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNmZmZmZmY7IGxpbmVzOiAxOyB9XG4uY2FyZC1zdWIgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzN3B4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgbWFyZ2luLXRvcDogNHB4OyBsaW5lczogMTsgfVxuLmNhcmQtcHJpbWFyeSB7IGJhY2tncm91bmQtY29sb3I6ICMwRDZFRkY7IH1cbi5jYXJkLXN1Yi1wcmltYXJ5IHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTsgfVxuLnNwYWNlciB7IGhlaWdodDogMjBweDsgfVxuXG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDQ5MHB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9tb3JlX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyB9XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDRweCAxNnB4IDRweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxODRweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDMycHg7IGxpbmUtaGVpZ2h0OiAzOHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM0cHg7IG1hcmdpbi10b3A6IDZweDsgfVxuICAuc3BhY2VyIHsgaGVpZ2h0OiAxNnB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtaW4td2lkdGg6IDEwMSkge1xuICAucGFnZSB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9tb3JlX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDRweCAxNnB4IDRweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAyMDRweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDMycHg7IGxpbmUtaGVpZ2h0OiAzOHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM0cHg7IG1hcmdpbi10b3A6IDlweDsgfVxuICAuc3BhY2VyIHsgaGVpZ2h0OiAxNnB4OyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIlNZU0lORk9fRklMRSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJub3dUaW1lIiwidGltZXIiLCJzeXNUaW1lciIsInN0YXR1c1RleHQiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiY2hlY2tDb25uIiwib25EZXN0cm95IiwiY2xlYXJJbnRlcnZhbCIsImQiLCJEYXRlIiwiZ2V0SG91cnMiLCJzbGljZSIsImdldE1pbnV0ZXMiLCJmaWxlIiwicmVhZFRleHQiLCJ1cmkiLCJzdWNjZXNzIiwiZGF0YSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiX2luaXQiLCIkdCIsInRpbWVzdGFtcCIsIm5vdyIsInBhcnRzIiwic3BsaXQiLCJ0cyIsInNldEhvdXJzIiwicGFyc2VJbnQiLCJkaWZmIiwiZ2V0VGltZSIsImZhaWwiLCJnb1Rlcm1pbmFsIiwicm91dGVyIiwicHVzaCIsImdvRGV0YWlsIiwiZ29BYm91dCIsImdvQmFjayIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2lEM0IsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7b0JBQStCLFNBQUFELHVCQUFBRyxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBRS9CLElBQUlHLGVBQWU7b0JBQW1DLElBQUFDLFdBQUFDLFFBQUFILE9BQUEsR0FFdkM7d0JBQ2JJLFNBQVM7NEJBQ1BDLFNBQVM7NEJBQ1RDLE9BQU87NEJBQ1BDLFVBQVU7NEJBQ1ZDLFlBQVk7d0JBQ2Q7d0JBRUFDOzRCQUNFLElBQUlDLE9BQU8sSUFBSTs0QkFDZkEsS0FBS0MsVUFBVTs0QkFDZkQsS0FBS0osS0FBSyxHQUFHTSxZQUFZO2dDQUFhRixLQUFLQyxVQUFVOzRCQUFHLEdBQUc7NEJBQzNERCxLQUFLRyxTQUFTOzRCQUNkSCxLQUFLSCxRQUFRLEdBQUdLLFlBQVk7Z0NBQWFGLEtBQUtHLFNBQVM7NEJBQUcsR0FBRzt3QkFDL0Q7d0JBRUFDOzRCQUNFQyxjQUFjLElBQUksQ0FBQ1QsS0FBSzs0QkFDeEJTLGNBQWMsSUFBSSxDQUFDUixRQUFRO3dCQUM3Qjt3QkFFQUk7NEJBQ0UsSUFBSUssSUFBSSxJQUFJQzs0QkFDWixJQUFJLENBQUNaLE9BQU8sR0FBRyxBQUFDLE9BQU1XLEVBQUVFLFFBQVEsRUFBQyxFQUFHQyxLQUFLLENBQUMsTUFBTSxNQUFNLEFBQUMsT0FBTUgsRUFBRUksVUFBVSxFQUFDLEVBQUdELEtBQUssQ0FBQzt3QkFDckY7d0JBRUFOOzRCQUNFLElBQUlILE9BQU8sSUFBSTs0QkFDZlcsU0FBQUEsT0FBSSxDQUFDQyxRQUFRLENBQUM7Z0NBQ1pDLEtBQUt0QjtnQ0FDTHVCLFNBQVMsU0FBU0MsSUFBSTtvQ0FDcEIsSUFBSTt3Q0FDRixJQUFJQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNILEtBQUtJLElBQUk7d0NBQy9CLElBQUlILEtBQUtJLEtBQUssRUFBRTs0Q0FDZHBCLEtBQUtGLFVBQVUsR0FBR0UsS0FBS3FCLEVBQUUsQ0FBQzs0Q0FDMUI7d0NBQ0Y7d0NBRUEsSUFBSUwsS0FBS00sU0FBUyxFQUFFOzRDQUNsQixJQUFJQyxNQUFNLElBQUloQjs0Q0FDZCxJQUFJaUIsUUFBUVIsS0FBS00sU0FBUyxDQUFDRyxLQUFLLENBQUM7NENBQ2pDLElBQUlDLEtBQUssSUFBSW5COzRDQUNibUIsR0FBR0MsUUFBUSxDQUFDQyxTQUFTSixLQUFLLENBQUMsRUFBRSxHQUFHSSxTQUFTSixLQUFLLENBQUMsRUFBRSxHQUFHSSxTQUFTSixLQUFLLENBQUMsRUFBRSxHQUFHOzRDQUN4RSxJQUFJSyxPQUFPLEFBQUNOLENBQUFBLElBQUlPLE9BQU8sS0FBS0osR0FBR0ksT0FBTyxFQUFDLElBQUs7NENBQzVDLElBQUlELE9BQU8sSUFBSTtnREFDYjdCLEtBQUtGLFVBQVUsR0FBR0UsS0FBS3FCLEVBQUUsQ0FBQztnREFDMUI7NENBQ0Y7d0NBQ0Y7d0NBQ0FyQixLQUFLRixVQUFVLEdBQUdFLEtBQUtxQixFQUFFLENBQUM7b0NBQzVCLEVBQUUsT0FBTWpDLEdBQUcsQ0FBQztnQ0FDZDtnQ0FDQTJDLE1BQU07b0NBQ0ovQixLQUFLRixVQUFVLEdBQUdFLEtBQUtxQixFQUFFLENBQUM7Z0NBQzVCOzRCQUNGO3dCQUNGO3dCQUVBVzs0QkFBZUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJLENBQUM7Z0NBQUVyQixLQUFLOzRCQUFrQjt3QkFBRzt3QkFDdkRzQjs0QkFBY0YsUUFBQUEsT0FBTSxDQUFDQyxJQUFJLENBQUM7Z0NBQUVyQixLQUFLOzRCQUFnQjt3QkFBRzt3QkFDcER1Qjs0QkFBY0gsUUFBQUEsT0FBTSxDQUFDQyxJQUFJLENBQUM7Z0NBQUVyQixLQUFLOzRCQUFlO3dCQUFHO3dCQUNuRHdCOzRCQUFjSixRQUFBQSxPQUFNLENBQUNLLElBQUk7d0JBQUc7b0JBQzlCIn0=