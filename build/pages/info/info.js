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
                        [
                            [
                                0,
                                "confirm-overlay"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "336px",
                            height: "480px",
                            backgroundColor: "rgba(0, 0, 0, 0.88)",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-box"
                            ]
                        ],
                        {
                            width: "280px",
                            height: "260px",
                            backgroundColor: "#1a1a1a",
                            borderRadius: "36px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#ff4444",
                            borderRightColor: "#ff4444",
                            borderBottomColor: "#ff4444",
                            borderLeftColor: "#ff4444",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "24px",
                            paddingRight: "16px",
                            paddingBottom: "24px",
                            paddingLeft: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-title"
                            ]
                        ],
                        {
                            fontSize: "34px",
                            color: "#ff4444",
                            fontWeight: "bold",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-cmd"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            color: "#ffffff",
                            fontWeight: "bold",
                            marginBottom: "8px",
                            backgroundColor: "#000000",
                            paddingTop: "6px",
                            paddingRight: "16px",
                            paddingBottom: "6px",
                            paddingLeft: "16px",
                            borderRadius: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-warn"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            color: "rgba(255, 255, 255, 0.5)",
                            textAlign: "center",
                            marginBottom: "16px",
                            lines: 2
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-btns"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            width: "240px",
                            justifyContent: "space-between"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-btn"
                            ]
                        ],
                        {
                            width: "108px",
                            height: "52px",
                            borderRadius: "24px",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-cancel"
                            ]
                        ],
                        {
                            backgroundColor: "#333333"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-ok"
                            ]
                        ],
                        {
                            backgroundColor: "#cc0000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm-btn-text"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            fontWeight: "bold",
                            color: "#ffffff"
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
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "confirm-overlay"
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
                                "confirm-box"
                            ]
                        ],
                        {
                            width: "168px",
                            height: "230px",
                            borderRadius: "27px",
                            paddingTop: "16px",
                            paddingRight: "10px",
                            paddingBottom: "16px",
                            paddingLeft: "10px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "confirm-title"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            marginBottom: "8px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "confirm-cmd"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            paddingTop: "4px",
                            paddingRight: "10px",
                            paddingBottom: "4px",
                            paddingLeft: "10px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "confirm-warn"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "confirm-btns"
                            ]
                        ],
                        {
                            width: "148px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "confirm-btn"
                            ]
                        ],
                        {
                            width: "66px",
                            height: "42px",
                            borderRadius: "18px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "confirm-btn-text"
                            ]
                        ],
                        {
                            fontSize: "20px"
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
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "confirm-overlay"
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
                                "confirm-box"
                            ]
                        ],
                        {
                            width: "188px",
                            height: "240px",
                            borderRadius: "27px",
                            paddingTop: "16px",
                            paddingRight: "10px",
                            paddingBottom: "16px",
                            paddingLeft: "10px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "confirm-title"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            marginBottom: "8px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "confirm-cmd"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            paddingTop: "4px",
                            paddingRight: "10px",
                            paddingBottom: "4px",
                            paddingLeft: "10px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "confirm-warn"
                            ]
                        ],
                        {
                            fontSize: "18px",
                            marginBottom: "12px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "confirm-btns"
                            ]
                        ],
                        {
                            width: "164px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "confirm-btn"
                            ]
                        ],
                        {
                            width: "74px",
                            height: "44px",
                            borderRadius: "20px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "confirm-btn-text"
                            ]
                        ],
                        {
                            fontSize: "22px"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
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
                            categoryTitle: "",
                            showConfirm: false,
                            confirmCmd: ""
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
                            if (danger) {
                                _system2.default.vibrate({
                                    duration: 80
                                });
                                self.confirmCmd = cmd;
                                self.showConfirm = true;
                                return;
                            }
                            self.doNavigate(cmd);
                        },
                        confirmDanger () {
                            var cmd = this.confirmCmd;
                            this.showConfirm = false;
                            this.confirmCmd = "";
                            this.doNavigate(cmd);
                        },
                        cancelDanger () {
                            this.showConfirm = false;
                            this.confirmCmd = "";
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
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                show: function() {
                                    return _vm_.showConfirm;
                                },
                                classList: [
                                    "confirm-overlay"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "confirm-box"
                                    ]
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "confirm-title"
                                        ],
                                        value: function() {
                                            return _vm_.$t("confirm.title");
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "confirm-cmd"
                                        ],
                                        value: function() {
                                            return _vm_.confirmCmd;
                                        }
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "confirm-warn"
                                        ],
                                        value: function() {
                                            return _vm_.$t("confirm.warn");
                                        }
                                    }
                                }, []),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "confirm-btns"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "confirm-btn",
                                                "confirm-cancel"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.cancelDanger(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "confirm-btn-text"
                                                ],
                                                value: function() {
                                                    return _vm_.$t("confirm.cancel");
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "confirm-btn",
                                                "confirm-ok"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.confirmDanger(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "confirm-btn-text"
                                                ],
                                                value: function() {
                                                    return _vm_.$t("confirm.ok");
                                                }
                                            }
                                        }, [])
                                    ])
                                ])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5mby9pbmZvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbCsrL3NyYy9wYWdlcy9pbmZvL2luZm8udXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjExXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxuICAgIDxzY3JvbGwgY2xhc3M9XCJjb250ZW50LWZ1bGxcIiBzY3JvbGwteT1cInRydWVcIiBib3VuY2VzPVwidHJ1ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1hcmVhXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9oZC5wbmdcIiBjbGFzcz1cImhlYWRlci1iZ1wiIC8+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGltZVwiPnt7IG5vd1RpbWUgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGQtdGl0bGVcIj57eyBjYXRlZ29yeVRpdGxlIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1pbm5lclwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgZm9yPVwie3tjbWRzfX1cIiB0aWQ9XCJpZFwiIG9uY2xpY2s9XCJzZW5kQ21kKCRpdGVtLmNtZCwgJGl0ZW0uZGFuZ2VyKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbCB7eyAkaXRlbS5sYWJlbENsYXNzIH19XCI+e3sgJGl0ZW0ubGFiZWwgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+e3sgJGl0ZW0uZGVzYyB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zY3JvbGw+XG5cbiAgICA8IS0tIOWNsemZqeWRveS7pOehruiupOW8ueeqlyAtLT5cbiAgICA8ZGl2IHNob3c9XCJ7e3Nob3dDb25maXJtfX1cIiBjbGFzcz1cImNvbmZpcm0tb3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tYm94XCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY29uZmlybS10aXRsZVwiPnt7ICR0KFwiY29uZmlybS50aXRsZVwiKSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJjb25maXJtLWNtZFwiPnt7IGNvbmZpcm1DbWQgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY29uZmlybS13YXJuXCI+e3sgJHQoXCJjb25maXJtLndhcm5cIikgfX08L3RleHQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWJ0bnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1idG4gY29uZmlybS1jYW5jZWxcIiBvbmNsaWNrPVwiY2FuY2VsRGFuZ2VyXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNvbmZpcm0tYnRuLXRleHRcIj57eyAkdChcImNvbmZpcm0uY2FuY2VsXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWJ0biBjb25maXJtLW9rXCIgb25jbGljaz1cImNvbmZpcm1EYW5nZXJcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY29uZmlybS1idG4tdGV4dFwiPnt7ICR0KFwiY29uZmlybS5va1wiKSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuaW1wb3J0IHZpYnJhdG9yIGZyb20gXCJAc3lzdGVtLnZpYnJhdG9yXCJcblxuLyog5ZG95Luk5pWw5o2u77ya5YiG57G7IElEIOKGkiB7IGkxOG5LZXksIGl0ZW1zIH0gKi9cbnZhciBDT01NQU5EX0RBVEEgPSB7XG4gIHRlbXBsYXRlczoge1xuICAgIGkxOG5LZXk6IFwiY2F0ZWdvcnkudGVtcGxhdGVzXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgY21kOiBcImxzIC1sIC9cIiwgICAgICAgbGFiZWw6IFwiY21kLmxzUm9vdFwiLCAgICAgZGVzYzogXCJjbWQubHNSb290RGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJscyAtbGEgL2RhdGFcIiwgIGxhYmVsOiBcImNtZC5sc0RhdGFcIiwgICAgIGRlc2M6IFwiY21kLmxzRGF0YURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwicHNcIiwgICAgICAgICAgICBsYWJlbDogXCJjbWQucHNcIiwgICAgICAgICBkZXNjOiBcImNtZC5wc0Rlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiZnJlZVwiLCAgICAgICAgICBsYWJlbDogXCJjbWQuZnJlZVwiLCAgICAgICBkZXNjOiBcImNtZC5mcmVlRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJkZlwiLCAgICAgICAgICAgIGxhYmVsOiBcImNtZC5kZlwiLCAgICAgICAgIGRlc2M6IFwiY21kLmRmRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJ1bmFtZSAtYVwiLCAgICAgIGxhYmVsOiBcImNtZC51bmFtZUFcIiwgICAgIGRlc2M6IFwiY21kLnVuYW1lQURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwiZG1lc2dcIiwgICAgICAgICBsYWJlbDogXCJjbWQuZG1lc2dcIiwgICAgICBkZXNjOiBcImNtZC5kbWVzZ0Rlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwidXB0aW1lXCIsICAgICAgICBsYWJlbDogXCJjbWQudXB0aW1lXCIsICAgICBkZXNjOiBcImNtZC51cHRpbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImlmY29uZmlnXCIsICAgICAgbGFiZWw6IFwiY21kLmlmY29uZmlnXCIsICAgZGVzYzogXCJjbWQuaWZjb25maWdEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImhlbHBcIiwgICAgICAgICAgbGFiZWw6IFwiY21kLmhlbHBcIiwgICAgICAgZGVzYzogXCJjbWQuaGVscERlc2NcIiB9XG4gICAgXVxuICB9LFxuICBmaWxlOiB7XG4gICAgaTE4bktleTogXCJjYXRlZ29yeS5maWxlXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgY21kOiBcImxzXCIsICAgICAgbGFiZWw6IFwiY21kLmxzXCIsICAgICAgZGVzYzogXCJjbWQubHNEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImNhdFwiLCAgICAgbGFiZWw6IFwiY21kLmNhdFwiLCAgICAgZGVzYzogXCJjbWQuY2F0RGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJjcFwiLCAgICAgIGxhYmVsOiBcImNtZC5jcFwiLCAgICAgIGRlc2M6IFwiY21kLmNwRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJtdlwiLCAgICAgIGxhYmVsOiBcImNtZC5tdlwiLCAgICAgIGRlc2M6IFwiY21kLm12RGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJybVwiLCAgICAgIGxhYmVsOiBcImNtZC5ybVwiLCAgICAgIGRlc2M6IFwiY21kLnJtRGVzY1wiLCAgICAgIGRhbmdlcjogdHJ1ZSB9LFxuICAgICAgeyBjbWQ6IFwibWtkaXJcIiwgICBsYWJlbDogXCJjbWQubWtkaXJcIiwgICBkZXNjOiBcImNtZC5ta2RpckRlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwicHdkXCIsICAgICBsYWJlbDogXCJjbWQucHdkXCIsICAgICBkZXNjOiBcImNtZC5wd2REZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRkXCIsICAgICAgbGFiZWw6IFwiY21kLmRkXCIsICAgICAgZGVzYzogXCJjbWQuZGREZXNjXCIsICAgICAgZGFuZ2VyOiB0cnVlIH1cbiAgICBdXG4gIH0sXG4gIHN5c3RlbToge1xuICAgIGkxOG5LZXk6IFwiY2F0ZWdvcnkuc3lzdGVtXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgY21kOiBcInVuYW1lXCIsICAgbGFiZWw6IFwiY21kLnVuYW1lXCIsICAgZGVzYzogXCJjbWQudW5hbWVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcInVwdGltZVwiLCAgbGFiZWw6IFwiY21kLnVwdGltZVwiLCAgZGVzYzogXCJjbWQudXB0aW1lRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJkYXRlXCIsICAgIGxhYmVsOiBcImNtZC5kYXRlXCIsICAgIGRlc2M6IFwiY21kLmRhdGVEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImRtZXNnXCIsICAgbGFiZWw6IFwiY21kLmRtZXNnXCIsICAgZGVzYzogXCJjbWQuZG1lc2dEZXNjXCIgfSxcbiAgICAgIHsgY21kOiBcImZyZWVcIiwgICAgbGFiZWw6IFwiY21kLmZyZWVcIiwgICAgZGVzYzogXCJjbWQuZnJlZURlc2NcIiB9LFxuICAgICAgeyBjbWQ6IFwicmVib290XCIsICBsYWJlbDogXCJjbWQucmVib290XCIsICBkZXNjOiBcImNtZC5yZWJvb3REZXNjXCIsICBkYW5nZXI6IHRydWUgfVxuICAgIF1cbiAgfSxcbiAgcHJvY2Vzczoge1xuICAgIGkxOG5LZXk6IFwiY2F0ZWdvcnkucHJvY2Vzc1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IGNtZDogXCJwc1wiLCAgICAgIGxhYmVsOiBcImNtZC5wc1wiLCAgICAgIGRlc2M6IFwiY21kLnBzRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJzbGVlcFwiLCAgIGxhYmVsOiBcImNtZC5zbGVlcFwiLCAgIGRlc2M6IFwiY21kLnNsZWVwRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJraWxsXCIsICAgIGxhYmVsOiBcImNtZC5raWxsXCIsICAgIGRlc2M6IFwiY21kLmtpbGxEZXNjXCIsICAgIGRhbmdlcjogdHJ1ZSB9XG4gICAgXVxuICB9LFxuICBuZXR3b3JrOiB7XG4gICAgaTE4bktleTogXCJjYXRlZ29yeS5uZXR3b3JrXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgY21kOiBcImlmY29uZmlnXCIsICBsYWJlbDogXCJjbWQuaWZjb25maWdcIiwgIGRlc2M6IFwiY21kLmlmY29uZmlnRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJwaW5nXCIsICAgICAgbGFiZWw6IFwiY21kLnBpbmdcIiwgICAgICBkZXNjOiBcImNtZC5waW5nRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJjdXJsXCIsICAgICAgbGFiZWw6IFwiY21kLmN1cmxcIiwgICAgICBkZXNjOiBcImNtZC5jdXJsRGVzY1wiIH0sXG4gICAgICB7IGNtZDogXCJuc2xvb2t1cFwiLCAgbGFiZWw6IFwiY21kLm5zbG9va3VwXCIsICBkZXNjOiBcImNtZC5uc2xvb2t1cERlc2NcIiB9XG4gICAgXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvdGVjdGVkOiB7IGNhdGVnb3J5OiBcIlwiLCBlbnRyeTogXCJcIiB9LFxuXG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgY21kczogW10sXG4gICAgY2F0ZWdvcnlUaXRsZTogXCJcIixcbiAgICBzaG93Q29uZmlybTogZmFsc2UsXG4gICAgY29uZmlybUNtZDogXCJcIlxuICB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVUaW1lKCkgfSwgMTAwMClcblxuICAgIHZhciBjYXREYXRhID0gQ09NTUFORF9EQVRBW3NlbGYuY2F0ZWdvcnldXG4gICAgaWYgKGNhdERhdGEpIHtcbiAgICAgIHNlbGYuY2F0ZWdvcnlUaXRsZSA9IHNlbGYuJHQoY2F0RGF0YS5pMThuS2V5KVxuICAgICAgdmFyIGl0ZW1zID0gW11cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2F0RGF0YS5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IGNhdERhdGEuaXRlbXNbaV1cbiAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgY21kOiBpdGVtLmNtZCxcbiAgICAgICAgICBsYWJlbDogc2VsZi4kdChpdGVtLmxhYmVsKSxcbiAgICAgICAgICBkZXNjOiBzZWxmLiR0KGl0ZW0uZGVzYyksXG4gICAgICAgICAgZGFuZ2VyOiBpdGVtLmRhbmdlciB8fCBmYWxzZSxcbiAgICAgICAgICBsYWJlbENsYXNzOiBpdGVtLmRhbmdlciA/ICd0ZXh0LWRhbmdlcicgOiAnJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgc2VsZi5jbWRzID0gaXRlbXNcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5jYXRlZ29yeVRpdGxlID0gc2VsZi5jYXRlZ29yeSB8fCBcIlwiXG4gICAgICBzZWxmLmNtZHMgPSBbXVxuICAgIH1cbiAgfSxcblxuICBvbkRlc3Ryb3koKSB7IGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcikgfSxcblxuICB1cGRhdGVUaW1lKCkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKVxuICAgIHRoaXMubm93VGltZSA9IChcIjBcIiArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBkLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpXG4gIH0sXG5cbiAgc2VuZENtZChjbWQsIGRhbmdlcikge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGlmIChkYW5nZXIpIHtcbiAgICAgIHZpYnJhdG9yLnZpYnJhdGUoeyBkdXJhdGlvbjogODAgfSlcbiAgICAgIHNlbGYuY29uZmlybUNtZCA9IGNtZFxuICAgICAgc2VsZi5zaG93Q29uZmlybSA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWxmLmRvTmF2aWdhdGUoY21kKVxuICB9LFxuXG4gIGNvbmZpcm1EYW5nZXIoKSB7XG4gICAgdmFyIGNtZCA9IHRoaXMuY29uZmlybUNtZFxuICAgIHRoaXMuc2hvd0NvbmZpcm0gPSBmYWxzZVxuICAgIHRoaXMuY29uZmlybUNtZCA9IFwiXCJcbiAgICB0aGlzLmRvTmF2aWdhdGUoY21kKVxuICB9LFxuXG4gIGNhbmNlbERhbmdlcigpIHtcbiAgICB0aGlzLnNob3dDb25maXJtID0gZmFsc2VcbiAgICB0aGlzLmNvbmZpcm1DbWQgPSBcIlwiXG4gIH0sXG5cbiAgZG9OYXZpZ2F0ZShjbWQpIHtcbiAgICB2YXIgcm91dGUgPSB7IHVyaTogXCIvcGFnZXMvdGVybWluYWxcIiwgcGFyYW1zOiB7IGNtZDogY21kIH0gfVxuICAgIGlmICh0aGlzLmVudHJ5ID09PSBcInRlcm1pbmFsXCIpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKHJvdXRlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJvdXRlci5wdXNoKHJvdXRlKVxuICB9LFxuXG4gIGdvQmFjaygpIHsgcm91dGVyLmJhY2soKSB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnBhZ2UgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IH1cbi5jb250ZW50LWZ1bGwgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogNDgwcHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5oZWFkZXItYXJlYSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4uaGVhZGVyLWJnIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4uaGQtdGltZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiA3cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbi5oZC10aXRsZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiAzNXB4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogNDJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgfVxuLmhkLWJhY2sgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDZweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5waWxsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5jYXJkIHsgd2lkdGg6IDMyNHB4OyBoZWlnaHQ6IDExMnB4OyBtYXJnaW4tdG9wOiA4cHg7IGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7IGJvcmRlci1yYWRpdXM6IDM2cHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmctbGVmdDogMjBweDsgcGFkZGluZy1yaWdodDogMjBweDsgfVxuLmNhcmQtbGVmdCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXg6IDE7IH1cbi5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAzMnB4OyBsaW5lLWhlaWdodDogNDBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjZmZmZmZmOyBsaW5lczogMTsgfVxuLmNhcmQtc3ViIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzdweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IG1hcmdpbi10b3A6IDRweDsgbGluZXM6IDE7IH1cbi50ZXh0LWRhbmdlciB7IGNvbG9yOiAjZmY0NDQ0OyB9XG4uc3BhY2VyIHsgaGVpZ2h0OiAyMHB4OyB9XG4uc2Nyb2xsLWlubmVyIHsgbWFyZ2luLXRvcDogMDsgcGFkZGluZzogMCA2cHggMjBweCA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLyog56Gu6K6k5by556qXICovXG4uY29uZmlybS1vdmVybGF5IHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiA0ODBweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg4KTsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbi5jb25maXJtLWJveCB7IHdpZHRoOiAyODBweDsgaGVpZ2h0OiAyNjBweDsgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTsgYm9yZGVyLXJhZGl1czogMzZweDsgYm9yZGVyLXdpZHRoOiAycHg7IGJvcmRlci1jb2xvcjogI2ZmNDQ0NDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMjRweCAxNnB4OyB9XG4uY29uZmlybS10aXRsZSB7IGZvbnQtc2l6ZTogMzRweDsgY29sb3I6ICNmZjQ0NDQ7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4uY29uZmlybS1jbWQgeyBmb250LXNpemU6IDI2cHg7IGNvbG9yOiAjZmZmZmZmOyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLWJvdHRvbTogOHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyBwYWRkaW5nOiA2cHggMTZweDsgYm9yZGVyLXJhZGl1czogMTZweDsgfVxuLmNvbmZpcm0td2FybiB7IGZvbnQtc2l6ZTogMjJweDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAxNnB4OyBsaW5lczogMjsgfVxuLmNvbmZpcm0tYnRucyB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IHdpZHRoOiAyNDBweDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG4uY29uZmlybS1idG4geyB3aWR0aDogMTA4cHg7IGhlaWdodDogNTJweDsgYm9yZGVyLXJhZGl1czogMjRweDsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbi5jb25maXJtLWNhbmNlbCB7IGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7IH1cbi5jb25maXJtLW9rIHsgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDsgfVxuLmNvbmZpcm0tYnRuLXRleHQgeyBmb250LXNpemU6IDI2cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgfVxuXG5AbWVkaWEgKHNoYXBlOiByZWN0KSB7XG4gIC5zY3JvbGwtaW5uZXIgeyBtYXJnaW4tdG9wOiAtMTVweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWF4LXdpZHRoOiAxMDApIHtcbiAgLnBhZ2UgeyB3aWR0aDogMTkycHg7IGhlaWdodDogNDkwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDkycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMTkycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA4cHggMTZweCA4cHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTc2cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMTRweDsgcGFkZGluZy1yaWdodDogMTJweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gIC5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzRweDsgfVxuICAuY2FyZC1zdWIgeyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAzMHB4OyBtYXJnaW4tdG9wOiA0cHg7IH1cbiAgLnNwYWNlciB7IGhlaWdodDogMTZweDsgfVxuICAuY29uZmlybS1vdmVybGF5IHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDQ5MHB4OyB9XG4gIC5jb25maXJtLWJveCB7IHdpZHRoOiAxNjhweDsgaGVpZ2h0OiAyMzBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZzogMTZweCAxMHB4OyB9XG4gIC5jb25maXJtLXRpdGxlIHsgZm9udC1zaXplOiAyNnB4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgLmNvbmZpcm0tY21kIHsgZm9udC1zaXplOiAyMHB4OyBwYWRkaW5nOiA0cHggMTBweDsgfVxuICAuY29uZmlybS13YXJuIHsgZm9udC1zaXplOiAxOHB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gIC5jb25maXJtLWJ0bnMgeyB3aWR0aDogMTQ4cHg7IH1cbiAgLmNvbmZpcm0tYnRuIHsgd2lkdGg6IDY2cHg7IGhlaWdodDogNDJweDsgYm9yZGVyLXJhZGl1czogMThweDsgfVxuICAuY29uZmlybS1idG4tdGV4dCB7IGZvbnQtc2l6ZTogMjBweDsgfVxufVxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWluLXdpZHRoOiAxMDEpIHtcbiAgLnBhZ2UgeyB3aWR0aDogMjEycHg7IGhlaWdodDogNTIwcHg7IH1cbiAgLmNvbnRlbnQtZnVsbCB7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA1MjBweDsgfVxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAyMTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDEwMnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDM2cHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5waWxsLW1vcmUgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9jb21tb24vYmFja19jYXBzdWxlLnBuZyk7IGJhY2tncm91bmQtc2l6ZTogMTAycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMjEycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAuc2Nyb2xsLWlubmVyIHsgcGFkZGluZzogMCA4cHggMTZweCA4cHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTk2cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMTRweDsgcGFkZGluZy1yaWdodDogMTJweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gIC5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzRweDsgfVxuICAuY2FyZC1zdWIgeyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAzMHB4OyBtYXJnaW4tdG9wOiA0cHg7IH1cbiAgLnNwYWNlciB7IGhlaWdodDogMTZweDsgfVxuICAuY29uZmlybS1vdmVybGF5IHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5jb25maXJtLWJveCB7IHdpZHRoOiAxODhweDsgaGVpZ2h0OiAyNDBweDsgYm9yZGVyLXJhZGl1czogMjdweDsgcGFkZGluZzogMTZweCAxMHB4OyB9XG4gIC5jb25maXJtLXRpdGxlIHsgZm9udC1zaXplOiAyNnB4OyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cbiAgLmNvbmZpcm0tY21kIHsgZm9udC1zaXplOiAyMHB4OyBwYWRkaW5nOiA0cHggMTBweDsgfVxuICAuY29uZmlybS13YXJuIHsgZm9udC1zaXplOiAxOHB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gIC5jb25maXJtLWJ0bnMgeyB3aWR0aDogMTY0cHg7IH1cbiAgLmNvbmZpcm0tYnRuIHsgd2lkdGg6IDc0cHg7IGhlaWdodDogNDRweDsgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuICAuY29uZmlybS1idG4tdGV4dCB7IGZvbnQtc2l6ZTogMjJweDsgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJDT01NQU5EX0RBVEEiLCJ0ZW1wbGF0ZXMiLCJpMThuS2V5IiwiaXRlbXMiLCJjbWQiLCJsYWJlbCIsImRlc2MiLCJmaWxlIiwiZGFuZ2VyIiwic3lzdGVtIiwicHJvY2VzcyIsIm5ldHdvcmsiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcm90ZWN0ZWQiLCJjYXRlZ29yeSIsImVudHJ5IiwicHJpdmF0ZSIsIm5vd1RpbWUiLCJ0aW1lciIsImNtZHMiLCJjYXRlZ29yeVRpdGxlIiwic2hvd0NvbmZpcm0iLCJjb25maXJtQ21kIiwib25Jbml0Iiwic2VsZiIsInVwZGF0ZVRpbWUiLCJzZXRJbnRlcnZhbCIsImNhdERhdGEiLCIkdCIsImkiLCJsZW5ndGgiLCJpdGVtIiwicHVzaCIsImxhYmVsQ2xhc3MiLCJvbkRlc3Ryb3kiLCJjbGVhckludGVydmFsIiwiZCIsIkRhdGUiLCJnZXRIb3VycyIsInNsaWNlIiwiZ2V0TWludXRlcyIsInNlbmRDbWQiLCJ2aWJyYXRvciIsInZpYnJhdGUiLCJkdXJhdGlvbiIsImRvTmF2aWdhdGUiLCJjb25maXJtRGFuZ2VyIiwiY2FuY2VsRGFuZ2VyIiwicm91dGUiLCJ1cmkiLCJwYXJhbXMiLCJyb3V0ZXIiLCJyZXBsYWNlIiwiZ29CYWNrIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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