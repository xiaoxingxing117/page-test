webpackJsonp([17,39],{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Input = __webpack_require__(493);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Group = __webpack_require__(499);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	_Input2["default"].Group = _Group2["default"];
	exports["default"] = _Input2["default"];
	module.exports = exports['default'];

/***/ }),

/***/ 493:
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
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _calculateNodeHeight = __webpack_require__(494);
	
	var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);
	
	var _object = __webpack_require__(495);
	
	var _object2 = _interopRequireDefault(_object);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function fixControlledValue(value) {
	  if (typeof value === 'undefined' || value === null) {
	    return '';
	  }
	  return value;
	}
	
	function onNextFrame(cb) {
	  if (window.requestAnimationFrame) {
	    return window.requestAnimationFrame(cb);
	  }
	  return window.setTimeout(cb, 1);
	}
	
	function clearNextFrameAction(nextFrameId) {
	  if (window.cancelAnimationFrame) {
	    window.cancelAnimationFrame(nextFrameId);
	  } else {
	    window.clearTimeout(nextFrameId);
	  }
	}
	
	var Input = (_temp = _class = function (_Component) {
	  _inherits(Input, _Component);
	
	  function Input(props) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleKeyDown = function (e) {
	      if (e.keyCode === 13) {
	        _this.props.onPressEnter(e);
	      }
	      _this.props.onKeyDown(e);
	    };
	
	    _this.handleTextareaChange = function (e) {
	      if (!('value' in _this.props)) {
	        _this.resizeTextarea();
	      }
	      _this.props.onChange(e);
	    };
	
	    _this.resizeTextarea = function () {
	      var _this$props = _this.props,
	          type = _this$props.type,
	          autosize = _this$props.autosize;
	
	      if (type !== 'textarea' || !autosize || !_this.refs.input) {
	        return;
	      }
	      var minRows = autosize ? autosize.minRows : null;
	      var maxRows = autosize ? autosize.maxRows : null;
	      var textareaStyles = (0, _calculateNodeHeight2["default"])(_this.refs.input, false, minRows, maxRows);
	      _this.setState({ textareaStyles: textareaStyles });
	    };
	
	    _this.state = {
	      textareaStyles: null
	    };
	    return _this;
	  }
	
	  Input.prototype.componentDidMount = function componentDidMount() {
	    this.resizeTextarea();
	  };
	
	  Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    // Re-render with the new content then recalculate the height as required.
	    if (this.props.value !== nextProps.value) {
	      if (this.nextFrameActionId) {
	        clearNextFrameAction(this.nextFrameActionId);
	      }
	      this.nextFrameActionId = onNextFrame(this.resizeTextarea);
	    }
	  };
	
	  Input.prototype.renderLabledInput = function renderLabledInput(children) {
	    var _classNames;
	
	    var props = this.props;
	    var wrapperClassName = props.prefixCls + '-group';
	    var addonClassName = wrapperClassName + '-addon';
	    var addonBefore = props.addonBefore ? _react2["default"].createElement(
	      'span',
	      { className: addonClassName },
	      props.addonBefore
	    ) : null;
	
	    var addonAfter = props.addonAfter ? _react2["default"].createElement(
	      'span',
	      { className: addonClassName },
	      props.addonAfter
	    ) : null;
	
	    var className = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, props.prefixCls + '-wrapper', true), _defineProperty(_classNames, wrapperClassName, addonBefore || addonAfter), _classNames));
	
	    return _react2["default"].createElement(
	      'span',
	      { className: className },
	      addonBefore,
	      children,
	      addonAfter
	    );
	  };
	
	  Input.prototype.renderInput = function renderInput() {
	    var _classNames2;
	
	    var props = _extends({}, this.props);
	
	    // Fix https://fb.me/react-unknown-prop
	    var otherProps = (0, _object2["default"])(this.props, ['prefixCls', 'onPressEnter', 'autosize', 'addonBefore', 'addonAfter']);
	
	    var prefixCls = props.prefixCls;
	    if (!props.type) {
	      return props.children;
	    }
	
	    var inputClassName = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls, true), _defineProperty(_classNames2, prefixCls + '-sm', props.size === 'small'), _defineProperty(_classNames2, prefixCls + '-lg', props.size === 'large'), _defineProperty(_classNames2, props.className, !!props.className), _classNames2));
	
	    if ('value' in props) {
	      otherProps.value = fixControlledValue(props.value);
	      // Input elements must be either controlled or uncontrolled,
	      // specify either the value prop, or the defaultValue prop, but not both.
	      delete otherProps.defaultValue;
	    }
	
	    switch (props.type) {
	      case 'textarea':
	        return _react2["default"].createElement('textarea', _extends({}, otherProps, {
	          style: _extends({}, props.style, this.state.textareaStyles),
	          className: inputClassName,
	          onKeyDown: this.handleKeyDown,
	          onChange: this.handleTextareaChange,
	          ref: 'input'
	        }));
	      default:
	        return _react2["default"].createElement('input', _extends({}, otherProps, {
	          className: inputClassName,
	          onKeyDown: this.handleKeyDown,
	          ref: 'input'
	        }));
	    }
	  };
	
	  Input.prototype.render = function render() {
	    return this.renderLabledInput(this.renderInput());
	  };
	
	  return Input;
	}(_react.Component), _class.defaultProps = {
	  defaultValue: '',
	  disabled: false,
	  prefixCls: 'ant-input',
	  type: 'text',
	  onPressEnter: function onPressEnter() {},
	  onKeyDown: function onKeyDown() {},
	  onChange: function onChange() {},
	
	  autosize: false
	}, _class.propTypes = {
	  type: _react.PropTypes.string,
	  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  size: _react.PropTypes.oneOf(['small', 'default', 'large']),
	  disabled: _react.PropTypes.bool,
	  value: _react.PropTypes.any,
	  defaultValue: _react.PropTypes.any,
	  className: _react.PropTypes.string,
	  addonBefore: _react.PropTypes.node,
	  addonAfter: _react.PropTypes.node,
	  prefixCls: _react.PropTypes.string,
	  autosize: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  onPressEnter: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func
	}, _temp);
	exports["default"] = Input;
	module.exports = exports['default'];

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = calculateNodeHeight;
	// Thanks to https://github.com/andreypopp/react-textarea-autosize/
	
	/**
	 * calculateNodeHeight(uiTextNode, useCache = false)
	 */
	
	var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
	
	var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
	
	var computedStyleCache = {};
	var hiddenTextarea = void 0;
	
	function computedStyle(node) {
	  return window.getComputedStyle ? getComputedStyle(node) : node.currentStyle;
	}
	
	function getStylePropertyValue(style, prop) {
	  var value = void 0;
	  if (style) {
	    value = window.getComputedStyle ? style.getPropertyValue(prop) : style[prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })];
	  }
	  return value;
	}
	
	function calculateNodeStyling(node) {
	  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
	
	  if (useCache && computedStyleCache[nodeRef]) {
	    return computedStyleCache[nodeRef];
	  }
	
	  var style = computedStyle(node);
	
	  var boxSizing = getStylePropertyValue(style, 'box-sizing') || getStylePropertyValue(style, '-moz-box-sizing') || getStylePropertyValue(style, '-webkit-box-sizing');
	
	  var paddingSize = parseFloat(getStylePropertyValue(style, 'padding-bottom')) + parseFloat(getStylePropertyValue(style, 'padding-top'));
	
	  var borderSize = parseFloat(getStylePropertyValue(style, 'border-bottom-width')) + parseFloat(getStylePropertyValue(style, 'border-top-width'));
	
	  var sizingStyle = SIZING_STYLE.map(function (name) {
	    return name + ':' + getStylePropertyValue(style, name);
	  }).join(';');
	
	  var nodeInfo = {
	    sizingStyle: sizingStyle,
	    paddingSize: paddingSize,
	    borderSize: borderSize,
	    boxSizing: boxSizing
	  };
	
	  if (useCache && nodeRef) {
	    computedStyleCache[nodeRef] = nodeInfo;
	  }
	
	  return nodeInfo;
	}
	
	function calculateNodeHeight(uiTextNode) {
	  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }
	
	  // Copy all CSS properties that have an impact on the height of the content in
	  // the textbox
	
	  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
	      paddingSize = _calculateNodeStyling.paddingSize,
	      borderSize = _calculateNodeStyling.borderSize,
	      boxSizing = _calculateNodeStyling.boxSizing,
	      sizingStyle = _calculateNodeStyling.sizingStyle;
	
	  // Need to have the overflow attribute to hide the scrollbar otherwise
	  // text-lines will not calculated properly as the shadow will technically be
	  // narrower for content
	
	
	  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
	  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
	
	  var minHeight = -Infinity;
	  var maxHeight = Infinity;
	  var height = hiddenTextarea.scrollHeight;
	
	  if (boxSizing === 'border-box') {
	    // border-box: add border, since height = content + padding + border
	    height = height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    // remove padding, since height = content
	    height = height - paddingSize;
	  }
	
	  if (minRows !== null || maxRows !== null) {
	    // measure height of a textarea with a single row
	    hiddenTextarea.value = '';
	    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	    if (minRows !== null) {
	      minHeight = singleRowHeight * minRows;
	      if (boxSizing === 'border-box') {
	        minHeight = minHeight + paddingSize + borderSize;
	      }
	      height = Math.max(minHeight, height);
	    }
	    if (maxRows !== null) {
	      maxHeight = singleRowHeight * maxRows;
	      if (boxSizing === 'border-box') {
	        maxHeight = maxHeight + paddingSize + borderSize;
	      }
	      height = Math.min(maxHeight, height);
	    }
	  }
	  return { height: height, minHeight: minHeight, maxHeight: maxHeight };
	}
	module.exports = exports['default'];

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = Group;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function Group(props) {
	  var className = (0, _classnames2["default"])(_defineProperty({
	    'ant-input-group': true,
	    'ant-input-group-lg': props.size === 'large',
	    'ant-input-group-sm': props.size === 'small'
	  }, props.className, !!props.className));
	  return _react2["default"].createElement(
	    'span',
	    { className: className, style: props.style },
	    props.children
	  );
	}
	
	Group.propTypes = {
	  children: _react2["default"].PropTypes.any
	};
	module.exports = exports['default'];

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createDOMForm = __webpack_require__(533);
	
	var _createDOMForm2 = _interopRequireDefault(_createDOMForm);
	
	var _Form = __webpack_require__(567);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormItem = __webpack_require__(570);
	
	var _FormItem2 = _interopRequireDefault(_FormItem);
	
	var _ValueMixin = __webpack_require__(577);
	
	var _ValueMixin2 = _interopRequireDefault(_ValueMixin);
	
	var _constants = __webpack_require__(576);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	_Form2["default"].create = function () {
	  var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var options = _extends({}, o, {
	    fieldNameProp: 'id',
	    fieldMetaProp: _constants.FIELD_META_PROP
	  });
	  var formWrapper = (0, _createDOMForm2["default"])(options);
	
	  /* eslint-disable react/prefer-es6-class */
	  return function (Component) {
	    return formWrapper(_react2["default"].createClass({
	      propTypes: {
	        form: _react.PropTypes.object.isRequired
	      },
	      childContextTypes: {
	        form: _react.PropTypes.object.isRequired
	      },
	      getChildContext: function getChildContext() {
	        return {
	          form: this.props.form
	        };
	      },
	      render: function render() {
	        return _react2["default"].createElement(Component, this.props);
	      }
	    }));
	  };
	};
	_Form2["default"].Item = _FormItem2["default"];
	
	// @Deprecated
	_Form2["default"].ValueMixin = _ValueMixin2["default"];
	
	exports["default"] = _Form2["default"];
	module.exports = exports['default'];

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _createBaseForm = __webpack_require__(534);
	
	var _createBaseForm2 = _interopRequireDefault(_createBaseForm);
	
	var _createForm = __webpack_require__(566);
	
	var _utils = __webpack_require__(539);
	
	var _reactDom = __webpack_require__(157);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domScrollIntoView = __webpack_require__(514);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function computedStyle(el, prop) {
	  var getComputedStyle = window.getComputedStyle;
	  var style =
	  // If we have getComputedStyle
	  getComputedStyle ?
	  // Query it
	  // TODO: From CSS-Query notes, we might need (node, null) for FF
	  getComputedStyle(el) :
	
	  // Otherwise, we are in IE and use currentStyle
	  el.currentStyle;
	  if (style) {
	    return style[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })];
	  }
	  return undefined;
	}
	
	function getScrollableContainer(n) {
	  var node = n;
	  var nodeName = void 0;
	  /* eslint no-cond-assign:0 */
	  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
	    var overflowY = computedStyle(node, 'overflowY');
	    if (overflowY === 'auto' || overflowY === 'scroll') {
	      return node;
	    }
	    node = node.parentNode;
	  }
	  return nodeName === 'body' ? node.ownerDocument : node;
	}
	
	var mixin = {
	  getForm: function getForm() {
	    return (0, _extends3["default"])({}, _createForm.mixin.getForm.call(this), {
	      validateFieldsAndScroll: this.validateFieldsAndScroll
	    });
	  },
	  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
	    var _this = this;
	
	    var _getParams = (0, _utils.getParams)(ns, opt, cb);
	
	    var names = _getParams.names;
	    var callback = _getParams.callback;
	    var options = _getParams.options;
	
	
	    var newCb = function newCb(error, values) {
	      if (error) {
	        var firstNode = void 0;
	        var firstTop = void 0;
	        for (var name in error) {
	          if (error.hasOwnProperty(name)) {
	            var instance = _this.getFieldInstance(name);
	            if (instance) {
	              var node = _reactDom2["default"].findDOMNode(instance);
	              var top = node.getBoundingClientRect().top;
	              if (firstTop === undefined || firstTop > top) {
	                firstTop = top;
	                firstNode = node;
	              }
	            }
	          }
	        }
	        if (firstNode) {
	          var c = options.container || getScrollableContainer(firstNode);
	          (0, _domScrollIntoView2["default"])(firstNode, c, (0, _extends3["default"])({
	            onlyScrollIfNeeded: true
	          }, options.scroll));
	        }
	      }
	
	      if (typeof callback === 'function') {
	        callback(error, values);
	      }
	    };
	
	    return this.validateFields(names, options, newCb);
	  }
	};
	
	function createDOMForm(option) {
	  return (0, _createBaseForm2["default"])((0, _extends3["default"])({}, option), [mixin]);
	}
	
	exports["default"] = createDOMForm;
	module.exports = exports['default'];

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(535);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _defineProperty2 = __webpack_require__(508);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(539);
	
	var _asyncValidator = __webpack_require__(541);
	
	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultValidateTrigger = 'onChange';
	var defaultTrigger = defaultValidateTrigger;
	var atom = {};
	
	function createBaseForm() {
	  var option = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var mixins = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var mapPropsToFields = option.mapPropsToFields;
	  var onFieldsChange = option.onFieldsChange;
	  var fieldNameProp = option.fieldNameProp;
	  var fieldMetaProp = option.fieldMetaProp;
	  var validateMessages = option.validateMessages;
	  var _option$mapProps = option.mapProps;
	  var mapProps = _option$mapProps === undefined ? _utils.mirror : _option$mapProps;
	  var _option$formPropName = option.formPropName;
	  var formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName;
	  var withRef = option.withRef;
	
	
	  function decorate(WrappedComponent) {
	    var Form = _react2["default"].createClass({
	      displayName: 'Form',
	
	      mixins: mixins,
	
	      getInitialState: function getInitialState() {
	        var fields = void 0;
	        if (mapPropsToFields) {
	          fields = mapPropsToFields(this.props);
	        }
	        this.fields = fields || {};
	        this.instances = {};
	        this.fieldsMeta = {};
	        this.cachedBind = {};
	        return {
	          submitting: false
	        };
	      },
	      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (mapPropsToFields) {
	          this.fields = mapPropsToFields(nextProps);
	        }
	      },
	      onChange: function onChange(name_, action) {
	        var name = name_;
	        var fieldMeta = this.getFieldMeta(name);
	        var validate = fieldMeta.validate;
	
	        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          args[_key - 2] = arguments[_key];
	        }
	
	        if (fieldMeta[action]) {
	          fieldMeta[action].apply(fieldMeta, args);
	        }
	        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, args) : _utils.getValueFromEvent.apply(undefined, args);
	        var fieldContent = void 0;
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
	          name = nameKeyObj.name;
	        }
	        var field = this.getField(name);
	        fieldContent = (0, _extends3["default"])({}, field, {
	          value: value,
	          dirty: (0, _utils.hasRules)(validate)
	        });
	        this.setFields((0, _defineProperty3["default"])({}, name, fieldContent));
	      },
	      onChangeValidate: function onChangeValidate(name_, action) {
	        var name = name_;
	        var fieldMeta = this.getFieldMeta(name);
	
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        if (fieldMeta[action]) {
	          fieldMeta[action].apply(fieldMeta, args);
	        }
	        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, args) : _utils.getValueFromEvent.apply(undefined, args);
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        if (this.getFieldMeta(nameKeyObj.name).exclusive) {
	          name = nameKeyObj.name;
	        }
	        var field = this.getField(name);
	        field.value = value;
	        field.dirty = true;
	        this.validateFieldsInternal([field], {
	          action: action,
	          options: {
	            firstFields: !!fieldMeta.validateFirst
	          }
	        });
	      },
	      getCacheBind: function getCacheBind(name, action, fn) {
	        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
	        if (!cache[action]) {
	          cache[action] = fn.bind(this, name, action);
	        }
	        return cache[action];
	      },
	      getFieldMeta: function getFieldMeta(name) {
	        return this.fieldsMeta[name];
	      },
	      getField: function getField(name) {
	        var fields = this.fields;
	
	        return (0, _extends3["default"])({}, fields[name], {
	          name: name
	        });
	      },
	      getFieldProps: function getFieldProps(name) {
	        var _this = this;
	
	        var fieldOption = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        if (!name) {
	          throw new Error('must call getFieldProps with valid name string!');
	        }
	
	        var rules = fieldOption.rules;
	        var _fieldOption$trigger = fieldOption.trigger;
	        var trigger = _fieldOption$trigger === undefined ? defaultTrigger : _fieldOption$trigger;
	        var _fieldOption$valuePro = fieldOption.valuePropName;
	        var valuePropName = _fieldOption$valuePro === undefined ? 'value' : _fieldOption$valuePro;
	        var getValueProps = fieldOption.getValueProps;
	        var exclusive = fieldOption.exclusive;
	        var _fieldOption$validate = fieldOption.validateTrigger;
	        var validateTrigger = _fieldOption$validate === undefined ? defaultValidateTrigger : _fieldOption$validate;
	        var _fieldOption$validate2 = fieldOption.validate;
	        var validate = _fieldOption$validate2 === undefined ? [] : _fieldOption$validate2;
	
	        var nameKeyObj = (0, _utils.getNameKeyObj)(name);
	        var leadingName = nameKeyObj.name;
	        var key = nameKeyObj.key;
	        var fieldsMeta = this.fieldsMeta;
	
	        var fieldMeta = void 0;
	        var leadingFieldMeta = fieldsMeta[leadingName];
	
	        if (key) {
	          leadingFieldMeta = fieldsMeta[leadingName] = fieldsMeta[leadingName] || {};
	          leadingFieldMeta.virtual = !exclusive;
	          // exclusive allow getFieldProps('x', {initialValue})
	          // non-exclusive does not allow getFieldProps('x', {initialValue})
	          leadingFieldMeta.hidden = !exclusive;
	          leadingFieldMeta.exclusive = exclusive;
	          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
	        } else {
	          fieldMeta = fieldsMeta[name] = fieldsMeta[name] || {};
	        }
	
	        if ('initialValue' in fieldOption) {
	          fieldMeta.initialValue = fieldOption.initialValue;
	        }
	
	        var inputProps = {};
	
	        if (key) {
	          inputProps.key = key;
	        }
	
	        if (fieldNameProp) {
	          inputProps[fieldNameProp] = name;
	        }
	
	        var validateRules = validate.map(function (item) {
	          var newItem = (0, _extends3["default"])({}, item, {
	            trigger: item.trigger || []
	          });
	          if (typeof newItem.trigger === 'string') {
	            newItem.trigger = [newItem.trigger];
	          }
	          return newItem;
	        });
	
	        if (rules) {
	          validateRules.push({
	            trigger: validateTrigger ? [].concat(validateTrigger) : [],
	            rules: rules
	          });
	        }
	
	        validateRules.filter(function (item) {
	          return !!item.rules && item.rules.length;
	        }).map(function (item) {
	          return item.trigger;
	        }).reduce(function (pre, curr) {
	          return pre.concat(curr);
	        }, []).forEach(function (action) {
	          inputProps[action] = _this.getCacheBind(name, action, _this.onChangeValidate);
	        });
	
	        function checkRule(item) {
	          return item.trigger.indexOf(trigger) === -1 || !item.rules || !item.rules.length;
	        }
	
	        if (trigger && validateRules.every(checkRule)) {
	          inputProps[trigger] = this.getCacheBind(name, trigger, this.onChange);
	        }
	        var field = exclusive ? this.getField(leadingName) : this.getField(name);
	        var fieldValue = atom;
	        if (field && 'value' in field) {
	          fieldValue = field.value;
	        }
	        if (fieldValue === atom) {
	          fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
	        }
	        if (getValueProps) {
	          inputProps = (0, _extends3["default"])({}, inputProps, getValueProps(fieldValue));
	        } else {
	          inputProps[valuePropName] = fieldValue;
	        }
	
	        inputProps.ref = this.getCacheBind(name, name + '__ref', this.saveRef);
	
	        var meta = (0, _extends3["default"])({}, fieldMeta, fieldOption, {
	          validate: validateRules
	        });
	
	        fieldsMeta[name] = meta;
	
	        if (fieldMetaProp) {
	          inputProps[fieldMetaProp] = meta;
	        }
	
	        return inputProps;
	      },
	      getFieldMember: function getFieldMember(name, member) {
	        var field = this.getField(name);
	        return field && field[member];
	      },
	      getFieldError: function getFieldError(name) {
	        return (0, _utils.getErrorStrs)(this.getFieldMember(name, 'errors'));
	      },
	      getValidFieldsName: function getValidFieldsName() {
	        var fieldsMeta = this.fieldsMeta;
	        return fieldsMeta ? (0, _keys2["default"])(fieldsMeta).filter(function (name) {
	          return !fieldsMeta[name].hidden;
	        }) : [];
	      },
	      getFieldsValue: function getFieldsValue(names) {
	        var _this2 = this;
	
	        var fields = names || (0, _utils.flatFieldNames)(this.getValidFieldsName());
	        var allValues = {};
	        fields.forEach(function (f) {
	          allValues[f] = _this2.getFieldValue(f);
	        });
	        return allValues;
	      },
	      getFieldValue: function getFieldValue(name) {
	        var fields = this.fields;
	
	        return this.getValueFromFields(name, fields);
	      },
	      getFieldInstance: function getFieldInstance(name) {
	        return this.instances[name];
	      },
	      getValueFromFieldsInternal: function getValueFromFieldsInternal(name, fields) {
	        var field = fields[name];
	        if (field && 'value' in field) {
	          return field.value;
	        }
	        var fieldMeta = this.fieldsMeta[name];
	        return fieldMeta && fieldMeta.initialValue;
	      },
	      getValueFromFields: function getValueFromFields(name, fields) {
	        var fieldsMeta = this.fieldsMeta;
	
	        if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	          var ret = {};
	          for (var fieldKey in fieldsMeta) {
	            if (fieldsMeta.hasOwnProperty(fieldKey)) {
	              var nameKeyObj = (0, _utils.getNameKeyObj)(fieldKey);
	              if (nameKeyObj.name === name && nameKeyObj.key) {
	                ret[nameKeyObj.key] = this.getValueFromFieldsInternal(fieldKey, fields);
	              }
	            }
	          }
	          return ret;
	        }
	        return this.getValueFromFieldsInternal(name, fields);
	      },
	      getRules: function getRules(fieldMeta, action) {
	        var actionRules = fieldMeta.validate.filter(function (item) {
	          return !action || item.trigger.indexOf(action) >= 0;
	        }).map(function (item) {
	          return item.rules;
	        });
	        return (0, _utils.flattenArray)(actionRules);
	      },
	      setFields: function setFields(fields_) {
	        var _this3 = this;
	
	        var fieldsMeta = this.fieldsMeta;
	        var fields = fields_;
	        var nowFields = (0, _extends3["default"])({}, this.fields, fields);
	        var nowValues = {};
	        (0, _keys2["default"])(fieldsMeta).forEach(function (f) {
	          var _getNameKeyObj = (0, _utils.getNameKeyObj)(f);
	
	          var name = _getNameKeyObj.name;
	          var key = _getNameKeyObj.key;
	
	          if (key && fieldsMeta[name].exclusive) {
	            return;
	          }
	          nowValues[f] = _this3.getValueFromFields(f, nowFields);
	        });
	        var changedFieldsName = (0, _keys2["default"])(fields);
	        (0, _keys2["default"])(nowValues).forEach(function (f) {
	          var value = nowValues[f];
	          var fieldMeta = fieldsMeta[f];
	          if (fieldMeta && fieldMeta.normalize) {
	            var nowValue = fieldMeta.normalize(value, _this3.getValueFromFields(f, _this3.fields), nowValues);
	            if (nowValue !== value) {
	              nowFields[f] = (0, _extends3["default"])({}, nowFields[f], {
	                value: nowValue
	              });
	            }
	          }
	        });
	        this.fields = nowFields;
	        if (onFieldsChange) {
	          (function () {
	            var changedFields = {};
	            changedFieldsName.forEach(function (f) {
	              changedFields[f] = _this3.getField(f);
	            });
	            onFieldsChange(_this3.props, changedFields);
	          })();
	        }
	        this.forceUpdate();
	      },
	      setFieldsValue: function setFieldsValue(fieldsValue) {
	        var newFields = {};
	        var fieldsMeta = this.fieldsMeta;
	        var fields = this.fields;
	
	        for (var name in fieldsValue) {
	          if (fieldsValue.hasOwnProperty(name)) {
	            var value = fieldsValue[name];
	            if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	              (0, _utils.clearVirtualField)(name, fields, fieldsMeta);
	              for (var key in value) {
	                if (value.hasOwnProperty(key)) {
	                  newFields[(0, _utils.getNameKeyStr)(name, key)] = value[key];
	                }
	              }
	            } else {
	              newFields[name] = {
	                name: name,
	                value: value
	              };
	            }
	          }
	        }
	        this.setFields(newFields);
	      },
	      setFieldsInitialValue: function setFieldsInitialValue(initialValues) {
	        var fieldsMeta = this.fieldsMeta;
	        for (var name in initialValues) {
	          if (initialValues.hasOwnProperty(name)) {
	            var fieldMeta = fieldsMeta[name];
	            fieldsMeta[name] = (0, _extends3["default"])({}, fieldMeta, {
	              initialValue: initialValues[name]
	            });
	          }
	        }
	      },
	      saveRef: function saveRef(name, _, component) {
	        if (!component) {
	          // after destroy, delete data
	          delete this.fieldsMeta[name];
	          delete this.fields[name];
	          delete this.instances[name];
	          delete this.cachedBind[name];
	          return;
	        }
	        var fieldMeta = this.getFieldMeta(name);
	        if (fieldMeta && fieldMeta.ref) {
	          if (typeof fieldMeta.ref === 'string') {
	            throw new Error('can not set ref string for ' + name);
	          }
	          fieldMeta.ref(component);
	        }
	        this.instances[name] = component;
	      },
	      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
	        var _this4 = this;
	
	        var fieldNames = _ref.fieldNames;
	        var action = _ref.action;
	        var _ref$options = _ref.options;
	        var options = _ref$options === undefined ? {} : _ref$options;
	
	        var allRules = {};
	        var allValues = {};
	        var allFields = {};
	        var alreadyErrors = {};
	        fields.forEach(function (field) {
	          var name = field.name;
	          if (options.force !== true && field.dirty === false) {
	            if (field.errors) {
	              alreadyErrors[name] = {
	                errors: field.errors
	              };
	            }
	            return;
	          }
	          var fieldMeta = _this4.getFieldMeta(name);
	          var newField = (0, _extends3["default"])({}, field);
	          newField.errors = undefined;
	          newField.validating = true;
	          newField.dirty = true;
	          allRules[name] = _this4.getRules(fieldMeta, action);
	          allValues[name] = newField.value;
	          allFields[name] = newField;
	        });
	        this.setFields(allFields);
	        // in case normalize
	        (0, _keys2["default"])(allValues).forEach(function (f) {
	          allValues[f] = _this4.getFieldValue(f);
	        });
	        if (callback && (0, _utils.isEmptyObject)(allFields)) {
	          callback((0, _utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          return;
	        }
	        var validator = new _asyncValidator2["default"](allRules);
	        if (validateMessages) {
	          validator.messages(validateMessages);
	        }
	        validator.validate(allValues, options, function (errors) {
	          var errorsGroup = (0, _extends3["default"])({}, alreadyErrors);
	          if (errors && errors.length) {
	            errors.forEach(function (e) {
	              var fieldName = e.field;
	              if (!errorsGroup[fieldName]) {
	                errorsGroup[fieldName] = {
	                  errors: []
	                };
	              }
	              var fieldErrors = errorsGroup[fieldName].errors;
	              fieldErrors.push(e);
	            });
	          }
	          var expired = [];
	          var nowAllFields = {};
	          (0, _keys2["default"])(allRules).forEach(function (name) {
	            var fieldErrors = errorsGroup[name];
	            var nowField = _this4.getField(name);
	            // avoid concurrency problems
	            if (nowField.value !== allValues[name]) {
	              expired.push({
	                name: name
	              });
	            } else {
	              nowField.errors = fieldErrors && fieldErrors.errors;
	              nowField.value = allValues[name];
	              nowField.validating = false;
	              nowField.dirty = false;
	              nowAllFields[name] = nowField;
	            }
	          });
	          _this4.setFields(nowAllFields);
	          if (callback) {
	            if (expired.length) {
	              expired.forEach(function (_ref2) {
	                var name = _ref2.name;
	
	                var fieldErrors = [{
	                  message: name + ' need to revalidate',
	                  field: name
	                }];
	                errorsGroup[name] = {
	                  expired: true,
	                  errors: fieldErrors
	                };
	              });
	            }
	            callback((0, _utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this4.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	        });
	      },
	      validateFields: function validateFields(ns, opt, cb) {
	        var _this5 = this;
	
	        var _getParams = (0, _utils.getParams)(ns, opt, cb);
	
	        var names = _getParams.names;
	        var callback = _getParams.callback;
	        var options = _getParams.options;
	
	        var fieldNames = names || this.getValidFieldsName();
	        var fields = fieldNames.map(function (name) {
	          var fieldMeta = _this5.getFieldMeta(name);
	          if (!(0, _utils.hasRules)(fieldMeta.validate)) {
	            return null;
	          }
	          var field = _this5.getField(name);
	          field.value = _this5.getFieldValue(name);
	          return field;
	        }).filter(function (f) {
	          return !!f;
	        });
	        if (!fields.length) {
	          if (callback) {
	            callback(null, this.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
	          }
	          return;
	        }
	        if (!('firstFields' in options)) {
	          options.firstFields = fieldNames.filter(function (name) {
	            var fieldMeta = _this5.getFieldMeta(name);
	            return !!fieldMeta.validateFirst;
	          });
	        }
	        this.validateFieldsInternal(fields, {
	          fieldNames: fieldNames,
	          options: options
	        }, callback);
	      },
	      isFieldValidating: function isFieldValidating(name) {
	        return this.getFieldMember(name, 'validating');
	      },
	      isFieldsValidating: function isFieldsValidating(ns) {
	        var _this6 = this;
	
	        var names = ns || this.getValidFieldsName();
	        return names.some(function (n) {
	          return _this6.isFieldValidating(n);
	        });
	      },
	      isSubmitting: function isSubmitting() {
	        return this.state.submitting;
	      },
	      submit: function submit(callback) {
	        var _this7 = this;
	
	        var fn = function fn() {
	          _this7.setState({
	            submitting: false
	          });
	        };
	        this.setState({
	          submitting: true
	        });
	        callback(fn);
	      },
	      resetFields: function resetFields(ns) {
	        var newFields = {};
	        var fields = this.fields;
	
	        var changed = false;
	        var names = ns || (0, _keys2["default"])(fields);
	        names.forEach(function (name) {
	          var field = fields[name];
	          if (field && 'value' in field) {
	            changed = true;
	            newFields[name] = {};
	          }
	        });
	        if (changed) {
	          this.setFields(newFields);
	        }
	      },
	      render: function render() {
	        var formProps = (0, _defineProperty3["default"])({}, formPropName, this.getForm());
	        if (withRef) {
	          formProps.ref = 'wrappedComponent';
	        }
	        var props = mapProps.call(this, (0, _extends3["default"])({}, formProps, this.props));
	        return _react2["default"].createElement(WrappedComponent, props);
	      }
	    });
	
	    return (0, _utils.argumentContainer)(Form, WrappedComponent);
	  }
	
	  return decorate;
	}
	
	exports["default"] = createBaseForm;
	module.exports = exports['default'];

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(536), __esModule: true };

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(537);
	module.exports = __webpack_require__(329).Object.keys;


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(364);
	var $keys = __webpack_require__(348);
	
	__webpack_require__(538)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(327);
	var core = __webpack_require__(329);
	var fails = __webpack_require__(338);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(535);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.argumentContainer = argumentContainer;
	exports.getValueFromEvent = getValueFromEvent;
	exports.getErrorStrs = getErrorStrs;
	exports.isEmptyObject = isEmptyObject;
	exports.flattenArray = flattenArray;
	exports.mirror = mirror;
	exports.hasRules = hasRules;
	exports.startsWith = startsWith;
	exports.getParams = getParams;
	exports.getNameKeyStr = getNameKeyStr;
	exports.getNameKeyObj = getNameKeyObj;
	exports.flatFields = flatFields;
	exports.flatFieldNames = flatFieldNames;
	exports.clearVirtualField = clearVirtualField;
	
	var _hoistNonReactStatics = __webpack_require__(540);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
	}
	
	function argumentContainer(Container, WrappedComponent) {
	  /* eslint no-param-reassign:0 */
	  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
	  Container.WrappedComponent = WrappedComponent;
	  return (0, _hoistNonReactStatics2["default"])(Container, WrappedComponent);
	}
	
	function getValueFromEvent(e) {
	  // support custom element
	  if (!e || !e.target) {
	    return e;
	  }
	  var target = e.target;
	
	  return target.type === 'checkbox' ? target.checked : target.value;
	}
	
	function getErrorStrs(errors) {
	  if (errors) {
	    return errors.map(function (e) {
	      if (e && e.message) {
	        return e.message;
	      }
	      return e;
	    });
	  }
	  return errors;
	}
	
	function isEmptyObject(obj) {
	  return (0, _keys2["default"])(obj).length === 0;
	}
	
	function flattenArray(arr) {
	  return Array.prototype.concat.apply([], arr);
	}
	
	function mirror(obj) {
	  return obj;
	}
	
	function hasRules(validate) {
	  if (validate) {
	    return validate.some(function (item) {
	      return !!item.rules && item.rules.length;
	    });
	  }
	  return false;
	}
	
	function startsWith(str, prefix) {
	  return str.lastIndexOf(prefix, 0) === 0;
	}
	
	function getParams(ns, opt, cb) {
	  var names = ns;
	  var callback = cb;
	  var options = opt;
	  if (cb === undefined) {
	    if (typeof names === 'function') {
	      callback = names;
	      options = {};
	      names = undefined;
	    } else if (Array.isArray(ns)) {
	      if (typeof options === 'function') {
	        callback = options;
	        options = {};
	      } else {
	        options = options || {};
	      }
	    } else {
	      callback = options;
	      options = names || {};
	      names = undefined;
	    }
	  }
	  return {
	    names: names,
	    callback: callback,
	    options: options
	  };
	}
	
	var NAME_KEY_SEP = '.';
	
	function getNameKeyStr(name, key) {
	  if (key) {
	    return '' + name + NAME_KEY_SEP + key;
	  }
	  return name;
	}
	
	function getNameKeyObj(str) {
	  var index = str.indexOf(NAME_KEY_SEP);
	  if (str.indexOf(NAME_KEY_SEP) !== -1) {
	    var name = str.slice(0, index);
	    var key = str.slice(index + NAME_KEY_SEP.length);
	    return {
	      name: name,
	      key: key
	    };
	  }
	  return {
	    name: str
	  };
	}
	
	function flatFields(fields_, fieldsMeta) {
	  var fields = (0, _extends3["default"])({}, fields_);
	  (0, _keys2["default"])(fields).forEach(function (k) {
	    if (fieldsMeta[k] && fieldsMeta[k].virtual) {
	      var value = fields[k];
	      // flatten
	      for (var k2 in value) {
	        if (value.hasOwnProperty(k2)) {
	          fields[getNameKeyStr(k, k2)] = value[k2];
	        }
	      }
	      delete fields[k];
	    }
	  });
	  return fields;
	}
	
	function flatFieldNames(names) {
	  var ret = {};
	  names.forEach(function (n) {
	    ret[getNameKeyObj(n).name] = 1;
	  });
	  return (0, _keys2["default"])(ret);
	}
	
	function clearVirtualField(name, fields, fieldsMeta) {
	  if (fieldsMeta[name] && fieldsMeta[name].virtual) {
	    /* eslint no-loop-func:0 */
	    (0, _keys2["default"])(fields).forEach(function (ok) {
	      if (getNameKeyObj(ok).name === name) {
	        delete fields[ok];
	      }
	    });
	  }
	}

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(542);
	
	var _validator = __webpack_require__(543);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _messages2 = __webpack_require__(565);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}
	
	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : (0, _typeof3['default'])(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;
	
	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];
	
	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};
	
	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }
	
	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }
	
	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = (0, _extends3['default'])({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = (0, _extends3['default'])({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof3['default'])(rule.fields) === 'object' || (0, _typeof3['default'])(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return (0, _extends3['default'])({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }
	
	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }
	
	        errors = errors.map((0, _util.complementError)(rule));
	
	        if (options.first && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else if (options.error) {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            } else {
	              errors = [];
	            }
	            return doIt(errors);
	          }
	
	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = (0, _extends3['default'])({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }
	
	      var res = rule.validator(rule, data.value, cb, data.source, options);
	      if (res && res.then) {
	        res.then(function () {
	          return cb();
	        }, function (e) {
	          return cb(e);
	        });
	      }
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2['default'].required;
	    }
	    return _validator2['default'][this.getType(rule)] || false;
	  }
	};
	
	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2['default'][type] = validator;
	};
	
	Schema.messages = _messages2.messages;
	
	exports['default'] = Schema;
	module.exports = exports['default'];

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.warning = undefined;
	
	var _extends2 = __webpack_require__(424);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var formatRegExp = /%[sdj%]/g;
	
	var warning = exports.warning = function warning() {};
	
	// don't print warning message when in production env or node runtime
	if (("development") !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
	  exports.warning = warning = function warning(type, errors) {
	    if (typeof console !== 'undefined' && console.warn) {
	      if (errors.every(function (e) {
	        return typeof e === 'string';
	      })) {
	        console.warn(type, errors);
	      }
	    }
	  };
	}
	
	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}
	
	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
	}
	
	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}
	
	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}
	
	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;
	
	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }
	
	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}
	
	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;
	
	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }
	
	  next([]);
	}
	
	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}
	
	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}
	
	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}
	
	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && (0, _typeof3['default'])(target[s]) === 'object') {
	          target[s] = (0, _extends3['default'])({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _string = __webpack_require__(544);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _method = __webpack_require__(552);
	
	var _method2 = _interopRequireDefault(_method);
	
	var _number = __webpack_require__(553);
	
	var _number2 = _interopRequireDefault(_number);
	
	var _boolean = __webpack_require__(554);
	
	var _boolean2 = _interopRequireDefault(_boolean);
	
	var _regexp = __webpack_require__(555);
	
	var _regexp2 = _interopRequireDefault(_regexp);
	
	var _integer = __webpack_require__(556);
	
	var _integer2 = _interopRequireDefault(_integer);
	
	var _float = __webpack_require__(557);
	
	var _float2 = _interopRequireDefault(_float);
	
	var _array = __webpack_require__(558);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _object = __webpack_require__(559);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _enum = __webpack_require__(560);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(561);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	var _date = __webpack_require__(562);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _required = __webpack_require__(563);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _type = __webpack_require__(564);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  string: _string2['default'],
	  method: _method2['default'],
	  number: _number2['default'],
	  "boolean": _boolean2['default'],
	  regexp: _regexp2['default'],
	  integer: _integer2['default'],
	  "float": _float2['default'],
	  array: _array2['default'],
	  object: _object2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default'],
	  date: _date2['default'],
	  url: _type2['default'],
	  hex: _type2['default'],
	  email: _type2['default'],
	  required: _required2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	      _rule2['default'].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2['default'].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = string;
	module.exports = exports['default'];

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _required = __webpack_require__(546);
	
	var _required2 = _interopRequireDefault(_required);
	
	var _whitespace = __webpack_require__(547);
	
	var _whitespace2 = _interopRequireDefault(_whitespace);
	
	var _type = __webpack_require__(548);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _range = __webpack_require__(549);
	
	var _range2 = _interopRequireDefault(_range);
	
	var _enum = __webpack_require__(550);
	
	var _enum2 = _interopRequireDefault(_enum);
	
	var _pattern = __webpack_require__(551);
	
	var _pattern2 = _interopRequireDefault(_pattern);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  required: _required2['default'],
	  whitespace: _whitespace2['default'],
	  type: _type2['default'],
	  range: _range2['default'],
	  'enum': _enum2['default'],
	  pattern: _pattern2['default']
	};
	module.exports = exports['default'];

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}
	
	exports['default'] = whitespace;
	module.exports = exports['default'];

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	var _required = __webpack_require__(546);
	
	var _required2 = _interopRequireDefault(_required);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint max-len:0 */
	
	var pattern = {
	  // http://emailregex.com/
	  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};
	
	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  "float": function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};
	
	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2['default'])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}
	
	exports['default'] = range;
	module.exports = exports['default'];

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var ENUM = 'enum';
	
	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern) {
	    if (rule.pattern instanceof RegExp) {
	      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
	      // flag is accidentally set to `true`, which in a validation scenario
	      // is not necessary and the result might be misleading
	      rule.pattern.lastIndex = 0;
	      if (!rule.pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    } else if (typeof rule.pattern === 'string') {
	      var _pattern = new RegExp(rule.pattern);
	      if (!_pattern.test(value)) {
	        errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	      }
	    }
	  }
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = method;
	module.exports = exports['default'];

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = number;
	module.exports = exports['default'];

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(542);
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = boolean;
	module.exports = exports['default'];

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = regexp;
	module.exports = exports['default'];

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = integer;
	module.exports = exports['default'];

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = floatFn;
	module.exports = exports['default'];

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      _rule2['default'].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = array;
	module.exports = exports['default'];

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = object;
	module.exports = exports['default'];

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ENUM = 'enum';
	
	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2['default'][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = enumerable;
	module.exports = exports['default'];

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2['default'].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = pattern;
	module.exports = exports['default'];

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2['default'].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = date;
	module.exports = exports['default'];

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(318);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value);
	  _rule2['default'].required(rule, value, source, errors, options, type);
	  callback(errors);
	}
	
	exports['default'] = required;
	module.exports = exports['default'];

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rule = __webpack_require__(545);
	
	var _rule2 = _interopRequireDefault(_rule);
	
	var _util = __webpack_require__(542);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2['default'].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2['default'].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}
	
	exports['default'] = type;
	module.exports = exports['default'];

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    'default': 'Validation error on field %s',
	    required: '%s is required',
	    'enum': '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      "boolean": '%s is not a %s',
	      integer: '%s is not an %s',
	      "float": '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}
	
	var messages = exports.messages = newMessages();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mixin = undefined;
	
	var _createBaseForm = __webpack_require__(534);
	
	var _createBaseForm2 = _interopRequireDefault(_createBaseForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var mixin = exports.mixin = {
	  getForm: function getForm() {
	    return {
	      getFieldsValue: this.getFieldsValue,
	      getFieldValue: this.getFieldValue,
	      getFieldInstance: this.getFieldInstance,
	      setFieldsValue: this.setFieldsValue,
	      setFields: this.setFields,
	      setFieldsInitialValue: this.setFieldsInitialValue,
	      getFieldProps: this.getFieldProps,
	      getFieldError: this.getFieldError,
	      isFieldValidating: this.isFieldValidating,
	      isFieldsValidating: this.isFieldsValidating,
	      isSubmitting: this.isSubmitting,
	      submit: this.submit,
	      validateFields: this.validateFields,
	      resetFields: this.resetFields
	    };
	  }
	};
	
	function createForm(options) {
	  return (0, _createBaseForm2["default"])(options, [mixin]);
	}
	
	exports["default"] = createForm;

/***/ }),

