webpackJsonp([22,39],{

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _badge = __webpack_require__(1169);
	
	var _badge2 = _interopRequireDefault(_badge);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(1171);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _addDomEventListener = __webpack_require__(273);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactRedux = __webpack_require__(158);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	__webpack_require__(1173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var storageAndTaskDataMap = {
	    storage: {
	        text: '暂存架',
	        index: 1,
	        icon: 'lidaicon-cart'
	    },
	    task: {
	        text: '任务栏',
	        index: 2,
	        icon: 'lidaicon-detail'
	    }
	};
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            // 0 隐藏 
	            // 1 暂存架 
	            // 2 任务栏
	            showType: 0
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var app = document.getElementById('app');
	            this.eventListener = (0, _addDomEventListener2["default"])(app, 'click', function (e) {
	                return _this2.handleEmptyClick(e);
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.eventListener.remove();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.asideTabShowType && nextProps.asideTabShowType !== this.props.asideTabShowType) {
	                this.setState({
	                    showType: nextProps.asideTabShowType
	                });
	            }
	        }
	    }, {
	        key: 'handleEmptyClick',
	        value: function handleEmptyClick(e) {
	            var asideTabEl = document.getElementById('asideTabEl');
	            // 暂不开放
	            // if (!(e.target.className.includes('lidaicon-cart-add') || this.isParent(e.target, asideTabEl))) {
	            if (!this.isParent(e.target, asideTabEl)) {
	                this.setState({
	                    showType: 0
	                });
	            }
	        }
	    }, {
	        key: 'isParent',
	        value: function isParent(obj, parentObj) {
	            while (obj !== undefined && obj !== null && obj.id !== 'app') {
	                if (obj == parentObj) {
	                    return true;
	                }
	                obj = obj.parentNode;
	            }
	            return false;
	        }
	    }, {
	        key: 'handleAsideTabItemClick',
	        value: function handleAsideTabItemClick(e, showType) {
	            this.setState({
	                showType: showType === this.state.showType ? 0 : showType
	            });
	        }
	    }, {
	        key: 'renderAsideTabItem',
	        value: function renderAsideTabItem(key) {
	            var _this3 = this;
	
	            var state = this.state,
	                props = this.props;
	            var showType = state.showType;
	
	            var index = storageAndTaskDataMap[key].index;
	            return _react2["default"].createElement(
	                'div',
	                { className: showType === index ? 'aside-tab-item active' : 'aside-tab-item', onClick: function onClick(e) {
	                        return _this3.handleAsideTabItemClick(e, index);
	                    } },
	                key === 'task' ? _react2["default"].createElement(
	                    _badge2["default"],
	                    { count: props[key + 'Count'] || 0 },
	                    _react2["default"].createElement(_icon2["default"], { type: storageAndTaskDataMap[key].icon })
	                ) : _react2["default"].createElement(_icon2["default"], { type: storageAndTaskDataMap[key].icon }),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'aside-tab-text' },
	                    storageAndTaskDataMap[key].text[0]
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'aside-tab-text' },
	                    storageAndTaskDataMap[key].text[1]
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'aside-tab-text' },
	                    storageAndTaskDataMap[key].text[2]
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var state = this.state,
	                props = this.props;
	            var showType = state.showType;
	            var type = props.type;
	
	            var showStorage = !type || type === 'storage';
	            var showTask = !type || type === 'task';
	            var children = Array.isArray(props.children) ? props.children : [].concat(props.children);
	            return _react2["default"].createElement(
	                'div',
	                { id: 'asideTabEl', className: showType !== 0 ? 'aside-tab show-content' : 'aside-tab', style: props.position === 'fixed' ? { position: 'fixed', right: 16 } : {} },
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'aside-tab-toolbar' },
	                    showStorage && this.renderAsideTabItem('storage'),
	                    showTask && this.renderAsideTabItem('task')
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'aside-tab-content', style: { height: this.props.browser.height } },
	                    showType && children[children.length === 1 ? 0 : showType - 1]
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser };
	})(App);

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcAnimate = __webpack_require__(313);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _ScrollNumber = __webpack_require__(1170);
	
	var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Badge = (_temp = _class = function (_React$Component) {
	  _inherits(Badge, _React$Component);
	
	  function Badge() {
	    _classCallCheck(this, Badge);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Badge.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        count = _props.count,
	        prefixCls = _props.prefixCls,
	        overflowCount = _props.overflowCount,
	        className = _props.className,
	        style = _props.style,
	        children = _props.children,
	        dot = _props.dot,
	        restProps = _objectWithoutProperties(_props, ['count', 'prefixCls', 'overflowCount', 'className', 'style', 'children', 'dot']);
	
	    count = count > overflowCount ? overflowCount + '+' : count;
	
	    // dot mode don't need count
	    if (dot) {
	      count = '';
	    }
	
	    // null undefined "" "0" 0
	    var hidden = (!count || count === '0') && !dot;
	    var scrollNumberCls = prefixCls + (dot ? '-dot' : '-count');
	    var badgeCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-not-a-wrapper', !children), _classNames));
	
	    return _react2["default"].createElement(
	      'span',
	      _extends({ className: badgeCls, title: count, style: null }, restProps),
	      children,
	      _react2["default"].createElement(
	        _rcAnimate2["default"],
	        {
	          component: '',
	          showProp: 'data-show',
	          transitionName: prefixCls + '-zoom',
	          transitionAppear: true
	        },
	        hidden ? null : _react2["default"].createElement(_ScrollNumber2["default"], {
	          'data-show': !hidden,
	          className: scrollNumberCls,
	          count: count,
	          style: style
	        })
	      )
	    );
	  };
	
	  return Badge;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-badge',
	  count: null,
	  dot: false,
	  overflowCount: 99
	}, _class.propTypes = {
	  count: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
	  dot: _react2["default"].PropTypes.bool,
	  overflowCount: _react2["default"].PropTypes.number
	}, _temp);
	exports["default"] = Badge;
	module.exports = exports['default'];

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(157);
	
	var _isCssAnimationSupported = __webpack_require__(859);
	
	var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);
	
	var _object = __webpack_require__(495);
	
	var _object2 = _interopRequireDefault(_object);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function getNumberArray(num) {
	  return num ? num.toString().split('').reverse().map(function (i) {
	    return Number(i);
	  }) : [];
	}
	
	var ScrollNumber = (_temp = _class = function (_React$Component) {
	  _inherits(ScrollNumber, _React$Component);
	
	  function ScrollNumber(props) {
	    _classCallCheck(this, ScrollNumber);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      animateStarted: true,
	      count: props.count
	    };
	    return _this;
	  }
	
	  ScrollNumber.prototype.componentDidMount = function componentDidMount() {
	    if (!(0, _isCssAnimationSupported2["default"])()) {
	      (0, _reactDom.findDOMNode)(this).className += ' not-support-css-animation';
	    }
	  };
	
	  ScrollNumber.prototype.getPositionByNum = function getPositionByNum(num, i) {
	    if (this.state.animateStarted) {
	      return 10 + num;
	    }
	    var currentDigit = getNumberArray(this.state.count)[i];
	    var lastDigit = getNumberArray(this.lastCount)[i];
	    // 同方向则在同一侧切换数字
	    if (this.state.count > this.lastCount) {
	      if (currentDigit >= lastDigit) {
	        return 10 + num;
	      }
	      return 20 + num;
	    }
	    if (currentDigit <= lastDigit) {
	      return 10 + num;
	    }
	    return num;
	  };
	
	  ScrollNumber.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    if ('count' in nextProps) {
	      if (this.state.count === nextProps.count) {
	        return;
	      }
	      this.lastCount = this.state.count;
	      // 复原数字初始位置
	      this.setState({
	        animateStarted: true
	      }, function () {
	        // 等待数字位置复原完毕
	        // 开始设置完整的数字
	        setTimeout(function () {
	          _this2.setState({
	            animateStarted: false,
	            count: nextProps.count
	          }, function () {
	            _this2.props.onAnimated();
	          });
	        }, 5);
	      });
	    }
	  };
	
	  ScrollNumber.prototype.renderNumberList = function renderNumberList(position) {
	    var childrenToReturn = [];
	    for (var i = 0; i < 30; i++) {
	      var currentClassName = position === i ? 'current' : null;
	      childrenToReturn.push(_react2["default"].createElement(
	        'p',
	        { key: i, className: currentClassName },
	        i % 10
	      ));
	    }
	    return childrenToReturn;
	  };
	
	  ScrollNumber.prototype.renderCurrentNumber = function renderCurrentNumber(num, i) {
	    var position = this.getPositionByNum(num, i);
	    var height = this.props.height;
	    var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
	    return (0, _react.createElement)('span', {
	      className: this.props.prefixCls + '-only',
	      style: {
	        transition: removeTransition && 'none',
	        WebkitTransform: 'translateY(' + -position * height + 'px)',
	        transform: 'translateY(' + -position * height + 'px)',
	        height: height
	      },
	      key: i
	    }, this.renderNumberList(position));
	  };
	
	  ScrollNumber.prototype.renderNumberElement = function renderNumberElement() {
	    var _this3 = this;
	
	    var state = this.state;
	    if (!state.count || isNaN(state.count)) {
	      return state.count;
	    }
	    return getNumberArray(state.count).map(function (num, i) {
	      return _this3.renderCurrentNumber(num, i);
	    }).reverse();
	  };
	
	  ScrollNumber.prototype.render = function render() {
	    var _props = this.props,
	        component = _props.component,
	        prefixCls = _props.prefixCls,
	        className = _props.className,
	        otherProps = _objectWithoutProperties(_props, ['component', 'prefixCls', 'className']);
	    // fix https://fb.me/react-unknown-prop
	
	
	    var restProps = (0, _object2["default"])(otherProps, ['count', 'onAnimated']);
	    var props = _extends({}, restProps, {
	      className: prefixCls + ' ' + className
	    });
	    return (0, _react.createElement)(component, props, this.renderNumberElement());
	  };
	
	  return ScrollNumber;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-scroll-number',
	  count: null,
	  component: 'sup',
	  onAnimated: function onAnimated() {},
	
	  height: 18
	}, _class.propTypes = {
	  count: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
	  component: _react2["default"].PropTypes.string,
	  onAnimated: _react2["default"].PropTypes.func,
	  height: _react2["default"].PropTypes.number
	}, _temp);
	exports["default"] = ScrollNumber;
	module.exports = exports['default'];

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(1172);

/***/ }),

/***/ 1172:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1173:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=map/22.map