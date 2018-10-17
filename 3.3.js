webpackJsonp([3,39],{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(401);
	
	__webpack_require__(398);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layout = __webpack_require__(480);
	
	var _loader = __webpack_require__(410);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddLib = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(491)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	});
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            libModel: false,
	            libListLength: props.libListLength,
	            isFilterShow: false
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.libListLength !== nextProps.libListLength) {
	                this.setState({
	                    libListLength: nextProps.libListLength
	                });
	            }
	        }
	    }, {
	        key: 'hideModal',
	        value: function hideModal() {
	            this.setState({
	                libModel: false
	            });
	        }
	    }, {
	        key: 'navigateToAddLib',
	        value: function navigateToAddLib() {
	            window.location.hash = '#nameListLib/addLib';
	        }
	    }, {
	        key: 'onHandleCascade',
	        value: function onHandleCascade() {
	            _modal2["default"].warning({
	                title: '提示',
	                content: '此功能暂未开放!'
	            });
	        }
	    }, {
	        key: 'onEnterTask',
	        value: function onEnterTask() {
	            window.location.hash = '#nameListLib/task';
	        }
	    }, {
	        key: 'onHandleFilter',
	        value: function onHandleFilter() {
	            if (this.props.onFilterHandle) {
	                this.props.onFilterHandle();
	            }
	            this.setState({
	                isFilterShow: !this.state.isFilterShow
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context;
	
	            var props = this.props,
	                state = this.state;
	            var libModel = state.libModel,
	                libListLength = state.libListLength,
	                isFilterShow = state.isFilterShow;
	
	
	            return libListLength !== -1 && (libListLength > 0 ? _react2["default"].createElement(
	                'div',
	                { className: 'faceListLib-content-header' },
	                _react2["default"].createElement(
	                    _layout.ContentLayoutNorth,
	                    { height: 48 },
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { type: 'primary', icon: 'plus', onClick: this.navigateToAddLib.bind(this) },
	                        '\u65B0\u5EFA\u540D\u5355\u5E93'
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'fr' },
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { onClick: this.onHandleFilter.bind(this), className: isFilterShow ? 'filter-button filter-active' : 'filter-button' },
	                            _react2["default"].createElement(_icon2["default"], { type: isFilterShow ? 'lidaicon-h-filter-f' : 'lidaicon-h-filter', style: { color: isFilterShow ? '#368df8' : '#444' } })
	                        )
	                    ),
	                    libModel && _react2["default"].createElement(AddLib, { onHideModal: this.hideModal.bind(this), onRefresh: (_context = this.props).onRefresh.bind(_context) })
	                )
	            ) : _react2["default"].createElement(
	                'div',
	                { className: 'faceListLib-content-default' },
	                _react2["default"].createElement(
	                    'ul',
	                    null,
	                    _react2["default"].createElement('li', { className: 'default-image no-data' }),
	                    _react2["default"].createElement(
	                        'li',
	                        { className: 'default-text' },
	                        '\u6682\u65E0\u4EBA\u8138\u540D\u5355\u5E93\u4FE1\u606F'
	                    ),
	                    _react2["default"].createElement(
	                        'li',
	                        null,
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { type: 'primary', icon: 'plus', onClick: this.navigateToAddLib.bind(this) },
	                            '\u65B0\u5EFA\u540D\u5355\u5E93'
	                        )
	                    )
	                )
	            ));
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = App;

/***/ })

});
//# sourceMappingURL=map/3.map