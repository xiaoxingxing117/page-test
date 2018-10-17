webpackJsonp([11,39],{

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(488);
	
	var _icon = __webpack_require__(477);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _store = __webpack_require__(263);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _redux = __webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	    }
	
	    // 传参数作为通用模板
	
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	
	            var dom = [];
	            for (var i = 0; i < props.list.length; i++) {
	                dom.push(_react2["default"].createElement(
	                    'span',
	                    { className: 'first', key: i },
	                    props.list[i]
	                ));
	                if (i !== props.list.length - 1) {
	                    dom.push(_react2["default"].createElement(
	                        'span',
	                        { key: i + 'divider' },
	                        '/'
	                    ));
	                }
	            }
	            return _react2["default"].createElement(
	                'div',
	                { className: 'top-path' },
	                props.backUrl && _react2["default"].createElement(
	                    'a',
	                    { className: 'go-back', href: props.backUrl },
	                    _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-arrow-left', title: '\u8FD4\u56DE' })
	                ),
	                props.goBack && _react2["default"].createElement(
	                    'label',
	                    { className: 'go-back', onClick: props.goBack.bind(props) },
	                    _react2["default"].createElement(_icon2["default"], { type: 'lidaicon-h-arrow-left', title: '\u8FD4\u56DE' })
	                ),
	                dom
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = App;

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(158);
	
	var _loader = __webpack_require__(410);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _addDomEventListener = __webpack_require__(273);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _topPath = __webpack_require__(487);
	
	var _topPath2 = _interopRequireDefault(_topPath);
	
	__webpack_require__(489);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ContentHeader = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(12, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(789)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	});
	var ContentFilter = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(14, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(834)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	});
	var ContentHumanList = (0, _loader2["default"])(function (a) {
	    return __webpack_require__.e/* require */(15, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(835)]; (a.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	});
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            filter: false,
	            checkedAll: false,
	            checkAllStatus: 0,
	            humanListLength: -1,
	            humanListHeight: 0,
	            filterCondition: {
	                key: Date.now()
	            },
	            handleHuman: {
	                key: Date.now(),
	                type: null
	            },
	            listType: "imageList"
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _browser = this.props.browser;
	            var browser = nextProps.browser;
	            if (browser.width !== _browser.width || browser.height !== _browser.height) {
	                this.setHumanListHeight(browser);
	            }
	        }
	    }, {
	        key: 'filterHandle',
	        value: function filterHandle() {
	            var _this2 = this;
	
	            this.setState({
	                filter: !this.state.filter
	            }, function () {
	                _this2.setHumanListHeight();
	            });
	        }
	    }, {
	        key: 'checkedHandle',
	        value: function checkedHandle(checkAllStatus) {
	            this.setState({
	                checkedAll: checkAllStatus,
	                checkAllStatus: checkAllStatus
	            });
	        }
	    }, {
	        key: 'batchHandleHuman',
	        value: function batchHandleHuman(type) {
	            this.setState({
	                handleHuman: {
	                    key: Date.now(),
	                    type: type
	                }
	            });
	        }
	    }, {
	        key: 'refreshHuman',
	        value: function refreshHuman(values) {
	            this.setState({
	                filterCondition: _extends({
	                    key: Date.now()
	                }, values)
	            });
	        }
	    }, {
	        key: 'setHumanListHeight',
	        value: function setHumanListHeight(browser) {
	            var humanListHeight = 0;
	            var browerHeight = browser && browser.height || this.props.browser.height;
	            if (this.state.humanListLength != 0) {
	                if (this.state.filter) {
	                    humanListHeight = browerHeight - this.refs.faceHumanHiddenDiv.getBoundingClientRect().top - 170 - 8; //过滤条件170
	                } else {
	                    humanListHeight = browerHeight - this.refs.faceHumanHiddenDiv.getBoundingClientRect().top - 8; //底部有8px
	                }
	                humanListHeight = browerHeight - this.refs.faceHumanHiddenDiv.getBoundingClientRect().top - 8; //底部有8px
	            }
	            this.setState({
	                humanListHeight: humanListHeight
	            });
	        }
	    }, {
	        key: 'setHumanListLength',
	        value: function setHumanListLength(value) {
	            var _this3 = this;
	
	            this.setState({
	                humanListLength: value
	            }, function () {
	                _this3.setHumanListHeight();
	            });
	        }
	    }, {
	        key: 'setCheckAllStatus',
	        value: function setCheckAllStatus(checkAllStatus) {
	            this.setState({
	                checkAllStatus: checkAllStatus,
	                checkedAll: checkAllStatus
	            });
	        }
	    }, {
	        key: 'listTypeChange',
	        value: function listTypeChange(listType) {
	            this.setState({
	                listType: listType
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var state = this.state,
	                props = this.props;
	            var filter = state.filter,
	                checkedAll = state.checkedAll,
	                checkAllStatus = state.checkAllStatus,
	                filterCondition = state.filterCondition,
	                handleHuman = state.handleHuman,
	                humanListLength = state.humanListLength,
	                humanListHeight = state.humanListHeight,
	                listType = state.listType;
	
	            var browserHeight = props.browser.height;
	
	            return _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(_topPath2["default"], { backUrl: '#nameListLib', list: ['名单库管理', props.params.libName] }),
	                _react2["default"].createElement(
	                    'div',
	                    { className: humanListLength > 0 ? 'xnamelist-body' : 'xnamelist-body no-data' },
	                    _react2["default"].createElement(ContentHeader, { humanListLength: humanListLength,
	                        params: props.params,
	                        checkAllStatus: checkAllStatus,
	                        onRefresh: this.refreshHuman.bind(this),
	                        onBatchHandleHuman: this.batchHandleHuman.bind(this),
	                        onCheckedHandle: this.checkedHandle.bind(this),
	                        onFilterHandle: this.filterHandle.bind(this),
	                        onListTypeChange: this.listTypeChange.bind(this)
	                    }),
	                    humanListLength > 0 && filter && _react2["default"].createElement(ContentFilter, { onRefresh: this.refreshHuman.bind(this) }),
	                    _react2["default"].createElement('div', { ref: 'faceHumanHiddenDiv' }),
	                    _react2["default"].createElement(ContentHumanList, { params: props.params,
	                        handleHuman: handleHuman,
	                        newCondition: filterCondition,
	                        checkedAll: checkedAll,
	                        setCheckAllStatus: this.setCheckAllStatus.bind(this),
	                        height: humanListHeight,
	                        onSetHumanListLength: this.setHumanListLength.bind(this),
	                        listType: listType
	                    })
	                )
	            );
	        }
	    }]);
	
	    return App;
	}(_react2["default"].Component);
	
	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { browser: state.browser };
	})(App);

/***/ })

});
//# sourceMappingURL=map/11.map