/***/ 567:
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
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(568);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _object = __webpack_require__(495);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _warning = __webpack_require__(413);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Form = (_temp = _class = function (_React$Component) {
	  _inherits(Form, _React$Component);
	
	  function Form(props) {
	    _classCallCheck(this, Form);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    (0, _warning2["default"])(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
	    return _this;
	  }
	
	  Form.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
	  };
	
	  Form.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        className = _props.className,
	        inline = _props.inline,
	        horizontal = _props.horizontal;
	
	    var formClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, '' + prefixCls, true), _defineProperty(_classNames, prefixCls + '-horizontal', horizontal), _defineProperty(_classNames, prefixCls + '-inline', inline), _defineProperty(_classNames, className, !!className), _classNames));
	
	    var formProps = (0, _object2["default"])(this.props, ['prefixCls', 'className', 'inline', 'horizontal', 'form']);
	
	    return _react2["default"].createElement('form', _extends({}, formProps, { className: formClassName }));
	  };
	
	  return Form;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-form',
	  onSubmit: function onSubmit(e) {
	    e.preventDefault();
	  }
	}, _class.propTypes = {
	  prefixCls: _react2["default"].PropTypes.string,
	  horizontal: _react2["default"].PropTypes.bool,
	  inline: _react2["default"].PropTypes.bool,
	  children: _react2["default"].PropTypes.any,
	  onSubmit: _react2["default"].PropTypes.func
	}, _temp);
	exports["default"] = Form;
	module.exports = exports['default'];

