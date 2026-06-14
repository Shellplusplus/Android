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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvbG9nL2xvZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL1NoZWxsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vU2hlbGwvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL1NoZWxsL3NyYy9wYWdlcy9sb2cvbG9nLnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8c2Nyb2xsIGlkPVwic2Nyb2xsSWRcIiBjbGFzcz1cImNvbnRlbnQtZnVsbFwiIHNjcm9sbC15PVwidHJ1ZVwiIGJvdW5jZXM9XCJ0cnVlXCIgb25jbGljaz1cIm9uVHh0Q2xpY2tcIj5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPnt7ICR0KFwiZGV0YWlsLnRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHNob3c9XCJ7e3Nob3dUb29sYmFyfX1cIiBjbGFzcz1cInBpbGwtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmUtd3JhcFwiIEBjbGljaz1cImdvQmFja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLW1vcmVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibG9nLXRleHRcIiBzdHlsZT1cImZvbnQtc2l6ZToge3tmb250U2l6ZX19cHg7IGxpbmUtaGVpZ2h0OiB7e2xpbmVIZWlnaHR9fXB4O1wiPnt7IGxvZ1RleHQgfX08L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L3Njcm9sbD5cblxuICAgIDxpbWcgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwiYnQtYmFyXCIgc3JjPVwiL2NvbW1vbi9idC5wbmdcIiAvPlxuICAgIDxudW1iZXJfY2hvb3NlIHNob3c9XCJ7e3Nob3dUb29sYmFyfX1cIiBjbGFzcz1cIm51bS1jaG9vc2VcIlxuICAgICAgICAgICAgICAgICAgIG1heD1cIjUwXCIgbWluPVwiMjBcIiBzdGVwPVwiMVwiIHVuaXQ9XCJweFwiIHZhbHVlPVwie3tmb250U2l6ZX19XCJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwi5a2X5L2T5aSn5bCPXCIgQGNoYW5nZT1cIm9uRm9udENoYW5nZVwiPjwvbnVtYmVyX2Nob29zZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3RlY3RlZDogeyBjb250ZW50OiBcIlwiIH0sXG5cbiAgcHJpdmF0ZToge1xuICAgIG5vd1RpbWU6IFwiMDA6MDBcIixcbiAgICB0aW1lcjogbnVsbCxcbiAgICBsb2dUZXh0OiBcIlwiLFxuICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgIGZvbnRTaXplOiAyOCxcbiAgICBsaW5lSGVpZ2h0OiAzNlxuICB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVUaW1lKCkgfSwgMTAwMClcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmxvZ1RleHQgPSB0aGlzLmNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dUZXh0ID0gXCLml6DlhoXlrrlcIlxuICAgIH1cbiAgfSxcblxuICBvbkRlc3Ryb3koKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICBvblR4dENsaWNrKCkge1xuICAgIHRoaXMuc2hvd1Rvb2xiYXIgPSAhdGhpcy5zaG93VG9vbGJhclxuICB9LFxuXG4gIG9uRm9udENoYW5nZShlKSB7XG4gICAgdGhpcy5mb250U2l6ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gcGFyc2VJbnQoKC0wLjAxKSAqICh0aGlzLmZvbnRTaXplICogdGhpcy5mb250U2l6ZSkgKyAxLjYyICogdGhpcy5mb250U2l6ZSAtIDMuMjMpXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA8IHRoaXMuZm9udFNpemUgKyA0KSB0aGlzLmxpbmVIZWlnaHQgPSB0aGlzLmZvbnRTaXplICsgNFxuICB9LFxuXG4gIGdvQmFjaygpIHsgcm91dGVyLmJhY2soKSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnBhZ2UgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IH1cbi5jb250ZW50LWZ1bGwgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5oZWFkZXItYXJlYSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uaGVhZGVyLWJnIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4uaGQtdGltZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiA3cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbi5oZC10aXRsZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiAzNXB4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogNDJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgfVxuLmhkLWJhY2sgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDZweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5waWxsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbi50ZXh0LWNvbnRhaW5lciB7IHBhZGRpbmc6IDZweCAxNnB4IDIwcHggMTZweDsgd2lkdGg6IDMzNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4ubG9nLXRleHQgeyB3aWR0aDogMzA0cHg7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM2cHg7IHRleHQtYWxpZ246IGxlZnQ7IGNvbG9yOiAjZmZmZmZmOyBmb250LXdlaWdodDogYm9sZDsgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG4uYnQtYmFyIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDM3OHB4OyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IH1cbi5udW0tY2hvb3NlIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDQwMnB4OyB9XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDkycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgfVxuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDQ5MHB4OyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAxOTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC50ZXh0LWNvbnRhaW5lciB7IHBhZGRpbmc6IDZweCAxMHB4IDIwcHggMTBweDsgd2lkdGg6IDE5MnB4OyB9XG4gIC5sb2ctdGV4dCB7IHdpZHRoOiAxNzJweDsgfVxuICAuYnQtYmFyIHsgdG9wOiAzODhweDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4gIC5udW0tY2hvb3NlIHsgdG9wOiA0MTJweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWluLXdpZHRoOiAxMDEpIHtcbiAgLmhlYWRlci1hcmVhIHsgZGlzcGxheTogbm9uZTsgfVxuICAucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMjEycHg7IGhlaWdodDogOTJweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5waWxsLW1vcmUtd3JhcCB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAucGlsbC1tb3JlIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDEwMnB4IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IH1cbiAgLnBhZ2UgeyB3aWR0aDogMjEycHg7IGhlaWdodDogNTIwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMjEycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAudGV4dC1jb250YWluZXIgeyBwYWRkaW5nOiA2cHggMTBweCAyMHB4IDEwcHg7IHdpZHRoOiAyMTJweDsgfVxuICAubG9nLXRleHQgeyB3aWR0aDogMTkycHg7IH1cbiAgLmJ0LWJhciB7IHRvcDogNDE4cHg7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiAxMDJweDsgfVxuICAubnVtLWNob29zZSB7IHRvcDogNDQycHg7IH1cbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsImNvbnRlbnQiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwibG9nVGV4dCIsInNob3dUb29sYmFyIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0Iiwib25Jbml0Iiwic2VsZiIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwib25UeHRDbGljayIsIm9uRm9udENoYW5nZSIsImRldGFpbCIsInZhbHVlIiwicGFyc2VJbnQiLCJnb0JhY2siLCJyb3V0ZXIiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFB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