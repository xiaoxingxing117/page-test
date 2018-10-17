webpackJsonp([5,39],{

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dropdown = __webpack_require__(419);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _button = __webpack_require__(391);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(475);
	
	__webpack_require__(401);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _addDomEventListener = __webpack_require__(273);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _loader = __webpack_require__(410);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	__webpack_require__(582);
	
	__webpack_require__(591);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AsyncTree = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(592)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	}); //需要Select的样式
	
	
	var isArray = Array.isArray;
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        var _props$checkedKeys = props.checkedKeys,
	            checkedKeys = _props$checkedKeys === undefined ? [] : _props$checkedKeys,
	            _props$checkedNames = props.checkedNames,
	            checkedNames = _props$checkedNames === undefined ? [] : _props$checkedNames,
	            _props$selectedKeys = props.selectedKeys,
	            selectedKeys = _props$selectedKeys === undefined ? [] : _props$selectedKeys,
	            _props$selectedNames = props.selectedNames,
	            selectedNames = _props$selectedNames === undefined ? [] : _props$selectedNames;
	
	        _this.state = {
	            selectedKeys: selectedKeys,
	            checkedKeys: checkedKeys
	        };
	
	        _this.fragCheckedDataRef = _this.checkedDataRef = checkedKeys.map(function (key, index) {
	            return { key: key, name: checkedNames[index] };
	        });
	        _this.fragSelectedDataRef = _this.selectedDataRef = selectedKeys.map(function (key, index) {
	            return { key: key, name: selectedNames[index] };
	        });
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
	                for (; target; target = target.offsetParent) {
	                    if (target.className.indexOf('stopPropagation') != -1) {
	                        return nosp = false;
	                    }
	                }
	                if (nosp) {
	                    _this2.onCancel();
	                }
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
	            var _nextProps$checkedKey = nextProps.checkedKeys,
	                checkedKeys = _nextProps$checkedKey === undefined ? [] : _nextProps$checkedKey,
	                _nextProps$selectedKe = nextProps.selectedKeys,
	                selectedKeys = _nextProps$selectedKe === undefined ? [] : _nextProps$selectedKe,
	                _nextProps$checkedNam = nextProps.checkedNames,
	                checkedNames = _nextProps$checkedNam === undefined ? [] : _nextProps$checkedNam,
	                _nextProps$selectedNa = nextProps.selectedNames,
	                selectedNames = _nextProps$selectedNa === undefined ? [] : _nextProps$selectedNa;
	
	            if (isArray(checkedKeys)) {
	                this.fragCheckedDataRef = this.checkedDataRef = checkedKeys.map(function (key, index) {
	                    return { key: key, name: checkedNames[index] };
	                });
	                this.setState({ checkedKeys: checkedKeys });
	            }
	            if (isArray(selectedKeys)) {
	                this.fragSelectedDataRef = this.selectedDataRef = selectedKeys.map(function (key, index) {
	                    return { key: key, name: selectedNames[index] };
	                });
	                this.setState({ selectedKeys: selectedKeys });
	            }
	        }
	    }, {
	        key: 'onCheck',
	        value: function onCheck(checkedDataRef) {
	            var checkedFilter = this.props.checkedFilter;
	            if (checkedFilter) {
	                if (checkedFilter === 'SHOW_PARENT') {
	                    //当父节点下所有子节点都选中时，只返回父节点
	                    var willRemovedKeys = [];
	                    checkedDataRef.forEach(function (item) {
	                        var children = item.children;
	                        if (isArray(children)) {
	                            willRemovedKeys = [].concat(_toConsumableArray(willRemovedKeys), _toConsumableArray(children.map(function (item) {
	                                return item.key;
	                            })));
	                        }
	                    });
	                    checkedDataRef = checkedDataRef.filter(function (item) {
	                        return willRemovedKeys.indexOf(item.key) === -1;
	                    });
	                } else {
	                    //自定义
	                    checkedDataRef = checkedDataRef.filter(checkedFilter);
	                }
	            }
	            this.fragCheckedDataRef = checkedDataRef;
	        }
	    }, {
	        key: 'onSelect',
	        value: function onSelect(selectedDataRef) {
	            var selectedFilter = this.props.selectedFilter;
	            if (selectedFilter) {
	                selectedDataRef = selectedDataRef.filter(selectedFilter);
	            }
	            this.fragSelectedDataRef = selectedDataRef;
	        }
	    }, {
	        key: 'handleDataRef',
	        value: function handleDataRef() {
	            this.checkedDataRef = this.fragCheckedDataRef;
	            this.selectedDataRef = this.fragSelectedDataRef;
	            var checkedDataRef = this.checkedDataRef,
	                selectedDataRef = this.selectedDataRef;
	
	            this.setState({
	                selectedKeys: selectedDataRef.map(function (item) {
	                    return item.key;
	                }),
	                checkedKeys: checkedDataRef.map(function (item) {
	                    return item.key;
	                })
	            });
	            var _props = this.props,
	                onCheck = _props.onCheck,
	                onSelect = _props.onSelect;
	
	            if (onCheck) {
	                onCheck(checkedDataRef);
	            }
	            if (onSelect) {
	                onSelect(selectedDataRef);
	            }
	        }
	    }, {
	        key: 'onOk',
	        value: function onOk() {
	            this.handleDataRef();
	            this.onCancel();
	        }
	    }, {
	        key: 'onRemove',
	        value: function onRemove(index) {
	            var _this3 = this;
	
	            setTimeout(function (u) {
	                _this3.fragCheckedDataRef.splice(index, 1);
	                _this3.handleDataRef();
	            });
	        }
	    }, {
	        key: 'onReset',
	        value: function onReset() {
	            var _this4 = this;
	
	            this.checkedDataRef = [];
	            this.selectedDataRef = [];
	            this.fragSelectedDataRef = [];
	            this.fragCheckedDataRef = [];
	            this.setState({
	                selectedKeys: [],
	                checkedKeys: []
	            }, function () {
	                // 测试缺陷 重置应该包含确定操作
	                _this4.handleDataRef();
	                _this4.onCancel();
	            });
	        }
	    }, {
	        key: 'onDisplay',
	        value: function onDisplay() {
	            this.setState({
	                visible: true
	            });
	        }
	    }, {
	        key: 'onCancel',
	        value: function onCancel() {
	            this.setState({
	                visible: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var state = this.state,
	                props = this.props,
	                checkedDataRef = this.checkedDataRef,
	                selectedDataRef = this.selectedDataRef;
	
	            var width = props.width || 240;
	            var newProps = _extends({}, props, {
	                selectedKeys: state.selectedKeys,
	                checkedKeys: state.checkedKeys,
	                onSelect: this.onSelect.bind(this),
	                onCheck: this.onCheck.bind(this)
	            });
	
	            var overlay = _react2["default"].createElement(
	                'div',
	                { className: 'asynctree stopPropagation', style: { minWidth: Math.max(width, 200) } },
	                _react2["default"].createElement(AsyncTree, newProps),
	                _react2["default"].createElement(
	                    'div',
	                    { className: 'asynctree-controller' },
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { size: 'small', type: 'primary', onClick: this.onOk.bind(this) },
	                        '\u786E\u5B9A'
	                    ),
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { size: 'small', type: 'red', onClick: this.onReset.bind(this) },
	                        '\u91CD\u7F6E'
	                    ),
	                    _react2["default"].createElement(
	                        _button2["default"],
	                        { size: 'small', type: 'ghost', onClick: this.onCancel.bind(this) },
	                        '\u53D6\u6D88'
	                    )
	                )
	            );
	
	            var visible = state.visible;
	
	            var dProps = {
	                overlay: overlay,
	                visible: visible,
	                trigger: ['click']
	            };
	
	            var selectClassName = 'ant-select ant-select-enabled stopPropagation';
	            if (visible) {
	                selectClassName = 'ant-select ant-select-open ant-select-enabled stopPropagation';
	            }
	
	            var checkedNames = props.checkedNames,
	                selectedNames = props.selectedNames,
	                placeholder = props.placeholder;
	
	
	            var checkedTitle = [];
	            checkedDataRef.forEach(function (item, index) {
	                if (!item.name) {
	                    item.name = checkedNames[index];
	                }
	                checkedTitle.push(item.name);
	            });
	
	            return _react2["default"].createElement(
	                _dropdown2["default"],
	                dProps,
	                _react2["default"].createElement(
	                    'div',
	                    { className: selectClassName,
	                        style: { width: width },
	                        onClick: this.onDisplay.bind(this) },
	                    props.checkable ? _react2["default"].createElement(
	                        'div',
	                        { className: 'ant-select-selection ant-select-selection--multiple' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'ant-select-selection__rendered' },
	                            checkedDataRef.length === 0 ? _react2["default"].createElement(
	                                'div',
	                                { unselectable: 'unselectable', className: 'ant-select-selection__placeholder' },
	                                placeholder || '全部条件'
	                            ) : _react2["default"].createElement(
	                                'ul',
	                                { title: checkedTitle.join(',') },
	                                checkedDataRef.map(function (_ref2, index) {
	                                    var key = _ref2.key,
	                                        name = _ref2.name;
	                                    return _react2["default"].createElement(
	                                        'li',
	                                        { key: key, unselectable: 'unselectable', className: 'ant-select-selection__choice' },
	                                        _react2["default"].createElement(
	                                            'div',
	                                            { className: 'ant-select-selection__choice__content' },
	                                            name
	                                        ),
	                                        _react2["default"].createElement('span', { className: 'ant-select-selection__choice__remove', onClick: function onClick(e) {
	                                                return _this5.onRemove(index);
	                                            } })
	                                    );
	                                })
	                            )
	                        )
	                    ) : _react2["default"].createElement(
	                        'div',
	                        { className: 'ant-select-selection ant-select-selection--single' },
	                        _react2["default"].createElement(
	                            'div',
	                            { className: 'ant-select-selection__rendered' },
	                            selectedDataRef.length === 0 ? _react2["default"].createElement(
	                                'div',
	                                { unselectable: 'unselectable', className: 'ant-select-selection__placeholder' },
	                                placeholder || '请选择'
	                            ) : _react2["default"].createElement(
	                                'div',
	                                { className: 'ant-select-selection-selected-value', title: selectedDataRef[0].name || selectedNames[0] },
	                                selectedDataRef[0].name || selectedNames[0]
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            'span',
	                            { className: 'ant-select-arrow', unselectable: 'unselectable' },
	                            _react2["default"].createElement('b', null)
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	;
	
	exports["default"] = App;

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=map/5.map