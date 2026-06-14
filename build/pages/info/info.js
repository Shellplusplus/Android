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
                                "spacer"
                            ]
                        ],
                        {
                            height: "20px"
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
                            paddingLeft: "14px",
                            paddingRight: "12px",
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
                            fontSize: "28px",
                            lineHeight: "34px"
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
                            fontSize: "24px",
                            lineHeight: "30px",
                            marginTop: "4px"
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
                            paddingLeft: "14px",
                            paddingRight: "12px",
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
                            fontSize: "28px",
                            lineHeight: "34px"
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
                            fontSize: "24px",
                            lineHeight: "30px",
                            marginTop: "4px"
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
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        protected: {
                            category: ""
                        },
                        private: {
                            nowTime: "00:00",
                            timer: null
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        sendCmd (cmd) {
                            _system.default.push({
                                uri: "/pages/terminal",
                                params: {
                                    cmd: cmd
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
                                            return _vm_.category;
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
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ls -l /", evt);
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
                                                        value: "ls -l /"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "根目录文件列表"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ls -la /data", evt);
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
                                                        value: "ls -la /data"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "数据目录文件列表"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ps", evt);
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
                                                        value: "ps"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "进程列表"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("free", evt);
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
                                                        value: "free"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "内存使用情况"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("df", evt);
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
                                                        value: "df"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "磁盘使用情况"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("uname -a", evt);
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
                                                        value: "uname -a"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "系统版本信息"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("dmesg", evt);
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
                                                        value: "dmesg"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "内核日志"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("uptime", evt);
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
                                                        value: "uptime"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "系统运行时间"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ifconfig", evt);
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
                                                        value: "ifconfig"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "网络接口信息"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u547D\u4EE4\u6A21\u677F" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("help", evt);
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
                                                        value: "help"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "所有可用命令"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ls", evt);
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
                                                        value: "ls"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "列出目录内容"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("cat", evt);
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
                                                        value: "cat"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "查看文件内容"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("cp", evt);
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
                                                        value: "cp"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "复制文件"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("mv", evt);
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
                                                        value: "mv"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "移动/重命名文件"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("rm", evt);
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
                                                        value: "rm"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "删除文件"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("mkdir", evt);
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
                                                        value: "mkdir"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "创建目录"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("pwd", evt);
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
                                                        value: "pwd"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "显示当前路径"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u6587\u4EF6" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("dd", evt);
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
                                                        value: "dd"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "数据拷贝/转换"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7CFB\u7EDF" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("uname", evt);
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
                                                        value: "uname"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "系统名称与版本"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7CFB\u7EDF" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("uptime", evt);
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
                                                        value: "uptime"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "系统运行时间"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7CFB\u7EDF" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("date", evt);
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
                                                        value: "date"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "当前日期时间"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7CFB\u7EDF" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("dmesg", evt);
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
                                                        value: "dmesg"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "内核日志"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7CFB\u7EDF" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("free", evt);
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
                                                        value: "free"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "内存使用情况"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7CFB\u7EDF" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("reboot", evt);
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
                                                        value: "reboot"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "重启系统"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u8FDB\u7A0B" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ps", evt);
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
                                                        value: "ps"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "进程列表"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u8FDB\u7A0B" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("sleep", evt);
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
                                                        value: "sleep"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "休眠指定秒数"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u8FDB\u7A0B" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("kill", evt);
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
                                                        value: "kill"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "终止进程"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7F51\u7EDC" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ifconfig", evt);
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
                                                        value: "ifconfig"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "网络接口信息"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7F51\u7EDC" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("ping", evt);
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
                                                        value: "ping"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "网络连通测试"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7F51\u7EDC" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("curl", evt);
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
                                                        value: "curl"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "HTTP 请求"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return "\u7F51\u7EDC" === _vm_.category;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.sendCmd("nslookup", evt);
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
                                                        value: "nslookup"
                                                    }
                                                }, []),
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card-sub"
                                                        ],
                                                        value: "DNS 查询"
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5mby9pbmZvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsL3NyYy9wYWdlcy9pbmZvL2luZm8udXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgIDxzY3JvbGwgY2xhc3M9XCJjb250ZW50LWZ1bGxcIiBzY3JvbGwteT1cInRydWVcIiBib3VuY2VzPVwidHJ1ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9oZC5wbmdcIiBjbGFzcz1cImhlYWRlci1iZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGltZVwiPnt7IG5vd1RpbWUgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGl0bGVcIj57eyBjYXRlZ29yeSB9fTwvdGV4dD5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2JhY2sucG5nXCIgQGNsaWNrPVwiZ29CYWNrXCIgY2xhc3M9XCJoZC1iYWNrXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBpbGwtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmUtd3JhcFwiIEBjbGljaz1cImdvQmFja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtaW5uZXJcIj5cblxuICAgICAgICA8IS0tID09PT09IOWRveS7pOaooeadvyA9PT09PSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICflkb3ku6TmqKHmnb8nfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnbHMgLWwgLycpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmxzIC1sIC88L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuagueebruW9leaWh+S7tuWIl+ihqDwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5ZG95Luk5qih5p2/J319XCIgb25jbGljaz1cInNlbmRDbWQoJ2xzIC1sYSAvZGF0YScpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmxzIC1sYSAvZGF0YTwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+5pWw5o2u55uu5b2V5paH5Lu25YiX6KGoPC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICflkb3ku6TmqKHmnb8nfX1cIiBvbmNsaWNrPVwic2VuZENtZCgncHMnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5wczwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+6L+b56iL5YiX6KGoPC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICflkb3ku6TmqKHmnb8nfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnZnJlZScpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmZyZWU8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuWGheWtmOS9v+eUqOaDheWGtTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5ZG95Luk5qih5p2/J319XCIgb25jbGljaz1cInNlbmRDbWQoJ2RmJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+ZGY8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuejgeebmOS9v+eUqOaDheWGtTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5ZG95Luk5qih5p2/J319XCIgb25jbGljaz1cInNlbmRDbWQoJ3VuYW1lIC1hJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+dW5hbWUgLWE8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuezu+e7n+eJiOacrOS/oeaBrzwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5ZG95Luk5qih5p2/J319XCIgb25jbGljaz1cInNlbmRDbWQoJ2RtZXNnJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+ZG1lc2c8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuWGheaguOaXpeW/lzwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5ZG95Luk5qih5p2/J319XCIgb25jbGljaz1cInNlbmRDbWQoJ3VwdGltZScpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnVwdGltZTwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+57O757uf6L+Q6KGM5pe26Ze0PC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICflkb3ku6TmqKHmnb8nfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnaWZjb25maWcnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5pZmNvbmZpZzwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+572R57uc5o6l5Y+j5L+h5oGvPC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICflkb3ku6TmqKHmnb8nfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnaGVscCcpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmhlbHA8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuaJgOacieWPr+eUqOWRveS7pDwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSA9PT09PSDmlofku7YgPT09PT0gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5paH5Lu2J319XCIgb25jbGljaz1cInNlbmRDbWQoJ2xzJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+bHM8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuWIl+WHuuebruW9leWGheWuuTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5paH5Lu2J319XCIgb25jbGljaz1cInNlbmRDbWQoJ2NhdCcpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmNhdDwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+5p+l55yL5paH5Lu25YaF5a65PC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICfmlofku7YnfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnY3AnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5jcDwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+5aSN5Yi25paH5Lu2PC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICfmlofku7YnfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnbXYnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5tdjwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+56e75YqoL+mHjeWRveWQjeaWh+S7tjwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5paH5Lu2J319XCIgb25jbGljaz1cInNlbmRDbWQoJ3JtJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+cm08L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuWIoOmZpOaWh+S7tjwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5paH5Lu2J319XCIgb25jbGljaz1cInNlbmRDbWQoJ21rZGlyJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+bWtkaXI8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuWIm+W7uuebruW9lTwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn5paH5Lu2J319XCIgb25jbGljaz1cInNlbmRDbWQoJ3B3ZCcpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnB3ZDwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+5pi+56S65b2T5YmN6Lev5b6EPC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICfmlofku7YnfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnZGQnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5kZDwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+5pWw5o2u5ou36LSdL+i9rOaNojwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSA9PT09PSDns7vnu58gPT09PT0gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn57O757ufJ319XCIgb25jbGljaz1cInNlbmRDbWQoJ3VuYW1lJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+dW5hbWU8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuezu+e7n+WQjeensOS4jueJiOacrDwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn57O757ufJ319XCIgb25jbGljaz1cInNlbmRDbWQoJ3VwdGltZScpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnVwdGltZTwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+57O757uf6L+Q6KGM5pe26Ze0PC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICfns7vnu58nfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnZGF0ZScpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmRhdGU8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuW9k+WJjeaXpeacn+aXtumXtDwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn57O757ufJ319XCIgb25jbGljaz1cInNlbmRDbWQoJ2RtZXNnJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+ZG1lc2c8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuWGheaguOaXpeW/lzwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn57O757ufJ319XCIgb25jbGljaz1cInNlbmRDbWQoJ2ZyZWUnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5mcmVlPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiY2FyZC1zdWJcIj7lhoXlrZjkvb/nlKjmg4XlhrU8L3RleHQ+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlmPVwie3tjYXRlZ29yeSA9PT0gJ+ezu+e7nyd9fVwiIG9uY2xpY2s9XCJzZW5kQ21kKCdyZWJvb3QnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5yZWJvb3Q8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPumHjeWQr+ezu+e7nzwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSA9PT09PSDov5vnqIsgPT09PT0gLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn6L+b56iLJ319XCIgb25jbGljaz1cInNlbmRDbWQoJ3BzJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+cHM8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPui/m+eoi+WIl+ihqDwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn6L+b56iLJ319XCIgb25jbGljaz1cInNlbmRDbWQoJ3NsZWVwJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+c2xlZXA8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPuS8keecoOaMh+WumuenkuaVsDwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgaWY9XCJ7e2NhdGVnb3J5ID09PSAn6L+b56iLJ319XCIgb25jbGljaz1cInNlbmRDbWQoJ2tpbGwnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5raWxsPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiY2FyZC1zdWJcIj7nu4jmraLov5vnqIs8L3RleHQ+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gPT09PT0g572R57ucID09PT09IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlmPVwie3tjYXRlZ29yeSA9PT0gJ+e9kee7nCd9fVwiIG9uY2xpY2s9XCJzZW5kQ21kKCdpZmNvbmZpZycpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmlmY29uZmlnPC90ZXh0Pjx0ZXh0IGNsYXNzPVwiY2FyZC1zdWJcIj7nvZHnu5zmjqXlj6Pkv6Hmga88L3RleHQ+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlmPVwie3tjYXRlZ29yeSA9PT0gJ+e9kee7nCd9fVwiIG9uY2xpY2s9XCJzZW5kQ21kKCdwaW5nJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+PHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+cGluZzwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+572R57uc6L+e6YCa5rWL6K+VPC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICfnvZHnu5wnfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnY3VybCcpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPjx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPmN1cmw8L3RleHQ+PHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPkhUVFAg6K+35rGCPC90ZXh0PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBpZj1cInt7Y2F0ZWdvcnkgPT09ICfnvZHnu5wnfX1cIiBvbmNsaWNrPVwic2VuZENtZCgnbnNsb29rdXAnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj48dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj5uc2xvb2t1cDwvdGV4dD48dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+RE5TIOafpeivojwvdGV4dD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zY3JvbGw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm90ZWN0ZWQ6IHsgY2F0ZWdvcnk6IFwiXCIgfSxcbiAgcHJpdmF0ZTogeyBub3dUaW1lOiBcIjAwOjAwXCIsIHRpbWVyOiBudWxsIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHsgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKSB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICBzZW5kQ21kKGNtZCkge1xuICAgIHJvdXRlci5wdXNoKHsgdXJpOiBcIi9wYWdlcy90ZXJtaW5hbFwiLCBwYXJhbXM6IHsgY21kOiBjbWQgfSB9KVxuICB9LFxuXG4gIGdvQmFjaygpIHsgcm91dGVyLmJhY2soKSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnBhZ2UgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IH1cbi5jb250ZW50LWZ1bGwgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5oZWFkZXItYXJlYSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uaGVhZGVyLWJnIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4uaGQtdGltZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiA3cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbi5oZC10aXRsZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiAzNXB4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogNDJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgfVxuLmhkLWJhY2sgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDZweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5waWxsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5jYXJkIHsgd2lkdGg6IDMyNHB4OyBoZWlnaHQ6IDExMnB4OyBtYXJnaW4tdG9wOiA4cHg7IGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7IGJvcmRlci1yYWRpdXM6IDM2cHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmctbGVmdDogMjBweDsgcGFkZGluZy1yaWdodDogMjBweDsgfVxuLmNhcmQtbGVmdCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXg6IDE7IH1cbi5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAzMnB4OyBsaW5lLWhlaWdodDogNDBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjZmZmZmZmOyBsaW5lczogMTsgfVxuLmNhcmQtc3ViIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzdweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IG1hcmdpbi10b3A6IDRweDsgbGluZXM6IDE7IH1cbi5zcGFjZXIgeyBoZWlnaHQ6IDIwcHg7IH1cbi5zY3JvbGwtaW5uZXIgeyBtYXJnaW4tdG9wOiAtN3B4OyBwYWRkaW5nOiAwIDZweCAyMHB4IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWF4LXdpZHRoOiAxMDApIHtcbiAgLnBhZ2UgeyB3aWR0aDogMTkycHg7IGhlaWdodDogNDkwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDkycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMTkycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA4cHggMTZweCA4cHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTc2cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMTRweDsgcGFkZGluZy1yaWdodDogMTJweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gIC5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzRweDsgfVxuICAuY2FyZC1zdWIgeyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAzMHB4OyBtYXJnaW4tdG9wOiA0cHg7IH1cbiAgLnNwYWNlciB7IGhlaWdodDogMTZweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWluLXdpZHRoOiAxMDEpIHtcbiAgLnBhZ2UgeyB3aWR0aDogMjEycHg7IGhlaWdodDogNTIwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5waWxsLW1vcmUgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vYmFja19jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogMTAycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMjEycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA4cHggMTZweCA4cHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTk2cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMTRweDsgcGFkZGluZy1yaWdodDogMTJweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gIC5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzRweDsgfVxuICAuY2FyZC1zdWIgeyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAzMHB4OyBtYXJnaW4tdG9wOiA0cHg7IH1cbiAgLnNwYWNlciB7IGhlaWdodDogMTZweDsgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJvdGVjdGVkIiwiY2F0ZWdvcnkiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwib25Jbml0Iiwic2VsZiIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwic2VuZENtZCIsImNtZCIsInJvdXRlciIsInB1c2giLCJ1cmkiLCJwYXJhbXMiLCJnb0JhY2siLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQzhIM0IsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQW1DLFNBQUFELHVCQUFBRSxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBQUEsSUFBQUcsV0FBQUMsUUFBQUYsT0FBQSxHQUVwQjt3QkFDYkcsV0FBVzs0QkFBRUMsVUFBVTt3QkFBRzt3QkFDMUJDLFNBQVM7NEJBQUVDLFNBQVM7NEJBQVNDLE9BQU87d0JBQUs7d0JBRXpDQzs0QkFDRSxJQUFJQyxPQUFPLElBQUk7NEJBQ2ZBLEtBQUtDLFVBQVU7NEJBQ2ZELEtBQUtGLEtBQUssR0FBR0ksWUFBWTtnQ0FBYUYsS0FBS0MsVUFBVTs0QkFBRyxHQUFHO3dCQUM3RDt3QkFFQUU7NEJBQWNDLGNBQWMsSUFBSSxDQUFDTixLQUFLO3dCQUFFO3dCQUV4Q0c7NEJBQ0UsSUFBSUksSUFBSSxJQUFJQzs0QkFDWixJQUFJLENBQUNULE9BQU8sR0FBRyxBQUFDLE9BQU1RLEVBQUVFLFFBQVEsRUFBQyxFQUFHQyxLQUFLLENBQUMsTUFBTSxNQUFNLEFBQUMsT0FBTUgsRUFBRUksVUFBVSxFQUFDLEVBQUdELEtBQUssQ0FBQzt3QkFDckY7d0JBRUFFLFNBQVFDLEdBQUc7NEJBQ1RDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUFFQyxLQUFLO2dDQUFtQkMsUUFBUTtvQ0FBRUosS0FBS0E7Z0NBQUk7NEJBQUU7d0JBQzdEO3dCQUVBSzs0QkFBV0osUUFBQUEsT0FBTSxDQUFDSyxJQUFJO3dCQUFHO29CQUMzQiJ9