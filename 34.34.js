webpackJsonp([34,39],{

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ContentLayoutCenter = exports.ContentLayoutWest = exports.ContentLayoutEast = exports.ContentLayoutNorth = undefined;
	
	var _switch = __webpack_require__(481);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp, _class2, _temp2, _class3, _temp3;
	
	__webpack_require__(484);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _propTypes = __webpack_require__(160);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _redux = __webpack_require__(177);
	
	var _actions = __webpack_require__(272);
	
	__webpack_require__(486);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var northHeight = 0;
	var navHeight = 0;
	var widthLimit = 1280;
	
	var ContentLayoutNorth = (_temp = _class = function (_React$Component) {
	    _inherits(ContentLayoutNorth, _React$Component);
	
	    function ContentLayoutNorth(props) {
	        _classCallCheck(this, ContentLayoutNorth);
	
	        var _this = _possibleConstructorReturn(this, (ContentLayoutNorth.__proto__ || Object.getPrototypeOf(ContentLayoutNorth)).call(this, props));
	
	        northHeight = _this.props.height == 0 ? 0 : _this.props.height || 100;
	        return _this;
	    }
	
	    _createClass(ContentLayoutNorth, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (northHeight !== nextProps.height) {
	                northHeight = nextProps.height == 0 ? 0 : nextProps.height || 100;
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            northHeight = 0;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'content-layout-north', style: props.scroll ? { height: this.props.height, overflowX: 'auto' } : { height: this.props.height } },
	                props.children
	            );
	        }
	    }]);
	
	    return ContentLayoutNorth;
	}(_react2["default"].Component), _class.propTypes = {
	    height: _propTypes2["default"].number.isRequired
	}, _temp);
	var ContentLayoutEast = (_temp2 = _class2 = function (_React$Component2) {
	    _inherits(ContentLayoutEast, _React$Component2);
	
	    function ContentLayoutEast(props) {
	        _classCallCheck(this, ContentLayoutEast);
	
	        var _this2 = _possibleConstructorReturn(this, (ContentLayoutEast.__proto__ || Object.getPrototypeOf(ContentLayoutEast)).call(this, props));
	
	        _this2.props.eastWidthChange(_this2.props.width == 0 ? 0 : _this2.props.width || 440);
	        _this2.state = {
	            height: 0,
	            isShow: false
	        };
	        return _this2;
	    }
	
	    _createClass(ContentLayoutEast, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.browser.height !== undefined || nextProps.height !== undefined) {
	                var browserHeight = nextProps.browser.height;
	                var browserWidth = nextProps.browser.width < widthLimit ? widthLimit : nextProps.browser.width;
	                var height = nextProps.height || browserHeight - northHeight - navHeight;
	                this.setState({
	                    height: height,
	                    isShow: browserWidth < widthLimit ? false : !nextProps.layout.switchState ? false : true
	                });
	            }
	            if (nextProps.layout.eastWidth !== nextProps.width) {
	                nextProps.eastWidthChange(nextProps.width == 0 ? 0 : nextProps.width);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var props = this.props;
	
	            var browserHeight = props.browser.height;
	            var height = props.height || browserHeight - northHeight - navHeight;
	            this.setState({
	                height: height,
	                isShow: true
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.eastWidthChange(0);
	        }
	    }, {
	        key: 'switchChange',
	        value: function switchChange(checked) {
	            var props = this.props;
	
	            props.switchState(checked);
	            this.setState({
	                isShow: checked
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(
	                'div',
	                { style: { position: 'relative' } },
	                props.layout.eastWidth !== 0 && props.browser.width >= widthLimit && props.layout.switchState && _react2["default"].createElement(
	                    'div',
	                    { className: 'east-switch-cls' },
	                    _react2["default"].createElement(_switch2["default"], { defaultChecked: true, size: 'small', onChange: this.switchChange.bind(this) }),
	                    '\u53F3\u4FA7\u4FE1\u606F'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'content-layout-east', style: {
	                            width: props.layout.eastWidth,
	                            height: state.height,
	                            display: !state.isShow ? 'none' : 'block',
	                            overflowY: props.overflowY
	                        } },
	                    props.children
	                )
	            );
	        }
	    }]);
	
	    return ContentLayoutEast;
	}(_react2["default"].Component), _class2.propTypes = {
	    width: _propTypes2["default"].number.isRequired,
	    overflowY: _propTypes2["default"].string
	}, _temp2);
	var ContentLayoutWest = (_temp3 = _class3 = function (_React$Component3) {
	    _inherits(ContentLayoutWest, _React$Component3);
	
	    function ContentLayoutWest(props) {
	        _classCallCheck(this, ContentLayoutWest);
	
	        var _this3 = _possibleConstructorReturn(this, (ContentLayoutWest.__proto__ || Object.getPrototypeOf(ContentLayoutWest)).call(this, props));
	
	        _this3.props.westWidthChange(_this3.props.width || 440);
	        _this3.state = {
	            height: 0
	        };
	        return _this3;
	    }
	
	    _createClass(ContentLayoutWest, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.browser.height !== undefined) {
	                var browserHeight = nextProps.browser.height;
	                var browserWidth = nextProps.browser.width;
	                var height = browserHeight - northHeight - navHeight;
	                this.setState({
	                    height: height
	                });
	            }
	            if (nextProps.layout.westWidth !== nextProps.width) {
	                nextProps.westWidthChange(nextProps.width == 0 ? 0 : nextProps.width);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var props = this.props;
	
	            var browserHeight = props.browser.height;
	            var height = browserHeight - northHeight - navHeight;
	            this.setState({
	                height: height
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.westWidthChange(0);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'content-layout-west', style: {
	                        width: props.layout.westWidth,
	                        height: state.height,
	                        overflowY: props.overflowY
	                    } },
	                props.children
	            );
	        }
	    }]);
	
	    return ContentLayoutWest;
	}(_react2["default"].Component), _class3.propTypes = {
	    width: _propTypes2["default"].number.isRequired,
	    overflowY: _propTypes2["default"].string
	}, _temp3);
	
	var ContentLayoutCenter = function (_React$Component4) {
	    _inherits(ContentLayoutCenter, _React$Component4);
	
	    function ContentLayoutCenter(props) {
	        _classCallCheck(this, ContentLayoutCenter);
	
	        var _this4 = _possibleConstructorReturn(this, (ContentLayoutCenter.__proto__ || Object.getPrototypeOf(ContentLayoutCenter)).call(this, props));
	
	        _this4.state = {
	            height: 0,
	            marginRight: 0,
	            marginLeft: 0
	        };
	        return _this4;
	    }
	
	    _createClass(ContentLayoutCenter, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.browser.height !== undefined) {
	                var browserHeight = nextProps.browser.height;
	                var browserWidth = nextProps.browser.width;
	                var height = 0;
	                if (nextProps.navHeight) {
	                    navHeight = nextProps.navHeight;
	                    height = browserHeight - northHeight - navHeight;
	                } else {
	                    height = browserHeight - northHeight;
	                }
	                this.setState({
	                    height: height,
	                    marginRight: browserWidth < widthLimit ? 0 : !nextProps.layout.switchState ? 0 : nextProps.layout.eastWidth,
	                    marginLeft: browserWidth < widthLimit ? 0 : nextProps.layout.westWidth
	                });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var props = this.props;
	
	            var browserHeight = props.browser.height;
	            var browserWidth = props.browser.width;
	            var height = 0;
	            if (props.navHeight) {
	                navHeight = props.navHeight;
	                height = browserHeight - northHeight - navHeight;
	            } else {
	                height = browserHeight - northHeight;
	            }
	            this.setState({
	                height: height,
	                marginRight: browserWidth < widthLimit ? 0 : props.layout.eastWidth,
	                marginLeft: browserWidth < widthLimit ? 0 : props.layout.westWidth
	            });
	            if (this.props.refCallback) {
	                this.props.refCallback(this.refs.target);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'content-layout-center', ref: 'target', style: { marginLeft: state.marginLeft, marginRight: state.marginRight, height: state.height } },
	                props.children
	            );
	        }
	    }]);
	
	    return ContentLayoutCenter;
	}(_react2["default"].Component);
	
	exports.ContentLayoutNorth = ContentLayoutNorth = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser };
	})(ContentLayoutNorth);
	
	exports.ContentLayoutEast = ContentLayoutEast = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, layout: state.layout };
	}, function (dispatch) {
	    return (0, _redux.bindActionCreators)({ switchState: _actions.switchState, eastWidthChange: _actions.eastWidthChange }, dispatch);
	})(ContentLayoutEast);
	
	exports.ContentLayoutWest = ContentLayoutWest = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, layout: state.layout };
	}, function (dispatch) {
	    return (0, _redux.bindActionCreators)({ westWidthChange: _actions.westWidthChange }, dispatch);
	})(ContentLayoutWest);
	
	exports.ContentLayoutCenter = ContentLayoutCenter = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, layout: state.layout };
	})(ContentLayoutCenter);
	
	exports.ContentLayoutNorth = ContentLayoutNorth;
	exports.ContentLayoutEast = ContentLayoutEast;
	exports.ContentLayoutWest = ContentLayoutWest;
	exports.ContentLayoutCenter = ContentLayoutCenter;

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _rcSwitch = __webpack_require__(482);
	
	var _rcSwitch2 = _interopRequireDefault(_rcSwitch);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Switch = (_temp = _class = function (_React$Component) {
	  _inherits(Switch, _React$Component);
	
	  function Switch() {
	    _classCallCheck(this, Switch);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Switch.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        size = _props.size,
	        className = _props.className;
	
	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-small', size === 'small'), _classNames));
	    return _react2["default"].createElement(_rcSwitch2["default"], _extends({ className: cls }, this.props));
	  };
	
	  return Switch;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-switch'
	}, _temp);
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(483);

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(160);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var classNames = __webpack_require__(393);
	
	function noop() {}
	
	var Switch = function (_Component) {
	  _inherits(Switch, _Component);
	
	  function Switch(props) {
	    _classCallCheck(this, Switch);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    var checked = false;
	    if ('checked' in props) {
	      checked = !!props.checked;
	    } else {
	      checked = !!props.defaultChecked;
	    }
	    _this.state = { checked: checked };
	    return _this;
	  }
	
	  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: !!nextProps.checked
	      });
	    }
	  };
	
	  Switch.prototype.setChecked = function setChecked(checked) {
	    if (!('checked' in this.props)) {
	      this.setState({
	        checked: checked
	      });
	    }
	    this.props.onChange(checked);
	  };
	
	  Switch.prototype.toggle = function toggle() {
	    var checked = !this.state.checked;
	    this.setChecked(checked);
	  };
	
	  Switch.prototype.handleKeyDown = function handleKeyDown(e) {
	    if (e.keyCode === 37) {
	      this.setChecked(false);
	    }
	    if (e.keyCode === 39) {
	      this.setChecked(true);
	    }
	  };
	
	  // Handle auto focus when click switch in Chrome
	
	
	  Switch.prototype.handleMouseUp = function handleMouseUp(e) {
	    if (this.refs.node) {
	      this.refs.node.blur();
	    }
	    if (this.props.onMouseUp) {
	      this.props.onMouseUp(e);
	    }
	  };
	
	  Switch.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        className = _props.className,
	        prefixCls = _props.prefixCls,
	        disabled = _props.disabled,
	        checkedChildren = _props.checkedChildren,
	        unCheckedChildren = _props.unCheckedChildren,
	        restProps = _objectWithoutProperties(_props, ['className', 'prefixCls', 'disabled', 'checkedChildren', 'unCheckedChildren']);
	
	    var checked = this.state.checked;
	    var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
	    return _react2["default"].createElement(
	      'span',
	      _extends({}, restProps, {
	        className: switchClassName,
	        tabIndex: disabled ? -1 : 0,
	        ref: 'node',
	        onKeyDown: this.handleKeyDown.bind(this),
	        onClick: disabled ? noop : this.toggle.bind(this),
	        onMouseUp: this.handleMouseUp.bind(this)
	      }),
	      _react2["default"].createElement(
	        'span',
	        { className: prefixCls + '-inner' },
	        checked ? checkedChildren : unCheckedChildren
	      )
	    );
	  };
	
	  return Switch;
	}(_react.Component);
	
	Switch.propTypes = {
	  className: _propTypes2["default"].string,
	  prefixCls: _propTypes2["default"].string,
	  disabled: _propTypes2["default"].bool,
	  checkedChildren: _propTypes2["default"].any,
	  unCheckedChildren: _propTypes2["default"].any,
	  onChange: _propTypes2["default"].func,
	  onMouseUp: _propTypes2["default"].func,
	  checked: _propTypes2["default"].bool,
	  defaultChecked: _propTypes2["default"].bool
	};
	
	Switch.defaultProps = {
	  prefixCls: 'rc-switch',
	  checkedChildren: null,
	  unCheckedChildren: null,
	  className: '',
	  defaultChecked: false,
	  onChange: noop
	};
	
	exports["default"] = Switch;
	module.exports = exports['default'];

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(485);

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _addDomEventListener = __webpack_require__(273);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (_temp = _class = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {};
	
	        _this.isMove = false;
	        _this.original_X = 0;
	        _this.original_Y = 0;
	        _this.container_width = props.width;
	        _this.container_height = props.height;
	        _this.image_width = 0;
	        _this.image_height = 0;
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var wrapper = this.refs.wrapper;
	            this.mouseDown = (0, _addDomEventListener2["default"])(wrapper, 'mousedown', this.mouseDownHandler.bind(this));
	            this.mouseMove = (0, _addDomEventListener2["default"])(document, 'mousemove', this.mouseMoveHandler.bind(this));
	            this.mouseUp = (0, _addDomEventListener2["default"])(document, 'mouseup', this.mouseUpHandler.bind(this));
	            this.mouseWheel = (0, _addDomEventListener2["default"])(wrapper, 'mousewheel', this.mouseWheelHandler.bind(this));
	            this.click = (0, _addDomEventListener2["default"])(wrapper, 'click', this.clickHandler.bind(this));
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var props = this.props;
	            var src = nextProps.src,
	                width = nextProps.width,
	                height = nextProps.height,
	                action = nextProps.action;
	
	            if (src = props.src) {
	                if (width != props.width || height != props.height) {
	                    this.container_width = width;
	                    this.container_height = height;
	                    this.resizeImage();
	                } else if (action) {
	                    this[action.type]();
	                }
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.mouseDown.remove();
	            this.mouseMove.remove();
	            this.mouseUp.remove();
	            this.mouseWheel.remove();
	            this.click.remove();
	        }
	    }, {
	        key: 'onLoad',
	        value: function onLoad(_ref) {
	            var target = _ref.target;
	
	            var image_style = this.refs.image.style;
	            image_style.width = 'auto';
	            image_style.height = 'auto';
	            this.image_width = target.width;
	            this.image_height = target.height;
	            image_style.width = '100%';
	            image_style.height = '100%';
	            this.resizeImage();
	
	            this.props.onLoad({ width: this.image_width, height: this.image_height });
	        }
	    }, {
	        key: 'resizeImage',
	        value: function resizeImage() {
	            var container_width = this.container_width,
	                container_height = this.container_height,
	                image_width = this.image_width,
	                image_height = this.image_height;
	
	
	            var ratio = container_width / container_height;
	            var _ratio = image_width / image_height;
	            var width = container_width,
	                height = container_height,
	                left = 0,
	                top = 0;
	            if (_ratio > ratio) {
	                height = container_width / _ratio;
	                width = container_width;
	                top = (container_height - height) / 2;
	            } else {
	                width = container_height * _ratio;
	                height = container_height;
	                left = (container_width - width) / 2;
	            }
	            var zoom = parseInt(100 * width / image_width);
	
	            this.setState({
	                width: width,
	                height: height,
	                left: left,
	                top: top
	            });
	
	            this.props.onChange({ zoom: zoom });
	        }
	    }, {
	        key: 'getMouseOffset',
	        value: function getMouseOffset(e) {
	            var mouseX = e.pageX || e.clientX;
	            var mouseY = e.pageY || e.clientY;
	            var boundingClientRect = this.refs.wrapper.getBoundingClientRect();
	            var offsetX = mouseX - boundingClientRect.left - (window.pageXOffset || document.documentElement.scrollLeft);
	            var offsetY = mouseY - boundingClientRect.top - (window.pageYOffset || document.documentElement.scrollTop);
	            return { offsetX: offsetX, offsetY: offsetY };
	        }
	    }, {
	        key: 'clickHandler',
	        value: function clickHandler(e) {
	            var _getMouseOffset = this.getMouseOffset(e),
	                offsetX = _getMouseOffset.offsetX,
	                offsetY = _getMouseOffset.offsetY;
	
	            var state = this.state;
	            this.props.onClick({ x: offsetX / state.width, y: offsetY / state.height }, e);
	        }
	    }, {
	        key: 'mouseDownHandler',
	        value: function mouseDownHandler(e) {
	            this.isMove = true;
	            this.original_X = e.pageX || e.clientX;
	            this.original_Y = e.pageY || e.clientY;
	
	            var _getMouseOffset2 = this.getMouseOffset(e),
	                offsetX = _getMouseOffset2.offsetX,
	                offsetY = _getMouseOffset2.offsetY;
	
	            var state = this.state;
	            this.props.onMouseDown({ x: offsetX / state.width, y: offsetY / state.height }, e);
	        }
	    }, {
	        key: 'mouseMoveHandler',
	        value: function mouseMoveHandler(e) {
	            e.preventDefault();
	            if (this.props.disableDrag) return;
	
	            if (this.isMove) {
	                var x = e.pageX || e.clientX;
	                var y = e.pageY || e.clientY;
	                var stepX = x - this.original_X;
	                var stepY = y - this.original_Y;
	                if (Math.abs(stepX) < 10 && Math.abs(stepY) < 10) return;
	                this.original_X = x;
	                this.original_Y = y;
	                var _state = this.state,
	                    left = _state.left,
	                    top = _state.top;
	
	                this.setState({
	                    left: left + stepX,
	                    top: top + stepY
	                });
	            }
	        }
	    }, {
	        key: 'mouseUpHandler',
	        value: function mouseUpHandler(e) {
	            this.isMove = false;
	
	            var _getMouseOffset3 = this.getMouseOffset(e),
	                offsetX = _getMouseOffset3.offsetX,
	                offsetY = _getMouseOffset3.offsetY;
	
	            var state = this.state;
	            this.props.onMouseUp({ x: offsetX / state.width, y: offsetY / state.height }, e);
	        }
	    }, {
	        key: 'mouseWheelHandler',
	        value: function mouseWheelHandler(e) {
	            e.preventDefault();
	
	            var _getMouseOffset4 = this.getMouseOffset(e),
	                offsetX = _getMouseOffset4.offsetX,
	                offsetY = _getMouseOffset4.offsetY;
	
	            var step = event.wheelDelta / 1200;
	
	            return this.zoom(step, offsetX, offsetY);
	        }
	    }, {
	        key: 'zoom',
	        value: function zoom(step, offsetX, offsetY) {
	            if (this.props.disableZoom) return;
	
	            var _state2 = this.state,
	                width = _state2.width,
	                height = _state2.height,
	                left = _state2.left,
	                top = _state2.top;
	
	            var zoom = parseInt(100 * width * (step + 1) / this.image_width);
	            if (step < 0 && zoom < 10 || step > 0 && zoom > 500) return false;
	
	            this.setState({
	                width: width * (step + 1),
	                height: height * (step + 1),
	                left: left - offsetX * step,
	                top: top - offsetY * step
	            });
	            this.props.onChange({ zoom: zoom });
	
	            return false;
	        }
	    }, {
	        key: 'zoomOut',
	        value: function zoomOut() {
	            var _state3 = this.state,
	                width = _state3.width,
	                height = _state3.height;
	
	            this.zoom(-0.1, width / 2, height / 2);
	        }
	    }, {
	        key: 'zoomIn',
	        value: function zoomIn() {
	            var _state4 = this.state,
	                width = _state4.width,
	                height = _state4.height;
	
	            this.zoom(0.1, width / 2, height / 2);
	        }
	    }, {
	        key: 'suitableScale',
	        value: function suitableScale() {
	            this.resizeImage();
	        }
	    }, {
	        key: 'defaultScale',
	        value: function defaultScale() {
	            var container_width = this.container_width,
	                container_height = this.container_height,
	                image_width = this.image_width,
	                image_height = this.image_height;
	
	
	            this.setState({
	                width: image_width,
	                height: image_height,
	                left: (container_width - image_width) / 2,
	                top: (container_height - image_height) / 2
	            });
	
	            this.props.onChange({ zoom: 100 });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state5 = this.state,
	                width = _state5.width,
	                height = _state5.height,
	                left = _state5.left,
	                top = _state5.top;
	            var _props = this.props,
	                addon = _props.addon,
	                src = _props.src;
	
	            return _react2["default"].createElement(
	                'div',
	                { ref: 'wrapper', className: 'image-view', style: { position: 'absolute', zIndex: 1, width: width, height: height, left: left, top: top } },
	                _react2["default"].createElement('img', { src: src, onLoad: this.onLoad.bind(this), ref: 'image' }),
	                addon
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component), _class.defaultProps = {
	    onLoad: function onLoad() {},
	    onChange: function onChange() {},
	    onClick: function onClick() {},
	    onMouseDown: function onMouseDown() {},
	    onMouseUp: function onMouseUp() {}
	}, _temp);
	;
	
	exports["default"] = App;

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	__webpack_require__(877);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (_temp = _class = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            show: [],
	            hidden: []
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setShowHiddenList(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.total_width != this.props.total_width) {
	                this.setShowHiddenList(nextProps);
	            }
	
	            if (nextProps.list.length !== this.props.list.length) {
	                this.setShowHiddenList(nextProps);
	            }
	        }
	    }, {
	        key: 'setShowHiddenList',
	        value: function setShowHiddenList(_ref) {
	            var list = _ref.list,
	                total_width = _ref.total_width,
	                width = _ref.width;
	
	            var max = Math.floor(total_width / width);
	            var length = list.length;
	            if (max < length) {
	                max--; // 还要考虑more的位置
	            }
	            var show = [],
	                hidden = [];
	            list.forEach(function (item, index) {
	                if (index < max) {
	                    show.push(item);
	                } else {
	                    hidden.push(item);
	                }
	            });
	            this.setState({ show: show, hidden: hidden });
	        }
	    }, {
	        key: 'getDropdownStyle',
	        value: function getDropdownStyle() {
	            var placement = this.props.placement;
	            if (placement === 'bottom') {
	                return { top: '100%', left: 0 };
	            } else if (placement === 'top') {
	                return { top: 'auto', bottom: '100%', left: 0 };
	            }
	            return {};
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	            var width = props.width,
	                renderItem = props.renderItem,
	                renderHidden = props.renderHidden;
	
	            var hidden = state.hidden;
	            var hasHidden = hidden.length > 0;
	
	            return _react2["default"].createElement(
	                'ul',
	                { className: 'auto-hide', style: { width: props.total_width } },
	                state.show.map(function (item, index) {
	                    return _react2["default"].createElement(
	                        'li',
	                        { className: 'auto-hide-item', style: { width: width }, key: index },
	                        renderItem(item)
	                    );
	                }),
	                hasHidden && _react2["default"].createElement(
	                    'li',
	                    { className: 'auto-hide-item more', style: { width: width } },
	                    props.more,
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'ant-dropdown', style: this.getDropdownStyle() },
	                        _react2["default"].createElement(
	                            'ul',
	                            { className: 'ant-dropdown-menu' },
	                            hidden.map(function (item, index) {
	                                return _react2["default"].createElement(
	                                    'li',
	                                    { className: 'ant-dropdown-menu-item', style: { width: width }, key: index },
	                                    (renderHidden || renderItem)(item)
	                                );
	                            })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component), _class.defaultProps = {
	    total_width: 100,
	    width: 20,
	    placement: 'bottom',
	    more: _react2["default"].createElement(_icon2["default"], { type: 'more-horizontal' })
	}, _temp);
	exports["default"] = App;

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.urlParam = exports.goToApp = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _urlParse = __webpack_require__(268);
	
	var _urlParse2 = _interopRequireDefault(_urlParse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function goToApp(param) {
	    if (top === window) {
	        window.open(param.url);
	        return false;
	    }
	    // 门户新开页top.window.goToApp()
	    var _componentId = param.componentId || "" + CONTEXTPATH;
	    var _componentMenuId = param.componentMenuId || "";
	    var _url = param.url.substr(0, 4) === "http" ? param.url : location.protocol + "//" + location.hostname + ":" + location.port + "/" + CONTEXTPATH + "-web/index.do" + param.url;
	    var _param = param.param || "";
	    var _reload = param.reload || true;
	    var _callback = param.callback || {
	        func: '',
	        param: {}
	    };
	    var p = {
	        componentId: _componentId,
	        componentMenuId: _componentMenuId,
	        param: _param,
	        url: _url,
	        name: param.title,
	        callback: _callback,
	        reload: _reload
	    };
	    top.window.goToApp(p);
	}
	
	/**
	 * 设置url参数,接收一个对象为参数,type为get时返回query，只传param时type默认为set，type为cover覆盖原有param
	 */
	function urlParam() {
	    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set';
	
	    var url = (0, _urlParse2["default"])(location.hash.split('#')[1], true);
	    var query = url.query;
	    if (query['_k']) {
	        delete query['_k'];
	    }
	    if (typeof param == 'string') {
	        type = param;
	        param = {};
	    }
	    if (type == 'get') {
	        if (query && JSON.stringify(query) != "{}") {
	            return query;
	        } else {
	            return false;
	        }
	    } else {
	        var _queryObj = void 0;
	        if (type == 'set') {
	            _queryObj = _extends({}, query, param);
	        } else if (type == 'cover') {
	            _queryObj = _extends({}, param);
	        }
	        var keyArr = Object.keys(_queryObj);
	        if (keyArr.length > 0) {
	            keyArr.map(function (item, i) {
	                if (_queryObj[item] == "" || _queryObj[item] == "undefined" || _queryObj[item] == "null" || _queryObj[item] == undefined || _queryObj[item] == null || item == "_k") {
	                    delete _queryObj[item];
	                }
	            });
	            url.set("query", _queryObj);
	            var newHash = url.href.replace(url.origin, "#");
	            var newOrigin = window.location.href.replace(window.location.hash, '');
	            window.location.href = newOrigin + newHash;
	        }
	    }
	}
	
	exports.goToApp = goToApp;
	exports.urlParam = urlParam;

/***/ }),

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

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	__webpack_require__(398);
	
	var _base = __webpack_require__(1185);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var confirm = _modal2["default"].confirm;
	
	var initSocket = true;
	var socket;
	
	/**
	 * cameraIndexCode:'330108000002673509,330108000002673510'//多个用逗号隔开
	 * playerParam对象属性
	 * @nginxIp:'10.2.145.103',//部署平台IP
	 * @nginxPort:'80',//部署平台端口
	 * @playerToken:'',//sg,用于平台播放器,下载器可不传
	 * @pluginIpPort:'http://10.2.145.103:80'//插件下载IP端口
	 * playBackTime:30//不传默认30秒
	 */
	module.exports = {
	    playBack: function playBack(cameraIndexCode, createTimeLong, playerParam, playBackTime) {
	        var nginxIp = playerParam.nginxIp,
	            nginxPort = playerParam.nginxPort,
	            playerToken = playerParam.playerToken;
	
	        var preOldTime = parseInt((createTimeLong - (playBackTime ? playBackTime : 30) * 1000) / 1000); //默认前30秒
	        var afterOldTime = parseInt((createTimeLong + (playBackTime ? playBackTime : 30) * 1000) / 1000); //默认后30秒
	        var protocol = document.location.protocol.indexOf("https") > -1 ? 'https' : 'http';
	        var cameraNum = cameraIndexCode.split(",").length;
	        var wndCount = 1;
	        if (cameraNum <= 1) {
	            wndCount = 1;
	        } else if (1 < cameraNum <= 4) {
	            wndCount = 4;
	        } else {
	            wndCount = 9;
	        }
	        var camList = '';
	        if (cameraNum == 1) {
	            camList = cameraIndexCode + "_" + preOldTime + "_" + afterOldTime;
	        } else {
	            var camListArray = [];
	            var cameraArray = cameraIndexCode.split(",");
	            for (var i = 0; i < cameraNum; i++) {
	                camListArray.push(cameraArray[i] + "_" + preOldTime + "_" + afterOldTime);
	            }
	            camList = camListArray.join(',');
	        }
	        var url = "btoolsprotocol://CenterUrl:" + protocol + "://" + nginxIp + ":" + nginxPort + "/portal;Toollist:PROT_btoolpplayerprotocol;CmdLine:btoolpplayerprotocol://ReqType:PlayBack;VersionTag:UNIV1.0;language:zh_US;clear:2;WndCount:" + wndCount + ";NginxIp:" + nginxIp + ";NginxPort:" + nginxPort + ";sg:" + playerToken + ";CamList:" + camList + ";protocol:" + protocol + ";appType:vas;archiveCode:;gridtrack:1;" + (wndCount == 1 ? "MiniUI:1;" : "");
	        checkingIeChromeBtool(url, playerParam);
	    },
	    downLoad: function downLoad(exportUrl, conditions, playerParam) {
	        var nginxIp = playerParam.nginxIp,
	            nginxPort = playerParam.nginxPort;
	
	        var protocol = document.location.protocol.indexOf("https") > -1 ? 'https' : 'http';
	        var conditionString = _base2["default"].encode(JSON.stringify(conditions));
	        var url = "btoolsprotocol://CenterUrl:" + protocol + "://" + nginxIp + ":" + nginxPort + "/portal;Toollist:PROT_btooldownloadprotocol;CmdLine:btooldownloadprotocol://postUrl:" + exportUrl + ";postFields:" + conditionString + ";";
	        checkingIeChromeBtool(url, playerParam);
	    }
	};
	
	function checkingIeChromeBtool(url, playerParam) {
	    if (/msie/.test(navigator.userAgent.toLowerCase())) {
	        //IE
	        checkTool('btoolsprotocol', function (isInstall) {
	            if (isInstall) {
	                var ocx = document.getElementById("HikToolCheckOCX");
	                try {
	                    // 启动播放器
	                    ocx.StartupToolByCmd('btoolsprotocol', url);
	                } catch (e) {
	                    openBtoolPluginDailog(playerParam);
	                }
	            } else {
	                openBtoolPluginDailog(playerParam);
	            }
	        });
	    } else {
	        //chrome
	        var clientCheck = '{"comment":{"commenttype":"checkapp", "context":"btoolsprotocol:"}}';
	        webSocketConnect(clientCheck, url, playerParam, function (data) {
	            if (data.indexOf("btoolsprotocol") > -1) {
	                if (checkAppExist(data) == 1) {
	                    var startCommand = '{"comment":{"commenttype":"startapp", "context":"btoolsprotocol:", "commentcmd":"' + url + '"}}';
	                    socket.send(startCommand);
	                } else {
	                    openBtoolPluginDailog(playerParam);
	                }
	            }
	        });
	    }
	}
	//chrome检测工具包括后续工具通信 选择文件
	function webSocketConnect(checkMsg, hikUrl, playerParam, callback) {
	    //   let host = "wss://" + playerParam.nginxIp +":"+ playerParam.nginxPort + "/WebS_Js";
	    var host = "wss://127.0.0.1:18001/WebS_Js";
	    try {
	        if (!socket) {
	            socket = new WebSocket(host);
	        } else {
	            socket.send(checkMsg);
	        }
	        socket.onopen = function () {
	            socket.send(checkMsg);
	        };
	        socket.onmessage = function (msg) {
	            var data = msg.data;
	            if (data == '') {
	                return;
	            }
	            callback && callback(data);
	        };
	        socket.onclose = function () {
	            socket = null;
	            if (initSocket) {
	                openBtoolPluginDailog(playerParam);
	            } else {
	                //window.location.href = hikUrl;
	            }
	        };
	    } catch (e) {
	        alert(e);
	    }
	}
	//chrome通过返回Json报文检测是否按照工具
	function checkAppExist(data) {
	    initSocket = false;
	    var resultCode = 0;
	    var resultJson = eval("(" + data + ")");
	    if (resultJson) {
	        resultCode = resultJson.comment.resultCode;
	        return resultCode;
	    } else {
	        return resultCode;
	    }
	}
	//打开未安装平台播放器弹窗
	function openBtoolPluginDailog(playerParam) {
	    confirm({
	        title: '是否安装控件',
	        content: '检测到您未安装相关控件,是否立即安装',
	        onOk: function onOk() {
	            window.open(playerParam.pluginIpPort + "/portal/out/getPackageById.do?id=btools");
	        },
	        onCancel: function onCancel() {}
	    });
	}
	
	function checkTool(id, callBack) {
	    //通过这个控件来测试播放器是否安装
	    var ocx = document.getElementById('HikToolCheckOCX');
	    var bstrResult = 0;
	    try {
	        //如果控件安装了，结果为1
	        bstrResult = ocx.CheckToolStatus(id);
	        var ret = ocx.StartupAppAccpetor(); //开启应用事件监听，开启后才可以收到来自外部应用的消息！！！
	    } catch (e) {
	        bstrResult = 0;
	    }
	    bstrResult = bstrResult == 1 ? true : false;
	    callBack(bstrResult);
	}

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
	;(function(root) {
	
		// Detect free variables `exports`.
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`.
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code, and use
		// it as `root`.
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var InvalidCharacterError = function(message) {
			this.message = message;
		};
		InvalidCharacterError.prototype = new Error;
		InvalidCharacterError.prototype.name = 'InvalidCharacterError';
	
		var error = function(message) {
			// Note: the error messages used throughout this file match those used by
			// the native `atob`/`btoa` implementation in Chromium.
			throw new InvalidCharacterError(message);
		};
	
		var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		// http://whatwg.org/html/common-microsyntaxes.html#space-character
		var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;
	
		// `decode` is designed to be fully compatible with `atob` as described in the
		// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
		// The optimized base64-decoding algorithm used is based on @atk’s excellent
		// implementation. https://gist.github.com/atk/1020396
		var decode = function(input) {
			input = String(input)
				.replace(REGEX_SPACE_CHARACTERS, '');
			var length = input.length;
			if (length % 4 == 0) {
				input = input.replace(/==?$/, '');
				length = input.length;
			}
			if (
				length % 4 == 1 ||
				// http://whatwg.org/C#alphanumeric-ascii-characters
				/[^+a-zA-Z0-9/]/.test(input)
			) {
				error(
					'Invalid character: the string to be decoded is not correctly encoded.'
				);
			}
			var bitCounter = 0;
			var bitStorage;
			var buffer;
			var output = '';
			var position = -1;
			while (++position < length) {
				buffer = TABLE.indexOf(input.charAt(position));
				bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
				// Unless this is the first of a group of 4 characters…
				if (bitCounter++ % 4) {
					// …convert the first 8 bits to a single ASCII character.
					output += String.fromCharCode(
						0xFF & bitStorage >> (-2 * bitCounter & 6)
					);
				}
			}
			return output;
		};
	
		// `encode` is designed to be fully compatible with `btoa` as described in the
		// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
		var encode = function(input) {
			input = String(input);
			if (/[^\0-\xFF]/.test(input)) {
				// Note: no need to special-case astral symbols here, as surrogates are
				// matched, and the input is supposed to only contain ASCII anyway.
				error(
					'The string to be encoded contains characters outside of the ' +
					'Latin1 range.'
				);
			}
			var padding = input.length % 3;
			var output = '';
			var position = -1;
			var a;
			var b;
			var c;
			var d;
			var buffer;
			// Make sure any padding is handled outside of the loop.
			var length = input.length - padding;
	
			while (++position < length) {
				// Read three bytes, i.e. 24 bits.
				a = input.charCodeAt(position) << 16;
				b = input.charCodeAt(++position) << 8;
				c = input.charCodeAt(++position);
				buffer = a + b + c;
				// Turn the 24 bits into four chunks of 6 bits each, and append the
				// matching character for each of them to the output.
				output += (
					TABLE.charAt(buffer >> 18 & 0x3F) +
					TABLE.charAt(buffer >> 12 & 0x3F) +
					TABLE.charAt(buffer >> 6 & 0x3F) +
					TABLE.charAt(buffer & 0x3F)
				);
			}
	
			if (padding == 2) {
				a = input.charCodeAt(position) << 8;
				b = input.charCodeAt(++position);
				buffer = a + b;
				output += (
					TABLE.charAt(buffer >> 10) +
					TABLE.charAt((buffer >> 4) & 0x3F) +
					TABLE.charAt((buffer << 2) & 0x3F) +
					'='
				);
			} else if (padding == 1) {
				buffer = input.charCodeAt(position);
				output += (
					TABLE.charAt(buffer >> 2) +
					TABLE.charAt((buffer << 4) & 0x3F) +
					'=='
				);
			}
	
			return output;
		};
	
		var base64 = {
			'encode': encode,
			'decode': decode,
			'version': '0.1.0'
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return base64;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = base64;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (var key in base64) {
					base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.base64 = base64;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(190)(module), (function() { return this; }())))

/***/ }),

/***/ 1262:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./bodySearch": 1263,
		"./bodySearch.js": 1263,
		"./personSearch": 1278,
		"./personSearch.js": 1278,
		"./searchRecord": 1279,
		"./searchRecord.js": 1279
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1262;


/***/ }),

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _abstract_class_picture = __webpack_require__(1264);
	
	var _abstract_class_picture2 = _interopRequireDefault(_abstract_class_picture);
	
	var _viewData = __webpack_require__(1266);
	
	var _viewData2 = _interopRequireDefault(_viewData);
	
	var _imageView = __webpack_require__(828);
	
	var _imageView2 = _interopRequireDefault(_imageView);
	
	var _listSlide = __webpack_require__(1275);
	
	var _listSlide2 = _interopRequireDefault(_listSlide);
	
	var _tool = __webpack_require__(896);
	
	__webpack_require__(1277);
	
	var _btools = __webpack_require__(1184);
	
	var _btools2 = _interopRequireDefault(_btools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ip = document.location.hostname;
	var protocol = document.location.protocol;
	var port = document.location.port;
	
	// 注意这里继承的不是React.Component
	
	var App = function (_AbstractClass) {
	    _inherits(App, _AbstractClass);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.button_list = [{ type: 'lidaicon-resize-ataption', text: '合适尺寸', onClick: _this.suitableScale.bind(_this) }, { type: 'lidaicon-h-download', text: '下载', onClick: _this.downloadPic.bind(_this) }, { type: 'lidaicon-video-playback', text: '视频回放', onClick: _this.videoPlayBack.bind(_this) }, { type: 'lidaicon-body-search', text: '以人搜人', onClick: _this.bodySearchHander.bind(_this) }, { type: 'lidaicon-face-id-search', text: '以脸搜证', onClick: _this.faceIdSearchHander.bind(_this) }, { type: 'lidaicon-face-search', text: '以脸搜脸', onClick: _this.faceSearchFaceHandler.bind(_this) }, { type: 'lidaicon-archive-upload', text: '上传档案', onClick: _this.uploadClue.bind(_this) }];
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var _query = this.query,
	                linkFaceBodyId = _query.linkFaceBodyId,
	                jobId = _query.jobId;
	
	            if (linkFaceBodyId) {
	                _http2["default"].get('/search/getDataByLinkFaceBodyId.do?linkFaceBodyId=' + linkFaceBodyId).then(function (_ref) {
	                    var data = _ref.data;
	
	                    _this2.setState({
	                        list: data.list || []
	                    });
	                })["catch"](function (e) {
	                    return _http2["default"].showError(e);
	                });
	            }
	
	            if (jobId) {
	                _http2["default"].storage.getData(jobId).then(function (response) {
	                    _this2.setState({
	                        list: response.data.list || [],
	                        uploadImgUrl: response.data.uploadImgUrl
	                    });
	                })["catch"](function (e) {
	                    return _http2["default"].showError(e);
	                });
	            }
	        }
	
	        //下载
	
	    }, {
	        key: 'downloadPic',
	        value: function downloadPic() {
	            var props = this.props,
	                state = this.state;
	
	            var imageUrl = state.list[state.current].target_pic_url;
	            /*http.get('/export/downloadImag.do?imageUrl='+imageUrl,{}).then(response => {
	                
	            }).catch(e => {});*/
	            window.open(protocol + "//" + ip + ":" + port + "/ibody-web/web/export/downloadImag.do?imageUrl=" + imageUrl);
	        }
	    }, {
	        key: 'bodySearchHander',
	        value: function bodySearchHander() {
	            //以人搜人
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = protocol + "//" + ip + ":" + port + "/ibody-web/index.do#personSearch?imageUrl=" + item.target_pic_url;
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以人搜人"
	            });
	        }
	    }, {
	        key: 'faceSearchFaceHandler',
	        value: function faceSearchFaceHandler() {
	            //以脸搜脸
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = void 0;
	            if (item.linkFaceBodyId) {
	                url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#snapshot?linkFaceBodyId=" + item.linkFaceBodyId;
	            } else {
	                url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#snapshot?faceUrl=" + item.target_pic_url;
	            }
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以脸搜脸"
	            });
	        }
	    }, {
	        key: 'faceIdSearchHander',
	        value: function faceIdSearchHander() {
	            //以脸搜证
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#faceCard?faceUrl=" + item.target_pic_url;
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以脸搜证"
	            });
	        }
	        //上传档案
	
	    }, {
	        key: 'uploadClue',
	        value: function uploadClue() {
	            var props = this.props,
	                state = this.state;
	
	            var icasedocUrl = props.user.interfaceInfo.icasedocUrl;
	            var item = state.list[state.current];
	            var clueInfos = void 0;
	            if (item) {
	                clueInfos = {
	                    "clueInfos": [{
	                        "clueImgName": item.picName,
	                        "src": "ibody",
	                        "clueImgUrl": item.target_pic_url,
	                        "longitude": item.longitude,
	                        "latitude": item.latitude
	                    }]
	                };
	            }
	            this.setState({
	                icasedocUrl: icasedocUrl,
	                clueInfos: clueInfos,
	                show_uploadclue: true
	            });
	        }
	        //视频回放
	
	    }, {
	        key: 'videoPlayBack',
	        value: function videoPlayBack() {
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var cameraIndexCode = item.cameraIndexCode;
	            var createTimeLong = item.createTimeLong;
	            var playerParam = this.props.user.interfaceInfo.playerParam;
	            _btools2["default"].playBack(cameraIndexCode, createTimeLong, playerParam);
	        }
	    }, {
	        key: 'renderViewData',
	        value: function renderViewData() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(_viewData2["default"], { type: 'bodySearch', height: props.browser.avail_height, list: state.list, current: state.current });
	        }
	    }, {
	        key: 'renderPreview',
	        value: function renderPreview() {
	            var state = this.state;
	            var currentItem = state.list[state.current];
	            var rect = currentItem.rect;
	            var rectElement = null;
	            if (rect) {
	                var width = rect.width,
	                    height = rect.height,
	                    x = rect.x,
	                    y = rect.y;
	
	                if (width != 0 && height != 0) {
	                    var rectStyle = {
	                        width: width * 100 + '%',
	                        height: height * 100 + '%',
	                        left: x * 100 + '%',
	                        top: y * 100 + '%'
	                    };
	                    rectElement = _react2["default"].createElement('div', { className: 'viewer-main-preview-rect', style: rectStyle });
	                }
	            }
	            return _react2["default"].createElement(_imageView2["default"], { src: currentItem.target_pic_url,
	                addon: rectElement,
	                width: this.preview_width,
	                height: this.preview_height,
	                action: state.action,
	                onChange: this.onPreviewChange.bind(this) });
	        }
	    }, {
	        key: 'renderSlide',
	        value: function renderSlide() {
	            var state = this.state;
	            return _react2["default"].createElement(_listSlide2["default"], {
	                total_width: this.preview_width - 16 // viewer-main-slide padding 8x2
	                , current: state.current,
	                list: state.list,
	                width: 80,
	                renderItem: function renderItem(item) {
	                    return _react2["default"].createElement('img', { className: 'list-slide-custom-image', src: item.target_sub_url });
	                },
	                onChange: this.onSlideChange.bind(this) });
	        }
	    }]);
	
	    return App;
	}(_abstract_class_picture2["default"]);
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, user: state.user };
	})(App);

/***/ }),

/***/ 1264:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(401);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _urlParse = __webpack_require__(268);
	
	var _urlParse2 = _interopRequireDefault(_urlParse);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _autoHide = __webpack_require__(876);
	
	var _autoHide2 = _interopRequireDefault(_autoHide);
	
	var _layout = __webpack_require__(480);
	
	var _casedoc = __webpack_require__(911);
	
	__webpack_require__(1265);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AbstractClass = function (_React$Component) {
	    _inherits(AbstractClass, _React$Component);
	
	    function AbstractClass(props) {
	        _classCallCheck(this, AbstractClass);
	
	        var _this = _possibleConstructorReturn(this, (AbstractClass.__proto__ || Object.getPrototypeOf(AbstractClass)).call(this, props));
	
	        var query = (0, _urlParse2["default"])(location.hash.split('#')[1], true).query;
	        _this.query = query;
	        _this.state = {
	            action: null,
	            list: [],
	            uploadImgUrl: [],
	            current: Number(query.index) || 0,
	            show_slide: true,
	            clueInfos: null,
	            show_uploadclue: false
	        };
	        if (props.user && props.user.interfaceInfo && props.user.interfaceInfo.icasedocUrl) {
	            //上传档案相关属性
	            _this.state.icasedocUrl = props.user.interfaceInfo.icasedocUrl;
	        }
	        _this.getPreviewScale(props.browser, true);
	        return _this;
	    }
	
	    // 两个固定按钮，这两个按钮是不会被隐藏的
	
	
	    _createClass(AbstractClass, [{
	        key: 'renderButton1',
	        value: function renderButton1() {
	            return _react2["default"].createElement(
	                _button2["default"],
	                { type: 'transparent', onClick: this.toggleSlide.bind(this) },
	                _react2["default"].createElement(
	                    'span',
	                    null,
	                    '\u56FE\u7247\u5217\u8868'
	                ),
	                _react2["default"].createElement(_icon2["default"], { type: this.state.show_slide ? 'lidaicon-h-angle-sm-down' : 'lidaicon-h-angle-sm-up' })
	            );
	        }
	    }, {
	        key: 'renderButton2',
	        value: function renderButton2() {
	            return _react2["default"].createElement(
	                'div',
	                { style: { height: 32, padding: 4 } },
	                _react2["default"].createElement(
	                    _button2["default"],
	                    { type: 'transparent', size: 'small', onClick: this.zoomIn.bind(this) },
	                    _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-add', style: { fontSize: 12 } })
	                ),
	                _react2["default"].createElement(
	                    'span',
	                    { style: { padding: '0 8px' } },
	                    this.state.zoom,
	                    '%'
	                ),
	                _react2["default"].createElement(
	                    _button2["default"],
	                    { type: 'transparent', size: 'small', onClick: this.zoomOut.bind(this) },
	                    _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-minus', style: { fontSize: 12 } })
	                )
	            );
	        }
	    }, {
	        key: 'renderAutoButton',
	        value: function renderAutoButton(item) {
	            return _react2["default"].createElement(
	                _button2["default"],
	                { type: 'transparent', onClick: item.onClick },
	                _react2["default"].createElement(
	                    'span',
	                    null,
	                    item.text
	                ),
	                _react2["default"].createElement(_icon2["default"], { type: item.type })
	            );
	        }
	    }, {
	        key: 'renderHiddenButton',
	        value: function renderHiddenButton(item) {
	            // 隐藏的按钮图标在前面，别问我为什么，UI这样设计的
	            return _react2["default"].createElement(
	                _button2["default"],
	                { type: 'transparent', onClick: item.onClick },
	                _react2["default"].createElement(_icon2["default"], { type: item.type }),
	                _react2["default"].createElement(
	                    'span',
	                    null,
	                    item.text
	                )
	            );
	        }
	    }, {
	        key: 'renderToolbar',
	        value: function renderToolbar() {
	            return _react2["default"].createElement(
	                'ul',
	                { className: 'viewer-main-toolbar-inner' },
	                _react2["default"].createElement(
	                    'li',
	                    { style: { border: 0 } },
	                    this.renderButton1()
	                ),
	                _react2["default"].createElement(
	                    'li',
	                    null,
	                    this.renderButton2()
	                ),
	                _react2["default"].createElement(
	                    'li',
	                    { style: { border: 0 } },
	                    _react2["default"].createElement(_autoHide2["default"], {
	                        total_width: this.preview_width - 360,
	                        width: 128,
	                        placement: 'top',
	                        list: this.button_list,
	                        renderItem: this.renderAutoButton.bind(this),
	                        renderHidden: this.renderHiddenButton.bind(this),
	                        more: _react2["default"].createElement(
	                            _button2["default"],
	                            { type: 'transparent' },
	                            _react2["default"].createElement(
	                                'span',
	                                null,
	                                '\u66F4\u591A'
	                            ),
	                            _react2["default"].createElement(_icon2["default"], { type: 'more-horizontal' })
	                        )
	                    })
	                )
	            );
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
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var jobId = this.query.jobId;
	
	            if (jobId) {
	                _http2["default"].storage.getData(jobId).then(function (response) {
	                    _this2.setState({
	                        list: response.data.list || [],
	                        uploadImgUrl: response.data.uploadImgUrl
	                    });
	                })["catch"](function (e) {
	                    return _http2["default"].showError(e);
	                });
	            }
	        }
	    }, {
	        key: 'getPreviewScale',
	        value: function getPreviewScale(browser, show_slide) {
	            this.preview_width = browser.width - 456; // layout-center margin: 8x2 viewer-sider : 440
	            this.preview_height = browser.avail_height - 200; // layout-center margin: 8x2 viewer-main-title: 40 viewer-main-bottom : 144
	            if (!show_slide) {
	                this.preview_height += 104; // viewer-main-slide 104
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _browser = this.props.browser;
	            var browser = nextProps.browser;
	            if (browser.width !== _browser.width || browser.avail_height !== _browser.avail_height) {
	                this.getPreviewScale(browser, this.state.show_slide);
	            }
	        }
	    }, {
	        key: 'zoomOut',
	        value: function zoomOut() {
	            this.setState({
	                action: { type: 'zoomOut' }
	            });
	        }
	    }, {
	        key: 'zoomIn',
	        value: function zoomIn() {
	            this.setState({
	                action: { type: 'zoomIn' }
	            });
	        }
	    }, {
	        key: 'suitableScale',
	        value: function suitableScale() {
	            this.setState({
	                action: { type: 'suitableScale' }
	            });
	        }
	    }, {
	        key: 'onPreviewChange',
	        value: function onPreviewChange(data) {
	            this.setState({
	                action: null,
	                zoom: data.zoom
	            });
	        }
	    }, {
	        key: 'toggleSlide',
	        value: function toggleSlide() {
	            var show_slide = this.state.show_slide;
	            this.getPreviewScale(this.props.browser, !show_slide);
	            this.setState({
	                show_slide: !show_slide
	            });
	        }
	    }, {
	        key: 'onSlideChange',
	        value: function onSlideChange(current) {
	            this.setState({ current: current });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                list = _state.list,
	                current = _state.current,
	                show_slide = _state.show_slide,
	                icasedocUrl = _state.icasedocUrl,
	                clueInfos = _state.clueInfos,
	                show_uploadclue = _state.show_uploadclue;
	
	
	            var length = list.length;
	
	            if (length === 0) return null;
	
	            if (current < 0) current = 0;else if (current > length) current = length - 1;
	
	            return _react2["default"].createElement(
	                _layout.ContentLayoutCenter,
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'viewer-sider' },
	                    this.renderViewData()
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'viewer-main' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'viewer-main-title' },
	                        '\u8BE6\u60C5\u56FE\u7247'
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'viewer-main-preview', style: { height: this.preview_height } },
	                        this.renderPreview()
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'viewer-main-toolbar' },
	                        this.renderToolbar()
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'viewer-main-slide' + (show_slide ? '' : ' collapse') },
	                        this.renderSlide()
	                    )
	                ),
	                icasedocUrl && clueInfos && show_uploadclue && _react2["default"].createElement(_casedoc.UploadClue, { url: icasedocUrl, data: clueInfos, visible: show_uploadclue, closeCallback: this.uploadClueCloseCallback.bind(this) })
	            );
	        }
	    }]);
	
	    return AbstractClass;
	}(_react2["default"].Component);
	
	exports["default"] = AbstractClass;

/***/ }),

/***/ 1265:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1266:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _loader = __webpack_require__(410);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.Template = (0, _loader2["default"])(function (a) {
	            return __webpack_require__.e/* require */(35, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(1267)("./" + props.type)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        });
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: "render",
	        value: function render() {
	            var props = this.props;
	
	            return _react2["default"].createElement(this.Template, {
	                height: props.height,
	                current: props.current,
	                list: props.list,
	                uploadImgUrl: props.uploadImgUrl,
	                submitConfirm: props.submitConfirm
	            });
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = App;

/***/ }),

/***/ 1275:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	__webpack_require__(1276);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (_temp = _class = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            current: props.current
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(_ref) {
	            var current = _ref.current;
	
	            if (current !== this.props.current) {
	                this.setState({ current: current });
	            }
	        }
	    }, {
	        key: 'prev',
	        value: function prev() {
	            this.redirect(this.state.current - 1);
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            this.redirect(this.state.current + 1);
	        }
	    }, {
	        key: 'redirect',
	        value: function redirect(current) {
	            var props = this.props;
	            if (current < 0 || current >= props.list.length) return;
	            this.setState({ current: current });
	            props.onChange(current);
	        }
	    }, {
	        key: 'getStyle',
	        value: function getStyle() {
	            var props = this.props;
	            var total_width = props.total_width - 48; // icon 20x2 padding 4x2
	            var length = props.list.length;
	            var li_width = props.width;
	            var ul_width = length * li_width;
	            var size = parseInt(total_width / li_width);
	            if (length < size) {
	                return { width: ul_width, left: 0 };
	            }
	            var half = size / 2;
	            var current = this.state.current;
	            var left = 0;
	            if (current < half) {
	                left = 0;
	            } else if (current > length - 1 - half) {
	                left = total_width - ul_width;
	            } else {
	                left = (half - current) * li_width;
	            }
	            return { width: ul_width, left: left };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var state = this.state,
	                props = this.props;
	
	            var list = props.list;
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'list-slide', style: { width: props.total_width } },
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'list-slide-prev', onClick: this.prev.bind(this) },
	                    _react2["default"].createElement(_icon2["default"], { type: 'angle-left' })
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'list-slide-next', onClick: this.next.bind(this) },
	                    _react2["default"].createElement(_icon2["default"], { type: 'angle-right' })
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'list-slide-center' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'list-slide-list', style: this.getStyle() },
	                        list.map(function (item, index) {
	                            return _react2["default"].createElement(
	                                'li',
	                                {
	                                    key: index,
	                                    onClick: function onClick(e) {
	                                        return _this2.redirect(index);
	                                    },
	                                    style: { width: props.width },
	                                    className: 'list-slide-item' + (index === state.current ? ' current' : '') },
	                                props.renderItem(item)
	                            );
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component), _class.defaultProps = {
	    current: 0,
	    width: 80,
	    total_width: 1024
	}, _temp);
	exports["default"] = App;

/***/ }),

/***/ 1276:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1277:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1278:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _abstract_class_picture = __webpack_require__(1264);
	
	var _abstract_class_picture2 = _interopRequireDefault(_abstract_class_picture);
	
	var _viewData = __webpack_require__(1266);
	
	var _viewData2 = _interopRequireDefault(_viewData);
	
	var _imageView = __webpack_require__(828);
	
	var _imageView2 = _interopRequireDefault(_imageView);
	
	var _listSlide = __webpack_require__(1275);
	
	var _listSlide2 = _interopRequireDefault(_listSlide);
	
	var _tool = __webpack_require__(896);
	
	__webpack_require__(1277);
	
	var _btools = __webpack_require__(1184);
	
	var _btools2 = _interopRequireDefault(_btools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ip = document.location.hostname;
	var protocol = document.location.protocol;
	var port = document.location.port;
	
	// 注意这里继承的不是React.Component
	
	var App = function (_AbstractClass) {
	    _inherits(App, _AbstractClass);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.button_list = [{ type: 'lidaicon-resize-ataption', text: '合适尺寸', onClick: _this.suitableScale.bind(_this) }, { type: 'lidaicon-h-download', text: '下载', onClick: _this.downloadPic.bind(_this) }, { type: 'lidaicon-video-playback', text: '视频回放', onClick: _this.videoPlayBack.bind(_this) }, { type: 'lidaicon-face-id-search', text: '以脸搜证', onClick: _this.faceIdSearchHander.bind(_this) }, { type: 'lidaicon-face-search', text: '以脸搜脸', onClick: _this.faceSearchFaceHandler.bind(_this) }, { type: 'lidaicon-archive-upload', text: '上传档案', onClick: _this.uploadClue.bind(_this) }];
	        return _this;
	    }
	    //下载
	
	
	    _createClass(App, [{
	        key: 'downloadPic',
	        value: function downloadPic() {
	            var props = this.props,
	                state = this.state;
	
	            var imageUrl = state.list[state.current].target_pic_url;
	            window.open(protocol + "//" + ip + ":" + port + "/ibody-web/web/export/downloadImag.do?imageUrl=" + imageUrl);
	        }
	    }, {
	        key: 'faceSearchFaceHandler',
	        value: function faceSearchFaceHandler() {
	            //以脸搜脸
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = void 0;
	            if (item.linkFaceBodyId) {
	                url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#snapshot?linkFaceBodyId=" + item.linkFaceBodyId;
	            } else {
	                url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#snapshot?faceUrl=" + item.target_pic_url;
	            }
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以脸搜脸"
	            });
	        }
	    }, {
	        key: 'faceIdSearchHander',
	        value: function faceIdSearchHander() {
	            //以脸搜证
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#faceCard?faceUrl=" + item.target_pic_url;
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以脸搜证"
	            });
	        }
	        //上传档案
	
	    }, {
	        key: 'uploadClue',
	        value: function uploadClue() {
	            var props = this.props,
	                state = this.state;
	
	            var icasedocUrl = props.user.interfaceInfo.icasedocUrl;
	            var item = state.list[state.current];
	            var clueInfos = void 0;
	            if (item) {
	                clueInfos = {
	                    "clueInfos": [{
	                        "clueImgName": item.picName,
	                        "src": "ibody",
	                        "clueImgUrl": item.target_pic_url,
	                        "longitude": item.longitude,
	                        "latitude": item.latitude
	                    }]
	                };
	            }
	            this.setState({
	                icasedocUrl: icasedocUrl,
	                clueInfos: clueInfos,
	                show_uploadclue: true
	            });
	        }
	        //视频回放
	
	    }, {
	        key: 'videoPlayBack',
	        value: function videoPlayBack() {
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var cameraIndexCode = item.cameraIndexCode;
	            var createTimeLong = item.createTimeLong;
	            var playerParam = this.props.user.interfaceInfo.playerParam;
	            _btools2["default"].playBack(cameraIndexCode, createTimeLong, playerParam);
	        }
	    }, {
	        key: 'renderViewData',
	        value: function renderViewData() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(_viewData2["default"], {
	                type: 'personSearch',
	                height: props.browser.avail_height,
	                list: state.list,
	                current: state.current,
	                uploadImgUrl: state.uploadImgUrl
	            });
	        }
	    }, {
	        key: 'renderPreview',
	        value: function renderPreview() {
	            var state = this.state;
	            var currentItem = state.list[state.current];
	            var rect = currentItem.rect;
	            var rectElement = null;
	            if (rect) {
	                var width = rect.width,
	                    height = rect.height,
	                    x = rect.x,
	                    y = rect.y;
	
	                if (width != 0 && height != 0) {
	                    var rectStyle = {
	                        width: width * 100 + '%',
	                        height: height * 100 + '%',
	                        left: x * 100 + '%',
	                        top: y * 100 + '%'
	                    };
	                    rectElement = _react2["default"].createElement('div', { className: 'viewer-main-preview-rect', style: rectStyle });
	                }
	            }
	            return _react2["default"].createElement(_imageView2["default"], { src: currentItem.target_pic_url,
	                addon: rectElement,
	                width: this.preview_width,
	                height: this.preview_height,
	                action: state.action,
	                onChange: this.onPreviewChange.bind(this) });
	        }
	    }, {
	        key: 'renderSlide',
	        value: function renderSlide() {
	            var state = this.state;
	            return _react2["default"].createElement(_listSlide2["default"], {
	                total_width: this.preview_width - 16 // viewer-main-slide padding 8x2
	                , current: state.current,
	                list: state.list,
	                width: 80,
	                renderItem: function renderItem(item) {
	                    return _react2["default"].createElement('img', { className: 'list-slide-custom-image', src: item.target_sub_url });
	                },
	                onChange: this.onSlideChange.bind(this) });
	        }
	    }]);
	
	    return App;
	}(_abstract_class_picture2["default"]);
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, user: state.user };
	})(App);

/***/ }),

/***/ 1279:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _abstract_class_picture = __webpack_require__(1264);
	
	var _abstract_class_picture2 = _interopRequireDefault(_abstract_class_picture);
	
	var _viewData = __webpack_require__(1266);
	
	var _viewData2 = _interopRequireDefault(_viewData);
	
	var _imageView = __webpack_require__(828);
	
	var _imageView2 = _interopRequireDefault(_imageView);
	
	var _listSlide = __webpack_require__(1275);
	
	var _listSlide2 = _interopRequireDefault(_listSlide);
	
	var _tool = __webpack_require__(896);
	
	__webpack_require__(1277);
	
	var _btools = __webpack_require__(1184);
	
	var _btools2 = _interopRequireDefault(_btools);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ip = document.location.hostname;
	var protocol = document.location.protocol;
	var port = document.location.port;
	
	// 注意这里继承的不是React.Component
	
	var App = function (_AbstractClass) {
	    _inherits(App, _AbstractClass);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.button_list = [{ type: 'lidaicon-resize-ataption', text: '合适尺寸', onClick: _this.suitableScale.bind(_this) }];
	        return _this;
	    }
	    //下载
	
	
	    _createClass(App, [{
	        key: 'downloadPic',
	        value: function downloadPic() {
	            var props = this.props,
	                state = this.state;
	
	            var imageUrl = state.list[state.current].target_pic_url;
	            /*http.get('/export/downloadImag.do?imageUrl='+imageUrl,{}).then(response => {
	                
	            }).catch(e => {});*/
	            window.open(protocol + "//" + ip + ":" + port + "/ibody-web/web/export/downloadImag.do?imageUrl=" + imageUrl);
	        }
	    }, {
	        key: 'bodySearchHander',
	        value: function bodySearchHander() {
	            //以人搜人
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = protocol + "//" + ip + ":" + port + "/ibody-web/index.do#bodySearch?imageUrl=" + item.target_pic_url;
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以人搜人"
	            });
	        }
	    }, {
	        key: 'faceSearchFaceHandler',
	        value: function faceSearchFaceHandler() {
	            //以脸搜脸
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#snapshot?faceUrl=" + item.target_pic_url;
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以脸搜脸"
	            });
	        }
	    }, {
	        key: 'faceIdSearchHander',
	        value: function faceIdSearchHander() {
	            //以脸搜证
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var url = protocol + "//" + ip + ":" + port + "/iface-web/index.do#faceCard?faceUrl=" + item.target_pic_url;
	            (0, _tool.goToApp)({
	                url: url,
	                title: "以脸搜证"
	            });
	        }
	        //上传档案
	
	    }, {
	        key: 'uploadClue',
	        value: function uploadClue() {
	            var props = this.props,
	                state = this.state;
	
	            var icasedocUrl = props.user.interfaceInfo.icasedocUrl;
	            var item = state.list[state.current];
	            var clueInfos = void 0;
	            if (item) {
	                clueInfos = {
	                    "clueInfos": [{
	                        "clueImgName": item.picName,
	                        "src": "body",
	                        "clueImgUrl": item.target_pic_url,
	                        "longitude": item.longitude,
	                        "latitude": item.latitude
	                    }]
	                };
	            }
	            this.setState({
	                icasedocUrl: icasedocUrl,
	                clueInfos: clueInfos,
	                show_uploadclue: true
	            });
	        }
	        //视频回放
	
	    }, {
	        key: 'videoPlayBack',
	        value: function videoPlayBack() {
	            var state = this.state;
	
	            var item = state.list[state.current];
	            var cameraIndexCode = item.cameraIndexCode;
	            var createTimeLong = item.createTimeLong;
	            var playerParam = this.props.user.interfaceInfo.playerParam;
	            _btools2["default"].playBack(cameraIndexCode, createTimeLong, playerParam);
	        }
	    }, {
	        key: 'renderViewData',
	        value: function renderViewData() {
	            var props = this.props,
	                state = this.state;
	
	            return _react2["default"].createElement(_viewData2["default"], { type: 'searchRecord', height: props.browser.avail_height, list: state.list, current: state.current });
	        }
	    }, {
	        key: 'renderPreview',
	        value: function renderPreview() {
	            var state = this.state;
	            var currentItem = state.list[state.current];
	            var rect = currentItem.rect;
	            var rectElement = null;
	            if (rect) {
	                var width = rect.width,
	                    height = rect.height,
	                    x = rect.x,
	                    y = rect.y;
	
	                if (width != 0 && height != 0) {
	                    var rectStyle = {
	                        width: width * 100 + '%',
	                        height: height * 100 + '%',
	                        left: x * 100 + '%',
	                        top: y * 100 + '%'
	                    };
	                    rectElement = _react2["default"].createElement('div', { className: 'viewer-main-preview-rect', style: rectStyle });
	                }
	            }
	            return _react2["default"].createElement(_imageView2["default"], { src: currentItem.facePicUrlBig,
	                addon: rectElement,
	                width: this.preview_width,
	                height: this.preview_height,
	                action: state.action,
	                onChange: this.onPreviewChange.bind(this) });
	        }
	    }, {
	        key: 'renderSlide',
	        value: function renderSlide() {
	            var state = this.state;
	            return _react2["default"].createElement(_listSlide2["default"], {
	                total_width: this.preview_width - 16 // viewer-main-slide padding 8x2
	                , current: state.current,
	                list: state.list,
	                width: 80,
	                renderItem: function renderItem(item) {
	                    return _react2["default"].createElement('img', { className: 'list-slide-custom-image', src: item.facePicUrl });
	                },
	                onChange: this.onSlideChange.bind(this) });
	        }
	    }]);
	
	    return App;
	}(_abstract_class_picture2["default"]);
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser, user: state.user };
	})(App);

/***/ })

});
//# sourceMappingURL=map/34.map