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
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var FAVORITES_FILE = "internal://files/favorites.json";
                    var _default = exports.default = {
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            cmds: [],
                            favorites: []
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            self.loadFavorites();
                        },
                        onShow () {
                            this.loadFavorites();
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        normalizeFavorites (items) {
                            var normalized = [];
                            var seen = {};
                            if (!(items instanceof Array)) return normalized;
                            var lookup = this.$app.$def.shellData.buildCommandLookup();
                            for(var i = 0; i < items.length; i++){
                                var cmd = items[i];
                                if ("string" == typeof cmd) {
                                    cmd = cmd.trim();
                                    if (cmd && !seen[cmd] && lookup[cmd]) {
                                        seen[cmd] = true;
                                        normalized.push(cmd);
                                    }
                                }
                            }
                            return normalized;
                        },
                        loadFavorites () {
                            var self = this;
                            _system2.default.readText({
                                uri: FAVORITES_FILE,
                                success: function(data) {
                                    var favorites = [];
                                    try {
                                        favorites = JSON.parse(data.text);
                                    } catch (e) {}
                                    self.favorites = self.normalizeFavorites(favorites);
                                    self.buildCards();
                                },
                                fail: function() {
                                    self.favorites = [];
                                    self.buildCards();
                                }
                            });
                        },
                        buildCards () {
                            var cards = [];
                            var commandData = this.$app.$def.shellData.commandData;
                            for(var categoryId in commandData)if (commandData.hasOwnProperty(categoryId)) {
                                var items = commandData[categoryId].items;
                                for(var i = 0; i < items.length; i++){
                                    var item = items[i];
                                    var isFavorited = this.isFavorited(item.cmd);
                                    cards.push({
                                        id: "favorite-" + item.cmd,
                                        cmd: item.cmd,
                                        label: this.$t(item.label),
                                        desc: this.$t(isFavorited ? "favorites.removeDesc" : "favorites.addDesc"),
                                        cardClass: isFavorited ? "card-primary" : "",
                                        subClass: isFavorited ? "card-sub-primary" : "",
                                        labelClass: item.danger ? "text-danger" : ""
                                    });
                                }
                            }
                            this.cmds = cards;
                        },
                        isFavorited (cmd) {
                            for(var i = 0; i < this.favorites.length; i++)if (this.favorites[i] === cmd) return true;
                            return false;
                        },
                        writeFavorites () {
                            var self = this;
                            _system2.default.writeText({
                                uri: FAVORITES_FILE,
                                text: JSON.stringify(this.favorites),
                                append: false,
                                success: function() {
                                    self.buildCards();
                                }
                            });
                        },
                        toggleFavorite (cmd) {
                            var next = [];
                            var removed = false;
                            for(var i = 0; i < this.favorites.length; i++)if (this.favorites[i] === cmd) removed = true;
                            else next.push(this.favorites[i]);
                            if (!removed) next.unshift(cmd);
                            this.favorites = this.normalizeFavorites(next);
                            this.writeFavorites();
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
                                            return _vm_.$t("favorites.manageTitle");
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
                                                classList: function() {
                                                    const $classValue$ = "card " + $item.cardClass;
                                                    if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                    return $classValue$;
                                                },
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.toggleFavorite($item.cmd, evt);
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
                                                        classList: function() {
                                                            const $classValue$ = "card-sub " + $item.subClass;
                                                            if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                            return $classValue$;
                                                        },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjExXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTFcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtZnVsbFwiIHNjcm9sbC15PVwidHJ1ZVwiIGJvdW5jZXM9XCJ0cnVlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPnt7ICR0KFwiZmF2b3JpdGVzLm1hbmFnZVRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLWlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHt7ICRpdGVtLmNhcmRDbGFzcyB9fVwiIGZvcj1cInt7Y21kc319XCIgdGlkPVwiaWRcIiBvbmNsaWNrPVwidG9nZ2xlRmF2b3JpdGUoJGl0ZW0uY21kKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbCB7eyAkaXRlbS5sYWJlbENsYXNzIH19XCI+e3sgJGl0ZW0ubGFiZWwgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViIHt7ICRpdGVtLnN1YkNsYXNzIH19XCI+e3sgJGl0ZW0uZGVzYyB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zY3JvbGw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcbmltcG9ydCBmaWxlIGZyb20gXCJAc3lzdGVtLmZpbGVcIlxuXG52YXIgRkFWT1JJVEVTX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvZmF2b3JpdGVzLmpzb25cIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgY21kczogW10sXG4gICAgZmF2b3JpdGVzOiBbXVxuICB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVUaW1lKCkgfSwgMTAwMClcbiAgICBzZWxmLmxvYWRGYXZvcml0ZXMoKVxuICB9LFxuXG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmxvYWRGYXZvcml0ZXMoKVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIG5vcm1hbGl6ZUZhdm9yaXRlcyhpdGVtcykge1xuICAgIHZhciBub3JtYWxpemVkID0gW11cbiAgICB2YXIgc2VlbiA9IHt9XG4gICAgaWYgKCEoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSkpIHJldHVybiBub3JtYWxpemVkXG4gICAgdmFyIGxvb2t1cCA9IHRoaXMuJGFwcC4kZGVmLnNoZWxsRGF0YS5idWlsZENvbW1hbmRMb29rdXAoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjbWQgPSBpdGVtc1tpXVxuICAgICAgaWYgKHR5cGVvZiBjbWQgIT09IFwic3RyaW5nXCIpIGNvbnRpbnVlXG4gICAgICBjbWQgPSBjbWQudHJpbSgpXG4gICAgICBpZiAoIWNtZCB8fCBzZWVuW2NtZF0gfHwgIWxvb2t1cFtjbWRdKSBjb250aW51ZVxuICAgICAgc2VlbltjbWRdID0gdHJ1ZVxuICAgICAgbm9ybWFsaXplZC5wdXNoKGNtZClcbiAgICB9XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRcbiAgfSxcblxuICBsb2FkRmF2b3JpdGVzKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUucmVhZFRleHQoe1xuICAgICAgdXJpOiBGQVZPUklURVNfRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGZhdm9yaXRlcyA9IFtdXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZmF2b3JpdGVzID0gSlNPTi5wYXJzZShkYXRhLnRleHQpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHNlbGYuZmF2b3JpdGVzID0gc2VsZi5ub3JtYWxpemVGYXZvcml0ZXMoZmF2b3JpdGVzKVxuICAgICAgICBzZWxmLmJ1aWxkQ2FyZHMoKVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmZhdm9yaXRlcyA9IFtdXG4gICAgICAgIHNlbGYuYnVpbGRDYXJkcygpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBidWlsZENhcmRzKCkge1xuICAgIHZhciBjYXJkcyA9IFtdXG4gICAgdmFyIGNvbW1hbmREYXRhID0gdGhpcy4kYXBwLiRkZWYuc2hlbGxEYXRhLmNvbW1hbmREYXRhXG4gICAgZm9yICh2YXIgY2F0ZWdvcnlJZCBpbiBjb21tYW5kRGF0YSkge1xuICAgICAgaWYgKCFjb21tYW5kRGF0YS5oYXNPd25Qcm9wZXJ0eShjYXRlZ29yeUlkKSkgY29udGludWVcbiAgICAgIHZhciBpdGVtcyA9IGNvbW1hbmREYXRhW2NhdGVnb3J5SWRdLml0ZW1zXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV1cbiAgICAgICAgdmFyIGlzRmF2b3JpdGVkID0gdGhpcy5pc0Zhdm9yaXRlZChpdGVtLmNtZClcbiAgICAgICAgY2FyZHMucHVzaCh7XG4gICAgICAgICAgaWQ6IFwiZmF2b3JpdGUtXCIgKyBpdGVtLmNtZCxcbiAgICAgICAgICBjbWQ6IGl0ZW0uY21kLFxuICAgICAgICAgIGxhYmVsOiB0aGlzLiR0KGl0ZW0ubGFiZWwpLFxuICAgICAgICAgIGRlc2M6IHRoaXMuJHQoaXNGYXZvcml0ZWQgPyBcImZhdm9yaXRlcy5yZW1vdmVEZXNjXCIgOiBcImZhdm9yaXRlcy5hZGREZXNjXCIpLFxuICAgICAgICAgIGNhcmRDbGFzczogaXNGYXZvcml0ZWQgPyBcImNhcmQtcHJpbWFyeVwiIDogXCJcIixcbiAgICAgICAgICBzdWJDbGFzczogaXNGYXZvcml0ZWQgPyBcImNhcmQtc3ViLXByaW1hcnlcIiA6IFwiXCIsXG4gICAgICAgICAgbGFiZWxDbGFzczogaXRlbS5kYW5nZXIgPyBcInRleHQtZGFuZ2VyXCIgOiBcIlwiXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY21kcyA9IGNhcmRzXG4gIH0sXG5cbiAgaXNGYXZvcml0ZWQoY21kKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZhdm9yaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZmF2b3JpdGVzW2ldID09PSBjbWQpIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9LFxuXG4gIHdyaXRlRmF2b3JpdGVzKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUud3JpdGVUZXh0KHtcbiAgICAgIHVyaTogRkFWT1JJVEVTX0ZJTEUsXG4gICAgICB0ZXh0OiBKU09OLnN0cmluZ2lmeSh0aGlzLmZhdm9yaXRlcyksXG4gICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuYnVpbGRDYXJkcygpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0b2dnbGVGYXZvcml0ZShjbWQpIHtcbiAgICB2YXIgbmV4dCA9IFtdXG4gICAgdmFyIHJlbW92ZWQgPSBmYWxzZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5mYXZvcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmZhdm9yaXRlc1tpXSA9PT0gY21kKSB7XG4gICAgICAgIHJlbW92ZWQgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0LnB1c2godGhpcy5mYXZvcml0ZXNbaV0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgbmV4dC51bnNoaWZ0KGNtZClcbiAgICB9XG4gICAgdGhpcy5mYXZvcml0ZXMgPSB0aGlzLm5vcm1hbGl6ZUZhdm9yaXRlcyhuZXh0KVxuICAgIHRoaXMud3JpdGVGYXZvcml0ZXMoKVxuICB9LFxuXG4gIGdvQmFjaygpIHtcbiAgICByb3V0ZXIuYmFjaygpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vYmFjay1wYWdlLmNzcyc7XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY2FyZC5jc3MnO1xuXG4uc2Nyb2xsLWlubmVyIHsgbWFyZ2luLXRvcDogMDsgcGFkZGluZzogMCA2cHggMjBweCA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuQG1lZGlhIChzaGFwZTogcmVjdCkge1xuICAuc2Nyb2xsLWlubmVyIHsgbWFyZ2luLXRvcDogLTE1cHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1heC13aWR0aDogMTAwKSB7XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDhweCAxNnB4IDhweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxNzZweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDRweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWluLXdpZHRoOiAxMDEpIHtcbiAgLnNjcm9sbC1pbm5lciB7IHBhZGRpbmc6IDAgOHB4IDE2cHggOHB4OyB9XG4gIC5jYXJkIHsgd2lkdGg6IDE5NnB4OyBoZWlnaHQ6IDExMHB4OyBib3JkZXItcmFkaXVzOiAyN3B4OyBwYWRkaW5nLWxlZnQ6IDE0cHg7IHBhZGRpbmctcmlnaHQ6IDEycHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAuY2FyZC1sYWJlbCB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM0cHg7IH1cbiAgLmNhcmQtc3ViIHsgZm9udC1zaXplOiAyNHB4OyBsaW5lLWhlaWdodDogMzBweDsgbWFyZ2luLXRvcDogNHB4OyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkZBVk9SSVRFU19GSUxFIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsIm5vd1RpbWUiLCJ0aW1lciIsImNtZHMiLCJmYXZvcml0ZXMiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwibG9hZEZhdm9yaXRlcyIsIm9uU2hvdyIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwibm9ybWFsaXplRmF2b3JpdGVzIiwiaXRlbXMiLCJub3JtYWxpemVkIiwic2VlbiIsIkFycmF5IiwibG9va3VwIiwiJGFwcCIsIiRkZWYiLCJzaGVsbERhdGEiLCJidWlsZENvbW1hbmRMb29rdXAiLCJpIiwibGVuZ3RoIiwiY21kIiwidHJpbSIsInB1c2giLCJmaWxlIiwicmVhZFRleHQiLCJ1cmkiLCJzdWNjZXNzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJidWlsZENhcmRzIiwiZmFpbCIsImNhcmRzIiwiY29tbWFuZERhdGEiLCJjYXRlZ29yeUlkIiwiaGFzT3duUHJvcGVydHkiLCJpdGVtIiwiaXNGYXZvcml0ZWQiLCJpZCIsImxhYmVsIiwiJHQiLCJkZXNjIiwiY2FyZENsYXNzIiwic3ViQ2xhc3MiLCJsYWJlbENsYXNzIiwiZGFuZ2VyIiwid3JpdGVGYXZvcml0ZXMiLCJ3cml0ZVRleHQiLCJzdHJpbmdpZnkiLCJhcHBlbmQiLCJ0b2dnbGVGYXZvcml0ZSIsIm5leHQiLCJyZW1vdmVkIiwidW5zaGlmdCIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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