/***/ }),

/***/ 570:
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
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAddonsPureRenderMixin = __webpack_require__(568);
	
	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);
	
	var _row = __webpack_require__(571);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _col = __webpack_require__(575);
	
	var _col2 = _interopRequireDefault(_col);
	
	var _constants = __webpack_require__(576);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var FormItem = (_temp = _class = function (_React$Component) {
	  _inherits(FormItem, _React$Component);
	
	  function FormItem() {
	    _classCallCheck(this, FormItem);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  FormItem.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
	  };
	
	  FormItem.prototype.getHelpMsg = function getHelpMsg() {
	    var context = this.context;
	    var props = this.props;
	    if (props.help === undefined && context.form) {
	      return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
	    }
	
	    return props.help;
	  };
	
	  FormItem.prototype.getOnlyControl = function getOnlyControl() {
	    var children = _react2["default"].Children.toArray(this.props.children);
	    var child = children.filter(function (c) {
	      return c.props && _constants.FIELD_META_PROP in c.props;
	    })[0];
	    return child !== undefined ? child : null;
	  };
	
	  FormItem.prototype.getChildProp = function getChildProp(prop) {
	    var child = this.getOnlyControl();
	    return child && child.props && child.props[prop];
	  };
	
	  FormItem.prototype.getId = function getId() {
	    return this.getChildProp('id');
	  };
	
	  FormItem.prototype.getMeta = function getMeta() {
	    return this.getChildProp(_constants.FIELD_META_PROP);
	  };
	
	  FormItem.prototype.renderHelp = function renderHelp() {
	    var prefixCls = this.props.prefixCls;
	    var help = this.getHelpMsg();
	    return help ? _react2["default"].createElement(
	      'div',
	      { className: prefixCls + '-explain', key: 'help' },
	      help
	    ) : null;
	  };
	
	  FormItem.prototype.renderExtra = function renderExtra() {
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        extra = _props.extra;
	
	    return extra ? _react2["default"].createElement(
	      'span',
	      { className: prefixCls + '-extra' },
	      extra
	    ) : null;
	  };
	
	  FormItem.prototype.getValidateStatus = function getValidateStatus() {
	    var _context$form = this.context.form,
	        isFieldValidating = _context$form.isFieldValidating,
	        getFieldError = _context$form.getFieldError,
	        getFieldValue = _context$form.getFieldValue;
	
	    var field = this.getId();
	    if (!field) {
	      return '';
	    }
	    if (isFieldValidating(field)) {
	      return 'validating';
	    } else if (!!getFieldError(field)) {
	      return 'error';
	    } else if (getFieldValue(field) !== undefined) {
	      return 'success';
	    }
	    return '';
	  };
	
	  FormItem.prototype.renderValidateWrapper = function renderValidateWrapper(c1, c2, c3) {
	    var classes = '';
	    var form = this.context.form;
	    var props = this.props;
	    var validateStatus = props.validateStatus === undefined && form ? this.getValidateStatus() : props.validateStatus;
	
	    if (validateStatus) {
	      classes = (0, _classnames2["default"])({
	        'has-feedback': props.hasFeedback,
	        'has-success': validateStatus === 'success',
	        'has-warning': validateStatus === 'warning',
	        'has-error': validateStatus === 'error',
	        'is-validating': validateStatus === 'validating'
	      });
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: this.props.prefixCls + '-item-control ' + classes },
	      c1,
	      c2,
	      c3
	    );
	  };
	
	  FormItem.prototype.renderWrapper = function renderWrapper(children) {
	    var wrapperCol = this.props.wrapperCol;
	    return _react2["default"].createElement(
	      _col2["default"],
	      _extends({}, wrapperCol, { key: 'wrapper' }),
	      children
	    );
	  };
	
	  FormItem.prototype.isRequired = function isRequired() {
	    if (this.context.form) {
	      var meta = this.getMeta() || {};
	      var validate = meta.validate || [];
	
	      return validate.filter(function (item) {
	        return !!item.rules;
	      }).some(function (item) {
	        return item.rules.some(function (rule) {
	          return rule.required;
	        });
	      });
	    }
	    return false;
	  };
	
	  FormItem.prototype.renderLabel = function renderLabel() {
	    var props = this.props;
	    var labelCol = props.labelCol;
	    var required = props.required === undefined ? this.isRequired() : props.required;
	
	    var className = (0, _classnames2["default"])(_defineProperty({}, props.prefixCls + '-item-required', required));
	
	    // remove user input colon
	    var label = props.label;
	    if (typeof label === 'string' && label.trim() !== '') {
	      label = props.label.replace(/[：|:]\s*$/, '');
	    }
	
	    return props.label ? _react2["default"].createElement(
	      _col2["default"],
	      _extends({}, labelCol, { key: 'label', className: props.prefixCls + '-item-label' }),
	      _react2["default"].createElement(
	        'label',
	        { htmlFor: props.id || this.getId(), className: className },
	        label
	      )
	    ) : null;
	  };
	
	  FormItem.prototype.renderChildren = function renderChildren() {
	    var props = this.props;
	    var children = _react2["default"].Children.map(props.children, function (child) {
	      if (child && typeof child.type === 'function' && !child.props.size) {
	        return _react2["default"].cloneElement(child, { size: 'large' });
	      }
	      return child;
	    });
	    return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
	  };
	
	  FormItem.prototype.renderFormItem = function renderFormItem(children) {
	    var _itemClassName;
	
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var style = props.style;
	    var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, prefixCls + '-item', true), _defineProperty(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg()), _defineProperty(_itemClassName, '' + props.className, !!props.className), _itemClassName);
	
	    return _react2["default"].createElement(
	      _row2["default"],
	      { className: (0, _classnames2["default"])(itemClassName), style: style },
	      children
	    );
	  };
	
	  FormItem.prototype.render = function render() {
	    var children = this.renderChildren();
	    return this.renderFormItem(children);
	  };
	
	  return FormItem;
	}(_react2["default"].Component), _class.defaultProps = {
	  hasFeedback: false,
	  prefixCls: 'ant-form'
	}, _class.propTypes = {
	  prefixCls: _react2["default"].PropTypes.string,
	  label: _react2["default"].PropTypes.node,
	  labelCol: _react2["default"].PropTypes.object,
	  help: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.node, _react2["default"].PropTypes.bool]),
	  validateStatus: _react2["default"].PropTypes.oneOf(['', 'success', 'warning', 'error', 'validating']),
	  hasFeedback: _react2["default"].PropTypes.bool,
	  wrapperCol: _react2["default"].PropTypes.object,
	  className: _react2["default"].PropTypes.string,
	  id: _react2["default"].PropTypes.string,
	  children: _react2["default"].PropTypes.node
	}, _class.contextTypes = {
	  form: _react2["default"].PropTypes.object
	}, _temp);
	exports["default"] = FormItem;
	module.exports = exports['default'];

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _layout = __webpack_require__(572);
	
	exports["default"] = _layout.Row;
	module.exports = exports['default'];

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Col = exports.Row = undefined;
	
	var _row = __webpack_require__(573);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _col = __webpack_require__(574);
	
	var _col2 = _interopRequireDefault(_col);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Row = _row2["default"];
	exports.Col = _col2["default"];

