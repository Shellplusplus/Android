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
                                "scroll-inner"
                            ]
                        ],
                        {
                            paddingTop: "0",
                            paddingRight: "8px",
                            paddingBottom: "16px",
                            paddingLeft: "8px"
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
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var DEBUG_FILE = "internal://files/debug_mode.json";
                    var FAVORITES_FILE = "internal://files/favorites.json";
                    var _default = exports.default = {
                        protected: {
                            category: "",
                            entry: ""
                        },
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            cmds: [],
                            categoryTitle: "",
                            showEmpty: false
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            var commandData = self.$app.$def.shellData.commandData;
                            if ("favorites" === self.category) {
                                self.categoryTitle = self.$t("favorites.title");
                                self.loadFavoriteCommands();
                                return;
                            }
                            var catData = commandData[self.category];
                            if (catData) {
                                self.categoryTitle = self.$t(catData.i18nKey);
                                self.cmds = self.buildLocalizedItems(catData.items);
                                self.showEmpty = false;
                            } else {
                                self.categoryTitle = self.category || "";
                                self.cmds = [];
                                self.showEmpty = false;
                            }
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        buildLocalizedItems (items) {
                            var localized = [];
                            for(var i = 0; i < items.length; i++){
                                var item = items[i];
                                localized.push({
                                    cmd: item.cmd,
                                    label: this.$t(item.label),
                                    desc: this.$t(item.desc),
                                    danger: item.danger || false,
                                    labelClass: item.danger ? 'text-danger' : ''
                                });
                            }
                            return localized;
                        },
                        loadFavoriteCommands () {
                            var self = this;
                            _system2.default.readText({
                                uri: FAVORITES_FILE,
                                success: function(data) {
                                    var favorites = [];
                                    try {
                                        favorites = JSON.parse(data.text);
                                    } catch (e) {}
                                    self.applyFavoriteCommands(favorites);
                                },
                                fail: function() {
                                    self.cmds = [];
                                    self.showEmpty = true;
                                }
                            });
                        },
                        applyFavoriteCommands (favorites) {
                            var lookup = this.$app.$def.shellData.buildCommandLookup();
                            var items = [];
                            if (favorites instanceof Array) {
                                for(var i = 0; i < favorites.length; i++){
                                    var cmd = favorites[i];
                                    if (lookup[cmd]) items.push(lookup[cmd]);
                                }
                            }
                            this.cmds = this.buildLocalizedItems(items);
                            this.showEmpty = 0 === this.cmds.length;
                        },
                        sendCmd (cmd, danger) {
                            var self = this;
                            if (danger) return void _system2.default.readText({
                                uri: DEBUG_FILE,
                                success: function(data) {
                                    try {
                                        var json = JSON.parse(data.text);
                                        if (true === json.enabled) self.doNavigate(cmd);
                                        else _system3.default.showToast({
                                            message: self.$t("confirm.needDebug")
                                        });
                                    } catch (e) {
                                        _system3.default.showToast({
                                            message: self.$t("confirm.needDebug")
                                        });
                                    }
                                },
                                fail: function() {
                                    _system3.default.showToast({
                                        message: self.$t("confirm.needDebug")
                                    });
                                }
                            });
                            self.doNavigate(cmd);
                        },
                        doNavigate (cmd) {
                            var route = {
                                uri: "/pages/terminal",
                                params: {
                                    cmd: cmd
                                }
                            };
                            if ("terminal" === this.entry) return void _system.default.replace(route);
                            _system.default.push(route);
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
                                            return _vm_.categoryTitle;
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
                                            return _vm_.showEmpty;
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
                                                            return _vm_.$t("favorites.emptyTitle");
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
                                                            return _vm_.$t("favorites.emptyDesc");
                                                        }
                                                    }
                                                }, [])
                                            ])
                                        ])
                                    ];
                                }),
                                aiot.__cf__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        exp: function() {
                                            return {
                                                __list__: _vm_.cmds,
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
                                                        return _vm_.sendCmd($item.cmd, $item.danger, evt);
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
                                                        classList: function() {
                                                            const $classValue$ = "card-label " + $item.labelClass;
                                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                            return $classValue$;
                                                        },
                                                        value: function() {
                                                            return $item.label;
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
                                                            return $item.desc;
                                                        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5mby9pbmZvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbCsrL3NyYy9wYWdlcy9pbmZvL2luZm8udXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgIDxzY3JvbGwgY2xhc3M9XCJjb250ZW50LWZ1bGxcIiBzY3JvbGwteT1cInRydWVcIiBib3VuY2VzPVwidHJ1ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9oZC5wbmdcIiBjbGFzcz1cImhlYWRlci1iZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGltZVwiPnt7IG5vd1RpbWUgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGl0bGVcIj57eyBjYXRlZ29yeVRpdGxlIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxuICAgICAgICA8ZGl2IGlmPVwie3tzaG93RW1wdHl9fVwiIGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwiZmF2b3JpdGVzLmVtcHR5VGl0bGVcIikgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+e3sgJHQoXCJmYXZvcml0ZXMuZW1wdHlEZXNjXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIGZvcj1cInt7Y21kc319XCIgdGlkPVwiaWRcIiBvbmNsaWNrPVwic2VuZENtZCgkaXRlbS5jbWQsICRpdGVtLmRhbmdlcilcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWwge3sgJGl0ZW0ubGFiZWxDbGFzcyB9fVwiPnt7ICRpdGVtLmxhYmVsIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7ICRpdGVtLmRlc2MgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcbmltcG9ydCBwcm9tcHQgZnJvbSBcIkBzeXN0ZW0ucHJvbXB0XCJcblxudmFyIERFQlVHX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvZGVidWdfbW9kZS5qc29uXCJcbnZhciBGQVZPUklURVNfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9mYXZvcml0ZXMuanNvblwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvdGVjdGVkOiB7IGNhdGVnb3J5OiBcIlwiLCBlbnRyeTogXCJcIiB9LFxuXG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgY21kczogW10sXG4gICAgY2F0ZWdvcnlUaXRsZTogXCJcIixcbiAgICBzaG93RW1wdHk6IGZhbHNlXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICAgIHZhciBjb21tYW5kRGF0YSA9IHNlbGYuJGFwcC4kZGVmLnNoZWxsRGF0YS5jb21tYW5kRGF0YVxuXG4gICAgaWYgKHNlbGYuY2F0ZWdvcnkgPT09IFwiZmF2b3JpdGVzXCIpIHtcbiAgICAgIHNlbGYuY2F0ZWdvcnlUaXRsZSA9IHNlbGYuJHQoXCJmYXZvcml0ZXMudGl0bGVcIilcbiAgICAgIHNlbGYubG9hZEZhdm9yaXRlQ29tbWFuZHMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGNhdERhdGEgPSBjb21tYW5kRGF0YVtzZWxmLmNhdGVnb3J5XVxuICAgIGlmIChjYXREYXRhKSB7XG4gICAgICBzZWxmLmNhdGVnb3J5VGl0bGUgPSBzZWxmLiR0KGNhdERhdGEuaTE4bktleSlcbiAgICAgIHNlbGYuY21kcyA9IHNlbGYuYnVpbGRMb2NhbGl6ZWRJdGVtcyhjYXREYXRhLml0ZW1zKVxuICAgICAgc2VsZi5zaG93RW1wdHkgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmNhdGVnb3J5VGl0bGUgPSBzZWxmLmNhdGVnb3J5IHx8IFwiXCJcbiAgICAgIHNlbGYuY21kcyA9IFtdXG4gICAgICBzZWxmLnNob3dFbXB0eSA9IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHsgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKSB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICBidWlsZExvY2FsaXplZEl0ZW1zKGl0ZW1zKSB7XG4gICAgdmFyIGxvY2FsaXplZCA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXVxuICAgICAgbG9jYWxpemVkLnB1c2goe1xuICAgICAgICBjbWQ6IGl0ZW0uY21kLFxuICAgICAgICBsYWJlbDogdGhpcy4kdChpdGVtLmxhYmVsKSxcbiAgICAgICAgZGVzYzogdGhpcy4kdChpdGVtLmRlc2MpLFxuICAgICAgICBkYW5nZXI6IGl0ZW0uZGFuZ2VyIHx8IGZhbHNlLFxuICAgICAgICBsYWJlbENsYXNzOiBpdGVtLmRhbmdlciA/ICd0ZXh0LWRhbmdlcicgOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsaXplZFxuICB9LFxuXG4gIGxvYWRGYXZvcml0ZUNvbW1hbmRzKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUucmVhZFRleHQoe1xuICAgICAgdXJpOiBGQVZPUklURVNfRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGZhdm9yaXRlcyA9IFtdXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZmF2b3JpdGVzID0gSlNPTi5wYXJzZShkYXRhLnRleHQpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHNlbGYuYXBwbHlGYXZvcml0ZUNvbW1hbmRzKGZhdm9yaXRlcylcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5jbWRzID0gW11cbiAgICAgICAgc2VsZi5zaG93RW1wdHkgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBhcHBseUZhdm9yaXRlQ29tbWFuZHMoZmF2b3JpdGVzKSB7XG4gICAgdmFyIGxvb2t1cCA9IHRoaXMuJGFwcC4kZGVmLnNoZWxsRGF0YS5idWlsZENvbW1hbmRMb29rdXAoKVxuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgaWYgKGZhdm9yaXRlcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZhdm9yaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY21kID0gZmF2b3JpdGVzW2ldXG4gICAgICAgIGlmIChsb29rdXBbY21kXSkge1xuICAgICAgICAgIGl0ZW1zLnB1c2gobG9va3VwW2NtZF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbWRzID0gdGhpcy5idWlsZExvY2FsaXplZEl0ZW1zKGl0ZW1zKVxuICAgIHRoaXMuc2hvd0VtcHR5ID0gdGhpcy5jbWRzLmxlbmd0aCA9PT0gMFxuICB9LFxuXG4gIHNlbmRDbWQoY21kLCBkYW5nZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBpZiAoZGFuZ2VyKSB7XG4gICAgICAvKiDmo4Dmn6XosIPor5XmqKHlvI8gKi9cbiAgICAgIGZpbGUucmVhZFRleHQoe1xuICAgICAgICB1cmk6IERFQlVHX0ZJTEUsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICAgIGlmIChqc29uLmVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgLyog6LCD6K+V5qih5byP5bey5byA5ZCv77ya55u05o6l6Lez6L2sICovXG4gICAgICAgICAgICAgIHNlbGYuZG9OYXZpZ2F0ZShjbWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvKiDpnZ7osIPor5XmqKHlvI/vvJrns7vnu5/mj5DnpLogKi9cbiAgICAgICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6IHNlbGYuJHQoXCJjb25maXJtLm5lZWREZWJ1Z1wiKSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6IHNlbGYuJHQoXCJjb25maXJtLm5lZWREZWJ1Z1wiKSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6IHNlbGYuJHQoXCJjb25maXJtLm5lZWREZWJ1Z1wiKSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNlbGYuZG9OYXZpZ2F0ZShjbWQpXG4gIH0sXG5cbiAgZG9OYXZpZ2F0ZShjbWQpIHtcbiAgICB2YXIgcm91dGUgPSB7IHVyaTogXCIvcGFnZXMvdGVybWluYWxcIiwgcGFyYW1zOiB7IGNtZDogY21kIH0gfVxuICAgIGlmICh0aGlzLmVudHJ5ID09PSBcInRlcm1pbmFsXCIpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJvdXRlci5wdXNoKHJvdXRlKVxuICB9LFxuXG4gIGdvQmFjaygpIHsgcm91dGVyLmJhY2soKSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuQGltcG9ydCAnLi4vLi4vY29tbW9uL2JhY2stcGFnZS5jc3MnO1xuQGltcG9ydCAnLi4vLi4vY29tbW9uL2NhcmQuY3NzJztcblxuLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IDA7IHBhZGRpbmc6IDAgNnB4IDIwcHggNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbkBtZWRpYSAoc2hhcGU6IHJlY3QpIHtcbiAgLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC0xNXB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA4cHggMTZweCA4cHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTc2cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMTRweDsgcGFkZGluZy1yaWdodDogMTJweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gIC5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzRweDsgfVxuICAuY2FyZC1zdWIgeyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAzMHB4OyBtYXJnaW4tdG9wOiA0cHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDhweCAxNnB4IDhweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxOTZweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDRweDsgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfc3lzdGVtMyIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkRFQlVHX0ZJTEUiLCJGQVZPUklURVNfRklMRSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsImNhdGVnb3J5IiwiZW50cnkiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwiY21kcyIsImNhdGVnb3J5VGl0bGUiLCJzaG93RW1wdHkiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiY29tbWFuZERhdGEiLCIkYXBwIiwiJGRlZiIsInNoZWxsRGF0YSIsIiR0IiwibG9hZEZhdm9yaXRlQ29tbWFuZHMiLCJjYXREYXRhIiwiaTE4bktleSIsImJ1aWxkTG9jYWxpemVkSXRlbXMiLCJpdGVtcyIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwibG9jYWxpemVkIiwiaSIsImxlbmd0aCIsIml0ZW0iLCJwdXNoIiwiY21kIiwibGFiZWwiLCJkZXNjIiwiZGFuZ2VyIiwibGFiZWxDbGFzcyIsImZpbGUiLCJyZWFkVGV4dCIsInVyaSIsInN1Y2Nlc3MiLCJkYXRhIiwiZmF2b3JpdGVzIiwiSlNPTiIsInBhcnNlIiwidGV4dCIsImFwcGx5RmF2b3JpdGVDb21tYW5kcyIsImZhaWwiLCJsb29rdXAiLCJidWlsZENvbW1hbmRMb29rdXAiLCJBcnJheSIsInNlbmRDbWQiLCJqc29uIiwiZW5hYmxlZCIsImRvTmF2aWdhdGUiLCJwcm9tcHQiLCJzaG93VG9hc3QiLCJtZXNzYWdlIiwicm91dGUiLCJwYXJhbXMiLCJyb3V0ZXIiLCJyZXBsYWNlIiwiZ29CYWNrIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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