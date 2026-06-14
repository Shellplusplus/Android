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
                        [
                            [
                                0,
                                "history-label"
                            ]
                        ],
                        {
                            width: "284px"
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
                                "history-label"
                            ]
                        ],
                        {
                            width: "154px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "history-label"
                            ]
                        ],
                        {
                            width: "174px"
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
                    var HISTORY_FILE = "internal://files/cmd_history.json";
                    var HISTORY_CONFIG_FILE = "internal://files/history_config.json";
                    var _default = exports.default = {
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            historyItems: [],
                            hasHistory: false,
                            historyLimit: 5
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            self.refreshHistory();
                        },
                        onShow () {
                            this.refreshHistory();
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        normalizeHistoryLimit (limit) {
                            return this.$app.$def.shellData.normalizeHistoryLimit(limit);
                        },
                        refreshHistory () {
                            var self = this;
                            _system2.default.readText({
                                uri: HISTORY_CONFIG_FILE,
                                success: function(data) {
                                    try {
                                        var json = JSON.parse(data.text);
                                        self.historyLimit = self.normalizeHistoryLimit(json.limit);
                                    } catch (e) {
                                        self.historyLimit = self.$app.$def.shellData.defaultHistoryLimit;
                                    }
                                    self.loadHistory();
                                },
                                fail: function() {
                                    self.historyLimit = self.$app.$def.shellData.defaultHistoryLimit;
                                    self.loadHistory();
                                }
                            });
                        },
                        normalizeHistory (items) {
                            var normalized = [];
                            var seen = {};
                            if (!(items instanceof Array)) return normalized;
                            for(var i = 0; i < items.length; i++){
                                var cmd = items[i];
                                if ("string" == typeof cmd) {
                                    cmd = cmd.trim();
                                    if (cmd && !seen[cmd]) {
                                        seen[cmd] = true;
                                        normalized.push({
                                            id: "history-" + normalized.length,
                                            cmd: cmd
                                        });
                                        if (normalized.length >= this.historyLimit) break;
                                    }
                                }
                            }
                            return normalized;
                        },
                        loadHistory () {
                            var self = this;
                            _system2.default.readText({
                                uri: HISTORY_FILE,
                                success: function(data) {
                                    var list = [];
                                    try {
                                        list = JSON.parse(data.text);
                                    } catch (e) {}
                                    self.historyItems = self.normalizeHistory(list);
                                    self.hasHistory = self.historyItems.length > 0;
                                },
                                fail: function() {
                                    self.historyItems = [];
                                    self.hasHistory = false;
                                }
                            });
                        },
                        runHistory (cmd) {
                            if (!cmd) return;
                            _system.default.replace({
                                uri: "/pages/terminal",
                                params: {
                                    cmd: cmd,
                                    autoSend: "1"
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
                                            return _vm_.$t("history.title");
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
                                            return !_vm_.hasHistory;
                                        }
                                    }
                                }, function() {
                                    return [
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
                                                            return _vm_.$t("history.emptyTitle");
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
                                                            return _vm_.$t("history.emptyDesc");
                                                        }
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
                                            return _vm_.hasHistory;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__cf__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                exp: function() {
                                                    return {
                                                        __list__: _vm_.historyItems,
                                                        __tid__: "id"
                                                    };
                                                },
                                                key: "$idx",
                                                value: "$item"
                                            }
                                        }, function($idx, $item) {
                                            return [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "card"
                                                        ],
                                                        events: {
                                                            click: function(evt) {
                                                                return _vm_.runHistory($item.cmd, evt);
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
                                                                    "card-label",
                                                                    "history-label"
                                                                ],
                                                                value: function() {
                                                                    return $item.cmd;
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
                                                                    return _vm_.$t("history.tapToRun");
                                                                }
                                                            }
                                                        }, [])
                                                    ])
                                                ])
                                            ];
                                        })
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaGlzdG9yeS9oaXN0b3J5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbCsrL3NyYy9wYWdlcy9oaXN0b3J5L2hpc3RvcnkudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgIDxzY3JvbGwgY2xhc3M9XCJjb250ZW50LWZ1bGxcIiBzY3JvbGwteT1cInRydWVcIiBib3VuY2VzPVwidHJ1ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9oZC5wbmdcIiBjbGFzcz1cImhlYWRlci1iZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGltZVwiPnt7IG5vd1RpbWUgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGl0bGVcIj57eyAkdChcImhpc3RvcnkudGl0bGVcIikgfX08L3RleHQ+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9iYWNrLnBuZ1wiIEBjbGljaz1cImdvQmFja1wiIGNsYXNzPVwiaGQtYmFja1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlLXdyYXBcIiBAY2xpY2s9XCJnb0JhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtaW5uZXJcIj5cbiAgICAgICAgPGRpdiBpZj1cInt7IWhhc0hpc3Rvcnl9fVwiIGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiaGlzdG9yeS5lbXB0eVRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7ICR0KFwiaGlzdG9yeS5lbXB0eURlc2NcIikgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWY9XCJ7e2hhc0hpc3Rvcnl9fVwiIGNsYXNzPVwiY2FyZFwiIGZvcj1cInt7aGlzdG9yeUl0ZW1zfX1cIiB0aWQ9XCJpZFwiIG9uY2xpY2s9XCJydW5IaXN0b3J5KCRpdGVtLmNtZClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWwgaGlzdG9yeS1sYWJlbFwiPnt7ICRpdGVtLmNtZCB9fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1zdWJcIj57eyAkdChcImhpc3RvcnkudGFwVG9SdW5cIikgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcblxudmFyIEhJU1RPUllfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9jbWRfaGlzdG9yeS5qc29uXCJcbnZhciBISVNUT1JZX0NPTkZJR19GSUxFID0gXCJpbnRlcm5hbDovL2ZpbGVzL2hpc3RvcnlfY29uZmlnLmpzb25cIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgaGlzdG9yeUl0ZW1zOiBbXSxcbiAgICBoYXNIaXN0b3J5OiBmYWxzZSxcbiAgICBoaXN0b3J5TGltaXQ6IDVcbiAgfSxcblxuICBvbkluaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgc2VsZi51cGRhdGVUaW1lKClcbiAgICBzZWxmLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IHNlbGYudXBkYXRlVGltZSgpIH0sIDEwMDApXG4gICAgc2VsZi5yZWZyZXNoSGlzdG9yeSgpXG4gIH0sXG5cbiAgb25TaG93KCkge1xuICAgIHRoaXMucmVmcmVzaEhpc3RvcnkoKVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIG5vcm1hbGl6ZUhpc3RvcnlMaW1pdChsaW1pdCkge1xuICAgIHJldHVybiB0aGlzLiRhcHAuJGRlZi5zaGVsbERhdGEubm9ybWFsaXplSGlzdG9yeUxpbWl0KGxpbWl0KVxuICB9LFxuXG4gIHJlZnJlc2hIaXN0b3J5KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUucmVhZFRleHQoe1xuICAgICAgdXJpOiBISVNUT1JZX0NPTkZJR19GSUxFLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpXG4gICAgICAgICAgc2VsZi5oaXN0b3J5TGltaXQgPSBzZWxmLm5vcm1hbGl6ZUhpc3RvcnlMaW1pdChqc29uLmxpbWl0KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc2VsZi5oaXN0b3J5TGltaXQgPSBzZWxmLiRhcHAuJGRlZi5zaGVsbERhdGEuZGVmYXVsdEhpc3RvcnlMaW1pdFxuICAgICAgICB9XG4gICAgICAgIHNlbGYubG9hZEhpc3RvcnkoKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmhpc3RvcnlMaW1pdCA9IHNlbGYuJGFwcC4kZGVmLnNoZWxsRGF0YS5kZWZhdWx0SGlzdG9yeUxpbWl0XG4gICAgICAgIHNlbGYubG9hZEhpc3RvcnkoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgbm9ybWFsaXplSGlzdG9yeShpdGVtcykge1xuICAgIHZhciBub3JtYWxpemVkID0gW11cbiAgICB2YXIgc2VlbiA9IHt9XG4gICAgaWYgKCEoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSkpIHJldHVybiBub3JtYWxpemVkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNtZCA9IGl0ZW1zW2ldXG4gICAgICBpZiAodHlwZW9mIGNtZCAhPT0gXCJzdHJpbmdcIikgY29udGludWVcbiAgICAgIGNtZCA9IGNtZC50cmltKClcbiAgICAgIGlmICghY21kIHx8IHNlZW5bY21kXSkgY29udGludWVcbiAgICAgIHNlZW5bY21kXSA9IHRydWVcbiAgICAgIG5vcm1hbGl6ZWQucHVzaCh7XG4gICAgICAgIGlkOiBcImhpc3RvcnktXCIgKyBub3JtYWxpemVkLmxlbmd0aCxcbiAgICAgICAgY21kOiBjbWRcbiAgICAgIH0pXG4gICAgICBpZiAobm9ybWFsaXplZC5sZW5ndGggPj0gdGhpcy5oaXN0b3J5TGltaXQpIGJyZWFrXG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkXG4gIH0sXG5cbiAgbG9hZEhpc3RvcnkoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IEhJU1RPUllfRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGxpc3QgPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgc2VsZi5oaXN0b3J5SXRlbXMgPSBzZWxmLm5vcm1hbGl6ZUhpc3RvcnkobGlzdClcbiAgICAgICAgc2VsZi5oYXNIaXN0b3J5ID0gc2VsZi5oaXN0b3J5SXRlbXMubGVuZ3RoID4gMFxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmhpc3RvcnlJdGVtcyA9IFtdXG4gICAgICAgIHNlbGYuaGFzSGlzdG9yeSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBydW5IaXN0b3J5KGNtZCkge1xuICAgIGlmICghY21kKSByZXR1cm5cbiAgICByb3V0ZXIucmVwbGFjZSh7IHVyaTogXCIvcGFnZXMvdGVybWluYWxcIiwgcGFyYW1zOiB7IGNtZDogY21kLCBhdXRvU2VuZDogXCIxXCIgfSB9KVxuICB9LFxuXG4gIGdvQmFjaygpIHtcbiAgICByb3V0ZXIuYmFjaygpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vYmFjay1wYWdlLmNzcyc7XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY2FyZC5jc3MnO1xuXG4uc2Nyb2xsLWlubmVyIHsgbWFyZ2luLXRvcDogMDsgcGFkZGluZzogMCA2cHggMjBweCA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5oaXN0b3J5LWxhYmVsIHsgd2lkdGg6IDI4NHB4OyB9XG5cbkBtZWRpYSAoc2hhcGU6IHJlY3QpIHtcbiAgLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC0xNXB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAuY2FyZCB7IHdpZHRoOiAxODRweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmhpc3RvcnktbGFiZWwgeyB3aWR0aDogMTU0cHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5jYXJkIHsgd2lkdGg6IDIwNHB4OyBoZWlnaHQ6IDExMHB4OyBib3JkZXItcmFkaXVzOiAyN3B4OyBwYWRkaW5nLWxlZnQ6IDE0cHg7IHBhZGRpbmctcmlnaHQ6IDE2cHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAuaGlzdG9yeS1sYWJlbCB7IHdpZHRoOiAxNzRweDsgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJISVNUT1JZX0ZJTEUiLCJISVNUT1JZX0NPTkZJR19GSUxFIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsIm5vd1RpbWUiLCJ0aW1lciIsImhpc3RvcnlJdGVtcyIsImhhc0hpc3RvcnkiLCJoaXN0b3J5TGltaXQiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwicmVmcmVzaEhpc3RvcnkiLCJvblNob3ciLCJvbkRlc3Ryb3kiLCJjbGVhckludGVydmFsIiwiZCIsIkRhdGUiLCJnZXRIb3VycyIsInNsaWNlIiwiZ2V0TWludXRlcyIsIm5vcm1hbGl6ZUhpc3RvcnlMaW1pdCIsImxpbWl0IiwiJGFwcCIsIiRkZWYiLCJzaGVsbERhdGEiLCJmaWxlIiwicmVhZFRleHQiLCJ1cmkiLCJzdWNjZXNzIiwiZGF0YSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiZGVmYXVsdEhpc3RvcnlMaW1pdCIsImxvYWRIaXN0b3J5IiwiZmFpbCIsIm5vcm1hbGl6ZUhpc3RvcnkiLCJpdGVtcyIsIm5vcm1hbGl6ZWQiLCJzZWVuIiwiQXJyYXkiLCJpIiwibGVuZ3RoIiwiY21kIiwidHJpbSIsInB1c2giLCJpZCIsImxpc3QiLCJydW5IaXN0b3J5Iiwicm91dGVyIiwicmVwbGFjZSIsInBhcmFtcyIsImF1dG9TZW5kIiwiZ29CYWNrIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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