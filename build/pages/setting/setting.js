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
                            paddingRight: "20px",
                            flexShrink: 0
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
                    var CATEGORIES = [
                        {
                            id: "templates",
                            titleKey: "category.templates",
                            previewKey: "category.templatesPreview"
                        },
                        {
                            id: "file",
                            titleKey: "category.file",
                            previewKey: "category.filePreview"
                        },
                        {
                            id: "system",
                            titleKey: "category.system",
                            previewKey: "category.systemPreview"
                        },
                        {
                            id: "process",
                            titleKey: "category.process",
                            previewKey: "category.processPreview"
                        },
                        {
                            id: "network",
                            titleKey: "category.network",
                            previewKey: "category.networkPreview"
                        }
                    ];
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
                            var cats = [];
                            for(var i = 0; i < CATEGORIES.length; i++){
                                var c = CATEGORIES[i];
                                cats.push({
                                    id: c.id,
                                    title: self.$t(c.titleKey),
                                    preview: self.$t(c.previewKey),
                                    cardClass: 'templates' === c.id ? 'card-primary' : '',
                                    subClass: 'templates' === c.id ? 'card-sub-primary' : ''
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
                                        value: "快捷命令"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2V0dGluZy9zZXR0aW5nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbCsrL3NyYy9wYWdlcy9zZXR0aW5nL3NldHRpbmcudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgICAgPHNjcm9sbCBjbGFzcz1cImNvbnRlbnQtZnVsbFwiIHNjcm9sbC15PVwidHJ1ZVwiIGJvdW5jZXM9XCJ0cnVlXCI+XG5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPuW/q+aNt+WRveS7pDwvdGV4dD5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2JhY2sucG5nXCIgQGNsaWNrPVwiZ29CYWNrXCIgY2xhc3M9XCJoZC1iYWNrXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJwaWxsLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlLXdyYXBcIiBAY2xpY2s9XCJnb0JhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtaW5uZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCB7eyAkaXRlbS5jYXJkQ2xhc3MgfX1cIiBmb3I9XCJ7e2NhdGVnb3JpZXN9fVwiIHRpZD1cImlkXCIgb25jbGljaz1cImdvQ2F0ZWdvcnkoJGl0ZW0uaWQpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJGl0ZW0udGl0bGUgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViIHt7ICRpdGVtLnN1YkNsYXNzIH19XCI+e3sgJGl0ZW0ucHJldmlldyB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L3Njcm9sbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuXG4vKiDliIbnsbvmlbDmja4gKi9cbnZhciBDQVRFR09SSUVTID0gW1xuICB7IGlkOiBcInRlbXBsYXRlc1wiLCAgdGl0bGVLZXk6IFwiY2F0ZWdvcnkudGVtcGxhdGVzXCIsICBwcmV2aWV3S2V5OiBcImNhdGVnb3J5LnRlbXBsYXRlc1ByZXZpZXdcIiB9LFxuICB7IGlkOiBcImZpbGVcIiwgICAgICAgdGl0bGVLZXk6IFwiY2F0ZWdvcnkuZmlsZVwiLCAgICAgICBwcmV2aWV3S2V5OiBcImNhdGVnb3J5LmZpbGVQcmV2aWV3XCIgfSxcbiAgeyBpZDogXCJzeXN0ZW1cIiwgICAgIHRpdGxlS2V5OiBcImNhdGVnb3J5LnN5c3RlbVwiLCAgICAgcHJldmlld0tleTogXCJjYXRlZ29yeS5zeXN0ZW1QcmV2aWV3XCIgfSxcbiAgeyBpZDogXCJwcm9jZXNzXCIsICAgIHRpdGxlS2V5OiBcImNhdGVnb3J5LnByb2Nlc3NcIiwgICAgcHJldmlld0tleTogXCJjYXRlZ29yeS5wcm9jZXNzUHJldmlld1wiIH0sXG4gIHsgaWQ6IFwibmV0d29ya1wiLCAgICB0aXRsZUtleTogXCJjYXRlZ29yeS5uZXR3b3JrXCIsICAgIHByZXZpZXdLZXk6IFwiY2F0ZWdvcnkubmV0d29ya1ByZXZpZXdcIiB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvdGVjdGVkOiB7IGVudHJ5OiBcIlwiIH0sXG5cbiAgcHJpdmF0ZToge1xuICAgIG5vd1RpbWU6IFwiMDA6MDBcIixcbiAgICB0aW1lcjogbnVsbCxcbiAgICBzaG93VG9vbGJhcjogdHJ1ZSxcbiAgICBjYXRlZ29yaWVzOiBbXVxuICB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVUaW1lKCkgfSwgMTAwMClcblxuICAgIHZhciBjYXRzID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IENBVEVHT1JJRVMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjID0gQ0FURUdPUklFU1tpXVxuICAgICAgY2F0cy5wdXNoKHtcbiAgICAgICAgaWQ6IGMuaWQsXG4gICAgICAgIHRpdGxlOiBzZWxmLiR0KGMudGl0bGVLZXkpLFxuICAgICAgICBwcmV2aWV3OiBzZWxmLiR0KGMucHJldmlld0tleSksXG4gICAgICAgIGNhcmRDbGFzczogYy5pZCA9PT0gJ3RlbXBsYXRlcycgPyAnY2FyZC1wcmltYXJ5JyA6ICcnLFxuICAgICAgICBzdWJDbGFzczogYy5pZCA9PT0gJ3RlbXBsYXRlcycgPyAnY2FyZC1zdWItcHJpbWFyeScgOiAnJ1xuICAgICAgfSlcbiAgICB9XG4gICAgc2VsZi5jYXRlZ29yaWVzID0gY2F0c1xuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIGdvQ2F0ZWdvcnkoY2F0SWQpIHtcbiAgICByb3V0ZXIucHVzaCh7IHVyaTogXCIvcGFnZXMvaW5mb1wiLCBwYXJhbXM6IHsgY2F0ZWdvcnk6IGNhdElkLCBlbnRyeTogdGhpcy5lbnRyeSB9IH0pXG4gIH0sXG5cbiAgZ29CYWNrKCkge1xuICAgIHJvdXRlci5iYWNrKClcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uY29udGVudC1mdWxsIHsgd2lkdGg6IDMzNnB4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uaGVhZGVyLWFyZWEgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxleC1zaHJpbms6IDA7IH1cbi5oZWFkZXItYmcgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IH1cbi5oZC10aW1lIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3OHB4OyB0b3A6IDdweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDMycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgfVxuLmhkLXRpdGxlIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3OHB4OyB0b3A6IDM1cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiA0MnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjZmZmZmZmOyB9XG4uaGQtYmFjayB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNnB4OyB0b3A6IDZweDsgd2lkdGg6IDcycHg7IGhlaWdodDogNzJweDsgfVxuLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogbm9uZTsgfVxuLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IDA7IHBhZGRpbmc6IDAgNnB4IDIwcHggNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uY2FyZCB7IHdpZHRoOiAzMjRweDsgaGVpZ2h0OiAxMTJweDsgbWFyZ2luLXRvcDogOHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2OyBib3JkZXItcmFkaXVzOiAzNnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nLWxlZnQ6IDIwcHg7IHBhZGRpbmctcmlnaHQ6IDIwcHg7IGZsZXgtc2hyaW5rOiAwOyB9XG4uY2FyZC1sZWZ0IHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZmxleDogMTsgfVxuLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDMycHg7IGxpbmUtaGVpZ2h0OiA0MHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNmZmZmZmY7IGxpbmVzOiAxOyB9XG4uY2FyZC1zdWIgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzN3B4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgbWFyZ2luLXRvcDogNHB4OyBsaW5lczogMTsgfVxuLmNhcmQtcHJpbWFyeSB7IGJhY2tncm91bmQtY29sb3I6ICMwRDZFRkY7IH1cbi5jYXJkLXN1Yi1wcmltYXJ5IHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTsgfVxuLnNwYWNlciB7IGhlaWdodDogMjBweDsgfVxuLyogMzM2eDQ4MCByZWN0LXNjcmVlbiBvZmZzZXQgKi9cbkBtZWRpYSAoc2hhcGU6IHJlY3QpIHtcbiAgLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC0xNXB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDE5MnB4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgZmxleC1zaHJpbms6IDA7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDkycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMTkycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxNzZweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDRweDsgfVxuICAuc3BhY2VyIHsgaGVpZ2h0OiAxNnB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtaW4td2lkdGg6IDEwMSkge1xuICAucGFnZSB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDIxMnB4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbiAgLmhlYWRlci1hcmVhIHsgZGlzcGxheTogbm9uZTsgfVxuICAucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMjEycHg7IGhlaWdodDogOTJweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBmbGV4LXNocmluazogMDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAyMTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC5jYXJkIHsgd2lkdGg6IDE5NnB4OyBoZWlnaHQ6IDExMHB4OyBib3JkZXItcmFkaXVzOiAyN3B4OyBwYWRkaW5nLWxlZnQ6IDE0cHg7IHBhZGRpbmctcmlnaHQ6IDEycHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAuY2FyZC1sYWJlbCB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM0cHg7IH1cbiAgLmNhcmQtc3ViIHsgZm9udC1zaXplOiAyNHB4OyBsaW5lLWhlaWdodDogMzBweDsgbWFyZ2luLXRvcDogNHB4OyB9XG4gIC5zcGFjZXIgeyBoZWlnaHQ6IDE2cHg7IH1cbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIkNBVEVHT1JJRVMiLCJpZCIsInRpdGxlS2V5IiwicHJldmlld0tleSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsImVudHJ5IiwicHJpdmF0ZSIsIm5vd1RpbWUiLCJ0aW1lciIsInNob3dUb29sYmFyIiwiY2F0ZWdvcmllcyIsIm9uSW5pdCIsInNlbGYiLCJ1cGRhdGVUaW1lIiwic2V0SW50ZXJ2YWwiLCJjYXRzIiwiaSIsImxlbmd0aCIsImMiLCJwdXNoIiwidGl0bGUiLCIkdCIsInByZXZpZXciLCJjYXJkQ2xhc3MiLCJzdWJDbGFzcyIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwiZ29DYXRlZ29yeSIsImNhdElkIiwicm91dGVyIiwidXJpIiwicGFyYW1zIiwiY2F0ZWdvcnkiLCJnb0JhY2siLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2dDM0IsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQW1DLFNBQUFELHVCQUFBRSxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBR25DLElBQUlHLGFBQWE7d0JBQ2Y7NEJBQUVDLElBQUk7NEJBQWNDLFVBQVU7NEJBQXVCQyxZQUFZO3dCQUE0Qjt3QkFDN0Y7NEJBQUVGLElBQUk7NEJBQWNDLFVBQVU7NEJBQXVCQyxZQUFZO3dCQUF1Qjt3QkFDeEY7NEJBQUVGLElBQUk7NEJBQWNDLFVBQVU7NEJBQXVCQyxZQUFZO3dCQUF5Qjt3QkFDMUY7NEJBQUVGLElBQUk7NEJBQWNDLFVBQVU7NEJBQXVCQyxZQUFZO3dCQUEwQjt3QkFDM0Y7NEJBQUVGLElBQUk7NEJBQWNDLFVBQVU7NEJBQXVCQyxZQUFZO3dCQUEwQjtxQkFDNUY7b0JBQUEsSUFBQUMsV0FBQUMsUUFBQU4sT0FBQSxHQUVjO3dCQUNiTyxXQUFXOzRCQUFFQyxPQUFPO3dCQUFHO3dCQUV2QkMsU0FBUzs0QkFDUEMsU0FBUzs0QkFDVEMsT0FBTzs0QkFDUEMsYUFBYTs0QkFDYkMsWUFBWSxFQUFFO3dCQUNoQjt3QkFFQUM7NEJBQ0UsSUFBSUMsT0FBTyxJQUFJOzRCQUNmQSxLQUFLQyxVQUFVOzRCQUNmRCxLQUFLSixLQUFLLEdBQUdNLFlBQVk7Z0NBQWFGLEtBQUtDLFVBQVU7NEJBQUcsR0FBRzs0QkFFM0QsSUFBSUUsT0FBTyxFQUFFOzRCQUNiLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJbEIsV0FBV21CLE1BQU0sRUFBRUQsSUFBSztnQ0FDMUMsSUFBSUUsSUFBSXBCLFVBQVUsQ0FBQ2tCLEVBQUU7Z0NBQ3JCRCxLQUFLSSxJQUFJLENBQUM7b0NBQ1JwQixJQUFJbUIsRUFBRW5CLEVBQUU7b0NBQ1JxQixPQUFPUixLQUFLUyxFQUFFLENBQUNILEVBQUVsQixRQUFRO29DQUN6QnNCLFNBQVNWLEtBQUtTLEVBQUUsQ0FBQ0gsRUFBRWpCLFVBQVU7b0NBQzdCc0IsV0FBV0wsQUFBUyxnQkFBVEEsRUFBRW5CLEVBQUUsR0FBbUIsaUJBQWlCO29DQUNuRHlCLFVBQVVOLEFBQVMsZ0JBQVRBLEVBQUVuQixFQUFFLEdBQW1CLHFCQUFxQjtnQ0FDeEQ7NEJBQ0Y7NEJBQ0FhLEtBQUtGLFVBQVUsR0FBR0s7d0JBQ3BCO3dCQUVBVTs0QkFDRUMsY0FBYyxJQUFJLENBQUNsQixLQUFLO3dCQUMxQjt3QkFFQUs7NEJBQ0UsSUFBSWMsSUFBSSxJQUFJQzs0QkFDWixJQUFJLENBQUNyQixPQUFPLEdBQUcsQUFBQyxPQUFNb0IsRUFBRUUsUUFBUSxFQUFDLEVBQUdDLEtBQUssQ0FBQyxNQUFNLE1BQU0sQUFBQyxPQUFNSCxFQUFFSSxVQUFVLEVBQUMsRUFBR0QsS0FBSyxDQUFDO3dCQUNyRjt3QkFFQUUsWUFBV0MsS0FBSzs0QkFDZEMsUUFBQUEsT0FBTSxDQUFDZixJQUFJLENBQUM7Z0NBQUVnQixLQUFLO2dDQUFlQyxRQUFRO29DQUFFQyxVQUFVSjtvQ0FBTzVCLE9BQU8sSUFBSSxDQUFDQSxLQUFLO2dDQUFDOzRCQUFFO3dCQUNuRjt3QkFFQWlDOzRCQUNFSixRQUFBQSxPQUFNLENBQUNLLElBQUk7d0JBQ2I7b0JBQ0YifQ==