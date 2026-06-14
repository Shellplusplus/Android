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
                var __webpack_modules__ = {
                    "./src/components/InputMethod/InputMethod.ux" (module, __unused_rspack_exports, __webpack_require__) {
                        var $app_style$ = [
                            [
                                [
                                    [
                                        0,
                                        "page"
                                    ]
                                ],
                                {
                                    width: "100%",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item"
                                    ]
                                ],
                                {
                                    height: "52px",
                                    flex: 1
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn0"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "28px",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: 0,
                                    height: "52px",
                                    width: "52px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn02"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    backgroundColor: "rgba(38, 38, 38, 0)",
                                    borderRadius: "0px",
                                    fontSize: "32px",
                                    textAlign: "center",
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnfull"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px",
                                    marginRight: "4px",
                                    height: "52px",
                                    width: "40px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9"
                                    ]
                                ],
                                {
                                    color: "#ffffff",
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    backgroundColor: "#262626",
                                    borderRadius: "999px",
                                    marginRight: "4px",
                                    width: "94px",
                                    height: "60px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "caltext"
                                    ]
                                ],
                                {
                                    textAlign: "left",
                                    lineHeight: "38px",
                                    lines: 1,
                                    textOverflow: "ellipsis",
                                    color: "#0d84ff",
                                    height: "45px",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    paddingLeft: "8px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list3"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    top: "38px",
                                    left: "78px",
                                    width: "324px",
                                    height: "160px",
                                    flexDirection: "column",
                                    backgroundColor: "#262626",
                                    borderRadius: "12px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item3"
                                    ]
                                ],
                                {
                                    width: "324px",
                                    height: "52px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn67"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "4px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard67"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        1,
                                        "keyboard66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "0px",
                                    top: "82px",
                                    width: "100%",
                                    height: "170px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list67"
                                    ]
                                ],
                                {
                                    top: "0px",
                                    width: "96.4%",
                                    height: "170px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "0px",
                                    paddingRight: "10px",
                                    paddingBottom: "0px",
                                    paddingLeft: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item67"
                                    ]
                                ],
                                {
                                    height: "50px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtn66"
                                    ]
                                ],
                                {
                                    color: "rgb(255, 255, 255)",
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    backgroundColor: "rgb(38, 38, 38)",
                                    marginRight: "3px",
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "30px",
                                    textAlign: "center",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "list66"
                                    ]
                                ],
                                {
                                    position: "absolute",
                                    left: "3px",
                                    top: "0px",
                                    width: "186px",
                                    height: "186px",
                                    borderRadius: "30px",
                                    backgroundColor: "#262626",
                                    borderTopColor: "rgba(255, 255, 255, 0.06)",
                                    borderRightColor: "rgba(255, 255, 255, 0.06)",
                                    borderBottomColor: "rgba(255, 255, 255, 0.06)",
                                    borderLeftColor: "rgba(255, 255, 255, 0.06)",
                                    borderStyle: "solid",
                                    borderTopWidth: "3px",
                                    borderRightWidth: "3px",
                                    borderBottomWidth: "3px",
                                    borderLeftWidth: "3px",
                                    paddingTop: "10px",
                                    paddingRight: "10px",
                                    paddingBottom: "10px",
                                    paddingLeft: "10px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "item66"
                                    ]
                                ],
                                {
                                    height: "42px"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "waiting-keys"
                                    ]
                                ],
                                {
                                    width: "36px",
                                    height: "40px",
                                    textAlign: "center"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "keyboard-rows-rect-t9"
                                    ]
                                ],
                                {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    flexShrink: 0,
                                    height: "55px",
                                    width: "100%"
                                }
                            ],
                            [
                                [
                                    [
                                        0,
                                        "calbtnt9-rect"
                                    ]
                                ],
                                {
                                    flex: 1,
                                    height: "55px",
                                    marginTop: "0",
                                    marginRight: "3px",
                                    marginBottom: "0",
                                    marginLeft: "3px",
                                    width: "unset"
                                }
                            ],
                            [
                                {
                                    condition: "screen and (min-width:230) and (max-width:235) and (shape:circle)"
                                },
                                [
                                    [
                                        1,
                                        "full-keyboard"
                                    ]
                                ],
                                {
                                    transform: "{\"scaleX\":0.96,\"scaleY\":0.96}",
                                    transformOrigin: "0 321px",
                                    overflow: "visible"
                                }
                            ]
                        ];
                        var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                            "use strict";
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.default = void 0;
                            var _system = _interopRequireDefault($app_require$1("@app-module/system.vibrator"));
                            var _system2 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                            var _dicUtil = __webpack_require__("./src/components/InputMethod/assets/dicUtil.js");
                            function _interopRequireDefault(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function doSearchDic(word, lang, cb) {
                                if (!word) return void cb([]);
                                const result = _dicUtil.SimpleInputMethod.getHanzi(word, lang);
                                cb(Array.isArray(result) && result[0] ? result[0] : []);
                            }
                            function deleteLast(t) {
                                if (t) return t.substr(0, t.length - 1);
                                return "";
                            }
                            var _default = exports.default = {
                                props: {
                                    hide: {
                                        default: true
                                    },
                                    keyboardtype: {
                                        default: "QWERTY"
                                    },
                                    maxlength: {
                                        default: 5
                                    },
                                    vibratemode: {
                                        default: ""
                                    },
                                    screentype: {
                                        default: "circle"
                                    }
                                },
                                data: {
                                    cval: "",
                                    resultList: [],
                                    resultList2: [],
                                    waitingList: [],
                                    waitingIndex: -1,
                                    lastWaitingStr: "",
                                    downFlag: "",
                                    lang: "en",
                                    numFlag: false,
                                    numFlag_jp: false,
                                    upperFlag: false,
                                    cvalList: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4
                                    ],
                                    percent67: 52,
                                    percent66: 0,
                                    screenWidth: 336,
                                    keys: {
                                        full: [
                                            [
                                                "Q",
                                                "W",
                                                "E",
                                                "R",
                                                "T",
                                                "Y",
                                                "U",
                                                "I",
                                                "O",
                                                "P"
                                            ],
                                            [
                                                "A",
                                                "S",
                                                "D",
                                                "F",
                                                "G",
                                                "H",
                                                "J",
                                                "K",
                                                "L"
                                            ],
                                            [
                                                "Z",
                                                "X",
                                                "C",
                                                "V",
                                                "B",
                                                "N",
                                                "M"
                                            ]
                                        ],
                                        sign: [
                                            [
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9",
                                                "0"
                                            ],
                                            [
                                                "~",
                                                "!",
                                                "@",
                                                "#",
                                                "%",
                                                "“",
                                                "”",
                                                "*",
                                                "?",
                                                "/"
                                            ],
                                            [
                                                "(",
                                                ")",
                                                "-",
                                                "_",
                                                ":",
                                                ";",
                                                "，",
                                                "。",
                                                "."
                                            ]
                                        ],
                                        sign_jp: [
                                            [
                                                "1",
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9",
                                                "0"
                                            ],
                                            [
                                                "~",
                                                "•",
                                                "@",
                                                "#",
                                                "%",
                                                "「",
                                                "」",
                                                "*",
                                                "?",
                                                "/"
                                            ],
                                            [
                                                "(",
                                                ")",
                                                "-",
                                                "…",
                                                ":",
                                                ";",
                                                "、",
                                                "。",
                                                "!"
                                            ]
                                        ],
                                        sign62: [
                                            [
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9"
                                            ],
                                            [
                                                "!",
                                                "@",
                                                "#",
                                                "%",
                                                "“",
                                                "”",
                                                "*"
                                            ],
                                            [
                                                ")",
                                                "-",
                                                "_",
                                                ":",
                                                ";"
                                            ]
                                        ],
                                        sign62_jp: [
                                            [
                                                "2",
                                                "3",
                                                "4",
                                                "5",
                                                "6",
                                                "7",
                                                "8",
                                                "9"
                                            ],
                                            [
                                                "•",
                                                "@",
                                                "#",
                                                "%",
                                                "「",
                                                "」",
                                                "*"
                                            ],
                                            [
                                                ")",
                                                "-",
                                                "…",
                                                ":",
                                                ";"
                                            ]
                                        ],
                                        full62: [
                                            [
                                                "W",
                                                "E",
                                                "R",
                                                "T",
                                                "Y",
                                                "U",
                                                "I",
                                                "O"
                                            ],
                                            [
                                                "S",
                                                "D",
                                                "F",
                                                "G",
                                                "H",
                                                "J",
                                                "K"
                                            ],
                                            [
                                                "X",
                                                "C",
                                                "V",
                                                "B",
                                                "N"
                                            ]
                                        ],
                                        t9: [
                                            [
                                                "abc",
                                                "def"
                                            ],
                                            [
                                                "ghi",
                                                "jkl",
                                                "mno"
                                            ],
                                            [
                                                "pqrs",
                                                "tuv",
                                                "wxyz"
                                            ]
                                        ]
                                    }
                                },
                                onInit () {
                                    if (this.maxlength) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < this.maxlength; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                    if ("rect" === this.screentype || "pill-shaped" === this.screentype) this.adjustScreenWidth();
                                    this.$watch("hide", "watchHidePropsChange");
                                    this.$watch("maxlength", "watchMaxLengthPropsChange");
                                    this.$watch("keyboardtype", "watchKeyboardTypePropsChange");
                                },
                                addAllTxt (txt) {
                                    this.$emit("complete", {
                                        content: txt
                                    });
                                },
                                onRsSelect (txt) {
                                    this.onVibrate();
                                    this.cval = "";
                                    this.addAllTxt(txt);
                                    this.clearWaiting();
                                    this.resetReslutList();
                                    this.downFlag = "";
                                },
                                onBtnClick (sign) {
                                    this.onVibrate();
                                    switch(sign){
                                        case "AC":
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "lang":
                                            this.$emit("closeKeyboard", {});
                                            break;
                                        case "D":
                                            if (this.waitingIndex >= 0) {
                                                this.clearWaiting();
                                                this.resetReslutList();
                                            } else if (this.cval.length > 0) {
                                                this.cval = deleteLast(this.cval);
                                                this.resetReslutList();
                                            } else this.$emit("delete", {});
                                            break;
                                        case "space":
                                            this.addAllTxt(" ");
                                            break;
                                        case "down":
                                            this.downFlag = "down" === this.downFlag ? "" : "down";
                                            break;
                                        case "select":
                                            if (this.lastWaitingStr != sign && this.lastWaitingStr) {
                                                if ("cn" === this.lang || 'jp' === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
                                                else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                this.clearWaiting();
                                                this.resetReslutList();
                                            }
                                            break;
                                        case "switchNum":
                                            this.numFlag = true;
                                            this.numFlag_jp = false;
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "switchNum_jp":
                                            this.numFlag = true;
                                            this.numFlag_jp = true;
                                            this.cval = "";
                                            this.clearWaiting();
                                            this.resetReslutList();
                                            break;
                                        case "switchCn":
                                            this.numFlag = false;
                                            this.numFlag_jp = false;
                                            break;
                                        case "switchUpper":
                                            this.upperFlag = true;
                                            break;
                                        case "switchLow":
                                            this.upperFlag = false;
                                            break;
                                        default:
                                            if (1 === sign.length) this.addAllTxt(sign);
                                            else {
                                                if (this.waitingIndex >= 0) if (this.lastWaitingStr === sign) {
                                                    this.waitingIndex++;
                                                    if (this.waitingIndex >= this.lastWaitingStr.length) this.waitingIndex = 0;
                                                } else {
                                                    if ("cn" === this.lang || 'jp' === this.lang) this.cval += this.waitingList[this.waitingIndex];
                                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[this.waitingIndex].toUpperCase());
                                                    else this.addAllTxt(this.waitingList[this.waitingIndex].toLowerCase());
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                else {
                                                    this.lastWaitingStr = sign;
                                                    this.waitingIndex = 0;
                                                    this.waitingList = sign.split("");
                                                }
                                                this.resetReslutList();
                                            }
                                            break;
                                    }
                                },
                                clearWaiting () {
                                    this.waitingList = [];
                                    this.waitingIndex = -1;
                                    this.lastWaitingStr = "";
                                },
                                resetReslutList () {
                                    let watingStr = "";
                                    if (this.lastWaitingStr && this.lastWaitingStr[this.waitingIndex]) watingStr = this.lastWaitingStr[this.waitingIndex];
                                    if (!(this.cval + watingStr) || "cn" !== this.lang && "jp" !== this.lang) {
                                        this.resultList = [];
                                        this.setResultListAll();
                                        return;
                                    }
                                    this.getResultByWord(this.cval + watingStr);
                                },
                                setResultListAll () {
                                    this.resultList2 = [];
                                    let array = [];
                                    for(let i = 0; i < this.resultList.length; i++){
                                        array.push(this.resultList[i]);
                                        if (array.length === parseInt(this.maxlength)) {
                                            this.resultList2.push(array);
                                            array = [];
                                        }
                                    }
                                    if (array.length > 0 && array.length < parseInt(this.maxlength)) this.resultList2.push(array);
                                },
                                getResultByWord (val) {
                                    const that = this;
                                    doSearchDic(val, that.lang, function(data) {
                                        that.resultList = data;
                                        that.setResultListAll();
                                    });
                                },
                                onSelect (num) {
                                    this.$emit("keyDown", {
                                        content: num
                                    });
                                    if ("T9" === this.keyboardtype && "pill-shaped" !== this.screentype) return void this.onBtnClick(num);
                                    this.onVibrate();
                                    if ('cn' !== this.lang && 'jp' !== this.lang || this.numFlag) if ("en" !== this.lang || this.numFlag) this.addAllTxt(num);
                                    else if (this.upperFlag) this.addAllTxt(num.toUpperCase());
                                    else this.addAllTxt(num.toLowerCase());
                                    else this.cval += num.toLowerCase();
                                    this.resetReslutList();
                                },
                                onSelectWaiting (num) {
                                    this.onVibrate();
                                    if ("cn" === this.lang) this.cval += this.waitingList[num].toString();
                                    else if (this.upperFlag) this.addAllTxt(this.waitingList[num].toUpperCase());
                                    else this.addAllTxt(this.waitingList[num].toLowerCase());
                                    this.clearWaiting();
                                    this.resetReslutList();
                                },
                                watchHidePropsChange (newV, oldV) {
                                    this.$emit("visibilityChange", {
                                        visible: newV
                                    });
                                },
                                watchMaxLengthPropsChange (newV, oldV) {
                                    if (newV) {
                                        const tempCvalList = [];
                                        for(let i = 0; i < newV; i++)tempCvalList.push(i);
                                        this.cvalList = tempCvalList;
                                    }
                                },
                                watchKeyboardTypePropsChange (newV, oldV) {
                                    if ("T9" === newV && "jp" === this.lang) {
                                        this.lang = "cn";
                                        this.cval = "";
                                        this.clearWaiting();
                                        this.resetReslutList();
                                    }
                                },
                                onVibrate () {
                                    if ("" != this.vibratemode) _system.default.vibrate({
                                        mode: this.vibratemode
                                    });
                                },
                                handelScroll (event) {
                                    let percentTemp67 = event.scrollX / 636 * 100 + 52.8;
                                    this.percent67 = parseInt(percentTemp67 <= 100 ? percentTemp67 : 100);
                                    let percentTemp66 = event.scrollX / 633 * 100;
                                    this.percent66 = parseInt(percentTemp66 <= 100 ? percentTemp66 : 100);
                                },
                                pushCval () {
                                    this.onVibrate();
                                    let temp = this.cval;
                                    this.cval = "";
                                    this.clearWaiting();
                                    this.resetReslutList();
                                    this.addAllTxt(temp);
                                },
                                adjustScreenWidth () {
                                    _system2.default.getInfo({
                                        success: (data)=>{
                                            this.screenWidth = data.screenWidth;
                                        }
                                    });
                                }
                            };
                        };
                        var $app_template$ = function(vm) {
                            const _vm_ = vm || this;
                            return aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "page"
                                    ],
                                    style: {
                                        flexDirection: "column"
                                    },
                                    show: function() {
                                        return !_vm_.hide;
                                    }
                                }
                            }, [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        style: {
                                            backgroundColor: "black"
                                        }
                                    }
                                }, [
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "circle" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "480px",
                                                        height: "321px"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "T9" != _vm_.keyboardtype;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                id: "full-keyboard",
                                                                style: {
                                                                    width: "480px",
                                                                    height: "321px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/back2.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "7px",
                                                                        width: "466px",
                                                                        height: "52px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchCn", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/123.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/123.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum_jp", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/bigA.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchLow", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/A.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchUpper", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "78px",
                                                                        width: "324px",
                                                                        height: "52px",
                                                                        backgroundColor: "rgb(38, 38, 38)",
                                                                        borderRadius: "12px",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderStyle: "solid",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return _vm_.resultList.length > 0;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "43px",
                                                                        left: "355px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/down.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "jp" != _vm_.lang;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            src: function() {
                                                                                return "/components/InputMethod/assets/full/" + _vm_.lang + ".png";
                                                                            },
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "38px",
                                                                                left: "7px",
                                                                                width: "67px",
                                                                                height: "52px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onBtnClick("lang", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            }),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            src: "/components/InputMethod/assets/full/jp.png",
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "38px",
                                                                                left: "7px",
                                                                                width: "67px",
                                                                                height: "52px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onBtnClick("lang", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "78px",
                                                                        width: "324px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "caltext"
                                                                        ],
                                                                        style: {
                                                                            width: "296px"
                                                                        },
                                                                        value: function() {
                                                                            return _vm_.cval + "_";
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "80px",
                                                                        width: "277px"
                                                                    },
                                                                    show: function() {
                                                                        return ("cn" === _vm_.lang || "jp" === _vm_.lang) && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.cvalList;
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
                                                                                    "item",
                                                                                    "column",
                                                                                    "center"
                                                                                ]
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("input", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    show: function() {
                                                                                        return _vm_.resultList.length > $idx;
                                                                                    },
                                                                                    classList: [
                                                                                        "calbtn0"
                                                                                    ],
                                                                                    type: "button",
                                                                                    value: function() {
                                                                                        return _vm_.resultList[$idx];
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "80px",
                                                                        width: "320px",
                                                                        height: "52px",
                                                                        alignContent: "center",
                                                                        alignItems: "center",
                                                                        justifyContent: "center"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/123_boardless.png"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("list", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "list3"
                                                                            ]
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultList2;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "itemArray"
                                                                            }
                                                                        }, function($idx, itemArray) {
                                                                            return [
                                                                                aiot.__ce__("list-item", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        type: "waitingRows62t9",
                                                                                        classList: [
                                                                                            "item3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return itemArray;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("div", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "item",
                                                                                                        "column",
                                                                                                        "center"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        height: "52px"
                                                                                                    }
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__ce__("input", {
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        classList: [
                                                                                                            "calbtn0"
                                                                                                        ],
                                                                                                        type: "button",
                                                                                                        value: function() {
                                                                                                            return item;
                                                                                                        },
                                                                                                        events: {
                                                                                                            click: function(evt) {
                                                                                                                return _vm_.onRsSelect(item, evt);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [])
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "95px",
                                                                        left: "8px",
                                                                        width: "464px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/Q.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("Q", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][0];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/P.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("P", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "152px",
                                                                        left: "23px",
                                                                        width: "438px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/btA.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("A", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][1];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/L.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("L", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "209px",
                                                                        left: "56px",
                                                                        width: "368px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/Z.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("Z", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["full62"][2];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnfull"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item;
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/M.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("M", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "95px",
                                                                        left: "8px",
                                                                        width: "464px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/1.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("1", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62_jp"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/0.png",
                                                                        style: {
                                                                            width: "54px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("0", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "152px",
                                                                        left: "23px",
                                                                        width: "438px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/2-1.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("~", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62_jp"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/2-2.png",
                                                                        style: {
                                                                            width: "60px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("?", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "209px",
                                                                        left: "56px",
                                                                        width: "368px",
                                                                        height: "52px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/3-1.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px",
                                                                            marginRight: "4px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("(", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, []),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !!_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign62_jp"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtnfull"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ];
                                                                }),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/3-2.png",
                                                                        style: {
                                                                            width: "72px",
                                                                            height: "52px"
                                                                        },
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\u3001", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/del.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "38px",
                                                                        left: "406px",
                                                                        width: "67px",
                                                                        height: "52px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/space.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "242px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("space", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/4-2.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "242px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\u3002", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/4-1.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\uFF0C", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/full/4-1.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "266px",
                                                                        left: "119px",
                                                                        width: "120px",
                                                                        height: "48px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onSelect("\u3001", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag_jp;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "204px",
                                                                        left: "78px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/up.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "down" === _vm_.downFlag;
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
                                                            return !("T9" != _vm_.keyboardtype);
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    width: "480px",
                                                                    height: "321px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/back2.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchCn", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/123.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/bigA.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchLow", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/a.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "31px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchUpper", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "290px",
                                                                        height: "60px",
                                                                        backgroundColor: "rgb(38, 38, 38)",
                                                                        borderRadius: "999px",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderStyle: "solid",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return _vm_.resultList.length > 0;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "44px",
                                                                        left: "338px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/down.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("image", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            src: function() {
                                                                                return "/components/InputMethod/assets/t9/" + _vm_.lang + ".png";
                                                                            },
                                                                            style: {
                                                                                position: "absolute",
                                                                                top: "35px",
                                                                                left: "31px",
                                                                                width: "60px",
                                                                                height: "60px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onBtnClick("lang", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "95px",
                                                                        width: "145px",
                                                                        height: "40px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && _vm_.cval;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "caltext"
                                                                        ],
                                                                        style: {
                                                                            width: "145px"
                                                                        },
                                                                        value: function() {
                                                                            return _vm_.cval + "_";
                                                                        }
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "-4px",
                                                                        left: "240px",
                                                                        width: "145px",
                                                                        height: "40px",
                                                                        justifyContent: "flex-end"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.waitingList;
                                                                        },
                                                                        key: "$idx",
                                                                        value: "$item"
                                                                    }
                                                                }, function($idx, $item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "waiting-keys"
                                                                                ],
                                                                                style: function() {
                                                                                    return __webpack_require__.g.$translateStyle$("color:" + ($idx === _vm_.waitingIndex ? "rgb(13,132,255)" : "white") + ";");
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelectWaiting($idx, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return _vm_.waitingList[$idx];
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "39px",
                                                                        left: "105px",
                                                                        width: "233px"
                                                                    },
                                                                    show: function() {
                                                                        return "cn" === _vm_.lang && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.cvalList;
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
                                                                                    "item",
                                                                                    "column",
                                                                                    "center"
                                                                                ]
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("input", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    show: function() {
                                                                                        return _vm_.resultList.length > $idx;
                                                                                    },
                                                                                    classList: [
                                                                                        "calbtn0"
                                                                                    ],
                                                                                    type: "button",
                                                                                    value: function() {
                                                                                        return _vm_.resultList[$idx];
                                                                                    },
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "290px",
                                                                        height: "60px",
                                                                        alignContent: "center",
                                                                        alignItems: "center",
                                                                        justifyContent: "center"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        src: "/components/InputMethod/assets/full/123_boardless.png"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ci__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    shown: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, function() {
                                                                return [
                                                                    aiot.__ce__("list", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "list3"
                                                                            ]
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.resultList2;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "itemArray"
                                                                            }
                                                                        }, function($idx, itemArray) {
                                                                            return [
                                                                                aiot.__ce__("list-item", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        type: "waitingRows62full",
                                                                                        classList: [
                                                                                            "item3"
                                                                                        ]
                                                                                    }
                                                                                }, [
                                                                                    aiot.__cf__({
                                                                                        __vm__: _vm_,
                                                                                        __opts__: {
                                                                                            exp: function() {
                                                                                                return itemArray;
                                                                                            },
                                                                                            key: "$idx",
                                                                                            value: "item"
                                                                                        }
                                                                                    }, function($idx, item) {
                                                                                        return [
                                                                                            aiot.__ce__("div", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "item",
                                                                                                        "column",
                                                                                                        "center"
                                                                                                    ],
                                                                                                    style: {
                                                                                                        height: "52px"
                                                                                                    }
                                                                                                }
                                                                                            }, [
                                                                                                aiot.__ce__("input", {
                                                                                                    __vm__: _vm_,
                                                                                                    __opts__: {
                                                                                                        classList: [
                                                                                                            "calbtn0"
                                                                                                        ],
                                                                                                        type: "button",
                                                                                                        value: function() {
                                                                                                            return item;
                                                                                                        },
                                                                                                        events: {
                                                                                                            click: function(evt) {
                                                                                                                return _vm_.onRsSelect(item, evt);
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }, [])
                                                                                            ])
                                                                                        ];
                                                                                    })
                                                                                ])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ];
                                                            }),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("select", evt);
                                                                            }
                                                                        },
                                                                        value: "选择"
                                                                    }
                                                                }, []),
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][0];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "163px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][1];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "227px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__cf__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        exp: function() {
                                                                            return _vm_.keys["t9"][2];
                                                                        },
                                                                        key: "$idx",
                                                                        value: "item"
                                                                    }
                                                                }, function($idx, item) {
                                                                    return [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtnt9"
                                                                                ],
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onSelect(item, evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return item.toUpperCase();
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("7", evt);
                                                                            }
                                                                        },
                                                                        value: "7"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("8", evt);
                                                                            }
                                                                        },
                                                                        value: "8"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("9", evt);
                                                                            }
                                                                        },
                                                                        value: "9"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("4", evt);
                                                                            }
                                                                        },
                                                                        value: "4"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("5", evt);
                                                                            }
                                                                        },
                                                                        value: "5"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("6", evt);
                                                                            }
                                                                        },
                                                                        value: "6"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "163px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("1", evt);
                                                                            }
                                                                        },
                                                                        value: "1"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("2", evt);
                                                                            }
                                                                        },
                                                                        value: "2"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("3", evt);
                                                                            }
                                                                        },
                                                                        value: "3"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "227px",
                                                                        left: "95px",
                                                                        width: "294px",
                                                                        height: "60px"
                                                                    },
                                                                    show: function() {
                                                                        return _vm_.numFlag;
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\uFF0C", evt);
                                                                            }
                                                                        },
                                                                        value: "，"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("0", evt);
                                                                            }
                                                                        },
                                                                        value: "0"
                                                                    }
                                                                }, []),
                                                                aiot.__ce__("text", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "calbtnt9"
                                                                        ],
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onSelect("\u3002", evt);
                                                                            }
                                                                        },
                                                                        value: "。"
                                                                    }
                                                                }, [])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/del.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "35px",
                                                                        left: "389px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/t9/space.png",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "99px",
                                                                        left: "389px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("space", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "" === _vm_.downFlag && !_vm_.numFlag;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "204px",
                                                                        left: "78px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/full/up.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    },
                                                                    show: function() {
                                                                        return "down" === _vm_.downFlag;
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "rect" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "100%",
                                                        height: "255px",
                                                        flexDirection: "column"
                                                    }
                                                }
                                            }, [
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "T9" == _vm_.keyboardtype && !_vm_.numFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-11px",
                                                                    width: "100%",
                                                                    height: "276px",
                                                                    justifyContent: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        top: "77px",
                                                                        height: "189px",
                                                                        width: "100%",
                                                                        alignItems: "stretch",
                                                                        justifyContent: "space-between",
                                                                        flexDirection: "column",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "3px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "3px"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            classList: [
                                                                                "calbtnt9",
                                                                                "calbtnt9-rect"
                                                                            ],
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onSelect("select", evt);
                                                                                }
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("span", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                value: "选择"
                                                                            }
                                                                        }),
                                                                        aiot.__ci__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                shown: function() {
                                                                                    return 0 != _vm_.waitingList.length;
                                                                                }
                                                                            }
                                                                        }, function() {
                                                                            return [
                                                                                aiot.__ce__("span", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "waiting-keys"
                                                                                        ],
                                                                                        style: {
                                                                                            color: "rgb(13, 132, 255)"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelectWaiting(_vm_.waitingIndex, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.waitingList[_vm_.waitingIndex].toUpperCase();
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][0];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][1];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "keyboard-rows-rect-t9"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.keys["t9"][2];
                                                                            },
                                                                            key: "$idx",
                                                                            value: "item"
                                                                        }
                                                                    }, function($idx, item) {
                                                                        return [
                                                                            aiot.__ce__("text", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    classList: [
                                                                                        "calbtnt9",
                                                                                        "calbtnt9-rect"
                                                                                    ],
                                                                                    events: {
                                                                                        click: function(evt) {
                                                                                            return _vm_.onSelect(item, evt);
                                                                                        }
                                                                                    },
                                                                                    value: function() {
                                                                                        return item.toUpperCase();
                                                                                    }
                                                                                }
                                                                            }, [])
                                                                        ];
                                                                    })
                                                                ])
                                                            ])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return !("T9" == _vm_.keyboardtype && !_vm_.numFlag);
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "-11px",
                                                                    width: "100%",
                                                                    height: "276px",
                                                                    justifyContent: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("progress", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    percent: function() {
                                                                        return _vm_.percent67;
                                                                    },
                                                                    style: {
                                                                        position: "absolute",
                                                                        bottom: "12px",
                                                                        width: "80px",
                                                                        color: "#ffffff",
                                                                        strokeWidth: "6px",
                                                                        layerColor: "#262626"
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__ce__("scroll", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    id: "keyboard67",
                                                                    scrollX: function() {
                                                                        return true;
                                                                    },
                                                                    events: {
                                                                        scroll: function(evt) {
                                                                            return _vm_.handelScroll(evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return !_vm_.numFlag;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["full"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                }),
                                                                                aiot.__ce__("image", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        src: "/components/InputMethod/assets/horizontal/space.png",
                                                                                        style: {
                                                                                            width: "60px",
                                                                                            height: "60px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onBtnClick("space", evt);
                                                                                            }
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
                                                                            return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ])
                                                                    ];
                                                                }),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return _vm_.numFlag_jp;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("div", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    left: "6px",
                                                                                    flexDirection: "column"
                                                                                }
                                                                            }
                                                                        }, [
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "0px",
                                                                                        marginTop: "0px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign_jp"][0];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "32px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign_jp"][1];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ]),
                                                                            aiot.__ce__("div", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    style: {
                                                                                        marginLeft: "64px",
                                                                                        marginTop: "-5px",
                                                                                        height: "60px"
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return _vm_.keys["sign_jp"][2];
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("text", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "calbtn67"
                                                                                                ],
                                                                                                events: {
                                                                                                    click: function(evt) {
                                                                                                        return _vm_.onSelect(item, evt);
                                                                                                    }
                                                                                                },
                                                                                                value: function() {
                                                                                                    return item;
                                                                                                }
                                                                                            }
                                                                                        }, [])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ])
                                                                    ];
                                                                })
                                                            ])
                                                        ])
                                                    ];
                                                }),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: {
                                                            width: "100%",
                                                            flexDirection: "row",
                                                            justifyContent: "center",
                                                            top: "6px",
                                                            paddingTop: "0",
                                                            paddingRight: "6px",
                                                            paddingBottom: "0",
                                                            paddingLeft: "6px"
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/cn.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/jp.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return ("cn" === _vm_.lang || "jp" === _vm_.lang) && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        flex: 1,
                                                                        height: "60px",
                                                                        backgroundColor: "#262626",
                                                                        borderTopColor: "#333333",
                                                                        borderRightColor: "#333333",
                                                                        borderBottomColor: "#333333",
                                                                        borderLeftColor: "#333333",
                                                                        borderTopWidth: "3px",
                                                                        borderRightWidth: "3px",
                                                                        borderBottomWidth: "3px",
                                                                        borderLeftWidth: "3px",
                                                                        borderRadius: "100px",
                                                                        flexDirection: "row",
                                                                        alignItems: "center"
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("scroll", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        id: "cvalWaiting",
                                                                        scrollX: function() {
                                                                            return true;
                                                                        },
                                                                        style: {
                                                                            position: "absolute",
                                                                            width: "85%",
                                                                            height: "42px"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                position: "absolute",
                                                                                left: "0px",
                                                                                height: "42px",
                                                                                paddingLeft: "20px",
                                                                                paddingRight: "20px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__ce__("text", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                classList: [
                                                                                    "calbtn02"
                                                                                ],
                                                                                style: {
                                                                                    paddingRight: "10px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.pushCval(evt);
                                                                                    }
                                                                                },
                                                                                value: function() {
                                                                                    return _vm_.cval;
                                                                                }
                                                                            }
                                                                        }, []),
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.cvalList;
                                                                                },
                                                                                key: "$idx",
                                                                                value: "$item"
                                                                            }
                                                                        }, function($idx, $item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        show: function() {
                                                                                            return _vm_.resultList.length > $idx;
                                                                                        },
                                                                                        classList: [
                                                                                            "calbtn02"
                                                                                        ],
                                                                                        style: {
                                                                                            paddingRight: "10px"
                                                                                        },
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return _vm_.resultList[$idx];
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ]),
                                                                aiot.__ci__({
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        shown: function() {
                                                                            return _vm_.resultList.length > 0;
                                                                        }
                                                                    }
                                                                }, function() {
                                                                    return [
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                style: {
                                                                                    position: "absolute",
                                                                                    right: "8px",
                                                                                    width: "60px",
                                                                                    height: "40px"
                                                                                },
                                                                                src: "/components/InputMethod/assets/horizontal/down2.png",
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("down", evt);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }, [])
                                                                    ];
                                                                })
                                                            ])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "jp" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/123.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum_jp", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/en.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("lang", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/bigA.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        marginLeft: "6px",
                                                                        width: "94px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchLow", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang && !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/a.png",
                                                                    style: {
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        marginLeft: "6px",
                                                                        width: "94px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchUpper", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/123.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "94px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchNum", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return _vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/back2.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "159px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("switchCn", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return !_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/del.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px",
                                                                        width: "60px",
                                                                        height: "60px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    }),
                                                    aiot.__ci__({
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            shown: function() {
                                                                return !!_vm_.numFlag;
                                                            }
                                                        }
                                                    }, function() {
                                                        return [
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    src: "/components/InputMethod/assets/horizontal/del2.png",
                                                                    style: {
                                                                        marginLeft: "6px",
                                                                        paddingTop: "6px",
                                                                        paddingRight: "6px",
                                                                        paddingBottom: "6px",
                                                                        paddingLeft: "6px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("D", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ];
                                                    })
                                                ]),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "down" === _vm_.downFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "0px",
                                                                    top: "0px",
                                                                    width: "100%",
                                                                    height: "252px",
                                                                    backgroundColor: "black",
                                                                    justifyContent: "center",
                                                                    flexDirection: "column",
                                                                    alignItems: "center"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "list67"
                                                                    ]
                                                                }
                                                            }, [
                                                                aiot.__ce__("list", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            width: "100%",
                                                                            height: "100%"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.resultList2;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "itemArray"
                                                                        }
                                                                    }, function($idx, itemArray) {
                                                                        return [
                                                                            aiot.__ce__("list-item", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    type: "waitingRows67",
                                                                                    classList: [
                                                                                        "item67"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return itemArray;
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "item",
                                                                                                    "column",
                                                                                                    "center"
                                                                                                ]
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__ce__("input", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn02"
                                                                                                    ],
                                                                                                    type: "button",
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ];
                                                                    })
                                                                ])
                                                            ]),
                                                            aiot.__ce__("image", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: {
                                                                        marginTop: "5px"
                                                                    },
                                                                    src: "/components/InputMethod/assets/horizontal/up2.png",
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.onBtnClick("down", evt);
                                                                        }
                                                                    }
                                                                }
                                                            }, [])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return "pill-shaped" === _vm_.screentype;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    style: {
                                                        width: "100%",
                                                        height: "305px"
                                                    }
                                                }
                                            }, [
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: {
                                                            position: "absolute",
                                                            left: "0px",
                                                            top: "34px",
                                                            width: "100%",
                                                            height: "276px"
                                                        }
                                                    }
                                                }, [
                                                    aiot.__ce__("progress", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            percent: function() {
                                                                return 30 + _vm_.percent66;
                                                            },
                                                            type: "arc",
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("start-angle:204deg;total-angle:-48deg;width:188px;height:188px;top:82px;left:2px;position:absolute;color:#ffffff;stroke-width:6px;layer-color:#262626;margin-left: " + (_vm_.screenWidth - 192) / 2 + "px;");
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("scroll", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            id: "keyboard66",
                                                            scrollX: function() {
                                                                return true;
                                                            },
                                                            events: {
                                                                scroll: function(evt) {
                                                                    return _vm_.handelScroll(evt);
                                                                }
                                                            },
                                                            style: function() {
                                                                return __webpack_require__.g.$translateStyle$("padding-left: " + (_vm_.screenWidth - 192) / 2 + "px;padding-right: " + (_vm_.screenWidth - 192) / 2 + "px;");
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return !_vm_.numFlag;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["full"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        }),
                                                                        aiot.__ce__("image", {
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                src: "/components/InputMethod/assets/arc/space.png",
                                                                                style: {
                                                                                    width: "60px",
                                                                                    height: "60px"
                                                                                },
                                                                                events: {
                                                                                    click: function(evt) {
                                                                                        return _vm_.onBtnClick("space", evt);
                                                                                    }
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
                                                                    return _vm_.numFlag && !_vm_.numFlag_jp;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ])
                                                            ];
                                                        }),
                                                        aiot.__ci__({
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                shown: function() {
                                                                    return _vm_.numFlag_jp;
                                                                }
                                                            }
                                                        }, function() {
                                                            return [
                                                                aiot.__ce__("div", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            left: "3px",
                                                                            flexDirection: "column"
                                                                        }
                                                                    }
                                                                }, [
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "0px",
                                                                                marginTop: "0px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign_jp"][0];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "32px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign_jp"][1];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ]),
                                                                    aiot.__ce__("div", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            style: {
                                                                                marginLeft: "64px",
                                                                                marginTop: "-5px",
                                                                                height: "60px"
                                                                            }
                                                                        }
                                                                    }, [
                                                                        aiot.__cf__({
                                                                            __vm__: _vm_,
                                                                            __opts__: {
                                                                                exp: function() {
                                                                                    return _vm_.keys["sign_jp"][2];
                                                                                },
                                                                                key: "$idx",
                                                                                value: "item"
                                                                            }
                                                                        }, function($idx, item) {
                                                                            return [
                                                                                aiot.__ce__("text", {
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        classList: [
                                                                                            "calbtn66"
                                                                                        ],
                                                                                        events: {
                                                                                            click: function(evt) {
                                                                                                return _vm_.onSelect(item, evt);
                                                                                            }
                                                                                        },
                                                                                        value: function() {
                                                                                            return item;
                                                                                        }
                                                                                    }
                                                                                }, [])
                                                                            ];
                                                                        })
                                                                    ])
                                                                ])
                                                            ];
                                                        })
                                                    ])
                                                ]),
                                                aiot.__ce__("div", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        style: function() {
                                                            return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;top: 0px;width: 192px;height: 110px;");
                                                        },
                                                        static: true
                                                    }
                                                }, [
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            style: {
                                                                position: "absolute",
                                                                left: "3px",
                                                                top: "47px",
                                                                width: "186px",
                                                                height: "60px"
                                                            },
                                                            src: "/components/InputMethod/assets/arc/search.png"
                                                        }
                                                    }, []),
                                                    aiot.__ce__("scroll", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            id: "cvalWaiting",
                                                            scrollX: function() {
                                                                return true;
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                left: "15px",
                                                                top: "56px",
                                                                width: "144px",
                                                                height: "42px"
                                                            }
                                                        }
                                                    }, [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    left: "0px",
                                                                    top: "0px",
                                                                    height: "42px",
                                                                    paddingRight: "20px"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("text", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    classList: [
                                                                        "calbtn02"
                                                                    ],
                                                                    style: {
                                                                        paddingRight: "10px"
                                                                    },
                                                                    events: {
                                                                        click: function(evt) {
                                                                            return _vm_.pushCval(evt);
                                                                        }
                                                                    },
                                                                    value: function() {
                                                                        return _vm_.cval;
                                                                    }
                                                                }
                                                            }, []),
                                                            aiot.__cf__({
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    exp: function() {
                                                                        return _vm_.cvalList;
                                                                    },
                                                                    key: "$idx",
                                                                    value: "$item"
                                                                }
                                                            }, function($idx, $item) {
                                                                return [
                                                                    aiot.__ce__("text", {
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            show: function() {
                                                                                return _vm_.resultList.length > $idx;
                                                                            },
                                                                            classList: [
                                                                                "calbtn02"
                                                                            ],
                                                                            style: {
                                                                                paddingRight: "10px"
                                                                            },
                                                                            events: {
                                                                                click: function(evt) {
                                                                                    return _vm_.onRsSelect(_vm_.resultList[$idx], evt);
                                                                                }
                                                                            },
                                                                            value: function() {
                                                                                return _vm_.resultList[$idx];
                                                                            }
                                                                        }
                                                                    }, [])
                                                                ];
                                                            })
                                                        ])
                                                    ]),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            show: function() {
                                                                return _vm_.resultList.length > 0;
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                left: "120px",
                                                                top: "57px",
                                                                width: "60px",
                                                                height: "40px"
                                                            },
                                                            src: "/components/InputMethod/assets/arc/down2.png",
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("down", evt);
                                                                }
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: function() {
                                                                return "/components/InputMethod/assets/arc/" + _vm_.lang + ".png";
                                                            },
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "9px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("lang", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && !_vm_.numFlag_jp;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/components/InputMethod/assets/arc/back2.png",
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "9px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchCn", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return _vm_.numFlag && "cn" === _vm_.lang || _vm_.numFlag_jp && "jp" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/components/InputMethod/assets/arc/123.png",
                                                            style: {
                                                                position: "absolute",
                                                                left: "70px",
                                                                top: "0px",
                                                                width: "52px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchNum", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag && "cn" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/components/InputMethod/assets/arc/123.png",
                                                            style: {
                                                                position: "absolute",
                                                                left: "70px",
                                                                top: "0px",
                                                                width: "52px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchNum_jp", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.numFlag_jp && "jp" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/components/InputMethod/assets/arc/bigA.png",
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "72px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchLow", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && _vm_.upperFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/components/InputMethod/assets/arc/a.png",
                                                            style: {
                                                                position: "absolute",
                                                                top: "0px",
                                                                left: "72px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("switchUpper", evt);
                                                                }
                                                            },
                                                            show: function() {
                                                                return "" === _vm_.downFlag && !_vm_.upperFlag && "en" === _vm_.lang;
                                                            }
                                                        }
                                                    }, []),
                                                    aiot.__ce__("image", {
                                                        __vm__: _vm_,
                                                        __opts__: {
                                                            src: "/components/InputMethod/assets/arc/del.png",
                                                            style: {
                                                                position: "absolute",
                                                                left: "135px",
                                                                top: "0px",
                                                                width: "48px",
                                                                height: "42px"
                                                            },
                                                            events: {
                                                                click: function(evt) {
                                                                    return _vm_.onBtnClick("D", evt);
                                                                }
                                                            }
                                                        }
                                                    }, [])
                                                ]),
                                                aiot.__ci__({
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        shown: function() {
                                                            return "down" === _vm_.downFlag;
                                                        }
                                                    }
                                                }, function() {
                                                    return [
                                                        aiot.__ce__("div", {
                                                            __vm__: _vm_,
                                                            __opts__: {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "47px",
                                                                    width: "100%",
                                                                    height: "263px",
                                                                    backgroundColor: "black"
                                                                }
                                                            }
                                                        }, [
                                                            aiot.__ce__("div", {
                                                                __vm__: _vm_,
                                                                __opts__: {
                                                                    style: function() {
                                                                        return __webpack_require__.g.$translateStyle$("position: absolute;left: " + (_vm_.screenWidth - 192) / 2 + "px;width: 192px;height: 263px;");
                                                                    }
                                                                }
                                                            }, [
                                                                aiot.__ce__("list", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        classList: [
                                                                            "list66"
                                                                        ]
                                                                    }
                                                                }, [
                                                                    aiot.__cf__({
                                                                        __vm__: _vm_,
                                                                        __opts__: {
                                                                            exp: function() {
                                                                                return _vm_.resultList2;
                                                                            },
                                                                            key: "$idx",
                                                                            value: "itemArray"
                                                                        }
                                                                    }, function($idx, itemArray) {
                                                                        return [
                                                                            aiot.__ce__("list-item", {
                                                                                __vm__: _vm_,
                                                                                __opts__: {
                                                                                    type: "waitingRows66",
                                                                                    classList: [
                                                                                        "item66"
                                                                                    ]
                                                                                }
                                                                            }, [
                                                                                aiot.__cf__({
                                                                                    __vm__: _vm_,
                                                                                    __opts__: {
                                                                                        exp: function() {
                                                                                            return itemArray;
                                                                                        },
                                                                                        key: "$idx",
                                                                                        value: "item"
                                                                                    }
                                                                                }, function($idx, item) {
                                                                                    return [
                                                                                        aiot.__ce__("div", {
                                                                                            __vm__: _vm_,
                                                                                            __opts__: {
                                                                                                classList: [
                                                                                                    "item",
                                                                                                    "column",
                                                                                                    "center"
                                                                                                ]
                                                                                            }
                                                                                        }, [
                                                                                            aiot.__ce__("input", {
                                                                                                __vm__: _vm_,
                                                                                                __opts__: {
                                                                                                    classList: [
                                                                                                        "calbtn0"
                                                                                                    ],
                                                                                                    type: "button",
                                                                                                    value: function() {
                                                                                                        return item;
                                                                                                    },
                                                                                                    events: {
                                                                                                        click: function(evt) {
                                                                                                            return _vm_.onRsSelect(item, evt);
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }, [])
                                                                                        ])
                                                                                    ];
                                                                                })
                                                                            ])
                                                                        ];
                                                                    })
                                                                ]),
                                                                aiot.__ce__("image", {
                                                                    __vm__: _vm_,
                                                                    __opts__: {
                                                                        style: {
                                                                            position: "absolute",
                                                                            top: "196px",
                                                                            left: "56px",
                                                                            width: "80px",
                                                                            height: "60px"
                                                                        },
                                                                        src: "/components/InputMethod/assets/arc/up2.png",
                                                                        events: {
                                                                            click: function(evt) {
                                                                                return _vm_.onBtnClick("down", evt);
                                                                            }
                                                                        }
                                                                    }
                                                                }, [])
                                                            ])
                                                        ])
                                                    ];
                                                })
                                            ])
                                        ];
                                    })
                                ])
                            ]);
                        };
                        module.exports = function($app_exports$) {
                            $app_script$({}, $app_exports$, $app_require$1);
                            $app_exports$.default.template = $app_template$;
                            $app_exports$.default.style = $app_style$;
                        };
                    },
                    "./src/components/InputMethod/assets/dicUtil.js" (__unused_rspack_module, exports) {
                        "use strict";
                        Object.defineProperty(exports, "__esModule", {
                            value: true
                        });
                        exports.SimpleInputMethod = void 0;
                        let SimpleInputMethod = exports.SimpleInputMethod = {
                            dict: {
                                py2hz: {},
                                py2hz2: {}
                            }
                        };
                        SimpleInputMethod.initDict = function() {};
                        SimpleInputMethod.getHanzi = function(word, lang) {
                            return [];
                        };
                        SimpleInputMethod.getPinyin = function(word) {
                            return "";
                        };
                    }
                };
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
                var __webpack_exports__ = {};
                (()=>{
                    $app_exports$['input-method'] = __webpack_require__("./src/components/InputMethod/InputMethod.ux");
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
                                    "main-area"
                                ]
                            ],
                            {
                                width: "336px",
                                flex: 1,
                                flexDirection: "column",
                                marginTop: "-7px"
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
                                    "card"
                                ]
                            ],
                            {
                                width: "324px",
                                height: "112px",
                                marginTop: "8px",
                                marginRight: "6px",
                                marginBottom: "0",
                                marginLeft: "6px",
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
                                    "input-bar"
                                ]
                            ],
                            {
                                width: "324px",
                                height: "48px",
                                marginTop: "4px",
                                marginRight: "6px",
                                marginBottom: "0",
                                marginLeft: "6px",
                                backgroundColor: "#1a1a1a",
                                borderRadius: "24px",
                                flexDirection: "row",
                                alignItems: "center",
                                paddingTop: "0",
                                paddingRight: "4px",
                                paddingBottom: "0",
                                paddingLeft: "4px",
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-prompt"
                                ]
                            ],
                            {
                                width: "30px",
                                fontSize: "28px",
                                color: "#ffffff",
                                fontWeight: "bold",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-text"
                                ]
                            ],
                            {
                                flex: 1,
                                fontSize: "24px",
                                color: "#ffffff",
                                lines: 1,
                                paddingTop: "0",
                                paddingRight: "4px",
                                paddingBottom: "0",
                                paddingLeft: "4px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "input-send"
                                ]
                            ],
                            {
                                width: "60px",
                                height: "36px",
                                borderRadius: "18px",
                                backgroundColor: "#0d6eff",
                                textAlign: "center",
                                fontSize: "24px",
                                color: "#ffffff",
                                fontWeight: "bold",
                                lineHeight: "36px"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "output-scroll"
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
                                    "text-container"
                                ]
                            ],
                            {
                                paddingTop: "4px",
                                paddingRight: "16px",
                                paddingBottom: "4px",
                                paddingLeft: "16px",
                                width: "336px",
                                flexDirection: "column",
                                flex: 1
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
                                    "full-output-btn"
                                ]
                            ],
                            {
                                width: "324px",
                                height: "48px",
                                marginTop: "4px",
                                marginRight: "6px",
                                marginBottom: "8px",
                                marginLeft: "6px",
                                backgroundColor: "#0d6eff",
                                borderRadius: "24px",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "full-output-text"
                                ]
                            ],
                            {
                                fontSize: "24px",
                                color: "#ffffff",
                                fontWeight: "bold",
                                textAlign: "center"
                            }
                        ],
                        [
                            [
                                [
                                    0,
                                    "toolbar-area"
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
                                    "bt-bar"
                                ]
                            ],
                            {
                                position: "absolute",
                                left: 0,
                                top: 0,
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
                                top: "24px"
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
                                    "main-area"
                                ]
                            ],
                            {
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
                                width: "184px",
                                height: "110px",
                                borderRadius: "27px",
                                paddingLeft: "14px",
                                paddingRight: "16px",
                                marginTop: "8px",
                                marginRight: "4px",
                                marginBottom: "0",
                                marginLeft: "4px"
                            }
                        ],
                        [
                            {
                                condition: "screen and (shape:pill-shaped) and (max-width:100)"
                            },
                            [
                                [
                                    0,
                                    "input-bar"
                                ]
                            ],
                            {
                                width: "184px",
                                marginTop: "4px",
                                marginRight: "4px",
                                marginBottom: "0",
                                marginLeft: "4px"
                            }
                        ],
                        [
                            {
                                condition: "screen and (shape:pill-shaped) and (max-width:100)"
                            },
                            [
                                [
                                    0,
                                    "input-send"
                                ]
                            ],
                            {
                                width: "52px",
                                fontSize: "20px"
                            }
                        ],
                        [
                            {
                                condition: "screen and (shape:pill-shaped) and (max-width:100)"
                            },
                            [
                                [
                                    0,
                                    "full-output-btn"
                                ]
                            ],
                            {
                                width: "184px",
                                marginTop: "4px",
                                marginRight: "4px",
                                marginBottom: "8px",
                                marginLeft: "4px"
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
                                paddingTop: "4px",
                                paddingRight: "10px",
                                paddingBottom: "4px",
                                paddingLeft: "10px",
                                width: "192px",
                                flex: 1
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
                                width: "172px",
                                wordBreak: "break-all"
                            }
                        ],
                        [
                            {
                                condition: "screen and (shape:pill-shaped) and (max-width:100)"
                            },
                            [
                                [
                                    0,
                                    "toolbar-area"
                                ]
                            ],
                            {
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
                                    "bt-bar"
                                ]
                            ],
                            {
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
                                    "main-area"
                                ]
                            ],
                            {
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
                                width: "204px",
                                height: "110px",
                                borderRadius: "27px",
                                paddingLeft: "14px",
                                paddingRight: "16px",
                                marginTop: "8px",
                                marginRight: "4px",
                                marginBottom: "0",
                                marginLeft: "4px"
                            }
                        ],
                        [
                            {
                                condition: "screen and (shape:pill-shaped) and (min-width:101)"
                            },
                            [
                                [
                                    0,
                                    "input-bar"
                                ]
                            ],
                            {
                                width: "204px",
                                marginTop: "4px",
                                marginRight: "4px",
                                marginBottom: "0",
                                marginLeft: "4px"
                            }
                        ],
                        [
                            {
                                condition: "screen and (shape:pill-shaped) and (min-width:101)"
                            },
                            [
                                [
                                    0,
                                    "full-output-btn"
                                ]
                            ],
                            {
                                width: "204px",
                                marginTop: "4px",
                                marginRight: "4px",
                                marginBottom: "8px",
                                marginLeft: "4px"
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
                                paddingTop: "4px",
                                paddingRight: "10px",
                                paddingBottom: "4px",
                                paddingLeft: "10px",
                                width: "212px",
                                flex: 1
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
                                width: "192px",
                                wordBreak: "break-all"
                            }
                        ],
                        [
                            {
                                condition: "screen and (shape:pill-shaped) and (min-width:101)"
                            },
                            [
                                [
                                    0,
                                    "toolbar-area"
                                ]
                            ],
                            {
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
                                    "bt-bar"
                                ]
                            ],
                            {
                                width: "212px",
                                height: "102px"
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
                        var _system3 = _interopRequireDefault($app_require$1("@app-module/system.device"));
                        function _interopRequireDefault(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            };
                        }
                        var CMD_FILE = "internal://files/cmd_request.json";
                        var RESULT_FILE = "internal://files/cmd_result.json";
                        var cmdSeq = 0;
                        var lastResultSeq = -1;
                        var _default = exports.default = {
                            private: {
                                nowTime: "00:00",
                                timer: null,
                                pollTimer: null,
                                outputText: "",
                                showToolbar: true,
                                fontSize: 28,
                                lineHeight: 36,
                                cmdBuffer: "",
                                showKeyboard: false,
                                screenType: "rect",
                                latestFullOutput: "",
                                hasFullOutput: false,
                                lastSentCmd: ""
                            },
                            protected: {
                                cmd: ""
                            },
                            onInit () {
                                var self = this;
                                self.updateTime();
                                self.outputText = self.$t("terminal.startHint");
                                if (this.cmd) this.cmdBuffer = this.cmd;
                                self.timer = setInterval(function() {
                                    self.updateTime();
                                }, 1000);
                                self.pollTimer = setInterval(function() {
                                    self.pollResult();
                                }, 800);
                                _system3.default.getInfo({
                                    success: function(ret) {
                                        var w = ret.screenWidth || 336;
                                        self.screenType = w <= 230 ? "pill-shaped" : "rect";
                                    },
                                    fail: function() {
                                        self.screenType = "rect";
                                    }
                                });
                            },
                            onDestroy () {
                                clearInterval(this.timer);
                                clearInterval(this.pollTimer);
                            },
                            updateTime () {
                                var d = new Date();
                                this.nowTime = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
                            },
                            toggleKeyboard () {
                                this.showKeyboard = !this.showKeyboard;
                            },
                            onKeyComplete (e) {
                                this.cmdBuffer = this.cmdBuffer + e.detail.content;
                            },
                            onKeyDelete () {
                                if (this.cmdBuffer.length > 0) this.cmdBuffer = this.cmdBuffer.substring(0, this.cmdBuffer.length - 1);
                            },
                            onCloseKeyboard () {
                                this.showKeyboard = false;
                            },
                            sendBuffer () {
                                if (!this.cmdBuffer) return;
                                this.sendCommand(this.cmdBuffer);
                                this.cmdBuffer = "";
                                this.showKeyboard = false;
                            },
                            sendCommand (cmd) {
                                var self = this;
                                cmdSeq++;
                                var d = new Date();
                                var ts = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
                                var req = JSON.stringify({
                                    seq: cmdSeq,
                                    cmd: cmd,
                                    timestamp: ts
                                });
                                _system2.default.writeText({
                                    uri: CMD_FILE,
                                    text: req,
                                    append: false,
                                    success: function() {
                                        self.hasFullOutput = false;
                                        self.latestFullOutput = "";
                                        self.lastSentCmd = cmd;
                                        self.outputText = "> " + cmd + "\n" + self.$t("terminal.waiting");
                                    },
                                    fail: function() {
                                        var out = self.outputText;
                                        var hint = self.$t("terminal.startHint");
                                        if (-1 !== out.indexOf(hint)) out = out.replace(hint, "");
                                        self.outputText = "$ " + cmd + "\n[错误] " + self.$t("terminal.errorSend") + "\n\n" + out;
                                    }
                                });
                            },
                            pollResult () {
                                var self = this;
                                _system2.default.readText({
                                    uri: RESULT_FILE,
                                    success: function(data) {
                                        if (!data.text) return;
                                        try {
                                            var json = JSON.parse(data.text);
                                            if (void 0 === json.seq || json.seq === lastResultSeq) return;
                                            lastResultSeq = json.seq;
                                            var full = "";
                                            full += "> " + json.cmd + "\n";
                                            if (json.stdout) full += json.stdout;
                                            if (json.stderr && "" !== json.stderr) full += "\n[stderr]\n" + json.stderr;
                                            if ("" === json.stdout && "" === json.stderr) full += "(no output)";
                                            self.latestFullOutput = full;
                                            self.hasFullOutput = true;
                                            var preview = full.length > 200 ? full.substring(0, 200) + "\n...\n" : full;
                                            self.outputText = preview;
                                            if (self.outputText.length > 10000) self.outputText = self.outputText.substring(0, 10000);
                                        } catch (e) {}
                                    },
                                    fail: function() {}
                                });
                            },
                            goViewFullOutput () {
                                if (this.latestFullOutput) _system.default.push({
                                    uri: "/pages/log",
                                    params: {
                                        content: this.latestFullOutput
                                    }
                                });
                            },
                            goQuickCmds () {
                                _system.default.push({
                                    uri: "/pages/setting"
                                });
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
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "main-area"
                                    ]
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
                                                return _vm_.$t("terminal.title");
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
                                        show: function() {
                                            return _vm_.showToolbar;
                                        },
                                        classList: [
                                            "input-bar"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "input-prompt"
                                            ],
                                            value: ">"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "input-text"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleKeyboard(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.cmdBuffer ? _vm_.cmdBuffer : _vm_.$t("terminal.inputHint");
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "input-send"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.sendBuffer(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.$t("terminal.send");
                                            }
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
                                            "card"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goQuickCmds(evt);
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
                                                value: "快捷命令"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "card-sub"
                                                ],
                                                value: "快速填充命令"
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("scroll", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        id: "outputScroll",
                                        classList: [
                                            "output-scroll"
                                        ],
                                        scrollY: "true",
                                        bounces: "true"
                                    }
                                }, [
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
                                                    return _vm_.outputText;
                                                }
                                            }
                                        }, [])
                                    ])
                                ]),
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        show: function() {
                                            return _vm_.hasFullOutput && _vm_.showToolbar;
                                        },
                                        classList: [
                                            "full-output-btn"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.goViewFullOutput(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "full-output-text"
                                            ],
                                            value: "查看完整输出 →"
                                        }
                                    }, [])
                                ])
                            ]),
                            aiot.__cc__("input-method", {
                                __vm__: _vm_,
                                __opts__: {
                                    hide: function() {
                                        return !_vm_.showKeyboard;
                                    },
                                    screentype: function() {
                                        return _vm_.screenType;
                                    },
                                    keyboardtype: "QWERTY",
                                    maxlength: "5",
                                    events: {
                                        complete: function(evt) {
                                            return _vm_.onKeyComplete(evt);
                                        },
                                        delete: function(evt) {
                                            return _vm_.onKeyDelete(evt);
                                        },
                                        "close-keyboard": function(evt) {
                                            return _vm_.onCloseKeyboard(evt);
                                        }
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    show: function() {
                                        return _vm_.showToolbar && !_vm_.showKeyboard;
                                    },
                                    classList: [
                                        "toolbar-area"
                                    ]
                                }
                            }, [
                                aiot.__ce__("image", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "bt-bar"
                                        ],
                                        src: "/common/bt.png"
                                    }
                                }, []),
                                aiot.__ce__("number_choose", {
                                    __vm__: _vm_,
                                    __opts__: {
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
                                        name: function() {
                                            return _vm_.$t("terminal.fontSize");
                                        },
                                        events: {
                                            change: function(evt) {
                                                return _vm_.onFontChange(evt);
                                            }
                                        }
                                    }
                                }, [])
                            ])
                        ]);
                    };
                    $app_exports$['entry'] = function($app_exports$) {
                        $app_script$({}, $app_exports$, $app_require$1);
                        $app_exports$.default.template = $app_template$;
                        $app_exports$.default.style = $app_style$;
                    };
                })();
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdGVybWluYWwvdGVybWluYWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TaGVsbC9zcmMvY29tcG9uZW50cy9JbnB1dE1ldGhvZC9JbnB1dE1ldGhvZC51eCIsIndlYnBhY2s6Ly9TaGVsbC9zcmMvY29tcG9uZW50cy9JbnB1dE1ldGhvZC9hc3NldHMvZGljVXRpbC5qcyIsIndlYnBhY2s6Ly9TaGVsbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NoZWxsL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdmVyc2lvbiIsIndlYnBhY2s6Ly9TaGVsbC93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly9TaGVsbC9zcmMvcGFnZXMvdGVybWluYWwvdGVybWluYWwudXgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIiBzaG93PVwie3shaGlkZX19XCI+XG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6YmxhY2tcIiA+XG4gICAgICA8IS0tIOWchuWxjzYyIC0tPlxuICAgICAgPGRpdiBpZj1cInt7c2NyZWVudHlwZT09PSdjaXJjbGUnfX1cIiBzdHlsZT1cIndpZHRoOiA0ODBweDtoZWlnaHQ6IDMyMXB4O1wiPlxuICAgICAgICA8IS0tIOWFqOmUruebmCAtLT5cblx0XHQ8IS0tIOi/memHjOaYrzQ4MHB45ZyG6KGo5bGP5bmV55qE6ZSu55uYIC0tPlxuICAgICAgICA8ZGl2IGlkPVwiZnVsbC1rZXlib2FyZFwiIGlmPVwie3trZXlib2FyZHR5cGUhPSdUOSd9fVwiIHN0eWxlPVwid2lkdGg6IDQ4MHB4O2hlaWdodDogMzIxcHg7XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL2JhY2syLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6N3B4O3dpZHRoOjQ2NnB4O2hlaWdodDo1MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaENuJylcIiBzaG93PVwie3tudW1GbGFnfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nY24nfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtX2pwJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nanAnfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9iaWdBLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyNjZweDtsZWZ0OjExOXB4O3dpZHRoOjEyMHB4O2hlaWdodDo0OHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaExvdycpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiB1cHBlckZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL0EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoVXBwZXInKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIXVwcGVyRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6NzhweDt3aWR0aDozMjRweDtoZWlnaHQ6NTJweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYigzOCwzOCwzOCk7Ym9yZGVyLXJhZGl1czogMTJweDtib3JkZXI6IDNweCBzb2xpZCAjMzMzMzMzXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmICFudW1GbGFnfX1cIj48L2Rpdj5cbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjQzcHg7bGVmdDozNTVweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL2Rvd24ucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cbiAgICAgICAgICA8IS0tIOW4puWPmOmHj+eahOebuOWvuei3r+W+hOWcqCBhaW90LXRvb2tpdCAyLjAuNCDkuK3kv67lpI0gLS0+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL3t7bGFuZ319LnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6N3B4O3dpZHRoOjY3cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnbGFuZycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZyE9J2pwJ319XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvanAucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM4cHg7bGVmdDo3cHg7d2lkdGg6NjdweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdsYW5nJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2pwJ319XCIgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDotNHB4O2xlZnQ6NzhweDt3aWR0aDozMjRweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGN2YWx9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWx0ZXh0XCIgc3R5bGU9XCJ3aWR0aDoyOTZweDtcIj4ge3tjdmFsfX1fIDwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6ODBweDt3aWR0aDoyNzdweFwiIHNob3c9XCJ7eyhsYW5nID09PSAnY24nIHx8IGxhbmcgPT09ICdqcCcpICYmICFudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2N2YWxMaXN0fX1cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHNob3c9J3t7cmVzdWx0TGlzdC5sZW5ndGggPiAkaWR4fX0nIGNsYXNzPVwiY2FsYnRuMFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7cmVzdWx0TGlzdFskaWR4XX19XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6ODBweDt3aWR0aDozMjBweDtoZWlnaHQ6NTJweDthbGlnbi1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bScpXCIgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzEyM19ib2FyZGxlc3MucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIOi/memHjOS9v+eUqHNob3fkvJrlr7zoh7Tmr4/mrKHovpPlhaXpg73kvJrliqDovb3lhajpg6jlgJnpgInliJfooajvvIzlvojljaEgLS0+XG4gICAgICAgICAgPGxpc3QgY2xhc3M9XCJsaXN0M1wiIGlmPVwie3tkb3duRmxhZz09PSdkb3duJ319XCI+XG4gICAgICAgICAgICA8bGlzdC1pdGVtIHR5cGU9XCJ3YWl0aW5nUm93czYydDlcIiBjbGFzcz1cIml0ZW0zXCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2x1bW4gY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6NTJweDtcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjYWxidG4wXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tpdGVtfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KGl0ZW0pXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTVweDtsZWZ0OjhweDt3aWR0aDo0NjRweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvUS5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1EnKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbDYyJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvUC5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1AnKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTUycHg7bGVmdDoyM3B4O3dpZHRoOjQzOHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycmJiFudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9idEEucG5nXCIgc3R5bGU9XCJ3aWR0aDo2MHB4O2hlaWdodDo1MnB4O21hcmdpbi1yaWdodDogNHB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCdBJylcIiAvPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGw2MiddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL0wucG5nXCIgc3R5bGU9XCJ3aWR0aDo2MHB4O2hlaWdodDo1MnB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCdMJylcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwOXB4O2xlZnQ6NTZweDt3aWR0aDozNjhweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvWi5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1onKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbDYyJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvTS5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ00nKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTVweDtsZWZ0OjhweDt3aWR0aDo0NjRweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xLnBuZ1wiIHN0eWxlPVwid2lkdGg6NTRweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnMScpXCIgLz5cbiAgICAgICAgICAgIDx0ZXh0IGlmPVwie3shbnVtRmxhZ19qcH19XCIgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242MiddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgZWxzZSBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbjYyX2pwJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMC5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJzAnKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTUycHg7bGVmdDoyM3B4O3dpZHRoOjQzOHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzItMS5wbmdcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ34nKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBpZj1cInt7IW51bUZsYWdfanB9fVwiIGNsYXNzPVwiY2FsYnRuZnVsbFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduNjInXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGVsc2UgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242Ml9qcCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzItMi5wbmdcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJz8nKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjA5cHg7bGVmdDo1NnB4O3dpZHRoOjM2OHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzMtMS5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJygnKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBpZj1cInt7IW51bUZsYWdfanB9fVwiIGNsYXNzPVwiY2FsYnRuZnVsbFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduNjInXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGVsc2UgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242Ml9qcCddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzMtMi5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgScpXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvZGVsLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6NDA2cHg7d2lkdGg6NjdweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnIH19XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvc3BhY2UucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MjQycHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC80LTIucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MjQycHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgicpXCIgc2hvdz1cInt7bnVtRmxhZyB9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzQtMS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjY2cHg7bGVmdDoxMTlweDt3aWR0aDoxMjBweDtoZWlnaHQ6NDhweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgn77yMJylcIiBzaG93PVwie3tudW1GbGFnICYmICFudW1GbGFnX2pwfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC80LTEucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgScpXCIgc2hvdz1cInt7bnVtRmxhZ19qcH19XCIgLz5cbiAgICAgICAgICA8aW1nIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyMDRweDtsZWZ0Ojc4cHg7XCIgc3JjPVwiLi9hc3NldHMvZnVsbC91cC5wbmdcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdkb3duJylcIiBzaG93PVwie3tkb3duRmxhZz09PSdkb3duJ319XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0g5Lmd6ZSuIC0tPlxuICAgICAgICA8ZGl2IGVsc2Ugc3R5bGU9XCJ3aWR0aDogNDgwcHg7aGVpZ2h0OiAzMjFweDtcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Q5L2JhY2syLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozNXB4O2xlZnQ6MzFweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoQ24nKVwiIHNob3c9XCJ7e251bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozMXB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW0nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdjbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS9iaWdBLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDo5OXB4O2xlZnQ6MzFweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTG93JylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIHVwcGVyRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Q5L2EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozMXB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hVcHBlcicpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nfX1cIiAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM1cHg7bGVmdDo5NXB4O3dpZHRoOjI5MHB4O2hlaWdodDo2MHB4O2JhY2tncm91bmQtY29sb3I6cmdiKDM4LDM4LDM4KTtib3JkZXItcmFkaXVzOiA5OTlweDtib3JkZXI6IDNweCBzb2xpZCAjMzMzMzMzXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmICFudW1GbGFnfX1cIj48L2Rpdj5cbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjQ0cHg7bGVmdDozMzhweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL2Rvd24ucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cbiAgICAgICAgICA8IS0tIOW4puWPmOmHj+eahOebuOWvuei3r+W+hOWcqCBhaW90LXRvb2tpdCAyLjAuNCDkuK3kv67lpI0gLS0+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS97e2xhbmd9fS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjMxcHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIGlmPVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnfX1cIiAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOi00cHg7bGVmdDo5NXB4O3dpZHRoOjE0NXB4O2hlaWdodDo0MHB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgY3ZhbH19XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbHRleHRcIiBzdHlsZT1cIndpZHRoOjE0NXB4O1wiPiB7e2N2YWx9fV8gPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZ319XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOi00cHg7bGVmdDoyNDBweDt3aWR0aDoxNDVweDtoZWlnaHQ6NDBweDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7d2FpdGluZ0xpc3R9fVwiIGNsYXNzPVwid2FpdGluZy1rZXlzXCIgc3R5bGU9XCJjb2xvcjp7eyRpZHg9PT13YWl0aW5nSW5kZXggPyAncmdiKDEzLDEzMiwyNTUpJyA6ICd3aGl0ZSd9fTtcIiBAY2xpY2s9XCJvblNlbGVjdFdhaXRpbmcoJGlkeClcIj57e3dhaXRpbmdMaXN0WyRpZHhdfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzlweDtsZWZ0OjEwNXB4O3dpZHRoOjIzM3B4XCIgc2hvdz1cInt7bGFuZyA9PT0gJ2NuJyAmJiAhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2x1bW4gY2VudGVyXCIgZm9yPVwie3tjdmFsTGlzdH19XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBzaG93PSd7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19JyBjbGFzcz1cImNhbGJ0bjBcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7e3Jlc3VsdExpc3RbJGlkeF19fVwiIEBjbGljaz1cIm9uUnNTZWxlY3QocmVzdWx0TGlzdFskaWR4XSlcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0Ojk1cHg7d2lkdGg6MjkwcHg7aGVpZ2h0OjYwcHg7YWxpZ24tY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXJcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nZW4nfX1cIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW0nKVwiID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjNfYm9hcmRsZXNzLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSDov5nph4zkvb/nlKhzaG935Lya5a+86Ie05q+P5qyh6L6T5YWl6YO95Lya5Yqg6L295YWo6YOo5YCZ6YCJ5YiX6KGo77yM5b6I5Y2hIC0tPlxuICAgICAgICAgIDxsaXN0IGNsYXNzPVwibGlzdDNcIiBpZj1cInt7ZG93bkZsYWc9PT0nZG93bid9fVwiPlxuICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2MmZ1bGxcIiBjbGFzcz1cIml0ZW0zXCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2x1bW4gY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6NTJweDtcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjYWxidG4wXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tpdGVtfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KGl0ZW0pXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTlweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCdzZWxlY3QnKVwiPumAieaLqTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjE2M3B4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyMjdweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzcnKVwiPjc8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzgnKVwiPjg8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzknKVwiPjk8L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTlweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzQnKVwiPjQ8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzUnKVwiPjU8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzYnKVwiPjY8L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTYzcHg7bGVmdDo5NXB4O3dpZHRoOjI5NHB4O2hlaWdodDo2MHB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCcxJylcIj4xPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCcyJylcIj4yPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCczJylcIj4zPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIyN3B4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgn77yMJylcIj7vvIw8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzAnKVwiPjA8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgicpXCI+44CCPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvdDkvZGVsLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozNXB4O2xlZnQ6Mzg5cHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvdDkvc3BhY2UucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozODlweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwNHB4O2xlZnQ6NzhweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL3VwLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSDmlrnlsY82NyAtLT5cbiAgICAgIDxkaXYgaWY9XCJ7e3NjcmVlbnR5cGU9PT0ncmVjdCd9fVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAyNTVweDtmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI+XG4gICAgICAgIDwhLS0g5Lmd6ZSu5Lit5paHIC0tPlxuICAgICAgICA8ZGl2IGlmPVwie3trZXlib2FyZHR5cGU9PSdUOScgJiYgIW51bUZsYWd9fVwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMXB4O3dpZHRoOjEwMCU7aGVpZ2h0OjI3NnB4O2p1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0b3A6NzdweDtoZWlnaHQ6MTg5cHg7d2lkdGg6MTAwJTthbGlnbi1pdGVtczogc3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtwYWRkaW5nOjZweCAzcHhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dzLXJlY3QtdDlcIj5cbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OSBjYWxidG50OS1yZWN0XCIgQGNsaWNrPVwib25TZWxlY3QoJ3NlbGVjdCcpXCI+XG4gICAgICAgICAgICAgICAg6YCJ5oupXG4gICAgICAgICAgICAgICAgPHNwYW4gaWY9XCJ7e3dhaXRpbmdMaXN0Lmxlbmd0aCAhPSAwfX1cIiBjbGFzcz1cIndhaXRpbmcta2V5c1wiIHN0eWxlPVwiY29sb3I6cmdiKDEzLDEzMiwyNTUpO1wiIEBjbGljaz1cIm9uU2VsZWN0V2FpdGluZyh3YWl0aW5nSW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICB7e3dhaXRpbmdMaXN0W3dhaXRpbmdJbmRleF0udG9VcHBlckNhc2UoKX19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDkgY2FsYnRudDktcmVjdFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dzLXJlY3QtdDlcIj5cbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OSBjYWxidG50OS1yZWN0XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd3MtcmVjdC10OVwiPlxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5IGNhbGJ0bnQ5LXJlY3RcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGVsc2Ugc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTExcHg7d2lkdGg6MTAwJTtoZWlnaHQ6Mjc2cHg7anVzdGlmeS1jb250ZW50OiBjZW50ZXJcIj5cbiAgICAgICAgICA8cHJvZ3Jlc3MgcGVyY2VudD1cInt7cGVyY2VudDY3fX1cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTogMTJweDt3aWR0aDo4MHB4O2NvbG9yOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjZweDtsYXllci1jb2xvcjojMjYyNjI2O1wiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgPHNjcm9sbCBpZD1cImtleWJvYXJkNjdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgb25zY3JvbGw9XCJoYW5kZWxTY3JvbGxcIj5cbiAgICAgICAgICAgIDxkaXYgaWY9XCJ7eyFudW1GbGFnfX1cIiBzdHlsZT1cImxlZnQ6IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMHB4O21hcmdpbi10b3A6IDBweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMnB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogNjRweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8aW1nIHN0YXRpYyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL3NwYWNlLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3NwYWNlJylcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZj1cInt7bnVtRmxhZyAmJiAhbnVtRmxhZ19qcH19XCIgc3R5bGU9XCJsZWZ0OiA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlmPVwie3tudW1GbGFnX2pwfX1cIiBzdHlsZT1cImxlZnQ6IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMHB4O21hcmdpbi10b3A6IDBweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduX2pwJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMnB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbl9qcCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogNjRweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ25fanAnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3Njcm9sbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRvcDo2cHg7IHBhZGRpbmc6MCA2cHg7XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2NuLnBuZ1wiIHN0eWxlPVwicGFkZGluZzogNnB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdsYW5nJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2NuJ319XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvanAucG5nXCIgc3R5bGU9XCJwYWRkaW5nOjZweDt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIGlmPVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nanAnfX1cIiAvPlxuICAgICAgICAgIDxkaXYgaWY9XCJ7eyhsYW5nID09PSAnY24nIHx8IGxhbmcgPT09ICdqcCcpICYmICFudW1GbGFnfX1cIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7ZmxleDogMTtoZWlnaHQ6IDYwcHg7YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O2JvcmRlci1jb2xvcjogIzMzMzMzMzsgYm9yZGVyLXdpZHRoOiAzcHg7IGJvcmRlci1yYWRpdXM6IDEwMHB4O2ZsZXgtZGlyZWN0aW9uOiByb3c7YWxpZ24taXRlbXM6Y2VudGVyXCI+XG4gICAgICAgICAgICA8c2Nyb2xsIGlkPVwiY3ZhbFdhaXRpbmdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDogODUlO2hlaWdodDogNDJweDtcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O2hlaWdodDogNDJweDtwYWRkaW5nLWxlZnQ6MjBweDtwYWRkaW5nLXJpZ2h0OjIwcHhcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjAyXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjEwcHhcIiBAY2xpY2s9XCJwdXNoQ3ZhbFwiPnt7Y3ZhbH19PC90ZXh0PlxuICAgICAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7Y3ZhbExpc3R9fVwiIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19XCIgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiPnt7cmVzdWx0TGlzdFskaWR4XX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2Nyb2xsPlxuICAgICAgICAgICAgPGltZyBpZj1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAwfX1cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3JpZ2h0OiA4cHg7IHdpZHRoOiA2MHB4O2hlaWdodDogNDBweDtcIiBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2Rvd24yLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsLzEyMy5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OjZweDtwYWRkaW5nOjZweDt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bV9qcCcpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdqcCd9fVwiIC8+XG4gICAgICAgIFxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC9lbi5wbmdcIiBzdHlsZT1cInBhZGRpbmc6IDZweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnbGFuZycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2JpZ0EucG5nXCIgc3R5bGU9XCJwYWRkaW5nOiA2cHg7bWFyZ2luLWxlZnQ6IDZweDt3aWR0aDo5NHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaExvdycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nJiYgIW51bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2EucG5nXCIgc3R5bGU9XCJwYWRkaW5nOiA2cHg7bWFyZ2luLWxlZnQ6IDZweDt3aWR0aDo5NHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaFVwcGVyJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nJiYgIW51bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsLzEyMy5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7cGFkZGluZzogNnB4O21hcmdpbi1sZWZ0OiA2cHg7d2lkdGg6IDk0cHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bScpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2JhY2syLnBuZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDZweDtwYWRkaW5nOiA2cHg7d2lkdGg6IDE1OXB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hDbicpXCIgaWY9XCJ7e251bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBpZj1cInt7IW51bUZsYWd9fVwiIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvZGVsLnBuZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDZweDtwYWRkaW5nOiA2cHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIC8+XG4gICAgICAgICAgPGltZyBlbHNlIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvZGVsMi5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7cGFkZGluZzogNnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIOi/memHjOS9v+eUqHNob3fkvJrlr7zoh7Tmr4/mrKHovpPlhaXpg73kvJrliqDovb3lhajpg6jlgJnpgInliJfooajvvIzlvojljaEgLS0+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O3RvcDogMHB4O3dpZHRoOiAxMDAlO2hlaWdodDogMjUycHg7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyXCIgaWY9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIj5cbiAgICAgICAgICA8ZGl2IHN0YXRpYyBjbGFzcz1cImxpc3Q2N1wiPlxuICAgICAgICAgICAgPGxpc3Qgc3RhdGljIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIj5cbiAgICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2N1wiIGNsYXNzPVwiaXRlbTY3XCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNhbGJ0bjAyXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tpdGVtfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KGl0ZW0pXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tdG9wOjVweFwiIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvdXAyLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIOiDtuWbiuWxjzY2IC0tPlxuICAgICAgPGRpdiBpZj1cInt7c2NyZWVudHlwZT09PSdwaWxsLXNoYXBlZCd9fVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAzMDVweFwiPlxuICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MHB4O3RvcDozNHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjI3NnB4O1wiPlxuICAgICAgICAgIDxwcm9ncmVzcyBwZXJjZW50PVwie3szMCtwZXJjZW50NjZ9fVwiIHR5cGU9XCJhcmNcIiBzdHlsZT1cInN0YXJ0LWFuZ2xlOjIwNGRlZzt0b3RhbC1hbmdsZTotNDhkZWc7d2lkdGg6MTg4cHg7aGVpZ2h0OjE4OHB4O3RvcDo4MnB4O2xlZnQ6MnB4O3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjZweDtsYXllci1jb2xvcjojMjYyNjI2O21hcmdpbi1sZWZ0OiB7eyhzY3JlZW5XaWR0aCAtIDE5MikvMn19cHg7XCI+PC9wcm9ncmVzcz5cbiAgICAgICAgICA8c2Nyb2xsIGlkPVwia2V5Ym9hcmQ2NlwiIHNjcm9sbC14PVwie3t0cnVlfX1cIiBvbnNjcm9sbD1cImhhbmRlbFNjcm9sbFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiB7eyhzY3JlZW5XaWR0aCAtIDE5MikvMn19cHg7cGFkZGluZy1yaWdodDoge3soc2NyZWVuV2lkdGggLSAxOTIpLzJ9fXB4O1wiPlxuICAgICAgICAgICAgPGRpdiBpZj1cInt7IW51bUZsYWd9fVwiIHN0eWxlPVwibGVmdDogM3B4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICAgIDxpbWcgc3RhdGljIHNyYz1cIi4vYXNzZXRzL2FyYy9zcGFjZS5wbmdcIiBzdHlsZT1cIndpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzcGFjZScpXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWY9XCJ7e251bUZsYWcgJiYgIW51bUZsYWdfanB9fVwiIHN0eWxlPVwibGVmdDogM3B4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZj1cInt7bnVtRmxhZ19qcH19XCIgc3R5bGU9XCJsZWZ0OiAzcHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbl9qcCddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ25fanAnXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduX2pwJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zY3JvbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiB7eyhzY3JlZW5XaWR0aCAtIDE5MikvMn19cHg7dG9wOiAwcHg7d2lkdGg6IDE5MnB4O2hlaWdodDogMTEwcHg7XCI+IFxuICAgICAgICAgIDxpbWcgc3RhdGljIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDNweDt0b3A6IDQ3cHg7d2lkdGg6IDE4NnB4O2hlaWdodDogNjBweDtcIiBzcmM9XCIuL2Fzc2V0cy9hcmMvc2VhcmNoLnBuZ1wiIC8+XG4gICAgICAgICAgPHNjcm9sbCBpZD1cImN2YWxXYWl0aW5nXCIgc2Nyb2xsLXg9XCJ7e3RydWV9fVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDE1cHg7dG9wOiA1NnB4O3dpZHRoOiAxNDRweDtoZWlnaHQ6IDQycHg7XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDBweDt0b3A6IDBweDtoZWlnaHQ6IDQycHg7cGFkZGluZy1yaWdodDoyMHB4XCI+XG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuMDJcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6MTBweFwiIEBjbGljaz1cInB1c2hDdmFsXCI+e3tjdmFsfX08L3RleHQ+XG4gICAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7Y3ZhbExpc3R9fVwiIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19XCIgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiPnt7cmVzdWx0TGlzdFskaWR4XX19PC90ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zY3JvbGw+XG4gICAgICAgICAgPGltZyBzaG93PVwie3tyZXN1bHRMaXN0Lmxlbmd0aCA+IDB9fVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDEyMHB4O3RvcDogNTdweDt3aWR0aDogNjBweDtoZWlnaHQ6IDQwcHg7XCIgc3JjPVwiLi9hc3NldHMvYXJjL2Rvd24yLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XG4gICAgICAgICAgPCEtLSDluKblj5jph4/nmoTnm7jlr7not6/lvoTlnKggYWlvdC10b29raXQgMi4wLjQg5Lit5L+u5aSNIC0tPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjL3t7bGFuZ319LnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDowcHg7bGVmdDo5cHg7d2lkdGg6IDQ4cHg7aGVpZ2h0OiA0MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgIW51bUZsYWdfanB9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hcmMvYmFjazIucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjBweDtsZWZ0OjlweDt3aWR0aDogNDhweDtoZWlnaHQ6IDQycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoQ24nKVwiIHNob3c9XCJ7e251bUZsYWcgJiYgbGFuZz09PSdjbicgfHxudW1GbGFnX2pwICYmIGxhbmc9PT0nanAnIH19XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2FyYy8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogNzBweDt0b3A6IDBweDt3aWR0aDogNTJweDtoZWlnaHQ6IDQycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nY24nfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjLzEyMy5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiA3MHB4O3RvcDogMHB4O3dpZHRoOiA1MnB4O2hlaWdodDogNDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW1fanAnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWdfanAgJiYgbGFuZz09PSdqcCd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hcmMvYmlnQS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6NzJweDt3aWR0aDo0OHB4O2hlaWdodDo0MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaExvdycpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiB1cHBlckZsYWcgJiYgbGFuZz09PSdlbicgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjL2EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjBweDtsZWZ0OjcycHg7d2lkdGg6NDhweDtoZWlnaHQ6NDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hVcHBlcicpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nIH19XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2FyYy9kZWwucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMTM1cHg7dG9wOiAwcHg7d2lkdGg6IDQ4cHg7aGVpZ2h0OiA0MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIOi/memHjOS9v+eUqHNob3fkvJrlr7zoh7Tmr4/mrKHovpPlhaXpg73kvJrliqDovb3lhajpg6jlgJnpgInliJfooajvvIzlvojljaEgLS0+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA0N3B4O3dpZHRoOiAxMDAlO2hlaWdodDogMjYzcHg7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XCIgaWY9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IHt7KHNjcmVlbldpZHRoIC0gMTkyKS8yfX1weDt3aWR0aDogMTkycHg7aGVpZ2h0OiAyNjNweDtcIj4gXG4gICAgICAgICAgICA8bGlzdCBzdGF0aWMgY2xhc3M9XCJsaXN0NjZcIj5cbiAgICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2NlwiIGNsYXNzPVwiaXRlbTY2XCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNhbGJ0bjBcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7e2l0ZW19fVwiIEBjbGljaz1cIm9uUnNTZWxlY3QoaXRlbSlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgIDxpbWcgc3RhdGljIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoxOTZweDtsZWZ0OjU2cHg7d2lkdGg6IDgwcHg7aGVpZ2h0OiA2MHB4O1wiIHNyYz1cIi4vYXNzZXRzL2FyYy91cDIucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHZpYnJhdG9yIGZyb20gXCJAc3lzdGVtLnZpYnJhdG9yXCI7XG5pbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJ1xuaW1wb3J0IHsgU2ltcGxlSW5wdXRNZXRob2QgfSBmcm9tIFwiLi9hc3NldHMvZGljVXRpbC5qc1wiO1xuZnVuY3Rpb24gZG9TZWFyY2hEaWMod29yZCwgbGFuZywgY2IpIHtcbiAgaWYgKCF3b3JkKSB7XG4gICAgY2IoW10pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IFNpbXBsZUlucHV0TWV0aG9kLmdldEhhbnppKHdvcmQsIGxhbmcpO1xuICBjYihBcnJheS5pc0FycmF5KHJlc3VsdCkgJiYgcmVzdWx0WzBdID8gcmVzdWx0WzBdIDogW10pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMYXN0KHQpIHtcbiAgaWYgKHQpIHtcbiAgICByZXR1cm4gdC5zdWJzdHIoMCwgdC5sZW5ndGggLSAxKTtcbiAgfVxuICByZXR1cm4gXCJcIjtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBoaWRlOiB7XG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAga2V5Ym9hcmR0eXBlOiB7XG4gICAgICBkZWZhdWx0OiBcIlFXRVJUWVwiLFxuICAgIH0sXG4gICAgbWF4bGVuZ3RoOiB7XG4gICAgICBkZWZhdWx0OiA1LFxuICAgIH0sXG4gICAgdmlicmF0ZW1vZGU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICBzY3JlZW50eXBlOiB7XG4gICAgICBkZWZhdWx0OiBcImNpcmNsZVwiLFxuICAgIH0sXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBjdmFsOiBcIlwiLFxuICAgIHJlc3VsdExpc3Q6IFtdLFxuICAgIHJlc3VsdExpc3QyOiBbXSxcbiAgICB3YWl0aW5nTGlzdDogW10sXG4gICAgd2FpdGluZ0luZGV4OiAtMSxcbiAgICBsYXN0V2FpdGluZ1N0cjogXCJcIixcbiAgICBkb3duRmxhZzogXCJcIixcbiAgICBsYW5nOiBcImVuXCIsXG4gICAgbnVtRmxhZzogZmFsc2UsXG4gICAgbnVtRmxhZ19qcDogZmFsc2UsXG4gICAgdXBwZXJGbGFnOiBmYWxzZSxcbiAgICBjdmFsTGlzdDogWzAsIDEsIDIsIDMsIDRdLFxuICAgIHBlcmNlbnQ2NzogNTIsXG4gICAgcGVyY2VudDY2OiAwLFxuICAgIC8vIOmSiOWvuXNjcmVlblNoYXBl5Li6cmVjdOeahOiuvuWkh++8jOS8muiHquWKqOiOt+WPlnNjcmVlbldpZHRo5bm257uR5a6a5Yiw5qC5ZGl2XG4gICAgLy8g6L+Z5qC35L6/6IO95ZCM5pe26YCC6YWNbjY35ZKMbzY155Sa6Iez5piv5ZCO57ut6K6+5aSH77yM5L2G5a6e6ZmF5pWI5p6c5Y+v6IO95Y+XZGVzaWduV2lkdGjlvbHlk41cbiAgICBzY3JlZW5XaWR0aDogMzM2LFxuICAgIGtleXM6IHtcbiAgICAgIGZ1bGw6IFtcbiAgICAgICAgW1wiUVwiLCBcIldcIiwgXCJFXCIsIFwiUlwiLCBcIlRcIiwgXCJZXCIsIFwiVVwiLCBcIklcIiwgXCJPXCIsIFwiUFwiXSxcbiAgICAgICAgW1wiQVwiLCBcIlNcIiwgXCJEXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSlwiLCBcIktcIiwgXCJMXCJdLFxuICAgICAgICBbXCJaXCIsIFwiWFwiLCBcIkNcIiwgXCJWXCIsIFwiQlwiLCBcIk5cIiwgXCJNXCJdLFxuICAgICAgXSxcbiAgICAgIHNpZ246IFtcbiAgICAgICAgW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiXSxcbiAgICAgICAgW1wiflwiLCBcIiFcIiwgXCJAXCIsIFwiI1wiLCBcIiVcIiwgXCLigJxcIiwgXCLigJ1cIiwgXCIqXCIsIFwiP1wiLCBcIi9cIl0sXG4gICAgICAgIFtcIihcIiwgXCIpXCIsIFwiLVwiLCBcIl9cIiwgXCI6XCIsIFwiO1wiLCBcIu+8jFwiLCBcIuOAglwiLCBcIi5cIl0sXG4gICAgICBdLFxuICAgICAgc2lnbl9qcDogW1xuICAgICAgICBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCJdLFxuICAgICAgICBbXCJ+XCIsIFwi4oCiXCIsIFwiQFwiLCBcIiNcIiwgXCIlXCIsIFwi44CMXCIsIFwi44CNXCIsIFwiKlwiLCBcIj9cIiwgXCIvXCJdLFxuICAgICAgICBbXCIoXCIsIFwiKVwiLCBcIi1cIiwgXCLigKZcIiwgXCI6XCIsIFwiO1wiLCBcIuOAgVwiLCBcIuOAglwiLCBcIiFcIl0sXG4gICAgICBdLFxuICAgICAgc2lnbjYyOiBbXG4gICAgICAgIFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxuICAgICAgICBbXCIhXCIsIFwiQFwiLCBcIiNcIiwgXCIlXCIsIFwi4oCcXCIsIFwi4oCdXCIsIFwiKlwiXSxcbiAgICAgICAgW1wiKVwiLCBcIi1cIiwgXCJfXCIsIFwiOlwiLCBcIjtcIl0sXG4gICAgICBdLFxuICAgICAgc2lnbjYyX2pwOiBbXG4gICAgICAgIFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxuICAgICAgICBbXCLigKJcIiwgXCJAXCIsIFwiI1wiLCBcIiVcIiwgXCLjgIxcIiwgXCLjgI1cIiwgXCIqXCJdLFxuICAgICAgICBbXCIpXCIsIFwiLVwiLCBcIuKAplwiLCBcIjpcIiwgXCI7XCJdLFxuICAgICAgXSxcbiAgICAgIGZ1bGw2MjogW1xuICAgICAgICBbXCJXXCIsIFwiRVwiLCBcIlJcIiwgXCJUXCIsIFwiWVwiLCBcIlVcIiwgXCJJXCIsIFwiT1wiXSxcbiAgICAgICAgW1wiU1wiLCBcIkRcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJKXCIsIFwiS1wiXSxcbiAgICAgICAgW1wiWFwiLCBcIkNcIiwgXCJWXCIsIFwiQlwiLCBcIk5cIl0sXG4gICAgICBdLFxuICAgICAgdDk6IFtcbiAgICAgICAgW1wiYWJjXCIsIFwiZGVmXCJdLFxuICAgICAgICBbXCJnaGlcIiwgXCJqa2xcIiwgXCJtbm9cIl0sXG4gICAgICAgIFtcInBxcnNcIiwgXCJ0dXZcIiwgXCJ3eHl6XCJdLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBvbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICBjb25zdCB0ZW1wQ3ZhbExpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhsZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wQ3ZhbExpc3QucHVzaChpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ZhbExpc3QgPSB0ZW1wQ3ZhbExpc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjcmVlbnR5cGUgPT09IFwicmVjdFwiIHx8IHRoaXMuc2NyZWVudHlwZSA9PT0gXCJwaWxsLXNoYXBlZFwiKSB7XG4gICAgICB0aGlzLmFkanVzdFNjcmVlbldpZHRoKCk7XG4gICAgfVxuICAgIHRoaXMuJHdhdGNoKFwiaGlkZVwiLCBcIndhdGNoSGlkZVByb3BzQ2hhbmdlXCIpO1xuICAgIHRoaXMuJHdhdGNoKFwibWF4bGVuZ3RoXCIsIFwid2F0Y2hNYXhMZW5ndGhQcm9wc0NoYW5nZVwiKTtcbiAgICB0aGlzLiR3YXRjaChcImtleWJvYXJkdHlwZVwiLCBcIndhdGNoS2V5Ym9hcmRUeXBlUHJvcHNDaGFuZ2VcIik7XG4gIH0sXG4gIGFkZEFsbFR4dCh0eHQpIHtcbiAgICB0aGlzLiRlbWl0KFwiY29tcGxldGVcIiwgeyBjb250ZW50OiB0eHQgfSk7XG4gIH0sXG4gIG9uUnNTZWxlY3QodHh0KSB7XG4gICAgdGhpcy5vblZpYnJhdGUoKTtcbiAgICB0aGlzLmN2YWwgPSBcIlwiO1xuICAgIHRoaXMuYWRkQWxsVHh0KHR4dCk7XG4gICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcbiAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgIHRoaXMuZG93bkZsYWcgPSBcIlwiO1xuICB9LFxuICBvbkJ0bkNsaWNrKHNpZ24pIHtcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIHN3aXRjaCAoc2lnbikge1xuICAgICAgY2FzZSBcIkFDXCI6XG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XG4gICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxhbmdcIjpcbiAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlS2V5Ym9hcmRcIiwge30pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgIGlmICh0aGlzLndhaXRpbmdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcbiAgICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3ZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jdmFsID0gZGVsZXRlTGFzdCh0aGlzLmN2YWwpO1xuICAgICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImRlbGV0ZVwiLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3BhY2VcIjpcbiAgICAgICAgdGhpcy5hZGRBbGxUeHQoXCIgXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIHRoaXMuZG93bkZsYWcgPSB0aGlzLmRvd25GbGFnID09PSBcImRvd25cIiA/IFwiXCIgOiBcImRvd25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nU3RyICE9IHNpZ24gJiYgdGhpcy5sYXN0V2FpdGluZ1N0cikge1xuICAgICAgICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIiB8fCB0aGlzLmxhbmcgPT09ICdqcCcpIHtcbiAgICAgICAgICAgIHRoaXMuY3ZhbCArPSB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudXBwZXJGbGFnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkQWxsVHh0KHRoaXMud2FpdGluZ0xpc3RbdGhpcy53YWl0aW5nSW5kZXhdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRBbGxUeHQodGhpcy53YWl0aW5nTGlzdFt0aGlzLndhaXRpbmdJbmRleF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XG4gICAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzd2l0Y2hOdW1cIjpcbiAgICAgICAgdGhpcy5udW1GbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1GbGFnX2pwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XG4gICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN3aXRjaE51bV9qcFwiOlxuICAgICAgICB0aGlzLm51bUZsYWcgPSB0cnVlO1xuICAgICAgICB0aGlzLm51bUZsYWdfanAgPSB0cnVlO1xuICAgICAgICB0aGlzLmN2YWwgPSBcIlwiO1xuICAgICAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xuICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzd2l0Y2hDblwiOlxuICAgICAgICB0aGlzLm51bUZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5udW1GbGFnX2pwID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN3aXRjaFVwcGVyXCI6XG4gICAgICAgIHRoaXMudXBwZXJGbGFnID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3dpdGNoTG93XCI6XG4gICAgICAgIHRoaXMudXBwZXJGbGFnID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNpZ24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5hZGRBbGxUeHQoc2lnbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMud2FpdGluZ0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nU3RyID09PSBzaWduKSB7XG4gICAgICAgICAgICAgIHRoaXMud2FpdGluZ0luZGV4Kys7XG4gICAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdJbmRleCA+PSB0aGlzLmxhc3RXYWl0aW5nU3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZyA9PT0gXCJjblwiIHx8IHRoaXMubGFuZyA9PT0gJ2pwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3ZhbCArPSB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cHBlckZsYWcpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQWxsVHh0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hZGRBbGxUeHQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0xpc3RbdGhpcy53YWl0aW5nSW5kZXhdLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmxhc3RXYWl0aW5nU3RyID0gc2lnbjtcbiAgICAgICAgICAgICAgdGhpcy53YWl0aW5nSW5kZXggPSAwO1xuICAgICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0ID0gc2lnbi5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0V2FpdGluZ1N0ciA9IHNpZ247XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0ID0gc2lnbi5zcGxpdChcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIGNsZWFyV2FpdGluZygpIHtcbiAgICB0aGlzLndhaXRpbmdMaXN0ID0gW107XG4gICAgdGhpcy53YWl0aW5nSW5kZXggPSAtMTtcbiAgICB0aGlzLmxhc3RXYWl0aW5nU3RyID0gXCJcIjtcbiAgfSxcbiAgcmVzZXRSZXNsdXRMaXN0KCkge1xuICAgIGxldCB3YXRpbmdTdHIgPSBcIlwiO1xuICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nU3RyICYmIHRoaXMubGFzdFdhaXRpbmdTdHJbdGhpcy53YWl0aW5nSW5kZXhdKSB7XG4gICAgICB3YXRpbmdTdHIgPSB0aGlzLmxhc3RXYWl0aW5nU3RyW3RoaXMud2FpdGluZ0luZGV4XTtcbiAgICB9XG4gICAgaWYgKCEodGhpcy5jdmFsICsgd2F0aW5nU3RyKSB8fCAodGhpcy5sYW5nICE9PSBcImNuXCIgJiYgdGhpcy5sYW5nICE9PSBcImpwXCIpKSB7XG4gICAgICB0aGlzLnJlc3VsdExpc3QgPSBbXTtcbiAgICAgIHRoaXMuc2V0UmVzdWx0TGlzdEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdldFJlc3VsdEJ5V29yZCh0aGlzLmN2YWwgKyB3YXRpbmdTdHIpO1xuICB9LFxuICBzZXRSZXN1bHRMaXN0QWxsKCkge1xuICAgIHRoaXMucmVzdWx0TGlzdDIgPSBbXTtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXkucHVzaCh0aGlzLnJlc3VsdExpc3RbaV0pO1xuICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gcGFyc2VJbnQodGhpcy5tYXhsZW5ndGgpKSB7XG4gICAgICAgIHRoaXMucmVzdWx0TGlzdDIucHVzaChhcnJheSk7XG4gICAgICAgIGFycmF5ID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcnJheS5sZW5ndGggPiAwICYmIGFycmF5Lmxlbmd0aCA8IHBhcnNlSW50KHRoaXMubWF4bGVuZ3RoKSkge1xuICAgICAgdGhpcy5yZXN1bHRMaXN0Mi5wdXNoKGFycmF5KTtcbiAgICB9XG4gIH0sXG4gIGdldFJlc3VsdEJ5V29yZCh2YWwpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBkb1NlYXJjaERpYyh2YWwsIHRoYXQubGFuZywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoYXQucmVzdWx0TGlzdCA9IGRhdGE7XG4gICAgICB0aGF0LnNldFJlc3VsdExpc3RBbGwoKTtcbiAgICB9KTtcbiAgfSxcbiAgb25TZWxlY3QobnVtKSB7XG4gICAgdGhpcy4kZW1pdChcImtleURvd25cIiwgeyBjb250ZW50OiBudW0gfSk7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmR0eXBlID09PSBcIlQ5XCIgJiYgdGhpcy5zY3JlZW50eXBlICE9PSBcInBpbGwtc2hhcGVkXCIpIHtcbiAgICAgIHRoaXMub25CdG5DbGljayhudW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIGlmICgodGhpcy5sYW5nID09PSAnY24nIHx8IHRoaXMubGFuZyA9PT0gJ2pwJykgICYmICF0aGlzLm51bUZsYWcpIHtcbiAgICAgIHRoaXMuY3ZhbCArPSBudW0udG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gXCJlblwiICYmICF0aGlzLm51bUZsYWcpIHtcbiAgICAgIGlmICh0aGlzLnVwcGVyRmxhZykge1xuICAgICAgICB0aGlzLmFkZEFsbFR4dChudW0udG9VcHBlckNhc2UoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZEFsbFR4dChudW0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQWxsVHh0KG51bSk7XG4gICAgfVxuICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gIH0sXG4gIG9uU2VsZWN0V2FpdGluZyhudW0pIHtcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xuICAgICAgdGhpcy5jdmFsICs9IHRoaXMud2FpdGluZ0xpc3RbbnVtXS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy51cHBlckZsYWcpIHtcbiAgICAgICAgdGhpcy5hZGRBbGxUeHQodGhpcy53YWl0aW5nTGlzdFtudW1dLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRBbGxUeHQodGhpcy53YWl0aW5nTGlzdFtudW1dLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xuICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gIH0sXG4gIHdhdGNoSGlkZVByb3BzQ2hhbmdlKG5ld1YsIG9sZFYpIHtcbiAgICB0aGlzLiRlbWl0KFwidmlzaWJpbGl0eUNoYW5nZVwiLCB7IHZpc2libGU6IG5ld1YgfSk7XG4gIH0sXG4gIHdhdGNoTWF4TGVuZ3RoUHJvcHNDaGFuZ2UobmV3Viwgb2xkVikge1xuICAgIGlmIChuZXdWKSB7XG4gICAgICBjb25zdCB0ZW1wQ3ZhbExpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VjsgaSsrKSB7XG4gICAgICAgIHRlbXBDdmFsTGlzdC5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdmFsTGlzdCA9IHRlbXBDdmFsTGlzdDtcbiAgICB9XG4gIH0sXG4gIHdhdGNoS2V5Ym9hcmRUeXBlUHJvcHNDaGFuZ2UobmV3Viwgb2xkVikge1xuICAgIGlmIChuZXdWID09PSBcIlQ5XCIgJiYgdGhpcy5sYW5nID09PSBcImpwXCIpIHtcbiAgICAgIHRoaXMubGFuZyA9IFwiY25cIjtcbiAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xuICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcbiAgICB9XG4gIH0sXG4gIG9uVmlicmF0ZSgpIHtcbiAgICBpZiAodGhpcy52aWJyYXRlbW9kZSAhPSBcIlwiKSB7XG4gICAgICB2aWJyYXRvci52aWJyYXRlKHsgbW9kZTogdGhpcy52aWJyYXRlbW9kZSB9KTtcbiAgICB9XG4gIH0sXG4gIGhhbmRlbFNjcm9sbChldmVudCkge1xuICAgIGxldCBwZXJjZW50VGVtcDY3ID0gKGV2ZW50LnNjcm9sbFggLyA2MzYpICogMTAwICsgNTIuODtcbiAgICB0aGlzLnBlcmNlbnQ2NyA9IHBhcnNlSW50KHBlcmNlbnRUZW1wNjcgPD0gMTAwID8gcGVyY2VudFRlbXA2NyA6IDEwMCk7XG4gICAgbGV0IHBlcmNlbnRUZW1wNjYgPSAoZXZlbnQuc2Nyb2xsWCAvIDYzMykgKiAxMDA7XG4gICAgdGhpcy5wZXJjZW50NjYgPSBwYXJzZUludChwZXJjZW50VGVtcDY2IDw9IDEwMCA/IHBlcmNlbnRUZW1wNjYgOiAxMDApO1xuICB9LFxuICBwdXNoQ3ZhbCgpIHtcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIGxldCB0ZW1wID0gdGhpcy5jdmFsO1xuICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcbiAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgIHRoaXMuYWRkQWxsVHh0KHRlbXApO1xuICB9LFxuICBhZGp1c3RTY3JlZW5XaWR0aCgpe1xuICAgIGRldmljZS5nZXRJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSBkYXRhLnNjcmVlbldpZHRoO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnBhZ2Uge1xuXHR3aWR0aDoxMDAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHRib3R0b206MFxufVxuLml0ZW0ge1xuXHRoZWlnaHQ6NTJweDtcblx0ZmxleDoxXG59XG4uY2FsYnRuMCB7XG5cdGNvbG9yOiNmZmY7XG5cdGZvbnQtc2l6ZToyOHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMzgsMzgsMCk7XG5cdGJvcmRlci1yYWRpdXM6MDtcblx0aGVpZ2h0OjUycHg7XG5cdHdpZHRoOjUycHg7XG5cdHRleHQtYWxpZ246Y2VudGVyXG59XG4uY2FsYnRuMDIge1xuXHRjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMzgsMzgsMCk7XG5cdGJvcmRlci1yYWRpdXM6MHB4O1xuXHRmb250LXNpemU6MzJweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGhlaWdodDo0MnB4O1xufVxuLmNhbGJ0bmZ1bGwge1xuXHRjb2xvcjojZmZmO1xuXHRmb250LXNpemU6MjRweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xuXHRib3JkZXItcmFkaXVzOjEycHg7XG5cdG1hcmdpbi1yaWdodDo0cHg7XG5cdGhlaWdodDo1MnB4O1xuXHR3aWR0aDo0MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpXG59XG4uY2FsYnRudDkge1xuXHRjb2xvcjojZmZmO1xuXHRmb250LXNpemU6MjVweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xuXHRib3JkZXItcmFkaXVzOjk5OXB4O1xuXHRtYXJnaW4tcmlnaHQ6NHB4O1xuXHR3aWR0aDo5NHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJvcmRlcjozcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KVxufVxuLmNhbHRleHQge1xuXHR0ZXh0LWFsaWduOmxlZnQ7XG5cdGxpbmUtaGVpZ2h0OjM4cHg7XG5cdGxpbmVzOjE7XG5cdHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG5cdGNvbG9yOiMwZDg0ZmY7XG5cdGhlaWdodDo0NXB4O1xuXHRmb250LXNpemU6MjhweDtcblx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRmb250LXdlaWdodDpib2xkO1xuXHRwYWRkaW5nLWxlZnQ6OHB4XG59XG4ubGlzdDMge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjM4cHg7XG5cdGxlZnQ6NzhweDtcblx0d2lkdGg6MzI0cHg7XG5cdGhlaWdodDoxNjBweDtcblx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMyNjI2MjY7XG5cdGJvcmRlci1yYWRpdXM6MTJweFxufVxuLml0ZW0zIHtcblx0d2lkdGg6MzI0cHg7XG5cdGhlaWdodDo1MnB4XG59XG4uY2FsYnRuNjcge1xuXHRjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xuXHRmb250LXNpemU6MzJweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMzgsMzgsMzgpO1xuXHRtYXJnaW4tcmlnaHQ6NHB4O1xuXHR3aWR0aDo2MHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0Ym9yZGVyLXJhZGl1czozMHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xufVxuI2tleWJvYXJkNjcge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowcHg7XG5cdHRvcDo4MnB4O1xuXHR3aWR0aDoxMDAlO1xuXHRoZWlnaHQ6MTcwcHg7XG59XG4ja2V5Ym9hcmQ2NiB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRsZWZ0OjBweDtcblx0dG9wOjgycHg7XG5cdHdpZHRoOjEwMCU7XG5cdGhlaWdodDoxNzBweDtcbn1cbi5saXN0Njcge1xuXHR0b3A6MHB4O1xuXHR3aWR0aDo5Ni40JTtcblx0aGVpZ2h0OjE3MHB4O1xuXHRib3JkZXItcmFkaXVzOjMwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuXHRwYWRkaW5nOjBweCAxMHB4O1xufVxuLml0ZW02NyB7XG5cdGhlaWdodDo1MHB4O1xufVxuLmNhbGJ0bjY2IHtcblx0Y29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcblx0Zm9udC1zaXplOjMycHg7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiKDM4LDM4LDM4KTtcblx0bWFyZ2luLXJpZ2h0OjNweDtcblx0d2lkdGg6NjBweDtcblx0aGVpZ2h0OjYwcHg7XG5cdGJvcmRlci1yYWRpdXM6MzBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJvcmRlcjozcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbn1cbi5saXN0NjYge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDozcHg7XG5cdHRvcDowcHg7XG5cdHdpZHRoOjE4NnB4O1xuXHRoZWlnaHQ6MTg2cHg7XG5cdGJvcmRlci1yYWRpdXM6MzBweDtcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG5cdHBhZGRpbmc6MTBweFxufVxuLml0ZW02NiB7XG5cdGhlaWdodDo0MnB4O1xufVxuLndhaXRpbmcta2V5cyB7XG5cdHdpZHRoOjM2cHg7XG5cdGhlaWdodDo0MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5rZXlib2FyZC1yb3dzLXJlY3QtdDkge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FsYnRudDktcmVjdCB7XG4gIGZsZXg6MTtcbiAgaGVpZ2h0OjU1cHg7XG4gIG1hcmdpbjowIDNweDtcbiAgd2lkdGg6dW5zZXQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyMzApIGFuZCAobWF4LXdpZHRoOiAyMzUpIGFuZCAoc2hhcGU6IGNpcmNsZSkge1xuICAjZnVsbC1rZXlib2FyZCB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuOTYpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46MCAzMjFweDtcbiAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICB9XG59XG48L3N0eWxlPlxuIiwiLy8g57K+566A54mI77ya56e76Zmk5Lit5paHL+aXpeaWh+ivjeW6k++8jOS7heS/neeVmeaOpeWPo+WFvOWuueaAp1xubGV0IFNpbXBsZUlucHV0TWV0aG9kID0ge1xuICBkaWN0OiB7IHB5Mmh6OiB7fSwgcHkyaHoyOiB7fSB9XG59XG5cblNpbXBsZUlucHV0TWV0aG9kLmluaXREaWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIOivjeW6k+W3suWIoOmZpO+8jOS7heiLseaWh+i+k+WFpVxufVxuXG5TaW1wbGVJbnB1dE1ldGhvZC5nZXRIYW56aSA9IGZ1bmN0aW9uKHdvcmQsIGxhbmcpIHtcbiAgLy8g5LuF6Iux5paH5qih5byP77yM55u05o6l6L+U5Zue56m6XG4gIHJldHVybiBbXVxufVxuXG5TaW1wbGVJbnB1dE1ldGhvZC5nZXRQaW55aW4gPSBmdW5jdGlvbih3b3JkKSB7XG4gIHJldHVybiBcIlwiXG59XG5cbmV4cG9ydCB7IFNpbXBsZUlucHV0TWV0aG9kIH1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjxpbXBvcnQgbmFtZT1cImlucHV0LW1ldGhvZFwiIHNyYz1cIi4uLy4uL2NvbXBvbmVudHMvSW5wdXRNZXRob2QvSW5wdXRNZXRob2QudXhcIj48L2ltcG9ydD5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1hcmVhXCI+XG5cbiAgICAgIDwhLS0gPT09PT09PT09PSDmlrnlsY/pobbpg6jmoI8gPT09PT09PT09PSAtLT5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPnt7ICR0KFwidGVybWluYWwudGl0bGVcIikgfX08L3RleHQ+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9iYWNrLnBuZ1wiIEBjbGljaz1cImdvQmFja1wiIGNsYXNzPVwiaGQtYmFja1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tID09PT09PT09PT0g5ZG95Luk6L6T5YWl5qCPID09PT09PT09PT0gLS0+XG4gICAgICA8ZGl2IHNob3c9XCJ7e3Nob3dUb29sYmFyfX1cIiBjbGFzcz1cImlucHV0LWJhclwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImlucHV0LXByb21wdFwiPj48L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaW5wdXQtdGV4dFwiIG9uY2xpY2s9XCJ0b2dnbGVLZXlib2FyZFwiPnt7IGNtZEJ1ZmZlciA/IGNtZEJ1ZmZlciA6ICR0KFwidGVybWluYWwuaW5wdXRIaW50XCIpIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImlucHV0LXNlbmRcIiBvbmNsaWNrPVwic2VuZEJ1ZmZlclwiPnt7ICR0KFwidGVybWluYWwuc2VuZFwiKSB9fTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tID09PT09PT09PT0g5b+r5o235ZG95Luk5Y2h54mHID09PT09PT09PT0gLS0+XG4gICAgICA8ZGl2IHNob3c9XCJ7e3Nob3dUb29sYmFyfX1cIiBjbGFzcz1cImNhcmRcIiBvbmNsaWNrPVwiZ29RdWlja0NtZHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPuW/q+aNt+WRveS7pDwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhcmQtc3ViXCI+5b+r6YCf5aGr5YWF5ZG95LukPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tID09PT09PT09PT0g6L6T5Ye65Yy65Z+fID09PT09PT09PT0gLS0+XG4gICAgICA8c2Nyb2xsIGlkPVwib3V0cHV0U2Nyb2xsXCIgY2xhc3M9XCJvdXRwdXQtc2Nyb2xsXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgYm91bmNlcz1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJsb2ctdGV4dFwiIHN0eWxlPVwiZm9udC1zaXplOiB7e2ZvbnRTaXplfX1weDsgbGluZS1oZWlnaHQ6IHt7bGluZUhlaWdodH19cHg7XCI+e3sgb3V0cHV0VGV4dCB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3Njcm9sbD5cblxuICAgICAgPCEtLSA9PT09PT09PT09IOafpeeci+WujOaVtOi+k+WHuiA9PT09PT09PT09IC0tPlxuICAgICAgPGRpdiBzaG93PVwie3toYXNGdWxsT3V0cHV0ICYmIHNob3dUb29sYmFyfX1cIiBjbGFzcz1cImZ1bGwtb3V0cHV0LWJ0blwiIG9uY2xpY2s9XCJnb1ZpZXdGdWxsT3V0cHV0XCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiZnVsbC1vdXRwdXQtdGV4dFwiPuafpeeci+WujOaVtOi+k+WHuiDihpI8L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gPT09PT09PT09PSDovpPlhaXms5XplK7nm5ggPT09PT09PT09PSAtLT5cbiAgICA8aW5wdXQtbWV0aG9kIGhpZGU9XCJ7eyAhc2hvd0tleWJvYXJkIH19XCIgc2NyZWVudHlwZT1cInt7IHNjcmVlblR5cGUgfX1cIlxuICAgICAgICAgICAgICAgICAgIGtleWJvYXJkdHlwZT1cIlFXRVJUWVwiIG1heGxlbmd0aD1cIjVcIlxuICAgICAgICAgICAgICAgICAgIEBjb21wbGV0ZT1cIm9uS2V5Q29tcGxldGVcIiBAZGVsZXRlPVwib25LZXlEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgIEBjbG9zZS1rZXlib2FyZD1cIm9uQ2xvc2VLZXlib2FyZFwiPjwvaW5wdXQtbWV0aG9kPlxuXG4gICAgPCEtLSA9PT09PT09PT09IOW6lemDqOW3peWFt+agj++8iOi+k+WFpeazlemakOiXj+aXtuaYvuekuu+8iSA9PT09PT09PT09IC0tPlxuICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXIgJiYgIXNob3dLZXlib2FyZH19XCIgY2xhc3M9XCJ0b29sYmFyLWFyZWFcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJidC1iYXJcIiBzcmM9XCIvY29tbW9uL2J0LnBuZ1wiIC8+XG4gICAgICA8bnVtYmVyX2Nob29zZSBjbGFzcz1cIm51bS1jaG9vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgbWF4PVwiNTBcIiBtaW49XCIyMFwiIHN0ZXA9XCIxXCIgdW5pdD1cInB4XCIgdmFsdWU9XCJ7e2ZvbnRTaXplfX1cIlxuICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ICR0KCd0ZXJtaW5hbC5mb250U2l6ZScpIH19XCIgQGNoYW5nZT1cIm9uRm9udENoYW5nZVwiPjwvbnVtYmVyX2Nob29zZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQHN5c3RlbS5yb3V0ZXJcIlxuaW1wb3J0IGZpbGUgZnJvbSBcIkBzeXN0ZW0uZmlsZVwiXG5pbXBvcnQgZGV2aWNlIGZyb20gXCJAc3lzdGVtLmRldmljZVwiXG5cbnZhciBDTURfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9jbWRfcmVxdWVzdC5qc29uXCJcbnZhciBSRVNVTFRfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9jbWRfcmVzdWx0Lmpzb25cIlxudmFyIGNtZFNlcSA9IDBcbnZhciBsYXN0UmVzdWx0U2VxID0gLTFcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcml2YXRlOiB7XG4gICAgbm93VGltZTogXCIwMDowMFwiLFxuICAgIHRpbWVyOiBudWxsLFxuICAgIHBvbGxUaW1lcjogbnVsbCxcbiAgICBvdXRwdXRUZXh0OiBcIlwiLFxuICAgIHNob3dUb29sYmFyOiB0cnVlLFxuICAgIGZvbnRTaXplOiAyOCxcbiAgICBsaW5lSGVpZ2h0OiAzNixcbiAgICBjbWRCdWZmZXI6IFwiXCIsXG4gICAgc2hvd0tleWJvYXJkOiBmYWxzZSxcbiAgICBzY3JlZW5UeXBlOiBcInJlY3RcIixcbiAgICBsYXRlc3RGdWxsT3V0cHV0OiBcIlwiLFxuICAgIGhhc0Z1bGxPdXRwdXQ6IGZhbHNlLFxuICAgIGxhc3RTZW50Q21kOiBcIlwiXG4gIH0sXG5cbiAgcHJvdGVjdGVkOiB7IGNtZDogXCJcIiB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYub3V0cHV0VGV4dCA9IHNlbGYuJHQoXCJ0ZXJtaW5hbC5zdGFydEhpbnRcIilcbiAgICBpZiAodGhpcy5jbWQpIHtcbiAgICAgIHRoaXMuY21kQnVmZmVyID0gdGhpcy5jbWRcbiAgICB9XG4gICAgc2VsZi50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBzZWxmLnVwZGF0ZVRpbWUoKSB9LCAxMDAwKVxuICAgIHNlbGYucG9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IHNlbGYucG9sbFJlc3VsdCgpIH0sIDgwMClcblxuICAgIC8qIOajgOa1i+Wxj+W5leexu+WeiyAqL1xuICAgIGRldmljZS5nZXRJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJldCkge1xuICAgICAgICB2YXIgdyA9IHJldC5zY3JlZW5XaWR0aCB8fCAzMzZcbiAgICAgICAgc2VsZi5zY3JlZW5UeXBlID0gdyA8PSAyMzAgPyBcInBpbGwtc2hhcGVkXCIgOiBcInJlY3RcIlxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnNjcmVlblR5cGUgPSBcInJlY3RcIlxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgb25EZXN0cm95KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICBjbGVhckludGVydmFsKHRoaXMucG9sbFRpbWVyKVxuICB9LFxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpXG4gICAgdGhpcy5ub3dUaW1lID0gKFwiMFwiICsgZC5nZXRIb3VycygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMilcbiAgfSxcblxuICAvKiA9PT09PT0g6L6T5YWl5rOV5LqL5Lu2ID09PT09PSAqL1xuICB0b2dnbGVLZXlib2FyZCgpIHtcbiAgICB0aGlzLnNob3dLZXlib2FyZCA9ICF0aGlzLnNob3dLZXlib2FyZFxuICB9LFxuXG4gIG9uS2V5Q29tcGxldGUoZSkge1xuICAgIHRoaXMuY21kQnVmZmVyID0gdGhpcy5jbWRCdWZmZXIgKyBlLmRldGFpbC5jb250ZW50XG4gIH0sXG5cbiAgb25LZXlEZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuY21kQnVmZmVyLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY21kQnVmZmVyID0gdGhpcy5jbWRCdWZmZXIuc3Vic3RyaW5nKDAsIHRoaXMuY21kQnVmZmVyLmxlbmd0aCAtIDEpXG4gICAgfVxuICB9LFxuXG4gIG9uQ2xvc2VLZXlib2FyZCgpIHtcbiAgICB0aGlzLnNob3dLZXlib2FyZCA9IGZhbHNlXG4gIH0sXG5cbiAgLyogPT09PT09IOWPkemAgeWRveS7pCA9PT09PT0gKi9cbiAgc2VuZEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuY21kQnVmZmVyKSByZXR1cm5cbiAgICB0aGlzLnNlbmRDb21tYW5kKHRoaXMuY21kQnVmZmVyKVxuICAgIHRoaXMuY21kQnVmZmVyID0gXCJcIlxuICAgIHRoaXMuc2hvd0tleWJvYXJkID0gZmFsc2VcbiAgfSxcblxuICBzZW5kQ29tbWFuZChjbWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBjbWRTZXErK1xuICAgIHZhciBkID0gbmV3IERhdGUoKVxuICAgIHZhciB0cyA9IChcIjBcIiArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgK1xuICAgICAgICAgICAgIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArXG4gICAgICAgICAgICAgKFwiMFwiICsgZC5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKVxuXG4gICAgdmFyIHJlcSA9IEpTT04uc3RyaW5naWZ5KHsgc2VxOiBjbWRTZXEsIGNtZDogY21kLCB0aW1lc3RhbXA6IHRzIH0pXG5cbiAgICBmaWxlLndyaXRlVGV4dCh7XG4gICAgICB1cmk6IENNRF9GSUxFLFxuICAgICAgdGV4dDogcmVxLFxuICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmhhc0Z1bGxPdXRwdXQgPSBmYWxzZVxuICAgICAgICBzZWxmLmxhdGVzdEZ1bGxPdXRwdXQgPSBcIlwiXG4gICAgICAgIHNlbGYubGFzdFNlbnRDbWQgPSBjbWRcbiAgICAgICAgc2VsZi5vdXRwdXRUZXh0ID0gXCI+IFwiICsgY21kICsgXCJcXG5cIiArIHNlbGYuJHQoXCJ0ZXJtaW5hbC53YWl0aW5nXCIpXG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvdXQgPSBzZWxmLm91dHB1dFRleHRcbiAgICAgICAgdmFyIGhpbnQgPSBzZWxmLiR0KFwidGVybWluYWwuc3RhcnRIaW50XCIpXG4gICAgICAgIGlmIChvdXQuaW5kZXhPZihoaW50KSAhPT0gLTEpIG91dCA9IG91dC5yZXBsYWNlKGhpbnQsIFwiXCIpXG4gICAgICAgIHNlbGYub3V0cHV0VGV4dCA9IFwiJCBcIiArIGNtZCArIFwiXFxuW+mUmeivr10gXCIgKyBzZWxmLiR0KFwidGVybWluYWwuZXJyb3JTZW5kXCIpICsgXCJcXG5cXG5cIiArIG91dFxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgLyogPT09PT09IOi9ruivoue7k+aenCA9PT09PT0gKi9cbiAgcG9sbFJlc3VsdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBmaWxlLnJlYWRUZXh0KHtcbiAgICAgIHVyaTogUkVTVUxUX0ZJTEUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YS50ZXh0KSByZXR1cm5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoZGF0YS50ZXh0KVxuICAgICAgICAgIGlmIChqc29uLnNlcSA9PT0gdW5kZWZpbmVkIHx8IGpzb24uc2VxID09PSBsYXN0UmVzdWx0U2VxKSByZXR1cm5cbiAgICAgICAgICBsYXN0UmVzdWx0U2VxID0ganNvbi5zZXFcblxuICAgICAgICAgIC8qIOaehOW7uuWujOaVtOi+k+WHuuaWh+acrCAqL1xuICAgICAgICAgIHZhciBmdWxsID0gXCJcIlxuICAgICAgICAgIGZ1bGwgKz0gXCI+IFwiICsganNvbi5jbWQgKyBcIlxcblwiXG4gICAgICAgICAgaWYgKGpzb24uc3Rkb3V0KSBmdWxsICs9IGpzb24uc3Rkb3V0XG4gICAgICAgICAgaWYgKGpzb24uc3RkZXJyICYmIGpzb24uc3RkZXJyICE9PSBcIlwiKSBmdWxsICs9IFwiXFxuW3N0ZGVycl1cXG5cIiArIGpzb24uc3RkZXJyXG4gICAgICAgICAgaWYgKGpzb24uc3Rkb3V0ID09PSBcIlwiICYmIGpzb24uc3RkZXJyID09PSBcIlwiKSBmdWxsICs9IFwiKG5vIG91dHB1dClcIlxuXG4gICAgICAgICAgLyog5a2Y5a6M5pW06L6T5Ye65L6b6ZiF6K+75Zmo5L2/55SoICovXG4gICAgICAgICAgc2VsZi5sYXRlc3RGdWxsT3V0cHV0ID0gZnVsbFxuICAgICAgICAgIHNlbGYuaGFzRnVsbE91dHB1dCA9IHRydWVcblxuICAgICAgICAgIC8qIOmihOiniO+8muWPquWPluWJjSAyMDAg5a2X56ym77yM5pu/5o2i5o6JXCLnrYnlvoXnu5PmnpxcIiAqL1xuICAgICAgICAgIHZhciBwcmV2aWV3ID0gZnVsbC5sZW5ndGggPiAyMDAgPyBmdWxsLnN1YnN0cmluZygwLCAyMDApICsgXCJcXG4uLi5cXG5cIiA6IGZ1bGxcbiAgICAgICAgICBzZWxmLm91dHB1dFRleHQgPSBwcmV2aWV3XG4gICAgICAgICAgaWYgKHNlbGYub3V0cHV0VGV4dC5sZW5ndGggPiAxMDAwMCkge1xuICAgICAgICAgICAgc2VsZi5vdXRwdXRUZXh0ID0gc2VsZi5vdXRwdXRUZXh0LnN1YnN0cmluZygwLCAxMDAwMClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHt9XG4gICAgfSlcbiAgfSxcblxuICBnb1ZpZXdGdWxsT3V0cHV0KCkge1xuICAgIGlmICh0aGlzLmxhdGVzdEZ1bGxPdXRwdXQpIHtcbiAgICAgIHJvdXRlci5wdXNoKHsgdXJpOiBcIi9wYWdlcy9sb2dcIiwgcGFyYW1zOiB7IGNvbnRlbnQ6IHRoaXMubGF0ZXN0RnVsbE91dHB1dCB9IH0pXG4gICAgfVxuICB9LFxuXG4gIGdvUXVpY2tDbWRzKCkgeyByb3V0ZXIucHVzaCh7IHVyaTogXCIvcGFnZXMvc2V0dGluZ1wiIH0pIH0sXG5cbiAgLyogPT09PT09IOW3peWFt+agj+WIh+aNoiA9PT09PT0gKi9cbiAgb25UeHRDbGljaygpIHtcbiAgICB0aGlzLnNob3dUb29sYmFyID0gIXRoaXMuc2hvd1Rvb2xiYXJcbiAgfSxcblxuICBvbkZvbnRDaGFuZ2UoZSkge1xuICAgIHRoaXMuZm9udFNpemUgPSBlLmRldGFpbC52YWx1ZVxuICAgIHRoaXMubGluZUhlaWdodCA9IHBhcnNlSW50KCgtMC4wMSkgKiAodGhpcy5mb250U2l6ZSAqIHRoaXMuZm9udFNpemUpICsgMS42MiAqIHRoaXMuZm9udFNpemUgLSAzLjIzKVxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgPCB0aGlzLmZvbnRTaXplICsgNCkgdGhpcy5saW5lSGVpZ2h0ID0gdGhpcy5mb250U2l6ZSArIDRcbiAgfSxcblxuICBnb0JhY2soKSB7XG4gICAgcm91dGVyLmJhY2soKVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLyogPT09PT09IOWFqOWxgOmhtemdoiA9PT09PT0gKi9cbi5wYWdlIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDQ4MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4ubWFpbi1hcmVhIHsgd2lkdGg6IDMzNnB4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtYXJnaW4tdG9wOiAtN3B4OyB9XG5cbi8qID09PT09PSDpobbpg6jmoI8gPT09PT09ICovXG4uaGVhZGVyLWFyZWEgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZmxleC1zaHJpbms6IDA7IH1cbi5oZWFkZXItYmcgeyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IH1cbi5oZC10aW1lIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3OHB4OyB0b3A6IDdweDsgd2lkdGg6IDE4MHB4OyBoZWlnaHQ6IDMycHg7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgfVxuLmhkLXRpdGxlIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiA3OHB4OyB0b3A6IDM1cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiA0MnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMzJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjZmZmZmZmOyB9XG4uaGQtYmFjayB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNnB4OyB0b3A6IDZweDsgd2lkdGg6IDcycHg7IGhlaWdodDogNzJweDsgfVxuLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogbm9uZTsgfVxuXG4vKiA9PT09PT0g5b+r5o235ZG95Luk5Y2h54mH77yI5LiO6aaW6aG15Y2h54mH5LiA6Ie077yJID09PT09PSAqL1xuLmNhcmQgeyB3aWR0aDogMzI0cHg7IGhlaWdodDogMTEycHg7IG1hcmdpbjogOHB4IDZweCAwIDZweDsgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZy1sZWZ0OiAyMHB4OyBwYWRkaW5nLXJpZ2h0OiAyMHB4OyBmbGV4LXNocmluazogMDsgfVxuLmNhcmQtbGVmdCB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXg6IDE7IH1cbi5jYXJkLWxhYmVsIHsgZm9udC1zaXplOiAzMnB4OyBsaW5lLWhlaWdodDogNDBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjZmZmZmZmOyBsaW5lczogMTsgfVxuLmNhcmQtc3ViIHsgZm9udC1zaXplOiAyOHB4OyBsaW5lLWhlaWdodDogMzdweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IG1hcmdpbi10b3A6IDRweDsgbGluZXM6IDE7IH1cblxuLyogPT09PT09IOWRveS7pOi+k+WFpeagjyA9PT09PT0gKi9cbi5pbnB1dC1iYXIgeyB3aWR0aDogMzI0cHg7IGhlaWdodDogNDhweDsgbWFyZ2luOiA0cHggNnB4IDAgNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhOyBib3JkZXItcmFkaXVzOiAyNHB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAwIDRweDsgZmxleC1zaHJpbms6IDA7IH1cbi5pbnB1dC1wcm9tcHQgeyB3aWR0aDogMzBweDsgZm9udC1zaXplOiAyOHB4OyBjb2xvcjogI2ZmZmZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmlucHV0LXRleHQgeyBmbGV4OiAxOyBmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmZmZmOyBsaW5lczogMTsgcGFkZGluZzogMCA0cHg7IH1cbi5pbnB1dC1zZW5kIHsgd2lkdGg6IDYwcHg7IGhlaWdodDogMzZweDsgYm9yZGVyLXJhZGl1czogMThweDsgYmFja2dyb3VuZC1jb2xvcjogIzBENkVGRjsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmZmZmOyBmb250LXdlaWdodDogYm9sZDsgbGluZS1oZWlnaHQ6IDM2cHg7IH1cblxuLyogPT09PT09IOi+k+WHuuWMuuWfnyA9PT09PT0gKi9cbi5vdXRwdXQtc2Nyb2xsIHsgd2lkdGg6IDMzNnB4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4udGV4dC1jb250YWluZXIgeyBwYWRkaW5nOiA0cHggMTZweCA0cHggMTZweDsgd2lkdGg6IDMzNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBmbGV4OiAxOyB9XG4ubG9nLXRleHQgeyB3aWR0aDogMzA0cHg7IHRleHQtYWxpZ246IGxlZnQ7IGNvbG9yOiAjZmZmZmZmOyBmb250LXdlaWdodDogYm9sZDsgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG5cbi8qID09PT09PSDmn6XnnIvlrozmlbTovpPlh7ogPT09PT09ICovXG4uZnVsbC1vdXRwdXQtYnRuIHsgd2lkdGg6IDMyNHB4OyBoZWlnaHQ6IDQ4cHg7IG1hcmdpbjogNHB4IDZweCA4cHggNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ2RUZGOyBib3JkZXItcmFkaXVzOiAyNHB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC1zaHJpbms6IDA7IH1cbi5mdWxsLW91dHB1dC10ZXh0IHsgZm9udC1zaXplOiAyNHB4OyBjb2xvcjogI2ZmZmZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKiA9PT09PT0g5bqV6YOo5bel5YW35qCPID09PT09PSAqL1xuLnRvb2xiYXItYXJlYSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiAxMDJweDsgcG9zaXRpb246IHJlbGF0aXZlOyBmbGV4LXNocmluazogMDsgfVxuLmJ0LWJhciB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwOyB3aWR0aDogMzM2cHg7IGhlaWdodDogMTAycHg7IH1cbi5udW0tY2hvb3NlIHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDI0cHg7IH1cblxuLyogPT09PT09PT09PSDog7blm4rlsY/pgILphY0gPT09PT09PT09PSAqL1xuQG1lZGlhIChzaGFwZTogcGlsbC1zaGFwZWQpIGFuZCAobWF4LXdpZHRoOiAxMDApIHtcbiAgLnBhZ2UgeyB3aWR0aDogMTkycHg7IGhlaWdodDogNDkwcHg7IH1cbiAgLm1haW4tYXJlYSB7IHdpZHRoOiAxOTJweDsgfVxuICAuaGVhZGVyLWFyZWEgeyBkaXNwbGF5OiBub25lOyB9XG4gIC5waWxsLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA5MnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGZsZXgtc2hyaW5rOiAwOyB9XG4gIC5waWxsLW1vcmUtd3JhcCB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJvcmRlci1yYWRpdXM6IDMycHg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5waWxsLW1vcmUgeyB3aWR0aDogOTJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiA5MnB4IDcycHg7IGJvcmRlci1yYWRpdXM6IDMycHg7IH1cbiAgLmhkLXRpdGxlIHsgd2lkdGg6IDE5MnB4OyB0b3A6IDIycHg7IGZvbnQtc2l6ZTogMjJweDsgfVxuICAuaGQtYmFjayB7IGxlZnQ6IDRweDsgdG9wOiA0cHg7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IH1cbiAgLmNhcmQgeyB3aWR0aDogMTg0cHg7IGhlaWdodDogMTEwcHg7IGJvcmRlci1yYWRpdXM6IDI3cHg7IHBhZGRpbmctbGVmdDogMTRweDsgcGFkZGluZy1yaWdodDogMTZweDsgbWFyZ2luOiA4cHggNHB4IDAgNHB4OyB9XG4gIC5pbnB1dC1iYXIgeyB3aWR0aDogMTg0cHg7IG1hcmdpbjogNHB4IDRweCAwIDRweDsgfVxuICAuaW5wdXQtc2VuZCB7IHdpZHRoOiA1MnB4OyBmb250LXNpemU6IDIwcHg7IH1cbiAgLmZ1bGwtb3V0cHV0LWJ0biB7IHdpZHRoOiAxODRweDsgbWFyZ2luOiA0cHggNHB4IDhweCA0cHg7IH1cbiAgLnRleHQtY29udGFpbmVyIHsgcGFkZGluZzogNHB4IDEwcHggNHB4IDEwcHg7IHdpZHRoOiAxOTJweDsgZmxleDogMTsgfVxuICAubG9nLXRleHQgeyB3aWR0aDogMTcycHg7IHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgfVxuICAudG9vbGJhci1hcmVhIHsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4gIC5idC1iYXIgeyB3aWR0aDogMTkycHg7IGhlaWdodDogMTAycHg7IH1cbiAgLm51bS1jaG9vc2UgeyB3aWR0aDogMTkycHg7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5wYWdlIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5tYWluLWFyZWEgeyB3aWR0aDogMjEycHg7IH1cbiAgLmhlYWRlci1hcmVhIHsgZGlzcGxheTogbm9uZTsgfVxuICAucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMjEycHg7IGhlaWdodDogOTJweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBmbGV4LXNocmluazogMDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAyMTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC5jYXJkIHsgd2lkdGg6IDIwNHB4OyBoZWlnaHQ6IDExMHB4OyBib3JkZXItcmFkaXVzOiAyN3B4OyBwYWRkaW5nLWxlZnQ6IDE0cHg7IHBhZGRpbmctcmlnaHQ6IDE2cHg7IG1hcmdpbjogOHB4IDRweCAwIDRweDsgfVxuICAuaW5wdXQtYmFyIHsgd2lkdGg6IDIwNHB4OyBtYXJnaW46IDRweCA0cHggMCA0cHg7IH1cbiAgLmZ1bGwtb3V0cHV0LWJ0biB7IHdpZHRoOiAyMDRweDsgbWFyZ2luOiA0cHggNHB4IDhweCA0cHg7IH1cbiAgLnRleHQtY29udGFpbmVyIHsgcGFkZGluZzogNHB4IDEwcHggNHB4IDEwcHg7IHdpZHRoOiAyMTJweDsgZmxleDogMTsgfVxuICAubG9nLXRleHQgeyB3aWR0aDogMTkycHg7IHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgfVxuICAudG9vbGJhci1hcmVhIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4gIC5idC1iYXIgeyB3aWR0aDogMjEycHg7IGhlaWdodDogMTAycHg7IH1cbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiX3N5c3RlbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCIkYXBwX3JlcXVpcmUkIiwiX3N5c3RlbTIiLCJfZGljVXRpbCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJkb1NlYXJjaERpYyIsIndvcmQiLCJsYW5nIiwiY2IiLCJyZXN1bHQiLCJTaW1wbGVJbnB1dE1ldGhvZCIsImdldEhhbnppIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVsZXRlTGFzdCIsInQiLCJzdWJzdHIiLCJsZW5ndGgiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJwcm9wcyIsImhpZGUiLCJrZXlib2FyZHR5cGUiLCJtYXhsZW5ndGgiLCJ2aWJyYXRlbW9kZSIsInNjcmVlbnR5cGUiLCJkYXRhIiwiY3ZhbCIsInJlc3VsdExpc3QiLCJyZXN1bHRMaXN0MiIsIndhaXRpbmdMaXN0Iiwid2FpdGluZ0luZGV4IiwibGFzdFdhaXRpbmdTdHIiLCJkb3duRmxhZyIsIm51bUZsYWciLCJudW1GbGFnX2pwIiwidXBwZXJGbGFnIiwiY3ZhbExpc3QiLCJwZXJjZW50NjciLCJwZXJjZW50NjYiLCJzY3JlZW5XaWR0aCIsImtleXMiLCJmdWxsIiwic2lnbiIsInNpZ25fanAiLCJzaWduNjIiLCJzaWduNjJfanAiLCJmdWxsNjIiLCJ0OSIsIm9uSW5pdCIsInRlbXBDdmFsTGlzdCIsImkiLCJwdXNoIiwiYWRqdXN0U2NyZWVuV2lkdGgiLCIkd2F0Y2giLCJhZGRBbGxUeHQiLCJ0eHQiLCIkZW1pdCIsImNvbnRlbnQiLCJvblJzU2VsZWN0Iiwib25WaWJyYXRlIiwiY2xlYXJXYWl0aW5nIiwicmVzZXRSZXNsdXRMaXN0Iiwib25CdG5DbGljayIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsIndhdGluZ1N0ciIsInNldFJlc3VsdExpc3RBbGwiLCJnZXRSZXN1bHRCeVdvcmQiLCJhcnJheSIsInBhcnNlSW50IiwidmFsIiwidGhhdCIsIm9uU2VsZWN0IiwibnVtIiwib25TZWxlY3RXYWl0aW5nIiwidG9TdHJpbmciLCJ3YXRjaEhpZGVQcm9wc0NoYW5nZSIsIm5ld1YiLCJvbGRWIiwidmlzaWJsZSIsIndhdGNoTWF4TGVuZ3RoUHJvcHNDaGFuZ2UiLCJ3YXRjaEtleWJvYXJkVHlwZVByb3BzQ2hhbmdlIiwidmlicmF0b3IiLCJ2aWJyYXRlIiwibW9kZSIsImhhbmRlbFNjcm9sbCIsImV2ZW50IiwicGVyY2VudFRlbXA2NyIsInNjcm9sbFgiLCJwZXJjZW50VGVtcDY2IiwicHVzaEN2YWwiLCJ0ZW1wIiwiZGV2aWNlIiwiZ2V0SW5mbyIsInN1Y2Nlc3MiLCJkaWN0IiwicHkyaHoiLCJweTJoejIiLCJpbml0RGljdCIsImdldFBpbnlpbiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3aW5kb3ciLCJfc3lzdGVtMyIsIkNNRF9GSUxFIiwiUkVTVUxUX0ZJTEUiLCJjbWRTZXEiLCJsYXN0UmVzdWx0U2VxIiwicHJpdmF0ZSIsIm5vd1RpbWUiLCJ0aW1lciIsInBvbGxUaW1lciIsIm91dHB1dFRleHQiLCJzaG93VG9vbGJhciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNtZEJ1ZmZlciIsInNob3dLZXlib2FyZCIsInNjcmVlblR5cGUiLCJsYXRlc3RGdWxsT3V0cHV0IiwiaGFzRnVsbE91dHB1dCIsImxhc3RTZW50Q21kIiwicHJvdGVjdGVkIiwiY21kIiwic2VsZiIsInVwZGF0ZVRpbWUiLCIkdCIsInNldEludGVydmFsIiwicG9sbFJlc3VsdCIsInJldCIsInciLCJmYWlsIiwib25EZXN0cm95IiwiY2xlYXJJbnRlcnZhbCIsImQiLCJEYXRlIiwiZ2V0SG91cnMiLCJzbGljZSIsImdldE1pbnV0ZXMiLCJ0b2dnbGVLZXlib2FyZCIsIm9uS2V5Q29tcGxldGUiLCJkZXRhaWwiLCJvbktleURlbGV0ZSIsInN1YnN0cmluZyIsIm9uQ2xvc2VLZXlib2FyZCIsInNlbmRCdWZmZXIiLCJzZW5kQ29tbWFuZCIsInRzIiwiZ2V0U2Vjb25kcyIsInJlcSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXEiLCJ0aW1lc3RhbXAiLCJmaWxlIiwid3JpdGVUZXh0IiwidXJpIiwidGV4dCIsImFwcGVuZCIsIm91dCIsImhpbnQiLCJpbmRleE9mIiwicmVwbGFjZSIsInJlYWRUZXh0IiwianNvbiIsInBhcnNlIiwidW5kZWZpbmVkIiwic3Rkb3V0Iiwic3RkZXJyIiwicHJldmlldyIsImdvVmlld0Z1bGxPdXRwdXQiLCJyb3V0ZXIiLCJwYXJhbXMiLCJnb1F1aWNrQ21kcyIsIm9uVHh0Q2xpY2siLCJvbkZvbnRDaGFuZ2UiLCJ2YWx1ZSIsImdvQmFjayIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBK1RBLElBQUFBLFVBQUFDLHVCQUFBQyxlQUFBOzRCQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBOzRCQUNBLElBQUFFLFdBQUFDLG9CQUFBOzRCQUF3RCxTQUFBSix1QkFBQUssQ0FBQTtnQ0FBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7b0NBQUFFLFNBQUFGO2dDQUFBOzRCQUFBOzRCQUN4RCxTQUFTRyxZQUFZQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsRUFBRTtnQ0FDakMsSUFBSSxDQUFDRixNQUFNLFlBQ1RFLEdBQUcsRUFBRTtnQ0FJUCxNQUFNQyxTQUFTQyxTQUFBQSxpQkFBaUIsQ0FBQ0MsUUFBUSxDQUFDTCxNQUFNQztnQ0FDaERDLEdBQUdJLE1BQU1DLE9BQU8sQ0FBQ0osV0FBV0EsTUFBTSxDQUFDLEVBQUUsR0FBR0EsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFOzRCQUN4RDs0QkFFQSxTQUFTSyxXQUFXQyxDQUFDO2dDQUNuQixJQUFJQSxHQUNGLE9BQU9BLEVBQUVDLE1BQU0sQ0FBQyxHQUFHRCxFQUFFRSxNQUFNLEdBQUc7Z0NBRWhDLE9BQU87NEJBQ1Q7NEJBQUMsSUFBQUMsV0FBQUMsUUFBQWYsT0FBQSxHQUNjO2dDQUNiZ0IsT0FBTztvQ0FDTEMsTUFBTTt3Q0FDSmpCLFNBQVM7b0NBQ1g7b0NBQ0FrQixjQUFjO3dDQUNabEIsU0FBUztvQ0FDWDtvQ0FDQW1CLFdBQVc7d0NBQ1RuQixTQUFTO29DQUNYO29DQUNBb0IsYUFBYTt3Q0FDWHBCLFNBQVM7b0NBQ1g7b0NBQ0FxQixZQUFZO3dDQUNWckIsU0FBUztvQ0FDWDtnQ0FDRjtnQ0FDQXNCLE1BQU07b0NBQ0pDLE1BQU07b0NBQ05DLFlBQVksRUFBRTtvQ0FDZEMsYUFBYSxFQUFFO29DQUNmQyxhQUFhLEVBQUU7b0NBQ2ZDLGNBQWM7b0NBQ2RDLGdCQUFnQjtvQ0FDaEJDLFVBQVU7b0NBQ1YxQixNQUFNO29DQUNOMkIsU0FBUztvQ0FDVEMsWUFBWTtvQ0FDWkMsV0FBVztvQ0FDWEMsVUFBVTt3Q0FBQzt3Q0FBRzt3Q0FBRzt3Q0FBRzt3Q0FBRztxQ0FBRTtvQ0FDekJDLFdBQVc7b0NBQ1hDLFdBQVc7b0NBR1hDLGFBQWE7b0NBQ2JDLE1BQU07d0NBQ0pDLE1BQU07NENBQ0o7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7NENBQ2xEO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUM3QztnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTt5Q0FDcEM7d0NBQ0RDLE1BQU07NENBQ0o7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7NENBQ2xEO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNsRDtnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTt5Q0FDOUM7d0NBQ0RDLFNBQVM7NENBQ1A7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7NENBQ2xEO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNsRDtnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTt5Q0FDOUM7d0NBQ0RDLFFBQVE7NENBQ047Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7NENBQ3hDO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNuQztnREFBQztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTt5Q0FDMUI7d0NBQ0RDLFdBQVc7NENBQ1Q7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7NENBQ3hDO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNuQztnREFBQztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTt5Q0FDMUI7d0NBQ0RDLFFBQVE7NENBQ047Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7NENBQ3hDO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNuQztnREFBQztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTt5Q0FDMUI7d0NBQ0RDLElBQUk7NENBQ0Y7Z0RBQUM7Z0RBQU87NkNBQU07NENBQ2Q7Z0RBQUM7Z0RBQU87Z0RBQU87NkNBQU07NENBQ3JCO2dEQUFDO2dEQUFRO2dEQUFPOzZDQUFPO3lDQUFBO29DQUUzQjtnQ0FDRjtnQ0FDQUM7b0NBQ0UsSUFBSSxJQUFJLENBQUMxQixTQUFTLEVBQUU7d0NBQ2xCLE1BQU0yQixlQUFlLEVBQUU7d0NBQ3ZCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJLElBQUksQ0FBQzVCLFNBQVMsRUFBRTRCLElBQ2xDRCxhQUFhRSxJQUFJLENBQUNEO3dDQUVwQixJQUFJLENBQUNkLFFBQVEsR0FBR2E7b0NBQ2xCO29DQUNBLElBQUksQUFBb0IsV0FBcEIsSUFBSSxDQUFDekIsVUFBVSxJQUFlLEFBQW9CLGtCQUFwQixJQUFJLENBQUNBLFVBQVUsRUFDL0MsSUFBSSxDQUFDNEIsaUJBQWlCO29DQUV4QixJQUFJLENBQUNDLE1BQU0sQ0FBQyxRQUFRO29DQUNwQixJQUFJLENBQUNBLE1BQU0sQ0FBQyxhQUFhO29DQUN6QixJQUFJLENBQUNBLE1BQU0sQ0FBQyxnQkFBZ0I7Z0NBQzlCO2dDQUNBQyxXQUFVQyxHQUFHO29DQUNYLElBQUksQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7d0NBQUVDLFNBQVNGO29DQUFJO2dDQUN4QztnQ0FDQUcsWUFBV0gsR0FBRztvQ0FDWixJQUFJLENBQUNJLFNBQVM7b0NBQ2QsSUFBSSxDQUFDakMsSUFBSSxHQUFHO29DQUNaLElBQUksQ0FBQzRCLFNBQVMsQ0FBQ0M7b0NBQ2YsSUFBSSxDQUFDSyxZQUFZO29DQUNqQixJQUFJLENBQUNDLGVBQWU7b0NBQ3BCLElBQUksQ0FBQzdCLFFBQVEsR0FBRztnQ0FDbEI7Z0NBQ0E4QixZQUFXcEIsSUFBSTtvQ0FDYixJQUFJLENBQUNpQixTQUFTO29DQUNkLE9BQVFqQjt3Q0FDTixLQUFLOzRDQUNILElBQUksQ0FBQ2hCLElBQUksR0FBRzs0Q0FDWixJQUFJLENBQUNrQyxZQUFZOzRDQUNqQixJQUFJLENBQUNDLGVBQWU7NENBQ3BCO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxDQUFDTCxLQUFLLENBQUMsaUJBQWlCLENBQUM7NENBQzdCO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxJQUFJLENBQUMxQixZQUFZLElBQUksR0FBRztnREFDMUIsSUFBSSxDQUFDOEIsWUFBWTtnREFDakIsSUFBSSxDQUFDQyxlQUFlOzRDQUN0QixPQUFPLElBQUksSUFBSSxDQUFDbkMsSUFBSSxDQUFDVixNQUFNLEdBQUcsR0FBRztnREFDL0IsSUFBSSxDQUFDVSxJQUFJLEdBQUdiLFdBQVcsSUFBSSxDQUFDYSxJQUFJO2dEQUNoQyxJQUFJLENBQUNtQyxlQUFlOzRDQUN0QixPQUNFLElBQUksQ0FBQ0wsS0FBSyxDQUFDLFVBQVUsQ0FBQzs0Q0FFeEI7d0NBQ0YsS0FBSzs0Q0FDSCxJQUFJLENBQUNGLFNBQVMsQ0FBQzs0Q0FDZjt3Q0FDRixLQUFLOzRDQUNILElBQUksQ0FBQ3RCLFFBQVEsR0FBRyxBQUFrQixXQUFsQixJQUFJLENBQUNBLFFBQVEsR0FBYyxLQUFLOzRDQUNoRDt3Q0FDRixLQUFLOzRDQUNILElBQUksSUFBSSxDQUFDRCxjQUFjLElBQUlXLFFBQVEsSUFBSSxDQUFDWCxjQUFjLEVBQUU7Z0RBQ3RELElBQUksQUFBYyxTQUFkLElBQUksQ0FBQ3pCLElBQUksSUFBYSxBQUFjLFNBQWQsSUFBSSxDQUFDQSxJQUFJLEVBQ2pDLElBQUksQ0FBQ29CLElBQUksSUFBSSxJQUFJLENBQUNHLFdBQVcsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQztxREFFaEQsSUFBSSxJQUFJLENBQUNLLFNBQVMsRUFDaEIsSUFBSSxDQUFDbUIsU0FBUyxDQUFDLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDaUMsV0FBVztxREFFOUQsSUFBSSxDQUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDekIsV0FBVyxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUNrQyxXQUFXO2dEQUdsRSxJQUFJLENBQUNKLFlBQVk7Z0RBQ2pCLElBQUksQ0FBQ0MsZUFBZTs0Q0FDdEI7NENBQ0E7d0NBQ0YsS0FBSzs0Q0FDSCxJQUFJLENBQUM1QixPQUFPLEdBQUc7NENBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUc7NENBQ2xCLElBQUksQ0FBQ1IsSUFBSSxHQUFHOzRDQUNaLElBQUksQ0FBQ2tDLFlBQVk7NENBQ2pCLElBQUksQ0FBQ0MsZUFBZTs0Q0FDcEI7d0NBQ0YsS0FBSzs0Q0FDSCxJQUFJLENBQUM1QixPQUFPLEdBQUc7NENBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUc7NENBQ2xCLElBQUksQ0FBQ1IsSUFBSSxHQUFHOzRDQUNaLElBQUksQ0FBQ2tDLFlBQVk7NENBQ2pCLElBQUksQ0FBQ0MsZUFBZTs0Q0FDcEI7d0NBQ0YsS0FBSzs0Q0FDSCxJQUFJLENBQUM1QixPQUFPLEdBQUc7NENBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUc7NENBQ2xCO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxDQUFDQyxTQUFTLEdBQUc7NENBQ2pCO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxDQUFDQSxTQUFTLEdBQUc7NENBQ2pCO3dDQUNGOzRDQUNFLElBQUlPLEFBQWdCLE1BQWhCQSxLQUFLMUIsTUFBTSxFQUNiLElBQUksQ0FBQ3NDLFNBQVMsQ0FBQ1o7aURBQ1Y7Z0RBQ0wsSUFBSSxJQUFJLENBQUNaLFlBQVksSUFBSSxHQUN2QixJQUFJLElBQUksQ0FBQ0MsY0FBYyxLQUFLVyxNQUFNO29EQUNoQyxJQUFJLENBQUNaLFlBQVk7b0RBQ2pCLElBQUksSUFBSSxDQUFDQSxZQUFZLElBQUksSUFBSSxDQUFDQyxjQUFjLENBQUNmLE1BQU0sRUFDakQsSUFBSSxDQUFDYyxZQUFZLEdBQUc7Z0RBRXhCLE9BQU87b0RBQ0wsSUFBSSxBQUFjLFNBQWQsSUFBSSxDQUFDeEIsSUFBSSxJQUFhLEFBQWMsU0FBZCxJQUFJLENBQUNBLElBQUksRUFDakMsSUFBSSxDQUFDb0IsSUFBSSxJQUFJLElBQUksQ0FBQ0csV0FBVyxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDO3lEQUVoRCxJQUFJLElBQUksQ0FBQ0ssU0FBUyxFQUNoQixJQUFJLENBQUNtQixTQUFTLENBQ1osSUFBSSxDQUFDekIsV0FBVyxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUNpQyxXQUFXO3lEQUdqRCxJQUFJLENBQUNULFNBQVMsQ0FDWixJQUFJLENBQUN6QixXQUFXLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQ2tDLFdBQVc7b0RBSXJELElBQUksQ0FBQ2pDLGNBQWMsR0FBR1c7b0RBQ3RCLElBQUksQ0FBQ1osWUFBWSxHQUFHO29EQUNwQixJQUFJLENBQUNELFdBQVcsR0FBR2EsS0FBS3VCLEtBQUssQ0FBQztnREFDaEM7cURBQ0s7b0RBQ0wsSUFBSSxDQUFDbEMsY0FBYyxHQUFHVztvREFDdEIsSUFBSSxDQUFDWixZQUFZLEdBQUc7b0RBQ3BCLElBQUksQ0FBQ0QsV0FBVyxHQUFHYSxLQUFLdUIsS0FBSyxDQUFDO2dEQUNoQztnREFDQSxJQUFJLENBQUNKLGVBQWU7NENBQ3RCOzRDQUNBO29DQUNKO2dDQUNGO2dDQUNBRDtvQ0FDRSxJQUFJLENBQUMvQixXQUFXLEdBQUcsRUFBRTtvQ0FDckIsSUFBSSxDQUFDQyxZQUFZLEdBQUc7b0NBQ3BCLElBQUksQ0FBQ0MsY0FBYyxHQUFHO2dDQUN4QjtnQ0FDQThCO29DQUNFLElBQUlLLFlBQVk7b0NBQ2hCLElBQUksSUFBSSxDQUFDbkMsY0FBYyxJQUFJLElBQUksQ0FBQ0EsY0FBYyxDQUFDLElBQUksQ0FBQ0QsWUFBWSxDQUFDLEVBQy9Eb0MsWUFBWSxJQUFJLENBQUNuQyxjQUFjLENBQUMsSUFBSSxDQUFDRCxZQUFZLENBQUM7b0NBRXBELElBQUksQ0FBRSxLQUFJLENBQUNKLElBQUksR0FBR3dDLFNBQVEsS0FBTyxBQUFjLFNBQWQsSUFBSSxDQUFDNUQsSUFBSSxJQUFhLEFBQWMsU0FBZCxJQUFJLENBQUNBLElBQUksRUFBWTt3Q0FDMUUsSUFBSSxDQUFDcUIsVUFBVSxHQUFHLEVBQUU7d0NBQ3BCLElBQUksQ0FBQ3dDLGdCQUFnQjt3Q0FDckI7b0NBQ0Y7b0NBQ0EsSUFBSSxDQUFDQyxlQUFlLENBQUMsSUFBSSxDQUFDMUMsSUFBSSxHQUFHd0M7Z0NBQ25DO2dDQUNBQztvQ0FDRSxJQUFJLENBQUN2QyxXQUFXLEdBQUcsRUFBRTtvQ0FDckIsSUFBSXlDLFFBQVEsRUFBRTtvQ0FDZCxJQUFLLElBQUluQixJQUFJLEdBQUdBLElBQUksSUFBSSxDQUFDdkIsVUFBVSxDQUFDWCxNQUFNLEVBQUVrQyxJQUFLO3dDQUMvQ21CLE1BQU1sQixJQUFJLENBQUMsSUFBSSxDQUFDeEIsVUFBVSxDQUFDdUIsRUFBRTt3Q0FDN0IsSUFBSW1CLE1BQU1yRCxNQUFNLEtBQUtzRCxTQUFTLElBQUksQ0FBQ2hELFNBQVMsR0FBRzs0Q0FDN0MsSUFBSSxDQUFDTSxXQUFXLENBQUN1QixJQUFJLENBQUNrQjs0Q0FDdEJBLFFBQVEsRUFBRTt3Q0FDWjtvQ0FDRjtvQ0FDQSxJQUFJQSxNQUFNckQsTUFBTSxHQUFHLEtBQUtxRCxNQUFNckQsTUFBTSxHQUFHc0QsU0FBUyxJQUFJLENBQUNoRCxTQUFTLEdBQzVELElBQUksQ0FBQ00sV0FBVyxDQUFDdUIsSUFBSSxDQUFDa0I7Z0NBRTFCO2dDQUNBRCxpQkFBZ0JHLEdBQUc7b0NBQ2pCLE1BQU1DLE9BQU8sSUFBSTtvQ0FDakJwRSxZQUFZbUUsS0FBS0MsS0FBS2xFLElBQUksRUFBRSxTQUFVbUIsSUFBSTt3Q0FDeEMrQyxLQUFLN0MsVUFBVSxHQUFHRjt3Q0FDbEIrQyxLQUFLTCxnQkFBZ0I7b0NBQ3ZCO2dDQUNGO2dDQUNBTSxVQUFTQyxHQUFHO29DQUNWLElBQUksQ0FBQ2xCLEtBQUssQ0FBQyxXQUFXO3dDQUFFQyxTQUFTaUI7b0NBQUk7b0NBQ3JDLElBQUksQUFBc0IsU0FBdEIsSUFBSSxDQUFDckQsWUFBWSxJQUFhLEFBQW9CLGtCQUFwQixJQUFJLENBQUNHLFVBQVUsRUFBb0IsWUFDbkUsSUFBSSxDQUFDc0MsVUFBVSxDQUFDWTtvQ0FHbEIsSUFBSSxDQUFDZixTQUFTO29DQUNkLElBQUksQUFBZSxTQUFkLElBQUksQ0FBQ3JELElBQUksSUFBYSxBQUFjLFNBQWQsSUFBSSxDQUFDQSxJQUFJLElBQWdCLElBQUksQ0FBQzJCLE9BQU8sRUFFekQsSUFBSSxBQUFjLFNBQWQsSUFBSSxDQUFDM0IsSUFBSSxJQUFjLElBQUksQ0FBQzJCLE9BQU8sRUFPNUMsSUFBSSxDQUFDcUIsU0FBUyxDQUFDb0I7eUNBTmYsSUFBSSxJQUFJLENBQUN2QyxTQUFTLEVBQ2hCLElBQUksQ0FBQ21CLFNBQVMsQ0FBQ29CLElBQUlYLFdBQVc7eUNBRTlCLElBQUksQ0FBQ1QsU0FBUyxDQUFDb0IsSUFBSVYsV0FBVzt5Q0FMaEMsSUFBSSxDQUFDdEMsSUFBSSxJQUFJZ0QsSUFBSVYsV0FBVztvQ0FVOUIsSUFBSSxDQUFDSCxlQUFlO2dDQUN0QjtnQ0FDQWMsaUJBQWdCRCxHQUFHO29DQUNqQixJQUFJLENBQUNmLFNBQVM7b0NBQ2QsSUFBSSxBQUFjLFNBQWQsSUFBSSxDQUFDckQsSUFBSSxFQUNYLElBQUksQ0FBQ29CLElBQUksSUFBSSxJQUFJLENBQUNHLFdBQVcsQ0FBQzZDLElBQUksQ0FBQ0UsUUFBUTt5Q0FFM0MsSUFBSSxJQUFJLENBQUN6QyxTQUFTLEVBQ2hCLElBQUksQ0FBQ21CLFNBQVMsQ0FBQyxJQUFJLENBQUN6QixXQUFXLENBQUM2QyxJQUFJLENBQUNYLFdBQVc7eUNBRWhELElBQUksQ0FBQ1QsU0FBUyxDQUFDLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQzZDLElBQUksQ0FBQ1YsV0FBVztvQ0FHcEQsSUFBSSxDQUFDSixZQUFZO29DQUNqQixJQUFJLENBQUNDLGVBQWU7Z0NBQ3RCO2dDQUNBZ0Isc0JBQXFCQyxJQUFJLEVBQUVDLElBQUk7b0NBQzdCLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQyxvQkFBb0I7d0NBQUV3QixTQUFTRjtvQ0FBSztnQ0FDakQ7Z0NBQ0FHLDJCQUEwQkgsSUFBSSxFQUFFQyxJQUFJO29DQUNsQyxJQUFJRCxNQUFNO3dDQUNSLE1BQU03QixlQUFlLEVBQUU7d0NBQ3ZCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJNEIsTUFBTTVCLElBQ3hCRCxhQUFhRSxJQUFJLENBQUNEO3dDQUVwQixJQUFJLENBQUNkLFFBQVEsR0FBR2E7b0NBQ2xCO2dDQUNGO2dDQUNBaUMsOEJBQTZCSixJQUFJLEVBQUVDLElBQUk7b0NBQ3JDLElBQUlELEFBQVMsU0FBVEEsUUFBaUIsQUFBYyxTQUFkLElBQUksQ0FBQ3hFLElBQUksRUFBVzt3Q0FDdkMsSUFBSSxDQUFDQSxJQUFJLEdBQUc7d0NBQ1osSUFBSSxDQUFDb0IsSUFBSSxHQUFHO3dDQUNaLElBQUksQ0FBQ2tDLFlBQVk7d0NBQ2pCLElBQUksQ0FBQ0MsZUFBZTtvQ0FDdEI7Z0NBQ0Y7Z0NBQ0FGO29DQUNFLElBQUksQUFBb0IsTUFBcEIsSUFBSSxDQUFDcEMsV0FBVyxFQUNsQjRELFFBQUFBLE9BQVEsQ0FBQ0MsT0FBTyxDQUFDO3dDQUFFQyxNQUFNLElBQUksQ0FBQzlELFdBQVc7b0NBQUM7Z0NBRTlDO2dDQUNBK0QsY0FBYUMsS0FBSztvQ0FDaEIsSUFBSUMsZ0JBQWlCRCxNQUFNRSxPQUFPLEdBQUcsTUFBTyxNQUFNO29DQUNsRCxJQUFJLENBQUNwRCxTQUFTLEdBQUdpQyxTQUFTa0IsaUJBQWlCLE1BQU1BLGdCQUFnQjtvQ0FDakUsSUFBSUUsZ0JBQWlCSCxNQUFNRSxPQUFPLEdBQUcsTUFBTztvQ0FDNUMsSUFBSSxDQUFDbkQsU0FBUyxHQUFHZ0MsU0FBU29CLGlCQUFpQixNQUFNQSxnQkFBZ0I7Z0NBQ25FO2dDQUNBQztvQ0FDRSxJQUFJLENBQUNoQyxTQUFTO29DQUNkLElBQUlpQyxPQUFPLElBQUksQ0FBQ2xFLElBQUk7b0NBQ3BCLElBQUksQ0FBQ0EsSUFBSSxHQUFHO29DQUNaLElBQUksQ0FBQ2tDLFlBQVk7b0NBQ2pCLElBQUksQ0FBQ0MsZUFBZTtvQ0FDcEIsSUFBSSxDQUFDUCxTQUFTLENBQUNzQztnQ0FDakI7Z0NBQ0F4QztvQ0FDRXlDLFNBQUFBLE9BQU0sQ0FBQ0MsT0FBTyxDQUFDO3dDQUNiQyxTQUFVdEUsQ0FBQUE7NENBQ1IsSUFBSSxDQUFDYyxXQUFXLEdBQUdkLEtBQUtjLFdBQVc7d0NBQ3JDO29DQUNGO2dDQUNGOzRCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNwcEJBLElBQUk5QixvQkFBaUJTLFFBQUFBLGlCQUFBLEdBQUc7NEJBQ3RCOEUsTUFBTTtnQ0FBRUMsT0FBTyxDQUFDO2dDQUFHQyxRQUFRLENBQUM7NEJBQUU7d0JBQ2hDO3dCQUVBekYsa0JBQWtCMEYsUUFBUSxHQUFHLFlBQzNCO3dCQUdGMUYsa0JBQWtCQyxRQUFRLEdBQUcsU0FBU0wsSUFBSSxFQUFFQyxJQUFJOzRCQUU5QyxPQUFPLEVBQUU7d0JBQ1g7d0JBRUFHLGtCQUFrQjJGLFNBQVMsR0FBRyxTQUFTL0YsSUFBSTs0QkFDekMsT0FBTzt3QkFDVDs7Ozs7Ozs7Ozs7Ozs7b0JDaEJBZ0csb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBT3RHLEdBQUc7NEJBQ1gsSUFBSSxBQUFrQixZQUFsQixPQUFPdUcsUUFBcUIsT0FBT0E7d0JBQ3hDO29CQUNEOzs7b0JDUEFILG9CQUFvQixFQUFFLEdBQUcsSUFBTzs7O29CQ0FoQ0Esb0JBQW9CLElBQUksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkMrRDNCLElBQUExRyxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBNEcsV0FBQTdHLHVCQUFBQyxlQUFBO3dCQUFtQyxTQUFBRCx1QkFBQUssQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUVuQyxJQUFJeUcsV0FBVzt3QkFDZixJQUFJQyxjQUFjO3dCQUNsQixJQUFJQyxTQUFTO3dCQUNiLElBQUlDLGdCQUFnQjt3QkFBRSxJQUFBNUYsV0FBQUMsUUFBQWYsT0FBQSxHQUVQOzRCQUNiMkcsU0FBUztnQ0FDUEMsU0FBUztnQ0FDVEMsT0FBTztnQ0FDUEMsV0FBVztnQ0FDWEMsWUFBWTtnQ0FDWkMsYUFBYTtnQ0FDYkMsVUFBVTtnQ0FDVkMsWUFBWTtnQ0FDWkMsV0FBVztnQ0FDWEMsY0FBYztnQ0FDZEMsWUFBWTtnQ0FDWkMsa0JBQWtCO2dDQUNsQkMsZUFBZTtnQ0FDZkMsYUFBYTs0QkFDZjs0QkFFQUMsV0FBVztnQ0FBRUMsS0FBSzs0QkFBRzs0QkFFckI3RTtnQ0FDRSxJQUFJOEUsT0FBTyxJQUFJO2dDQUNmQSxLQUFLQyxVQUFVO2dDQUNmRCxLQUFLWixVQUFVLEdBQUdZLEtBQUtFLEVBQUUsQ0FBQztnQ0FDMUIsSUFBSSxJQUFJLENBQUNILEdBQUcsRUFDVixJQUFJLENBQUNQLFNBQVMsR0FBRyxJQUFJLENBQUNPLEdBQUc7Z0NBRTNCQyxLQUFLZCxLQUFLLEdBQUdpQixZQUFZO29DQUFhSCxLQUFLQyxVQUFVO2dDQUFHLEdBQUc7Z0NBQzNERCxLQUFLYixTQUFTLEdBQUdnQixZQUFZO29DQUFhSCxLQUFLSSxVQUFVO2dDQUFHLEdBQUc7Z0NBRy9EckMsU0FBQUEsT0FBTSxDQUFDQyxPQUFPLENBQUM7b0NBQ2JDLFNBQVMsU0FBU29DLEdBQUc7d0NBQ25CLElBQUlDLElBQUlELElBQUk1RixXQUFXLElBQUk7d0NBQzNCdUYsS0FBS04sVUFBVSxHQUFHWSxLQUFLLE1BQU0sZ0JBQWdCO29DQUMvQztvQ0FDQUMsTUFBTTt3Q0FDSlAsS0FBS04sVUFBVSxHQUFHO29DQUNwQjtnQ0FDRjs0QkFDRjs0QkFFQWM7Z0NBQ0VDLGNBQWMsSUFBSSxDQUFDdkIsS0FBSztnQ0FDeEJ1QixjQUFjLElBQUksQ0FBQ3RCLFNBQVM7NEJBQzlCOzRCQUVBYztnQ0FDRSxJQUFJUyxJQUFJLElBQUlDO2dDQUNaLElBQUksQ0FBQzFCLE9BQU8sR0FBRyxBQUFDLE9BQU15QixFQUFFRSxRQUFRLEVBQUMsRUFBR0MsS0FBSyxDQUFDLE1BQU0sTUFBTSxBQUFDLE9BQU1ILEVBQUVJLFVBQVUsRUFBQyxFQUFHRCxLQUFLLENBQUM7NEJBQ3JGOzRCQUdBRTtnQ0FDRSxJQUFJLENBQUN0QixZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUNBLFlBQVk7NEJBQ3hDOzRCQUVBdUIsZUFBYzdJLENBQUM7Z0NBQ2IsSUFBSSxDQUFDcUgsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxHQUFHckgsRUFBRThJLE1BQU0sQ0FBQ3RGLE9BQU87NEJBQ3BEOzRCQUVBdUY7Z0NBQ0UsSUFBSSxJQUFJLENBQUMxQixTQUFTLENBQUN0RyxNQUFNLEdBQUcsR0FDMUIsSUFBSSxDQUFDc0csU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDMkIsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDM0IsU0FBUyxDQUFDdEcsTUFBTSxHQUFHOzRCQUV6RTs0QkFFQWtJO2dDQUNFLElBQUksQ0FBQzNCLFlBQVksR0FBRzs0QkFDdEI7NEJBR0E0QjtnQ0FDRSxJQUFJLENBQUMsSUFBSSxDQUFDN0IsU0FBUyxFQUFFO2dDQUNyQixJQUFJLENBQUM4QixXQUFXLENBQUMsSUFBSSxDQUFDOUIsU0FBUztnQ0FDL0IsSUFBSSxDQUFDQSxTQUFTLEdBQUc7Z0NBQ2pCLElBQUksQ0FBQ0MsWUFBWSxHQUFHOzRCQUN0Qjs0QkFFQTZCLGFBQVl2QixHQUFHO2dDQUNiLElBQUlDLE9BQU8sSUFBSTtnQ0FDZmxCO2dDQUNBLElBQUk0QixJQUFJLElBQUlDO2dDQUNaLElBQUlZLEtBQUssQUFBQyxPQUFNYixFQUFFRSxRQUFRLEVBQUMsRUFBR0MsS0FBSyxDQUFDLE1BQU0sTUFDakMsQUFBQyxPQUFNSCxFQUFFSSxVQUFVLEVBQUMsRUFBR0QsS0FBSyxDQUFDLE1BQU0sTUFDbkMsQUFBQyxPQUFNSCxFQUFFYyxVQUFVLEVBQUMsRUFBR1gsS0FBSyxDQUFDO2dDQUV0QyxJQUFJWSxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0NBQUVDLEtBQUs5QztvQ0FBUWlCLEtBQUtBO29DQUFLOEIsV0FBV047Z0NBQUc7Z0NBRWhFTyxTQUFBQSxPQUFJLENBQUNDLFNBQVMsQ0FBQztvQ0FDYkMsS0FBS3BEO29DQUNMcUQsTUFBTVI7b0NBQ05TLFFBQVE7b0NBQ1JqRSxTQUFTO3dDQUNQK0IsS0FBS0osYUFBYSxHQUFHO3dDQUNyQkksS0FBS0wsZ0JBQWdCLEdBQUc7d0NBQ3hCSyxLQUFLSCxXQUFXLEdBQUdFO3dDQUNuQkMsS0FBS1osVUFBVSxHQUFHLE9BQU9XLE1BQU0sT0FBT0MsS0FBS0UsRUFBRSxDQUFDO29DQUNoRDtvQ0FDQUssTUFBTTt3Q0FDSixJQUFJNEIsTUFBTW5DLEtBQUtaLFVBQVU7d0NBQ3pCLElBQUlnRCxPQUFPcEMsS0FBS0UsRUFBRSxDQUFDO3dDQUNuQixJQUFJaUMsQUFBc0IsT0FBdEJBLElBQUlFLE9BQU8sQ0FBQ0QsT0FBY0QsTUFBTUEsSUFBSUcsT0FBTyxDQUFDRixNQUFNO3dDQUN0RHBDLEtBQUtaLFVBQVUsR0FBRyxPQUFPVyxNQUFNLFlBQVlDLEtBQUtFLEVBQUUsQ0FBQyx3QkFBd0IsU0FBU2lDO29DQUN0RjtnQ0FDRjs0QkFDRjs0QkFHQS9CO2dDQUNFLElBQUlKLE9BQU8sSUFBSTtnQ0FDZjhCLFNBQUFBLE9BQUksQ0FBQ1MsUUFBUSxDQUFDO29DQUNaUCxLQUFLbkQ7b0NBQ0xaLFNBQVMsU0FBU3RFLElBQUk7d0NBQ3BCLElBQUksQ0FBQ0EsS0FBS3NJLElBQUksRUFBRTt3Q0FDaEIsSUFBSTs0Q0FDRixJQUFJTyxPQUFPZCxLQUFLZSxLQUFLLENBQUM5SSxLQUFLc0ksSUFBSTs0Q0FDL0IsSUFBSU8sQUFBYUUsV0FBYkYsS0FBS1osR0FBRyxJQUFrQlksS0FBS1osR0FBRyxLQUFLN0MsZUFBZTs0Q0FDMURBLGdCQUFnQnlELEtBQUtaLEdBQUc7NENBR3hCLElBQUlqSCxPQUFPOzRDQUNYQSxRQUFRLE9BQU82SCxLQUFLekMsR0FBRyxHQUFHOzRDQUMxQixJQUFJeUMsS0FBS0csTUFBTSxFQUFFaEksUUFBUTZILEtBQUtHLE1BQU07NENBQ3BDLElBQUlILEtBQUtJLE1BQU0sSUFBSUosQUFBZ0IsT0FBaEJBLEtBQUtJLE1BQU0sRUFBU2pJLFFBQVEsaUJBQWlCNkgsS0FBS0ksTUFBTTs0Q0FDM0UsSUFBSUosQUFBZ0IsT0FBaEJBLEtBQUtHLE1BQU0sSUFBV0gsQUFBZ0IsT0FBaEJBLEtBQUtJLE1BQU0sRUFBU2pJLFFBQVE7NENBR3REcUYsS0FBS0wsZ0JBQWdCLEdBQUdoRjs0Q0FDeEJxRixLQUFLSixhQUFhLEdBQUc7NENBR3JCLElBQUlpRCxVQUFVbEksS0FBS3pCLE1BQU0sR0FBRyxNQUFNeUIsS0FBS3dHLFNBQVMsQ0FBQyxHQUFHLE9BQU8sWUFBWXhHOzRDQUN2RXFGLEtBQUtaLFVBQVUsR0FBR3lEOzRDQUNsQixJQUFJN0MsS0FBS1osVUFBVSxDQUFDbEcsTUFBTSxHQUFHLE9BQzNCOEcsS0FBS1osVUFBVSxHQUFHWSxLQUFLWixVQUFVLENBQUMrQixTQUFTLENBQUMsR0FBRzt3Q0FFbkQsRUFBRSxPQUFNaEosR0FBRyxDQUFDO29DQUNkO29DQUNBb0ksTUFBTSxZQUFZO2dDQUNwQjs0QkFDRjs0QkFFQXVDO2dDQUNFLElBQUksSUFBSSxDQUFDbkQsZ0JBQWdCLEVBQ3ZCb0QsUUFBQUEsT0FBTSxDQUFDMUgsSUFBSSxDQUFDO29DQUFFMkcsS0FBSztvQ0FBY2dCLFFBQVE7d0NBQUVySCxTQUFTLElBQUksQ0FBQ2dFLGdCQUFnQjtvQ0FBQztnQ0FBRTs0QkFFaEY7NEJBRUFzRDtnQ0FBZ0JGLFFBQUFBLE9BQU0sQ0FBQzFILElBQUksQ0FBQztvQ0FBRTJHLEtBQUs7Z0NBQWlCOzRCQUFHOzRCQUd2RGtCO2dDQUNFLElBQUksQ0FBQzdELFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQ0EsV0FBVzs0QkFDdEM7NEJBRUE4RCxjQUFhaEwsQ0FBQztnQ0FDWixJQUFJLENBQUNtSCxRQUFRLEdBQUduSCxFQUFFOEksTUFBTSxDQUFDbUMsS0FBSztnQ0FDOUIsSUFBSSxDQUFDN0QsVUFBVSxHQUFHL0MsU0FBVSxRQUFVLEtBQUksQ0FBQzhDLFFBQVEsR0FBRyxJQUFJLENBQUNBLFFBQVEsQUFBRCxJQUFLLE9BQU8sSUFBSSxDQUFDQSxRQUFRLEdBQUc7Z0NBQzlGLElBQUksSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDRCxRQUFRLEdBQUcsR0FBRyxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNELFFBQVEsR0FBRzs0QkFDN0U7NEJBRUErRDtnQ0FDRU4sUUFBQUEsT0FBTSxDQUFDTyxJQUFJOzRCQUNiO3dCQUNGIn0=