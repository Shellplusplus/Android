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
                                "text-container"
                            ]
                        ],
                        {
                            marginTop: 0,
                            paddingTop: "6px",
                            paddingRight: "16px",
                            paddingBottom: "20px",
                            paddingLeft: "16px",
                            width: "336px",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "log-text"
                            ]
                        ],
                        {
                            width: "304px",
                            fontSize: "28px",
                            lineHeight: "36px",
                            textAlign: "left",
                            color: "#ffffff",
                            fontWeight: "bold",
                            wordBreak: "break-all"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:rect)"
                        },
                        [
                            [
                                0,
                                "text-container"
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
                                "text-container"
                            ]
                        ],
                        {
                            paddingTop: "6px",
                            paddingRight: "10px",
                            paddingBottom: "20px",
                            paddingLeft: "10px",
                            width: "192px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "log-text"
                            ]
                        ],
                        {
                            width: "172px"
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
                                "text-container"
                            ]
                        ],
                        {
                            paddingTop: "6px",
                            paddingRight: "10px",
                            paddingBottom: "20px",
                            paddingLeft: "10px",
                            width: "212px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "log-text"
                            ]
                        ],
                        {
                            width: "192px"
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
                    var _default = exports.default = {
                        protected: {
                            content: ""
                        },
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            logText: "",
                            showToolbar: true
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            if (this.content) self.logText = this.content;
                            else _system2.default.readText({
                                uri: "internal://files/full_output.txt",
                                success: function(data) {
                                    if (data.text) self.logText = data.text;
                                    else self.logText = self.$t("log.empty");
                                },
                                fail: function() {
                                    self.logText = self.$t("log.empty");
                                }
                            });
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        onTxtClick () {
                            this.showToolbar = !this.showToolbar;
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
                                id: "scrollId",
                                classList: [
                                    "content-full"
                                ],
                                scrollY: "true",
                                bounces: "true",
                                events: {
                                    click: function(evt) {
                                        return _vm_.onTxtClick(evt);
                                    }
                                }
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
                                            return _vm_.$t("log.title");
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
                                        "text-container"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "log-text"
                                        ],
                                        value: function() {
                                            return _vm_.logText;
                                        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9nL2xvZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvcGFnZXMvbG9nL2xvZy51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjExXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTFcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgPHNjcm9sbCBpZD1cInNjcm9sbElkXCIgY2xhc3M9XCJjb250ZW50LWZ1bGxcIiBzY3JvbGwteT1cInRydWVcIiBib3VuY2VzPVwidHJ1ZVwiIG9uY2xpY2s9XCJvblR4dENsaWNrXCI+XG4gICAgICA8ZGl2IHNob3c9XCJ7e3Nob3dUb29sYmFyfX1cIiBjbGFzcz1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9oZC5wbmdcIiBjbGFzcz1cImhlYWRlci1iZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGltZVwiPnt7IG5vd1RpbWUgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGl0bGVcIj57eyAkdChcImxvZy50aXRsZVwiKSB9fTwvdGV4dD5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2JhY2sucG5nXCIgQGNsaWNrPVwiZ29CYWNrXCIgY2xhc3M9XCJoZC1iYWNrXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJwaWxsLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlLXdyYXBcIiBAY2xpY2s9XCJnb0JhY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGlsbC1tb3JlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImxvZy10ZXh0XCI+e3sgbG9nVGV4dCB9fTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm90ZWN0ZWQ6IHsgY29udGVudDogXCJcIiB9LFxuXG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgbG9nVGV4dDogXCJcIixcbiAgICBzaG93VG9vbGJhcjogdHJ1ZVxuICB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVUaW1lKCkgfSwgMTAwMClcbiAgICAvKiDkvJjlhYjku47mlofku7bor7vlj5blrozmlbTovpPlh7rvvIzlhbbmrKHku47ot6/nlLHlj4LmlbAgKi9cbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICBzZWxmLmxvZ1RleHQgPSB0aGlzLmNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICAgIHVyaTogXCJpbnRlcm5hbDovL2ZpbGVzL2Z1bGxfb3V0cHV0LnR4dFwiLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEudGV4dCkge1xuICAgICAgICAgICAgc2VsZi5sb2dUZXh0ID0gZGF0YS50ZXh0XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYubG9nVGV4dCA9IHNlbGYuJHQoXCJsb2cuZW1wdHlcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYubG9nVGV4dCA9IHNlbGYuJHQoXCJsb2cuZW1wdHlcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgfSxcblxuICB1cGRhdGVUaW1lKCkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKVxuICAgIHRoaXMubm93VGltZSA9IChcIjBcIiArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBkLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpXG4gIH0sXG5cbiAgb25UeHRDbGljaygpIHtcbiAgICB0aGlzLnNob3dUb29sYmFyID0gIXRoaXMuc2hvd1Rvb2xiYXJcbiAgfSxcblxuICBnb0JhY2soKSB7IHJvdXRlci5iYWNrKCkgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyB9XG4uY29udGVudC1mdWxsIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uaGVhZGVyLWFyZWEgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmhlYWRlci1iZyB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgfVxuLmhkLXRpbWUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogN3B4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogMzJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOyB9XG4uaGQtdGl0bGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogMzVweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDQycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNmZmZmZmY7IH1cbi5oZC1iYWNrIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA2cHg7IHRvcDogNnB4OyB3aWR0aDogNzJweDsgaGVpZ2h0OiA3MnB4OyB9XG4ucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBub25lOyB9XG4udGV4dC1jb250YWluZXIgeyBtYXJnaW4tdG9wOiAwOyBwYWRkaW5nOiA2cHggMTZweCAyMHB4IDE2cHg7IHdpZHRoOiAzMzZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLmxvZy10ZXh0IHsgd2lkdGg6IDMwNHB4OyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNnB4OyB0ZXh0LWFsaWduOiBsZWZ0OyBjb2xvcjogI2ZmZmZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgfVxuQG1lZGlhIChzaGFwZTogcmVjdCkge1xuICAudGV4dC1jb250YWluZXIgeyBtYXJnaW4tdG9wOiAtMTVweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWF4LXdpZHRoOiAxMDApIHtcbiAgLmhlYWRlci1hcmVhIHsgZGlzcGxheTogbm9uZTsgfVxuICAucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMTkycHg7IGhlaWdodDogOTJweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5waWxsLW1vcmUtd3JhcCB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDMycHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5waWxsLW1vcmUgeyB3aWR0aDogOTJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiA5MnB4IDcycHg7IGJvcmRlci1yYWRpdXM6IDMycHg7IH1cbiAgLnBhZ2UgeyB3aWR0aDogMTkycHg7IGhlaWdodDogNDkwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMTkycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAudGV4dC1jb250YWluZXIgeyBwYWRkaW5nOiA2cHggMTBweCAyMHB4IDEwcHg7IHdpZHRoOiAxOTJweDsgfVxuICAubG9nLXRleHQgeyB3aWR0aDogMTcycHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5wYWdlIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5jb250ZW50LWZ1bGwgeyB3aWR0aDogMjEycHg7IGhlaWdodDogNTIwcHg7IH1cbiAgLmhkLXRpdGxlIHsgd2lkdGg6IDIxMnB4OyB0b3A6IDIycHg7IGZvbnQtc2l6ZTogMjJweDsgfVxuICAuaGQtYmFjayB7IGxlZnQ6IDRweDsgdG9wOiA0cHg7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IH1cbiAgLnRleHQtY29udGFpbmVyIHsgcGFkZGluZzogNnB4IDEwcHggMjBweCAxMHB4OyB3aWR0aDogMjEycHg7IH1cbiAgLmxvZy10ZXh0IHsgd2lkdGg6IDE5MnB4OyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsImNvbnRlbnQiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwibG9nVGV4dCIsInNob3dUb29sYmFyIiwib25Jbml0Iiwic2VsZiIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImZpbGUiLCJyZWFkVGV4dCIsInVyaSIsInN1Y2Nlc3MiLCJkYXRhIiwidGV4dCIsIiR0IiwiZmFpbCIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwib25UeHRDbGljayIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUFBLG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkN1QjNCLElBQUFDLFVBQUFDLHVCQUFBQyxlQUFBO29CQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO29CQUErQixTQUFBRCx1QkFBQUcsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7NEJBQUFFLFNBQUFGO3dCQUFBO29CQUFBO29CQUFBLElBQUFHLFdBQUFDLFFBQUFGLE9BQUEsR0FFaEI7d0JBQ2JHLFdBQVc7NEJBQUVDLFNBQVM7d0JBQUc7d0JBRXpCQyxTQUFTOzRCQUNQQyxTQUFTOzRCQUNUQyxPQUFPOzRCQUNQQyxTQUFTOzRCQUNUQyxhQUFhO3dCQUNmO3dCQUVBQzs0QkFDRSxJQUFJQyxPQUFPLElBQUk7NEJBQ2ZBLEtBQUtDLFVBQVU7NEJBQ2ZELEtBQUtKLEtBQUssR0FBR00sWUFBWTtnQ0FBYUYsS0FBS0MsVUFBVTs0QkFBRyxHQUFHOzRCQUUzRCxJQUFJLElBQUksQ0FBQ1IsT0FBTyxFQUNkTyxLQUFLSCxPQUFPLEdBQUcsSUFBSSxDQUFDSixPQUFPO2lDQUUzQlUsU0FBQUEsT0FBSSxDQUFDQyxRQUFRLENBQUM7Z0NBQ1pDLEtBQUs7Z0NBQ0xDLFNBQVMsU0FBU0MsSUFBSTtvQ0FDcEIsSUFBSUEsS0FBS0MsSUFBSSxFQUNYUixLQUFLSCxPQUFPLEdBQUdVLEtBQUtDLElBQUk7eUNBRXhCUixLQUFLSCxPQUFPLEdBQUdHLEtBQUtTLEVBQUUsQ0FBQztnQ0FFM0I7Z0NBQ0FDLE1BQU07b0NBQ0pWLEtBQUtILE9BQU8sR0FBR0csS0FBS1MsRUFBRSxDQUFDO2dDQUN6Qjs0QkFDRjt3QkFFSjt3QkFFQUU7NEJBQ0VDLGNBQWMsSUFBSSxDQUFDaEIsS0FBSzt3QkFDMUI7d0JBRUFLOzRCQUNFLElBQUlZLElBQUksSUFBSUM7NEJBQ1osSUFBSSxDQUFDbkIsT0FBTyxHQUFHLEFBQUMsT0FBTWtCLEVBQUVFLFFBQVEsRUFBQyxFQUFHQyxLQUFLLENBQUMsTUFBTSxNQUFNLEFBQUMsT0FBTUgsRUFBRUksVUFBVSxFQUFDLEVBQUdELEtBQUssQ0FBQzt3QkFDckY7d0JBRUFFOzRCQUNFLElBQUksQ0FBQ3BCLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQ0EsV0FBVzt3QkFDdEM7d0JBRUFxQjs0QkFBV0MsUUFBQUEsT0FBTSxDQUFDQyxJQUFJO3dCQUFHO29CQUMzQiJ9