/***/ }),

/***/ 573:
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
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Row = (_temp = _class = function (_React$Component) {
	  _inherits(Row, _React$Component);
	
	  function Row() {
	    _classCallCheck(this, Row);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Row.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        type = _props.type,
	        justify = _props.justify,
	        align = _props.align,
	        className = _props.className,
	        gutter = _props.gutter,
	        style = _props.style,
	        children = _props.children,
	        others = _objectWithoutProperties(_props, ['type', 'justify', 'align', 'className', 'gutter', 'style', 'children']);
	
	    var classes = (0, _classnames2["default"])((_classNames = {
	      'ant-row': !type
	    }, _defineProperty(_classNames, 'ant-row-' + type, type), _defineProperty(_classNames, 'ant-row-' + type + '-' + justify, justify), _defineProperty(_classNames, 'ant-row-' + type + '-' + align, align), _defineProperty(_classNames, className, className), _classNames));
	    var rowStyle = gutter > 0 ? _extends({
	      marginLeft: gutter / -2,
	      marginRight: gutter / -2
	    }, style) : style;
	    var cols = _react.Children.map(children, function (col) {
	      if (!col) {
	        return null;
	      }
	      if (col.props) {
	        return (0, _react.cloneElement)(col, {
	          style: gutter > 0 ? _extends({
	            paddingLeft: gutter / 2,
	            paddingRight: gutter / 2
	          }, col.props.style) : col.props.style
	        });
	      }
	      return col;
	    });
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, { className: classes, style: rowStyle }),
	      cols
	    );
	  };
	
	  return Row;
	}(_react2["default"].Component), _class.defaultProps = {
	  gutter: 0
	}, _class.propTypes = {
	  type: _react2["default"].PropTypes.string,
	  align: _react2["default"].PropTypes.string,
	  justify: _react2["default"].PropTypes.string,
	  className: _react2["default"].PropTypes.string,
	  children: _react2["default"].PropTypes.node,
	  gutter: _react2["default"].PropTypes.number
	}, _temp);
	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports["default"] = Col;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stringOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);
	var objectOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.number]);
	
	function Col(props) {
	  var _extends3;
	
	  var span = props.span,
	      order = props.order,
	      offset = props.offset,
	      push = props.push,
	      pull = props.pull,
	      className = props.className,
	      children = props.children,
	      others = _objectWithoutProperties(props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children']);
	
	  var sizeClassObj = {};
	  ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
	    var _extends2;
	
	    var sizeProps = {};
	    if (typeof props[size] === 'number') {
	      sizeProps.span = props[size];
	    } else if (_typeof(props[size]) === 'object') {
	      sizeProps = props[size] || {};
	    }
	    delete others[size];
	    sizeClassObj = _extends({}, sizeClassObj, (_extends2 = {}, _defineProperty(_extends2, 'ant-col-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), _defineProperty(_extends2, 'ant-col-' + size + '-order-' + sizeProps.order, sizeProps.order), _defineProperty(_extends2, 'ant-col-' + size + '-offset-' + sizeProps.offset, sizeProps.offset), _defineProperty(_extends2, 'ant-col-' + size + '-push-' + sizeProps.push, sizeProps.push), _defineProperty(_extends2, 'ant-col-' + size + '-pull-' + sizeProps.pull, sizeProps.pull), _extends2));
	  });
	  var classes = (0, _classnames2["default"])(_extends((_extends3 = {}, _defineProperty(_extends3, 'ant-col-' + span, span !== undefined), _defineProperty(_extends3, 'ant-col-order-' + order, order), _defineProperty(_extends3, 'ant-col-offset-' + offset, offset), _defineProperty(_extends3, 'ant-col-push-' + push, push), _defineProperty(_extends3, 'ant-col-pull-' + pull, pull), _defineProperty(_extends3, className, !!className), _extends3), sizeClassObj));
	
	  return _react2["default"].createElement(
	    'div',
	    _extends({}, others, { className: classes }),
	    children
	  );
	}
	
	Col.propTypes = {
	  span: stringOrNumber,
	  order: stringOrNumber,
	  offset: stringOrNumber,
	  push: stringOrNumber,
	  pull: stringOrNumber,
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  xs: objectOrNumber,
	  sm: objectOrNumber,
	  md: objectOrNumber,
	  lg: objectOrNumber
	};
	module.exports = exports['default'];

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _layout = __webpack_require__(572);
	
	exports["default"] = _layout.Col;
	module.exports = exports['default'];

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FIELD_META_PROP = exports.FIELD_META_PROP = 'data-__meta';

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var ValueMixin = {
	  setValue: function setValue(field, e) {
	    var v = e;
	    var target = e && e.target;
	    if (target) {
	      if (('' + target.nodeName).toLowerCase() === 'input' && target.type === 'checkbox') {
	        v = target.checked;
	      } else {
	        v = e.target.value;
	      }
	    }
	    var newFormData = {};
	    newFormData[field] = v;
	    this.setState({
	      formData: _extends({}, this.state.formData, newFormData)
	    });
	  }
	};
	
	exports["default"] = ValueMixin;
	module.exports = exports['default'];

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(585);
	
	__webpack_require__(586);

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(587);

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _affix = __webpack_require__(412);
	
	var _affix2 = _interopRequireDefault(_affix);
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _alert = __webpack_require__(823);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _input = __webpack_require__(492);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _message2 = __webpack_require__(500);
	
	var _message3 = _interopRequireDefault(_message2);
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _select = __webpack_require__(505);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _form = __webpack_require__(532);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(473);
	
	__webpack_require__(401);
	
	__webpack_require__(824);
	
	__webpack_require__(578);
	
	__webpack_require__(580);
	
	__webpack_require__(398);
	
	__webpack_require__(582);
	
	__webpack_require__(584);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(662);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _dic = __webpack_require__(588);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _topPath = __webpack_require__(487);
	
	var _topPath2 = _interopRequireDefault(_topPath);
	
	var _layout = __webpack_require__(480);
	
	var _imageUploadOnly = __webpack_require__(826);
	
	var _imageUploadOnly2 = _interopRequireDefault(_imageUploadOnly);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _plateNumInput = __webpack_require__(830);
	
	var _plateNumInput2 = _interopRequireDefault(_plateNumInput);
	
	var _dynamicFormItem = __webpack_require__(832);
	
	var _dynamicFormItem2 = _interopRequireDefault(_dynamicFormItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _form2["default"].Item;
	var createForm = _form2["default"].create;
	var Option = _select2["default"].Option;
	
	
	var saveHumanUrl = {
	    'add': '/control-web/person/savePersonInfo',
	    'edit': '/control-web/person/updatePersonInfo'
	};
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            scrollTarget: null
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'getScrollTarget',
	        value: function getScrollTarget(scrollTarget) {
	            this.setState({
	                scrollTarget: scrollTarget
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props$routeParams = this.props.routeParams,
	                libId = _props$routeParams.libId,
	                libName = _props$routeParams.libName,
	                _props$routeParams$id = _props$routeParams.id,
	                id = _props$routeParams$id === undefined ? '' : _props$routeParams$id;
	
	            var backUrl = '#nameListLib/' + libId + '/' + libName;
	            return _react2["default"].createElement(
	                'div',
	                { className: 'faceListLib-handle-lib' },
	                _react2["default"].createElement(
	                    _layout.ContentLayoutNorth,
	                    { height: 49 },
	                    _react2["default"].createElement(_topPath2["default"], { backUrl: backUrl, list: ['名单库管理', libName, false ? '查看人员资料' : id ? '编辑人员资料' : '新建人员资料'] })
	                ),
	                _react2["default"].createElement(
	                    _layout.ContentLayoutCenter,
	                    { navHeight: 50, refCallback: this.getScrollTarget.bind(this) },
	                    _react2["default"].createElement(HumanForm, { backUrl: backUrl, target: this.state.scrollTarget, libId: libId, id: id })
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	var HumanForm = function (_React$Component2) {
	    _inherits(HumanForm, _React$Component2);
	
	    function HumanForm(props) {
	        _classCallCheck(this, HumanForm);
	
	        var _this2 = _possibleConstructorReturn(this, (HumanForm.__proto__ || Object.getPrototypeOf(HumanForm)).call(this, props));
	
	        var id = props.id;
	        var humanInfo = id ? JSON.parse(sessionStorage.getItem('humanInfo' + id)) : {};
	        var faceUrl = humanInfo.faceUrl,
	            macAddress = humanInfo.macAddress,
	            rfId = humanInfo.rfId,
	            plateNum = humanInfo.plateNum;
	
	
	        _this2.uploadList = _this2.editImg = faceUrl ? {
	            bkgPic: faceUrl
	        } : [];
	
	        _this2.editFaceUrl = faceUrl ? faceUrl : null;
	
	        setTimeout(function () {
	            _this2.editImg = null;
	        }, 1000); //不置空 每次render都会有不合理提示
	
	        _this2.state = _extends({
	            target: null
	        }, humanInfo, {
	            mac: {
	                uuid: 0,
	                keys: [0]
	            },
	            rfid: {
	                uuid: 0,
	                keys: [0]
	            },
	            plateNum: {
	                uuid: 0,
	                keys: [0]
	            }
	        });
	        _this2.id = id;
	        return _this2;
	    }
	
	    _createClass(HumanForm, [{
	        key: 'initFieldKeys',
	        value: function initFieldKeys(values, type) {
	            var _this3 = this;
	
	            if (values) {
	                var arr = values.split(',');
	                var uuid = arr.length;
	                var keys = arr.map(function (value, index) {
	                    return index;
	                });
	                arr.forEach(function (value, index) {
	                    _this3.props.form.setFieldsValue(_defineProperty({}, '' + type + index, value));
	                });
	                return {
	                    uuid: uuid,
	                    keys: keys
	                };
	            } else {
	                return {
	                    uuid: 0,
	                    keys: [0]
	                };
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var id = this.id,
	                props = void 0;
	            var humanInfo = id ? JSON.parse(sessionStorage.getItem('humanInfo' + id)) : {};
	            var faceUrl = humanInfo.faceUrl,
	                macAddress = humanInfo.macAddress,
	                rfId = humanInfo.rfId,
	                plateNum = humanInfo.plateNum;
	
	
	            this.setState({
	                mac: this.initFieldKeys(macAddress, 'mac'),
	                rfid: this.initFieldKeys(rfId, 'rfid'),
	                plateNum: this.initFieldKeys(plateNum, 'plateNum')
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.target !== this.props.target) {
	                this.setState({
	                    target: nextProps.target
	                });
	            }
	        }
	    }, {
	        key: 'handleBack',
	        value: function handleBack(e) {
	            e.preventDefault();
	            window.location.hash = this.props.backUrl;
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(values) {
	            var _this4 = this;
	
	            var state = this.state,
	                props = this.props;
	
	
	            props.form.validateFields(function (errors, values) {
	                if (!errors) {
	                    var requestJSON = _extends({}, values, {
	                        macAddress: _this4.getFieldValues(values, 'mac').join(','),
	                        plateNum: _this4.getFieldValues(values, 'plateNum').join(','),
	                        rfId: _this4.getFieldValues(values, 'rfid').join(','),
	                        libId: props.libId
	                    });
	                    if (!(_this4.uploadList.length > 0 || requestJSON.macAddress || requestJSON.plateNum || requestJSON.rfId)) {
	                        return _modal2["default"].warning({
	                            title: '提示',
	                            content: '人脸照片、车牌号、MAC、RFID必须输入一项，才能保存'
	                        });
	                    }
	                    if (_this4.id) {
	                        requestJSON.id = _this4.id;
	                    }
	                    /*if (!(this.id && this.uploadList[0].bkgPic === this.editFaceUrl)) {
	                        requestJSON.faceUrl = this.uploadList[0].bkgPic;
	                    }*/
	                    if (_this4.uploadList.length) {
	                        requestJSON.faceUrl = _this4.uploadList[0].bkgPic;
	                    }
	                    console.log(requestJSON);
	                    _message3["default"].loading('正在加载，请稍候...', 0);
	                    _http2["default"].post(saveHumanUrl[_this4.id ? 'edit' : 'add'], requestJSON).then(function (data) {
	                        _modal2["default"].success({
	                            title: '成功',
	                            content: '操作成功'
	                        });
	                        window.location.hash = _this4.props.backUrl;
	                    })["catch"](function (e) {
	                        return _http2["default"].showError(e);
	                    }).then(function (e) {
	                        return _message3["default"].destroy();
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'getFieldValues',
	        value: function getFieldValues(values, key) {
	            var reg = new RegExp("^" + key + "\\d+$");
	            var keys = Object.keys(values).filter(function (field) {
	                return reg.test(field);
	            });
	            return keys.map(function (key) {
	                return values[key];
	            });
	        }
	    }, {
	        key: 'faceImgUpload',
	        value: function faceImgUpload(list) {
	            this.uploadList = list;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(type, k) {
	            var obj = this.state[type];
	            obj.keys = obj.keys.filter(function (key) {
	                return key !== k;
	            });
	            this.setState(_defineProperty({}, type, obj));
	        }
	    }, {
	        key: 'add',
	        value: function add(type) {
	            var obj = this.state[type];
	            obj.uuid++;
	            obj.keys = obj.keys.concat(obj.uuid);
	            this.setState(_defineProperty({}, type, obj));
	        }
	    }, {
	        key: 'renderFormItem',
	        value: function renderFormItem(type, name) {
	            var _this5 = this;
	
	            var getFieldProps = this.props.form.getFieldProps;
	
	            var keys = this.state[type].keys;
	            if (type !== "plateNum") {
	                return keys.map(function (k) {
	                    return _react2["default"].createElement(
	                        FormItem,
	                        { label: name, key: k },
	                        _react2["default"].createElement(_input2["default"], _extends({ style: { width: 340 } }, getFieldProps('' + type + k, {
	                            rules: [_dic.RULE_NOTSUPPORTED, _dic.RULE_LT32LETTERS]
	                        }))),
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { marginLeft: 16 } },
	                            keys.slice(-1)[0] === k && _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-circle-add', style: { marginRight: 8 }, onClick: function onClick() {
	                                    return _this5.add(type);
	                                } }),
	                            keys.length !== 1 && _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-circle-minus', onClick: function onClick() {
	                                    return _this5.remove(type, k);
	                                } })
	                        )
	                    );
	                });
	            } else {
	                return keys.map(function (k) {
	                    return _react2["default"].createElement(
	                        _plateNumInput2["default"],
	                        {
	                            key: k,
	                            formRef: _this5.props.form,
	                            width: 340,
	                            field: '' + type + k,
	                            fieldName: name
	                        },
	                        _react2["default"].createElement(
	                            'span',
	                            { style: { marginLeft: 16, position: 'absolute', left: 340, top: 0 } },
	                            keys.slice(-1)[0] === k && _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-circle-add', style: { marginRight: 8 }, onClick: function onClick() {
	                                    return _this5.add(type);
	                                } }),
	                            keys.length !== 1 && _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-circle-minus', onClick: function onClick() {
	                                    return _this5.remove(type, k);
	                                } })
	                        )
	                    );
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var state = this.state,
	                props = this.props,
	                editImg = this.editImg;
	            var _props$form = props.form,
	                getFieldProps = _props$form.getFieldProps,
	                getFieldsValue = _props$form.getFieldsValue,
	                getFieldValue = _props$form.getFieldValue;
	            var target = state.target;
	
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'faceListHuman-handle-human' },
	                _react2["default"].createElement(_alert2["default"], { message: '\u4EBA\u8138\u7167\u7247\u3001\u8F66\u724C\u53F7\u3001MAC\u3001RFID\u5FC5\u987B\u8F93\u5165\u4E00\u9879\uFF0C\u624D\u80FD\u4FDD\u5B58', type: 'info', showIcon: true, closable: true }),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'ant-form ant-form-horizontal' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'ant-row ant-form-item' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'ant-form-item-label' },
	                            _react2["default"].createElement(
	                                'label',
	                                { className: 'label-title' },
	                                '\u4EBA\u5458\u4FE1\u606F'
	                            )
	                        ),
	                        _react2["default"].createElement('div', { style: { width: 400 } })
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'ant-form ant-form-horizontal' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'ant-row ant-form-item' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'ant-form-item-label' },
	                            _react2["default"].createElement(
	                                'label',
	                                null,
	                                '\u4EBA\u8138\u56FE\u50CF'
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'div',
	                            { style: { width: 400 } },
	                            _react2["default"].createElement(
	                                'div',
	                                { className: 'ant-form-item-control' },
	                                _react2["default"].createElement(_imageUploadOnly2["default"], { type: 'namelist', url: '/control-web/person/picFacePic', max: 1, increase: editImg, onChange: this.faceImgUpload.bind(this) })
	                            )
	                        )
	                    )
	                ),
	                _react2["default"].createElement(
	                    _form2["default"],
	                    { horizontal: true, style: { marginBottom: '78px' } },
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u59D3\u540D' },
	                        _react2["default"].createElement(_input2["default"], _extends({ style: { width: 400 }
	                        }, getFieldProps('personName', {
	                            initialValue: state.personName,
	                            rules: [_dic.RULE_REQUIRED, _dic.RULE_NOTSUPPORTED, _dic.RULE_LT64LETTERS]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u8BC1\u4EF6\u53F7' },
	                        _react2["default"].createElement(_input2["default"], _extends({ placeholder: '\u8BF7\u8F93\u5165\u8BC1\u4EF6\u53F7', title: '\u8BF7\u8F93\u5165\u8BC1\u4EF6\u53F7', style: { width: 400 }
	                        }, getFieldProps('idCard', {
	                            initialValue: state.idCard,
	                            rules: [_dic.RULE_REQUIRED, _dic.RULE_INCORRECTIDCARD]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u4EBA\u5458\u7C7B\u522B' },
	                        _react2["default"].createElement(
	                            _select2["default"],
	                            _extends({ style: { width: 400 }
	                            }, getFieldProps('personType', {
	                                initialValue: state.personType && state.personType + '' || '',
	                                rules: [_dic.RULE_REQUIRED]
	                            })),
	                            _react2["default"].createElement(
	                                Option,
	                                { value: '' },
	                                '\u8BF7\u9009\u62E9'
	                            ),
	                            Object.keys(_dic.PERSON_TYPE).map(function (key) {
	                                return _react2["default"].createElement(
	                                    Option,
	                                    { value: key, key: key },
	                                    _dic.PERSON_TYPE[key]
	                                );
	                            })
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u8054\u7CFB\u5730\u5740' },
	                        _react2["default"].createElement(_input2["default"], _extends({ size: 'default', style: { width: 400 }
	                        }, getFieldProps('contactAddress', {
	                            initialValue: state.contactAddress || '',
	                            rules: [_dic.RULE_NOTSUPPORTED, _dic.RULE_LT64LETTERS]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u624B\u673A\u53F7\u7801' },
	                        _react2["default"].createElement(_input2["default"], _extends({ style: { width: 400 }
	                        }, getFieldProps('phoneNum', {
	                            initialValue: state.phoneNum || '',
	                            rules: [_dic.RULE_NOTSUPPORTED, _dic.RULE_LT64LETTERS]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u5907\u6CE8\u4FE1\u606F', className: 'lib-add-textarea high' },
	                        _react2["default"].createElement(_input2["default"], _extends({ type: 'textarea', style: { width: 400 }, rows: 4, placeholder: '\u4E0D\u8D85\u8FC764\u4E2A\u5B57'
	                        }, getFieldProps('remark', {
	                            initialValue: state.remark || '',
	                            rules: [_dic.RULE_LT64LETTERS, _dic.RULE_NOTSUPPORTED]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'ant-row ant-form-item' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'ant-form-item-label' },
	                            _react2["default"].createElement(
	                                'label',
	                                { className: 'label-title' },
	                                '\u5173\u8054\u4FE1\u606F'
	                            )
	                        ),
	                        _react2["default"].createElement('div', { style: { width: 400 } })
	                    ),
	                    this.renderFormItem('plateNum', '车牌号码'),
	                    this.renderFormItem('mac', 'MAC'),
	                    this.renderFormItem('rfid', 'RFID')
	                ),
	                _react2["default"].createElement(
	                    _affix2["default"],
	                    { offsetBottom: 8 },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: 'button-wrapper-bottom' },
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { type: 'primary', className: 'btn', style: { width: 96 }, key: 'submit', onClick: this.handleSubmit.bind(this) },
	                            '\u4FDD\u5B58'
	                        ),
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { type: 'default', className: 'btn', style: { marginLeft: 10, width: 96 }, key: 'cancel', onClick: this.handleBack.bind(this) },
	                            '\u53D6\u6D88'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return HumanForm;
	}(_react2["default"].Component);
	
	HumanForm = createForm()(HumanForm);
	
	exports["default"] = App;

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;
	
	var _class, _temp;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(157);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAnimate = __webpack_require__(313);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _icon = __webpack_require__(394);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _classnames = __webpack_require__(393);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Alert = (_temp = _class = function (_React$Component) {
	  _inherits(Alert, _React$Component);
	
	  function Alert(props) {
	    _classCallCheck(this, Alert);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleClose = function (e) {
	      e.preventDefault();
	      var dom = _reactDom2["default"].findDOMNode(_this);
	      dom.style.height = dom.offsetHeight + 'px';
	      // Magic code
	      // 重复一次后才能正确设置 height
	      dom.style.height = dom.offsetHeight + 'px';
	
	      _this.setState({
	        closing: false
	      });
	      _this.props.onClose(e);
	    };
	
	    _this.animationEnd = function () {
	      _this.setState({
	        closed: true,
	        closing: true
	      });
	    };
	
	    _this.state = {
	      closing: true,
	      closed: false
	    };
	    return _this;
	  }
	
	  Alert.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        closable = _props.closable,
	        description = _props.description,
	        type = _props.type,
	        prefixCls = _props.prefixCls,
	        message = _props.message,
	        closeText = _props.closeText,
	        showIcon = _props.showIcon;
	
	
	    var iconType = '';
	    switch (type) {
	      case 'success':
	        iconType = 'check-circle';
	        break;
	      case 'info':
	        iconType = 'info-circle';
	        break;
	      case 'error':
	        iconType = 'cross-circle';
	        break;
	      case 'warning':
	        iconType = 'exclamation-circle';
	        break;
	      default:
	        iconType = 'default';
	    }
	
	    // use outline icon in alert with description
	    if (!!description) {
	      iconType += '-o';
	    }
	
	    var alertCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + type, true), _defineProperty(_classNames, prefixCls + '-close', !this.state.closing), _defineProperty(_classNames, prefixCls + '-with-description', !!description), _defineProperty(_classNames, prefixCls + '-no-icon', !showIcon), _classNames));
	
	    // closeable when closeText is assigned
	    if (closeText) {
	      closable = true;
	    }
	
	    return this.state.closed ? null : _react2["default"].createElement(
	      _rcAnimate2["default"],
	      { component: '',
	        showProp: 'data-show',
	        transitionName: prefixCls + '-slide-up',
	        onEnd: this.animationEnd
	      },
	      _react2["default"].createElement(
	        'div',
	        { 'data-show': this.state.closing, className: alertCls },
	        showIcon ? _react2["default"].createElement(_icon2["default"], { className: 'ant-alert-icon', type: iconType }) : null,
	        _react2["default"].createElement(
	          'span',
	          { className: prefixCls + '-message' },
	          message
	        ),
	        _react2["default"].createElement(
	          'span',
	          { className: prefixCls + '-description' },
	          description
	        ),
	        closable ? _react2["default"].createElement(
	          'a',
	          { onClick: this.handleClose, className: prefixCls + '-close-icon' },
	          closeText || _react2["default"].createElement(_icon2["default"], { type: 'cross' })
	        ) : null
	      )
	    );
	  };
	
	  return Alert;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-alert',
	  showIcon: false,
	  onClose: function onClose() {},
	
	  type: 'info'
	}, _temp);
	exports["default"] = Alert;
	module.exports = exports['default'];

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(399);
	
	__webpack_require__(825);

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _message2 = __webpack_require__(500);
	
	var _message3 = _interopRequireDefault(_message2);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	__webpack_require__(580);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(160);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _choose = __webpack_require__(827);
	
	var _choose2 = _interopRequireDefault(_choose);
	
	__webpack_require__(829);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (_temp = _class = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            list: []
	        };
	
	        _this.uuid = 0;
	        _this.display = [0];
	
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var increase = nextProps.increase;
	            var props = this.props;
	            if (increase) {
	                if (this.state.list.length === props.max) {
	                    return _message3["default"].info('不能再添加了');
	                }
	                this.setState({ increase: increase });
	            }
	        }
	    }, {
	        key: 'onChooseChange',
	        value: function onChooseChange(data, index) {
	            var props = this.props;
	            var list = this.state.list;
	            var display = this.display;
	
	            if (index === list.length) {
	                if (display.length < props.max) {
	                    display = [].concat(_toConsumableArray(display), [++this.uuid]);
	                }
	                this.display = display;
	                list = [].concat(_toConsumableArray(list), [data]);
	            } else {
	                list[index] = data;
	            }
	            this.setState({ list: list, increase: null });
	            props.onChange(list);
	        }
	    }, {
	        key: 'onChooseDelete',
	        value: function onChooseDelete(index) {
	            var props = this.props;
	            var list = this.state.list;
	            var display = this.display;
	
	            list.splice(index, 1);
	            display.splice(index, 1);
	            if (list.length === props.max - 1) {
	                display = [].concat(_toConsumableArray(display), [++this.uuid]);
	            }
	            this.display = display;
	
	            this.setState({ list: list, increase: null });
	            props.onChange(list);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var props = this.props,
	                state = this.state,
	                display = this.display;
	
	
	            return _react2["default"].createElement(
	                'ul',
	                { className: 'image-upload-list' },
	                display.map(function (key, index) {
	                    var chooseProps = {
	                        uploadText: '上传照片',
	                        url: props.url,
	                        onChange: function onChange(data) {
	                            return _this2.onChooseChange(data, index);
	                        },
	                        onDelete: function onDelete(e) {
	                            return _this2.onChooseDelete(index);
	                        }
	                    };
	                    if (index === 0) {
	                        chooseProps.remoteImageUrl = props.remoteImageUrl;
	                    } else if (index === state.list.length) {
	                        chooseProps.uploadText = '继续上传';
	                    }
	
	                    if (index === display.length - 1) {
	                        chooseProps.increase = state.increase;
	                    }
	
	                    return _react2["default"].createElement(
	                        'li',
	                        { key: key },
	                        _react2["default"].createElement(_choose2["default"], chooseProps)
	                    );
	                })
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component), _class.defaultProps = {
	    max: 1,
	    onChange: function onChange() {}
	}, _class.propTypes = {
	    type: _propTypes2["default"].string.isRequired,
	    max: _propTypes2["default"].number,
	    onChange: _propTypes2["default"].func,
	    remoteImageUrl: _propTypes2["default"].string
	}, _temp);
	exports["default"] = App;

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp;
	
	__webpack_require__(398);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _error = __webpack_require__(306);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _imageView = __webpack_require__(828);
	
	var _imageView2 = _interopRequireDefault(_imageView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import Detect from './detect';
	
	var allows = /\.(jpg|jpeg|bmp|png)$/i;
	
	var App = (_temp = _class = function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App(props) {
			_classCallCheck(this, App);
	
			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
			_this.state = {
				modal_show: false,
				file_key: 0,
				iList: [],
				manual: false,
				manual_status: 'init',
				upload_status: 'init',
				detect_status: 'init'
	
				//原始图片尺寸
			};_this.image = null;
	
			_this.okText = '确定';
			_this.cancelText = '取消';
	
			//缓存当前状态，点击取消时可以恢复
			_this.cache = null;
	
			_this.manual_status_map = {};
	
			//是否是通过increase增加的
			_this.isIncrease = false;
			return _this;
		}
	
		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var remoteImageUrl = this.props.remoteImageUrl;
				if (remoteImageUrl) {
					this.showModal();
					this.setState({
						bkgPic: remoteImageUrl
					});
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(_ref) {
				var increase = _ref.increase;
	
				var bkgPic = (increase || {}).bkgPic;
				if (bkgPic && !this.state.bkgPic) {
					this.isIncrease = true;
					this.setState({ bkgPic: bkgPic });
					this.props.onChange({ bkgPic: bkgPic, iData: increase.iData });
				}
			}
		}, {
			key: 'hasData',
			value: function hasData() {
				// return this.state.iList.length > 0
				return !!this.state.bkgPic;
			}
		}, {
			key: 'onFileChange',
			value: function onFileChange(e) {
				var _this2 = this;
	
				var file = e.target;
				var matched = file.value.match(allows);
				if (!matched) {
					_modal2["default"].info({
						title: '提示',
						content: '选择文件错误,图片类型必须是(.jpg/.jpeg/.png/.bmp)！'
					});
				} else {
					this.setState({ upload_status: 'pending' });
	
					this.form = file.form;
					this.suffix = matched[1];
					// this.uploadHttpPromise()
					_http2["default"].ajaxSubmit(this.form, {
						url: this.props.url,
						data: {
							suffix: this.suffix
						}
					}).then(function (_ref2) {
						var data = _ref2.data;
	
						// this.showModal()
						_this2.handleUploadResult(data);
					})["catch"](function (e) {
						(0, _error.showError)(e);
						_this2.setState({
							file_key: Date.now()
						});
					}).then(function (e) {
						return _this2.setState({ upload_status: 'done' });
					});
				}
			}
		}, {
			key: 'onLoad',
			value: function onLoad(image) {
				this.image = image;
				if (!this.hasData()) {
					this.detect();
				}
			}
		}, {
			key: 'detect',
			value: function detect() {
				var _this3 = this;
	
				this.setState({ detect_status: 'pending' });
	
				this.detectHttpPromise().then(function (_ref3) {
					var data = _ref3.data;
	
					//检测结果返回之前就关闭了弹窗
					if (!_this3.state.modal_show) return;
	
					_this3.handleDetectResult(data);
				})["catch"](function (e) {
					return (0, _error.showError)(e);
				}).then(function (e) {
					return _this3.setState({ detect_status: 'done' });
				});
			}
		}, {
			key: 'showModal',
			value: function showModal() {
				this.cache = this.state;
	
				this.setState({
					modal_show: true
				});
				this.onModalShow();
			}
		}, {
			key: 'onCancel',
			value: function onCancel() {
				//恢复先前状态
				this.setState(_extends({}, this.cache, {
					upload_status: 'init',
					file_key: Date.now()
				}));
			}
	
			/*在子类中实现*/
		}, {
			key: 'uploadHttpPromise',
			value: function uploadHttpPromise() {}
			/*在子类中实现*/
		}, {
			key: 'detectHttpPromise',
			value: function detectHttpPromise() {}
			/*在子类中实现*/
		}, {
			key: 'handleUploadResult',
			value: function handleUploadResult() {}
			/*在子类中实现*/
		}, {
			key: 'handleDetectResult',
			value: function handleDetectResult() {}
			/*在子类中实现*/
		}, {
			key: 'onOk',
			value: function onOk() {}
			/*在子类中实现*/
		}, {
			key: 'onModalShow',
			value: function onModalShow() {}
			/*在子类中实现*/
		}, {
			key: 'onPreviewMouseDown',
			value: function onPreviewMouseDown() {}
			/*在子类中实现*/
		}, {
			key: 'onPreviewMouseUp',
			value: function onPreviewMouseUp() {}
			/*在子类中实现*/
		}, {
			key: 'onPreviewClick',
			value: function onPreviewClick() {}
			/*在子类中实现*/
		}, {
			key: 'renderThumbnail',
			value: function renderThumbnail() {}
			/*在子类中实现*/
		}, {
			key: 'renderPreviewAddon',
			value: function renderPreviewAddon() {}
			/*在子类中实现*/
		}, {
			key: 'renderManualHelp',
			value: function renderManualHelp() {}
		}, {
			key: 'handleUploadResult',
			value: function handleUploadResult(data) {
				this.setState({
					bkgPic: data.faceUrl
				});
				this.props.onChange({
					bkgPic: data.faceUrl
				});
			}
		}, {
			key: 'renderThumbnail',
			value: function renderThumbnail() {
				var _this4 = this;
	
				var _state = this.state,
				    bkgPic = _state.bkgPic,
				    iList = _state.iList;
	
				var selectedList = iList.filter(function (item) {
					return item.selected;
				});
				if (selectedList.length > 0) {
					return selectedList.map(function (item, index) {
						return _react2["default"].createElement(
							'div',
							{ className: 'image-upload-img-wrapper', key: index },
							_react2["default"].createElement('img', { src: bkgPic, style: makeThumbnail(_this4.image, item) })
						);
					});
				}
				return _react2["default"].createElement(
					'div',
					{ className: 'image-upload-img-wrapper' },
					_react2["default"].createElement('img', { src: bkgPic })
				);
			}
		}, {
			key: 'render',
			value: function render() {
				var props = this.props,
				    state = this.state;
				var modal_show = state.modal_show;
				var upload_status = state.upload_status,
				    detect_status = state.detect_status,
				    manual_status = state.manual_status;
	
	
				return _react2["default"].createElement(
					'div',
					{ className: 'image-upload' },
					this.hasData() || this.isIncrease ? _react2["default"].createElement(
						'div',
						{ className: 'image-upload-img' },
						this.renderThumbnail(),
						_react2["default"].createElement(_icon2["default"], { type: 'close-circle-f', className: 'image-upload-icon-close', onClick: props.onDelete })
					) : _react2["default"].createElement(
						'div',
						{ className: 'image-upload-add' },
						_react2["default"].createElement(
							'p',
							{ className: 'image-upload-add-text' },
							upload_status === 'pending' ? _react2["default"].createElement(_icon2["default"], { type: 'restart' }) : _react2["default"].createElement(_icon2["default"], { type: 'add' })
						),
						_react2["default"].createElement(
							'p',
							{ className: 'image-upload-add-text' },
							upload_status === 'pending' ? '上传中...' : props.uploadText
						),
						_react2["default"].createElement(
							'form',
							{ method: 'post', encType: 'multipart/form-data' },
							_react2["default"].createElement('input', {
								key: state.file_key,
								style: upload_status === 'pending' ? { display: 'none' } : {},
								type: 'file',
								name: 'file',
								onChange: this.onFileChange.bind(this),
								onKeypress: 'return false;',
								className: 'file-transparent',
								title: '\u4E0A\u4F20\u56FE\u7247\uFF08\u53EA\u652F\u6301.jpg/.jpeg/.png/.bmp\u56FE\u7247\uFF09'
							})
						)
					)
				);
			}
		}]);
	
		return App;
	}(_react2["default"].Component), _class.defaultProps = {
		onChange: function onChange() {},
		onDelete: function onDelete() {}
	}, _temp);
	exports["default"] = App;

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

/***/ 829:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _input = __webpack_require__(492);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _dropdown = __webpack_require__(419);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _form = __webpack_require__(532);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(578);
	
	__webpack_require__(475);
	
	__webpack_require__(584);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _layout = __webpack_require__(480);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _addDomEventListener = __webpack_require__(273);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	__webpack_require__(831);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _form2["default"].Item;
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            visible: false,
	            value: props.defaultValue
	        };
	        _this.field = props.field || "plateNum";
	        _this.regionInfo = {
	            "normal": [{
	                "key": "1",
	                "region": "京"
	            }, {
	                "key": "2",
	                "region": "沪"
	            }, {
	                "key": "3",
	                "region": "浙"
	            }, {
	                "key": "4",
	                "region": "苏"
	            }, {
	                "key": "5",
	                "region": "粤"
	            }, {
	                "key": "6",
	                "region": "鲁"
	            }, {
	                "key": "7",
	                "region": "晋"
	            }, {
	                "key": "8",
	                "region": "冀"
	            }, {
	                "key": "9",
	                "region": "豫"
	            }, {
	                "key": "10",
	                "region": "川"
	            }, {
	                "key": "11",
	                "region": "渝"
	            }, {
	                "key": "12",
	                "region": "辽"
	            }, {
	                "key": "13",
	                "region": "吉"
	            }, {
	                "key": "14",
	                "region": "黑"
	            }, {
	                "key": "15",
	                "region": "皖"
	            }, {
	                "key": "16",
	                "region": "鄂"
	            }, {
	                "key": "17",
	                "region": "湘"
	            }, {
	                "key": "18",
	                "region": "赣"
	            }, {
	                "key": "19",
	                "region": "闵"
	            }, {
	                "key": "20",
	                "region": "陕"
	            }, {
	                "key": "21",
	                "region": "甘"
	            }, {
	                "key": "22",
	                "region": "宁"
	            }, {
	                "key": "23",
	                "region": "蒙"
	            }, {
	                "key": "24",
	                "region": "津"
	            }, {
	                "key": "25",
	                "region": "贵"
	            }, {
	                "key": "26",
	                "region": "云"
	            }, {
	                "key": "27",
	                "region": "桂"
	            }, {
	                "key": "28",
	                "region": "琼"
	            }, {
	                "key": "29",
	                "region": "青"
	            }, {
	                "key": "30",
	                "region": "新"
	            }, {
	                "key": "31",
	                "region": "藏"
	            }, {
	                "key": "32",
	                "region": "港"
	            }, {
	                "key": "33",
	                "region": "澳"
	            }, {
	                "key": "34",
	                "region": "台"
	            }],
	            "special": [{
	                "key": "100",
	                "region": "使"
	            }, {
	                "key": "101",
	                "region": "领"
	            }, {
	                "key": "102",
	                "region": "WJ"
	            }, {
	                "key": "103",
	                "region": "学"
	            }, {
	                "key": "104",
	                "region": "警"
	            }, {
	                "key": "105",
	                "region": "消"
	            }]
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            this.eventListener = (0, _addDomEventListener2["default"])(document, 'click', function (_ref) {
	                var nativeEvent = _ref.nativeEvent;
	
	                var target = nativeEvent.target || nativeEvent.srcElement;
	                var nosp = true;
	                for (; target; target = target.parentElement) {
	                    if (target.className.indexOf('region-container') !== -1 || target.className.indexOf('lidaicon-h-angle-sm') !== -1) {
	                        return nosp = false;
	                    }
	                }
	                if (nosp) {
	                    _this2.setState({
	                        visible: false
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.eventListener.remove();
	        }
	    }, {
	        key: 'changePlateState',
	        value: function changePlateState() {
	            var plateNum = this.props.formRef.getFieldValue(this.field);
	            var plateRegion = plateNum.substring(0, 1);
	            var plateLetter = plateNum.substring(1, 2);
	            var otherPlate = plateNum.substring(2);
	            if (plateNum && /[\u4e00-\u9fa5]/.test(plateNum)) {
	                this.setState({
	                    activeRegion: plateRegion
	                });
	            }
	            if (plateLetter && /[A-Z]/.test(plateLetter)) {
	                this.setState({
	                    activeLetter: plateLetter
	                });
	            }
	            if (plateNum && /[\u4e00-\u9fa5]/.test(plateNum) && plateLetter && /[A-Z]/.test(plateLetter)) {
	                this.setState({
	                    otherPlate: otherPlate
	                });
	            }
	        }
	
	        //获取车牌归属地下拉选项
	
	    }, {
	        key: 'changeArrowClick',
	        value: function changeArrowClick() {
	            this.setState(function (prevState) {
	                return {
	                    visible: !prevState.visible
	                };
	            });
	        }
	    }, {
	        key: 'currRegionClick',
	        value: function currRegionClick(currRegion, currKey, type) {
	            if (type == 1) {
	                this.setState({
	                    activeRegion: currRegion,
	                    activeRegionKey: currKey
	                });
	                var plateNum = this.props.formRef.getFieldValue(this.field);
	                if (plateNum == '' || !plateNum) {
	                    this.setFieldsValue(currRegion);
	                } else {
	                    var newStr = '';
	                    if (/[\u4e00-\u9fa5]/.test(plateNum.substr(0, 1))) {
	                        newStr = currRegion + plateNum.substring(1);
	                    } else {
	                        newStr = currRegion + plateNum;
	                    }
	                    this.setFieldsValue(newStr);
	                }
	            } else {
	                this.setState({
	                    visible: false,
	                    activeLetter: currRegion
	                });
	                var _plateNum = this.props.formRef.getFieldValue(this.field);
	                if (_plateNum.length == 1) {
	                    this.setFieldsValue(_plateNum + currRegion);
	                } else {
	                    var _newStr = '';
	                    if (/[A-Z]/.test(_plateNum.substr(1, 1))) {
	                        _newStr = _plateNum.substring(0, 1) + currRegion + _plateNum.substring(2);
	                    } else {
	                        _newStr = _plateNum.substring(0, 1) + currRegion + _plateNum.substring(1);
	                    }
	                    this.setFieldsValue(_newStr);
	                }
	            }
	        }
	    }, {
	        key: 'setFieldsValue',
	        value: function setFieldsValue(value) {
	            this.props.formRef.setFieldsValue(_defineProperty({}, this.field, value));
	            this.props.formRef.validateFields([this.field]);
	        }
	
	        /**检车车牌的合法性 type=01 表示精确匹配车牌， type=02 表示模糊匹配车牌 type=03 *和？号的识别* type=05*和？可以输入，同时支持各种特殊类型的车牌**/
	
	    }, {
	        key: 'checkPlateInfo',
	        value: function checkPlateInfo(rule, value, callback) {
	            if (value && value != "") {
	                if (rule.type == '01') {
	                    //表示整个车牌
	                    var PLATE_INFO_TOTAL = /(^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{4}[a-zA-Z_0-9_\u4e00-\u9fa5]|^WJ\d{7}|[\u4e00-\u9fa5]{0,1}[a-zA-Z][a-zA-Z0-9]{5}[dDfF]|[\u4e00-\u9fa5]{0,1}[a-zA-Z][dDfF][a-zA-Z0-9]{5})$/;
	                    if (!PLATE_INFO_TOTAL.test(value)) {
	                        callback('只允许输入完整车牌，不包括军车车牌,不包含:\&/:*?<|%/');
	                    }
	                } else if (rule.type == '02') {
	                    //表示模糊匹配的车牌
	                    var PLATE_INFO_BUFFER = /^[\u4e00-\u9fa5-\*]{1}[a-zA-Z0-9]{0,6}$/; //先不支持武警，军车等特殊车牌
	                    if (value.length >= 7) {
	                        PLATE_INFO_BUFFER = /^([\u4e00-\u9fa5-\*]{1}[a-zA-Z]{1}[a-zA-Z0-9]{0,5}|[\u4e00-\u9fa5-\*]{0,1}[a-zA-Z][a-zA-Z0-9]{5}[dDfF]|[\u4e00-\u9fa5-\*]{0,1}[a-zA-Z][dDfF][a-zA-Z0-9]{5})$/;
	                    } else {
	                        PLATE_INFO_BUFFER = /^[\u4e00-\u9fa5-\*]{1}[a-zA-Z0-9]{0,6}$/; //先不支持武警，军车等特殊车牌
	                    }
	                    if (!PLATE_INFO_BUFFER.test(value)) {
	                        callback('只允许输入正确的车牌，不包括军车车牌,不包含:\&/:*?<|%/');
	                    }
	                } else if (rule.type == "03") {
	                    var PLATE_INFO = /^[\u4e00-\u9fa5-\*]{1}[\*\?？a-zA-Z]{1}[\*\?？a-zA-Z0-9]{0,5}$/;
	                    if (value.length >= 7) {
	                        PLATE_INFO = /(^[\u4e00-\u9fa5-\*]{1}[\*\?？a-zA-Z]{1}[\*\?？a-zA-Z0-9]{0,5}|[\u4e00-\u9fa5]{0,1}[a-zA-Z][a-zA-Z0-9]{5}[dDfF]|[\u4e00-\u9fa5]{0,1}[a-zA-Z][dDfF][a-zA-Z0-9]{5})$/;
	                    } else {
	                        PLATE_INFO = /^[\u4e00-\u9fa5-\*]{1}[\*\?？a-zA-Z0-9]{0,6}$/;
	                    }
	                    if (!PLATE_INFO.test(value)) {
	                        callback();
	                    }
	                } else if (rule.type == "04") {
	                    //车牌号码只包含*或者?字符
	                    var PLATE_DISPATCHED = /^[\*]{1}[\*\?？]{1}[\*\?？]{0,5}$/;
	                    if (PLATE_DISPATCHED.test(value)) {
	                        callback();
	                    }
	                    if (value.indexOf("*") > -1) {
	                        //表示包含*字符
	                        PLATE_DISPATCHED = /^([\u4e00-\u9fa5-\*]{1}[\*\?？a-zA-Z]{1}[\*\?？a-zA-Z0-9]{0,5}|[\u4e00-\u9fa5-\*]{0,1}[a-zA-Z][a-zA-Z0-9]{5}[dDfF]|[\u4e00-\u9fa5-\*]{0,1}[a-zA-Z][dDfF][a-zA-Z0-9]{5})$/;
	                    } else {
	                        if (value.length < 7) {
	                            callback();
	                        } else {
	                            PLATE_DISPATCHED = /(^[\u4e00-\u9fa5]{1}[\?？a-zA-Z]{1}[\?？a-zA-Z0-9]{5}|[\u4e00-\u9fa5]{0,1}[a-zA-Z][a-zA-Z0-9]{5}[dDfF]|[\u4e00-\u9fa5]{0,1}[a-zA-Z][dDfF][a-zA-Z0-9]{5})$/;
	                        }
	                    }
	                    if (!PLATE_DISPATCHED.test(value)) {
	                        callback();
	                    }
	                } else if (rule.type == '05') {
	                    if (value.length > 1) {
	                        var pre = value.substring(0, 1);
	                        if (pre == '*') {
	                            value = value.substring(1, value.length);
	                        }
	                    }
	
	                    var ALL_TYPE_PLATE = /^((([\u4e00-\u9fa5]{0,1}[\*\?？a-zA-Z0-9]{0,1})|(WJ[\*\?？0-9\u4e00-\u9fa5]{0,2}))[\*\?？a-zA-Z0-9\u4e00-\u9fa5]{0,5}|[\u4e00-\u9fa5]{0,1}[a-zA-Z][a-zA-Z0-9]{5}[dDfF]|[\u4e00-\u9fa5]{0,1}[a-zA-Z][dDfF][a-zA-Z0-9]{5})$/;
	                    if (!ALL_TYPE_PLATE.test(value)) {
	                        callback();
	                    }
	                }
	            }
	            callback();
	        }
	    }, {
	        key: 'commonValidator',
	        value: function commonValidator(rule, value, callback) {
	            if (value) {
	                for (var i = 0; i < value.length; i++) {
	                    var varCode = value.charAt(i);
	                    var C_UN_USE = "：；？’“。《》";
	                    if (rule.reg.indexOf(varCode) > -1) {
	                        callback('不包含:\&/:*?<\>：；？’“。《》');
	                        return false;
	                    }
	                }
	            }
	            callback();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props,
	                state = this.state;
	            var visible = state.visible;
	
	            var plateNumProps = this.props.formRef.getFieldProps(this.field, {
	                rules: [{
	                    validator: this.checkPlateInfo,
	                    type: 2
	                }, {
	                    validator: this.commonValidator,
	                    reg: '/:;&*?"<|\'%>\uFF1A\uFF1B\uFF1F\u2019\u201C\u3002\u300A\u300B'
	                }]
	            });
	
	            var overlay = _react2["default"].createElement(NumPlateRegion, {
	                regionInfo: this.regionInfo,
	                activeRegion: this.state.activeRegion,
	                activeRegionKey: this.state.activeRegionKey,
	                activeLetter: this.state.activeLetter,
	                currRegionClick: this.currRegionClick.bind(this)
	            });
	
	            var selectBefore = _react2["default"].createElement(
	                _dropdown2["default"],
	                { overlay: overlay, visible: visible, trigger: ['click'] },
	                visible ? _react2["default"].createElement(_icon2["default"], { type: 'angle-sm-up', onClick: this.changeArrowClick.bind(this) }) : _react2["default"].createElement(_icon2["default"], { type: 'angle-sm-down', onClick: this.changeArrowClick.bind(this) })
	            );
	
	            return _react2["default"].createElement(
	                FormItem,
	                { label: props.fieldName || "车牌号码" },
	                _react2["default"].createElement(_input2["default"], _extends({ addonBefore: selectBefore, placeholder: '\u8BF7\u8F93\u5165\u8F66\u724C\u53F7\u7801', style: { width: props.width - 31 }, onKeyUp: this.changePlateState.bind(this) }, plateNumProps, { autoComplete: 'off' })),
	                this.props.children
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	var NumPlateRegion = function (_React$Component2) {
	    _inherits(NumPlateRegion, _React$Component2);
	
	    function NumPlateRegion(props) {
	        _classCallCheck(this, NumPlateRegion);
	
	        var _this3 = _possibleConstructorReturn(this, (NumPlateRegion.__proto__ || Object.getPrototypeOf(NumPlateRegion)).call(this, props));
	
	        _this3.state = {
	            hoverRegion: '',
	            contentClass: "region-container"
	        };
	        _this3.currRegionChange = _this3.currRegionChange.bind(_this3);
	        return _this3;
	    }
	
	    _createClass(NumPlateRegion, [{
	        key: 'currRegionChange',
	        value: function currRegionChange(currRegion, currKey, type) {
	            var _this4 = this;
	
	            if (type == 1) {
	                this.props.currRegionClick(currRegion, currKey, 1);
	                this.setState({
	                    contentClass: "region-container show-letter"
	                });
	            } else {
	                this.props.currRegionClick(currRegion, currKey, 2);
	                setTimeout(function () {
	                    _this4.setState({
	                        contentClass: "region-container"
	                    });
	                }, 300);
	            }
	        }
	    }, {
	        key: 'switchRegion',
	        value: function switchRegion() {
	            this.setState({
	                contentClass: "region-container"
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var resultObj = this.props.regionInfo;
	            var normalRegion = (resultObj['normal'] || []).map(function (items) {
	                var active = _this5.props.activeRegion === items.region ? ' active' : '';
	                return _react2["default"].createElement(
	                    'li',
	                    {
	                        key: items.key,
	                        className: active,
	                        onClick: function onClick(e) {
	                            e.stopPropagation();
	                            _this5.currRegionChange(items.region, items.key, 1);
	                        }
	                    },
	                    items.region
	                );
	            });
	            var specialRegion = (resultObj['special'] || []).map(function (items) {
	                var active = _this5.props.activeRegion === items.region ? ' active' : '';
	                return _react2["default"].createElement(
	                    'li',
	                    {
	                        key: items.key,
	                        className: active,
	                        onClick: function onClick(e) {
	                            e.stopPropagation();
	                            _this5.currRegionChange(items.region, '', 1);
	                        }
	                    },
	                    items.region
	                );
	            });
	
	            var letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	
	            return _react2["default"].createElement(
	                'div',
	                { className: this.state.contentClass },
	                _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-arrow-left', onClick: this.switchRegion.bind(this) }),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'all-region' },
	                    '\u6240\u6709\u5730\u533A'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'plate-region' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'all' },
	                        normalRegion
	                    ),
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'special-region' },
	                        specialRegion
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'plate-letter' },
	                    _react2["default"].createElement(
	                        'ul',
	                        { className: 'all' },
	                        letterArr.map(function (item) {
	                            var active = _this5.props.activeLetter === item ? ' active' : '';
	                            return _react2["default"].createElement(
	                                'li',
	                                {
	                                    key: item,
	                                    className: active,
	                                    onClick: function onClick(e) {
	                                        e.stopPropagation();
	                                        _this5.currRegionChange(item, '', 2);
	                                    }
	                                },
	                                item
	                            );
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NumPlateRegion;
	}(_react2["default"].Component);
	
	exports["default"] = App;

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _input = __webpack_require__(492);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _form = __webpack_require__(532);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(578);
	
	__webpack_require__(584);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(833);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FormItem = _form2["default"].Item;
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.uuid = 0;
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'remove',
	        value: function remove(k) {
	            var formRef = this.props.formRef;
	            // can use data-binding to get
	
	            var keys = formRef.getFieldValue('keys');
	            keys = keys.filter(function (key) {
	                return key !== k;
	            });
	            // can use data-binding to set
	            formRef.setFieldsValue({
	                keys: keys
	            });
	        }
	    }, {
	        key: 'add',
	        value: function add() {
	            this.uuid++;
	            var formRef = this.props.formRef;
	            // can use data-binding to get
	
	            var keys = formRef.getFieldValue('keys');
	            keys = keys.concat(this.uuid);
	            // can use data-binding to set
	            // important! notify form to detect changes
	            formRef.setFieldsValue({
	                keys: keys
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props$formRef = this.props.formRef,
	                getFieldProps = _props$formRef.getFieldProps,
	                getFieldValue = _props$formRef.getFieldValue;
	
	            getFieldProps('keys', {
	                initialValue: [0]
	            });
	
	            var formItems = getFieldValue('keys').map(function (k) {
	                return _react2["default"].createElement(
	                    FormItem,
	                    { label: '\u597D\u670B\u53CB' + k + '\uFF1A', key: k },
	                    _react2["default"].createElement(_input2["default"], _extends({ style: { width: 400 } }, getFieldProps('name' + k, {
	                        rules: [{
	                            required: true,
	                            whitespace: true,
	                            message: '你好友的名字捏！'
	                        }]
	                    })))
	                );
	            });
	            return _react2["default"].createElement(
	                'div',
	                null,
	                formItems
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = App;

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=map/17.map