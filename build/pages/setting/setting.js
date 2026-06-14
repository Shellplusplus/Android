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
                                "page"
                            ]
                        ],
                        {
                            width: "336px",
                            height: "480px",
                            backgroundColor: "#000000",
                            flexDirection: "column"
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
                            flex: 1,
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
                            position: "relative",
                            flexShrink: 0
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
                            flex: 1,
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
                            justifyContent: "flex-start",
                            flexShrink: 0
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
                            flex: 1,
                            flexDirection: "column"
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
                            justifyContent: "flex-start",
                            flexShrink: 0
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
                            entry: ""
                        },
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            showToolbar: true,
                            categories: []
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            var categoryDefs = self.$app.$def.shellData.categoryDefs;
                            var cats = [];
                            for(var i = 0; i < categoryDefs.length; i++){
                                var c = categoryDefs[i];
                                cats.push({
                                    id: c.id,
                                    title: self.$t(c.titleKey),
                                    preview: self.$t(c.previewKey),
                                    cardClass: 'favorites' === c.id ? 'card-primary' : '',
                                    subClass: 'favorites' === c.id ? 'card-sub-primary' : ''
                                });
                            }
                            self.categories = cats;
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        goCategory (catId) {
                            _system.default.push({
                                uri: "/pages/info",
                                params: {
                                    category: catId,
                                    entry: this.entry
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
                                    show: function() {
                                        return _vm_.showToolbar;
                                    },
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
                                            return _vm_.$t("setting.title");
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
                                    show: function() {
                                        return _vm_.showToolbar;
                                    },
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
                                                __list__: _vm_.categories,
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
                                                        return _vm_.goCategory($item.id, evt);
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
                                                            return $item.title;
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
                                                            return $item.preview;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2V0dGluZy9zZXR0aW5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbCsrL3NyYy9wYWdlcy9zZXR0aW5nL3NldHRpbmcudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtZnVsbFwiIHNjcm9sbC15PVwidHJ1ZVwiIGJvdW5jZXM9XCJ0cnVlXCI+XG5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPnt7ICR0KFwic2V0dGluZy50aXRsZVwiKSB9fTwvdGV4dD5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2JhY2sucG5nXCIgQGNsaWNrPVwiZ29CYWNrXCIgY2xhc3M9XCJoZC1iYWNrXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJwaWxsLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlLXdyYXBcIiBAY2xpY2s9XCJnb0JhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtaW5uZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB7eyAkaXRlbS5jYXJkQ2xhc3MgfX1cIiBmb3I9XCJ7e2NhdGVnb3JpZXN9fVwiIHRpZD1cImlkXCIgb25jbGljaz1cImdvQ2F0ZWdvcnkoJGl0ZW0uaWQpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJGl0ZW0udGl0bGUgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViIHt7ICRpdGVtLnN1YkNsYXNzIH19XCI+e3sgJGl0ZW0ucHJldmlldyB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L3Njcm9sbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3RlY3RlZDogeyBlbnRyeTogXCJcIiB9LFxuXG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgY2F0ZWdvcmllczogW11cbiAgfSxcblxuICBvbkluaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgc2VsZi51cGRhdGVUaW1lKClcbiAgICBzZWxmLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IHNlbGYudXBkYXRlVGltZSgpIH0sIDEwMDApXG5cbiAgICB2YXIgY2F0ZWdvcnlEZWZzID0gc2VsZi4kYXBwLiRkZWYuc2hlbGxEYXRhLmNhdGVnb3J5RGVmc1xuICAgIHZhciBjYXRzID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3J5RGVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBjYXRlZ29yeURlZnNbaV1cbiAgICAgIGNhdHMucHVzaCh7XG4gICAgICAgIGlkOiBjLmlkLFxuICAgICAgICB0aXRsZTogc2VsZi4kdChjLnRpdGxlS2V5KSxcbiAgICAgICAgcHJldmlldzogc2VsZi4kdChjLnByZXZpZXdLZXkpLFxuICAgICAgICBjYXJkQ2xhc3M6IGMuaWQgPT09ICdmYXZvcml0ZXMnID8gJ2NhcmQtcHJpbWFyeScgOiAnJyxcbiAgICAgICAgc3ViQ2xhc3M6IGMuaWQgPT09ICdmYXZvcml0ZXMnID8gJ2NhcmQtc3ViLXByaW1hcnknIDogJydcbiAgICAgIH0pXG4gICAgfVxuICAgIHNlbGYuY2F0ZWdvcmllcyA9IGNhdHNcbiAgfSxcblxuICBvbkRlc3Ryb3koKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICBnb0NhdGVnb3J5KGNhdElkKSB7XG4gICAgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL2luZm9cIiwgcGFyYW1zOiB7IGNhdGVnb3J5OiBjYXRJZCwgZW50cnk6IHRoaXMuZW50cnkgfSB9KVxuICB9LFxuXG4gIGdvQmFjaygpIHtcbiAgICByb3V0ZXIuYmFjaygpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY2FyZC5jc3MnO1xuXG4ucGFnZSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiA0ODBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAzMzZweDsgZmxleDogMTsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLmhlYWRlci1hcmVhIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsZXgtc2hyaW5rOiAwOyB9XG4uaGVhZGVyLWJnIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4uaGQtdGltZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiA3cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbi5oZC10aXRsZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiAzNXB4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogNDJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgfVxuLmhkLWJhY2sgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDZweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5waWxsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5zY3JvbGwtaW5uZXIgeyBtYXJnaW4tdG9wOiAwOyBwYWRkaW5nOiAwIDZweCAyMHB4IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLnNwYWNlciB7IGhlaWdodDogMjBweDsgfVxuLyogMzM2eDQ4MCByZWN0LXNjcmVlbiBvZmZzZXQgKi9cbkBtZWRpYSAoc2hhcGU6IHJlY3QpIHtcbiAgLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC0xNXB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDE5MnB4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgZmxleC1zaHJpbms6IDA7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDkycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMTkycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA4cHggMTZweCA4cHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTc2cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMTRweDsgcGFkZGluZy1yaWdodDogMTJweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gIC5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzRweDsgfVxuICAuY2FyZC1zdWIgeyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAzMHB4OyBtYXJnaW4tdG9wOiA0cHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5wYWdlIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5jb250ZW50LWZ1bGwgeyB3aWR0aDogMjEycHg7IGZsZXg6IDE7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGZsZXgtc2hyaW5rOiAwOyB9XG4gIC5waWxsLW1vcmUtd3JhcCB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAucGlsbC1tb3JlIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDEwMnB4IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IH1cbiAgLmhkLXRpdGxlIHsgd2lkdGg6IDIxMnB4OyB0b3A6IDIycHg7IGZvbnQtc2l6ZTogMjJweDsgfVxuICAuaGQtYmFjayB7IGxlZnQ6IDRweDsgdG9wOiA0cHg7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IH1cbiAgLnNjcm9sbC1pbm5lciB7IHBhZGRpbmc6IDAgOHB4IDE2cHggOHB4OyB9XG4gIC5jYXJkIHsgd2lkdGg6IDE5NnB4OyBoZWlnaHQ6IDExMHB4OyBib3JkZXItcmFkaXVzOiAyN3B4OyBwYWRkaW5nLWxlZnQ6IDE0cHg7IHBhZGRpbmctcmlnaHQ6IDEycHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAuY2FyZC1sYWJlbCB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM0cHg7IH1cbiAgLmNhcmQtc3ViIHsgZm9udC1zaXplOiAyNHB4OyBsaW5lLWhlaWdodDogMzBweDsgbWFyZ2luLXRvcDogNHB4OyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcm90ZWN0ZWQiLCJlbnRyeSIsInByaXZhdGUiLCJub3dUaW1lIiwidGltZXIiLCJzaG93VG9vbGJhciIsImNhdGVnb3JpZXMiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiY2F0ZWdvcnlEZWZzIiwiJGFwcCIsIiRkZWYiLCJzaGVsbERhdGEiLCJjYXRzIiwiaSIsImxlbmd0aCIsImMiLCJwdXNoIiwiaWQiLCJ0aXRsZSIsIiR0IiwidGl0bGVLZXkiLCJwcmV2aWV3IiwicHJldmlld0tleSIsImNhcmRDbGFzcyIsInN1YkNsYXNzIiwib25EZXN0cm95IiwiY2xlYXJJbnRlcnZhbCIsImQiLCJEYXRlIiwiZ2V0SG91cnMiLCJzbGljZSIsImdldE1pbnV0ZXMiLCJnb0NhdGVnb3J5IiwiY2F0SWQiLCJyb3V0ZXIiLCJ1cmkiLCJwYXJhbXMiLCJjYXRlZ29yeSIsImdvQmFjayIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNnQzNCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUFtQyxTQUFBRCx1QkFBQUUsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFcEI7d0JBQ2JHLFdBQVc7NEJBQUVDLE9BQU87d0JBQUc7d0JBRXZCQyxTQUFTOzRCQUNQQyxTQUFTOzRCQUNUQyxPQUFPOzRCQUNQQyxhQUFhOzRCQUNiQyxZQUFZLEVBQUU7d0JBQ2hCO3dCQUVBQzs0QkFDRSxJQUFJQyxPQUFPLElBQUk7NEJBQ2ZBLEtBQUtDLFVBQVU7NEJBQ2ZELEtBQUtKLEtBQUssR0FBR00sWUFBWTtnQ0FBYUYsS0FBS0MsVUFBVTs0QkFBRyxHQUFHOzRCQUUzRCxJQUFJRSxlQUFlSCxLQUFLSSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxZQUFZOzRCQUN4RCxJQUFJSSxPQUFPLEVBQUU7NEJBQ2IsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlMLGFBQWFNLE1BQU0sRUFBRUQsSUFBSztnQ0FDNUMsSUFBSUUsSUFBSVAsWUFBWSxDQUFDSyxFQUFFO2dDQUN2QkQsS0FBS0ksSUFBSSxDQUFDO29DQUNSQyxJQUFJRixFQUFFRSxFQUFFO29DQUNSQyxPQUFPYixLQUFLYyxFQUFFLENBQUNKLEVBQUVLLFFBQVE7b0NBQ3pCQyxTQUFTaEIsS0FBS2MsRUFBRSxDQUFDSixFQUFFTyxVQUFVO29DQUM3QkMsV0FBV1IsQUFBUyxnQkFBVEEsRUFBRUUsRUFBRSxHQUFtQixpQkFBaUI7b0NBQ25ETyxVQUFVVCxBQUFTLGdCQUFUQSxFQUFFRSxFQUFFLEdBQW1CLHFCQUFxQjtnQ0FDeEQ7NEJBQ0Y7NEJBQ0FaLEtBQUtGLFVBQVUsR0FBR1M7d0JBQ3BCO3dCQUVBYTs0QkFDRUMsY0FBYyxJQUFJLENBQUN6QixLQUFLO3dCQUMxQjt3QkFFQUs7NEJBQ0UsSUFBSXFCLElBQUksSUFBSUM7NEJBQ1osSUFBSSxDQUFDNUIsT0FBTyxHQUFHLEFBQUMsT0FBTTJCLEVBQUVFLFFBQVEsRUFBQyxFQUFHQyxLQUFLLENBQUMsTUFBTSxNQUFNLEFBQUMsT0FBTUgsRUFBRUksVUFBVSxFQUFDLEVBQUdELEtBQUssQ0FBQzt3QkFDckY7d0JBRUFFLFlBQVdDLEtBQUs7NEJBQ2RDLFFBQUFBLE9BQU0sQ0FBQ2xCLElBQUksQ0FBQztnQ0FBRW1CLEtBQUs7Z0NBQWVDLFFBQVE7b0NBQUVDLFVBQVVKO29DQUFPbkMsT0FBTyxJQUFJLENBQUNBLEtBQUs7Z0NBQUM7NEJBQUU7d0JBQ25GO3dCQUVBd0M7NEJBQ0VKLFFBQUFBLE9BQU0sQ0FBQ0ssSUFBSTt3QkFDYjtvQkFDRiJ9