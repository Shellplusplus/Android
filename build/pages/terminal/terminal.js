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
                                marginRight: "6px",
                                marginBottom: "0",
                                marginLeft: "6px",
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
                                    "content-body"
                                ]
                            ],
                            {
                                flex: 1,
                                flexDirection: "column",
                                marginTop: 0
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
                                marginTop: "8px",
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
                                wordBreak: "break-all",
                                fontSize: "28px",
                                lineHeight: "36px"
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
                            {
                                condition: "screen and (shape:rect)"
                            },
                            [
                                [
                                    0,
                                    "content-body"
                                ]
                            ],
                            {
                                marginTop: "-20px"
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
                                    "input-bar"
                                ]
                            ],
                            {
                                width: "184px",
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
                                    "input-bar"
                                ]
                            ],
                            {
                                width: "204px",
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
                        var HISTORY_FILE = "internal://files/cmd_history.json";
                        var HISTORY_CONFIG_FILE = "internal://files/history_config.json";
                        var cmdSeq = Date.now();
                        var lastResultSeq = -1;
                        var lastSentSeq = -1;
                        var _default = exports.default = {
                            private: {
                                nowTime: "00:00",
                                timer: null,
                                pollTimer: null,
                                outputText: "",
                                showToolbar: true,
                                cmdBuffer: "",
                                showKeyboard: false,
                                screenType: "rect",
                                latestFullOutput: "",
                                hasFullOutput: false,
                                lastSentCmd: "",
                                historyLimit: 5
                            },
                            protected: {
                                cmd: "",
                                autoSend: ""
                            },
                            onInit () {
                                var self = this;
                                self.updateTime();
                                self.outputText = self.$t("terminal.startHint");
                                if (this.cmd) this.cmdBuffer = this.cmd;
                                self.loadHistoryLimit();
                                if (this.shouldAutoSend()) {
                                    self.sendCommand(this.cmd, false);
                                    self.cmdBuffer = "";
                                }
                                self.timer = setInterval(function() {
                                    self.updateTime();
                                }, 1000);
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
                            onShow () {
                                var self = this;
                                self.loadHistoryLimit();
                                if (!self.pollTimer) self.pollTimer = setInterval(function() {
                                    self.pollResult();
                                }, 800);
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
                            shouldAutoSend () {
                                return true === this.autoSend || "true" === this.autoSend || "1" === this.autoSend;
                            },
                            normalizeHistoryLimit (limit) {
                                return this.$app.$def.shellData.normalizeHistoryLimit(limit);
                            },
                            loadHistoryLimit () {
                                var self = this;
                                _system2.default.readText({
                                    uri: HISTORY_CONFIG_FILE,
                                    success: function(data) {
                                        try {
                                            var json = JSON.parse(data.text);
                                            self.historyLimit = self.normalizeHistoryLimit(json.limit);
                                        } catch (e) {
                                            self.historyLimit = self.$app.$def.shellData.defaultHistoryLimit;
                                        }
                                    },
                                    fail: function() {
                                        self.historyLimit = self.$app.$def.shellData.defaultHistoryLimit;
                                    }
                                });
                            },
                            normalizeHistory (items) {
                                var normalized = [];
                                var seen = {};
                                if (!(items instanceof Array)) return normalized;
                                for(var i = 0; i < items.length; i++){
                                    var cmd = items[i];
                                    if ("string" == typeof cmd) {
                                        cmd = cmd.trim();
                                        if (cmd && !seen[cmd]) {
                                            seen[cmd] = true;
                                            normalized.push(cmd);
                                            if (normalized.length >= this.historyLimit) break;
                                        }
                                    }
                                }
                                return normalized;
                            },
                            recordManualHistory (cmd) {
                                var self = this;
                                if (!cmd) return;
                                _system2.default.readText({
                                    uri: HISTORY_FILE,
                                    success: function(data) {
                                        var list = [];
                                        try {
                                            list = JSON.parse(data.text);
                                        } catch (e) {}
                                        list.unshift(cmd);
                                        self.writeHistory(list);
                                    },
                                    fail: function() {
                                        self.writeHistory([
                                            cmd
                                        ]);
                                    }
                                });
                            },
                            writeHistory (items) {
                                _system2.default.writeText({
                                    uri: HISTORY_FILE,
                                    text: JSON.stringify(this.normalizeHistory(items)),
                                    append: false
                                });
                            },
                            sendBuffer () {
                                if (!this.cmdBuffer) return;
                                var cmd = this.cmdBuffer;
                                this.sendCommand(cmd, true);
                                this.cmdBuffer = "";
                                this.showKeyboard = false;
                            },
                            sendCommand (cmd, shouldRecord) {
                                var self = this;
                                cmdSeq++;
                                lastSentSeq = cmdSeq;
                                self.hasFullOutput = false;
                                self.latestFullOutput = "";
                                self.lastSentCmd = cmd;
                                self.outputText = "> " + cmd + "\n\n" + self.$t("terminal.waiting");
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
                                        if (shouldRecord) self.recordManualHistory(cmd);
                                    },
                                    fail: function() {
                                        var out = self.outputText;
                                        var hint = self.$t("terminal.startHint");
                                        if (-1 !== out.indexOf(hint)) out = out.replace(hint, "");
                                        self.outputText = "$ " + cmd + "\n\n[" + self.$t("terminal.errorLabel") + "] " + self.$t("terminal.errorSend") + "\n\n" + out;
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
                                            if (void 0 === json.seq || json.seq <= lastResultSeq) return;
                                            if (json.seq !== lastSentSeq) return;
                                            lastResultSeq = json.seq;
                                            var full = "";
                                            full += "> " + json.cmd + "\n\n";
                                            if (json.stdout) full += json.stdout;
                                            if (json.stderr && "" !== json.stderr) full += "\n[" + self.$t("terminal.stderrLabel") + "]\n" + json.stderr;
                                            if ("" === json.stdout && "" === json.stderr) full += self.$t("terminal.noOutput");
                                            self.latestFullOutput = full;
                                            self.hasFullOutput = true;
                                            var preview = full.length > 200 ? full.substring(0, 200) + "\n" + self.$t("terminal.previewMore") + "\n" : full;
                                            self.outputText = preview;
                                            if (self.outputText.length > 10000) self.outputText = self.outputText.substring(0, 10000);
                                        } catch (e) {}
                                    },
                                    fail: function() {}
                                });
                            },
                            goViewFullOutput () {
                                var self = this;
                                if (self.latestFullOutput) _system2.default.writeText({
                                    uri: "internal://files/full_output.txt",
                                    text: self.latestFullOutput,
                                    append: false,
                                    success: function() {
                                        _system.default.push({
                                            uri: "/pages/log"
                                        });
                                    },
                                    fail: function() {
                                        _system.default.push({
                                            uri: "/pages/log",
                                            params: {
                                                content: self.latestFullOutput
                                            }
                                        });
                                    }
                                });
                            },
                            goQuickCmds () {
                                _system.default.push({
                                    uri: "/pages/setting",
                                    params: {
                                        entry: "terminal"
                                    }
                                });
                            },
                            goHistory () {
                                _system.default.push({
                                    uri: "/pages/history"
                                });
                            },
                            onTxtClick () {
                                this.showToolbar = !this.showToolbar;
                            },
                            goBack () {
                                _system.default.replace({
                                    uri: "/pages/index"
                                });
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
                                        classList: [
                                            "content-body"
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
                                                    return _vm_.goHistory(evt);
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
                                                        return _vm_.$t("terminal.historyTitle");
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
                                                        return _vm_.$t("terminal.historyDesc");
                                                    }
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
                                                    value: function() {
                                                        return _vm_.$t("terminal.quickTitle");
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
                                                        return _vm_.$t("terminal.quickDesc");
                                                    }
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
                                                value: function() {
                                                    return _vm_.$t("terminal.fullOutput");
                                                }
                                            }
                                        }, [])
                                    ])
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
                                    vibratemode: "short",
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
                            }, [])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvdGVybWluYWwvdGVybWluYWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TaGVsbCsrL3NyYy9jb21wb25lbnRzL0lucHV0TWV0aG9kL0lucHV0TWV0aG9kLnV4Iiwid2VicGFjazovL1NoZWxsKysvc3JjL2NvbXBvbmVudHMvSW5wdXRNZXRob2QvYXNzZXRzL2RpY1V0aWwuanMiLCJ3ZWJwYWNrOi8vU2hlbGwrKy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL1NoZWxsKysvd2VicGFjay9ydW50aW1lL3JzcGFja191bmlxdWVfaWQiLCJ3ZWJwYWNrOi8vU2hlbGwrKy9zcmMvcGFnZXMvdGVybWluYWwvdGVybWluYWwudXgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIiBzaG93PVwie3shaGlkZX19XCI+XG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6YmxhY2tcIiA+XG4gICAgICA8IS0tIOWchuWxjzYyIC0tPlxuICAgICAgPGRpdiBpZj1cInt7c2NyZWVudHlwZT09PSdjaXJjbGUnfX1cIiBzdHlsZT1cIndpZHRoOiA0ODBweDtoZWlnaHQ6IDMyMXB4O1wiPlxuICAgICAgICA8IS0tIOWFqOmUruebmCAtLT5cblx0XHQ8IS0tIOi/memHjOaYrzQ4MHB45ZyG6KGo5bGP5bmV55qE6ZSu55uYIC0tPlxuICAgICAgICA8ZGl2IGlkPVwiZnVsbC1rZXlib2FyZFwiIGlmPVwie3trZXlib2FyZHR5cGUhPSdUOSd9fVwiIHN0eWxlPVwid2lkdGg6IDQ4MHB4O2hlaWdodDogMzIxcHg7XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL2JhY2syLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6N3B4O3dpZHRoOjQ2NnB4O2hlaWdodDo1MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaENuJylcIiBzaG93PVwie3tudW1GbGFnfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nY24nfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtX2pwJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nanAnfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9iaWdBLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyNjZweDtsZWZ0OjExOXB4O3dpZHRoOjEyMHB4O2hlaWdodDo0OHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaExvdycpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiB1cHBlckZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL0EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoVXBwZXInKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIXVwcGVyRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6NzhweDt3aWR0aDozMjRweDtoZWlnaHQ6NTJweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYigzOCwzOCwzOCk7Ym9yZGVyLXJhZGl1czogMTJweDtib3JkZXI6IDNweCBzb2xpZCAjMzMzMzMzXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmICFudW1GbGFnfX1cIj48L2Rpdj5cbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjQzcHg7bGVmdDozNTVweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL2Rvd24ucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cbiAgICAgICAgICA8IS0tIOW4puWPmOmHj+eahOebuOWvuei3r+W+hOWcqCBhaW90LXRvb2tpdCAyLjAuNCDkuK3kv67lpI0gLS0+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL3t7bGFuZ319LnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6N3B4O3dpZHRoOjY3cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnbGFuZycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZyE9J2pwJ319XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvanAucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM4cHg7bGVmdDo3cHg7d2lkdGg6NjdweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdsYW5nJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2pwJ319XCIgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDotNHB4O2xlZnQ6NzhweDt3aWR0aDozMjRweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGN2YWx9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWx0ZXh0XCIgc3R5bGU9XCJ3aWR0aDoyOTZweDtcIj4ge3tjdmFsfX1fIDwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6ODBweDt3aWR0aDoyNzdweFwiIHNob3c9XCJ7eyhsYW5nID09PSAnY24nIHx8IGxhbmcgPT09ICdqcCcpICYmICFudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2N2YWxMaXN0fX1cIj5cbiAgICAgICAgICAgICAgPGlucHV0IHNob3c9J3t7cmVzdWx0TGlzdC5sZW5ndGggPiAkaWR4fX0nIGNsYXNzPVwiY2FsYnRuMFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cInt7cmVzdWx0TGlzdFskaWR4XX19XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6ODBweDt3aWR0aDozMjBweDtoZWlnaHQ6NTJweDthbGlnbi1jb250ZW50OiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bScpXCIgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzEyM19ib2FyZGxlc3MucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIOi/memHjOS9v+eUqHNob3fkvJrlr7zoh7Tmr4/mrKHovpPlhaXpg73kvJrliqDovb3lhajpg6jlgJnpgInliJfooajvvIzlvojljaEgLS0+XG4gICAgICAgICAgPGxpc3QgY2xhc3M9XCJsaXN0M1wiIGlmPVwie3tkb3duRmxhZz09PSdkb3duJ319XCI+XG4gICAgICAgICAgICA8bGlzdC1pdGVtIHR5cGU9XCJ3YWl0aW5nUm93czYydDlcIiBjbGFzcz1cIml0ZW0zXCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2x1bW4gY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6NTJweDtcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjYWxidG4wXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tpdGVtfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KGl0ZW0pXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTVweDtsZWZ0OjhweDt3aWR0aDo0NjRweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvUS5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1EnKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbDYyJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvUC5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1AnKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTUycHg7bGVmdDoyM3B4O3dpZHRoOjQzOHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycmJiFudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC9idEEucG5nXCIgc3R5bGU9XCJ3aWR0aDo2MHB4O2hlaWdodDo1MnB4O21hcmdpbi1yaWdodDogNHB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCdBJylcIiAvPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGw2MiddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsL0wucG5nXCIgc3R5bGU9XCJ3aWR0aDo2MHB4O2hlaWdodDo1MnB4O1wiIEBjbGljaz1cIm9uU2VsZWN0KCdMJylcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwOXB4O2xlZnQ6NTZweDt3aWR0aDozNjhweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvWi5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ1onKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbDYyJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvTS5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ00nKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTVweDtsZWZ0OjhweDt3aWR0aDo0NjRweDtoZWlnaHQ6NTJweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xLnBuZ1wiIHN0eWxlPVwid2lkdGg6NTRweDtoZWlnaHQ6NTJweDttYXJnaW4tcmlnaHQ6IDRweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgnMScpXCIgLz5cbiAgICAgICAgICAgIDx0ZXh0IGlmPVwie3shbnVtRmxhZ19qcH19XCIgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242MiddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgZWxzZSBjbGFzcz1cImNhbGJ0bmZ1bGxcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbjYyX2pwJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvMC5wbmdcIiBzdHlsZT1cIndpZHRoOjU0cHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJzAnKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTUycHg7bGVmdDoyM3B4O3dpZHRoOjQzOHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzItMS5wbmdcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ34nKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBpZj1cInt7IW51bUZsYWdfanB9fVwiIGNsYXNzPVwiY2FsYnRuZnVsbFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduNjInXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGVsc2UgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242Ml9qcCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzItMi5wbmdcIiBzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJz8nKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjA5cHg7bGVmdDo1NnB4O3dpZHRoOjM2OHB4O2hlaWdodDo1MnB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzMtMS5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7bWFyZ2luLXJpZ2h0OiA0cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJygnKVwiIC8+XG4gICAgICAgICAgICA8dGV4dCBpZj1cInt7IW51bUZsYWdfanB9fVwiIGNsYXNzPVwiY2FsYnRuZnVsbFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduNjInXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGVsc2UgY2xhc3M9XCJjYWxidG5mdWxsXCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ242Ml9qcCddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzMtMi5wbmdcIiBzdHlsZT1cIndpZHRoOjcycHg7aGVpZ2h0OjUycHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgScpXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvZGVsLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozOHB4O2xlZnQ6NDA2cHg7d2lkdGg6NjdweDtoZWlnaHQ6NTJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdEJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnIH19XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Z1bGwvc3BhY2UucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MjQycHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC80LTIucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MjQycHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgicpXCIgc2hvdz1cInt7bnVtRmxhZyB9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mdWxsLzQtMS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MjY2cHg7bGVmdDoxMTlweDt3aWR0aDoxMjBweDtoZWlnaHQ6NDhweDtcIiBAY2xpY2s9XCJvblNlbGVjdCgn77yMJylcIiBzaG93PVwie3tudW1GbGFnICYmICFudW1GbGFnX2pwfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC80LTEucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjI2NnB4O2xlZnQ6MTE5cHg7d2lkdGg6MTIwcHg7aGVpZ2h0OjQ4cHg7XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgScpXCIgc2hvdz1cInt7bnVtRmxhZ19qcH19XCIgLz5cbiAgICAgICAgICA8aW1nIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyMDRweDtsZWZ0Ojc4cHg7XCIgc3JjPVwiLi9hc3NldHMvZnVsbC91cC5wbmdcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdkb3duJylcIiBzaG93PVwie3tkb3duRmxhZz09PSdkb3duJ319XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0g5Lmd6ZSuIC0tPlxuICAgICAgICA8ZGl2IGVsc2Ugc3R5bGU9XCJ3aWR0aDogNDgwcHg7aGVpZ2h0OiAzMjFweDtcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Q5L2JhY2syLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozNXB4O2xlZnQ6MzFweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoQ24nKVwiIHNob3c9XCJ7e251bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozMXB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW0nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdjbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS9iaWdBLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDo5OXB4O2xlZnQ6MzFweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTG93JylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIHVwcGVyRmxhZyAmJiBsYW5nPT09J2VuJ319XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3Q5L2EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozMXB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hVcHBlcicpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nfX1cIiAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjM1cHg7bGVmdDo5NXB4O3dpZHRoOjI5MHB4O2hlaWdodDo2MHB4O2JhY2tncm91bmQtY29sb3I6cmdiKDM4LDM4LDM4KTtib3JkZXItcmFkaXVzOiA5OTlweDtib3JkZXI6IDNweCBzb2xpZCAjMzMzMzMzXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmICFudW1GbGFnfX1cIj48L2Rpdj5cbiAgICAgICAgICA8aW1nIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gMH19XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjQ0cHg7bGVmdDozMzhweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL2Rvd24ucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cbiAgICAgICAgICA8IS0tIOW4puWPmOmHj+eahOebuOWvuei3r+W+hOWcqCBhaW90LXRvb2tpdCAyLjAuNCDkuK3kv67lpI0gLS0+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy90OS97e2xhbmd9fS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjMxcHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIGlmPVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnfX1cIiAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOi00cHg7bGVmdDo5NXB4O3dpZHRoOjE0NXB4O2hlaWdodDo0MHB4O1wiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgY3ZhbH19XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbHRleHRcIiBzdHlsZT1cIndpZHRoOjE0NXB4O1wiPiB7e2N2YWx9fV8gPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZ319XCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOi00cHg7bGVmdDoyNDBweDt3aWR0aDoxNDVweDtoZWlnaHQ6NDBweDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7d2FpdGluZ0xpc3R9fVwiIGNsYXNzPVwid2FpdGluZy1rZXlzXCIgc3R5bGU9XCJjb2xvcjp7eyRpZHg9PT13YWl0aW5nSW5kZXggPyAncmdiKDEzLDEzMiwyNTUpJyA6ICd3aGl0ZSd9fTtcIiBAY2xpY2s9XCJvblNlbGVjdFdhaXRpbmcoJGlkeClcIj57e3dhaXRpbmdMaXN0WyRpZHhdfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzlweDtsZWZ0OjEwNXB4O3dpZHRoOjIzM3B4XCIgc2hvdz1cInt7bGFuZyA9PT0gJ2NuJyAmJiAhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2x1bW4gY2VudGVyXCIgZm9yPVwie3tjdmFsTGlzdH19XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBzaG93PSd7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19JyBjbGFzcz1cImNhbGJ0bjBcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7e3Jlc3VsdExpc3RbJGlkeF19fVwiIEBjbGljaz1cIm9uUnNTZWxlY3QocmVzdWx0TGlzdFskaWR4XSlcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0Ojk1cHg7d2lkdGg6MjkwcHg7aGVpZ2h0OjYwcHg7YWxpZ24tY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBjZW50ZXJcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nZW4nfX1cIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW0nKVwiID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZnVsbC8xMjNfYm9hcmRsZXNzLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSDov5nph4zkvb/nlKhzaG935Lya5a+86Ie05q+P5qyh6L6T5YWl6YO95Lya5Yqg6L295YWo6YOo5YCZ6YCJ5YiX6KGo77yM5b6I5Y2hIC0tPlxuICAgICAgICAgIDxsaXN0IGNsYXNzPVwibGlzdDNcIiBpZj1cInt7ZG93bkZsYWc9PT0nZG93bid9fVwiPlxuICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2MmZ1bGxcIiBjbGFzcz1cIml0ZW0zXCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2x1bW4gY2VudGVyXCIgc3R5bGU9XCJoZWlnaHQ6NTJweDtcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjYWxidG4wXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tpdGVtfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KGl0ZW0pXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTlweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCdzZWxlY3QnKVwiPumAieaLqTwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjE2M3B4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tkb3duRmxhZz09PScnJiYhbnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoyMjdweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyYmIW51bUZsYWd9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MzVweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzcnKVwiPjc8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzgnKVwiPjg8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzknKVwiPjk8L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6OTlweDtsZWZ0Ojk1cHg7d2lkdGg6Mjk0cHg7aGVpZ2h0OjYwcHg7XCIgc2hvdz1cInt7bnVtRmxhZ319XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzQnKVwiPjQ8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzUnKVwiPjU8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzYnKVwiPjY8L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MTYzcHg7bGVmdDo5NXB4O3dpZHRoOjI5NHB4O2hlaWdodDo2MHB4O1wiIHNob3c9XCJ7e251bUZsYWd9fVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCcxJylcIj4xPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCcyJylcIj4yPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OVwiIEBjbGljaz1cIm9uU2VsZWN0KCczJylcIj4zPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIyN3B4O2xlZnQ6OTVweDt3aWR0aDoyOTRweDtoZWlnaHQ6NjBweDtcIiBzaG93PVwie3tudW1GbGFnfX1cIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDlcIiBAY2xpY2s9XCJvblNlbGVjdCgn77yMJylcIj7vvIw8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJzAnKVwiPjA8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5XCIgQGNsaWNrPVwib25TZWxlY3QoJ+OAgicpXCI+44CCPC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvdDkvZGVsLnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDozNXB4O2xlZnQ6Mzg5cHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvdDkvc3BhY2UucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjk5cHg7bGVmdDozODlweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3BhY2UnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjIwNHB4O2xlZnQ6NzhweDtcIiBzcmM9XCIuL2Fzc2V0cy9mdWxsL3VwLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSDmlrnlsY82NyAtLT5cbiAgICAgIDxkaXYgaWY9XCJ7e3NjcmVlbnR5cGU9PT0ncmVjdCd9fVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAyNTVweDtmbGV4LWRpcmVjdGlvbjogY29sdW1uXCI+XG4gICAgICAgIDwhLS0g5Lmd6ZSu5Lit5paHIC0tPlxuICAgICAgICA8ZGl2IGlmPVwie3trZXlib2FyZHR5cGU9PSdUOScgJiYgIW51bUZsYWd9fVwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMXB4O3dpZHRoOjEwMCU7aGVpZ2h0OjI3NnB4O2p1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0b3A6NzdweDtoZWlnaHQ6MTg5cHg7d2lkdGg6MTAwJTthbGlnbi1pdGVtczogc3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtwYWRkaW5nOjZweCAzcHhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dzLXJlY3QtdDlcIj5cbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OSBjYWxidG50OS1yZWN0XCIgQGNsaWNrPVwib25TZWxlY3QoJ3NlbGVjdCcpXCI+XG4gICAgICAgICAgICAgICAg6YCJ5oupXG4gICAgICAgICAgICAgICAgPHNwYW4gaWY9XCJ7e3dhaXRpbmdMaXN0Lmxlbmd0aCAhPSAwfX1cIiBjbGFzcz1cIndhaXRpbmcta2V5c1wiIHN0eWxlPVwiY29sb3I6cmdiKDEzLDEzMiwyNTUpO1wiIEBjbGljaz1cIm9uU2VsZWN0V2FpdGluZyh3YWl0aW5nSW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICB7e3dhaXRpbmdMaXN0W3dhaXRpbmdJbmRleF0udG9VcHBlckNhc2UoKX19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRudDkgY2FsYnRudDktcmVjdFwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWyd0OSddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbS50b1VwcGVyQ2FzZSgpfX08L3RleHQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlib2FyZC1yb3dzLXJlY3QtdDlcIj5cbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG50OSBjYWxidG50OS1yZWN0XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3Q5J11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtLnRvVXBwZXJDYXNlKCl9fTwvdGV4dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleWJvYXJkLXJvd3MtcmVjdC10OVwiPlxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bnQ5IGNhbGJ0bnQ5LXJlY3RcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1sndDknXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW0udG9VcHBlckNhc2UoKX19PC90ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGVsc2Ugc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTExcHg7d2lkdGg6MTAwJTtoZWlnaHQ6Mjc2cHg7anVzdGlmeS1jb250ZW50OiBjZW50ZXJcIj5cbiAgICAgICAgICA8cHJvZ3Jlc3MgcGVyY2VudD1cInt7cGVyY2VudDY3fX1cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2JvdHRvbTogMTJweDt3aWR0aDo4MHB4O2NvbG9yOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjZweDtsYXllci1jb2xvcjojMjYyNjI2O1wiPjwvcHJvZ3Jlc3M+XG4gICAgICAgICAgPHNjcm9sbCBpZD1cImtleWJvYXJkNjdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgb25zY3JvbGw9XCJoYW5kZWxTY3JvbGxcIj5cbiAgICAgICAgICAgIDxkaXYgaWY9XCJ7eyFudW1GbGFnfX1cIiBzdHlsZT1cImxlZnQ6IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMHB4O21hcmdpbi10b3A6IDBweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMnB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogNjRweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgICA8aW1nIHN0YXRpYyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL3NwYWNlLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3NwYWNlJylcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZj1cInt7bnVtRmxhZyAmJiAhbnVtRmxhZ19qcH19XCIgc3R5bGU9XCJsZWZ0OiA2cHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlmPVwie3tudW1GbGFnX2pwfX1cIiBzdHlsZT1cImxlZnQ6IDZweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMHB4O21hcmdpbi10b3A6IDBweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42N1wiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduX2pwJ11bMF19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAzMnB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjdcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbl9qcCddWzFdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogNjRweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY3XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ25fanAnXVsyXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3Njcm9sbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRvcDo2cHg7IHBhZGRpbmc6MCA2cHg7XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2NuLnBuZ1wiIHN0eWxlPVwicGFkZGluZzogNnB4O3dpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdsYW5nJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhbnVtRmxhZyAmJiBsYW5nPT09J2NuJ319XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvanAucG5nXCIgc3R5bGU9XCJwYWRkaW5nOjZweDt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIGlmPVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nanAnfX1cIiAvPlxuICAgICAgICAgIDxkaXYgaWY9XCJ7eyhsYW5nID09PSAnY24nIHx8IGxhbmcgPT09ICdqcCcpICYmICFudW1GbGFnfX1cIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7ZmxleDogMTtoZWlnaHQ6IDYwcHg7YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O2JvcmRlci1jb2xvcjogIzMzMzMzMzsgYm9yZGVyLXdpZHRoOiAzcHg7IGJvcmRlci1yYWRpdXM6IDEwMHB4O2ZsZXgtZGlyZWN0aW9uOiByb3c7YWxpZ24taXRlbXM6Y2VudGVyXCI+XG4gICAgICAgICAgICA8c2Nyb2xsIGlkPVwiY3ZhbFdhaXRpbmdcIiBzY3JvbGwteD1cInt7dHJ1ZX19XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDogODUlO2hlaWdodDogNDJweDtcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O2hlaWdodDogNDJweDtwYWRkaW5nLWxlZnQ6MjBweDtwYWRkaW5nLXJpZ2h0OjIwcHhcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjAyXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjEwcHhcIiBAY2xpY2s9XCJwdXNoQ3ZhbFwiPnt7Y3ZhbH19PC90ZXh0PlxuICAgICAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7Y3ZhbExpc3R9fVwiIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19XCIgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiPnt7cmVzdWx0TGlzdFskaWR4XX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2Nyb2xsPlxuICAgICAgICAgICAgPGltZyBpZj1cInt7cmVzdWx0TGlzdC5sZW5ndGggPiAwfX1cIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3JpZ2h0OiA4cHg7IHdpZHRoOiA2MHB4O2hlaWdodDogNDBweDtcIiBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2Rvd24yLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsLzEyMy5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OjZweDtwYWRkaW5nOjZweDt3aWR0aDo2MHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bV9qcCcpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdqcCd9fVwiIC8+XG4gICAgICAgIFxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaG9yaXpvbnRhbC9lbi5wbmdcIiBzdHlsZT1cInBhZGRpbmc6IDZweDt3aWR0aDogNjBweDtoZWlnaHQ6IDYwcHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnbGFuZycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2JpZ0EucG5nXCIgc3R5bGU9XCJwYWRkaW5nOiA2cHg7bWFyZ2luLWxlZnQ6IDZweDt3aWR0aDo5NHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaExvdycpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nJiYgIW51bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2EucG5nXCIgc3R5bGU9XCJwYWRkaW5nOiA2cHg7bWFyZ2luLWxlZnQ6IDZweDt3aWR0aDo5NHB4O2hlaWdodDo2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaFVwcGVyJylcIiBpZj1cInt7ZG93bkZsYWc9PT0nJyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nJiYgIW51bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsLzEyMy5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7cGFkZGluZzogNnB4O21hcmdpbi1sZWZ0OiA2cHg7d2lkdGg6IDk0cHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaE51bScpXCIgaWY9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgbGFuZz09PSdlbid9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9ob3Jpem9udGFsL2JhY2syLnBuZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDZweDtwYWRkaW5nOiA2cHg7d2lkdGg6IDE1OXB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hDbicpXCIgaWY9XCJ7e251bUZsYWd9fVwiIC8+XG4gICAgICAgICAgPGltZyBpZj1cInt7IW51bUZsYWd9fVwiIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvZGVsLnBuZ1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDZweDtwYWRkaW5nOiA2cHg7d2lkdGg6IDYwcHg7aGVpZ2h0OiA2MHB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIC8+XG4gICAgICAgICAgPGltZyBlbHNlIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvZGVsMi5wbmdcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2cHg7cGFkZGluZzogNnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIOi/memHjOS9v+eUqHNob3fkvJrlr7zoh7Tmr4/mrKHovpPlhaXpg73kvJrliqDovb3lhajpg6jlgJnpgInliJfooajvvIzlvojljaEgLS0+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O3RvcDogMHB4O3dpZHRoOiAxMDAlO2hlaWdodDogMjUycHg7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYWxpZ24taXRlbXM6Y2VudGVyXCIgaWY9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIj5cbiAgICAgICAgICA8ZGl2IHN0YXRpYyBjbGFzcz1cImxpc3Q2N1wiPlxuICAgICAgICAgICAgPGxpc3Qgc3RhdGljIHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIj5cbiAgICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2N1wiIGNsYXNzPVwiaXRlbTY3XCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNhbGJ0bjAyXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwie3tpdGVtfX1cIiBAY2xpY2s9XCJvblJzU2VsZWN0KGl0ZW0pXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tdG9wOjVweFwiIHNyYz1cIi4vYXNzZXRzL2hvcml6b250YWwvdXAyLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIOiDtuWbiuWxjzY2IC0tPlxuICAgICAgPGRpdiBpZj1cInt7c2NyZWVudHlwZT09PSdwaWxsLXNoYXBlZCd9fVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAzMDVweFwiPlxuICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MHB4O3RvcDozNHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjI3NnB4O1wiPlxuICAgICAgICAgIDxwcm9ncmVzcyBwZXJjZW50PVwie3szMCtwZXJjZW50NjZ9fVwiIHR5cGU9XCJhcmNcIiBzdHlsZT1cInN0YXJ0LWFuZ2xlOjIwNGRlZzt0b3RhbC1hbmdsZTotNDhkZWc7d2lkdGg6MTg4cHg7aGVpZ2h0OjE4OHB4O3RvcDo4MnB4O2xlZnQ6MnB4O3Bvc2l0aW9uOmFic29sdXRlO2NvbG9yOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjZweDtsYXllci1jb2xvcjojMjYyNjI2O21hcmdpbi1sZWZ0OiB7eyhzY3JlZW5XaWR0aCAtIDE5MikvMn19cHg7XCI+PC9wcm9ncmVzcz5cbiAgICAgICAgICA8c2Nyb2xsIGlkPVwia2V5Ym9hcmQ2NlwiIHNjcm9sbC14PVwie3t0cnVlfX1cIiBvbnNjcm9sbD1cImhhbmRlbFNjcm9sbFwiIHN0eWxlPVwicGFkZGluZy1sZWZ0OiB7eyhzY3JlZW5XaWR0aCAtIDE5MikvMn19cHg7cGFkZGluZy1yaWdodDoge3soc2NyZWVuV2lkdGggLSAxOTIpLzJ9fXB4O1wiPlxuICAgICAgICAgICAgPGRpdiBpZj1cInt7IW51bUZsYWd9fVwiIHN0eWxlPVwibGVmdDogM3B4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ2Z1bGwnXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydmdWxsJ11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snZnVsbCddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICAgIDxpbWcgc3RhdGljIHNyYz1cIi4vYXNzZXRzL2FyYy9zcGFjZS5wbmdcIiBzdHlsZT1cIndpZHRoOiA2MHB4O2hlaWdodDogNjBweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzcGFjZScpXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWY9XCJ7e251bUZsYWcgJiYgIW51bUZsYWdfanB9fVwiIHN0eWxlPVwibGVmdDogM3B4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1wiPlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwcHg7bWFyZ2luLXRvcDogMHB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ24nXVswXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMycHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduJ11bMV19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA2NHB4O21hcmdpbi10b3A6IC01cHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbiddWzJdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZj1cInt7bnVtRmxhZ19qcH19XCIgc3R5bGU9XCJsZWZ0OiAzcHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDBweDttYXJnaW4tdG9wOiAwcHg7aGVpZ2h0OiA2MHB4O1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuNjZcIiBmb3I9XCJ7e2l0ZW0gaW4ga2V5c1snc2lnbl9qcCddWzBdfX1cIiBAY2xpY2s9XCJvblNlbGVjdChpdGVtKVwiPnt7aXRlbX19PC90ZXh0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdGF0aWMgc3R5bGU9XCJtYXJnaW4tbGVmdDogMzJweDttYXJnaW4tdG9wOiAtNXB4O2hlaWdodDogNjBweDtcIj5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImNhbGJ0bjY2XCIgZm9yPVwie3tpdGVtIGluIGtleXNbJ3NpZ25fanAnXVsxXX19XCIgQGNsaWNrPVwib25TZWxlY3QoaXRlbSlcIj57e2l0ZW19fTwvdGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3RhdGljIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDY0cHg7bWFyZ2luLXRvcDogLTVweDtoZWlnaHQ6IDYwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYWxidG42NlwiIGZvcj1cInt7aXRlbSBpbiBrZXlzWydzaWduX2pwJ11bMl19fVwiIEBjbGljaz1cIm9uU2VsZWN0KGl0ZW0pXCI+e3tpdGVtfX08L3RleHQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zY3JvbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0YXRpYyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiB7eyhzY3JlZW5XaWR0aCAtIDE5MikvMn19cHg7dG9wOiAwcHg7d2lkdGg6IDE5MnB4O2hlaWdodDogMTEwcHg7XCI+IFxuICAgICAgICAgIDxpbWcgc3RhdGljIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDNweDt0b3A6IDQ3cHg7d2lkdGg6IDE4NnB4O2hlaWdodDogNjBweDtcIiBzcmM9XCIuL2Fzc2V0cy9hcmMvc2VhcmNoLnBuZ1wiIC8+XG4gICAgICAgICAgPHNjcm9sbCBpZD1cImN2YWxXYWl0aW5nXCIgc2Nyb2xsLXg9XCJ7e3RydWV9fVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDE1cHg7dG9wOiA1NnB4O3dpZHRoOiAxNDRweDtoZWlnaHQ6IDQycHg7XCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDBweDt0b3A6IDBweDtoZWlnaHQ6IDQycHg7cGFkZGluZy1yaWdodDoyMHB4XCI+XG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FsYnRuMDJcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6MTBweFwiIEBjbGljaz1cInB1c2hDdmFsXCI+e3tjdmFsfX08L3RleHQ+XG4gICAgICAgICAgICAgIDx0ZXh0IGZvcj1cInt7Y3ZhbExpc3R9fVwiIHNob3c9XCJ7e3Jlc3VsdExpc3QubGVuZ3RoID4gJGlkeH19XCIgY2xhc3M9XCJjYWxidG4wMlwiIHN0eWxlPVwicGFkZGluZy1yaWdodDoxMHB4XCIgQGNsaWNrPVwib25Sc1NlbGVjdChyZXN1bHRMaXN0WyRpZHhdKVwiPnt7cmVzdWx0TGlzdFskaWR4XX19PC90ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zY3JvbGw+XG4gICAgICAgICAgPGltZyBzaG93PVwie3tyZXN1bHRMaXN0Lmxlbmd0aCA+IDB9fVwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDEyMHB4O3RvcDogNTdweDt3aWR0aDogNjBweDtoZWlnaHQ6IDQwcHg7XCIgc3JjPVwiLi9hc3NldHMvYXJjL2Rvd24yLnBuZ1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2Rvd24nKVwiIC8+XG4gICAgICAgICAgPCEtLSDluKblj5jph4/nmoTnm7jlr7not6/lvoTlnKggYWlvdC10b29raXQgMi4wLjQg5Lit5L+u5aSNIC0tPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjL3t7bGFuZ319LnBuZ1wiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDowcHg7bGVmdDo5cHg7d2lkdGg6IDQ4cHg7aGVpZ2h0OiA0MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ2xhbmcnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWcgJiYgIW51bUZsYWdfanB9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hcmMvYmFjazIucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjBweDtsZWZ0OjlweDt3aWR0aDogNDhweDtoZWlnaHQ6IDQycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoQ24nKVwiIHNob3c9XCJ7e251bUZsYWcgJiYgbGFuZz09PSdjbicgfHxudW1GbGFnX2pwICYmIGxhbmc9PT0nanAnIH19XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2FyYy8xMjMucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogNzBweDt0b3A6IDBweDt3aWR0aDogNTJweDtoZWlnaHQ6IDQycHg7XCIgQGNsaWNrPVwib25CdG5DbGljaygnc3dpdGNoTnVtJylcIiBzaG93PVwie3tkb3duRmxhZz09PScnICYmICFudW1GbGFnICYmIGxhbmc9PT0nY24nfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjLzEyMy5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiA3MHB4O3RvcDogMHB4O3dpZHRoOiA1MnB4O2hlaWdodDogNDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hOdW1fanAnKVwiIHNob3c9XCJ7e2Rvd25GbGFnPT09JycgJiYgIW51bUZsYWdfanAgJiYgbGFuZz09PSdqcCd9fVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9hcmMvYmlnQS5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6NzJweDt3aWR0aDo0OHB4O2hlaWdodDo0MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ3N3aXRjaExvdycpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiB1cHBlckZsYWcgJiYgbGFuZz09PSdlbicgfX1cIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvYXJjL2EucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjBweDtsZWZ0OjcycHg7d2lkdGg6NDhweDtoZWlnaHQ6NDJweDtcIiBAY2xpY2s9XCJvbkJ0bkNsaWNrKCdzd2l0Y2hVcHBlcicpXCIgc2hvdz1cInt7ZG93bkZsYWc9PT0nJyAmJiAhdXBwZXJGbGFnICYmIGxhbmc9PT0nZW4nIH19XCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2FyYy9kZWwucG5nXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMTM1cHg7dG9wOiAwcHg7d2lkdGg6IDQ4cHg7aGVpZ2h0OiA0MnB4O1wiIEBjbGljaz1cIm9uQnRuQ2xpY2soJ0QnKVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIOi/memHjOS9v+eUqHNob3fkvJrlr7zoh7Tmr4/mrKHovpPlhaXpg73kvJrliqDovb3lhajpg6jlgJnpgInliJfooajvvIzlvojljaEgLS0+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA0N3B4O3dpZHRoOiAxMDAlO2hlaWdodDogMjYzcHg7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XCIgaWY9XCJ7e2Rvd25GbGFnPT09J2Rvd24nfX1cIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO2xlZnQ6IHt7KHNjcmVlbldpZHRoIC0gMTkyKS8yfX1weDt3aWR0aDogMTkycHg7aGVpZ2h0OiAyNjNweDtcIj4gXG4gICAgICAgICAgICA8bGlzdCBzdGF0aWMgY2xhc3M9XCJsaXN0NjZcIj5cbiAgICAgICAgICAgICAgPGxpc3QtaXRlbSB0eXBlPVwid2FpdGluZ1Jvd3M2NlwiIGNsYXNzPVwiaXRlbTY2XCIgZm9yPVwie3tpdGVtQXJyYXkgaW4gcmVzdWx0TGlzdDJ9fVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbHVtbiBjZW50ZXJcIiBmb3I9XCJ7e2l0ZW0gaW4gaXRlbUFycmF5fX1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNhbGJ0bjBcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJ7e2l0ZW19fVwiIEBjbGljaz1cIm9uUnNTZWxlY3QoaXRlbSlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgIDxpbWcgc3RhdGljIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlO3RvcDoxOTZweDtsZWZ0OjU2cHg7d2lkdGg6IDgwcHg7aGVpZ2h0OiA2MHB4O1wiIHNyYz1cIi4vYXNzZXRzL2FyYy91cDIucG5nXCIgQGNsaWNrPVwib25CdG5DbGljaygnZG93bicpXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHZpYnJhdG9yIGZyb20gXCJAc3lzdGVtLnZpYnJhdG9yXCI7XG5pbXBvcnQgZGV2aWNlIGZyb20gJ0BzeXN0ZW0uZGV2aWNlJ1xuaW1wb3J0IHsgU2ltcGxlSW5wdXRNZXRob2QgfSBmcm9tIFwiLi9hc3NldHMvZGljVXRpbC5qc1wiO1xuZnVuY3Rpb24gZG9TZWFyY2hEaWMod29yZCwgbGFuZywgY2IpIHtcbiAgaWYgKCF3b3JkKSB7XG4gICAgY2IoW10pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IFNpbXBsZUlucHV0TWV0aG9kLmdldEhhbnppKHdvcmQsIGxhbmcpO1xuICBjYihBcnJheS5pc0FycmF5KHJlc3VsdCkgJiYgcmVzdWx0WzBdID8gcmVzdWx0WzBdIDogW10pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMYXN0KHQpIHtcbiAgaWYgKHQpIHtcbiAgICByZXR1cm4gdC5zdWJzdHIoMCwgdC5sZW5ndGggLSAxKTtcbiAgfVxuICByZXR1cm4gXCJcIjtcbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBoaWRlOiB7XG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAga2V5Ym9hcmR0eXBlOiB7XG4gICAgICBkZWZhdWx0OiBcIlFXRVJUWVwiLFxuICAgIH0sXG4gICAgbWF4bGVuZ3RoOiB7XG4gICAgICBkZWZhdWx0OiA1LFxuICAgIH0sXG4gICAgdmlicmF0ZW1vZGU6IHtcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICBzY3JlZW50eXBlOiB7XG4gICAgICBkZWZhdWx0OiBcImNpcmNsZVwiLFxuICAgIH0sXG4gIH0sXG4gIGRhdGE6IHtcbiAgICBjdmFsOiBcIlwiLFxuICAgIHJlc3VsdExpc3Q6IFtdLFxuICAgIHJlc3VsdExpc3QyOiBbXSxcbiAgICB3YWl0aW5nTGlzdDogW10sXG4gICAgd2FpdGluZ0luZGV4OiAtMSxcbiAgICBsYXN0V2FpdGluZ1N0cjogXCJcIixcbiAgICBkb3duRmxhZzogXCJcIixcbiAgICBsYW5nOiBcImVuXCIsXG4gICAgbnVtRmxhZzogZmFsc2UsXG4gICAgbnVtRmxhZ19qcDogZmFsc2UsXG4gICAgdXBwZXJGbGFnOiBmYWxzZSxcbiAgICBjdmFsTGlzdDogWzAsIDEsIDIsIDMsIDRdLFxuICAgIHBlcmNlbnQ2NzogNTIsXG4gICAgcGVyY2VudDY2OiAwLFxuICAgIC8vIOmSiOWvuXNjcmVlblNoYXBl5Li6cmVjdOeahOiuvuWkh++8jOS8muiHquWKqOiOt+WPlnNjcmVlbldpZHRo5bm257uR5a6a5Yiw5qC5ZGl2XG4gICAgLy8g6L+Z5qC35L6/6IO95ZCM5pe26YCC6YWNbjY35ZKMbzY155Sa6Iez5piv5ZCO57ut6K6+5aSH77yM5L2G5a6e6ZmF5pWI5p6c5Y+v6IO95Y+XZGVzaWduV2lkdGjlvbHlk41cbiAgICBzY3JlZW5XaWR0aDogMzM2LFxuICAgIGtleXM6IHtcbiAgICAgIGZ1bGw6IFtcbiAgICAgICAgW1wiUVwiLCBcIldcIiwgXCJFXCIsIFwiUlwiLCBcIlRcIiwgXCJZXCIsIFwiVVwiLCBcIklcIiwgXCJPXCIsIFwiUFwiXSxcbiAgICAgICAgW1wiQVwiLCBcIlNcIiwgXCJEXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSlwiLCBcIktcIiwgXCJMXCJdLFxuICAgICAgICBbXCJaXCIsIFwiWFwiLCBcIkNcIiwgXCJWXCIsIFwiQlwiLCBcIk5cIiwgXCJNXCJdLFxuICAgICAgXSxcbiAgICAgIHNpZ246IFtcbiAgICAgICAgW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMFwiXSxcbiAgICAgICAgW1wiflwiLCBcIiFcIiwgXCJAXCIsIFwiI1wiLCBcIiVcIiwgXCLigJxcIiwgXCLigJ1cIiwgXCIqXCIsIFwiP1wiLCBcIi9cIl0sXG4gICAgICAgIFtcIihcIiwgXCIpXCIsIFwiLVwiLCBcIl9cIiwgXCI6XCIsIFwiO1wiLCBcIu+8jFwiLCBcIuOAglwiLCBcIi5cIl0sXG4gICAgICBdLFxuICAgICAgc2lnbl9qcDogW1xuICAgICAgICBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIwXCJdLFxuICAgICAgICBbXCJ+XCIsIFwi4oCiXCIsIFwiQFwiLCBcIiNcIiwgXCIlXCIsIFwi44CMXCIsIFwi44CNXCIsIFwiKlwiLCBcIj9cIiwgXCIvXCJdLFxuICAgICAgICBbXCIoXCIsIFwiKVwiLCBcIi1cIiwgXCLigKZcIiwgXCI6XCIsIFwiO1wiLCBcIuOAgVwiLCBcIuOAglwiLCBcIiFcIl0sXG4gICAgICBdLFxuICAgICAgc2lnbjYyOiBbXG4gICAgICAgIFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxuICAgICAgICBbXCIhXCIsIFwiQFwiLCBcIiNcIiwgXCIlXCIsIFwi4oCcXCIsIFwi4oCdXCIsIFwiKlwiXSxcbiAgICAgICAgW1wiKVwiLCBcIi1cIiwgXCJfXCIsIFwiOlwiLCBcIjtcIl0sXG4gICAgICBdLFxuICAgICAgc2lnbjYyX2pwOiBbXG4gICAgICAgIFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdLFxuICAgICAgICBbXCLigKJcIiwgXCJAXCIsIFwiI1wiLCBcIiVcIiwgXCLjgIxcIiwgXCLjgI1cIiwgXCIqXCJdLFxuICAgICAgICBbXCIpXCIsIFwiLVwiLCBcIuKAplwiLCBcIjpcIiwgXCI7XCJdLFxuICAgICAgXSxcbiAgICAgIGZ1bGw2MjogW1xuICAgICAgICBbXCJXXCIsIFwiRVwiLCBcIlJcIiwgXCJUXCIsIFwiWVwiLCBcIlVcIiwgXCJJXCIsIFwiT1wiXSxcbiAgICAgICAgW1wiU1wiLCBcIkRcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJKXCIsIFwiS1wiXSxcbiAgICAgICAgW1wiWFwiLCBcIkNcIiwgXCJWXCIsIFwiQlwiLCBcIk5cIl0sXG4gICAgICBdLFxuICAgICAgdDk6IFtcbiAgICAgICAgW1wiYWJjXCIsIFwiZGVmXCJdLFxuICAgICAgICBbXCJnaGlcIiwgXCJqa2xcIiwgXCJtbm9cIl0sXG4gICAgICAgIFtcInBxcnNcIiwgXCJ0dXZcIiwgXCJ3eHl6XCJdLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBvbkluaXQoKSB7XG4gICAgaWYgKHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICBjb25zdCB0ZW1wQ3ZhbExpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhsZW5ndGg7IGkrKykge1xuICAgICAgICB0ZW1wQ3ZhbExpc3QucHVzaChpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3ZhbExpc3QgPSB0ZW1wQ3ZhbExpc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjcmVlbnR5cGUgPT09IFwicmVjdFwiIHx8IHRoaXMuc2NyZWVudHlwZSA9PT0gXCJwaWxsLXNoYXBlZFwiKSB7XG4gICAgICB0aGlzLmFkanVzdFNjcmVlbldpZHRoKCk7XG4gICAgfVxuICAgIHRoaXMuJHdhdGNoKFwiaGlkZVwiLCBcIndhdGNoSGlkZVByb3BzQ2hhbmdlXCIpO1xuICAgIHRoaXMuJHdhdGNoKFwibWF4bGVuZ3RoXCIsIFwid2F0Y2hNYXhMZW5ndGhQcm9wc0NoYW5nZVwiKTtcbiAgICB0aGlzLiR3YXRjaChcImtleWJvYXJkdHlwZVwiLCBcIndhdGNoS2V5Ym9hcmRUeXBlUHJvcHNDaGFuZ2VcIik7XG4gIH0sXG4gIGFkZEFsbFR4dCh0eHQpIHtcbiAgICB0aGlzLiRlbWl0KFwiY29tcGxldGVcIiwgeyBjb250ZW50OiB0eHQgfSk7XG4gIH0sXG4gIG9uUnNTZWxlY3QodHh0KSB7XG4gICAgdGhpcy5vblZpYnJhdGUoKTtcbiAgICB0aGlzLmN2YWwgPSBcIlwiO1xuICAgIHRoaXMuYWRkQWxsVHh0KHR4dCk7XG4gICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcbiAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgIHRoaXMuZG93bkZsYWcgPSBcIlwiO1xuICB9LFxuICBvbkJ0bkNsaWNrKHNpZ24pIHtcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIHN3aXRjaCAoc2lnbikge1xuICAgICAgY2FzZSBcIkFDXCI6XG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XG4gICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxhbmdcIjpcbiAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlS2V5Ym9hcmRcIiwge30pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJEXCI6XG4gICAgICAgIGlmICh0aGlzLndhaXRpbmdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcbiAgICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3ZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jdmFsID0gZGVsZXRlTGFzdCh0aGlzLmN2YWwpO1xuICAgICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImRlbGV0ZVwiLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3BhY2VcIjpcbiAgICAgICAgdGhpcy5hZGRBbGxUeHQoXCIgXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIHRoaXMuZG93bkZsYWcgPSB0aGlzLmRvd25GbGFnID09PSBcImRvd25cIiA/IFwiXCIgOiBcImRvd25cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nU3RyICE9IHNpZ24gJiYgdGhpcy5sYXN0V2FpdGluZ1N0cikge1xuICAgICAgICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIiB8fCB0aGlzLmxhbmcgPT09ICdqcCcpIHtcbiAgICAgICAgICAgIHRoaXMuY3ZhbCArPSB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudXBwZXJGbGFnKSB7XG4gICAgICAgICAgICAgIHRoaXMuYWRkQWxsVHh0KHRoaXMud2FpdGluZ0xpc3RbdGhpcy53YWl0aW5nSW5kZXhdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRBbGxUeHQodGhpcy53YWl0aW5nTGlzdFt0aGlzLndhaXRpbmdJbmRleF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XG4gICAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzd2l0Y2hOdW1cIjpcbiAgICAgICAgdGhpcy5udW1GbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5udW1GbGFnX2pwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY2xlYXJXYWl0aW5nKCk7XG4gICAgICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN3aXRjaE51bV9qcFwiOlxuICAgICAgICB0aGlzLm51bUZsYWcgPSB0cnVlO1xuICAgICAgICB0aGlzLm51bUZsYWdfanAgPSB0cnVlO1xuICAgICAgICB0aGlzLmN2YWwgPSBcIlwiO1xuICAgICAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xuICAgICAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzd2l0Y2hDblwiOlxuICAgICAgICB0aGlzLm51bUZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5udW1GbGFnX2pwID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN3aXRjaFVwcGVyXCI6XG4gICAgICAgIHRoaXMudXBwZXJGbGFnID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3dpdGNoTG93XCI6XG4gICAgICAgIHRoaXMudXBwZXJGbGFnID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNpZ24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5hZGRBbGxUeHQoc2lnbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMud2FpdGluZ0luZGV4ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nU3RyID09PSBzaWduKSB7XG4gICAgICAgICAgICAgIHRoaXMud2FpdGluZ0luZGV4Kys7XG4gICAgICAgICAgICAgIGlmICh0aGlzLndhaXRpbmdJbmRleCA+PSB0aGlzLmxhc3RXYWl0aW5nU3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZyA9PT0gXCJjblwiIHx8IHRoaXMubGFuZyA9PT0gJ2pwJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3ZhbCArPSB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cHBlckZsYWcpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQWxsVHh0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0W3RoaXMud2FpdGluZ0luZGV4XS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hZGRBbGxUeHQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FpdGluZ0xpc3RbdGhpcy53YWl0aW5nSW5kZXhdLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmxhc3RXYWl0aW5nU3RyID0gc2lnbjtcbiAgICAgICAgICAgICAgdGhpcy53YWl0aW5nSW5kZXggPSAwO1xuICAgICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0ID0gc2lnbi5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0V2FpdGluZ1N0ciA9IHNpZ247XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLndhaXRpbmdMaXN0ID0gc2lnbi5zcGxpdChcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIGNsZWFyV2FpdGluZygpIHtcbiAgICB0aGlzLndhaXRpbmdMaXN0ID0gW107XG4gICAgdGhpcy53YWl0aW5nSW5kZXggPSAtMTtcbiAgICB0aGlzLmxhc3RXYWl0aW5nU3RyID0gXCJcIjtcbiAgfSxcbiAgcmVzZXRSZXNsdXRMaXN0KCkge1xuICAgIGxldCB3YXRpbmdTdHIgPSBcIlwiO1xuICAgIGlmICh0aGlzLmxhc3RXYWl0aW5nU3RyICYmIHRoaXMubGFzdFdhaXRpbmdTdHJbdGhpcy53YWl0aW5nSW5kZXhdKSB7XG4gICAgICB3YXRpbmdTdHIgPSB0aGlzLmxhc3RXYWl0aW5nU3RyW3RoaXMud2FpdGluZ0luZGV4XTtcbiAgICB9XG4gICAgaWYgKCEodGhpcy5jdmFsICsgd2F0aW5nU3RyKSB8fCAodGhpcy5sYW5nICE9PSBcImNuXCIgJiYgdGhpcy5sYW5nICE9PSBcImpwXCIpKSB7XG4gICAgICB0aGlzLnJlc3VsdExpc3QgPSBbXTtcbiAgICAgIHRoaXMuc2V0UmVzdWx0TGlzdEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdldFJlc3VsdEJ5V29yZCh0aGlzLmN2YWwgKyB3YXRpbmdTdHIpO1xuICB9LFxuICBzZXRSZXN1bHRMaXN0QWxsKCkge1xuICAgIHRoaXMucmVzdWx0TGlzdDIgPSBbXTtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXkucHVzaCh0aGlzLnJlc3VsdExpc3RbaV0pO1xuICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gcGFyc2VJbnQodGhpcy5tYXhsZW5ndGgpKSB7XG4gICAgICAgIHRoaXMucmVzdWx0TGlzdDIucHVzaChhcnJheSk7XG4gICAgICAgIGFycmF5ID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhcnJheS5sZW5ndGggPiAwICYmIGFycmF5Lmxlbmd0aCA8IHBhcnNlSW50KHRoaXMubWF4bGVuZ3RoKSkge1xuICAgICAgdGhpcy5yZXN1bHRMaXN0Mi5wdXNoKGFycmF5KTtcbiAgICB9XG4gIH0sXG4gIGdldFJlc3VsdEJ5V29yZCh2YWwpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBkb1NlYXJjaERpYyh2YWwsIHRoYXQubGFuZywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoYXQucmVzdWx0TGlzdCA9IGRhdGE7XG4gICAgICB0aGF0LnNldFJlc3VsdExpc3RBbGwoKTtcbiAgICB9KTtcbiAgfSxcbiAgb25TZWxlY3QobnVtKSB7XG4gICAgdGhpcy4kZW1pdChcImtleURvd25cIiwgeyBjb250ZW50OiBudW0gfSk7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmR0eXBlID09PSBcIlQ5XCIgJiYgdGhpcy5zY3JlZW50eXBlICE9PSBcInBpbGwtc2hhcGVkXCIpIHtcbiAgICAgIHRoaXMub25CdG5DbGljayhudW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIGlmICgodGhpcy5sYW5nID09PSAnY24nIHx8IHRoaXMubGFuZyA9PT0gJ2pwJykgICYmICF0aGlzLm51bUZsYWcpIHtcbiAgICAgIHRoaXMuY3ZhbCArPSBudW0udG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubGFuZyA9PT0gXCJlblwiICYmICF0aGlzLm51bUZsYWcpIHtcbiAgICAgIGlmICh0aGlzLnVwcGVyRmxhZykge1xuICAgICAgICB0aGlzLmFkZEFsbFR4dChudW0udG9VcHBlckNhc2UoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZEFsbFR4dChudW0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQWxsVHh0KG51bSk7XG4gICAgfVxuICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gIH0sXG4gIG9uU2VsZWN0V2FpdGluZyhudW0pIHtcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIGlmICh0aGlzLmxhbmcgPT09IFwiY25cIikge1xuICAgICAgdGhpcy5jdmFsICs9IHRoaXMud2FpdGluZ0xpc3RbbnVtXS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy51cHBlckZsYWcpIHtcbiAgICAgICAgdGhpcy5hZGRBbGxUeHQodGhpcy53YWl0aW5nTGlzdFtudW1dLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRBbGxUeHQodGhpcy53YWl0aW5nTGlzdFtudW1dLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xuICAgIHRoaXMucmVzZXRSZXNsdXRMaXN0KCk7XG4gIH0sXG4gIHdhdGNoSGlkZVByb3BzQ2hhbmdlKG5ld1YsIG9sZFYpIHtcbiAgICB0aGlzLiRlbWl0KFwidmlzaWJpbGl0eUNoYW5nZVwiLCB7IHZpc2libGU6IG5ld1YgfSk7XG4gIH0sXG4gIHdhdGNoTWF4TGVuZ3RoUHJvcHNDaGFuZ2UobmV3Viwgb2xkVikge1xuICAgIGlmIChuZXdWKSB7XG4gICAgICBjb25zdCB0ZW1wQ3ZhbExpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VjsgaSsrKSB7XG4gICAgICAgIHRlbXBDdmFsTGlzdC5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdmFsTGlzdCA9IHRlbXBDdmFsTGlzdDtcbiAgICB9XG4gIH0sXG4gIHdhdGNoS2V5Ym9hcmRUeXBlUHJvcHNDaGFuZ2UobmV3Viwgb2xkVikge1xuICAgIGlmIChuZXdWID09PSBcIlQ5XCIgJiYgdGhpcy5sYW5nID09PSBcImpwXCIpIHtcbiAgICAgIHRoaXMubGFuZyA9IFwiY25cIjtcbiAgICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgICB0aGlzLmNsZWFyV2FpdGluZygpO1xuICAgICAgdGhpcy5yZXNldFJlc2x1dExpc3QoKTtcbiAgICB9XG4gIH0sXG4gIG9uVmlicmF0ZSgpIHtcbiAgICBpZiAodGhpcy52aWJyYXRlbW9kZSAhPSBcIlwiKSB7XG4gICAgICB2aWJyYXRvci52aWJyYXRlKHsgbW9kZTogdGhpcy52aWJyYXRlbW9kZSB9KTtcbiAgICB9XG4gIH0sXG4gIGhhbmRlbFNjcm9sbChldmVudCkge1xuICAgIGxldCBwZXJjZW50VGVtcDY3ID0gKGV2ZW50LnNjcm9sbFggLyA2MzYpICogMTAwICsgNTIuODtcbiAgICB0aGlzLnBlcmNlbnQ2NyA9IHBhcnNlSW50KHBlcmNlbnRUZW1wNjcgPD0gMTAwID8gcGVyY2VudFRlbXA2NyA6IDEwMCk7XG4gICAgbGV0IHBlcmNlbnRUZW1wNjYgPSAoZXZlbnQuc2Nyb2xsWCAvIDYzMykgKiAxMDA7XG4gICAgdGhpcy5wZXJjZW50NjYgPSBwYXJzZUludChwZXJjZW50VGVtcDY2IDw9IDEwMCA/IHBlcmNlbnRUZW1wNjYgOiAxMDApO1xuICB9LFxuICBwdXNoQ3ZhbCgpIHtcbiAgICB0aGlzLm9uVmlicmF0ZSgpO1xuICAgIGxldCB0ZW1wID0gdGhpcy5jdmFsO1xuICAgIHRoaXMuY3ZhbCA9IFwiXCI7XG4gICAgdGhpcy5jbGVhcldhaXRpbmcoKTtcbiAgICB0aGlzLnJlc2V0UmVzbHV0TGlzdCgpO1xuICAgIHRoaXMuYWRkQWxsVHh0KHRlbXApO1xuICB9LFxuICBhZGp1c3RTY3JlZW5XaWR0aCgpe1xuICAgIGRldmljZS5nZXRJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSBkYXRhLnNjcmVlbldpZHRoO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnBhZ2Uge1xuXHR3aWR0aDoxMDAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHRib3R0b206MFxufVxuLml0ZW0ge1xuXHRoZWlnaHQ6NTJweDtcblx0ZmxleDoxXG59XG4uY2FsYnRuMCB7XG5cdGNvbG9yOiNmZmY7XG5cdGZvbnQtc2l6ZToyOHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMzgsMzgsMCk7XG5cdGJvcmRlci1yYWRpdXM6MDtcblx0aGVpZ2h0OjUycHg7XG5cdHdpZHRoOjUycHg7XG5cdHRleHQtYWxpZ246Y2VudGVyXG59XG4uY2FsYnRuMDIge1xuXHRjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzgsMzgsMzgsMCk7XG5cdGJvcmRlci1yYWRpdXM6MHB4O1xuXHRmb250LXNpemU6MzJweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGhlaWdodDo0MnB4O1xufVxuLmNhbGJ0bmZ1bGwge1xuXHRjb2xvcjojZmZmO1xuXHRmb250LXNpemU6MjRweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xuXHRib3JkZXItcmFkaXVzOjEycHg7XG5cdG1hcmdpbi1yaWdodDo0cHg7XG5cdGhlaWdodDo1MnB4O1xuXHR3aWR0aDo0MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpXG59XG4uY2FsYnRudDkge1xuXHRjb2xvcjojZmZmO1xuXHRmb250LXNpemU6MjVweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xuXHRib3JkZXItcmFkaXVzOjk5OXB4O1xuXHRtYXJnaW4tcmlnaHQ6NHB4O1xuXHR3aWR0aDo5NHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJvcmRlcjozcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KVxufVxuLmNhbHRleHQge1xuXHR0ZXh0LWFsaWduOmxlZnQ7XG5cdGxpbmUtaGVpZ2h0OjM4cHg7XG5cdGxpbmVzOjE7XG5cdHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG5cdGNvbG9yOiMwZDg0ZmY7XG5cdGhlaWdodDo0NXB4O1xuXHRmb250LXNpemU6MjhweDtcblx0dGV4dC1hbGlnbjpsZWZ0O1xuXHRmb250LXdlaWdodDpib2xkO1xuXHRwYWRkaW5nLWxlZnQ6OHB4XG59XG4ubGlzdDMge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjM4cHg7XG5cdGxlZnQ6NzhweDtcblx0d2lkdGg6MzI0cHg7XG5cdGhlaWdodDoxNjBweDtcblx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMyNjI2MjY7XG5cdGJvcmRlci1yYWRpdXM6MTJweFxufVxuLml0ZW0zIHtcblx0d2lkdGg6MzI0cHg7XG5cdGhlaWdodDo1MnB4XG59XG4uY2FsYnRuNjcge1xuXHRjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xuXHRmb250LXNpemU6MzJweDtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMzgsMzgsMzgpO1xuXHRtYXJnaW4tcmlnaHQ6NHB4O1xuXHR3aWR0aDo2MHB4O1xuXHRoZWlnaHQ6NjBweDtcblx0Ym9yZGVyLXJhZGl1czozMHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xufVxuI2tleWJvYXJkNjcge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowcHg7XG5cdHRvcDo4MnB4O1xuXHR3aWR0aDoxMDAlO1xuXHRoZWlnaHQ6MTcwcHg7XG59XG4ja2V5Ym9hcmQ2NiB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRsZWZ0OjBweDtcblx0dG9wOjgycHg7XG5cdHdpZHRoOjEwMCU7XG5cdGhlaWdodDoxNzBweDtcbn1cbi5saXN0Njcge1xuXHR0b3A6MHB4O1xuXHR3aWR0aDo5Ni40JTtcblx0aGVpZ2h0OjE3MHB4O1xuXHRib3JkZXItcmFkaXVzOjMwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IzI2MjYyNjtcblx0Ym9yZGVyOjNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuXHRwYWRkaW5nOjBweCAxMHB4O1xufVxuLml0ZW02NyB7XG5cdGhlaWdodDo1MHB4O1xufVxuLmNhbGJ0bjY2IHtcblx0Y29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcblx0Zm9udC1zaXplOjMycHg7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiKDM4LDM4LDM4KTtcblx0bWFyZ2luLXJpZ2h0OjNweDtcblx0d2lkdGg6NjBweDtcblx0aGVpZ2h0OjYwcHg7XG5cdGJvcmRlci1yYWRpdXM6MzBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJvcmRlcjozcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbn1cbi5saXN0NjYge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDozcHg7XG5cdHRvcDowcHg7XG5cdHdpZHRoOjE4NnB4O1xuXHRoZWlnaHQ6MTg2cHg7XG5cdGJvcmRlci1yYWRpdXM6MzBweDtcblx0YmFja2dyb3VuZC1jb2xvcjojMjYyNjI2O1xuXHRib3JkZXI6M3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XG5cdHBhZGRpbmc6MTBweFxufVxuLml0ZW02NiB7XG5cdGhlaWdodDo0MnB4O1xufVxuLndhaXRpbmcta2V5cyB7XG5cdHdpZHRoOjM2cHg7XG5cdGhlaWdodDo0MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5rZXlib2FyZC1yb3dzLXJlY3QtdDkge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FsYnRudDktcmVjdCB7XG4gIGZsZXg6MTtcbiAgaGVpZ2h0OjU1cHg7XG4gIG1hcmdpbjowIDNweDtcbiAgd2lkdGg6dW5zZXQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyMzApIGFuZCAobWF4LXdpZHRoOiAyMzUpIGFuZCAoc2hhcGU6IGNpcmNsZSkge1xuICAjZnVsbC1rZXlib2FyZCB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuOTYpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46MCAzMjFweDtcbiAgICBvdmVyZmxvdzp2aXNpYmxlO1xuICB9XG59XG48L3N0eWxlPlxuIiwiLy8g57K+566A54mI77ya56e76Zmk5Lit5paHL+aXpeaWh+ivjeW6k++8jOS7heS/neeVmeaOpeWPo+WFvOWuueaAp1xubGV0IFNpbXBsZUlucHV0TWV0aG9kID0ge1xuICBkaWN0OiB7IHB5Mmh6OiB7fSwgcHkyaHoyOiB7fSB9XG59XG5cblNpbXBsZUlucHV0TWV0aG9kLmluaXREaWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIOivjeW6k+W3suWIoOmZpO+8jOS7heiLseaWh+i+k+WFpVxufVxuXG5TaW1wbGVJbnB1dE1ldGhvZC5nZXRIYW56aSA9IGZ1bmN0aW9uKHdvcmQsIGxhbmcpIHtcbiAgLy8g5LuF6Iux5paH5qih5byP77yM55u05o6l6L+U5Zue56m6XG4gIHJldHVybiBbXVxufVxuXG5TaW1wbGVJbnB1dE1ldGhvZC5nZXRQaW55aW4gPSBmdW5jdGlvbih3b3JkKSB7XG4gIHJldHVybiBcIlwiXG59XG5cbmV4cG9ydCB7IFNpbXBsZUlucHV0TWV0aG9kIH1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9ICgoKSA9PiB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ucnYgPSAoKSA9PiAoXCIxLjcuMTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ1aWQgPSBcImJ1bmRsZXI9cnNwYWNrQDEuNy4xMVwiOyIsIjxpbXBvcnQgbmFtZT1cImlucHV0LW1ldGhvZFwiIHNyYz1cIi4uLy4uL2NvbXBvbmVudHMvSW5wdXRNZXRob2QvSW5wdXRNZXRob2QudXhcIj48L2ltcG9ydD5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1hcmVhXCI+XG5cbiAgICAgIDwhLS0gPT09PT09PT09PSDmlrnlsY/pobbpg6jmoI8gPT09PT09PT09PSAtLT5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwiaGVhZGVyLWFyZWFcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvY29tbW9uL2hkLnBuZ1wiIGNsYXNzPVwiaGVhZGVyLWJnXCIgLz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aW1lXCI+e3sgbm93VGltZSB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoZC10aXRsZVwiPnt7ICR0KFwidGVybWluYWwudGl0bGVcIikgfX08L3RleHQ+XG4gICAgICAgIDxpbWcgc3JjPVwiL2NvbW1vbi9iYWNrLnBuZ1wiIEBjbGljaz1cImdvQmFja1wiIGNsYXNzPVwiaGQtYmFja1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc2hvdz1cInt7c2hvd1Rvb2xiYXJ9fVwiIGNsYXNzPVwicGlsbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZS13cmFwXCIgQGNsaWNrPVwiZ29CYWNrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpbGwtbW9yZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib2R5XCI+XG4gICAgICAgIDwhLS0gPT09PT09PT09PSDlkb3ku6TovpPlhaXmoI8gPT09PT09PT09PSAtLT5cbiAgICAgICAgPGRpdiBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJpbnB1dC1iYXJcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImlucHV0LXByb21wdFwiPj48L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbnB1dC10ZXh0XCIgb25jbGljaz1cInRvZ2dsZUtleWJvYXJkXCI+e3sgY21kQnVmZmVyID8gY21kQnVmZmVyIDogJHQoXCJ0ZXJtaW5hbC5pbnB1dEhpbnRcIikgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbnB1dC1zZW5kXCIgb25jbGljaz1cInNlbmRCdWZmZXJcIj57eyAkdChcInRlcm1pbmFsLnNlbmRcIikgfX08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gPT09PT09PT09PSDmnIDov5Hlkb3ku6QgPT09PT09PT09PSAtLT5cbiAgICAgICAgPGRpdiBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJjYXJkXCIgb25jbGljaz1cImdvSGlzdG9yeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY2FyZC1sYWJlbFwiPnt7ICR0KFwidGVybWluYWwuaGlzdG9yeVRpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7ICR0KFwidGVybWluYWwuaGlzdG9yeURlc2NcIikgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gPT09PT09PT09PSDlv6vmjbflkb3ku6TljaHniYcgPT09PT09PT09PSAtLT5cbiAgICAgICAgPGRpdiBzaG93PVwie3tzaG93VG9vbGJhcn19XCIgY2xhc3M9XCJjYXJkXCIgb25jbGljaz1cImdvUXVpY2tDbWRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLWxhYmVsXCI+e3sgJHQoXCJ0ZXJtaW5hbC5xdWlja1RpdGxlXCIpIH19PC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJjYXJkLXN1YlwiPnt7ICR0KFwidGVybWluYWwucXVpY2tEZXNjXCIpIH19PC90ZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tID09PT09PT09PT0g6L6T5Ye65Yy65Z+fID09PT09PT09PT0gLS0+XG4gICAgICAgIDxzY3JvbGwgaWQ9XCJvdXRwdXRTY3JvbGxcIiBjbGFzcz1cIm91dHB1dC1zY3JvbGxcIiBzY3JvbGwteT1cInRydWVcIiBib3VuY2VzPVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJsb2ctdGV4dFwiPnt7IG91dHB1dFRleHQgfX08L3RleHQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2Nyb2xsPlxuXG4gICAgICAgIDwhLS0gPT09PT09PT09PSDmn6XnnIvlrozmlbTovpPlh7ogPT09PT09PT09PSAtLT5cbiAgICAgICAgPGRpdiBzaG93PVwie3toYXNGdWxsT3V0cHV0ICYmIHNob3dUb29sYmFyfX1cIiBjbGFzcz1cImZ1bGwtb3V0cHV0LWJ0blwiIG9uY2xpY2s9XCJnb1ZpZXdGdWxsT3V0cHV0XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJmdWxsLW91dHB1dC10ZXh0XCI+e3sgJHQoXCJ0ZXJtaW5hbC5mdWxsT3V0cHV0XCIpIH19PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA9PT09PT09PT09IOi+k+WFpeazlemUruebmCA9PT09PT09PT09IC0tPlxuICAgIDxpbnB1dC1tZXRob2QgaGlkZT1cInt7ICFzaG93S2V5Ym9hcmQgfX1cIiBzY3JlZW50eXBlPVwie3sgc2NyZWVuVHlwZSB9fVwiXG4gICAgICAgICAgICAgICAgICAga2V5Ym9hcmR0eXBlPVwiUVdFUlRZXCIgdmlicmF0ZW1vZGU9XCJzaG9ydFwiIG1heGxlbmd0aD1cIjVcIlxuICAgICAgICAgICAgICAgICAgIEBjb21wbGV0ZT1cIm9uS2V5Q29tcGxldGVcIiBAZGVsZXRlPVwib25LZXlEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgIEBjbG9zZS1rZXlib2FyZD1cIm9uQ2xvc2VLZXlib2FyZFwiPjwvaW5wdXQtbWV0aG9kPlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcbmltcG9ydCBmaWxlIGZyb20gXCJAc3lzdGVtLmZpbGVcIlxuaW1wb3J0IGRldmljZSBmcm9tIFwiQHN5c3RlbS5kZXZpY2VcIlxuXG52YXIgQ01EX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvY21kX3JlcXVlc3QuanNvblwiXG52YXIgUkVTVUxUX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvY21kX3Jlc3VsdC5qc29uXCJcbnZhciBISVNUT1JZX0ZJTEUgPSBcImludGVybmFsOi8vZmlsZXMvY21kX2hpc3RvcnkuanNvblwiXG52YXIgSElTVE9SWV9DT05GSUdfRklMRSA9IFwiaW50ZXJuYWw6Ly9maWxlcy9oaXN0b3J5X2NvbmZpZy5qc29uXCJcbnZhciBjbWRTZXEgPSBEYXRlLm5vdygpXG52YXIgbGFzdFJlc3VsdFNlcSA9IC0xXG52YXIgbGFzdFNlbnRTZXEgPSAtMVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICBub3dUaW1lOiBcIjAwOjAwXCIsXG4gICAgdGltZXI6IG51bGwsXG4gICAgcG9sbFRpbWVyOiBudWxsLFxuICAgIG91dHB1dFRleHQ6IFwiXCIsXG4gICAgc2hvd1Rvb2xiYXI6IHRydWUsXG4gICAgY21kQnVmZmVyOiBcIlwiLFxuICAgIHNob3dLZXlib2FyZDogZmFsc2UsXG4gICAgc2NyZWVuVHlwZTogXCJyZWN0XCIsXG4gICAgbGF0ZXN0RnVsbE91dHB1dDogXCJcIixcbiAgICBoYXNGdWxsT3V0cHV0OiBmYWxzZSxcbiAgICBsYXN0U2VudENtZDogXCJcIixcbiAgICBoaXN0b3J5TGltaXQ6IDVcbiAgfSxcblxuICBwcm90ZWN0ZWQ6IHsgY21kOiBcIlwiLCBhdXRvU2VuZDogXCJcIiB9LFxuXG4gIG9uSW5pdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVwZGF0ZVRpbWUoKVxuICAgIHNlbGYub3V0cHV0VGV4dCA9IHNlbGYuJHQoXCJ0ZXJtaW5hbC5zdGFydEhpbnRcIilcbiAgICBpZiAodGhpcy5jbWQpIHtcbiAgICAgIHRoaXMuY21kQnVmZmVyID0gdGhpcy5jbWRcbiAgICB9XG4gICAgc2VsZi5sb2FkSGlzdG9yeUxpbWl0KClcbiAgICBpZiAodGhpcy5zaG91bGRBdXRvU2VuZCgpKSB7XG4gICAgICBzZWxmLnNlbmRDb21tYW5kKHRoaXMuY21kLCBmYWxzZSlcbiAgICAgIHNlbGYuY21kQnVmZmVyID0gXCJcIlxuICAgIH1cbiAgICBzZWxmLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IHNlbGYudXBkYXRlVGltZSgpIH0sIDEwMDApXG5cbiAgICAvKiDmo4DmtYvlsY/luZXnsbvlnosgKi9cbiAgICBkZXZpY2UuZ2V0SW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXQpIHtcbiAgICAgICAgdmFyIHcgPSByZXQuc2NyZWVuV2lkdGggfHwgMzM2XG4gICAgICAgIHNlbGYuc2NyZWVuVHlwZSA9IHcgPD0gMjMwID8gXCJwaWxsLXNoYXBlZFwiIDogXCJyZWN0XCJcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5zY3JlZW5UeXBlID0gXCJyZWN0XCJcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIG9uU2hvdygpIHtcbiAgICAvKiDpobXpnaLlj6/op4Hml7blkK/liqjova7or6IgKi9cbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmxvYWRIaXN0b3J5TGltaXQoKVxuICAgIGlmICghc2VsZi5wb2xsVGltZXIpIHtcbiAgICAgIHNlbGYucG9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7IHNlbGYucG9sbFJlc3VsdCgpIH0sIDgwMClcbiAgICB9XG4gIH0sXG5cbiAgb25IaWRlKCkge1xuICAgIC8qIOmhtemdoumakOiXj+aXtuWBnOatoui9ruivoiAqL1xuICAgIGlmICh0aGlzLnBvbGxUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxUaW1lcilcbiAgICAgIHRoaXMucG9sbFRpbWVyID0gbnVsbFxuICAgIH1cbiAgfSxcblxuICBvbkRlc3Ryb3koKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIGlmICh0aGlzLnBvbGxUaW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxUaW1lcilcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlVGltZSgpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKClcbiAgICB0aGlzLm5vd1RpbWUgPSAoXCIwXCIgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxuICB9LFxuXG4gIC8qID09PT09PSDovpPlhaXms5Xkuovku7YgPT09PT09ICovXG4gIHRvZ2dsZUtleWJvYXJkKCkge1xuICAgIHRoaXMuc2hvd0tleWJvYXJkID0gIXRoaXMuc2hvd0tleWJvYXJkXG4gIH0sXG5cbiAgb25LZXlDb21wbGV0ZShlKSB7XG4gICAgdGhpcy5jbWRCdWZmZXIgPSB0aGlzLmNtZEJ1ZmZlciArIGUuZGV0YWlsLmNvbnRlbnRcbiAgfSxcblxuICBvbktleURlbGV0ZSgpIHtcbiAgICBpZiAodGhpcy5jbWRCdWZmZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jbWRCdWZmZXIgPSB0aGlzLmNtZEJ1ZmZlci5zdWJzdHJpbmcoMCwgdGhpcy5jbWRCdWZmZXIubGVuZ3RoIC0gMSlcbiAgICB9XG4gIH0sXG5cbiAgb25DbG9zZUtleWJvYXJkKCkge1xuICAgIHRoaXMuc2hvd0tleWJvYXJkID0gZmFsc2VcbiAgfSxcblxuICBzaG91bGRBdXRvU2VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRvU2VuZCA9PT0gdHJ1ZSB8fCB0aGlzLmF1dG9TZW5kID09PSBcInRydWVcIiB8fCB0aGlzLmF1dG9TZW5kID09PSBcIjFcIlxuICB9LFxuXG4gIG5vcm1hbGl6ZUhpc3RvcnlMaW1pdChsaW1pdCkge1xuICAgIHJldHVybiB0aGlzLiRhcHAuJGRlZi5zaGVsbERhdGEubm9ybWFsaXplSGlzdG9yeUxpbWl0KGxpbWl0KVxuICB9LFxuXG4gIGxvYWRIaXN0b3J5TGltaXQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IEhJU1RPUllfQ09ORklHX0ZJTEUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICBzZWxmLmhpc3RvcnlMaW1pdCA9IHNlbGYubm9ybWFsaXplSGlzdG9yeUxpbWl0KGpzb24ubGltaXQpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBzZWxmLmhpc3RvcnlMaW1pdCA9IHNlbGYuJGFwcC4kZGVmLnNoZWxsRGF0YS5kZWZhdWx0SGlzdG9yeUxpbWl0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5oaXN0b3J5TGltaXQgPSBzZWxmLiRhcHAuJGRlZi5zaGVsbERhdGEuZGVmYXVsdEhpc3RvcnlMaW1pdFxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgbm9ybWFsaXplSGlzdG9yeShpdGVtcykge1xuICAgIHZhciBub3JtYWxpemVkID0gW11cbiAgICB2YXIgc2VlbiA9IHt9XG4gICAgaWYgKCEoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSkpIHJldHVybiBub3JtYWxpemVkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNtZCA9IGl0ZW1zW2ldXG4gICAgICBpZiAodHlwZW9mIGNtZCAhPT0gXCJzdHJpbmdcIikgY29udGludWVcbiAgICAgIGNtZCA9IGNtZC50cmltKClcbiAgICAgIGlmICghY21kIHx8IHNlZW5bY21kXSkgY29udGludWVcbiAgICAgIHNlZW5bY21kXSA9IHRydWVcbiAgICAgIG5vcm1hbGl6ZWQucHVzaChjbWQpXG4gICAgICBpZiAobm9ybWFsaXplZC5sZW5ndGggPj0gdGhpcy5oaXN0b3J5TGltaXQpIGJyZWFrXG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkXG4gIH0sXG5cbiAgcmVjb3JkTWFudWFsSGlzdG9yeShjbWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBpZiAoIWNtZCkgcmV0dXJuXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IEhJU1RPUllfRklMRSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGxpc3QgPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgbGlzdC51bnNoaWZ0KGNtZClcbiAgICAgICAgc2VsZi53cml0ZUhpc3RvcnkobGlzdClcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi53cml0ZUhpc3RvcnkoW2NtZF0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB3cml0ZUhpc3RvcnkoaXRlbXMpIHtcbiAgICBmaWxlLndyaXRlVGV4dCh7XG4gICAgICB1cmk6IEhJU1RPUllfRklMRSxcbiAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHRoaXMubm9ybWFsaXplSGlzdG9yeShpdGVtcykpLFxuICAgICAgYXBwZW5kOiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgLyogPT09PT09IOWPkemAgeWRveS7pCA9PT09PT0gKi9cbiAgc2VuZEJ1ZmZlcigpIHtcbiAgICBpZiAoIXRoaXMuY21kQnVmZmVyKSByZXR1cm5cbiAgICB2YXIgY21kID0gdGhpcy5jbWRCdWZmZXJcbiAgICB0aGlzLnNlbmRDb21tYW5kKGNtZCwgdHJ1ZSlcbiAgICB0aGlzLmNtZEJ1ZmZlciA9IFwiXCJcbiAgICB0aGlzLnNob3dLZXlib2FyZCA9IGZhbHNlXG4gIH0sXG5cbiAgc2VuZENvbW1hbmQoY21kLCBzaG91bGRSZWNvcmQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICBjbWRTZXErK1xuICAgIGxhc3RTZW50U2VxID0gY21kU2VxXG4gICAgc2VsZi5oYXNGdWxsT3V0cHV0ID0gZmFsc2VcbiAgICBzZWxmLmxhdGVzdEZ1bGxPdXRwdXQgPSBcIlwiXG4gICAgc2VsZi5sYXN0U2VudENtZCA9IGNtZFxuICAgIHNlbGYub3V0cHV0VGV4dCA9IFwiPiBcIiArIGNtZCArIFwiXFxuXFxuXCIgKyBzZWxmLiR0KFwidGVybWluYWwud2FpdGluZ1wiKVxuICAgIHZhciBkID0gbmV3IERhdGUoKVxuICAgIHZhciB0cyA9IChcIjBcIiArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgK1xuICAgICAgICAgICAgIChcIjBcIiArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArXG4gICAgICAgICAgICAgKFwiMFwiICsgZC5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKVxuXG4gICAgdmFyIHJlcSA9IEpTT04uc3RyaW5naWZ5KHsgc2VxOiBjbWRTZXEsIGNtZDogY21kLCB0aW1lc3RhbXA6IHRzIH0pXG5cbiAgICBmaWxlLndyaXRlVGV4dCh7XG4gICAgICB1cmk6IENNRF9GSUxFLFxuICAgICAgdGV4dDogcmVxLFxuICAgICAgYXBwZW5kOiBmYWxzZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc2hvdWxkUmVjb3JkKSB7XG4gICAgICAgICAgc2VsZi5yZWNvcmRNYW51YWxIaXN0b3J5KGNtZClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3V0ID0gc2VsZi5vdXRwdXRUZXh0XG4gICAgICAgIHZhciBoaW50ID0gc2VsZi4kdChcInRlcm1pbmFsLnN0YXJ0SGludFwiKVxuICAgICAgICBpZiAob3V0LmluZGV4T2YoaGludCkgIT09IC0xKSBvdXQgPSBvdXQucmVwbGFjZShoaW50LCBcIlwiKVxuICAgICAgICBzZWxmLm91dHB1dFRleHQgPSBcIiQgXCIgKyBjbWQgKyBcIlxcblxcbltcIiArIHNlbGYuJHQoXCJ0ZXJtaW5hbC5lcnJvckxhYmVsXCIpICsgXCJdIFwiICsgc2VsZi4kdChcInRlcm1pbmFsLmVycm9yU2VuZFwiKSArIFwiXFxuXFxuXCIgKyBvdXRcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIC8qID09PT09PSDova7or6Lnu5PmnpwgPT09PT09ICovXG4gIHBvbGxSZXN1bHQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgZmlsZS5yZWFkVGV4dCh7XG4gICAgICB1cmk6IFJFU1VMVF9GSUxFLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEudGV4dCkgcmV0dXJuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGRhdGEudGV4dClcbiAgICAgICAgICBpZiAoanNvbi5zZXEgPT09IHVuZGVmaW5lZCB8fCBqc29uLnNlcSA8PSBsYXN0UmVzdWx0U2VxKSByZXR1cm5cbiAgICAgICAgICAvKiDlj6rmjqXlj5fmnIDov5Hlj5Hlh7rnmoTlkb3ku6TnmoTnu5PmnpzvvIjlv73nlaXlhbbku5bkvJror50v5pen57uT5p6c77yJICovXG4gICAgICAgICAgaWYgKGpzb24uc2VxICE9PSBsYXN0U2VudFNlcSkgcmV0dXJuXG4gICAgICAgICAgbGFzdFJlc3VsdFNlcSA9IGpzb24uc2VxXG5cbiAgICAgICAgICAvKiDmnoTlu7rlrozmlbTovpPlh7rmlofmnKwgKi9cbiAgICAgICAgICB2YXIgZnVsbCA9IFwiXCJcbiAgICAgICAgICBmdWxsICs9IFwiPiBcIiArIGpzb24uY21kICsgXCJcXG5cXG5cIlxuICAgICAgICAgIGlmIChqc29uLnN0ZG91dCkgZnVsbCArPSBqc29uLnN0ZG91dFxuICAgICAgICAgIGlmIChqc29uLnN0ZGVyciAmJiBqc29uLnN0ZGVyciAhPT0gXCJcIikgZnVsbCArPSBcIlxcbltcIiArIHNlbGYuJHQoXCJ0ZXJtaW5hbC5zdGRlcnJMYWJlbFwiKSArIFwiXVxcblwiICsganNvbi5zdGRlcnJcbiAgICAgICAgICBpZiAoanNvbi5zdGRvdXQgPT09IFwiXCIgJiYganNvbi5zdGRlcnIgPT09IFwiXCIpIGZ1bGwgKz0gc2VsZi4kdChcInRlcm1pbmFsLm5vT3V0cHV0XCIpXG5cbiAgICAgICAgICAvKiDlrZjlrozmlbTovpPlh7rkvpvpmIXor7vlmajkvb/nlKggKi9cbiAgICAgICAgICBzZWxmLmxhdGVzdEZ1bGxPdXRwdXQgPSBmdWxsXG4gICAgICAgICAgc2VsZi5oYXNGdWxsT3V0cHV0ID0gdHJ1ZVxuXG4gICAgICAgICAgLyog6aKE6KeI77ya5Y+q5Y+W5YmNIDIwMCDlrZfnrKbvvIzmm7/mjaLmjolcIuetieW+hee7k+aenFwiICovXG4gICAgICAgICAgdmFyIHByZXZpZXcgPSBmdWxsLmxlbmd0aCA+IDIwMCA/IGZ1bGwuc3Vic3RyaW5nKDAsIDIwMCkgKyBcIlxcblwiICsgc2VsZi4kdChcInRlcm1pbmFsLnByZXZpZXdNb3JlXCIpICsgXCJcXG5cIiA6IGZ1bGxcbiAgICAgICAgICBzZWxmLm91dHB1dFRleHQgPSBwcmV2aWV3XG4gICAgICAgICAgaWYgKHNlbGYub3V0cHV0VGV4dC5sZW5ndGggPiAxMDAwMCkge1xuICAgICAgICAgICAgc2VsZi5vdXRwdXRUZXh0ID0gc2VsZi5vdXRwdXRUZXh0LnN1YnN0cmluZygwLCAxMDAwMClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIC8qIEpTT04g6Kej5p6Q5aSx6LSl77yM5paH5Lu25Y+v6IO95q2j5Zyo5YaZ5YWl5LitICovXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLyog57uT5p6c5paH5Lu25bCa5LiN5a2Y5Zyo77yI5q2j5bi477yJICovXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnb1ZpZXdGdWxsT3V0cHV0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGlmIChzZWxmLmxhdGVzdEZ1bGxPdXRwdXQpIHtcbiAgICAgIC8qIOWGmeWFpeaWh+S7tuS+m+aXpeW/l+mhteivu+WPlu+8jOmBv+WFjei3r+eUseS8oOWkp+aVsOaNriAqL1xuICAgICAgZmlsZS53cml0ZVRleHQoe1xuICAgICAgICB1cmk6IFwiaW50ZXJuYWw6Ly9maWxlcy9mdWxsX291dHB1dC50eHRcIixcbiAgICAgICAgdGV4dDogc2VsZi5sYXRlc3RGdWxsT3V0cHV0LFxuICAgICAgICBhcHBlbmQ6IGZhbHNlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogXCIvcGFnZXMvbG9nXCIgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLyog5YaZ5YWl5aSx6LSl5pe26ZmN57qn5Li66Lev55Sx5Lyg5Y+CICovXG4gICAgICAgICAgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL2xvZ1wiLCBwYXJhbXM6IHsgY29udGVudDogc2VsZi5sYXRlc3RGdWxsT3V0cHV0IH0gfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgZ29RdWlja0NtZHMoKSB7XG4gICAgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL3NldHRpbmdcIiwgcGFyYW1zOiB7IGVudHJ5OiBcInRlcm1pbmFsXCIgfSB9KVxuICB9LFxuXG4gIGdvSGlzdG9yeSgpIHtcbiAgICByb3V0ZXIucHVzaCh7IHVyaTogXCIvcGFnZXMvaGlzdG9yeVwiIH0pXG4gIH0sXG5cbiAgLyogPT09PT09IOW3peWFt+agj+WIh+aNoiA9PT09PT0gKi9cbiAgb25UeHRDbGljaygpIHtcbiAgICB0aGlzLnNob3dUb29sYmFyID0gIXRoaXMuc2hvd1Rvb2xiYXJcbiAgfSxcblxuICBnb0JhY2soKSB7XG4gICAgcm91dGVyLnJlcGxhY2UoeyB1cmk6IFwiL3BhZ2VzL2luZGV4XCIgfSlcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbkBpbXBvcnQgJy4uLy4uL2NvbW1vbi9jYXJkLmNzcyc7XG5cbi8qID09PT09PSDlhajlsYDpobXpnaIgPT09PT09ICovXG4ucGFnZSB7IHdpZHRoOiAzMzZweDsgaGVpZ2h0OiA0ODBweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuLm1haW4tYXJlYSB7IHdpZHRoOiAzMzZweDsgZmxleDogMTsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4vKiA9PT09PT0g6aG26YOo5qCPID09PT09PSAqL1xuLmhlYWRlci1hcmVhIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IGZsZXgtc2hyaW5rOiAwOyB9XG4uaGVhZGVyLWJnIHsgd2lkdGg6IDMzNnB4OyBoZWlnaHQ6IDEwMnB4OyB9XG4uaGQtdGltZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiA3cHg7IHdpZHRoOiAxODBweDsgaGVpZ2h0OiAzMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7IH1cbi5oZC10aXRsZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNzhweDsgdG9wOiAzNXB4OyB3aWR0aDogMTgwcHg7IGhlaWdodDogNDJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDMycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2ZmZmZmZjsgfVxuLmhkLWJhY2sgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDZweDsgdG9wOiA2cHg7IHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7IH1cbi5waWxsLWhlYWRlciB7IGRpc3BsYXk6IG5vbmU7IH1cbi5jb250ZW50LWJvZHkgeyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtYXJnaW4tdG9wOiAwOyB9XG5cbi8qID09PT09PSDlv6vmjbflkb3ku6TljaHniYfvvIjkuI7pppbpobXljaHniYfkuIDoh7TvvIkgPT09PT09ICovXG4uY2FyZCB7IG1hcmdpbjogOHB4IDZweCAwIDZweDsgZmxleC1zaHJpbms6IDA7IH1cblxuLyogPT09PT09IOWRveS7pOi+k+WFpeagjyA9PT09PT0gKi9cbi5pbnB1dC1iYXIgeyB3aWR0aDogMzI0cHg7IGhlaWdodDogNDhweDsgbWFyZ2luOiA4cHggNnB4IDAgNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhOyBib3JkZXItcmFkaXVzOiAyNHB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAwIDRweDsgZmxleC1zaHJpbms6IDA7IH1cbi5pbnB1dC1wcm9tcHQgeyB3aWR0aDogMzBweDsgZm9udC1zaXplOiAyOHB4OyBjb2xvcjogI2ZmZmZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmlucHV0LXRleHQgeyBmbGV4OiAxOyBmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmZmZmOyBsaW5lczogMTsgcGFkZGluZzogMCA0cHg7IH1cbi5pbnB1dC1zZW5kIHsgd2lkdGg6IDYwcHg7IGhlaWdodDogMzZweDsgYm9yZGVyLXJhZGl1czogMThweDsgYmFja2dyb3VuZC1jb2xvcjogIzBENkVGRjsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmZmZmOyBmb250LXdlaWdodDogYm9sZDsgbGluZS1oZWlnaHQ6IDM2cHg7IH1cblxuLyogPT09PT09IOi+k+WHuuWMuuWfnyA9PT09PT0gKi9cbi5vdXRwdXQtc2Nyb2xsIHsgd2lkdGg6IDMzNnB4OyBmbGV4OiAxOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4udGV4dC1jb250YWluZXIgeyBwYWRkaW5nOiA0cHggMTZweCA0cHggMTZweDsgd2lkdGg6IDMzNnB4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBmbGV4OiAxOyB9XG4ubG9nLXRleHQgeyB3aWR0aDogMzA0cHg7IHRleHQtYWxpZ246IGxlZnQ7IGNvbG9yOiAjZmZmZmZmOyBmb250LXdlaWdodDogYm9sZDsgd29yZC1icmVhazogYnJlYWstYWxsOyBmb250LXNpemU6IDI4cHg7IGxpbmUtaGVpZ2h0OiAzNnB4OyB9XG5cbi8qID09PT09PSDmn6XnnIvlrozmlbTovpPlh7ogPT09PT09ICovXG4uZnVsbC1vdXRwdXQtYnRuIHsgd2lkdGg6IDMyNHB4OyBoZWlnaHQ6IDQ4cHg7IG1hcmdpbjogNHB4IDZweCA4cHggNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ2RUZGOyBib3JkZXItcmFkaXVzOiAyNHB4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC1zaHJpbms6IDA7IH1cbi5mdWxsLW91dHB1dC10ZXh0IHsgZm9udC1zaXplOiAyNHB4OyBjb2xvcjogI2ZmZmZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKiAzMzZ4NDgwIHJlY3Qgc2NyZWVuICovXG5AbWVkaWEgKHNoYXBlOiByZWN0KSB7XG4gIC5jb250ZW50LWJvZHkgeyBtYXJnaW4tdG9wOiAtMjBweDsgfVxufVxuXG4vKiA9PT09PT09PT09IOiDtuWbiuWxj+mAgumFjSA9PT09PT09PT09ICovXG5AbWVkaWEgKHNoYXBlOiBwaWxsLXNoYXBlZCkgYW5kIChtYXgtd2lkdGg6IDEwMCkge1xuICAucGFnZSB7IHdpZHRoOiAxOTJweDsgaGVpZ2h0OiA0OTBweDsgfVxuICAubWFpbi1hcmVhIHsgd2lkdGg6IDE5MnB4OyB9XG4gIC5oZWFkZXItYXJlYSB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLnBpbGwtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgd2lkdGg6IDE5MnB4OyBoZWlnaHQ6IDkycHg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgZmxleC1zaHJpbms6IDA7IH1cbiAgLnBpbGwtbW9yZS13cmFwIHsgd2lkdGg6IDkycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDcycHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgvY29tbW9uL2JhY2tfY2Fwc3VsZS5wbmcpOyBiYWNrZ3JvdW5kLXNpemU6IDkycHggNzJweDsgYm9yZGVyLXJhZGl1czogMzJweDsgfVxuICAuaGQtdGl0bGUgeyB3aWR0aDogMTkycHg7IHRvcDogMjJweDsgZm9udC1zaXplOiAyMnB4OyB9XG4gIC5oZC1iYWNrIHsgbGVmdDogNHB4OyB0b3A6IDRweDsgd2lkdGg6IDUycHg7IGhlaWdodDogNTJweDsgfVxuICAuY2FyZCB7IG1hcmdpbjogOHB4IDRweCAwIDRweDsgfVxuICAuaW5wdXQtYmFyIHsgd2lkdGg6IDE4NHB4OyBtYXJnaW46IDhweCA0cHggMCA0cHg7IH1cbiAgLmlucHV0LXNlbmQgeyB3aWR0aDogNTJweDsgZm9udC1zaXplOiAyMHB4OyB9XG4gIC5mdWxsLW91dHB1dC1idG4geyB3aWR0aDogMTg0cHg7IG1hcmdpbjogNHB4IDRweCA4cHggNHB4OyB9XG4gIC50ZXh0LWNvbnRhaW5lciB7IHBhZGRpbmc6IDRweCAxMHB4IDRweCAxMHB4OyB3aWR0aDogMTkycHg7IGZsZXg6IDE7IH1cbiAgLmxvZy10ZXh0IHsgd2lkdGg6IDE3MnB4OyB3b3JkLWJyZWFrOiBicmVhay1hbGw7IH1cbn1cbkBtZWRpYSAoc2hhcGU6IHBpbGwtc2hhcGVkKSBhbmQgKG1pbi13aWR0aDogMTAxKSB7XG4gIC5wYWdlIHsgd2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDUyMHB4OyB9XG4gIC5tYWluLWFyZWEgeyB3aWR0aDogMjEycHg7IH1cbiAgLmhlYWRlci1hcmVhIHsgZGlzcGxheTogbm9uZTsgfVxuICAucGlsbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyB3aWR0aDogMjEycHg7IGhlaWdodDogOTJweDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBmbGV4LXNocmluazogMDsgfVxuICAucGlsbC1tb3JlLXdyYXAgeyB3aWR0aDogMTAycHg7IGhlaWdodDogNzJweDsgYm9yZGVyLXJhZGl1czogMzZweDsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgLnBpbGwtbW9yZSB7IHdpZHRoOiAxMDJweDsgaGVpZ2h0OiA3MnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2NvbW1vbi9iYWNrX2NhcHN1bGUucG5nKTsgYmFja2dyb3VuZC1zaXplOiAxMDJweCA3MnB4OyBib3JkZXItcmFkaXVzOiAzNnB4OyB9XG4gIC5oZC10aXRsZSB7IHdpZHRoOiAyMTJweDsgdG9wOiAyMnB4OyBmb250LXNpemU6IDIycHg7IH1cbiAgLmhkLWJhY2sgeyBsZWZ0OiA0cHg7IHRvcDogNHB4OyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyB9XG4gIC5jYXJkIHsgbWFyZ2luOiA4cHggNHB4IDAgNHB4OyB9XG4gIC5pbnB1dC1iYXIgeyB3aWR0aDogMjA0cHg7IG1hcmdpbjogOHB4IDRweCAwIDRweDsgfVxuICAuZnVsbC1vdXRwdXQtYnRuIHsgd2lkdGg6IDIwNHB4OyBtYXJnaW46IDRweCA0cHggOHB4IDRweDsgfVxuICAudGV4dC1jb250YWluZXIgeyBwYWRkaW5nOiA0cHggMTBweCA0cHggMTBweDsgd2lkdGg6IDIxMnB4OyBmbGV4OiAxOyB9XG4gIC5sb2ctdGV4dCB7IHdpZHRoOiAxOTJweDsgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX2RpY1V0aWwiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiZG9TZWFyY2hEaWMiLCJ3b3JkIiwibGFuZyIsImNiIiwicmVzdWx0IiwiU2ltcGxlSW5wdXRNZXRob2QiLCJnZXRIYW56aSIsIkFycmF5IiwiaXNBcnJheSIsImRlbGV0ZUxhc3QiLCJ0Iiwic3Vic3RyIiwibGVuZ3RoIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJvcHMiLCJoaWRlIiwia2V5Ym9hcmR0eXBlIiwibWF4bGVuZ3RoIiwidmlicmF0ZW1vZGUiLCJzY3JlZW50eXBlIiwiZGF0YSIsImN2YWwiLCJyZXN1bHRMaXN0IiwicmVzdWx0TGlzdDIiLCJ3YWl0aW5nTGlzdCIsIndhaXRpbmdJbmRleCIsImxhc3RXYWl0aW5nU3RyIiwiZG93bkZsYWciLCJudW1GbGFnIiwibnVtRmxhZ19qcCIsInVwcGVyRmxhZyIsImN2YWxMaXN0IiwicGVyY2VudDY3IiwicGVyY2VudDY2Iiwic2NyZWVuV2lkdGgiLCJrZXlzIiwiZnVsbCIsInNpZ24iLCJzaWduX2pwIiwic2lnbjYyIiwic2lnbjYyX2pwIiwiZnVsbDYyIiwidDkiLCJvbkluaXQiLCJ0ZW1wQ3ZhbExpc3QiLCJpIiwicHVzaCIsImFkanVzdFNjcmVlbldpZHRoIiwiJHdhdGNoIiwiYWRkQWxsVHh0IiwidHh0IiwiJGVtaXQiLCJjb250ZW50Iiwib25Sc1NlbGVjdCIsIm9uVmlicmF0ZSIsImNsZWFyV2FpdGluZyIsInJlc2V0UmVzbHV0TGlzdCIsIm9uQnRuQ2xpY2siLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJ3YXRpbmdTdHIiLCJzZXRSZXN1bHRMaXN0QWxsIiwiZ2V0UmVzdWx0QnlXb3JkIiwiYXJyYXkiLCJwYXJzZUludCIsInZhbCIsInRoYXQiLCJvblNlbGVjdCIsIm51bSIsIm9uU2VsZWN0V2FpdGluZyIsInRvU3RyaW5nIiwid2F0Y2hIaWRlUHJvcHNDaGFuZ2UiLCJuZXdWIiwib2xkViIsInZpc2libGUiLCJ3YXRjaE1heExlbmd0aFByb3BzQ2hhbmdlIiwid2F0Y2hLZXlib2FyZFR5cGVQcm9wc0NoYW5nZSIsInZpYnJhdG9yIiwidmlicmF0ZSIsIm1vZGUiLCJoYW5kZWxTY3JvbGwiLCJldmVudCIsInBlcmNlbnRUZW1wNjciLCJzY3JvbGxYIiwicGVyY2VudFRlbXA2NiIsInB1c2hDdmFsIiwidGVtcCIsImRldmljZSIsImdldEluZm8iLCJzdWNjZXNzIiwiZGljdCIsInB5Mmh6IiwicHkyaHoyIiwiaW5pdERpY3QiLCJnZXRQaW55aW4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwid2luZG93IiwiX3N5c3RlbTMiLCJDTURfRklMRSIsIlJFU1VMVF9GSUxFIiwiSElTVE9SWV9GSUxFIiwiSElTVE9SWV9DT05GSUdfRklMRSIsImNtZFNlcSIsIkRhdGUiLCJub3ciLCJsYXN0UmVzdWx0U2VxIiwibGFzdFNlbnRTZXEiLCJwcml2YXRlIiwibm93VGltZSIsInRpbWVyIiwicG9sbFRpbWVyIiwib3V0cHV0VGV4dCIsInNob3dUb29sYmFyIiwiY21kQnVmZmVyIiwic2hvd0tleWJvYXJkIiwic2NyZWVuVHlwZSIsImxhdGVzdEZ1bGxPdXRwdXQiLCJoYXNGdWxsT3V0cHV0IiwibGFzdFNlbnRDbWQiLCJoaXN0b3J5TGltaXQiLCJwcm90ZWN0ZWQiLCJjbWQiLCJhdXRvU2VuZCIsInNlbGYiLCJ1cGRhdGVUaW1lIiwiJHQiLCJsb2FkSGlzdG9yeUxpbWl0Iiwic2hvdWxkQXV0b1NlbmQiLCJzZW5kQ29tbWFuZCIsInNldEludGVydmFsIiwicmV0IiwidyIsImZhaWwiLCJvblNob3ciLCJwb2xsUmVzdWx0Iiwib25IaWRlIiwiY2xlYXJJbnRlcnZhbCIsIm9uRGVzdHJveSIsImQiLCJnZXRIb3VycyIsInNsaWNlIiwiZ2V0TWludXRlcyIsInRvZ2dsZUtleWJvYXJkIiwib25LZXlDb21wbGV0ZSIsImRldGFpbCIsIm9uS2V5RGVsZXRlIiwic3Vic3RyaW5nIiwib25DbG9zZUtleWJvYXJkIiwibm9ybWFsaXplSGlzdG9yeUxpbWl0IiwibGltaXQiLCIkYXBwIiwiJGRlZiIsInNoZWxsRGF0YSIsImZpbGUiLCJyZWFkVGV4dCIsInVyaSIsImpzb24iLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiZGVmYXVsdEhpc3RvcnlMaW1pdCIsIm5vcm1hbGl6ZUhpc3RvcnkiLCJpdGVtcyIsIm5vcm1hbGl6ZWQiLCJzZWVuIiwidHJpbSIsInJlY29yZE1hbnVhbEhpc3RvcnkiLCJsaXN0IiwidW5zaGlmdCIsIndyaXRlSGlzdG9yeSIsIndyaXRlVGV4dCIsInN0cmluZ2lmeSIsImFwcGVuZCIsInNlbmRCdWZmZXIiLCJzaG91bGRSZWNvcmQiLCJ0cyIsImdldFNlY29uZHMiLCJyZXEiLCJzZXEiLCJ0aW1lc3RhbXAiLCJvdXQiLCJoaW50IiwiaW5kZXhPZiIsInJlcGxhY2UiLCJ1bmRlZmluZWQiLCJzdGRvdXQiLCJzdGRlcnIiLCJwcmV2aWV3IiwiZ29WaWV3RnVsbE91dHB1dCIsInJvdXRlciIsInBhcmFtcyIsImdvUXVpY2tDbWRzIiwiZW50cnkiLCJnb0hpc3RvcnkiLCJvblR4dENsaWNrIiwiZ29CYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQStUQSxJQUFBQSxVQUFBQyx1QkFBQUMsZUFBQTs0QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTs0QkFDQSxJQUFBRSxXQUFBQyxvQkFBQTs0QkFBd0QsU0FBQUosdUJBQUFLLENBQUE7Z0NBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBO29DQUFBRSxTQUFBRjtnQ0FBQTs0QkFBQTs0QkFDeEQsU0FBU0csWUFBWUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEVBQUU7Z0NBQ2pDLElBQUksQ0FBQ0YsTUFBTSxZQUNURSxHQUFHLEVBQUU7Z0NBSVAsTUFBTUMsU0FBU0MsU0FBQUEsaUJBQWlCLENBQUNDLFFBQVEsQ0FBQ0wsTUFBTUM7Z0NBQ2hEQyxHQUFHSSxNQUFNQyxPQUFPLENBQUNKLFdBQVdBLE1BQU0sQ0FBQyxFQUFFLEdBQUdBLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRTs0QkFDeEQ7NEJBRUEsU0FBU0ssV0FBV0MsQ0FBQztnQ0FDbkIsSUFBSUEsR0FDRixPQUFPQSxFQUFFQyxNQUFNLENBQUMsR0FBR0QsRUFBRUUsTUFBTSxHQUFHO2dDQUVoQyxPQUFPOzRCQUNUOzRCQUFDLElBQUFDLFdBQUFDLFFBQUFmLE9BQUEsR0FDYztnQ0FDYmdCLE9BQU87b0NBQ0xDLE1BQU07d0NBQ0pqQixTQUFTO29DQUNYO29DQUNBa0IsY0FBYzt3Q0FDWmxCLFNBQVM7b0NBQ1g7b0NBQ0FtQixXQUFXO3dDQUNUbkIsU0FBUztvQ0FDWDtvQ0FDQW9CLGFBQWE7d0NBQ1hwQixTQUFTO29DQUNYO29DQUNBcUIsWUFBWTt3Q0FDVnJCLFNBQVM7b0NBQ1g7Z0NBQ0Y7Z0NBQ0FzQixNQUFNO29DQUNKQyxNQUFNO29DQUNOQyxZQUFZLEVBQUU7b0NBQ2RDLGFBQWEsRUFBRTtvQ0FDZkMsYUFBYSxFQUFFO29DQUNmQyxjQUFjO29DQUNkQyxnQkFBZ0I7b0NBQ2hCQyxVQUFVO29DQUNWMUIsTUFBTTtvQ0FDTjJCLFNBQVM7b0NBQ1RDLFlBQVk7b0NBQ1pDLFdBQVc7b0NBQ1hDLFVBQVU7d0NBQUM7d0NBQUc7d0NBQUc7d0NBQUc7d0NBQUc7cUNBQUU7b0NBQ3pCQyxXQUFXO29DQUNYQyxXQUFXO29DQUdYQyxhQUFhO29DQUNiQyxNQUFNO3dDQUNKQyxNQUFNOzRDQUNKO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNsRDtnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTs0Q0FDN0M7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7eUNBQ3BDO3dDQUNEQyxNQUFNOzRDQUNKO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNsRDtnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTs0Q0FDbEQ7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7eUNBQzlDO3dDQUNEQyxTQUFTOzRDQUNQO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUNsRDtnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTs0Q0FDbEQ7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7eUNBQzlDO3dDQUNEQyxRQUFROzRDQUNOO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUN4QztnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTs0Q0FDbkM7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7eUNBQzFCO3dDQUNEQyxXQUFXOzRDQUNUO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUN4QztnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTs0Q0FDbkM7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7eUNBQzFCO3dDQUNEQyxRQUFROzRDQUNOO2dEQUFDO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLO2dEQUFLOzZDQUFJOzRDQUN4QztnREFBQztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSztnREFBSzs2Q0FBSTs0Q0FDbkM7Z0RBQUM7Z0RBQUs7Z0RBQUs7Z0RBQUs7Z0RBQUs7NkNBQUk7eUNBQzFCO3dDQUNEQyxJQUFJOzRDQUNGO2dEQUFDO2dEQUFPOzZDQUFNOzRDQUNkO2dEQUFDO2dEQUFPO2dEQUFPOzZDQUFNOzRDQUNyQjtnREFBQztnREFBUTtnREFBTzs2Q0FBTzt5Q0FBQTtvQ0FFM0I7Z0NBQ0Y7Z0NBQ0FDO29DQUNFLElBQUksSUFBSSxDQUFDMUIsU0FBUyxFQUFFO3dDQUNsQixNQUFNMkIsZUFBZSxFQUFFO3dDQUN2QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSSxJQUFJLENBQUM1QixTQUFTLEVBQUU0QixJQUNsQ0QsYUFBYUUsSUFBSSxDQUFDRDt3Q0FFcEIsSUFBSSxDQUFDZCxRQUFRLEdBQUdhO29DQUNsQjtvQ0FDQSxJQUFJLEFBQW9CLFdBQXBCLElBQUksQ0FBQ3pCLFVBQVUsSUFBZSxBQUFvQixrQkFBcEIsSUFBSSxDQUFDQSxVQUFVLEVBQy9DLElBQUksQ0FBQzRCLGlCQUFpQjtvQ0FFeEIsSUFBSSxDQUFDQyxNQUFNLENBQUMsUUFBUTtvQ0FDcEIsSUFBSSxDQUFDQSxNQUFNLENBQUMsYUFBYTtvQ0FDekIsSUFBSSxDQUFDQSxNQUFNLENBQUMsZ0JBQWdCO2dDQUM5QjtnQ0FDQUMsV0FBVUMsR0FBRztvQ0FDWCxJQUFJLENBQUNDLEtBQUssQ0FBQyxZQUFZO3dDQUFFQyxTQUFTRjtvQ0FBSTtnQ0FDeEM7Z0NBQ0FHLFlBQVdILEdBQUc7b0NBQ1osSUFBSSxDQUFDSSxTQUFTO29DQUNkLElBQUksQ0FBQ2pDLElBQUksR0FBRztvQ0FDWixJQUFJLENBQUM0QixTQUFTLENBQUNDO29DQUNmLElBQUksQ0FBQ0ssWUFBWTtvQ0FDakIsSUFBSSxDQUFDQyxlQUFlO29DQUNwQixJQUFJLENBQUM3QixRQUFRLEdBQUc7Z0NBQ2xCO2dDQUNBOEIsWUFBV3BCLElBQUk7b0NBQ2IsSUFBSSxDQUFDaUIsU0FBUztvQ0FDZCxPQUFRakI7d0NBQ04sS0FBSzs0Q0FDSCxJQUFJLENBQUNoQixJQUFJLEdBQUc7NENBQ1osSUFBSSxDQUFDa0MsWUFBWTs0Q0FDakIsSUFBSSxDQUFDQyxlQUFlOzRDQUNwQjt3Q0FDRixLQUFLOzRDQUNILElBQUksQ0FBQ0wsS0FBSyxDQUFDLGlCQUFpQixDQUFDOzRDQUM3Qjt3Q0FDRixLQUFLOzRDQUNILElBQUksSUFBSSxDQUFDMUIsWUFBWSxJQUFJLEdBQUc7Z0RBQzFCLElBQUksQ0FBQzhCLFlBQVk7Z0RBQ2pCLElBQUksQ0FBQ0MsZUFBZTs0Q0FDdEIsT0FBTyxJQUFJLElBQUksQ0FBQ25DLElBQUksQ0FBQ1YsTUFBTSxHQUFHLEdBQUc7Z0RBQy9CLElBQUksQ0FBQ1UsSUFBSSxHQUFHYixXQUFXLElBQUksQ0FBQ2EsSUFBSTtnREFDaEMsSUFBSSxDQUFDbUMsZUFBZTs0Q0FDdEIsT0FDRSxJQUFJLENBQUNMLEtBQUssQ0FBQyxVQUFVLENBQUM7NENBRXhCO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxDQUFDRixTQUFTLENBQUM7NENBQ2Y7d0NBQ0YsS0FBSzs0Q0FDSCxJQUFJLENBQUN0QixRQUFRLEdBQUcsQUFBa0IsV0FBbEIsSUFBSSxDQUFDQSxRQUFRLEdBQWMsS0FBSzs0Q0FDaEQ7d0NBQ0YsS0FBSzs0Q0FDSCxJQUFJLElBQUksQ0FBQ0QsY0FBYyxJQUFJVyxRQUFRLElBQUksQ0FBQ1gsY0FBYyxFQUFFO2dEQUN0RCxJQUFJLEFBQWMsU0FBZCxJQUFJLENBQUN6QixJQUFJLElBQWEsQUFBYyxTQUFkLElBQUksQ0FBQ0EsSUFBSSxFQUNqQyxJQUFJLENBQUNvQixJQUFJLElBQUksSUFBSSxDQUFDRyxXQUFXLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUM7cURBRWhELElBQUksSUFBSSxDQUFDSyxTQUFTLEVBQ2hCLElBQUksQ0FBQ21CLFNBQVMsQ0FBQyxJQUFJLENBQUN6QixXQUFXLENBQUMsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQ2lDLFdBQVc7cURBRTlELElBQUksQ0FBQ1QsU0FBUyxDQUFDLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDa0MsV0FBVztnREFHbEUsSUFBSSxDQUFDSixZQUFZO2dEQUNqQixJQUFJLENBQUNDLGVBQWU7NENBQ3RCOzRDQUNBO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxDQUFDNUIsT0FBTyxHQUFHOzRDQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHOzRDQUNsQixJQUFJLENBQUNSLElBQUksR0FBRzs0Q0FDWixJQUFJLENBQUNrQyxZQUFZOzRDQUNqQixJQUFJLENBQUNDLGVBQWU7NENBQ3BCO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxDQUFDNUIsT0FBTyxHQUFHOzRDQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHOzRDQUNsQixJQUFJLENBQUNSLElBQUksR0FBRzs0Q0FDWixJQUFJLENBQUNrQyxZQUFZOzRDQUNqQixJQUFJLENBQUNDLGVBQWU7NENBQ3BCO3dDQUNGLEtBQUs7NENBQ0gsSUFBSSxDQUFDNUIsT0FBTyxHQUFHOzRDQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHOzRDQUNsQjt3Q0FDRixLQUFLOzRDQUNILElBQUksQ0FBQ0MsU0FBUyxHQUFHOzRDQUNqQjt3Q0FDRixLQUFLOzRDQUNILElBQUksQ0FBQ0EsU0FBUyxHQUFHOzRDQUNqQjt3Q0FDRjs0Q0FDRSxJQUFJTyxBQUFnQixNQUFoQkEsS0FBSzFCLE1BQU0sRUFDYixJQUFJLENBQUNzQyxTQUFTLENBQUNaO2lEQUNWO2dEQUNMLElBQUksSUFBSSxDQUFDWixZQUFZLElBQUksR0FDdkIsSUFBSSxJQUFJLENBQUNDLGNBQWMsS0FBS1csTUFBTTtvREFDaEMsSUFBSSxDQUFDWixZQUFZO29EQUNqQixJQUFJLElBQUksQ0FBQ0EsWUFBWSxJQUFJLElBQUksQ0FBQ0MsY0FBYyxDQUFDZixNQUFNLEVBQ2pELElBQUksQ0FBQ2MsWUFBWSxHQUFHO2dEQUV4QixPQUFPO29EQUNMLElBQUksQUFBYyxTQUFkLElBQUksQ0FBQ3hCLElBQUksSUFBYSxBQUFjLFNBQWQsSUFBSSxDQUFDQSxJQUFJLEVBQ2pDLElBQUksQ0FBQ29CLElBQUksSUFBSSxJQUFJLENBQUNHLFdBQVcsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQzt5REFFaEQsSUFBSSxJQUFJLENBQUNLLFNBQVMsRUFDaEIsSUFBSSxDQUFDbUIsU0FBUyxDQUNaLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDaUMsV0FBVzt5REFHakQsSUFBSSxDQUFDVCxTQUFTLENBQ1osSUFBSSxDQUFDekIsV0FBVyxDQUFDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUNrQyxXQUFXO29EQUlyRCxJQUFJLENBQUNqQyxjQUFjLEdBQUdXO29EQUN0QixJQUFJLENBQUNaLFlBQVksR0FBRztvREFDcEIsSUFBSSxDQUFDRCxXQUFXLEdBQUdhLEtBQUt1QixLQUFLLENBQUM7Z0RBQ2hDO3FEQUNLO29EQUNMLElBQUksQ0FBQ2xDLGNBQWMsR0FBR1c7b0RBQ3RCLElBQUksQ0FBQ1osWUFBWSxHQUFHO29EQUNwQixJQUFJLENBQUNELFdBQVcsR0FBR2EsS0FBS3VCLEtBQUssQ0FBQztnREFDaEM7Z0RBQ0EsSUFBSSxDQUFDSixlQUFlOzRDQUN0Qjs0Q0FDQTtvQ0FDSjtnQ0FDRjtnQ0FDQUQ7b0NBQ0UsSUFBSSxDQUFDL0IsV0FBVyxHQUFHLEVBQUU7b0NBQ3JCLElBQUksQ0FBQ0MsWUFBWSxHQUFHO29DQUNwQixJQUFJLENBQUNDLGNBQWMsR0FBRztnQ0FDeEI7Z0NBQ0E4QjtvQ0FDRSxJQUFJSyxZQUFZO29DQUNoQixJQUFJLElBQUksQ0FBQ25DLGNBQWMsSUFBSSxJQUFJLENBQUNBLGNBQWMsQ0FBQyxJQUFJLENBQUNELFlBQVksQ0FBQyxFQUMvRG9DLFlBQVksSUFBSSxDQUFDbkMsY0FBYyxDQUFDLElBQUksQ0FBQ0QsWUFBWSxDQUFDO29DQUVwRCxJQUFJLENBQUUsS0FBSSxDQUFDSixJQUFJLEdBQUd3QyxTQUFRLEtBQU8sQUFBYyxTQUFkLElBQUksQ0FBQzVELElBQUksSUFBYSxBQUFjLFNBQWQsSUFBSSxDQUFDQSxJQUFJLEVBQVk7d0NBQzFFLElBQUksQ0FBQ3FCLFVBQVUsR0FBRyxFQUFFO3dDQUNwQixJQUFJLENBQUN3QyxnQkFBZ0I7d0NBQ3JCO29DQUNGO29DQUNBLElBQUksQ0FBQ0MsZUFBZSxDQUFDLElBQUksQ0FBQzFDLElBQUksR0FBR3dDO2dDQUNuQztnQ0FDQUM7b0NBQ0UsSUFBSSxDQUFDdkMsV0FBVyxHQUFHLEVBQUU7b0NBQ3JCLElBQUl5QyxRQUFRLEVBQUU7b0NBQ2QsSUFBSyxJQUFJbkIsSUFBSSxHQUFHQSxJQUFJLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ1gsTUFBTSxFQUFFa0MsSUFBSzt3Q0FDL0NtQixNQUFNbEIsSUFBSSxDQUFDLElBQUksQ0FBQ3hCLFVBQVUsQ0FBQ3VCLEVBQUU7d0NBQzdCLElBQUltQixNQUFNckQsTUFBTSxLQUFLc0QsU0FBUyxJQUFJLENBQUNoRCxTQUFTLEdBQUc7NENBQzdDLElBQUksQ0FBQ00sV0FBVyxDQUFDdUIsSUFBSSxDQUFDa0I7NENBQ3RCQSxRQUFRLEVBQUU7d0NBQ1o7b0NBQ0Y7b0NBQ0EsSUFBSUEsTUFBTXJELE1BQU0sR0FBRyxLQUFLcUQsTUFBTXJELE1BQU0sR0FBR3NELFNBQVMsSUFBSSxDQUFDaEQsU0FBUyxHQUM1RCxJQUFJLENBQUNNLFdBQVcsQ0FBQ3VCLElBQUksQ0FBQ2tCO2dDQUUxQjtnQ0FDQUQsaUJBQWdCRyxHQUFHO29DQUNqQixNQUFNQyxPQUFPLElBQUk7b0NBQ2pCcEUsWUFBWW1FLEtBQUtDLEtBQUtsRSxJQUFJLEVBQUUsU0FBVW1CLElBQUk7d0NBQ3hDK0MsS0FBSzdDLFVBQVUsR0FBR0Y7d0NBQ2xCK0MsS0FBS0wsZ0JBQWdCO29DQUN2QjtnQ0FDRjtnQ0FDQU0sVUFBU0MsR0FBRztvQ0FDVixJQUFJLENBQUNsQixLQUFLLENBQUMsV0FBVzt3Q0FBRUMsU0FBU2lCO29DQUFJO29DQUNyQyxJQUFJLEFBQXNCLFNBQXRCLElBQUksQ0FBQ3JELFlBQVksSUFBYSxBQUFvQixrQkFBcEIsSUFBSSxDQUFDRyxVQUFVLEVBQW9CLFlBQ25FLElBQUksQ0FBQ3NDLFVBQVUsQ0FBQ1k7b0NBR2xCLElBQUksQ0FBQ2YsU0FBUztvQ0FDZCxJQUFJLEFBQWUsU0FBZCxJQUFJLENBQUNyRCxJQUFJLElBQWEsQUFBYyxTQUFkLElBQUksQ0FBQ0EsSUFBSSxJQUFnQixJQUFJLENBQUMyQixPQUFPLEVBRXpELElBQUksQUFBYyxTQUFkLElBQUksQ0FBQzNCLElBQUksSUFBYyxJQUFJLENBQUMyQixPQUFPLEVBTzVDLElBQUksQ0FBQ3FCLFNBQVMsQ0FBQ29CO3lDQU5mLElBQUksSUFBSSxDQUFDdkMsU0FBUyxFQUNoQixJQUFJLENBQUNtQixTQUFTLENBQUNvQixJQUFJWCxXQUFXO3lDQUU5QixJQUFJLENBQUNULFNBQVMsQ0FBQ29CLElBQUlWLFdBQVc7eUNBTGhDLElBQUksQ0FBQ3RDLElBQUksSUFBSWdELElBQUlWLFdBQVc7b0NBVTlCLElBQUksQ0FBQ0gsZUFBZTtnQ0FDdEI7Z0NBQ0FjLGlCQUFnQkQsR0FBRztvQ0FDakIsSUFBSSxDQUFDZixTQUFTO29DQUNkLElBQUksQUFBYyxTQUFkLElBQUksQ0FBQ3JELElBQUksRUFDWCxJQUFJLENBQUNvQixJQUFJLElBQUksSUFBSSxDQUFDRyxXQUFXLENBQUM2QyxJQUFJLENBQUNFLFFBQVE7eUNBRTNDLElBQUksSUFBSSxDQUFDekMsU0FBUyxFQUNoQixJQUFJLENBQUNtQixTQUFTLENBQUMsSUFBSSxDQUFDekIsV0FBVyxDQUFDNkMsSUFBSSxDQUFDWCxXQUFXO3lDQUVoRCxJQUFJLENBQUNULFNBQVMsQ0FBQyxJQUFJLENBQUN6QixXQUFXLENBQUM2QyxJQUFJLENBQUNWLFdBQVc7b0NBR3BELElBQUksQ0FBQ0osWUFBWTtvQ0FDakIsSUFBSSxDQUFDQyxlQUFlO2dDQUN0QjtnQ0FDQWdCLHNCQUFxQkMsSUFBSSxFQUFFQyxJQUFJO29DQUM3QixJQUFJLENBQUN2QixLQUFLLENBQUMsb0JBQW9CO3dDQUFFd0IsU0FBU0Y7b0NBQUs7Z0NBQ2pEO2dDQUNBRywyQkFBMEJILElBQUksRUFBRUMsSUFBSTtvQ0FDbEMsSUFBSUQsTUFBTTt3Q0FDUixNQUFNN0IsZUFBZSxFQUFFO3dDQUN2QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSTRCLE1BQU01QixJQUN4QkQsYUFBYUUsSUFBSSxDQUFDRDt3Q0FFcEIsSUFBSSxDQUFDZCxRQUFRLEdBQUdhO29DQUNsQjtnQ0FDRjtnQ0FDQWlDLDhCQUE2QkosSUFBSSxFQUFFQyxJQUFJO29DQUNyQyxJQUFJRCxBQUFTLFNBQVRBLFFBQWlCLEFBQWMsU0FBZCxJQUFJLENBQUN4RSxJQUFJLEVBQVc7d0NBQ3ZDLElBQUksQ0FBQ0EsSUFBSSxHQUFHO3dDQUNaLElBQUksQ0FBQ29CLElBQUksR0FBRzt3Q0FDWixJQUFJLENBQUNrQyxZQUFZO3dDQUNqQixJQUFJLENBQUNDLGVBQWU7b0NBQ3RCO2dDQUNGO2dDQUNBRjtvQ0FDRSxJQUFJLEFBQW9CLE1BQXBCLElBQUksQ0FBQ3BDLFdBQVcsRUFDbEI0RCxRQUFBQSxPQUFRLENBQUNDLE9BQU8sQ0FBQzt3Q0FBRUMsTUFBTSxJQUFJLENBQUM5RCxXQUFXO29DQUFDO2dDQUU5QztnQ0FDQStELGNBQWFDLEtBQUs7b0NBQ2hCLElBQUlDLGdCQUFpQkQsTUFBTUUsT0FBTyxHQUFHLE1BQU8sTUFBTTtvQ0FDbEQsSUFBSSxDQUFDcEQsU0FBUyxHQUFHaUMsU0FBU2tCLGlCQUFpQixNQUFNQSxnQkFBZ0I7b0NBQ2pFLElBQUlFLGdCQUFpQkgsTUFBTUUsT0FBTyxHQUFHLE1BQU87b0NBQzVDLElBQUksQ0FBQ25ELFNBQVMsR0FBR2dDLFNBQVNvQixpQkFBaUIsTUFBTUEsZ0JBQWdCO2dDQUNuRTtnQ0FDQUM7b0NBQ0UsSUFBSSxDQUFDaEMsU0FBUztvQ0FDZCxJQUFJaUMsT0FBTyxJQUFJLENBQUNsRSxJQUFJO29DQUNwQixJQUFJLENBQUNBLElBQUksR0FBRztvQ0FDWixJQUFJLENBQUNrQyxZQUFZO29DQUNqQixJQUFJLENBQUNDLGVBQWU7b0NBQ3BCLElBQUksQ0FBQ1AsU0FBUyxDQUFDc0M7Z0NBQ2pCO2dDQUNBeEM7b0NBQ0V5QyxTQUFBQSxPQUFNLENBQUNDLE9BQU8sQ0FBQzt3Q0FDYkMsU0FBVXRFLENBQUFBOzRDQUNSLElBQUksQ0FBQ2MsV0FBVyxHQUFHZCxLQUFLYyxXQUFXO3dDQUNyQztvQ0FDRjtnQ0FDRjs0QkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDcHBCQSxJQUFJOUIsb0JBQWlCUyxRQUFBQSxpQkFBQSxHQUFHOzRCQUN0QjhFLE1BQU07Z0NBQUVDLE9BQU8sQ0FBQztnQ0FBR0MsUUFBUSxDQUFDOzRCQUFFO3dCQUNoQzt3QkFFQXpGLGtCQUFrQjBGLFFBQVEsR0FBRyxZQUMzQjt3QkFHRjFGLGtCQUFrQkMsUUFBUSxHQUFHLFNBQVNMLElBQUksRUFBRUMsSUFBSTs0QkFFOUMsT0FBTyxFQUFFO3dCQUNYO3dCQUVBRyxrQkFBa0IyRixTQUFTLEdBQUcsU0FBUy9GLElBQUk7NEJBQ3pDLE9BQU87d0JBQ1Q7Ozs7Ozs7Ozs7Ozs7O29CQ2hCQWdHLG9CQUFvQixDQUFDLEdBQUcsQUFBQzt3QkFDeEIsSUFBSSxBQUFzQixZQUF0QixPQUFPQyxZQUF5QixPQUFPQTt3QkFDM0MsSUFBSTs0QkFDSCxPQUFPLElBQUksSUFBSSxJQUFJQyxTQUFTO3dCQUM3QixFQUFFLE9BQU90RyxHQUFHOzRCQUNYLElBQUksQUFBa0IsWUFBbEIsT0FBT3VHLFFBQXFCLE9BQU9BO3dCQUN4QztvQkFDRDs7O29CQ1BBSCxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNrRTNCLElBQUExRyxVQUFBQyx1QkFBQUMsZUFBQTt3QkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTt3QkFDQSxJQUFBNEcsV0FBQTdHLHVCQUFBQyxlQUFBO3dCQUFtQyxTQUFBRCx1QkFBQUssQ0FBQTs0QkFBQSxPQUFBQSxLQUFBQSxFQUFBQyxVQUFBLEdBQUFELElBQUE7Z0NBQUFFLFNBQUFGOzRCQUFBO3dCQUFBO3dCQUVuQyxJQUFJeUcsV0FBVzt3QkFDZixJQUFJQyxjQUFjO3dCQUNsQixJQUFJQyxlQUFlO3dCQUNuQixJQUFJQyxzQkFBc0I7d0JBQzFCLElBQUlDLFNBQVNDLEtBQUtDLEdBQUc7d0JBQ3JCLElBQUlDLGdCQUFnQjt3QkFDcEIsSUFBSUMsY0FBYzt3QkFBRSxJQUFBakcsV0FBQUMsUUFBQWYsT0FBQSxHQUVMOzRCQUNiZ0gsU0FBUztnQ0FDUEMsU0FBUztnQ0FDVEMsT0FBTztnQ0FDUEMsV0FBVztnQ0FDWEMsWUFBWTtnQ0FDWkMsYUFBYTtnQ0FDYkMsV0FBVztnQ0FDWEMsY0FBYztnQ0FDZEMsWUFBWTtnQ0FDWkMsa0JBQWtCO2dDQUNsQkMsZUFBZTtnQ0FDZkMsYUFBYTtnQ0FDYkMsY0FBYzs0QkFDaEI7NEJBRUFDLFdBQVc7Z0NBQUVDLEtBQUs7Z0NBQUlDLFVBQVU7NEJBQUc7NEJBRW5DbEY7Z0NBQ0UsSUFBSW1GLE9BQU8sSUFBSTtnQ0FDZkEsS0FBS0MsVUFBVTtnQ0FDZkQsS0FBS1osVUFBVSxHQUFHWSxLQUFLRSxFQUFFLENBQUM7Z0NBQzFCLElBQUksSUFBSSxDQUFDSixHQUFHLEVBQ1YsSUFBSSxDQUFDUixTQUFTLEdBQUcsSUFBSSxDQUFDUSxHQUFHO2dDQUUzQkUsS0FBS0csZ0JBQWdCO2dDQUNyQixJQUFJLElBQUksQ0FBQ0MsY0FBYyxJQUFJO29DQUN6QkosS0FBS0ssV0FBVyxDQUFDLElBQUksQ0FBQ1AsR0FBRyxFQUFFO29DQUMzQkUsS0FBS1YsU0FBUyxHQUFHO2dDQUNuQjtnQ0FDQVUsS0FBS2QsS0FBSyxHQUFHb0IsWUFBWTtvQ0FBYU4sS0FBS0MsVUFBVTtnQ0FBRyxHQUFHO2dDQUczRHZDLFNBQUFBLE9BQU0sQ0FBQ0MsT0FBTyxDQUFDO29DQUNiQyxTQUFTLFNBQVMyQyxHQUFHO3dDQUNuQixJQUFJQyxJQUFJRCxJQUFJbkcsV0FBVyxJQUFJO3dDQUMzQjRGLEtBQUtSLFVBQVUsR0FBR2dCLEtBQUssTUFBTSxnQkFBZ0I7b0NBQy9DO29DQUNBQyxNQUFNO3dDQUNKVCxLQUFLUixVQUFVLEdBQUc7b0NBQ3BCO2dDQUNGOzRCQUNGOzRCQUVBa0I7Z0NBRUUsSUFBSVYsT0FBTyxJQUFJO2dDQUNmQSxLQUFLRyxnQkFBZ0I7Z0NBQ3JCLElBQUksQ0FBQ0gsS0FBS2IsU0FBUyxFQUNqQmEsS0FBS2IsU0FBUyxHQUFHbUIsWUFBWTtvQ0FBYU4sS0FBS1csVUFBVTtnQ0FBRyxHQUFHOzRCQUVuRTs0QkFFQUM7Z0NBRUUsSUFBSSxJQUFJLENBQUN6QixTQUFTLEVBQUU7b0NBQ2xCMEIsY0FBYyxJQUFJLENBQUMxQixTQUFTO29DQUM1QixJQUFJLENBQUNBLFNBQVMsR0FBRztnQ0FDbkI7NEJBQ0Y7NEJBRUEyQjtnQ0FDRUQsY0FBYyxJQUFJLENBQUMzQixLQUFLO2dDQUN4QixJQUFJLElBQUksQ0FBQ0MsU0FBUyxFQUNoQjBCLGNBQWMsSUFBSSxDQUFDMUIsU0FBUzs0QkFFaEM7NEJBRUFjO2dDQUNFLElBQUljLElBQUksSUFBSW5DO2dDQUNaLElBQUksQ0FBQ0ssT0FBTyxHQUFHLEFBQUMsT0FBTThCLEVBQUVDLFFBQVEsRUFBQyxFQUFHQyxLQUFLLENBQUMsTUFBTSxNQUFNLEFBQUMsT0FBTUYsRUFBRUcsVUFBVSxFQUFDLEVBQUdELEtBQUssQ0FBQzs0QkFDckY7NEJBR0FFO2dDQUNFLElBQUksQ0FBQzVCLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQ0EsWUFBWTs0QkFDeEM7NEJBRUE2QixlQUFjdEosQ0FBQztnQ0FDYixJQUFJLENBQUN3SCxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLEdBQUd4SCxFQUFFdUosTUFBTSxDQUFDL0YsT0FBTzs0QkFDcEQ7NEJBRUFnRztnQ0FDRSxJQUFJLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQ3pHLE1BQU0sR0FBRyxHQUMxQixJQUFJLENBQUN5RyxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNpQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUNqQyxTQUFTLENBQUN6RyxNQUFNLEdBQUc7NEJBRXpFOzRCQUVBMkk7Z0NBQ0UsSUFBSSxDQUFDakMsWUFBWSxHQUFHOzRCQUN0Qjs0QkFFQWE7Z0NBQ0UsT0FBTyxBQUFrQixTQUFsQixJQUFJLENBQUNMLFFBQVEsSUFBYSxBQUFrQixXQUFsQixJQUFJLENBQUNBLFFBQVEsSUFBZSxBQUFrQixRQUFsQixJQUFJLENBQUNBLFFBQVE7NEJBQzVFOzRCQUVBMEIsdUJBQXNCQyxLQUFLO2dDQUN6QixPQUFPLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0oscUJBQXFCLENBQUNDOzRCQUN4RDs0QkFFQXZCO2dDQUNFLElBQUlILE9BQU8sSUFBSTtnQ0FDZjhCLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO29DQUNaQyxLQUFLdEQ7b0NBQ0xkLFNBQVMsU0FBU3RFLElBQUk7d0NBQ3BCLElBQUk7NENBQ0YsSUFBSTJJLE9BQU9DLEtBQUtDLEtBQUssQ0FBQzdJLEtBQUs4SSxJQUFJOzRDQUMvQnBDLEtBQUtKLFlBQVksR0FBR0ksS0FBS3lCLHFCQUFxQixDQUFDUSxLQUFLUCxLQUFLO3dDQUMzRCxFQUFFLE9BQU81SixHQUFHOzRDQUNWa0ksS0FBS0osWUFBWSxHQUFHSSxLQUFLMkIsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1EsbUJBQW1CO3dDQUNsRTtvQ0FDRjtvQ0FDQTVCLE1BQU07d0NBQ0pULEtBQUtKLFlBQVksR0FBR0ksS0FBSzJCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNRLG1CQUFtQjtvQ0FDbEU7Z0NBQ0Y7NEJBQ0Y7NEJBRUFDLGtCQUFpQkMsS0FBSztnQ0FDcEIsSUFBSUMsYUFBYSxFQUFFO2dDQUNuQixJQUFJQyxPQUFPLENBQUM7Z0NBQ1osSUFBSSxDQUFFRixDQUFBQSxpQkFBaUIvSixLQUFJLEdBQUksT0FBT2dLO2dDQUN0QyxJQUFLLElBQUl6SCxJQUFJLEdBQUdBLElBQUl3SCxNQUFNMUosTUFBTSxFQUFFa0MsSUFBSztvQ0FDckMsSUFBSStFLE1BQU15QyxLQUFLLENBQUN4SCxFQUFFO29DQUNsQixJQUFJLEFBQWUsWUFBZixPQUFPK0U7d0NBQ1hBLE1BQU1BLElBQUk0QyxJQUFJO3dDQUNkLElBQUksQUFBQzVDLFFBQU8yQyxJQUFJLENBQUMzQyxJQUFJOzRDQUNyQjJDLElBQUksQ0FBQzNDLElBQUksR0FBRzs0Q0FDWjBDLFdBQVd4SCxJQUFJLENBQUM4RTs0Q0FDaEIsSUFBSTBDLFdBQVczSixNQUFNLElBQUksSUFBSSxDQUFDK0csWUFBWSxFQUFFOzs7Z0NBQzlDO2dDQUNBLE9BQU80Qzs0QkFDVDs0QkFFQUcscUJBQW9CN0MsR0FBRztnQ0FDckIsSUFBSUUsT0FBTyxJQUFJO2dDQUNmLElBQUksQ0FBQ0YsS0FBSztnQ0FDVmdDLFNBQUFBLE9BQUksQ0FBQ0MsUUFBUSxDQUFDO29DQUNaQyxLQUFLdkQ7b0NBQ0xiLFNBQVMsU0FBU3RFLElBQUk7d0NBQ3BCLElBQUlzSixPQUFPLEVBQUU7d0NBQ2IsSUFBSTs0Q0FDRkEsT0FBT1YsS0FBS0MsS0FBSyxDQUFDN0ksS0FBSzhJLElBQUk7d0NBQzdCLEVBQUUsT0FBT3RLLEdBQUcsQ0FBQzt3Q0FDYjhLLEtBQUtDLE9BQU8sQ0FBQy9DO3dDQUNiRSxLQUFLOEMsWUFBWSxDQUFDRjtvQ0FDcEI7b0NBQ0FuQyxNQUFNO3dDQUNKVCxLQUFLOEMsWUFBWSxDQUFDOzRDQUFDaEQ7eUNBQUk7b0NBQ3pCO2dDQUNGOzRCQUNGOzRCQUVBZ0QsY0FBYVAsS0FBSztnQ0FDaEJULFNBQUFBLE9BQUksQ0FBQ2lCLFNBQVMsQ0FBQztvQ0FDYmYsS0FBS3ZEO29DQUNMMkQsTUFBTUYsS0FBS2MsU0FBUyxDQUFDLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUNDO29DQUMzQ1UsUUFBUTtnQ0FDVjs0QkFDRjs0QkFHQUM7Z0NBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQzVELFNBQVMsRUFBRTtnQ0FDckIsSUFBSVEsTUFBTSxJQUFJLENBQUNSLFNBQVM7Z0NBQ3hCLElBQUksQ0FBQ2UsV0FBVyxDQUFDUCxLQUFLO2dDQUN0QixJQUFJLENBQUNSLFNBQVMsR0FBRztnQ0FDakIsSUFBSSxDQUFDQyxZQUFZLEdBQUc7NEJBQ3RCOzRCQUVBYyxhQUFZUCxHQUFHLEVBQUVxRCxZQUFZO2dDQUMzQixJQUFJbkQsT0FBTyxJQUFJO2dDQUNmckI7Z0NBQ0FJLGNBQWNKO2dDQUNkcUIsS0FBS04sYUFBYSxHQUFHO2dDQUNyQk0sS0FBS1AsZ0JBQWdCLEdBQUc7Z0NBQ3hCTyxLQUFLTCxXQUFXLEdBQUdHO2dDQUNuQkUsS0FBS1osVUFBVSxHQUFHLE9BQU9VLE1BQU0sU0FBU0UsS0FBS0UsRUFBRSxDQUFDO2dDQUNoRCxJQUFJYSxJQUFJLElBQUluQztnQ0FDWixJQUFJd0UsS0FBSyxBQUFDLE9BQU1yQyxFQUFFQyxRQUFRLEVBQUMsRUFBR0MsS0FBSyxDQUFDLE1BQU0sTUFDakMsQUFBQyxPQUFNRixFQUFFRyxVQUFVLEVBQUMsRUFBR0QsS0FBSyxDQUFDLE1BQU0sTUFDbkMsQUFBQyxPQUFNRixFQUFFc0MsVUFBVSxFQUFDLEVBQUdwQyxLQUFLLENBQUM7Z0NBRXRDLElBQUlxQyxNQUFNcEIsS0FBS2MsU0FBUyxDQUFDO29DQUFFTyxLQUFLNUU7b0NBQVFtQixLQUFLQTtvQ0FBSzBELFdBQVdKO2dDQUFHO2dDQUVoRXRCLFNBQUFBLE9BQUksQ0FBQ2lCLFNBQVMsQ0FBQztvQ0FDYmYsS0FBS3pEO29DQUNMNkQsTUFBTWtCO29DQUNOTCxRQUFRO29DQUNSckYsU0FBUzt3Q0FDUCxJQUFJdUYsY0FDRm5ELEtBQUsyQyxtQkFBbUIsQ0FBQzdDO29DQUU3QjtvQ0FDQVcsTUFBTTt3Q0FDSixJQUFJZ0QsTUFBTXpELEtBQUtaLFVBQVU7d0NBQ3pCLElBQUlzRSxPQUFPMUQsS0FBS0UsRUFBRSxDQUFDO3dDQUNuQixJQUFJdUQsQUFBc0IsT0FBdEJBLElBQUlFLE9BQU8sQ0FBQ0QsT0FBY0QsTUFBTUEsSUFBSUcsT0FBTyxDQUFDRixNQUFNO3dDQUN0RDFELEtBQUtaLFVBQVUsR0FBRyxPQUFPVSxNQUFNLFVBQVVFLEtBQUtFLEVBQUUsQ0FBQyx5QkFBeUIsT0FBT0YsS0FBS0UsRUFBRSxDQUFDLHdCQUF3QixTQUFTdUQ7b0NBQzVIO2dDQUNGOzRCQUNGOzRCQUdBOUM7Z0NBQ0UsSUFBSVgsT0FBTyxJQUFJO2dDQUNmOEIsU0FBQUEsT0FBSSxDQUFDQyxRQUFRLENBQUM7b0NBQ1pDLEtBQUt4RDtvQ0FDTFosU0FBUyxTQUFTdEUsSUFBSTt3Q0FDcEIsSUFBSSxDQUFDQSxLQUFLOEksSUFBSSxFQUFFO3dDQUNoQixJQUFJOzRDQUNGLElBQUlILE9BQU9DLEtBQUtDLEtBQUssQ0FBQzdJLEtBQUs4SSxJQUFJOzRDQUMvQixJQUFJSCxBQUFhNEIsV0FBYjVCLEtBQUtzQixHQUFHLElBQWtCdEIsS0FBS3NCLEdBQUcsSUFBSXpFLGVBQWU7NENBRXpELElBQUltRCxLQUFLc0IsR0FBRyxLQUFLeEUsYUFBYTs0Q0FDOUJELGdCQUFnQm1ELEtBQUtzQixHQUFHOzRDQUd4QixJQUFJakosT0FBTzs0Q0FDWEEsUUFBUSxPQUFPMkgsS0FBS25DLEdBQUcsR0FBRzs0Q0FDMUIsSUFBSW1DLEtBQUs2QixNQUFNLEVBQUV4SixRQUFRMkgsS0FBSzZCLE1BQU07NENBQ3BDLElBQUk3QixLQUFLOEIsTUFBTSxJQUFJOUIsQUFBZ0IsT0FBaEJBLEtBQUs4QixNQUFNLEVBQVN6SixRQUFRLFFBQVEwRixLQUFLRSxFQUFFLENBQUMsMEJBQTBCLFFBQVErQixLQUFLOEIsTUFBTTs0Q0FDNUcsSUFBSTlCLEFBQWdCLE9BQWhCQSxLQUFLNkIsTUFBTSxJQUFXN0IsQUFBZ0IsT0FBaEJBLEtBQUs4QixNQUFNLEVBQVN6SixRQUFRMEYsS0FBS0UsRUFBRSxDQUFDOzRDQUc5REYsS0FBS1AsZ0JBQWdCLEdBQUduRjs0Q0FDeEIwRixLQUFLTixhQUFhLEdBQUc7NENBR3JCLElBQUlzRSxVQUFVMUosS0FBS3pCLE1BQU0sR0FBRyxNQUFNeUIsS0FBS2lILFNBQVMsQ0FBQyxHQUFHLE9BQU8sT0FBT3ZCLEtBQUtFLEVBQUUsQ0FBQywwQkFBMEIsT0FBTzVGOzRDQUMzRzBGLEtBQUtaLFVBQVUsR0FBRzRFOzRDQUNsQixJQUFJaEUsS0FBS1osVUFBVSxDQUFDdkcsTUFBTSxHQUFHLE9BQzNCbUgsS0FBS1osVUFBVSxHQUFHWSxLQUFLWixVQUFVLENBQUNtQyxTQUFTLENBQUMsR0FBRzt3Q0FFbkQsRUFBRSxPQUFNekosR0FBRyxDQUNUO29DQUVKO29DQUNBMkksTUFBTSxZQUNKO2dDQUVKOzRCQUNGOzRCQUVBd0Q7Z0NBQ0UsSUFBSWpFLE9BQU8sSUFBSTtnQ0FDZixJQUFJQSxLQUFLUCxnQkFBZ0IsRUFFdkJxQyxTQUFBQSxPQUFJLENBQUNpQixTQUFTLENBQUM7b0NBQ2JmLEtBQUs7b0NBQ0xJLE1BQU1wQyxLQUFLUCxnQkFBZ0I7b0NBQzNCd0QsUUFBUTtvQ0FDUnJGLFNBQVM7d0NBQ1BzRyxRQUFBQSxPQUFNLENBQUNsSixJQUFJLENBQUM7NENBQUVnSCxLQUFLO3dDQUFhO29DQUNsQztvQ0FDQXZCLE1BQU07d0NBRUp5RCxRQUFBQSxPQUFNLENBQUNsSixJQUFJLENBQUM7NENBQUVnSCxLQUFLOzRDQUFjbUMsUUFBUTtnREFBRTdJLFNBQVMwRSxLQUFLUCxnQkFBZ0I7NENBQUM7d0NBQUU7b0NBQzlFO2dDQUNGOzRCQUVKOzRCQUVBMkU7Z0NBQ0VGLFFBQUFBLE9BQU0sQ0FBQ2xKLElBQUksQ0FBQztvQ0FBRWdILEtBQUs7b0NBQWtCbUMsUUFBUTt3Q0FBRUUsT0FBTztvQ0FBVztnQ0FBRTs0QkFDckU7NEJBRUFDO2dDQUNFSixRQUFBQSxPQUFNLENBQUNsSixJQUFJLENBQUM7b0NBQUVnSCxLQUFLO2dDQUFpQjs0QkFDdEM7NEJBR0F1QztnQ0FDRSxJQUFJLENBQUNsRixXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUNBLFdBQVc7NEJBQ3RDOzRCQUVBbUY7Z0NBQ0VOLFFBQUFBLE9BQU0sQ0FBQ04sT0FBTyxDQUFDO29DQUFFNUIsS0FBSztnQ0FBZTs0QkFDdkM7d0JBQ0YifQ==