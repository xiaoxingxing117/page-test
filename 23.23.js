webpackJsonp([23,39],{

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UploadClue = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _uploadClue = __webpack_require__(912);
	
	var _uploadClue2 = _interopRequireDefault(_uploadClue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UploadClue = function (_React$Component) {
	    _inherits(UploadClue, _React$Component);
	
	    function UploadClue(props) {
	        _classCallCheck(this, UploadClue);
	
	        return _possibleConstructorReturn(this, (UploadClue.__proto__ || Object.getPrototypeOf(UploadClue)).call(this, props));
	    }
	
	    _createClass(UploadClue, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                url = _props.url,
	                data = _props.data,
	                visible = _props.visible,
	                closeCallback = _props.closeCallback;
	
	            return _react2["default"].createElement(_uploadClue2["default"], { url: url, data: data, visible: visible, closeCallback: closeCallback });
	        }
	    }]);
	
	    return UploadClue;
	}(_react2["default"].Component);
	
	exports.UploadClue = UploadClue;

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(398);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _iframe = __webpack_require__(913);
	
	var _iframe2 = _interopRequireDefault(_iframe);
	
	__webpack_require__(914);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.dDialogW = 500;
	        _this.dDialogH = 480;
	        _this.state = {
	            url: props.url || '',
	            action: null,
	            clueInfo: props.data,
	            dialogW: _this.dDialogW,
	            dialogH: _this.dDialogH,
	            modal_show: props.visible || false,
	            loaded: false
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var url = nextProps.url,
	                visible = nextProps.visible;
	
	            if (url && url != '' && url != this.state.url) {
	                this.setState({
	                    url: url
	                });
	            }
	            if (visible != this.state.modal_show) {
	                this.setState({
	                    modal_show: visible
	                });
	            }
	        }
	    }, {
	        key: 'clueCallback',
	        value: function clueCallback(_ref) {
	            var type = _ref.type,
	                payload = _ref.payload;
	            var clueInfo = this.state.clueInfo;
	
	            if (type === 'onIcasedocIframeLoaded') {
	                this.setState({
	                    action: {
	                        type: 'dealCaseClue',
	                        payload: clueInfo
	                    },
	                    loaded: true
	                });
	            }
	            if (type === 'closeIcasedocIframe') {
	                this.closeModalFn();
	            }
	        }
	    }, {
	        key: 'showModal',
	        value: function showModal() {
	            this.setState({
	                modal_show: true
	            });
	        }
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {
	            if (this.state.loaded) {
	                this.setState({
	                    action: {
	                        type: 'closeIframeDialog',
	                        payload: null
	                    }
	                });
	            } else {
	                this.closeModalFn();
	            }
	        }
	    }, {
	        key: 'closeModalFn',
	        value: function closeModalFn() {
	            this.setState({
	                action: null,
	                modal_show: false
	            });
	            this.props.closeCallback(false);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                url = _state.url,
	                modal_show = _state.modal_show,
	                loaded = _state.loaded,
	                action = _state.action,
	                dialogW = _state.dialogW,
	                dialogH = _state.dialogH;
	
	            var map_show = { position: 'absolute', visibility: 'hidden' };
	            var showMap = false;
	            if (loaded) {
	                showMap = true;
	                map_show = {};
	            }
	            var modal_top = (this.props.browser.height - dialogH) / 2;
	            return _react2["default"].createElement(
	                _modal2["default"],
	                {
	                    className: 'common-modal',
	                    title: '\u4E0A\u4F20\u6863\u6848',
	                    visible: modal_show,
	                    width: dialogW,
	                    footer: null,
	                    onCancel: this.hideModal.bind(this)
	                },
	                _react2["default"].createElement(
	                    'div',
	                    { className: !showMap ? "common-no-result" : "", style: { width: dialogW, height: dialogH - 40 } },
	                    !showMap && _react2["default"].createElement(
	                        'div',
	                        { className: 'common-no-result-inner' },
	                        _react2["default"].createElement(
	                            'p',
	                            { className: 'common-no-result-text' },
	                            '\u6B63\u5728\u52A0\u8F7D\u6863\u6848'
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { style: map_show },
	                        _react2["default"].createElement(_iframe2["default"], {
	                            url: url,
	                            width: dialogW,
	                            height: dialogH - 40,
	                            action: action,
	                            callback: this.clueCallback.bind(this)
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	;
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser };
	})(App);

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _addDomEventListener = __webpack_require__(273);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.eventListener = (0, _addDomEventListener2["default"])(window, 'message', this.handleMessage.bind(this));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.eventListener.remove();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var action = nextProps.action;
	            if (!action) return;
	            this.postMessage(action.type, action.payload);
	        }
	    }, {
	        key: 'handleMessage',
	        value: function handleMessage(_ref) {
	            var nativeEvent = _ref.nativeEvent;
	
	            var data = nativeEvent.data;
	            if (typeof data === 'string') {
	                data = JSON.parse(data);
	                var payload = data['argument'];
	                this.props.callback({ type: data['method'], payload: payload });
	            }
	        }
	    }, {
	        key: 'postMessage',
	        value: function postMessage(type, payload) {
	            var message = {};
	            message['method'] = type;
	            if (payload) {
	                message['argument'] = payload;
	            }
	            message = JSON.stringify(message);
	            this.refs.iframe.contentWindow.postMessage(message, '*');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            return _react2["default"].createElement('iframe', {
	                src: props.url,
	                width: props.width || '100%',
	                height: props.height || 500,
	                frameBorder: 'no',
	                border: '0',
	                ref: 'iframe' });
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	;
	
	exports["default"] = App;

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _checkbox = __webpack_require__(845);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _message2 = __webpack_require__(500);
	
	var _message3 = _interopRequireDefault(_message2);
	
	var _select = __webpack_require__(505);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(401);
	
	__webpack_require__(601);
	
	__webpack_require__(398);
	
	__webpack_require__(580);
	
	__webpack_require__(582);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _moment = __webpack_require__(662);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _tool = __webpack_require__(896);
	
	__webpack_require__(1175);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _dic = __webpack_require__(588);
	
	var _loader = __webpack_require__(410);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _casedoc = __webpack_require__(911);
	
	var _maps = __webpack_require__(897);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import { getKeyByValue } from 'modules/iwifi/common/dic/iwifi';
	
	var Modal_Folder = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(24, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(1176)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	});
	var Modal_Detail = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(25, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(1177)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	});
	
	var Option = _select2["default"].Option;
	
	var protocol = window.location.protocol + "//";
	var location_ip = window.location.hostname;
	var location_port = window.location.port;
	
	var map = {
	    add: '新建文件夹',
	    edit: '修改文件夹',
	    move: '移动到',
	    copy: '复制到'
	};
	
	var viewTransferMap = {
	    'iface': '/iface-web/index.do#view/faceSearch',
	    'ibody': '/ibody-web/index.do#view/bodySearch',
	    'iwifi-identity': '/iwifi-web/index.do#view/virtual',
	    'iwifi-mac': '/iwifi-web/index.do#view/terminal',
	    'ipersonid': '/ipersonid-web/index.do#view/iPersonSearch'
	};
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            current: '',
	            list: []
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.fetch();
	        }
	    }, {
	        key: 'fetch',
	        value: function fetch() {
	            var _this2 = this;
	
	            var hide = _message3["default"].loading('正在加载，请稍候...', 0);
	            _http2["default"].get('/tempshelf/findTempShelfList.do').then(function (_ref) {
	                var data = _ref.data;
	
	                var list = data || [];
	                _this2.setState({ list: list });
	                if (list.length > 0) {
	                    _this2.setState({
	                        current: list[0].indexCode,
	                        currentName: list[0].name
	                    });
	                }
	            })["catch"](function (e) {
	                return _http2["default"].showError(e);
	            }).then(hide);
	        }
	    }, {
	        key: 'open',
	        value: function open(current, currentName) {
	            this.setState({
	                current: current,
	                currentName: currentName
	            });
	        }
	    }, {
	        key: 'add',
	        value: function add() {
	            this.setState({
	                role: 'add',
	                modal_show: true
	            });
	        }
	    }, {
	        key: 'edit',
	        value: function edit() {
	            this.setState({
	                role: 'edit',
	                modal_show: true
	            });
	        }
	    }, {
	        key: 'setDefault',
	        value: function setDefault() {
	            var _this3 = this;
	
	            var _state = this.state,
	                current = _state.current,
	                currentName = _state.currentName;
	
	            var hide = _message3["default"].loading('正在执行中...', 0);
	            _http2["default"].post('/tempshelf/updateTempShelf.do', {
	                indexCode: current,
	                name: currentName,
	                isDefault: 1
	            }).then(function () {
	                _message3["default"].success('操作成功');
	                _this3.fetch();
	            })["catch"](function (e) {
	                return _http2["default"].showError(e);
	            }).then(hide);
	        }
	    }, {
	        key: 'delete',
	        value: function _delete() {
	            var _this4 = this;
	
	            _modal2["default"].confirm({
	                title: '删除文件夹',
	                content: '删除后文件夹里目标一并删除？',
	                onOk: function onOk(e) {
	                    var hide = _message3["default"].loading('正在加载，请稍候...', 0);
	                    return _http2["default"].post('/tempshelf/deleteTempShelf.do?indexCode=' + _this4.state.current).then(function (e) {
	                        _message3["default"].success('操作成功');
	                        _this4.setState({
	                            current: ''
	                        });
	                        _this4.fetch();
	                    })["catch"](function (e) {
	                        return _http2["default"].showError(e);
	                    }).then(hide);
	                }
	            });
	        }
	    }, {
	        key: 'onCancel',
	        value: function onCancel(refresh) {
	            this.setState({
	                modal_show: false
	            });
	            if (refresh === 1) {
	                this.fetch();
	            }
	        }
	    }, {
	        key: 'handleCallback',
	        value: function handleCallback(action) {
	            this[action]();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var props = this.props,
	                state = this.state;
	            var list = state.list,
	                current = state.current,
	                modal_show = state.modal_show,
	                role = state.role;
	
	            var isCurrentDefault = -1;
	            var currentItem = null;
	            var className = 'storage';
	            if (props.size === 'small') {
	                className += ' storage-xs';
	            }
	
	            return _react2["default"].createElement(
	                'div',
	                { className: className },
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-group' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'storage-group-list', style: { height: props.browser.avail_height + 20 } },
	                        list.map(function (item) {
	                            var name = item.name,
	                                isDefault = item.isDefault,
	                                indexCode = item.indexCode;
	
	                            var className = 'storage-group-item';
	
	                            if (current === indexCode) {
	                                className += current === indexCode ? ' open' : '';
	                                currentItem = item;
	                            }
	
	                            return _react2["default"].createElement(
	                                'li',
	                                { className: className,
	                                    onClick: function onClick(e) {
	                                        return _this5.open(indexCode, name);
	                                    },
	                                    key: indexCode },
	                                _react2["default"].createElement('div', { className: 'storage-group-icon' }),
	                                _react2["default"].createElement(
	                                    'p',
	                                    { className: 'storage-group-text' },
	                                    name,
	                                    isDefault === 1 ? '(默认)' : ''
	                                )
	                            );
	                        }),
	                        _react2["default"].createElement(
	                            'li',
	                            { className: 'storage-group-item new',
	                                onClick: this.add.bind(this) },
	                            _react2["default"].createElement('div', { className: 'storage-group-icon' }),
	                            _react2["default"].createElement(
	                                'p',
	                                { className: 'storage-group-text' },
	                                '\u65B0\u5EFA'
	                            )
	                        )
	                    )
	                ),
	                current && _react2["default"].createElement(Detail, { indexCode: current, currentFile: list.filter(function (item) {
	                        return item.indexCode == current;
	                    }), isDefault: currentItem.isDefault, callback: this.handleCallback.bind(this) }),
	                _react2["default"].createElement(
	                    _modal2["default"],
	                    {
	                        title: map[role],
	                        visible: modal_show,
	                        width: 500,
	                        onCancel: this.onCancel.bind(this),
	                        maskClosable: false,
	                        footer: null
	                    },
	                    modal_show && _react2["default"].createElement(Modal_Folder, { role: role, data: currentItem, onCancel: this.onCancel.bind(this) })
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser };
	})(App);
	
	var Detail = function (_React$Component2) {
	    _inherits(Detail, _React$Component2);
	
	    function Detail(props) {
	        _classCallCheck(this, Detail);
	
	        var _this6 = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));
	
	        _this6.state = {
	            list: [],
	            selected: [],
	            show_uploadclue: false, //是否显示上传档案弹窗
	            clueInfos: null, //档案数据
	            trackLineName: '生成轨迹',
	            trackLineBtn_show: false, //显示轨迹按钮            
	            show_trackLine: false, //是否显示生成轨迹弹窗            
	            trackLineInfos: null, //轨迹数据
	            resourceTypeList: [{ 'name': '全部', 'dataValue': 'all' }, { 'name': '人脸', 'dataValue': 'iface' }, { 'name': '人体', 'dataValue': 'ibody' }, { 'name': '人证', 'dataValue': 'ipersonid' }, { 'name': '车辆', 'dataValue': 'ivehicleps' }, { 'name': '终端', 'dataValue': 'iwifi-mac' }, { 'name': '虚拟身份', 'dataValue': 'iwifi-identity' }],
	            resTypeCode: 'all'
	        };
	        if (props.user && props.user.interfaceInfo && JSON.stringify(props.user.interfaceInfo) != "{}") {
	            //上传档案相关属性
	            _this6.state.icasedocUrl = props.user.interfaceInfo.icasedocUrl;
	            _this6.state.trackLineUrl = props.user.interfaceInfo.mapIpPort + '/xmap-web/third/trackLine/index.do?isShowPanel=true';
	        } else {
	            _this6.state.icasedocUrl = protocol + location_ip + ':' + location_port + '/icasedoc/archive/caseUpload/uploadToCase.do';
	            _this6.state.trackLineUrl = protocol + location_ip + ':' + location_port + '/xmap-web/third/trackLine/index.do?isShowPanel=true';
	        }
	        _this6.params = {
	            orderField: 'create_time'
	        };
	        return _this6;
	    }
	
	    _createClass(Detail, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            /*        http.get('/base/findDataDict.do?codes=shelfResType')
	                    .then(({ data }) => {
	                        let { shelfResType } = data
	                        this.setState({
	                            resourceTypeList: shelfResType,
	                            resTypeCode: shelfResType.find(item => item.name === '全部').dataValue
	                        })
	                    })
	                    .catch(e => {})
	                    this.fetch(this.props)*/
	            this.onTypeChange(this.state.resTypeCode);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.indexCode != this.props.indexCode) {
	                this.params = {
	                    orderField: 'create_time'
	                };
	                this.fetch(nextProps);
	            }
	            if (JSON.stringify(nextProps.user.interfaceInfo) != "{}" && JSON.stringify(nextProps.user.interfaceInfo) != JSON.stringify(this.props.user.interfaceInfo)) {
	                this.setState({
	                    icasedocUrl: nextProps.user.interfaceInfo.icasedocUrl,
	                    trackLineUrl: nextProps.user.interfaceInfo.mapIpPort + '/xmap-web/third/trackLine/index.do?isShowPanel=true'
	                });
	            }
	        }
	    }, {
	        key: 'fetch',
	        value: function fetch(props) {
	            var _this7 = this;
	
	            var params = this.params;
	            var hide = _message3["default"].loading('正在加载，请稍候...', 0);
	            _http2["default"].post('/tempshelf/findTempShelfRes.do', {
	                indexCode: props.indexCode,
	                resTypeCode: this.state.resTypeCode,
	                orderField: params.orderField,
	                sort: 0
	            }).then(function (_ref2) {
	                var data = _ref2.data;
	
	                _this7.setState({
	                    list: data || []
	                });
	            })["catch"](function (e) {
	                return _http2["default"].showError(e);
	            }).then(hide);
	        }
	    }, {
	        key: 'selectAll',
	        value: function selectAll(_ref3) {
	            var target = _ref3.target;
	
	            var selected = [];
	            if (target.checked) {
	                selected = this.state.list.map(function (item) {
	                    return item.resourceIndexCode;
	                });
	            } else {
	                selected = [];
	            }
	            this.setState({ selected: selected });
	        }
	    }, {
	        key: 'selectOne',
	        value: function selectOne(_ref4, resourceIndexCode) {
	            var target = _ref4.target;
	
	            var selected = this.state.selected;
	            if (target.checked) {
	                selected.push(resourceIndexCode);
	            } else {
	                var index = selected.findIndex(function (item) {
	                    return item === resourceIndexCode;
	                });
	                selected.splice(index, 1);
	            }
	            this.setState({ selected: selected });
	        }
	    }, {
	        key: 'onTypeChange',
	        value: function onTypeChange(resTypeCode) {
	            var _this8 = this;
	
	            this.setState({
	                resTypeCode: resTypeCode
	            }, function () {
	                _this8.fetch(_this8.props);
	            });
	        }
	    }, {
	        key: 'onOrderChange',
	        value: function onOrderChange(orderField) {
	            this.params.orderField = orderField;
	            this.fetch(this.props);
	        }
	    }, {
	        key: 'viewDetail',
	        value: function viewDetail(resourceIndexCode) {
	            var viewItem = this.state.list.find(function (item) {
	                return item.resourceIndexCode === resourceIndexCode;
	            });
	            var type = viewItem.type;
	            var viewTransferData = [];
	            var privateProperties = viewItem.privateProperties,
	                zone = viewItem.zone,
	                longitude = viewItem.longitude,
	                latitude = viewItem.latitude,
	                passTime = viewItem.passTime,
	                picUrl = viewItem.picUrl;
	
	            switch (type) {
	                case 'iface':
	                    viewTransferData = [_extends({
	                        cameraName: zone,
	                        longitude: longitude,
	                        latitude: latitude,
	                        faceTime: passTime,
	                        facePicUrl: picUrl
	                    }, JSON.parse(privateProperties))];
	                    break;
	                case 'ibody':
	                    viewTransferData = [_extends({
	                        collect_address: zone,
	                        longitude: longitude,
	                        latitude: latitude,
	                        createTime: passTime,
	                        target_pic_url: picUrl
	                    }, JSON.parse(privateProperties))];
	                    break;
	                case 'iwifi-mac':
	                    viewTransferData = [_extends({
	                        devName: zone,
	                        longitude: longitude,
	                        latitude: latitude,
	                        collectTime: passTime
	                    }, JSON.parse(privateProperties))];
	                    break;
	                case 'iwifi-identity':
	                    viewTransferData = [_extends({
	                        devName: zone,
	                        longitude: longitude,
	                        latitude: latitude,
	                        collectTime: passTime
	                    }, JSON.parse(privateProperties))];
	                    break;
	                case 'ipersonid':
	                    viewTransferData = [_extends({
	                        cameraName: zone,
	                        longitude: longitude,
	                        latitude: latitude,
	                        faceTime: passTime,
	                        facePicUrl: picUrl
	                    }, JSON.parse(privateProperties))];
	                    break;
	                default:
	                    break;
	            }
	            _http2["default"].storage.setData({ list: viewTransferData }).then(function (jobId) {
	                var url = '' + protocol + location_ip + (location_port ? ':' + location_port : '') + viewTransferMap[type];
	                var param = 'index=' + 0 + '&jobId=' + jobId;
	                (0, _tool.goToApp)({
	                    url: url,
	                    param: param,
	                    title: "目标详情"
	                });
	            });
	        }
	    }, {
	        key: 'move',
	        value: function move(resourceIndexCode) {
	            if (resourceIndexCode) {
	                this.setState({
	                    selected: [resourceIndexCode]
	                });
	            }
	            this.setState({
	                role: 'move',
	                modal_show: true
	            });
	        }
	    }, {
	        key: 'copy',
	        value: function copy(resourceIndexCode) {
	            if (resourceIndexCode) {
	                this.setState({
	                    selected: [resourceIndexCode]
	                });
	            }
	            this.setState({
	                role: 'copy',
	                modal_show: true
	            });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(resourceIndexCode) {
	            var _this9 = this;
	
	            if (resourceIndexCode) {
	                this.setState({
	                    selected: [resourceIndexCode]
	                });
	            }
	            _modal2["default"].confirm({
	                title: '删除目标',
	                content: '是否删除已上传档案目标？',
	                onOk: function onOk(e) {
	                    var hide = _message3["default"].loading('正在加载，请稍候...', 0);
	                    return _http2["default"].post('/tempshelf/batchDeleteRes.do', {
	                        docIndexCode: _this9.props.indexCode,
	                        list: _this9.state.selected
	                    }).then(function (e) {
	                        _message3["default"].success('操作成功');
	                        _this9.onCancel(1);
	                    })["catch"](function (e) {
	                        return _http2["default"].showError(e);
	                    }).then(hide);
	                }
	            });
	        }
	    }, {
	        key: 'onCancel',
	        value: function onCancel(refresh) {
	            this.setState({
	                modal_show: false
	            });
	            if (refresh === 1) {
	                this.fetch(this.props);
	                this.setState({
	                    selected: []
	                });
	            }
	        }
	    }, {
	        key: 'fullScreen',
	        value: function fullScreen() {
	            (0, _tool.goToApp)({
	                url: '#storage',
	                title: '暂存架'
	            });
	        }
	    }, {
	        key: 'renderInfo',
	        value: function renderInfo(data) {
	            var _data = JSON.parse(data.privateProperties);
	            if (data.type === "iface") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-content' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'local' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                data.zone
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'clock' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                (0, _moment2["default"])(data.passTime).format(_dic.FORMAT_DATETIME)
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u6027\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u522B\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.genderValue
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u5E74\xA0\xA0\u9F84\xA0\xA0\u6BB5\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.ageGroupValue
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u5FAE\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u7B11\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.smileValue
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u6234\xA0\xA0\u773C\xA0\xA0\u955C\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.glassValue
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u5C11\u6570\u6C11\u65CF\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.ethnicValue
	                            )
	                        )
	                    )
	                );
	            } else if (data.type === "ipersonid") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-content' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-face-name' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.personName
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'local' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                data.zone
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'clock' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                (0, _moment2["default"])(data.passTime).format(_dic.FORMAT_DATETIME)
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u8EAB\u4EFD\u8BC1\u53F7\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.identifyNo
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u5BB6\u5EAD\u4F4F\u5740\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.homeAddr
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u6027\u522B\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.sex === 1 ? "男" : "女"
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u6C11\u65CF\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.nationalName
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u662F\u5426\u5339\u914D\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.isMatch === 0 ? "匹配" : "不匹配"
	                            )
	                        )
	                    )
	                );
	            } else if (data.type === "ibody") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-content' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'local' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                data.zone
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'clock' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                (0, _moment2["default"])(data.passTime).format(_dic.FORMAT_DATETIME)
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u6027\u522B\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.targetGender
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u4E0A\u8863\u989C\u8272\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.jacketColor
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u80CC\u5305\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.isBag
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u62CE\u4E1C\u897F\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.isThings
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u6234\u5E3D\u5B50\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.isHat
	                            )
	                        )
	                    )
	                );
	            } else if (data.type === 'ivehicleps') {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-content' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-vehicle-lg' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.plateNo
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-local' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.plateCrossingName ? _data.plateCrossingName : "-"
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'clock' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                (0, _moment2["default"])(data.passTime).format(_dic.FORMAT_DATETIME)
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u8F66\u9053\u540D\u79F0:'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.laneName ? _data.laneName : "-"
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u8F66\u9053\u65B9\u5411\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.directionName
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u8F66\u901F:'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.vehicleSpeed ? _data.vehicleSpeed + 'km/h' : "-"
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u8FDD\u6CD5\u884C\u4E3A:'
	                            ),
	                            _react2["default"].createElement('span', null)
	                        )
	                    )
	                );
	            } else if (data.type === "iwifi-identity") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-content' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-wifi-id-search' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.identityValue
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'local' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                data.zone || "-"
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'clock' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                (0, _moment2["default"])(data.passTime).format(_dic.FORMAT_DATETIME)
	                            )
	                        )
	                    )
	                );
	            } else if (data.type === "iwifi-mac") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-content' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-wifi-terminal' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.macAddress
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'local' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                data.zone || "-"
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'clock' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                (0, _moment2["default"])(data.passTime).format(_dic.FORMAT_DATETIME)
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u91C7\u96C6\u673A\u5177\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                data.zone
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u7EC8\u7AEFmac\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.macAddress
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u7EC8\u7AEF\u573A\u5F3A\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.fieldIntensity
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl storage-hidden-in-xs' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u7EC8\u7AEF\u54C1\u724C\uFF1A'
	                            ),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                _data.terminalBrand
	                            )
	                        )
	                    )
	                );
	            } else {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-content' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'local' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                data.zone
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'li',
	                            null,
	                            _react2["default"].createElement(_icon2["default"], { type: 'clock' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                (0, _moment2["default"])(data.passTime).format(_dic.FORMAT_DATETIME)
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement('ul', { className: 'fl storage-hidden-in-xs' }),
	                    _react2["default"].createElement('ul', { className: 'fl storage-hidden-in-xs' })
	                );
	            }
	        }
	    }, {
	        key: 'renderImage',
	        value: function renderImage(data) {
	            if (data.type === "iwifi-mac") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-image storage-detail-image-iwifi-terminal' },
	                    _react2["default"].createElement('img', null)
	                );
	            } else if (data.type === "iwifi-identity") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-image storage-detail-image-iwifi-identity' },
	                    _react2["default"].createElement('img', null)
	                );
	            } else {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-image' },
	                    _react2["default"].createElement('img', { src: data.picUrl })
	                );
	            }
	        }
	
	        //上传档案
	
	    }, {
	        key: 'uploadClue',
	        value: function uploadClue(list, selected) {
	            if (selected && selected.length > 0) {
	                var selectedItems = list.filter(function (item) {
	                    return selected.indexOf(item.resourceIndexCode) != -1;
	                });
	                var clueItems = selectedItems.map(function (item) {
	                    var clueItem = {
	                        "clueImgName": '',
	                        "src": CONTEXTPATH,
	                        "clueImgUrl": item.picUrl,
	                        "longitude": item.longitude,
	                        "latitude": item.latitude
	                    };
	                    return clueItem;
	                });
	                var clueInfos = {
	                    "clueInfos": clueItems
	                };
	                this.setState({
	                    show_uploadclue: true,
	                    clueInfos: clueInfos
	                });
	            } else {
	                return _modal2["default"].info({
	                    title: '提示',
	                    content: '请选择目标'
	                });
	            }
	        }
	        //上传档案关闭弹窗后回调
	
	    }, {
	        key: 'uploadClueCloseCallback',
	        value: function uploadClueCloseCallback(show_uploadclue) {
	            this.setState({
	                show_uploadclue: show_uploadclue
	            });
	        }
	    }, {
	        key: 'btnMouseEnter',
	        value: function btnMouseEnter() {
	            this.setState({
	                trackLineBtn_show: true
	            });
	        }
	    }, {
	        key: 'btnMouseLeave',
	        value: function btnMouseLeave() {
	            this.setState({
	                trackLineBtn_show: false
	            });
	        }
	
	        //生成轨迹
	
	    }, {
	        key: 'showTrackLine',
	        value: function showTrackLine(list, selected, type) {
	            var currentFile = this.props.currentFile[0];
	            if (selected && selected.length > 0) {
	                var selectedItems = list.filter(function (item) {
	                    return selected.indexOf(item.resourceIndexCode) != -1;
	                });
	                var trackLineInfos = [];
	                if (type === 1) {
	                    var trackLineArray = selectedItems.map(function (item) {
	                        var type = void 0;
	                        if (item.type === 'ivehicleps') {
	                            type = 0;
	                        } else if (item.type === 'iwifi') {
	                            type = 1;
	                        } else {
	                            type = 2;
	                        }
	                        var trackLineItem = {
	                            'deviceName': item.zone,
	                            'time': (0, _moment2["default"])(item.passTime).format(_dic.FORMAT_DATETIME),
	                            'type': type,
	                            'longitude': item.longitude,
	                            'latitude': item.latitude,
	                            'imgUrl': item.picUrl
	                        };
	                        return trackLineItem;
	                    });
	                    trackLineInfos = [{
	                        'id': '0',
	                        'name': currentFile.name,
	                        'type': '',
	                        'tracks': trackLineArray
	                    }];
	                    this.setState({
	                        show_trackLine: true,
	                        trackLineInfos: trackLineInfos,
	                        trackLineName: '单条轨迹'
	                    });
	                } else {
	                    var ivehiclepsArray = selectedItems.filter(function (item) {
	                        return item.type === 'ivehicleps';
	                    }).map(function (item) {
	                        var trackLineItem = {
	                            'deviceName': item.zone,
	                            'time': (0, _moment2["default"])(item.passTime).format(_dic.FORMAT_DATETIME),
	                            'type': 0,
	                            'longitude': item.longitude,
	                            'latitude': item.latitude,
	                            'imgUrl': item.picUrl
	                        };
	                        return trackLineItem;
	                    });
	                    var iwifiArray = selectedItems.filter(function (item) {
	                        return item.type === 'iwifi';
	                    }).map(function (item) {
	                        var trackLineItem = {
	                            'deviceName': item.zone,
	                            'time': (0, _moment2["default"])(item.passTime).format(_dic.FORMAT_DATETIME),
	                            'type': 1,
	                            'longitude': item.longitude,
	                            'latitude': item.latitude,
	                            'imgUrl': item.picUrl
	                        };
	                        return trackLineItem;
	                    });
	                    var personArray = selectedItems.filter(function (item) {
	                        return item.type === 'iface' || item.type === 'ibody' || item.type === 'ipersonid';
	                    }).map(function (item) {
	                        var trackLineItem = {
	                            'deviceName': item.zone,
	                            'time': (0, _moment2["default"])(item.passTime).format(_dic.FORMAT_DATETIME),
	                            'type': 2,
	                            'longitude': item.longitude,
	                            'latitude': item.latitude,
	                            'imgUrl': item.picUrl
	                        };
	                        return trackLineItem;
	                    });
	                    if (ivehiclepsArray.length > 0) {
	                        var ivehiclepsTrack = {
	                            'id': '0',
	                            'name': currentFile.name,
	                            'type': 0,
	                            'tracks': ivehiclepsArray
	                        };
	                        trackLineInfos.push(ivehiclepsTrack);
	                    }
	                    if (iwifiArray.length > 0) {
	                        var iwifiTrack = {
	                            'id': '1',
	                            'name': currentFile.name,
	                            'type': 1,
	                            'tracks': iwifiArray
	                        };
	                        trackLineInfos.push(iwifiTrack);
	                    }
	                    if (personArray.length > 0) {
	                        var personTrack = {
	                            'id': '2',
	                            'name': currentFile.name,
	                            'type': 2,
	                            'tracks': personArray
	                        };
	                        trackLineInfos.push(personTrack);
	                    }
	                    this.setState({
	                        show_trackLine: true,
	                        trackLineInfos: trackLineInfos,
	                        trackLineName: '多类型轨迹'
	                    });
	                }
	            } else {
	                return _modal2["default"].info({
	                    title: '提示',
	                    content: '请选择目标'
	                });
	            }
	        }
	        //生成轨迹关闭弹窗后回调
	
	    }, {
	        key: 'trackLineCloseCallback',
	        value: function trackLineCloseCallback(show_trackLine) {
	            this.setState({
	                show_trackLine: show_trackLine
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this10 = this;
	
	            var props = this.props,
	                state = this.state,
	                params = this.params;
	
	            var avail_height = props.browser.avail_height;
	            var modal_show = state.modal_show,
	                role = state.role,
	                list = state.list,
	                selected = state.selected,
	                resourceTypeList = state.resourceTypeList,
	                resTypeCode = state.resTypeCode,
	                trackLineName = state.trackLineName,
	                trackLineBtn_show = state.trackLineBtn_show,
	                show_uploadclue = state.show_uploadclue,
	                show_trackLine = state.show_trackLine,
	                clueInfos = state.clueInfos,
	                trackLineInfos = state.trackLineInfos,
	                icasedocUrl = state.icasedocUrl,
	                trackLineUrl = state.trackLineUrl;
	
	
	            var length = list.length;
	            var noData = length === 0;
	            var noSelect = selected.length === 0;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'storage-detail', style: { height: avail_height } },
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-header' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            _checkbox2["default"],
	                            { disabled: noData, checked: length > 0 && selected.length === length, onChange: this.selectAll.bind(this) },
	                            '\u5168\u9009'
	                        ),
	                        props.isDefault === 1 ? _react2["default"].createElement(
	                            'span',
	                            { className: 'storage-hidden-in-xs' },
	                            _react2["default"].createElement(_icon2["default"], { type: 'infor' }),
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                '\u5DF2\u8BBE\u4E3A\u9ED8\u8BA4\u6682\u5B58\u67B6\u5B58\u6863\u6587\u4EF6'
	                            )
	                        ) : _react2["default"].createElement(
	                            _button2["default"],
	                            { className: 'storage-hidden-in-xs', onClick: function onClick(e) {
	                                    return props.callback('setDefault');
	                                } },
	                            '\u8BBE\u4E3A\u9ED8\u8BA4'
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'fr storage-fl-in-xs' },
	                        _react2["default"].createElement(
	                            _select2["default"],
	                            { value: resTypeCode, onChange: this.onTypeChange.bind(this), style: { width: 116 } },
	                            resourceTypeList.map(function (_ref5, index) {
	                                var dataValue = _ref5.dataValue,
	                                    name = _ref5.name;
	
	                                return _react2["default"].createElement(
	                                    Option,
	                                    { key: index, value: String(dataValue) },
	                                    name
	                                );
	                            })
	                        ),
	                        _react2["default"].createElement(
	                            _select2["default"],
	                            { disabled: noData, defaultValue: params.orderField, onChange: this.onOrderChange.bind(this), style: { width: 126 } },
	                            _react2["default"].createElement(
	                                Option,
	                                { value: 'create_time' },
	                                '\u6309\u52A0\u5165\u65F6\u95F4\u6392\u5E8F'
	                            ),
	                            _react2["default"].createElement(
	                                Option,
	                                { value: 'pass_time' },
	                                '\u6309\u91C7\u96C6\u65F6\u95F4\u6392\u5E8F'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { className: 'storage-hidden-in-xs', onClick: function onClick(e) {
	                                    return props.callback('edit');
	                                } },
	                            '\u4FEE\u6539\u6587\u4EF6\u5939'
	                        ),
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { className: 'storage-hidden-in-xs', onClick: function onClick(e) {
	                                    return props.callback('delete');
	                                } },
	                            '\u5220\u9664\u6587\u4EF6\u5939'
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'fr storage-fullscreen storage-show-in-xs' },
	                        _react2["default"].createElement(
	                            'a',
	                            { href: 'javascript:void(0);', onClick: this.fullScreen.bind(this) },
	                            '\u5168\u5C4F\u67E5\u770B'
	                        )
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-body', style: { height: avail_height - 48 } },
	                    noData ? _react2["default"].createElement('div', { className: 'storage-detai-empty' }) : _react2["default"].createElement(
	                        'ul',
	                        { className: 'storage-detail-list' },
	                        list.map(function (item) {
	                            var resourceIndexCode = item.resourceIndexCode;
	                            return _react2["default"].createElement(
	                                'li',
	                                { className: 'storage-detail-item', key: resourceIndexCode },
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: 'fl', style: { width: 24 } },
	                                    _react2["default"].createElement(_checkbox2["default"], { checked: selected.indexOf(resourceIndexCode) !== -1, onChange: function onChange(e) {
	                                            return _this10.selectOne(e, resourceIndexCode);
	                                        } })
	                                ),
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: 'fl', style: { width: 144 } },
	                                    _this10.renderImage(item)
	                                ),
	                                _react2["default"].createElement(
	                                    'div',
	                                    { className: 'fr storage-hidden-in-xs', style: { width: 160 } },
	                                    _react2["default"].createElement(
	                                        'div',
	                                        { className: 'fl storage-detail-action1' },
	                                        _react2["default"].createElement(
	                                            'a',
	                                            { href: 'javascript:void(0);', onClick: function onClick(e) {
	                                                    return _this10.viewDetail(resourceIndexCode);
	                                                } },
	                                            '\u67E5\u770B\u8BE6\u60C5'
	                                        )
	                                    ),
	                                    _react2["default"].createElement(
	                                        'div',
	                                        { className: 'fl storage-detail-action2' },
	                                        _react2["default"].createElement(
	                                            'div',
	                                            null,
	                                            _react2["default"].createElement(
	                                                'a',
	                                                { href: 'javascript:void(0);', onClick: function onClick(e) {
	                                                        return _this10["delete"](resourceIndexCode);
	                                                    } },
	                                                '\u5220\u9664'
	                                            )
	                                        ),
	                                        _react2["default"].createElement(
	                                            'div',
	                                            null,
	                                            _react2["default"].createElement(
	                                                'a',
	                                                { href: 'javascript:void(0);', onClick: function onClick(e) {
	                                                        return _this10.move(resourceIndexCode);
	                                                    } },
	                                                '\u79FB\u52A8'
	                                            )
	                                        ),
	                                        _react2["default"].createElement(
	                                            'div',
	                                            null,
	                                            _react2["default"].createElement(
	                                                'a',
	                                                { href: 'javascript:void(0);', onClick: function onClick(e) {
	                                                        return _this10.copy(resourceIndexCode);
	                                                    } },
	                                                '\u590D\u5236'
	                                            )
	                                        )
	                                    )
	                                ),
	                                _this10.renderInfo(item)
	                            );
	                        })
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'storage-detail-footer' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'fl' },
	                        _react2["default"].createElement(
	                            _checkbox2["default"],
	                            { disabled: noData, checked: selected.length === length, onChange: this.selectAll.bind(this) },
	                            '\u5168\u9009'
	                        ),
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { className: 'storage-hidden-in-xs', disabled: noData || noSelect, onClick: function onClick(e) {
	                                    return _this10.move();
	                                } },
	                            '\u79FB\u52A8'
	                        ),
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { className: 'storage-hidden-in-xs', disabled: noData || noSelect, onClick: function onClick(e) {
	                                    return _this10.copy();
	                                } },
	                            '\u590D\u5236'
	                        ),
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { className: 'storage-hidden-in-xs', disabled: noData || noSelect, onClick: function onClick(e) {
	                                    return _this10["delete"]();
	                                } },
	                            '\u5220\u9664'
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'fr' },
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { disabled: noData, type: 'primary', onClick: function onClick(e) {
	                                    return _this10.uploadClue(list, selected);
	                                } },
	                            '\u4E0A\u4F20\u6863\u6848'
	                        ),
	                        icasedocUrl && clueInfos && show_uploadclue && _react2["default"].createElement(_casedoc.UploadClue, { url: icasedocUrl, data: clueInfos, visible: state.show_uploadclue, closeCallback: this.uploadClueCloseCallback.bind(this) }),
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'storage-detail-trackline', onMouseEnter: this.btnMouseEnter.bind(this), onMouseLeave: this.btnMouseLeave.bind(this) },
	                            _react2["default"].createElement(
	                                _button2["default"],
	                                { disabled: noData, type: 'primary', className: 'storage-detail-trackline-select' },
	                                '\u751F\u6210\u8F68\u8FF9',
	                                trackLineBtn_show ? _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-angle-sm-down' }) : _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-angle-sm-up' })
	                            ),
	                            _react2["default"].createElement(
	                                'div',
	                                { className: 'storage-detail-trackline-btn', style: trackLineBtn_show ? { display: 'block' } : { display: 'none' } },
	                                _react2["default"].createElement(
	                                    _button2["default"],
	                                    { disabled: noData, onClick: function onClick(e) {
	                                            return _this10.showTrackLine(list, selected, 1);
	                                        } },
	                                    '\u5355\u6761\u8F68\u8FF9'
	                                ),
	                                _react2["default"].createElement(
	                                    _button2["default"],
	                                    { disabled: noData, onClick: function onClick(e) {
	                                            return _this10.showTrackLine(list, selected, 0);
	                                        } },
	                                    '\u591A\u7C7B\u578B\u8F68\u8FF9'
	                                )
	                            )
	                        ),
	                        trackLineUrl && trackLineInfos && show_trackLine && _react2["default"].createElement(_maps.ShowTrackLine, { url: trackLineUrl, data: trackLineInfos, modalName: state.trackLineName, visible: state.show_trackLine, closeCallback: this.trackLineCloseCallback.bind(this) })
	                    )
	                ),
	                _react2["default"].createElement(
	                    _modal2["default"],
	                    {
	                        title: map[role],
	                        visible: modal_show,
	                        width: 500,
	                        onCancel: this.onCancel.bind(this),
	                        maskClosable: false,
	                        footer: null
	                    },
	                    modal_show && _react2["default"].createElement(Modal_Detail, {
	                        indexCode: props.indexCode,
	                        role: role,
	                        list: list,
	                        selected: state.selected,
	                        onCancel: this.onCancel.bind(this)
	                    })
	                )
	            );
	        }
	    }]);
	
	    return Detail;
	}(_react2["default"].Component);
	
	Detail = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, user: state.user };
	})(Detail);

/***/ }),

/***/ 1175:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=map/23.map