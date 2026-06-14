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
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
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
                        [
                            [
                                0,
                                "bt-bar"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: "378px",
                            width: "336px",
                            height: "102px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "num-choose"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "402px"
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
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "bt-bar"
                            ]
                        ],
                        {
                            top: "388px",
                            width: "192px",
                            height: "102px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "num-choose"
                            ]
                        ],
                        {
                            top: "412px"
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
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "bt-bar"
                            ]
                        ],
                        {
                            top: "418px",
                            width: "212px",
                            height: "102px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "num-choose"
                            ]
                        ],
                        {
                            top: "442px"
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
                            content: ""
                        },
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            logText: "",
                            showToolbar: true,
                            fontSize: 28,
                            lineHeight: 36
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            if (this.content) this.logText = this.content;
                            else this.logText = "无内容";
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
                        onFontChange (e) {
                            this.fontSize = e.detail.value;
                            this.lineHeight = parseInt(-0.01 * (this.fontSize * this.fontSize) + 1.62 * this.fontSize - 3.23);
                            if (this.lineHeight < this.fontSize + 4) this.lineHeight = this.fontSize + 4;
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
                                        style: function() {
                                            return __webpack_require__.g.$translateStyle$("font-size: " + _vm_.fontSize + "px; line-height: " + _vm_.lineHeight + "px;");
                                        },
                                        value: function() {
                                            return _vm_.logText;
                                        }
                                    }
                                }, [])
                            ])
                        ]),
                        aiot.__ce__("image", {
                            __vm__: _vm_,
                            __opts__: {
                                show: function() {
                                    return _vm_.showToolbar;
                                },
                                classList: [
                                    "bt-bar"
                                ],
                                src: "/common/bt.png"
                            }
                        }, []),
                        aiot.__ce__("number_choose", {
                            __vm__: _vm_,
                            __opts__: {
                                show: function() {
                                    return _vm_.showToolbar;
                                },
                                classList: [
                                    "num-choose"
                                ],
                                max: "50",
                                min: "20",
                                step: "1",
                                unit: "px",
                                value: function() {
                                    return _vm_.fontSize;
                                },
                                name: "字体大小",
                                events: {
                                    change: function(evt) {
                                        return _vm_.onFontChange(evt);
                                    }
                                }
                            }
                        }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9nL2xvZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbCsrL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsKysvc3JjL3BhZ2VzL2xvZy9sb2cudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKCgpID0+IHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgIDxzY3JvbGwgaWQ9XCJzY3JvbGxJZFwiIGNsYXNzPVwiY29udGVudC1mdWxsXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgYm91bmNlcz1cInRydWVcIiBvbmNsaWNrPVwib25UeHRDbGlja1wiPlxuICAgICAgPGRpdiBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vaGQucG5nXCIgY2xhc3M9XCJoZWFkZXItYmdcIiAvPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpbWVcIj57eyBub3dUaW1lIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpdGxlXCI+e3sgJHQoXCJkZXRhaWwudGl0bGVcIikgfX08L3RleHQ+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9iYWNrLnBuZ1wiIEBjbGljaz1cImdvQmFja1wiIGNsYXNzPVwiaGQtYmFja1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsb2ctdGV4dFwiIHN0eWxlPVwiZm9udC1zaXplOiB7e2ZvbnRTaXplfX1weDsgbGluZS1oZWlnaHQ6IHt7bGluZUhlaWdodH19cHg7XCI+e3sgbG9nVGV4dCB9fTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuXG4gICAgPGltZyBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJidC1iYXJcIiBzcmM9XCIvY29tbW9uL2J0LnBuZ1wiIC8+XG4gICAgPG51bWJlcl9jaG9vc2Ugc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwibnVtLWNob29zZVwiXG4gICAgICAgICAgICAgICAgICAgbWF4PVwiNTBcIiBtaW49XCIyMFwiIHN0ZXA9XCIxXCIgdW5pdD1cInB4XCIgdmFsdWU9XCJ7e2ZvbnRTaXplfX1cIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCLlrZfkvZPlpKflsI9cIiBAY2hhbmdlPVwib25Gb250Q2hhbmdlXCI+PC9udW1iZXJfY2hvb3NlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvdGVjdGVkOiB7IGNvbnRlbnQ6IFwiXCIgfSxcblxuICBwcml2YXRlOiB7XG4gICAgbm93VGltZTogXCIwMDowMFwiLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIGxvZ1RleHQ6IFwiXCIsXG4gICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgZm9udFNpemU6IDI4LFxuICAgIGxpbmVIZWlnaHQ6IDM2XG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMubG9nVGV4dCA9IHRoaXMuY29udGVudFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZ1RleHQgPSBcIuaXoOWGheWuuVwiXG4gICAgfVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIG9uVHh0Q2xpY2soKSB7XG4gICAgdGhpcy5zaG93VG9vbGJhciA9ICF0aGlzLnNob3dUb29sYmFyXG4gIH0sXG5cbiAgb25Gb250Q2hhbmdlKGUpIHtcbiAgICB0aGlzLmZvbnRTaXplID0gZS5kZXRhaWwudmFsdWVcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSBwYXJzZUludCgoLTAuMDEpICogKHRoaXMuZm9udFNpemUgKiB0aGlzLmZvbnRTaXplKSArIDEuNjIgKiB0aGlzLmZvbnRTaXplIC0gMy4yMylcbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0IDwgdGhpcy5mb250U2l6ZSArIDQpIHRoaXMubGluZUhlaWdodCA9IHRoaXMuZm9udFNpemUgKyA0XG4gIH0sXG5cbiAgZ29CYWNrKCkgeyByb3V0ZXIuYmFjaygpIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucGFnZSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiA0ODBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgfVxuLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiA0ODBweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLmhlYWRlci1hcmVhIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5oZWFkZXItYmcgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IH1cbi5oZC10aW1lIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3OHB4OyB0b3A6IDdweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDMycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgfVxuLmhkLXRpdGxlIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3OHB4OyB0b3A6IDM1cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiA0MnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjZmZmZmZmOyB9XG4uaGQtYmFjayB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNnB4OyB0b3A6IDZweDsgd2lkdGg6IDcycHg7IGhlaWdodDogNzJweDsgfVxuLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogbm9uZTsgfVxuLnRleHQtY29udGFpbmVyIHsgcGFkZGluZzogNnB4IDE2cHggMjBweCAxNnB4OyB3aWR0aDogMzM2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5sb2ctdGV4dCB7IHdpZHRoOiAzMDRweDsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzZweDsgdGV4dC1hbGlnbjogbGVmdDsgY29sb3I6ICNmZmZmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyB3b3JkLWJyZWFrOiBicmVhay1hbGw7IH1cbi5idC1iYXIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMzc4cHg7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgfVxuLm51bS1jaG9vc2UgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNDAycHg7IH1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1heC13aWR0aDogMTAwKSB7XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogOTJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiAzMnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAucGlsbC1tb3JlIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vYmFja19jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogOTJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzMnB4OyB9XG4gIC5wYWdlIHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDQ5MHB4OyB9XG4gIC5jb250ZW50LWZ1bGwgeyB3aWR0aDogMTkycHg7IGhlaWdodDogNDkwcHg7IH1cbiAgLmhkLXRpdGxlIHsgd2lkdGg6IDE5MnB4OyB0b3A6IDIycHg7IGZvbnQtc2l6ZTogMjJweDsgfVxuICAuaGQtYmFjayB7IGxlZnQ6IDRweDsgdG9wOiA0cHg7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IH1cbiAgLnRleHQtY29udGFpbmVyIHsgcGFkZGluZzogNnB4IDEwcHggMjBweCAxMHB4OyB3aWR0aDogMTkycHg7IH1cbiAgLmxvZy10ZXh0IHsgd2lkdGg6IDE3MnB4OyB9XG4gIC5idC1iYXIgeyB0b3A6IDM4OHB4OyB3aWR0aDogMTkycHg7IGhlaWdodDogMTAycHg7IH1cbiAgLm51bS1jaG9vc2UgeyB0b3A6IDQxMnB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtaW4td2lkdGg6IDEwMSkge1xuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5waWxsLW1vcmUgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vYmFja19jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogMTAycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgfVxuICAucGFnZSB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAyMTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC50ZXh0LWNvbnRhaW5lciB7IHBhZGRpbmc6IDZweCAxMHB4IDIwcHggMTBweDsgd2lkdGg6IDIxMnB4OyB9XG4gIC5sb2ctdGV4dCB7IHdpZHRoOiAxOTJweDsgfVxuICAuYnQtYmFyIHsgdG9wOiA0MThweDsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4gIC5udW0tY2hvb3NlIHsgdG9wOiA0NDJweDsgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJvdGVjdGVkIiwiY29udGVudCIsInByaXZhdGUiLCJub3dUaW1lIiwidGltZXIiLCJsb2dUZXh0Iiwic2hvd1Rvb2xiYXIiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwib25EZXN0cm95IiwiY2xlYXJJbnRlcnZhbCIsImQiLCJEYXRlIiwiZ2V0SG91cnMiLCJzbGljZSIsImdldE1pbnV0ZXMiLCJvblR4dENsaWNrIiwib25Gb250Q2hhbmdlIiwiZGV0YWlsIiwidmFsdWUiLCJwYXJzZUludCIsImdvQmFjayIsInJvdXRlciIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JB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