(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Slider = __webpack_require__(1);

	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slider2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SliderThumb = __webpack_require__(3);

	var _SliderThumb2 = _interopRequireDefault(_SliderThumb);

	var _SliderLabel = __webpack_require__(4);

	var _SliderLabel2 = _interopRequireDefault(_SliderLabel);

	var _SliderTrack = __webpack_require__(5);

	var _SliderTrack2 = _interopRequireDefault(_SliderTrack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


	function noOp() {}

	var Slider = function (_Component) {
	  _inherits(Slider, _Component);

	  function Slider(props) {
	    _classCallCheck(this, Slider);

	    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

	    _this.state = {
	      drag: false
	    };
	    _this.onInteractionStart = _this.onInteractionStart.bind(_this);
	    _this.onMouseOrTouchMove = _this.onMouseOrTouchMove.bind(_this);
	    _this.onInteractionEnd = _this.onInteractionEnd.bind(_this);
	    return _this;
	  }

	  _createClass(Slider, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.updateStateFromProps(this.props);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onChange.name === 'noOp') {
	        console.warn('A react-simple-range component was not provided an onChange prop.\n        \nRecommend passing down a function as onChange else this component is purely cosmetic');
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.updateStateFromProps(nextProps);
	    }
	  }, {
	    key: 'onInteractionStart',
	    value: function onInteractionStart(e) {
	      var eventType = e.touches !== undefined ? 'touch' : 'mouse';
	      var leftMouseButton = 0;
	      if (eventType === 'mouse' && e.button !== leftMouseButton) return;
	      this.updateSliderValue(e, eventType);
	      this.setState({ drag: true, displayLabel: true });
	      this.addEvents(eventType);
	      e.preventDefault();
	    }
	  }, {
	    key: 'onInteractionEnd',
	    value: function onInteractionEnd() {
	      this.setState({
	        drag: false,
	        displayLabel: false
	      });
	      this.removeEvents();
	    }
	  }, {
	    key: 'onMouseOrTouchMove',
	    value: function onMouseOrTouchMove(e) {
	      var eventType = e.touches !== undefined ? 'touch' : 'mouse';
	      if (!this.state.drag) return;
	      this.updateSliderValue(e, eventType);
	      e.stopPropagation();
	    }
	  }, {
	    key: 'getSliderInfo',
	    value: function getSliderInfo() {
	      var sl = this.refs.slider;
	      var sliderInfo = {
	        bounds: sl.getBoundingClientRect(),
	        length: sl.clientWidth,
	        height: sl.clientHeight
	      };
	      return sliderInfo;
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents(type) {
	      switch (type) {
	        case 'mouse':
	          {
	            document.addEventListener('mousemove', this.onMouseOrTouchMove);
	            document.addEventListener('mouseup', this.onInteractionEnd);
	            break;
	          }
	        case 'touch':
	          {
	            document.addEventListener('touchmove', this.onMouseOrTouchMove);
	            document.addEventListener('touchend', this.onInteractionEnd);
	            break;
	          }
	        default: // nothing
	      }
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	      document.removeEventListener('mousemove', this.onMouseOrTouchMove);
	      document.removeEventListener('mouseup', this.onInteractionEnd);
	      document.removeEventListener('touchmove', this.onMouseOrTouchMove);
	      document.removeEventListener('touchend', this.onInteractionEnd);
	    }
	  }, {
	    key: 'updateSliderValue',
	    value: function updateSliderValue(e, eventType) {
	      var _state = this.state,
	          max = _state.max,
	          min = _state.min;
	      var vertical = this.props.vertical;
	      var value = this.state.value;

	      var xCoords = (eventType !== 'touch' ? e.pageX : e.touches[0].pageX) - window.pageXOffset;
	      var yCoords = (eventType !== 'touch' ? e.pageY : e.touches[0].pageY) - window.pageYOffset;
	      // compare position to slider length to get percentage
	      var position = void 0;
	      var lengthOrHeight = void 0;
	      if (!vertical) {
	        position = xCoords - this.getSliderInfo().bounds.left;
	        lengthOrHeight = this.getSliderInfo().length;
	      } else {
	        lengthOrHeight = this.getSliderInfo().height;
	        position = lengthOrHeight - (yCoords - this.getSliderInfo().bounds.top);
	      }
	      var percent = this.clampValue(+(position / lengthOrHeight).toFixed(2), 0, 1);
	      // convert perc -> value then match value to notch as per props/state.step
	      var rawValue = this.valueFromPercent(percent);
	      value = this.calculateMatchingNotch(rawValue);
	      // avoid repeated updates of the same value
	      if (value	=== this.state.value) return;
	      // percentage of the range to render the track/thumb to
	      var ratio = (value - min) * 100 / (max - min);
	      this.setState({
	        percent: percent,
	        value: this.props.name1,
	        ratio: ratio
	      }, this.handleChange);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange() {
	      this.props.onChange(this.state);
	    }
	  }, {
	    key: 'valueFromPercent',
	    value: function valueFromPercent(perc) {
	      var _state2 = this.state,
	          range = _state2.range,
	          min = _state2.min;

	      var val = range * perc + min;
	      return val;
	    }
	  }, {
	    key: 'calculateMatchingNotch',
	    value: function calculateMatchingNotch(value) {
	      var _state3 = this.state,
	          step = _state3.step,
	          max = _state3.max,
	          min = _state3.min;

	      var values = [];
	      for (var i = min; i <= max; i++) {
	        values.push(i);
	      }
	      var notches = [];
	      // find how many entries in values are divisible by step (+min,+max)
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var s = _step.value;

	          if (s === min || s === max || s % step === 0) {
	            notches.push(s);
	          }
	        }
	        // reduce over the potential notches and find which is the closest
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      var match = notches.reduce(function (prev, curr) {
	        if (Math.abs(curr - value) < Math.abs(prev - value)) {
	          return curr;
	        }
	        return prev;
	      });
	      return match;
	    }
	  }, {
	    key: 'clampValue',
	    value: function clampValue(val, min, max) {
	      return Math.max(min, Math.min(val, max));
	    }
	  }, {
	    key: 'updateStateFromProps',
	    value: function updateStateFromProps(props) {
	      var _props = this.props,
	          value = _props.value,
	          thumbSize = _props.thumbSize;

	      if (value === undefined) {
	        value = props.defaultValue !== undefined ? props.defaultValue : 0;
	      }
	      if (props.thumbSize === undefined) {
	        thumbSize = this.props.disableThumb ? 0 : props.sliderSize * 2;
	      }
	      var min = props.min,
	          max = props.max,
	          step = props.step;

	      var range = max - min;
	      var ratio = Math.max(value - min, 0) * 100 / (max - min);
	      this.setState({
	        value: value,
	        min: min,
	        max: max,
	        range: range,
	        step: step,
	        ratio: ratio,
	        thumbSize: thumbSize
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          vertical = _props2.vertical,
	          sliderSize = _props2.sliderSize,
	          disableThumb = _props2.disableThumb,
	          disableTrack = _props2.disableTrack,
	          children = _props2.children,
	          label = _props2.label,
	          trackColor = _props2.trackColor,
	          thumbColor = _props2.thumbColor,
	          verticalSliderHeight = _props2.verticalSliderHeight,
	          eventWrapperPadding = _props2.eventWrapperPadding;

	      var eventWrapperStyle = {
	        height: '100%',
	        position: 'relative',
	        cursor: 'pointer',
	        margin: '0 auto',
	        get padding() {
	          return vertical ? '0 ' + eventWrapperPadding + 'px' : eventWrapperPadding + 'px 0';
	        },
	        get width() {
	          return vertical ? sliderSize + 'px' : 'auto';
	        }
	      };
	      var sliderStyle = {
	        backgroundColor: this.props.sliderColor,
	        position: 'relative',
	        overflow: 'visible',
	        get height() {
	          return vertical ? verticalSliderHeight : sliderSize + 'px';
	        },
	        get width() {
	          return vertical ? sliderSize + 'px' : '100%';
	        }
	      };
	      return _react2.default.createElement(
	        'div',
	        {
	          style: eventWrapperStyle,
	          onMouseDown: this.onInteractionStart,
	          onTouchStart: this.onInteractionStart
	        },
	        _react2.default.createElement(
	          'div',
	          {
	            ref: 'slider',
	            style: sliderStyle
	          },
	          !disableTrack ? _react2.default.createElement(_SliderTrack2.default, {
	            trackLength: this.state.ratio,
	            color: trackColor,
	            vertical: vertical
	          }) : null,
	          label && this.state.displayLabel ? _react2.default.createElement(_SliderLabel2.default, {
	            position: this.state.ratio,
	            vertical: vertical,
	            color: trackColor,
	            value: this.state.value,
	            sliderSize: sliderSize,
	            thumbSize: this.state.thumbSize
	          }) : null,
	          _react2.default.createElement(_SliderThumb2.default, {
	            position: this.state.ratio,
	            vertical: vertical,
	            customThumb: children,
	            thumbSize: this.state.thumbSize,
	            sliderSize: sliderSize,
	            color: thumbColor,
	            disableThumb: disableThumb,
	            value: this.state.value
	          })
	        )
	      );
	    }
	  }]);

	  return Slider;
	}(_react.Component);

	Slider.propTypes = {
	  children: _react.PropTypes.element,
	  min: _react.PropTypes.number,
	  max: _react.PropTypes.number,
	  step: _react.PropTypes.number,
	  value: _react.PropTypes.number,
	  defaultValue: _react.PropTypes.number,
	  onChange: _react.PropTypes.func,
	  vertical: _react.PropTypes.bool,
	  verticalSliderHeight: _react.PropTypes.string,
	  eventWrapperPadding: _react.PropTypes.number,
	  label: _react.PropTypes.bool,
	  disableTrack: _react.PropTypes.bool,
	  disableThumb: _react.PropTypes.bool,
	  sliderColor: _react.PropTypes.string,
	  trackColor: _react.PropTypes.string,
	  thumbColor: _react.PropTypes.string,
	  sliderSize: _react.PropTypes.number,
	  thumbSize: _react.PropTypes.number
	};
	Slider.defaultProps = {
	  min: 0,
	  max: 100,
	  step: 1,
	  onChange: noOp,
	  vertical: false,
	  verticalSliderHeight: '100px',
	  eventWrapperPadding: 8,
	  label: false,
	  disableTrack: false,
	  disableThumb: false,
	  sliderColor: '#B9B9B9',
	  trackColor: '#009688',
	  thumbColor: '#009688',
	  sliderSize: 4
	};
	exports.default = Slider;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderThumb = function SliderThumb(_ref) {
	  var customThumb = _ref.customThumb,
	      disableThumb = _ref.disableThumb,
	      position = _ref.position,
	      thumbSize = _ref.thumbSize,
	      sliderSize = _ref.sliderSize,
	      color = _ref.color,
	      vertical = _ref.vertical,
	      value = _ref.value;

	  var defaultThumb = void 0;
	  var thumbCentering = (sliderSize - thumbSize) * 0.5;
	  var thumbWrapperStyles = {
	    position: 'absolute',
	    get left() {
	      return vertical ? undefined : position + '%';
	    },
	    get top() {
	      return vertical ? undefined : '0px';
	    },
	    get bottom() {
	      return vertical ? position + '%' : undefined;
	    },
	    get marginLeft() {
	      return vertical ? thumbCentering + 'px' : '-' + thumbSize * 0.5 + 'px';
	    },
	    get marginTop() {
	      return vertical ? undefined : thumbCentering + 'px';
	    },
	    get marginBottom() {
	      return vertical ? '-' + thumbSize * 0.5 + 'px' : undefined;
	    }
	  };
	  if (!customThumb) {
	    var defaultThumbStyles = {
	      backgroundColor: '' + color,
	      opacity: disableThumb ? '0' : '1',
	      // opacity: '0.5',
	      borderRadius: '100%',
	      height: thumbSize + 'px',
	      width: thumbSize + 'px'
	    };
	    defaultThumb = _react2.default.createElement('div', { style: defaultThumbStyles });
	  }
	  return _react2.default.createElement(
	    'div',
	    { style: thumbWrapperStyles },
	    customThumb,
	    defaultThumb && defaultThumb
	  );
	};
	SliderThumb.propTypes = {
	  position: _react.PropTypes.number,
	  offsetTop: _react.PropTypes.number,
	  offsetLeft: _react.PropTypes.number,
	  sliderSize: _react.PropTypes.number,
	  thumbSize: _react.PropTypes.number,
	  color: _react.PropTypes.string,
	  vertical: _react.PropTypes.bool,
	  customThumb: _react.PropTypes.node
	};
	exports.default = SliderThumb;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderLabel = function SliderLabel(_ref) {
	  var position = _ref.position,
	      color = _ref.color,
	      vertical = _ref.vertical,
	      value = _ref.value,
	      thumbSize = _ref.thumbSize,
	      sliderSize = _ref.sliderSize;

	  var labelCentering = -10 + sliderSize * 0.5;
	  var labelVerticalOffset = 6 + thumbSize * 0.6;
	  var labelWrapperStyles = {
	    position: 'absolute',
			fontWeight: 'bold',
	    backgroundColor: '#e9f0f2',
	    color: '#54606e',
	    fontSize: '12px',
	    textAlign: 'center',
	    margin: '0',
	    zIndex: '5',
	    width: '85px',
	    height: '43px',
	    borderRadius: '2px',
	    get left() {
	      return vertical ? undefined : position + '%';
	    },
	    get top() {
	      return vertical ? undefined : '-58px';
	    },
	    get marginLeft() {
	      return vertical ? labelCentering + 'px' : '-43px';
	    },
	    get bottom() {
	      return vertical ? position + '%' : undefined;
	    },
	    get marginBottom() {
	      return vertical ? labelVerticalOffset + 'px' : undefined;
	    }
	  };
	  var pointerStyles = {
	    position: 'absolute',
			left: '50%',
	    marginLeft: '-4px',
	    bottom: '-4px',
	    borderColor: 'transparent',
	    borderStyle: 'solid',
	    width: '0',
	    height: '0',
	    borderWidth: '4px 4px 0 4px',
	    borderTopColor: color,
	    zIndex: '4'
	  };
	  return _react2.default.createElement(
	    'div',
	    { style: labelWrapperStyles },
	    _react2.default.createElement(
	      'span',
	      null,
	      value.firstLine
	    ),
			_react2.default.createElement(
	      'span',
	      {style: {display: 'block'}},
	      value.secondLine
	    ),
	    _react2.default.createElement('div', { style: pointerStyles })
	  );
	};
	SliderLabel.propTypes = {
	  position: _react.PropTypes.number,
	  color: _react.PropTypes.string,
	  vertical: _react.PropTypes.bool,
	  value: _react.PropTypes.number,
	  thumbSize: _react.PropTypes.number,
	  sliderSize: _react.PropTypes.number
	};
	exports.default = SliderLabel;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderTrack = function SliderTrack(_ref) {
	  var trackLength = _ref.trackLength,
	      color = _ref.color,
	      vertical = _ref.vertical;

	  var trackStyles = {
	    width: trackLength + '%',
	    height: '100%',
	    backgroundColor: color
	  };
	  if (vertical) {
	    trackStyles.height = trackLength + '%';
	    trackStyles.width = '100%';
	    trackStyles.position = 'absolute';
	    trackStyles.bottom = '0';
	  }
	  return _react2.default.createElement('div', { style: trackStyles });
	};
	SliderTrack.propTypes = {
	  trackLength: _react.PropTypes.number,
	  color: _react.PropTypes.string,
	  vertical: _react.PropTypes.bool
	};
	exports.default = SliderTrack;

/***/ }
/******/ ])
});
;