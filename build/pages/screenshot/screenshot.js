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
                                "status-sub"
                            ]
                        ],
                        {
                            lines: 2
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "preview-card"
                            ]
                        ],
                        {
                            width: "324px",
                            marginTop: "8px",
                            marginRight: "6px",
                            marginBottom: "0",
                            marginLeft: "6px",
                            paddingTop: "12px",
                            paddingRight: "12px",
                            paddingBottom: "12px",
                            paddingLeft: "12px",
                            borderRadius: "36px",
                            backgroundColor: "#262626",
                            flexDirection: "column"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "preview-image"
                            ]
                        ],
                        {
                            width: "300px",
                            height: "180px",
                            borderRadius: "24px",
                            backgroundColor: "#111111",
                            objectFit: "contain"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "preview-title"
                            ]
                        ],
                        {
                            marginTop: "12px",
                            fontSize: "28px",
                            lineHeight: "34px",
                            fontWeight: "bold",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "preview-sub"
                            ]
                        ],
                        {
                            marginTop: "4px",
                            fontSize: "24px",
                            lineHeight: "30px",
                            color: "rgba(255, 255, 255, 0.6)",
                            fontWeight: "bold"
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
                                "preview-card"
                            ]
                        ],
                        {
                            width: "184px",
                            marginTop: "8px",
                            marginRight: "4px",
                            marginBottom: "0",
                            marginLeft: "4px",
                            paddingTop: "10px",
                            paddingRight: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "10px",
                            borderRadius: "27px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "preview-image"
                            ]
                        ],
                        {
                            width: "164px",
                            height: "98px",
                            borderRadius: "20px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "preview-title"
                            ]
                        ],
                        {
                            fontSize: "24px",
                            lineHeight: "30px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (max-width:100)"
                        },
                        [
                            [
                                0,
                                "preview-sub"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            lineHeight: "24px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "preview-card"
                            ]
                        ],
                        {
                            width: "204px",
                            marginTop: "8px",
                            marginRight: "4px",
                            marginBottom: "0",
                            marginLeft: "4px",
                            paddingTop: "10px",
                            paddingRight: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "10px",
                            borderRadius: "27px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "preview-image"
                            ]
                        ],
                        {
                            width: "184px",
                            height: "110px",
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
                                "preview-title"
                            ]
                        ],
                        {
                            fontSize: "24px",
                            lineHeight: "30px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:pill-shaped) and (min-width:101)"
                        },
                        [
                            [
                                0,
                                "preview-sub"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            lineHeight: "24px"
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
                    var _system4 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var REQUEST_FILE = "internal://files/screenshot_request.json";
                    var RESULT_FILE = "internal://files/screenshot_result.json";
                    var HISTORY_FILE = "internal://files/screenshot_history.json";
                    var BRIDGE_STATE_FILE = "internal://files/bridge_state.json";
                    var QUICKAPP_DEBUG_FILE = "internal://files/quickapp_debug.json";
                    var PREVIEW_STATE_FILE = "internal://files/screenshot_preview_state.json";
                    var shotSeq = Date.now();
                    var _default = exports.default = {
                        private: {
                            nowTime: "00:00",
                            timer: null,
                            pollTimer: null,
                            statusText: "",
                            isBusy: false,
                            hasPreview: false,
                            previewPath: "",
                            previewIndex: 0,
                            previewTime: "",
                            previewMode: "real",
                            hasShots: false,
                            shotItems: [],
                            quickAppDebugEnabled: false,
                            samplePath: "",
                            sampleLabel: "",
                            previewImageStyle: "height: 180px;",
                            screenWidth: 336,
                            screenHeight: 480
                        },
                        onInit () {
                            var self = this;
                            self.updateTime();
                            self.statusText = self.$t("screenshot.idle");
                            self.timer = setInterval(function() {
                                self.updateTime();
                            }, 1000);
                            self.resolveSamplePath();
                            self.loadPreviewState();
                        },
                        onShow () {
                            var self = this;
                            self.refreshAll();
                            self.loadQuickAppDebugMode();
                            if (!self.pollTimer) self.pollTimer = setInterval(function() {
                                self.refreshAll();
                                self.loadQuickAppDebugMode();
                            }, 1000);
                        },
                        onHide () {
                            if (this.pollTimer) {
                                clearInterval(this.pollTimer);
                                this.pollTimer = null;
                            }
                        },
                        onDestroy () {
                            clearInterval(this.timer);
                            if (this.pollTimer) clearInterval(this.pollTimer);
                        },
                        updateTime () {
                            var d = new Date();
                            this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                        },
                        refreshAll () {
                            this.loadState();
                            this.loadHistory();
                        },
                        loadPreviewState () {
                            var self = this;
                            _system2.default.readText({
                                uri: PREVIEW_STATE_FILE,
                                success: function(data) {
                                    try {
                                        var json = JSON.parse(data.text);
                                        self.previewMode = "sample" === json.mode ? "sample" : "real";
                                    } catch (e) {
                                        self.previewMode = "real";
                                    }
                                    self.applyPreviewMode();
                                    self.loadHistory();
                                },
                                fail: function() {
                                    self.previewMode = "real";
                                    self.applyPreviewMode();
                                    self.loadHistory();
                                }
                            });
                        },
                        writePreviewState (mode) {
                            _system2.default.writeText({
                                uri: PREVIEW_STATE_FILE,
                                text: JSON.stringify({
                                    mode: mode
                                }),
                                append: false
                            });
                        },
                        applyPreviewMode () {
                            if ("sample" !== this.previewMode || !this.samplePath) return;
                            this.previewPath = this.samplePath;
                            this.previewIndex = 999;
                            this.previewTime = this.$t("screenshot.sampleTimePrefix") + this.sampleLabel;
                            this.hasPreview = true;
                        },
                        resolveSamplePath () {
                            var self = this;
                            _system4.default.getInfo({
                                success: function(ret) {
                                    var width = ret.screenWidth || 336;
                                    var height = ret.screenHeight || 480;
                                    self.screenWidth = width;
                                    self.screenHeight = height;
                                    if (width <= 192) {
                                        self.samplePath = "/common/Debug_192.png";
                                        self.sampleLabel = "192";
                                    } else if (width <= 212) {
                                        self.samplePath = "/common/Debug_212.png";
                                        self.sampleLabel = "212";
                                    } else {
                                        self.samplePath = "/common/Debug_336.png";
                                        self.sampleLabel = "336";
                                    }
                                    self.updatePreviewImageStyle();
                                },
                                fail: function() {
                                    self.screenWidth = 336;
                                    self.screenHeight = 480;
                                    self.samplePath = "/common/Debug_336.png";
                                    self.sampleLabel = "336";
                                    self.updatePreviewImageStyle();
                                }
                            });
                        },
                        updatePreviewImageStyle () {
                            var width = 300;
                            if (this.screenWidth <= 192) width = 164;
                            else if (this.screenWidth <= 212) width = 184;
                            var ratio = this.screenHeight / this.screenWidth;
                            var height = Math.round(width * ratio);
                            this.previewImageStyle = "height: " + height + "px;";
                        },
                        loadQuickAppDebugMode () {
                            var self = this;
                            _system2.default.readText({
                                uri: QUICKAPP_DEBUG_FILE,
                                success: function(data) {
                                    try {
                                        var json = JSON.parse(data.text);
                                        self.quickAppDebugEnabled = true === json.enabled;
                                    } catch (e) {
                                        self.quickAppDebugEnabled = false;
                                    }
                                    if (!self.quickAppDebugEnabled && "sample" === self.previewMode) self.resetPreview();
                                    self.loadHistory();
                                },
                                fail: function() {
                                    self.quickAppDebugEnabled = false;
                                    if ("sample" === self.previewMode) self.resetPreview();
                                    self.loadHistory();
                                }
                            });
                        },
                        loadState () {
                            var self = this;
                            _system2.default.readText({
                                uri: BRIDGE_STATE_FILE,
                                success: function(data) {
                                    try {
                                        var state = JSON.parse(data.text);
                                        self.isBusy = true === state.busy;
                                        if (self.isBusy) {
                                            if ("screenshot" === state.mode && state.message) self.statusText = state.message;
                                            else self.statusText = self.$t("screenshot.bridgeBusy");
                                            return;
                                        }
                                        self.loadResultState();
                                    } catch (e) {
                                        self.isBusy = false;
                                        self.loadResultState();
                                    }
                                },
                                fail: function() {
                                    self.isBusy = false;
                                    self.loadResultState();
                                }
                            });
                        },
                        loadResultState () {
                            var self = this;
                            _system2.default.readText({
                                uri: RESULT_FILE,
                                success: function(data) {
                                    try {
                                        var result = JSON.parse(data.text);
                                        if ("done" === result.status) self.statusText = self.$t("screenshot.done");
                                        else if ("error" === result.status) self.statusText = result.message || self.$t("screenshot.error");
                                        else if ("waiting_screen_on" === result.status || "capturing" === result.status) self.statusText = result.message || self.$t("screenshot.preparing");
                                        else self.statusText = self.$t("screenshot.idle");
                                    } catch (e) {
                                        self.statusText = self.$t("screenshot.idle");
                                    }
                                },
                                fail: function() {
                                    self.statusText = self.$t("screenshot.idle");
                                }
                            });
                        },
                        normalizeShots (items) {
                            var normalized = [];
                            if (!(items instanceof Array)) return normalized;
                            for(var i = 0; i < items.length; i++){
                                var item = items[i];
                                if (item && item.file) normalized.push({
                                    id: "shot-" + i,
                                    type: "real",
                                    label: "#" + (item.index || i + 1),
                                    index: item.index || i + 1,
                                    file: item.file,
                                    timeText: item.capturedAt || this.$t("screenshot.unknownTime")
                                });
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
                                        if (list && list.items instanceof Array) list = list.items;
                                    } catch (e) {}
                                    var realItems = self.normalizeShots(list);
                                    self.shotItems = self.buildShotItems(realItems);
                                    self.hasShots = self.shotItems.length > 0;
                                    if ("sample" === self.previewMode) return void self.applyPreviewMode();
                                    if (realItems.length > 0) {
                                        var selected = null;
                                        for(var i = 0; i < realItems.length; i++)if (realItems[i].file === self.previewPath) {
                                            selected = realItems[i];
                                            break;
                                        }
                                        var latest = selected || realItems[0];
                                        self.previewPath = latest.file;
                                        self.previewIndex = latest.index;
                                        self.previewTime = latest.timeText;
                                        self.hasPreview = true;
                                    } else {
                                        self.previewPath = "";
                                        self.previewIndex = 0;
                                        self.previewTime = "";
                                        self.hasPreview = false;
                                    }
                                },
                                fail: function() {
                                    self.shotItems = self.buildShotItems([]);
                                    self.hasShots = self.shotItems.length > 0;
                                    if ("sample" === self.previewMode) return void self.applyPreviewMode();
                                    self.previewPath = "";
                                    self.previewIndex = 0;
                                    self.previewTime = "";
                                    self.hasPreview = false;
                                }
                            });
                        },
                        buildShotItems (realItems) {
                            return realItems.slice(0);
                        },
                        requestScreenshot () {
                            var self = this;
                            if (self.isBusy) return void _system3.default.showToast({
                                message: self.statusText || self.$t("screenshot.busyDesc")
                            });
                            shotSeq++;
                            _system2.default.writeText({
                                uri: REQUEST_FILE,
                                text: JSON.stringify({
                                    seq: shotSeq,
                                    type: "screenshot",
                                    timestamp: Math.floor(Date.now() / 1000)
                                }),
                                append: false,
                                success: function() {
                                    self.isBusy = true;
                                    self.statusText = self.$t("screenshot.preparing");
                                },
                                fail: function() {
                                    self.statusText = self.$t("screenshot.error");
                                    _system3.default.showToast({
                                        message: self.$t("screenshot.error")
                                    });
                                }
                            });
                        },
                        selectShot (filePath, index, timeText) {
                            this.previewMode = "real";
                            this.writePreviewState("real");
                            this.previewPath = filePath;
                            this.previewIndex = index;
                            this.previewTime = timeText;
                            this.hasPreview = !!filePath;
                        },
                        onShotItemClick (item) {
                            if (!item) return;
                            this.selectShot(item.file, item.index, item.timeText);
                        },
                        resetPreview () {
                            this.previewMode = "real";
                            if (this.shotItems.length > 0) {
                                var latest = this.shotItems[0];
                                this.previewPath = latest.file;
                                this.previewIndex = latest.index;
                                this.previewTime = latest.timeText;
                                this.hasPreview = true;
                            } else {
                                this.previewPath = "";
                                this.previewIndex = 0;
                                this.previewTime = "";
                                this.hasPreview = false;
                            }
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
                                            return _vm_.$t("screenshot.title");
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
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "card",
                                            "card-primary"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.requestScreenshot(evt);
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
                                                    return _vm_.$t("screenshot.startTitle");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub",
                                                    "card-sub-primary"
                                                ],
                                                value: function() {
                                                    return _vm_.isBusy ? _vm_.$t("screenshot.busyDesc") : _vm_.$t("screenshot.startDesc");
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
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
                                                    return _vm_.$t("screenshot.statusTitle");
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub",
                                                    "status-sub"
                                                ],
                                                value: function() {
                                                    return _vm_.statusText;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.hasPreview;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "preview-card"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "preview-image"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.previewImageStyle);
                                                    },
                                                    src: function() {
                                                        return _vm_.previewPath;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "preview-title"
                                                    ],
                                                    value: function() {
                                                        return "#" + _vm_.previewIndex;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "preview-sub"
                                                    ],
                                                    value: function() {
                                                        return _vm_.previewTime;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return !_vm_.hasPreview;
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
                                                            return _vm_.$t("screenshot.emptyTitle");
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
                                                            return _vm_.$t("screenshot.emptyDesc");
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
                                            return _vm_.hasShots;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__cf__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                exp: function() {
                                                    return {
                                                        __list__: _vm_.shotItems,
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
                                                                return _vm_.onShotItemClick($item, evt);
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
                                                                    return $item.timeText;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2NyZWVuc2hvdC9zY3JlZW5zaG90LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvcGFnZXMvc2NyZWVuc2hvdC9zY3JlZW5zaG90LnV4Il0sInNvdXJjZXNDb250ZW50IjpbIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8c2Nyb2xsIGNsYXNzPVwiY29udGVudC1mdWxsXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgYm91bmNlcz1cInRydWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vaGQucG5nXCIgY2xhc3M9XCJoZWFkZXItYmdcIiAvPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpbWVcIj57eyBub3dUaW1lIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhkLXRpdGxlXCI+e3sgJHQoXCJzY3JlZW5zaG90LnRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICA8aW1nIHNyYz1cIi9jb21tb24vYmFjay5wbmdcIiBAY2xpY2s9XCJnb0JhY2tcIiBjbGFzcz1cImhkLWJhY2tcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLWlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtcHJpbWFyeVwiIG9uY2xpY2s9XCJyZXF1ZXN0U2NyZWVuc2hvdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwic2NyZWVuc2hvdC5zdGFydFRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YiBjYXJkLXN1Yi1wcmltYXJ5XCI+e3sgaXNCdXN5ID8gJHQoXCJzY3JlZW5zaG90LmJ1c3lEZXNjXCIpIDogJHQoXCJzY3JlZW5zaG90LnN0YXJ0RGVzY1wiKSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtbGFiZWxcIj57eyAkdChcInNjcmVlbnNob3Quc3RhdHVzVGl0bGVcIikgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViIHN0YXR1cy1zdWJcIj57eyBzdGF0dXNUZXh0IH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlmPVwie3toYXNQcmV2aWV3fX1cIiBjbGFzcz1cInByZXZpZXctY2FyZFwiPlxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInByZXZpZXctaW1hZ2VcIiBzdHlsZT1cInt7IHByZXZpZXdJbWFnZVN0eWxlIH19XCIgc3JjPVwie3sgcHJldmlld1BhdGggfX1cIj48L2ltYWdlPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicHJldmlldy10aXRsZVwiPiN7eyBwcmV2aWV3SW5kZXggfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJwcmV2aWV3LXN1YlwiPnt7IHByZXZpZXdUaW1lIH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlmPVwie3shaGFzUHJldmlld319XCIgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJHQoXCJzY3JlZW5zaG90LmVtcHR5VGl0bGVcIikgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+e3sgJHQoXCJzY3JlZW5zaG90LmVtcHR5RGVzY1wiKSB9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZj1cInt7aGFzU2hvdHN9fVwiIGNsYXNzPVwiY2FyZFwiIGZvcj1cInt7c2hvdEl0ZW1zfX1cIiB0aWQ9XCJpZFwiIG9uY2xpY2s9XCJvblNob3RJdGVtQ2xpY2soJGl0ZW0pXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJGl0ZW0ubGFiZWwgfX08L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+e3sgJGl0ZW0udGltZVRleHQgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2Nyb2xsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5pbXBvcnQgZmlsZSBmcm9tIFwiQHN5c3RlbS5maWxlXCJcbmltcG9ydCBwcm9tcHQgZnJvbSBcIkBzeXN0ZW0ucHJvbXB0XCJcbmltcG9ydCBkZXZpY2UgZnJvbSBcIkBzeXN0ZW0uZGV2aWNlXCJcblxudmFyIFJFUVVFU1RfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9zY3JlZW5zaG90X3JlcXVlc3QuanNvblwiXG52YXIgUkVTVUxUX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvc2NyZWVuc2hvdF9yZXN1bHQuanNvblwiXG52YXIgSElTVE9SWV9GSUxFID0gXCJpbnRlcm5hbDovL2ZpbGVzL3NjcmVlbnNob3RfaGlzdG9yeS5qc29uXCJcbnZhciBCUklER0VfU1RBVEVfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9icmlkZ2Vfc3RhdGUuanNvblwiXG52YXIgUVVJQ0tBUFBfREVCVUdfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9xdWlja2FwcF9kZWJ1Zy5qc29uXCJcbnZhciBQUkVWSUVXX1NUQVRFX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvc2NyZWVuc2hvdF9wcmV2aWV3X3N0YXRlLmpzb25cIlxudmFyIHNob3RTZXEgPSBEYXRlLm5vdygpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJpdmF0ZToge1xuICAgIG5vd1RpbWU6IFwiMDA6MDBcIixcbiAgICB0aW1lcjogbnVsbCxcbiAgICBwb2xsVGltZXI6IG51bGwsXG4gICAgc3RhdHVzVGV4dDogXCJcIixcbiAgICBpc0J1c3k6IGZhbHNlLFxuICAgIGhhc1ByZXZpZXc6IGZhbHNlLFxuICAgIHByZXZpZXdQYXRoOiBcIlwiLFxuICAgIHByZXZpZXdJbmRleDogMCxcbiAgICBwcmV2aWV3VGltZTogXCJcIixcbiAgICBwcmV2aWV3TW9kZTogXCJyZWFsXCIsXG4gICAgaGFzU2hvdHM6IGZhbHNlLFxuICAgIHNob3RJdGVtczogW10sXG4gICAgcXVpY2tBcHBEZWJ1Z0VuYWJsZWQ6IGZhbHNlLFxuICAgIHNhbXBsZVBhdGg6IFwiXCIsXG4gICAgc2FtcGxlTGFiZWw6IFwiXCIsXG4gICAgcHJldmlld0ltYWdlU3R5bGU6IFwiaGVpZ2h0OiAxODBweDtcIixcbiAgICBzY3JlZW5XaWR0aDogMzM2LFxuICAgIHNjcmVlbkhlaWdodDogNDgwXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHNlbGYudXBkYXRlVGltZSgpXG4gICAgc2VsZi5zdGF0dXNUZXh0ID0gc2VsZi4kdChcInNjcmVlbnNob3QuaWRsZVwiKVxuICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVUaW1lKCkgfSwgMTAwMClcbiAgICBzZWxmLnJlc29sdmVTYW1wbGVQYXRoKClcbiAgICBzZWxmLmxvYWRQcmV2aWV3U3RhdGUoKVxuICB9LFxuXG4gIG9uU2hvdygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnJlZnJlc2hBbGwoKVxuICAgIHNlbGYubG9hZFF1aWNrQXBwRGVidWdNb2RlKClcbiAgICBpZiAoIXNlbGYucG9sbFRpbWVyKSB7XG4gICAgICBzZWxmLnBvbGxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnJlZnJlc2hBbGwoKVxuICAgICAgICBzZWxmLmxvYWRRdWlja0FwcERlYnVnTW9kZSgpXG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgfSxcblxuICBvbkhpZGUoKSB7XG4gICAgaWYgKHRoaXMucG9sbFRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbFRpbWVyKVxuICAgICAgdGhpcy5wb2xsVGltZXIgPSBudWxsXG4gICAgfVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgaWYgKHRoaXMucG9sbFRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbFRpbWVyKVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVUaW1lKCkge1xuICAgIHZhciBkID0gbmV3IERhdGUoKVxuICAgIHRoaXMubm93VGltZSA9IChcIjBcIiArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBkLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpXG4gIH0sXG5cbiAgcmVmcmVzaEFsbCgpIHtcbiAgICB0aGlzLmxvYWRTdGF0ZSgpXG4gICAgdGhpcy5sb2FkSGlzdG9yeSgpXG4gIH0sXG5cbiAgbG9hZFByZXZpZXdTdGF0ZSgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBmaWxlLnJlYWRUZXh0KHtcbiAgICAgIHVyaTogUFJFVklFV19TVEFURV9GSUxFLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShkYXRhLnRleHQpXG4gICAgICAgICAgc2VsZi5wcmV2aWV3TW9kZSA9IGpzb24ubW9kZSA9PT0gXCJzYW1wbGVcIiA/IFwic2FtcGxlXCIgOiBcInJlYWxcIlxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc2VsZi5wcmV2aWV3TW9kZSA9IFwicmVhbFwiXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5hcHBseVByZXZpZXdNb2RlKClcbiAgICAgICAgc2VsZi5sb2FkSGlzdG9yeSgpXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYucHJldmlld01vZGUgPSBcInJlYWxcIlxuICAgICAgICBzZWxmLmFwcGx5UHJldmlld01vZGUoKVxuICAgICAgICBzZWxmLmxvYWRIaXN0b3J5KClcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHdyaXRlUHJldmlld1N0YXRlKG1vZGUpIHtcbiAgICBmaWxlLndyaXRlVGV4dCh7XG4gICAgICB1cmk6IFBSRVZJRVdfU1RBVEVfRklMRSxcbiAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHsgbW9kZTogbW9kZSB9KSxcbiAgICAgIGFwcGVuZDogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIGFwcGx5UHJldmlld01vZGUoKSB7XG4gICAgaWYgKHRoaXMucHJldmlld01vZGUgIT09IFwic2FtcGxlXCIgfHwgIXRoaXMuc2FtcGxlUGF0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMucHJldmlld1BhdGggPSB0aGlzLnNhbXBsZVBhdGhcbiAgICB0aGlzLnByZXZpZXdJbmRleCA9IDk5OVxuICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiR0KFwic2NyZWVuc2hvdC5zYW1wbGVUaW1lUHJlZml4XCIpICsgdGhpcy5zYW1wbGVMYWJlbFxuICAgIHRoaXMuaGFzUHJldmlldyA9IHRydWVcbiAgfSxcblxuICByZXNvbHZlU2FtcGxlUGF0aCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBkZXZpY2UuZ2V0SW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXQpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gcmV0LnNjcmVlbldpZHRoIHx8IDMzNlxuICAgICAgICB2YXIgaGVpZ2h0ID0gcmV0LnNjcmVlbkhlaWdodCB8fCA0ODBcbiAgICAgICAgc2VsZi5zY3JlZW5XaWR0aCA9IHdpZHRoXG4gICAgICAgIHNlbGYuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIGlmICh3aWR0aCA8PSAxOTIpIHtcbiAgICAgICAgICBzZWxmLnNhbXBsZVBhdGggPSBcIi9jb21tb24vRGVidWdfMTkyLnBuZ1wiXG4gICAgICAgICAgc2VsZi5zYW1wbGVMYWJlbCA9IFwiMTkyXCJcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA8PSAyMTIpIHtcbiAgICAgICAgICBzZWxmLnNhbXBsZVBhdGggPSBcIi9jb21tb24vRGVidWdfMjEyLnBuZ1wiXG4gICAgICAgICAgc2VsZi5zYW1wbGVMYWJlbCA9IFwiMjEyXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnNhbXBsZVBhdGggPSBcIi9jb21tb24vRGVidWdfMzM2LnBuZ1wiXG4gICAgICAgICAgc2VsZi5zYW1wbGVMYWJlbCA9IFwiMzM2XCJcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnVwZGF0ZVByZXZpZXdJbWFnZVN0eWxlKClcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5zY3JlZW5XaWR0aCA9IDMzNlxuICAgICAgICBzZWxmLnNjcmVlbkhlaWdodCA9IDQ4MFxuICAgICAgICBzZWxmLnNhbXBsZVBhdGggPSBcIi9jb21tb24vRGVidWdfMzM2LnBuZ1wiXG4gICAgICAgIHNlbGYuc2FtcGxlTGFiZWwgPSBcIjMzNlwiXG4gICAgICAgIHNlbGYudXBkYXRlUHJldmlld0ltYWdlU3R5bGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgdXBkYXRlUHJldmlld0ltYWdlU3R5bGUoKSB7XG4gICAgdmFyIHdpZHRoID0gMzAwXG4gICAgaWYgKHRoaXMuc2NyZWVuV2lkdGggPD0gMTkyKSB7XG4gICAgICB3aWR0aCA9IDE2NFxuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JlZW5XaWR0aCA8PSAyMTIpIHtcbiAgICAgIHdpZHRoID0gMTg0XG4gICAgfVxuICAgIHZhciByYXRpbyA9IHRoaXMuc2NyZWVuSGVpZ2h0IC8gdGhpcy5zY3JlZW5XaWR0aFxuICAgIHZhciBoZWlnaHQgPSBNYXRoLnJvdW5kKHdpZHRoICogcmF0aW8pXG4gICAgdGhpcy5wcmV2aWV3SW1hZ2VTdHlsZSA9IFwiaGVpZ2h0OiBcIiArIGhlaWdodCArIFwicHg7XCJcbiAgfSxcblxuICBsb2FkUXVpY2tBcHBEZWJ1Z01vZGUoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IFFVSUNLQVBQX0RFQlVHX0ZJTEUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICBzZWxmLnF1aWNrQXBwRGVidWdFbmFibGVkID0ganNvbi5lbmFibGVkID09PSB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZWxmLnF1aWNrQXBwRGVidWdFbmFibGVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNlbGYucXVpY2tBcHBEZWJ1Z0VuYWJsZWQgJiYgc2VsZi5wcmV2aWV3TW9kZSA9PT0gXCJzYW1wbGVcIikge1xuICAgICAgICAgIHNlbGYucmVzZXRQcmV2aWV3KClcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmxvYWRIaXN0b3J5KClcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5xdWlja0FwcERlYnVnRW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIGlmIChzZWxmLnByZXZpZXdNb2RlID09PSBcInNhbXBsZVwiKSB7XG4gICAgICAgICAgc2VsZi5yZXNldFByZXZpZXcoKVxuICAgICAgICB9XG4gICAgICAgIHNlbGYubG9hZEhpc3RvcnkoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgbG9hZFN0YXRlKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUucmVhZFRleHQoe1xuICAgICAgdXJpOiBCUklER0VfU1RBVEVfRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgc3RhdGUgPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICBzZWxmLmlzQnVzeSA9IHN0YXRlLmJ1c3kgPT09IHRydWVcbiAgICAgICAgICBpZiAoc2VsZi5pc0J1c3kpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5tb2RlID09PSBcInNjcmVlbnNob3RcIiAmJiBzdGF0ZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHN0YXRlLm1lc3NhZ2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJzY3JlZW5zaG90LmJyaWRnZUJ1c3lcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLmxvYWRSZXN1bHRTdGF0ZSgpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZWxmLmlzQnVzeSA9IGZhbHNlXG4gICAgICAgICAgc2VsZi5sb2FkUmVzdWx0U3RhdGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuaXNCdXN5ID0gZmFsc2VcbiAgICAgICAgc2VsZi5sb2FkUmVzdWx0U3RhdGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgbG9hZFJlc3VsdFN0YXRlKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZpbGUucmVhZFRleHQoe1xuICAgICAgdXJpOiBSRVNVTFRfRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShkYXRhLnRleHQpXG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XG4gICAgICAgICAgICBzZWxmLnN0YXR1c1RleHQgPSBzZWxmLiR0KFwic2NyZWVuc2hvdC5kb25lXCIpXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHJlc3VsdC5tZXNzYWdlIHx8IHNlbGYuJHQoXCJzY3JlZW5zaG90LmVycm9yXCIpXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzID09PSBcIndhaXRpbmdfc2NyZWVuX29uXCIgfHwgcmVzdWx0LnN0YXR1cyA9PT0gXCJjYXB0dXJpbmdcIikge1xuICAgICAgICAgICAgc2VsZi5zdGF0dXNUZXh0ID0gcmVzdWx0Lm1lc3NhZ2UgfHwgc2VsZi4kdChcInNjcmVlbnNob3QucHJlcGFyaW5nXCIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdHVzVGV4dCA9IHNlbGYuJHQoXCJzY3JlZW5zaG90LmlkbGVcIilcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZWxmLnN0YXR1c1RleHQgPSBzZWxmLiR0KFwic2NyZWVuc2hvdC5pZGxlXCIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5zdGF0dXNUZXh0ID0gc2VsZi4kdChcInNjcmVlbnNob3QuaWRsZVwiKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgbm9ybWFsaXplU2hvdHMoaXRlbXMpIHtcbiAgICB2YXIgbm9ybWFsaXplZCA9IFtdXG4gICAgaWYgKCEoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSkpIHJldHVybiBub3JtYWxpemVkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXVxuICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmZpbGUpIGNvbnRpbnVlXG4gICAgICBub3JtYWxpemVkLnB1c2goe1xuICAgICAgICBpZDogXCJzaG90LVwiICsgaSxcbiAgICAgICAgdHlwZTogXCJyZWFsXCIsXG4gICAgICAgIGxhYmVsOiBcIiNcIiArIChpdGVtLmluZGV4IHx8IChpICsgMSkpLFxuICAgICAgICBpbmRleDogaXRlbS5pbmRleCB8fCAoaSArIDEpLFxuICAgICAgICBmaWxlOiBpdGVtLmZpbGUsXG4gICAgICAgIHRpbWVUZXh0OiBpdGVtLmNhcHR1cmVkQXQgfHwgdGhpcy4kdChcInNjcmVlbnNob3QudW5rbm93blRpbWVcIilcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkXG4gIH0sXG5cbiAgbG9hZEhpc3RvcnkoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IEhJU1RPUllfRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGxpc3QgPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICBpZiAobGlzdCAmJiBsaXN0Lml0ZW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGxpc3QgPSBsaXN0Lml0ZW1zXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB2YXIgcmVhbEl0ZW1zID0gc2VsZi5ub3JtYWxpemVTaG90cyhsaXN0KVxuICAgICAgICBzZWxmLnNob3RJdGVtcyA9IHNlbGYuYnVpbGRTaG90SXRlbXMocmVhbEl0ZW1zKVxuICAgICAgICBzZWxmLmhhc1Nob3RzID0gc2VsZi5zaG90SXRlbXMubGVuZ3RoID4gMFxuICAgICAgICBpZiAoc2VsZi5wcmV2aWV3TW9kZSA9PT0gXCJzYW1wbGVcIikge1xuICAgICAgICAgIHNlbGYuYXBwbHlQcmV2aWV3TW9kZSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlYWxJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIHNlbGVjdGVkID0gbnVsbFxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVhbEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVhbEl0ZW1zW2ldLmZpbGUgPT09IHNlbGYucHJldmlld1BhdGgpIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSByZWFsSXRlbXNbaV1cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGxhdGVzdCA9IHNlbGVjdGVkIHx8IHJlYWxJdGVtc1swXVxuICAgICAgICAgIHNlbGYucHJldmlld1BhdGggPSBsYXRlc3QuZmlsZVxuICAgICAgICAgIHNlbGYucHJldmlld0luZGV4ID0gbGF0ZXN0LmluZGV4XG4gICAgICAgICAgc2VsZi5wcmV2aWV3VGltZSA9IGxhdGVzdC50aW1lVGV4dFxuICAgICAgICAgIHNlbGYuaGFzUHJldmlldyA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLnByZXZpZXdQYXRoID0gXCJcIlxuICAgICAgICAgIHNlbGYucHJldmlld0luZGV4ID0gMFxuICAgICAgICAgIHNlbGYucHJldmlld1RpbWUgPSBcIlwiXG4gICAgICAgICAgc2VsZi5oYXNQcmV2aWV3ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnNob3RJdGVtcyA9IHNlbGYuYnVpbGRTaG90SXRlbXMoW10pXG4gICAgICAgIHNlbGYuaGFzU2hvdHMgPSBzZWxmLnNob3RJdGVtcy5sZW5ndGggPiAwXG4gICAgICAgIGlmIChzZWxmLnByZXZpZXdNb2RlID09PSBcInNhbXBsZVwiKSB7XG4gICAgICAgICAgc2VsZi5hcHBseVByZXZpZXdNb2RlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzZWxmLnByZXZpZXdQYXRoID0gXCJcIlxuICAgICAgICBzZWxmLnByZXZpZXdJbmRleCA9IDBcbiAgICAgICAgc2VsZi5wcmV2aWV3VGltZSA9IFwiXCJcbiAgICAgICAgc2VsZi5oYXNQcmV2aWV3ID0gZmFsc2VcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGJ1aWxkU2hvdEl0ZW1zKHJlYWxJdGVtcykge1xuICAgIHJldHVybiByZWFsSXRlbXMuc2xpY2UoMClcbiAgfSxcblxuICByZXF1ZXN0U2NyZWVuc2hvdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBpZiAoc2VsZi5pc0J1c3kpIHtcbiAgICAgIHByb21wdC5zaG93VG9hc3QoeyBtZXNzYWdlOiBzZWxmLnN0YXR1c1RleHQgfHwgc2VsZi4kdChcInNjcmVlbnNob3QuYnVzeURlc2NcIikgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzaG90U2VxKytcbiAgICBmaWxlLndyaXRlVGV4dCh7XG4gICAgICB1cmk6IFJFUVVFU1RfRklMRSxcbiAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VxOiBzaG90U2VxLFxuICAgICAgICB0eXBlOiBcInNjcmVlbnNob3RcIixcbiAgICAgICAgdGltZXN0YW1wOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgICAgfSksXG4gICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuaXNCdXN5ID0gdHJ1ZVxuICAgICAgICBzZWxmLnN0YXR1c1RleHQgPSBzZWxmLiR0KFwic2NyZWVuc2hvdC5wcmVwYXJpbmdcIilcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5zdGF0dXNUZXh0ID0gc2VsZi4kdChcInNjcmVlbnNob3QuZXJyb3JcIilcbiAgICAgICAgcHJvbXB0LnNob3dUb2FzdCh7IG1lc3NhZ2U6IHNlbGYuJHQoXCJzY3JlZW5zaG90LmVycm9yXCIpIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBzZWxlY3RTaG90KGZpbGVQYXRoLCBpbmRleCwgdGltZVRleHQpIHtcbiAgICB0aGlzLnByZXZpZXdNb2RlID0gXCJyZWFsXCJcbiAgICB0aGlzLndyaXRlUHJldmlld1N0YXRlKFwicmVhbFwiKVxuICAgIHRoaXMucHJldmlld1BhdGggPSBmaWxlUGF0aFxuICAgIHRoaXMucHJldmlld0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLnByZXZpZXdUaW1lID0gdGltZVRleHRcbiAgICB0aGlzLmhhc1ByZXZpZXcgPSAhIWZpbGVQYXRoXG4gIH0sXG5cbiAgb25TaG90SXRlbUNsaWNrKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHJldHVyblxuICAgIHRoaXMuc2VsZWN0U2hvdChpdGVtLmZpbGUsIGl0ZW0uaW5kZXgsIGl0ZW0udGltZVRleHQpXG4gIH0sXG5cbiAgcmVzZXRQcmV2aWV3KCkge1xuICAgIHRoaXMucHJldmlld01vZGUgPSBcInJlYWxcIlxuICAgIGlmICh0aGlzLnNob3RJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5zaG90SXRlbXNbMF1cbiAgICAgIHRoaXMucHJldmlld1BhdGggPSBsYXRlc3QuZmlsZVxuICAgICAgdGhpcy5wcmV2aWV3SW5kZXggPSBsYXRlc3QuaW5kZXhcbiAgICAgIHRoaXMucHJldmlld1RpbWUgPSBsYXRlc3QudGltZVRleHRcbiAgICAgIHRoaXMuaGFzUHJldmlldyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmV2aWV3UGF0aCA9IFwiXCJcbiAgICAgIHRoaXMucHJldmlld0luZGV4ID0gMFxuICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IFwiXCJcbiAgICAgIHRoaXMuaGFzUHJldmlldyA9IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGdvQmFjaygpIHtcbiAgICByb3V0ZXIuYmFjaygpXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vYmFjay1wYWdlLmNzcyc7XG5AaW1wb3J0ICcuLi8uLi9jb21tb24vY2FyZC5jc3MnO1xuXG4uc2Nyb2xsLWlubmVyIHsgbWFyZ2luLXRvcDogMDsgcGFkZGluZzogMCA2cHggMjBweCA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbi5zdGF0dXMtc3ViIHsgbGluZXM6IDI7IH1cbi5wcmV2aWV3LWNhcmQge1xuICB3aWR0aDogMzI0cHg7XG4gIG1hcmdpbjogOHB4IDZweCAwIDZweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcmV2aWV3LWltYWdlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnByZXZpZXctdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucHJldmlldy1zdWIge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKHNoYXBlOiByZWN0KSB7XG4gIC5zY3JvbGwtaW5uZXIgeyBtYXJnaW4tdG9wOiAtMTVweDsgfVxufVxuXG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucHJldmlldy1jYXJkIHtcbiAgICB3aWR0aDogMTg0cHg7XG4gICAgbWFyZ2luOiA4cHggNHB4IDAgNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgfVxuICAucHJldmlldy1pbWFnZSB7XG4gICAgd2lkdGg6IDE2NHB4O1xuICAgIGhlaWdodDogOThweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIC5wcmV2aWV3LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLnByZXZpZXctc3ViIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIH1cbn1cblxuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWluLXdpZHRoOiAxMDEpIHtcbiAgLnByZXZpZXctY2FyZCB7XG4gICAgd2lkdGg6IDIwNHB4O1xuICAgIG1hcmdpbjogOHB4IDRweCAwIDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIH1cbiAgLnByZXZpZXctaW1hZ2Uge1xuICAgIHdpZHRoOiAxODRweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgLnByZXZpZXctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxuICAucHJldmlldy1zdWIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfc3lzdGVtNCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiUkVRVUVTVF9GSUxFIiwiUkVTVUxUX0ZJTEUiLCJISVNUT1JZX0ZJTEUiLCJCUklER0VfU1RBVEVfRklMRSIsIlFVSUNLQVBQX0RFQlVHX0ZJTEUiLCJQUkVWSUVXX1NUQVRFX0ZJTEUiLCJzaG90U2VxIiwiRGF0ZSIsIm5vdyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByaXZhdGUiLCJub3dUaW1lIiwidGltZXIiLCJwb2xsVGltZXIiLCJzdGF0dXNUZXh0IiwiaXNCdXN5IiwiaGFzUHJldmlldyIsInByZXZpZXdQYXRoIiwicHJldmlld0luZGV4IiwicHJldmlld1RpbWUiLCJwcmV2aWV3TW9kZSIsImhhc1Nob3RzIiwic2hvdEl0ZW1zIiwicXVpY2tBcHBEZWJ1Z0VuYWJsZWQiLCJzYW1wbGVQYXRoIiwic2FtcGxlTGFiZWwiLCJwcmV2aWV3SW1hZ2VTdHlsZSIsInNjcmVlbldpZHRoIiwic2NyZWVuSGVpZ2h0Iiwib25Jbml0Iiwic2VsZiIsInVwZGF0ZVRpbWUiLCIkdCIsInNldEludGVydmFsIiwicmVzb2x2ZVNhbXBsZVBhdGgiLCJsb2FkUHJldmlld1N0YXRlIiwib25TaG93IiwicmVmcmVzaEFsbCIsImxvYWRRdWlja0FwcERlYnVnTW9kZSIsIm9uSGlkZSIsImNsZWFySW50ZXJ2YWwiLCJvbkRlc3Ryb3kiLCJkIiwiZ2V0SG91cnMiLCJzbGljZSIsImdldE1pbnV0ZXMiLCJsb2FkU3RhdGUiLCJsb2FkSGlzdG9yeSIsImZpbGUiLCJyZWFkVGV4dCIsInVyaSIsInN1Y2Nlc3MiLCJkYXRhIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJtb2RlIiwiYXBwbHlQcmV2aWV3TW9kZSIsImZhaWwiLCJ3cml0ZVByZXZpZXdTdGF0ZSIsIndyaXRlVGV4dCIsInN0cmluZ2lmeSIsImFwcGVuZCIsImRldmljZSIsImdldEluZm8iLCJyZXQiLCJ3aWR0aCIsImhlaWdodCIsInVwZGF0ZVByZXZpZXdJbWFnZVN0eWxlIiwicmF0aW8iLCJNYXRoIiwicm91bmQiLCJlbmFibGVkIiwicmVzZXRQcmV2aWV3Iiwic3RhdGUiLCJidXN5IiwibWVzc2FnZSIsImxvYWRSZXN1bHRTdGF0ZSIsInJlc3VsdCIsInN0YXR1cyIsIm5vcm1hbGl6ZVNob3RzIiwiaXRlbXMiLCJub3JtYWxpemVkIiwiQXJyYXkiLCJpIiwibGVuZ3RoIiwiaXRlbSIsInB1c2giLCJpZCIsInR5cGUiLCJsYWJlbCIsImluZGV4IiwidGltZVRleHQiLCJjYXB0dXJlZEF0IiwibGlzdCIsInJlYWxJdGVtcyIsImJ1aWxkU2hvdEl0ZW1zIiwic2VsZWN0ZWQiLCJsYXRlc3QiLCJyZXF1ZXN0U2NyZWVuc2hvdCIsInByb21wdCIsInNob3dUb2FzdCIsInNlcSIsInRpbWVzdGFtcCIsImZsb29yIiwic2VsZWN0U2hvdCIsImZpbGVQYXRoIiwib25TaG90SXRlbUNsaWNrIiwiZ29CYWNrIiwicm91dGVyIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBT0MsR0FBRzs0QkFDWCxJQUFJLEFBQWtCLFlBQWxCLE9BQU9DLFFBQXFCLE9BQU9BO3dCQUN4QztvQkFDRDs7O29CQ1BBSixvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkN5RDNCLElBQUFLLFVBQUFDLHVCQUFBQyxlQUFBO29CQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO29CQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO29CQUNBLElBQUFHLFdBQUFKLHVCQUFBQyxlQUFBO29CQUFtQyxTQUFBRCx1QkFBQUgsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBUSxVQUFBLEdBQUFSLElBQUE7NEJBQUFTLFNBQUFUO3dCQUFBO29CQUFBO29CQUVuQyxJQUFJVSxlQUFlO29CQUNuQixJQUFJQyxjQUFjO29CQUNsQixJQUFJQyxlQUFlO29CQUNuQixJQUFJQyxvQkFBb0I7b0JBQ3hCLElBQUlDLHNCQUFzQjtvQkFDMUIsSUFBSUMscUJBQXFCO29CQUN6QixJQUFJQyxVQUFVQyxLQUFLQyxHQUFHO29CQUFFLElBQUFDLFdBQUFDLFFBQUFYLE9BQUEsR0FFVDt3QkFDYlksU0FBUzs0QkFDUEMsU0FBUzs0QkFDVEMsT0FBTzs0QkFDUEMsV0FBVzs0QkFDWEMsWUFBWTs0QkFDWkMsUUFBUTs0QkFDUkMsWUFBWTs0QkFDWkMsYUFBYTs0QkFDYkMsY0FBYzs0QkFDZEMsYUFBYTs0QkFDYkMsYUFBYTs0QkFDYkMsVUFBVTs0QkFDVkMsV0FBVyxFQUFFOzRCQUNiQyxzQkFBc0I7NEJBQ3RCQyxZQUFZOzRCQUNaQyxhQUFhOzRCQUNiQyxtQkFBbUI7NEJBQ25CQyxhQUFhOzRCQUNiQyxjQUFjO3dCQUNoQjt3QkFFQUM7NEJBQ0UsSUFBSUMsT0FBTyxJQUFJOzRCQUNmQSxLQUFLQyxVQUFVOzRCQUNmRCxLQUFLaEIsVUFBVSxHQUFHZ0IsS0FBS0UsRUFBRSxDQUFDOzRCQUMxQkYsS0FBS2xCLEtBQUssR0FBR3FCLFlBQVk7Z0NBQWFILEtBQUtDLFVBQVU7NEJBQUcsR0FBRzs0QkFDM0RELEtBQUtJLGlCQUFpQjs0QkFDdEJKLEtBQUtLLGdCQUFnQjt3QkFDdkI7d0JBRUFDOzRCQUNFLElBQUlOLE9BQU8sSUFBSTs0QkFDZkEsS0FBS08sVUFBVTs0QkFDZlAsS0FBS1EscUJBQXFCOzRCQUMxQixJQUFJLENBQUNSLEtBQUtqQixTQUFTLEVBQ2pCaUIsS0FBS2pCLFNBQVMsR0FBR29CLFlBQVk7Z0NBQzNCSCxLQUFLTyxVQUFVO2dDQUNmUCxLQUFLUSxxQkFBcUI7NEJBQzVCLEdBQUc7d0JBRVA7d0JBRUFDOzRCQUNFLElBQUksSUFBSSxDQUFDMUIsU0FBUyxFQUFFO2dDQUNsQjJCLGNBQWMsSUFBSSxDQUFDM0IsU0FBUztnQ0FDNUIsSUFBSSxDQUFDQSxTQUFTLEdBQUc7NEJBQ25CO3dCQUNGO3dCQUVBNEI7NEJBQ0VELGNBQWMsSUFBSSxDQUFDNUIsS0FBSzs0QkFDeEIsSUFBSSxJQUFJLENBQUNDLFNBQVMsRUFDaEIyQixjQUFjLElBQUksQ0FBQzNCLFNBQVM7d0JBRWhDO3dCQUVBa0I7NEJBQ0UsSUFBSVcsSUFBSSxJQUFJcEM7NEJBQ1osSUFBSSxDQUFDSyxPQUFPLEdBQUcsQUFBQyxPQUFNK0IsRUFBRUMsUUFBUSxFQUFDLEVBQUdDLEtBQUssQ0FBQyxNQUFNLE1BQU0sQUFBQyxPQUFNRixFQUFFRyxVQUFVLEVBQUMsRUFBR0QsS0FBSyxDQUFDO3dCQUNyRjt3QkFFQVA7NEJBQ0UsSUFBSSxDQUFDUyxTQUFTOzRCQUNkLElBQUksQ0FBQ0MsV0FBVzt3QkFDbEI7d0JBRUFaOzRCQUNFLElBQUlMLE9BQU8sSUFBSTs0QkFDZmtCLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUNaQyxLQUFLOUM7Z0NBQ0wrQyxTQUFTLFNBQVNDLElBQUk7b0NBQ3BCLElBQUk7d0NBQ0YsSUFBSUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSCxLQUFLSSxJQUFJO3dDQUMvQjFCLEtBQUtWLFdBQVcsR0FBR2lDLEFBQWMsYUFBZEEsS0FBS0ksSUFBSSxHQUFnQixXQUFXO29DQUN6RCxFQUFFLE9BQU9wRSxHQUFHO3dDQUNWeUMsS0FBS1YsV0FBVyxHQUFHO29DQUNyQjtvQ0FDQVUsS0FBSzRCLGdCQUFnQjtvQ0FDckI1QixLQUFLaUIsV0FBVztnQ0FDbEI7Z0NBQ0FZLE1BQU07b0NBQ0o3QixLQUFLVixXQUFXLEdBQUc7b0NBQ25CVSxLQUFLNEIsZ0JBQWdCO29DQUNyQjVCLEtBQUtpQixXQUFXO2dDQUNsQjs0QkFDRjt3QkFDRjt3QkFFQWEsbUJBQWtCSCxJQUFJOzRCQUNwQlQsU0FBQUEsT0FBSSxDQUFDYSxTQUFTLENBQUM7Z0NBQ2JYLEtBQUs5QztnQ0FDTG9ELE1BQU1GLEtBQUtRLFNBQVMsQ0FBQztvQ0FBRUwsTUFBTUE7Z0NBQUs7Z0NBQ2xDTSxRQUFROzRCQUNWO3dCQUNGO3dCQUVBTDs0QkFDRSxJQUFJLEFBQXFCLGFBQXJCLElBQUksQ0FBQ3RDLFdBQVcsSUFBaUIsQ0FBQyxJQUFJLENBQUNJLFVBQVUsRUFDbkQ7NEJBRUYsSUFBSSxDQUFDUCxXQUFXLEdBQUcsSUFBSSxDQUFDTyxVQUFVOzRCQUNsQyxJQUFJLENBQUNOLFlBQVksR0FBRzs0QkFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDYSxFQUFFLENBQUMsaUNBQWlDLElBQUksQ0FBQ1AsV0FBVzs0QkFDNUUsSUFBSSxDQUFDVCxVQUFVLEdBQUc7d0JBQ3BCO3dCQUVBa0I7NEJBQ0UsSUFBSUosT0FBTyxJQUFJOzRCQUNma0MsU0FBQUEsT0FBTSxDQUFDQyxPQUFPLENBQUM7Z0NBQ2JkLFNBQVMsU0FBU2UsR0FBRztvQ0FDbkIsSUFBSUMsUUFBUUQsSUFBSXZDLFdBQVcsSUFBSTtvQ0FDL0IsSUFBSXlDLFNBQVNGLElBQUl0QyxZQUFZLElBQUk7b0NBQ2pDRSxLQUFLSCxXQUFXLEdBQUd3QztvQ0FDbkJyQyxLQUFLRixZQUFZLEdBQUd3QztvQ0FDcEIsSUFBSUQsU0FBUyxLQUFLO3dDQUNoQnJDLEtBQUtOLFVBQVUsR0FBRzt3Q0FDbEJNLEtBQUtMLFdBQVcsR0FBRztvQ0FDckIsT0FBTyxJQUFJMEMsU0FBUyxLQUFLO3dDQUN2QnJDLEtBQUtOLFVBQVUsR0FBRzt3Q0FDbEJNLEtBQUtMLFdBQVcsR0FBRztvQ0FDckIsT0FBTzt3Q0FDTEssS0FBS04sVUFBVSxHQUFHO3dDQUNsQk0sS0FBS0wsV0FBVyxHQUFHO29DQUNyQjtvQ0FDQUssS0FBS3VDLHVCQUF1QjtnQ0FDOUI7Z0NBQ0FWLE1BQU07b0NBQ0o3QixLQUFLSCxXQUFXLEdBQUc7b0NBQ25CRyxLQUFLRixZQUFZLEdBQUc7b0NBQ3BCRSxLQUFLTixVQUFVLEdBQUc7b0NBQ2xCTSxLQUFLTCxXQUFXLEdBQUc7b0NBQ25CSyxLQUFLdUMsdUJBQXVCO2dDQUM5Qjs0QkFDRjt3QkFDRjt3QkFFQUE7NEJBQ0UsSUFBSUYsUUFBUTs0QkFDWixJQUFJLElBQUksQ0FBQ3hDLFdBQVcsSUFBSSxLQUN0QndDLFFBQVE7aUNBQ0gsSUFBSSxJQUFJLENBQUN4QyxXQUFXLElBQUksS0FDN0J3QyxRQUFROzRCQUVWLElBQUlHLFFBQVEsSUFBSSxDQUFDMUMsWUFBWSxHQUFHLElBQUksQ0FBQ0QsV0FBVzs0QkFDaEQsSUFBSXlDLFNBQVNHLEtBQUtDLEtBQUssQ0FBQ0wsUUFBUUc7NEJBQ2hDLElBQUksQ0FBQzVDLGlCQUFpQixHQUFHLGFBQWEwQyxTQUFTO3dCQUNqRDt3QkFFQTlCOzRCQUNFLElBQUlSLE9BQU8sSUFBSTs0QkFDZmtCLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUNaQyxLQUFLL0M7Z0NBQ0xnRCxTQUFTLFNBQVNDLElBQUk7b0NBQ3BCLElBQUk7d0NBQ0YsSUFBSUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSCxLQUFLSSxJQUFJO3dDQUMvQjFCLEtBQUtQLG9CQUFvQixHQUFHOEIsQUFBaUIsU0FBakJBLEtBQUtvQixPQUFPO29DQUMxQyxFQUFFLE9BQU9wRixHQUFHO3dDQUNWeUMsS0FBS1Asb0JBQW9CLEdBQUc7b0NBQzlCO29DQUNBLElBQUksQ0FBQ08sS0FBS1Asb0JBQW9CLElBQUlPLEFBQXFCLGFBQXJCQSxLQUFLVixXQUFXLEVBQ2hEVSxLQUFLNEMsWUFBWTtvQ0FFbkI1QyxLQUFLaUIsV0FBVztnQ0FDbEI7Z0NBQ0FZLE1BQU07b0NBQ0o3QixLQUFLUCxvQkFBb0IsR0FBRztvQ0FDNUIsSUFBSU8sQUFBcUIsYUFBckJBLEtBQUtWLFdBQVcsRUFDbEJVLEtBQUs0QyxZQUFZO29DQUVuQjVDLEtBQUtpQixXQUFXO2dDQUNsQjs0QkFDRjt3QkFDRjt3QkFFQUQ7NEJBQ0UsSUFBSWhCLE9BQU8sSUFBSTs0QkFDZmtCLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUNaQyxLQUFLaEQ7Z0NBQ0xpRCxTQUFTLFNBQVNDLElBQUk7b0NBQ3BCLElBQUk7d0NBQ0YsSUFBSXVCLFFBQVFyQixLQUFLQyxLQUFLLENBQUNILEtBQUtJLElBQUk7d0NBQ2hDMUIsS0FBS2YsTUFBTSxHQUFHNEQsQUFBZSxTQUFmQSxNQUFNQyxJQUFJO3dDQUN4QixJQUFJOUMsS0FBS2YsTUFBTSxFQUFFOzRDQUNmLElBQUk0RCxBQUFlLGlCQUFmQSxNQUFNbEIsSUFBSSxJQUFxQmtCLE1BQU1FLE9BQU8sRUFDOUMvQyxLQUFLaEIsVUFBVSxHQUFHNkQsTUFBTUUsT0FBTztpREFFL0IvQyxLQUFLaEIsVUFBVSxHQUFHZ0IsS0FBS0UsRUFBRSxDQUFDOzRDQUU1Qjt3Q0FDRjt3Q0FDQUYsS0FBS2dELGVBQWU7b0NBQ3RCLEVBQUUsT0FBT3pGLEdBQUc7d0NBQ1Z5QyxLQUFLZixNQUFNLEdBQUc7d0NBQ2RlLEtBQUtnRCxlQUFlO29DQUN0QjtnQ0FDRjtnQ0FDQW5CLE1BQU07b0NBQ0o3QixLQUFLZixNQUFNLEdBQUc7b0NBQ2RlLEtBQUtnRCxlQUFlO2dDQUN0Qjs0QkFDRjt3QkFDRjt3QkFFQUE7NEJBQ0UsSUFBSWhELE9BQU8sSUFBSTs0QkFDZmtCLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUNaQyxLQUFLbEQ7Z0NBQ0xtRCxTQUFTLFNBQVNDLElBQUk7b0NBQ3BCLElBQUk7d0NBQ0YsSUFBSTJCLFNBQVN6QixLQUFLQyxLQUFLLENBQUNILEtBQUtJLElBQUk7d0NBQ2pDLElBQUl1QixBQUFrQixXQUFsQkEsT0FBT0MsTUFBTSxFQUNmbEQsS0FBS2hCLFVBQVUsR0FBR2dCLEtBQUtFLEVBQUUsQ0FBQzs2Q0FDckIsSUFBSStDLEFBQWtCLFlBQWxCQSxPQUFPQyxNQUFNLEVBQ3RCbEQsS0FBS2hCLFVBQVUsR0FBR2lFLE9BQU9GLE9BQU8sSUFBSS9DLEtBQUtFLEVBQUUsQ0FBQzs2Q0FDdkMsSUFBSStDLEFBQWtCLHdCQUFsQkEsT0FBT0MsTUFBTSxJQUE0QkQsQUFBa0IsZ0JBQWxCQSxPQUFPQyxNQUFNLEVBQy9EbEQsS0FBS2hCLFVBQVUsR0FBR2lFLE9BQU9GLE9BQU8sSUFBSS9DLEtBQUtFLEVBQUUsQ0FBQzs2Q0FFNUNGLEtBQUtoQixVQUFVLEdBQUdnQixLQUFLRSxFQUFFLENBQUM7b0NBRTlCLEVBQUUsT0FBTzNDLEdBQUc7d0NBQ1Z5QyxLQUFLaEIsVUFBVSxHQUFHZ0IsS0FBS0UsRUFBRSxDQUFDO29DQUM1QjtnQ0FDRjtnQ0FDQTJCLE1BQU07b0NBQ0o3QixLQUFLaEIsVUFBVSxHQUFHZ0IsS0FBS0UsRUFBRSxDQUFDO2dDQUM1Qjs0QkFDRjt3QkFDRjt3QkFFQWlELGdCQUFlQyxLQUFLOzRCQUNsQixJQUFJQyxhQUFhLEVBQUU7NEJBQ25CLElBQUksQ0FBRUQsQ0FBQUEsaUJBQWlCRSxLQUFJLEdBQUksT0FBT0Q7NEJBQ3RDLElBQUssSUFBSUUsSUFBSSxHQUFHQSxJQUFJSCxNQUFNSSxNQUFNLEVBQUVELElBQUs7Z0NBQ3JDLElBQUlFLE9BQU9MLEtBQUssQ0FBQ0csRUFBRTtnQ0FDbkIsSUFBSSxBQUFDRSxRQUFTQSxLQUFLdkMsSUFBSSxFQUN2Qm1DLFdBQVdLLElBQUksQ0FBQztvQ0FDZEMsSUFBSSxVQUFVSjtvQ0FDZEssTUFBTTtvQ0FDTkMsT0FBTyxNQUFPSixDQUFBQSxLQUFLSyxLQUFLLElBQUtQLElBQUk7b0NBQ2pDTyxPQUFPTCxLQUFLSyxLQUFLLElBQUtQLElBQUk7b0NBQzFCckMsTUFBTXVDLEtBQUt2QyxJQUFJO29DQUNmNkMsVUFBVU4sS0FBS08sVUFBVSxJQUFJLElBQUksQ0FBQzlELEVBQUUsQ0FBQztnQ0FDdkM7NEJBQ0Y7NEJBQ0EsT0FBT21EO3dCQUNUO3dCQUVBcEM7NEJBQ0UsSUFBSWpCLE9BQU8sSUFBSTs0QkFDZmtCLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO2dDQUNaQyxLQUFLakQ7Z0NBQ0xrRCxTQUFTLFNBQVNDLElBQUk7b0NBQ3BCLElBQUkyQyxPQUFPLEVBQUU7b0NBQ2IsSUFBSTt3Q0FDRkEsT0FBT3pDLEtBQUtDLEtBQUssQ0FBQ0gsS0FBS0ksSUFBSTt3Q0FDM0IsSUFBSXVDLFFBQVFBLEtBQUtiLEtBQUssWUFBWUUsT0FDaENXLE9BQU9BLEtBQUtiLEtBQUs7b0NBRXJCLEVBQUUsT0FBTzdGLEdBQUcsQ0FBQztvQ0FDYixJQUFJMkcsWUFBWWxFLEtBQUttRCxjQUFjLENBQUNjO29DQUNwQ2pFLEtBQUtSLFNBQVMsR0FBR1EsS0FBS21FLGNBQWMsQ0FBQ0Q7b0NBQ3JDbEUsS0FBS1QsUUFBUSxHQUFHUyxLQUFLUixTQUFTLENBQUNnRSxNQUFNLEdBQUc7b0NBQ3hDLElBQUl4RCxBQUFxQixhQUFyQkEsS0FBS1YsV0FBVyxFQUFlLFlBQ2pDVSxLQUFLNEIsZ0JBQWdCO29DQUd2QixJQUFJc0MsVUFBVVYsTUFBTSxHQUFHLEdBQUc7d0NBQ3hCLElBQUlZLFdBQVc7d0NBQ2YsSUFBSyxJQUFJYixJQUFJLEdBQUdBLElBQUlXLFVBQVVWLE1BQU0sRUFBRUQsSUFDcEMsSUFBSVcsU0FBUyxDQUFDWCxFQUFFLENBQUNyQyxJQUFJLEtBQUtsQixLQUFLYixXQUFXLEVBQUU7NENBQzFDaUYsV0FBV0YsU0FBUyxDQUFDWCxFQUFFOzRDQUN2Qjt3Q0FDRjt3Q0FFRixJQUFJYyxTQUFTRCxZQUFZRixTQUFTLENBQUMsRUFBRTt3Q0FDckNsRSxLQUFLYixXQUFXLEdBQUdrRixPQUFPbkQsSUFBSTt3Q0FDOUJsQixLQUFLWixZQUFZLEdBQUdpRixPQUFPUCxLQUFLO3dDQUNoQzlELEtBQUtYLFdBQVcsR0FBR2dGLE9BQU9OLFFBQVE7d0NBQ2xDL0QsS0FBS2QsVUFBVSxHQUFHO29DQUNwQixPQUFPO3dDQUNMYyxLQUFLYixXQUFXLEdBQUc7d0NBQ25CYSxLQUFLWixZQUFZLEdBQUc7d0NBQ3BCWSxLQUFLWCxXQUFXLEdBQUc7d0NBQ25CVyxLQUFLZCxVQUFVLEdBQUc7b0NBQ3BCO2dDQUNGO2dDQUNBMkMsTUFBTTtvQ0FDSjdCLEtBQUtSLFNBQVMsR0FBR1EsS0FBS21FLGNBQWMsQ0FBQyxFQUFFO29DQUN2Q25FLEtBQUtULFFBQVEsR0FBR1MsS0FBS1IsU0FBUyxDQUFDZ0UsTUFBTSxHQUFHO29DQUN4QyxJQUFJeEQsQUFBcUIsYUFBckJBLEtBQUtWLFdBQVcsRUFBZSxZQUNqQ1UsS0FBSzRCLGdCQUFnQjtvQ0FHdkI1QixLQUFLYixXQUFXLEdBQUc7b0NBQ25CYSxLQUFLWixZQUFZLEdBQUc7b0NBQ3BCWSxLQUFLWCxXQUFXLEdBQUc7b0NBQ25CVyxLQUFLZCxVQUFVLEdBQUc7Z0NBQ3BCOzRCQUNGO3dCQUNGO3dCQUVBaUYsZ0JBQWVELFNBQVM7NEJBQ3RCLE9BQU9BLFVBQVVwRCxLQUFLLENBQUM7d0JBQ3pCO3dCQUVBd0Q7NEJBQ0UsSUFBSXRFLE9BQU8sSUFBSTs0QkFDZixJQUFJQSxLQUFLZixNQUFNLEVBQUUsWUFDZnNGLFNBQUFBLE9BQU0sQ0FBQ0MsU0FBUyxDQUFDO2dDQUFFekIsU0FBUy9DLEtBQUtoQixVQUFVLElBQUlnQixLQUFLRSxFQUFFLENBQUM7NEJBQXVCOzRCQUdoRjNCOzRCQUNBMkMsU0FBQUEsT0FBSSxDQUFDYSxTQUFTLENBQUM7Z0NBQ2JYLEtBQUtuRDtnQ0FDTHlELE1BQU1GLEtBQUtRLFNBQVMsQ0FBQztvQ0FDbkJ5QyxLQUFLbEc7b0NBQ0xxRixNQUFNO29DQUNOYyxXQUFXakMsS0FBS2tDLEtBQUssQ0FBQ25HLEtBQUtDLEdBQUcsS0FBSztnQ0FDckM7Z0NBQ0F3RCxRQUFRO2dDQUNSWixTQUFTO29DQUNQckIsS0FBS2YsTUFBTSxHQUFHO29DQUNkZSxLQUFLaEIsVUFBVSxHQUFHZ0IsS0FBS0UsRUFBRSxDQUFDO2dDQUM1QjtnQ0FDQTJCLE1BQU07b0NBQ0o3QixLQUFLaEIsVUFBVSxHQUFHZ0IsS0FBS0UsRUFBRSxDQUFDO29DQUMxQnFFLFNBQUFBLE9BQU0sQ0FBQ0MsU0FBUyxDQUFDO3dDQUFFekIsU0FBUy9DLEtBQUtFLEVBQUUsQ0FBQztvQ0FBb0I7Z0NBQzFEOzRCQUNGO3dCQUNGO3dCQUVBMEUsWUFBV0MsUUFBUSxFQUFFZixLQUFLLEVBQUVDLFFBQVE7NEJBQ2xDLElBQUksQ0FBQ3pFLFdBQVcsR0FBRzs0QkFDbkIsSUFBSSxDQUFDd0MsaUJBQWlCLENBQUM7NEJBQ3ZCLElBQUksQ0FBQzNDLFdBQVcsR0FBRzBGOzRCQUNuQixJQUFJLENBQUN6RixZQUFZLEdBQUcwRTs0QkFDcEIsSUFBSSxDQUFDekUsV0FBVyxHQUFHMEU7NEJBQ25CLElBQUksQ0FBQzdFLFVBQVUsR0FBRyxDQUFDLENBQUMyRjt3QkFDdEI7d0JBRUFDLGlCQUFnQnJCLElBQUk7NEJBQ2xCLElBQUksQ0FBQ0EsTUFBTTs0QkFDWCxJQUFJLENBQUNtQixVQUFVLENBQUNuQixLQUFLdkMsSUFBSSxFQUFFdUMsS0FBS0ssS0FBSyxFQUFFTCxLQUFLTSxRQUFRO3dCQUN0RDt3QkFFQW5COzRCQUNFLElBQUksQ0FBQ3RELFdBQVcsR0FBRzs0QkFDbkIsSUFBSSxJQUFJLENBQUNFLFNBQVMsQ0FBQ2dFLE1BQU0sR0FBRyxHQUFHO2dDQUM3QixJQUFJYSxTQUFTLElBQUksQ0FBQzdFLFNBQVMsQ0FBQyxFQUFFO2dDQUM5QixJQUFJLENBQUNMLFdBQVcsR0FBR2tGLE9BQU9uRCxJQUFJO2dDQUM5QixJQUFJLENBQUM5QixZQUFZLEdBQUdpRixPQUFPUCxLQUFLO2dDQUNoQyxJQUFJLENBQUN6RSxXQUFXLEdBQUdnRixPQUFPTixRQUFRO2dDQUNsQyxJQUFJLENBQUM3RSxVQUFVLEdBQUc7NEJBQ3BCLE9BQU87Z0NBQ0wsSUFBSSxDQUFDQyxXQUFXLEdBQUc7Z0NBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHO2dDQUNwQixJQUFJLENBQUNDLFdBQVcsR0FBRztnQ0FDbkIsSUFBSSxDQUFDSCxVQUFVLEdBQUc7NEJBQ3BCO3dCQUNGO3dCQUVBNkY7NEJBQ0VDLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSTt3QkFDYjtvQkFDRiJ9