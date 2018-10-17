webpackJsonp([24,39],{

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _checkbox = __webpack_require__(845);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _input = __webpack_require__(492);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _message2 = __webpack_require__(500);
	
	var _message3 = _interopRequireDefault(_message2);
	
	var _form = __webpack_require__(532);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(401);
	
	__webpack_require__(601);
	
	__webpack_require__(578);
	
	__webpack_require__(580);
	
	__webpack_require__(584);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _dic = __webpack_require__(588);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _form2["default"].Item;
	
	var map = {
	    add: '/tempshelf/saveTempShelf.do',
	    edit: '/tempshelf/updateTempShelf.do'
	};
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	    }
	
	    _createClass(App, [{
	        key: 'handleSubmit',
	        value: function handleSubmit() {
	            var props = this.props;
	            var role = props.role;
	
	            props.form.validateFields(function (errors, values) {
	                if (!errors) {
	                    values.isDefault = values.isDefault ? 1 : 0;
	                    if (role === 'edit') {
	                        values.indexCode = props.data.indexCode;
	                    }
	
	                    var hide = _message3["default"].loading('正在加载，请稍候...', 0);
	                    _http2["default"].post(map[role], values).then(function (e) {
	                        return _message3["default"].success('操作成功');
	                    }).then(function (e) {
	                        return props.onCancel(1);
	                    })["catch"](function (e) {
	                        return _http2["default"].showError(e);
	                    }).then(hide);
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	            var getFieldProps = props.form.getFieldProps;
	            var role = props.role,
	                data = props.data;
	
	
	            return _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    _form2["default"],
	                    { horizontal: true },
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u6587\u4EF6\u5939\u540D\u79F0' },
	                        _react2["default"].createElement(_input2["default"], _extends({ style: { width: 244 }, autoComplete: 'off'
	                        }, getFieldProps('name', {
	                            initialValue: role === 'add' ? '' : data.name,
	                            rules: [_dic.RULE_REQUIRED, _dic.RULE_LT10LETTERS, _dic.RULE_NOTSUPPORTED]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: ' ' },
	                        _react2["default"].createElement(
	                            _checkbox2["default"],
	                            getFieldProps('isDefault', {
	                                initialValue: role === 'add' ? false : data.isDefault === 1,
	                                valuePropName: 'checked',
	                                rules: []
	                            }),
	                            '\u8BBE\u4E3A\u9ED8\u8BA4'
	                        )
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'ant-modal-footer' },
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { size: 'large', type: 'ghost', onClick: props.onCancel },
	                        '\u53D6\u6D88'
	                    ),
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { size: 'large', type: 'primary', onClick: this.handleSubmit.bind(this) },
	                        '\u786E\u5B9A'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = _form2["default"].create()(App);

/***/ })

});
//# sourceMappingURL=map/24.map