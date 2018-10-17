webpackJsonp([9,39],{

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _input = __webpack_require__(492);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _modal = __webpack_require__(307);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _message2 = __webpack_require__(500);
	
	var _message3 = _interopRequireDefault(_message2);
	
	var _select = __webpack_require__(505);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _form = __webpack_require__(532);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(401);
	
	__webpack_require__(578);
	
	__webpack_require__(398);
	
	__webpack_require__(580);
	
	__webpack_require__(582);
	
	__webpack_require__(584);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _dic = __webpack_require__(588);
	
	var _loader = __webpack_require__(410);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _http = __webpack_require__(277);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _topPath = __webpack_require__(487);
	
	var _topPath2 = _interopRequireDefault(_topPath);
	
	var _layout = __webpack_require__(480);
	
	__webpack_require__(589);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// const AsyncTreeSelect = asyncComponent(a=>require(['components/asyncTree/select'],a));
	var AsyncTreeSelect = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(590)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	});
	var FormItem = _form2["default"].Item;
	var createForm = _form2["default"].create;
	var Option = _select2["default"].Option;
	var handleUrl = {
	    'add': '/control-web/listLibrary/savePersonLib',
	    'edit': '/control-web/listLibrary/updatePersonLib'
	};
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var listLibId = this.props.routeParams ? this.props.routeParams.libId : '';
	            return _react2["default"].createElement(
	                'div',
	                { className: 'faceListLib-handle-lib' },
	                _react2["default"].createElement(
	                    _layout.ContentLayoutNorth,
	                    { height: 49 },
	                    _react2["default"].createElement(_topPath2["default"], { backUrl: '#nameListLib', list: ['名单库管理', listLibId ? '编辑名单库' : '新建名单库'] })
	                ),
	                _react2["default"].createElement(
	                    _layout.ContentLayoutCenter,
	                    null,
	                    _react2["default"].createElement(LibForm, { listLibId: listLibId })
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	var LibForm = function (_React$Component2) {
	    _inherits(LibForm, _React$Component2);
	
	    function LibForm(props) {
	        _classCallCheck(this, LibForm);
	
	        var _this2 = _possibleConstructorReturn(this, (LibForm.__proto__ || Object.getPrototypeOf(LibForm)).call(this, props));
	
	        _this2.listLibId = props.listLibId;
	        var listLibInfo = _this2.listLibId ? JSON.parse(sessionStorage.getItem('libInfo' + props.listLibId)) : {};
	        var _listLibInfo$name = listLibInfo.name,
	            name = _listLibInfo$name === undefined ? '' : _listLibInfo$name,
	            _listLibInfo$isShared = listLibInfo.isShared,
	            isShared = _listLibInfo$isShared === undefined ? '0' : _listLibInfo$isShared,
	            _listLibInfo$multiUse = listLibInfo.multiUserId,
	            multiUserId = _listLibInfo$multiUse === undefined ? '' : _listLibInfo$multiUse,
	            _listLibInfo$multiUse2 = listLibInfo.multiUserName,
	            multiUserName = _listLibInfo$multiUse2 === undefined ? '' : _listLibInfo$multiUse2,
	            _listLibInfo$remark = listLibInfo.remark,
	            remark = _listLibInfo$remark === undefined ? '' : _listLibInfo$remark;
	
	        _this2.handleType = _this2.listLibId ? 'edit' : 'add';
	        _this2.state = {
	            name: name,
	            isShared: String(isShared),
	            multiUserId: multiUserId ? multiUserId == -1 ? [] : multiUserId.split(',') : [],
	            multiUserName: multiUserName ? multiUserName.split(',') : [],
	            remark: remark,
	            isShareList: [],
	            userTree: isShared == '0' ? false : true
	        };
	        return _this2;
	    }
	
	    _createClass(LibForm, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            /*http.get('/system/findDataDict.do?codes=shareFlag')
	            .then(({ data }) => {
	                this.setState({
	                    isShareList: data.shareFlag
	                })
	            })
	            .catch(e => {
	                this.setState({
	                    isShared: ''
	                })
	            })*/
	        }
	    }, {
	        key: 'onUserTreeChange',
	        value: function onUserTreeChange(checkedDataRef) {
	            this.setState({
	                multiUserId: checkedDataRef.map(function (item) {
	                    return item.key;
	                }),
	                multiUserName: checkedDataRef.map(function (item) {
	                    return item.name;
	                })
	            });
	        }
	    }, {
	        key: 'onSharedChange',
	        value: function onSharedChange(value) {
	            this.setState({
	                userTree: !this.state.userTree
	            });
	        }
	    }, {
	        key: 'handleBack',
	        value: function handleBack(e) {
	            e.preventDefault();
	            window.location.hash = '#nameListLib';
	            // this.props.form.setFieldsValue({
	            //     listLibName: '',
	            //     isShared: '0',
	            //     describe: ''
	            // })
	            // this.setState({
	            //     userTree: false,
	            //     multiUserId: [],
	            //     multiUserName: []
	            // })
	        }
	    }, {
	        key: 'handleSubmit',
	        value: function handleSubmit(values) {
	            var _this3 = this;
	
	            this.props.form.validateFields(function (errors, values) {
	                if (!errors) {
	                    /*if (values.isShared == 1) {
	                        const { multiUserId } = this.state;
	                        if (multiUserId.length === 0) {
	                            values.multiUserId = -1;
	                        } else {
	                            values.multiUserId = multiUserId.join(',');
	                        }
	                    }*/
	                    if (_this3.handleType === 'edit') {
	                        values.id = _this3.listLibId;
	                    }
	                    _message3["default"].loading('正在加载，请稍候...');
	                    _http2["default"].post(handleUrl[_this3.handleType], values).then(function (data) {
	                        _modal2["default"].success({
	                            title: '成功',
	                            content: '操作成功'
	                        });
	                        window.location.hash = '#nameListLib';
	                    })["catch"](function (e) {
	                        return _http2["default"].showError(e);
	                    }).then(function (e) {
	                        return _message3["default"].destroy();
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var state = this.state,
	                props = this.props;
	            var getFieldProps = props.form.getFieldProps;
	            var name = state.name,
	                isShared = state.isShared,
	                remark = state.remark,
	                multiUserId = state.multiUserId,
	                multiUserName = state.multiUserName,
	                userTree = state.userTree,
	                isShareList = state.isShareList;
	
	
	            return _react2["default"].createElement(
	                'div',
	                { className: 'handle-lib-form' },
	                _react2["default"].createElement(
	                    _form2["default"],
	                    { horizontal: true },
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u540D\u5355\u5E93\u540D\u79F0' },
	                        _react2["default"].createElement(_input2["default"], _extends({ style: { width: 400 }
	                        }, getFieldProps('name', {
	                            initialValue: name,
	                            rules: [_dic.RULE_REQUIRED, _dic.RULE_LT32LETTERS, _dic.RULE_NOTSUPPORTED]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: '\u5907\u6CE8\u4FE1\u606F', className: 'lib-add-textarea high' },
	                        _react2["default"].createElement(_input2["default"], _extends({ type: 'textarea', style: { width: 400 }, rows: 4, placeholder: '\u4E0D\u8D85\u8FC764\u4E2A\u5B57'
	                        }, getFieldProps('remark', {
	                            initialValue: remark,
	                            rules: [_dic.RULE_LT64LETTERS, _dic.RULE_NOTSUPPORTED]
	                        })))
	                    ),
	                    _react2["default"].createElement(
	                        FormItem,
	                        { label: ' ', className: 'form-btn-section' },
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { type: 'primary', className: 'btn', key: 'submit', onClick: this.handleSubmit.bind(this) },
	                            '\u4FDD\u5B58'
	                        ),
	                        _react2["default"].createElement(
	                            _button2["default"],
	                            { type: 'default', className: 'btn', style: { marginLeft: 10 }, key: 'cancel', onClick: this.handleBack.bind(this) },
	                            '\u53D6\u6D88'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return LibForm;
	}(_react2["default"].Component);
	
	LibForm = createForm()(LibForm);
	
	exports["default"] = App;
	
	
	function userFilter(_ref) {
	    var _ref$users = _ref.users,
	        users = _ref$users === undefined ? [] : _ref$users,
	        _ref$childDepts = _ref.childDepts,
	        childDepts = _ref$childDepts === undefined ? [] : _ref$childDepts;
	
	    var arr1 = childDepts ? childDepts.map(function (item) {
	        return {
	            name: item.name,
	            key: item.deptIndexCode,
	            deptIndexCode: item.deptIndexCode,
	            parentIndexCode: item.deptIndexCode,
	            isLeaf: false
	        };
	    }) : [];
	    var arr2 = users ? users.map(function (item) {
	        return {
	            name: item.realName ? item.realName : item.username,
	            key: item.userIndexCode,
	            isLeaf: true
	        };
	    }) : [];
	    return [].concat(_toConsumableArray(arr1), _toConsumableArray(arr2));
	}

/***/ }),

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

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(496);
	var forOwn = __webpack_require__(497);
	
	module.exports = function omit(obj, keys) {
	  if (!isObject(obj)) return {};
	
	  keys = [].concat.apply([], [].slice.call(arguments, 1));
	  var last = keys[keys.length - 1];
	  var res = {}, fn;
	
	  if (typeof last === 'function') {
	    fn = keys.pop();
	  }
	
	  var isFunction = typeof fn === 'function';
	  if (!keys.length && !isFunction) {
	    return obj;
	  }
	
	  forOwn(obj, function(value, key) {
	    if (keys.indexOf(key) === -1) {
	
	      if (!isFunction) {
	        res[key] = value;
	      } else if (fn(value, key, obj)) {
	        res[key] = value;
	      }
	    }
	  });
	  return res;
	};


/***/ }),

/***/ 496:
/***/ (function(module, exports) {

	/*!
	 * is-extendable <https://github.com/jonschlinkert/is-extendable>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isExtendable(val) {
	  return typeof val !== 'undefined' && val !== null
	    && (typeof val === 'object' || typeof val === 'function');
	};


/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var forIn = __webpack_require__(498);
	var hasOwn = Object.prototype.hasOwnProperty;
	
	module.exports = function forOwn(obj, fn, thisArg) {
	  forIn(obj, function(val, key) {
	    if (hasOwn.call(obj, key)) {
	      return fn.call(thisArg, obj[key], key, obj);
	    }
	  });
	};


/***/ }),

/***/ 498:
/***/ (function(module, exports) {

	/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function forIn(obj, fn, thisArg) {
	  for (var key in obj) {
	    if (fn.call(thisArg, obj[key], key, obj) === false) {
	      break;
	    }
	  }
	};


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

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var shallowEqual = __webpack_require__(569);
	
	module.exports = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return (
	      !shallowEqual(this.props, nextProps) ||
	      !shallowEqual(this.state, nextState)
	    );
	  }
	};


/***/ }),

/***/ 569:
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

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

/***/ 589:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=map/9.map