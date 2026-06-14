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
                                "text-green"
                            ]
                        ],
                        {
                            color: "#00ff00"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "text-red"
                            ]
                        ],
                        {
                            color: "#ff3333"
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
                                "scroll-inner"
                            ]
                        ],
                        {
                            paddingTop: "0",
                            paddingRight: "8px",
                            paddingBottom: "16px",
                            paddingLeft: "8px"
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
                            width: "176px",
                            height: "110px",
                            borderRadius: "27px",
                            paddingLeft: "20px",
                            paddingRight: "12px"
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
                            marginTop: "9px"
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
                            paddingRight: "8px",
                            paddingBottom: "16px",
                            paddingLeft: "8px"
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
                            width: "196px",
                            height: "110px",
                            borderRadius: "27px",
                            paddingLeft: "20px",
                            paddingRight: "12px"
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
                            self.refresh();
                            self.refreshTimer = setInterval(function() {
                                self.refresh();
                            }, 2000);
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                            clearInterval(this.refreshTimer);
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
                                            var now = new Date();
                                            var parts = json.timestamp.split(":");
                                            var ts = new Date();
                                            ts.setHours(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]), 0);
                                            var diff = (now.getTime() - ts.getTime()) / 1000;
                                            if (diff > 15) {
                                                self.luaConnected = false;
                                                self.lastHeartbeat = json.timestamp + " (超时)";
                                                return;
                                            }
                                        }
                                        self.luaConnected = true;
                                        self.lastHeartbeat = json.timestamp || "未知";
                                    } catch (e) {}
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
                                                    return _vm_.$t("detail.status");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: function() {
                                                    const $classValue$ = "card-sub " + (_vm_.luaConnected ? "text-green" : "text-red");
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1NoZWxsL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbC9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjExXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTFcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtZnVsbFwiIHNjcm9sbC15PVwidHJ1ZVwiIGJvdW5jZXM9XCJ0cnVlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPnt7ICR0KFwiZGV0YWlsLnRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJHQoXCJkZXRhaWwuc3RhdHVzXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YiB7eyBsdWFDb25uZWN0ZWQgPyAndGV4dC1ncmVlbicgOiAndGV4dC1yZWQnIH19XCI+e3sgbHVhQ29ubmVjdGVkID8gJHQoXCJkZXRhaWwuY29ubmVjdGVkXCIpIDogJHQoXCJkZXRhaWwuZGlzY29ubmVjdGVkXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiZGV0YWlsLmxhc3RTeW5jXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7IGxhc3RIZWFydGJlYXQgfHwgJHQoXCJkZXRhaWwubm9uZVwiKSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj57eyAkdChcImRldGFpbC5kYXRhRGlyXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPi9kYXRhL3F1aWNrYXBwL2ZpbGVzL2NvbS5zaGVsbC5saWFuZ3lpLzwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj57eyAkdChcImRldGFpbC5sdWFCYWNrZW5kXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7IGx1YUNvbm5lY3RlZCA/ICR0KFwiZGV0YWlsLnJ1bm5pbmdcIikgOiAkdChcImRldGFpbC5zdG9wcGVkXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Njcm9sbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuaW1wb3J0IGZpbGUgZnJvbSBcIkBzeXN0ZW0uZmlsZVwiXG5cbnZhciBTWVNJTkZPX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvc3lzdGVtX2luZm8uanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJpdmF0ZToge1xuICAgIG5vd1RpbWU6IFwiMDA6MDBcIixcbiAgICB0aW1lcjogbnVsbCxcbiAgICByZWZyZXNoVGltZXI6IG51bGwsXG4gICAgbHVhQ29ubmVjdGVkOiBmYWxzZSxcbiAgICBsYXN0SGVhcnRiZWF0OiBcIlwiXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICAgIHNlbGYucmVmcmVzaCgpXG4gICAgc2VsZi5yZWZyZXNoVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi5yZWZyZXNoKCkgfSwgMjAwMClcbiAgfSxcblxuICBvbkRlc3Ryb3koKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yZWZyZXNoVGltZXIpXG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIHJlZnJlc2goKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IFNZU0lORk9fRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoZGF0YS50ZXh0KVxuICAgICAgICAgIGlmIChqc29uLl9pbml0KSB7XG4gICAgICAgICAgICBzZWxmLmx1YUNvbm5lY3RlZCA9IGZhbHNlXG4gICAgICAgICAgICBzZWxmLmxhc3RIZWFydGJlYXQgPSBcIlwiXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGpzb24udGltZXN0YW1wKSB7XG4gICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgdmFyIHBhcnRzID0ganNvbi50aW1lc3RhbXAuc3BsaXQoXCI6XCIpXG4gICAgICAgICAgICB2YXIgdHMgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICB0cy5zZXRIb3VycyhwYXJzZUludChwYXJ0c1swXSksIHBhcnNlSW50KHBhcnRzWzFdKSwgcGFyc2VJbnQocGFydHNbMl0pLCAwKVxuICAgICAgICAgICAgdmFyIGRpZmYgPSAobm93LmdldFRpbWUoKSAtIHRzLmdldFRpbWUoKSkgLyAxMDAwXG4gICAgICAgICAgICBpZiAoZGlmZiA+IDE1KSB7XG4gICAgICAgICAgICAgIHNlbGYubHVhQ29ubmVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgc2VsZi5sYXN0SGVhcnRiZWF0ID0ganNvbi50aW1lc3RhbXAgKyBcIiAo6LaF5pe2KVwiXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLmx1YUNvbm5lY3RlZCA9IHRydWVcbiAgICAgICAgICBzZWxmLmxhc3RIZWFydGJlYXQgPSBqc29uLnRpbWVzdGFtcCB8fCBcIuacquefpVwiXG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5sdWFDb25uZWN0ZWQgPSBmYWxzZVxuICAgICAgICBzZWxmLmxhc3RIZWFydGJlYXQgPSBcIlwiXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnb0JhY2soKSB7IHJvdXRlci5iYWNrKCkgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyB9XG4uY29udGVudC1mdWxsIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uaGVhZGVyLWFyZWEgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmhlYWRlci1iZyB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgfVxuLmhkLXRpbWUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogN3B4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogMzJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOyB9XG4uaGQtdGl0bGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogMzVweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDQycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNmZmZmZmY7IH1cbi5oZC1iYWNrIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA2cHg7IHRvcDogNnB4OyB3aWR0aDogNzJweDsgaGVpZ2h0OiA3MnB4OyB9XG4ucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBub25lOyB9XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY2FyZC5jc3MnO1xuLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC03cHg7IHBhZGRpbmc6IDAgNnB4IDIwcHggNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4udGV4dC1ncmVlbiB7IGNvbG9yOiAjMDBmZjAwOyB9XG4udGV4dC1yZWQgeyBjb2xvcjogI2ZmMzMzMzsgfVxuXG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDQ5MHB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLmhkLXRpdGxlIHsgd2lkdGg6IDE5MnB4OyB0b3A6IDIycHg7IGZvbnQtc2l6ZTogMjJweDsgfVxuICAuaGQtYmFjayB7IGxlZnQ6IDRweDsgdG9wOiA0cHg7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogOTJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiAzMnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAucGlsbC1tb3JlIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vYmFja19jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogOTJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzMnB4OyB9XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDhweCAxNnB4IDhweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxNzZweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAyMHB4OyBwYWRkaW5nLXJpZ2h0OiAxMnB4OyB9XG4gIC5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAzMnB4OyBsaW5lLWhlaWdodDogMzhweDsgfVxuICAuY2FyZC1zdWIgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNHB4OyBtYXJnaW4tdG9wOiA5cHg7IH1cbiAgLnNwYWNlciB7IGhlaWdodDogMTZweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWluLXdpZHRoOiAxMDEpIHtcbiAgLnBhZ2UgeyB3aWR0aDogMjEycHg7IGhlaWdodDogNTIwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAyMTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5waWxsLW1vcmUgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vYmFja19jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogMTAycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgfVxuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA4cHggMTZweCA4cHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTk2cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMjBweDsgcGFkZGluZy1yaWdodDogMTJweDsgfVxuICAuY2FyZC1sYWJlbCB7IGZvbnQtc2l6ZTogMzJweDsgbGluZS1oZWlnaHQ6IDM4cHg7IH1cbiAgLmNhcmQtc3ViIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzRweDsgbWFyZ2luLXRvcDogOXB4OyB9XG4gIC5zcGFjZXIgeyBoZWlnaHQ6IDE2cHg7IH1cbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiU1lTSU5GT19GSUxFIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsIm5vd1RpbWUiLCJ0aW1lciIsInJlZnJlc2hUaW1lciIsImx1YUNvbm5lY3RlZCIsImxhc3RIZWFydGJlYXQiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwicmVmcmVzaCIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwiZmlsZSIsInJlYWRUZXh0IiwidXJpIiwic3VjY2VzcyIsImRhdGEiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidGV4dCIsIl9pbml0IiwidGltZXN0YW1wIiwibm93IiwicGFydHMiLCJzcGxpdCIsInRzIiwic2V0SG91cnMiLCJwYXJzZUludCIsImRpZmYiLCJnZXRUaW1lIiwiZmFpbCIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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