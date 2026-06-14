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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.file"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.prompt"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var DEBUG_FILE = "internal://files/debug_mode.json";
                    var COMMAND_DATA = {
                        templates: {
                            i18nKey: "category.templates",
                            items: [
                                {
                                    cmd: "ls -l /",
                                    label: "cmd.lsRoot",
                                    desc: "cmd.lsRootDesc"
                                },
                                {
                                    cmd: "ls -la /data",
                                    label: "cmd.lsData",
                                    desc: "cmd.lsDataDesc"
                                },
                                {
                                    cmd: "ps",
                                    label: "cmd.ps",
                                    desc: "cmd.psDesc"
                                },
                                {
                                    cmd: "free",
                                    label: "cmd.free",
                                    desc: "cmd.freeDesc"
                                },
                                {
                                    cmd: "df",
                                    label: "cmd.df",
                                    desc: "cmd.dfDesc"
                                },
                                {
                                    cmd: "uname -a",
                                    label: "cmd.unameA",
                                    desc: "cmd.unameADesc"
                                },
                                {
                                    cmd: "dmesg",
                                    label: "cmd.dmesg",
                                    desc: "cmd.dmesgDesc"
                                },
                                {
                                    cmd: "uptime",
                                    label: "cmd.uptime",
                                    desc: "cmd.uptimeDesc"
                                },
                                {
                                    cmd: "ifconfig",
                                    label: "cmd.ifconfig",
                                    desc: "cmd.ifconfigDesc"
                                },
                                {
                                    cmd: "help",
                                    label: "cmd.help",
                                    desc: "cmd.helpDesc"
                                }
                            ]
                        },
                        file: {
                            i18nKey: "category.file",
                            items: [
                                {
                                    cmd: "ls",
                                    label: "cmd.ls",
                                    desc: "cmd.lsDesc"
                                },
                                {
                                    cmd: "cat",
                                    label: "cmd.cat",
                                    desc: "cmd.catDesc"
                                },
                                {
                                    cmd: "cp",
                                    label: "cmd.cp",
                                    desc: "cmd.cpDesc"
                                },
                                {
                                    cmd: "mv",
                                    label: "cmd.mv",
                                    desc: "cmd.mvDesc"
                                },
                                {
                                    cmd: "rm",
                                    label: "cmd.rm",
                                    desc: "cmd.rmDesc",
                                    danger: true
                                },
                                {
                                    cmd: "mkdir",
                                    label: "cmd.mkdir",
                                    desc: "cmd.mkdirDesc"
                                },
                                {
                                    cmd: "pwd",
                                    label: "cmd.pwd",
                                    desc: "cmd.pwdDesc"
                                },
                                {
                                    cmd: "dd",
                                    label: "cmd.dd",
                                    desc: "cmd.ddDesc",
                                    danger: true
                                }
                            ]
                        },
                        system: {
                            i18nKey: "category.system",
                            items: [
                                {
                                    cmd: "uname",
                                    label: "cmd.uname",
                                    desc: "cmd.unameDesc"
                                },
                                {
                                    cmd: "uptime",
                                    label: "cmd.uptime",
                                    desc: "cmd.uptimeDesc"
                                },
                                {
                                    cmd: "date",
                                    label: "cmd.date",
                                    desc: "cmd.dateDesc"
                                },
                                {
                                    cmd: "dmesg",
                                    label: "cmd.dmesg",
                                    desc: "cmd.dmesgDesc"
                                },
                                {
                                    cmd: "free",
                                    label: "cmd.free",
                                    desc: "cmd.freeDesc"
                                },
                                {
                                    cmd: "reboot",
                                    label: "cmd.reboot",
                                    desc: "cmd.rebootDesc",
                                    danger: true
                                }
                            ]
                        },
                        process: {
                            i18nKey: "category.process",
                            items: [
                                {
                                    cmd: "ps",
                                    label: "cmd.ps",
                                    desc: "cmd.psDesc"
                                },
                                {
                                    cmd: "sleep",
                                    label: "cmd.sleep",
                                    desc: "cmd.sleepDesc"
                                },
                                {
                                    cmd: "kill",
                                    label: "cmd.kill",
                                    desc: "cmd.killDesc",
                                    danger: true
                                }
                            ]
                        },
                        network: {
                            i18nKey: "category.network",
                            items: [
                                {
                                    cmd: "ifconfig",
                                    label: "cmd.ifconfig",
                                    desc: "cmd.ifconfigDesc"
                                },
                                {
                                    cmd: "ping",
                                    label: "cmd.ping",
                                    desc: "cmd.pingDesc"
                                },
                                {
                                    cmd: "curl",
                                    label: "cmd.curl",
                                    desc: "cmd.curlDesc"
                                },
                                {
                                    cmd: "nslookup",
                                    label: "cmd.nslookup",
                                    desc: "cmd.nslookupDesc"
                                }
                            ]
                        }
                    };
                    var _default = exports.default = {
                        protected: {
                            category: "",
                            entry: ""
                        },
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            cmds: [],
                            categoryTitle: ""
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            var catData = COMMAND_DATA[self.category];
                            if (catData) {
                                self.categoryTitle = self.$t(catData.i18nKey);
                                var items = [];
                                for(var i = 0; i < catData.items.length; i++){
                                    var item = catData.items[i];
                                    items.push({
                                        cmd: item.cmd,
                                        label: self.$t(item.label),
                                        desc: self.$t(item.desc),
                                        danger: item.danger || false,
                                        labelClass: item.danger ? 'text-danger' : ''
                                    });
                                }
                                self.cmds = items;
                            } else {
                                self.categoryTitle = self.category || "";
                                self.cmds = [];
                            }
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5mby9pbmZvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbCsrL3NyYy9wYWdlcy9pbmZvL2luZm8udXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgIDxzY3JvbGwgY2xhc3M9XCJjb250ZW50LWZ1bGxcIiBzY3JvbGwteT1cInRydWVcIiBib3VuY2VzPVwidHJ1ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9oZC5wbmdcIiBjbGFzcz1cImhlYWRlci1iZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGltZVwiPnt7IG5vd1RpbWUgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGl0bGVcIj57eyBjYXRlZ29yeVRpdGxlIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgZm9yPVwie3tjbWRzfX1cIiB0aWQ9XCJpZFwiIG9uY2xpY2s9XCJzZW5kQ21kKCRpdGVtLmNtZCwgJGl0ZW0uZGFuZ2VyKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbCB7eyAkaXRlbS5sYWJlbENsYXNzIH19XCI+e3sgJGl0ZW0ubGFiZWwgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+e3sgJGl0ZW0uZGVzYyB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zY3JvbGw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcbmltcG9ydCBmaWxlIGZyb20gXCJAc3lzdGVtLmZpbGVcIlxuaW1wb3J0IHByb21wdCBmcm9tIFwiQHN5c3RlbS5wcm9tcHRcIlxuXG52YXIgREVCVUdfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9kZWJ1Z19tb2RlLmpzb25cIlxuXG4vKiDlkb3ku6TmlbDmja7vvJrliIbnsbsgSUQg4oaSIHsgaTE4bktleSwgaXRlbXMgfSAqL1xudmFyIENPTU1BTkRfREFUQSA9IHtcbiAgdGVtcGxhdGVzOiB7XG4gICAgaTE4bktleTogXCJjYXRlZ29yeS50ZW1wbGF0ZXNcIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwibHMgLWwgL1wiLCAgICAgICBsYWJlbDogXCJjbWQubHNSb290XCIsICAgICBkZXNjOiBcImNtZC5sc1Jvb3REZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImxzIC1sYSAvZGF0YVwiLCAgbGFiZWw6IFwiY21kLmxzRGF0YVwiLCAgICAgZGVzYzogXCJjbWQubHNEYXRhRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJwc1wiLCAgICAgICAgICAgIGxhYmVsOiBcImNtZC5wc1wiLCAgICAgICAgIGRlc2M6IFwiY21kLnBzRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJmcmVlXCIsICAgICAgICAgIGxhYmVsOiBcImNtZC5mcmVlXCIsICAgICAgIGRlc2M6IFwiY21kLmZyZWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRmXCIsICAgICAgICAgICAgbGFiZWw6IFwiY21kLmRmXCIsICAgICAgICAgZGVzYzogXCJjbWQuZGZEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInVuYW1lIC1hXCIsICAgICAgbGFiZWw6IFwiY21kLnVuYW1lQVwiLCAgICAgZGVzYzogXCJjbWQudW5hbWVBRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJkbWVzZ1wiLCAgICAgICAgIGxhYmVsOiBcImNtZC5kbWVzZ1wiLCAgICAgIGRlc2M6IFwiY21kLmRtZXNnRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJ1cHRpbWVcIiwgICAgICAgIGxhYmVsOiBcImNtZC51cHRpbWVcIiwgICAgIGRlc2M6IFwiY21kLnVwdGltZURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiaWZjb25maWdcIiwgICAgICBsYWJlbDogXCJjbWQuaWZjb25maWdcIiwgICBkZXNjOiBcImNtZC5pZmNvbmZpZ0Rlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiaGVscFwiLCAgICAgICAgICBsYWJlbDogXCJjbWQuaGVscFwiLCAgICAgICBkZXNjOiBcImNtZC5oZWxwRGVzY1wiIH1cbiAgICBdXG4gIH0sXG4gIGZpbGU6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5LmZpbGVcIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwibHNcIiwgICAgICBsYWJlbDogXCJjbWQubHNcIiwgICAgICBkZXNjOiBcImNtZC5sc0Rlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiY2F0XCIsICAgICBsYWJlbDogXCJjbWQuY2F0XCIsICAgICBkZXNjOiBcImNtZC5jYXREZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImNwXCIsICAgICAgbGFiZWw6IFwiY21kLmNwXCIsICAgICAgZGVzYzogXCJjbWQuY3BEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcIm12XCIsICAgICAgbGFiZWw6IFwiY21kLm12XCIsICAgICAgZGVzYzogXCJjbWQubXZEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInJtXCIsICAgICAgbGFiZWw6IFwiY21kLnJtXCIsICAgICAgZGVzYzogXCJjbWQucm1EZXNjXCIsICAgICAgZGFuZ2VyOiB0cnVlIH0sXG4gICAgICB7IGNtZDogXCJta2RpclwiLCAgIGxhYmVsOiBcImNtZC5ta2RpclwiLCAgIGRlc2M6IFwiY21kLm1rZGlyRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJwd2RcIiwgICAgIGxhYmVsOiBcImNtZC5wd2RcIiwgICAgIGRlc2M6IFwiY21kLnB3ZERlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiZGRcIiwgICAgICBsYWJlbDogXCJjbWQuZGRcIiwgICAgICBkZXNjOiBcImNtZC5kZERlc2NcIiwgICAgICBkYW5nZXI6IHRydWUgfVxuICAgIF1cbiAgfSxcbiAgc3lzdGVtOiB7XG4gICAgaTE4bktleTogXCJjYXRlZ29yeS5zeXN0ZW1cIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwidW5hbWVcIiwgICBsYWJlbDogXCJjbWQudW5hbWVcIiwgICBkZXNjOiBcImNtZC51bmFtZURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwidXB0aW1lXCIsICBsYWJlbDogXCJjbWQudXB0aW1lXCIsICBkZXNjOiBcImNtZC51cHRpbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRhdGVcIiwgICAgbGFiZWw6IFwiY21kLmRhdGVcIiwgICAgZGVzYzogXCJjbWQuZGF0ZURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiZG1lc2dcIiwgICBsYWJlbDogXCJjbWQuZG1lc2dcIiwgICBkZXNjOiBcImNtZC5kbWVzZ0Rlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiZnJlZVwiLCAgICBsYWJlbDogXCJjbWQuZnJlZVwiLCAgICBkZXNjOiBcImNtZC5mcmVlRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJyZWJvb3RcIiwgIGxhYmVsOiBcImNtZC5yZWJvb3RcIiwgIGRlc2M6IFwiY21kLnJlYm9vdERlc2NcIiwgIGRhbmdlcjogdHJ1ZSB9XG4gICAgXVxuICB9LFxuICBwcm9jZXNzOiB7XG4gICAgaTE4bktleTogXCJjYXRlZ29yeS5wcm9jZXNzXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgY21kOiBcInBzXCIsICAgICAgbGFiZWw6IFwiY21kLnBzXCIsICAgICAgZGVzYzogXCJjbWQucHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInNsZWVwXCIsICAgbGFiZWw6IFwiY21kLnNsZWVwXCIsICAgZGVzYzogXCJjbWQuc2xlZXBEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImtpbGxcIiwgICAgbGFiZWw6IFwiY21kLmtpbGxcIiwgICAgZGVzYzogXCJjbWQua2lsbERlc2NcIiwgICAgZGFuZ2VyOiB0cnVlIH1cbiAgICBdXG4gIH0sXG4gIG5ldHdvcms6IHtcbiAgICBpMThuS2V5OiBcImNhdGVnb3J5Lm5ldHdvcmtcIixcbiAgICBpdGVtczogW1xuICAgICAgeyBjbWQ6IFwiaWZjb25maWdcIiwgIGxhYmVsOiBcImNtZC5pZmNvbmZpZ1wiLCAgZGVzYzogXCJjbWQuaWZjb25maWdEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInBpbmdcIiwgICAgICBsYWJlbDogXCJjbWQucGluZ1wiLCAgICAgIGRlc2M6IFwiY21kLnBpbmdEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImN1cmxcIiwgICAgICBsYWJlbDogXCJjbWQuY3VybFwiLCAgICAgIGRlc2M6IFwiY21kLmN1cmxEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcIm5zbG9va3VwXCIsICBsYWJlbDogXCJjbWQubnNsb29rdXBcIiwgIGRlc2M6IFwiY21kLm5zbG9va3VwRGVzY1wiIH1cbiAgICBdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm90ZWN0ZWQ6IHsgY2F0ZWdvcnk6IFwiXCIsIGVudHJ5OiBcIlwiIH0sXG5cbiAgcHJpdmF0ZToge1xuICAgIG5vd1RpbWU6IFwiMDA6MDBcIixcbiAgICB0aW1lcjogbnVsbCxcbiAgICBjbWRzOiBbXSxcbiAgICBjYXRlZ29yeVRpdGxlOiBcIlwiXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuXG4gICAgdmFyIGNhdERhdGEgPSBDT01NQU5EX0RBVEFbc2VsZi5jYXRlZ29yeV1cbiAgICBpZiAoY2F0RGF0YSkge1xuICAgICAgc2VsZi5jYXRlZ29yeVRpdGxlID0gc2VsZi4kdChjYXREYXRhLmkxOG5LZXkpXG4gICAgICB2YXIgaXRlbXMgPSBbXVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXREYXRhLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBpdGVtID0gY2F0RGF0YS5pdGVtc1tpXVxuICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICBjbWQ6IGl0ZW0uY21kLFxuICAgICAgICAgIGxhYmVsOiBzZWxmLiR0KGl0ZW0ubGFiZWwpLFxuICAgICAgICAgIGRlc2M6IHNlbGYuJHQoaXRlbS5kZXNjKSxcbiAgICAgICAgICBkYW5nZXI6IGl0ZW0uZGFuZ2VyIHx8IGZhbHNlLFxuICAgICAgICAgIGxhYmVsQ2xhc3M6IGl0ZW0uZGFuZ2VyID8gJ3RleHQtZGFuZ2VyJyA6ICcnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBzZWxmLmNtZHMgPSBpdGVtc1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmNhdGVnb3J5VGl0bGUgPSBzZWxmLmNhdGVnb3J5IHx8IFwiXCJcbiAgICAgIHNlbGYuY21kcyA9IFtdXG4gICAgfVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHsgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKSB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICBzZW5kQ21kKGNtZCwgZGFuZ2VyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgaWYgKGRhbmdlcikge1xuICAgICAgLyog5qOA5p+l6LCD6K+V5qih5byPICovXG4gICAgICBmaWxlLnJlYWRUZXh0KHtcbiAgICAgICAgdXJpOiBERUJVR19GSUxFLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpXG4gICAgICAgICAgICBpZiAoanNvbi5lbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIC8qIOiwg+ivleaooeW8j+W3suW8gOWQr++8muebtOaOpei3s+i9rCAqL1xuICAgICAgICAgICAgICBzZWxmLmRvTmF2aWdhdGUoY21kKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLyog6Z2e6LCD6K+V5qih5byP77ya57O757uf5o+Q56S6ICovXG4gICAgICAgICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiBzZWxmLiR0KFwiY29uZmlybS5uZWVkRGVidWdcIikgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiBzZWxmLiR0KFwiY29uZmlybS5uZWVkRGVidWdcIikgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiBzZWxmLiR0KFwiY29uZmlybS5uZWVkRGVidWdcIikgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWxmLmRvTmF2aWdhdGUoY21kKVxuICB9LFxuXG4gIGRvTmF2aWdhdGUoY21kKSB7XG4gICAgdmFyIHJvdXRlID0geyB1cmk6IFwiL3BhZ2VzL3Rlcm1pbmFsXCIsIHBhcmFtczogeyBjbWQ6IGNtZCB9IH1cbiAgICBpZiAodGhpcy5lbnRyeSA9PT0gXCJ0ZXJtaW5hbFwiKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShyb3V0ZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByb3V0ZXIucHVzaChyb3V0ZSlcbiAgfSxcblxuICBnb0JhY2soKSB7IHJvdXRlci5iYWNrKCkgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyB9XG4uY29udGVudC1mdWxsIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4uaGVhZGVyLWFyZWEgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmhlYWRlci1iZyB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgfVxuLmhkLXRpbWUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogN3B4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogMzJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOyB9XG4uaGQtdGl0bGUgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDc4cHg7IHRvcDogMzVweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDQycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAzMnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICNmZmZmZmY7IH1cbi5oZC1iYWNrIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA2cHg7IHRvcDogNnB4OyB3aWR0aDogNzJweDsgaGVpZ2h0OiA3MnB4OyB9XG4ucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBub25lOyB9XG4uY2FyZCB7IHdpZHRoOiAzMjRweDsgaGVpZ2h0OiAxMTJweDsgbWFyZ2luLXRvcDogOHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2OyBib3JkZXItcmFkaXVzOiAzNnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nLWxlZnQ6IDIwcHg7IHBhZGRpbmctcmlnaHQ6IDIwcHg7IH1cbi5jYXJkLWxlZnQgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBmbGV4OiAxOyB9XG4uY2FyZC1sYWJlbCB7IGZvbnQtc2l6ZTogMzJweDsgbGluZS1oZWlnaHQ6IDQwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgbGluZXM6IDE7IH1cbi5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjhweDsgbGluZS1oZWlnaHQ6IDM3cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpOyBtYXJnaW4tdG9wOiA0cHg7IGxpbmVzOiAxOyB9XG4udGV4dC1kYW5nZXIgeyBjb2xvcjogI2ZmNDQ0NDsgfVxuLnNwYWNlciB7IGhlaWdodDogMjBweDsgfVxuLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IDA7IHBhZGRpbmc6IDAgNnB4IDIwcHggNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbkBtZWRpYSAoc2hhcGU6IHJlY3QpIHtcbiAgLnNjcm9sbC1pbm5lciB7IG1hcmdpbi10b3A6IC0xNXB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDQ5MHB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogOTJweDsgaGVpZ2h0OiA3MnB4OyBib3JkZXItcmFkaXVzOiAzMnB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWFyZ2luLXRvcDogMTBweDsgfVxuICAucGlsbC1tb3JlIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vYmFja19jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogOTJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzMnB4OyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAxOTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDhweCAxNnB4IDhweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxNzZweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDRweDsgfVxuICAuc3BhY2VyIHsgaGVpZ2h0OiAxNnB4OyB9XG59XG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtaW4td2lkdGg6IDEwMSkge1xuICAucGFnZSB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuY29udGVudC1mdWxsIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAyMTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC5zY3JvbGwtaW5uZXIgeyBwYWRkaW5nOiAwIDhweCAxNnB4IDhweDsgfVxuICAuY2FyZCB7IHdpZHRoOiAxOTZweDsgaGVpZ2h0OiAxMTBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZy1sZWZ0OiAxNHB4OyBwYWRkaW5nLXJpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgLmNhcmQtbGFiZWwgeyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNHB4OyB9XG4gIC5jYXJkLXN1YiB7IGZvbnQtc2l6ZTogMjRweDsgbGluZS1oZWlnaHQ6IDMwcHg7IG1hcmdpbi10b3A6IDRweDsgfVxuICAuc3BhY2VyIHsgaGVpZ2h0OiAxNnB4OyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsIl9zeXN0ZW0zIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiREVCVUdfRklMRSIsIkNPTU1BTkRfREFUQSIsInRlbXBsYXRlcyIsImkxOG5LZXkiLCJpdGVtcyIsImNtZCIsImxhYmVsIiwiZGVzYyIsImZpbGUiLCJkYW5nZXIiLCJzeXN0ZW0iLCJwcm9jZXNzIiwibmV0d29yayIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsImNhdGVnb3J5IiwiZW50cnkiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwiY21kcyIsImNhdGVnb3J5VGl0bGUiLCJvbkluaXQiLCJzZWxmIiwidXBkYXRlVGltZSIsInNldEludGVydmFsIiwiY2F0RGF0YSIsIiR0IiwiaSIsImxlbmd0aCIsIml0ZW0iLCJwdXNoIiwibGFiZWxDbGFzcyIsIm9uRGVzdHJveSIsImNsZWFySW50ZXJ2YWwiLCJkIiwiRGF0ZSIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwic2VuZENtZCIsInJlYWRUZXh0IiwidXJpIiwic3VjY2VzcyIsImRhdGEiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwidGV4dCIsImVuYWJsZWQiLCJkb05hdmlnYXRlIiwicHJvbXB0Iiwic2hvd1RvYXN0IiwibWVzc2FnZSIsImZhaWwiLCJyb3V0ZSIsInBhcmFtcyIsInJvdXRlciIsInJlcGxhY2UiLCJnb0JhY2siLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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