"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _ecs = require("@joaqim/ecs");

var _primedModel = require("primed-model");

var _dec, _dec2, _class, _class2, _descriptor;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

var PrimedEngine = function PrimedEngine(engine) {
  if (engine === undefined) return new _ecs.Engine();
  return engine;
};

var Game = (_dec = (0, _primedModel.Primed)(PrimedEngine), _dec2 = Reflect.metadata("design:type", typeof _ecs.Engine === "undefined" ? Object : _ecs.Engine), (0, _primedModel.Model)(_class = (_class2 = /*#__PURE__*/function (_Base) {
  _inherits(Game, _Base);

  var _super = _createSuper(Game);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _initializerDefineProperty(_this, "engine", _descriptor, _assertThisInitialized(_this));

    _this._lastTimestamp = 0;
    return _this;
  }

  _createClass(Game, [{
    key: "awake",
    value: //private _entities!: Entity[];
    function awake() {
      var _this2 = this;

      // Make sure Update starts after all entities are awaken
      window.requestAnimationFrame(function () {
        // set initial timestamp
        _this2._lastTimestamp = Date.now(); // start update loop

        _this2.update();
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      var delta = (Date.now() - this._lastTimestamp) / 1000;
      this.engine.update(delta); // update the timestamp

      this._lastTimestamp = Date.now(); // Invoke on next frame

      window.requestAnimationFrame(function () {
        return _this3.update();
      });
    }
  }]);

  return Game;
}(_primedModel.Base), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "engine", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Game = Game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lL2dhbWUudHMiXSwibmFtZXMiOlsiUHJpbWVkRW5naW5lIiwiZW5naW5lIiwidW5kZWZpbmVkIiwiRW5naW5lIiwiR2FtZSIsIk1vZGVsIiwiX2xhc3RUaW1lc3RhbXAiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJEYXRlIiwibm93IiwidXBkYXRlIiwiZGVsdGEiLCJCYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFvQjtBQUN2QyxNQUFJQSxNQUFNLEtBQUtDLFNBQWYsRUFBMEIsT0FBTyxJQUFJQyxXQUFKLEVBQVA7QUFDMUIsU0FBT0YsTUFBUDtBQUNELENBSEQ7O0lBTWFHLEksV0FDVix5QkFBT0osWUFBUCxDLDBHQUZGSyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBS1NDLGMsR0FBaUIsQzs7Ozs7O1dBQ3pCO0FBRUEscUJBQWM7QUFBQTs7QUFDWjtBQUNBQyxNQUFBQSxNQUFNLENBQUNDLHFCQUFQLENBQTZCLFlBQU07QUFDakM7QUFDQSxRQUFBLE1BQUksQ0FBQ0YsY0FBTCxHQUFzQkcsSUFBSSxDQUFDQyxHQUFMLEVBQXRCLENBRmlDLENBSWpDOztBQUNBLFFBQUEsTUFBSSxDQUFDQyxNQUFMO0FBQ0QsT0FORDtBQU9EOzs7V0FFRCxrQkFBZTtBQUFBOztBQUNiLFVBQU1DLEtBQUssR0FBRyxDQUFDSCxJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFLSixjQUFuQixJQUFxQyxJQUFuRDtBQUVBLFdBQUtMLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkMsS0FBbkIsRUFIYSxDQUtiOztBQUNBLFdBQUtOLGNBQUwsR0FBc0JHLElBQUksQ0FBQ0MsR0FBTCxFQUF0QixDQU5hLENBUWI7O0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0MscUJBQVAsQ0FBNkI7QUFBQSxlQUFNLE1BQUksQ0FBQ0csTUFBTCxFQUFOO0FBQUEsT0FBN0I7QUFDRDs7OztFQTVCdUJFLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIkBqb2FxaW0vZWNzXCI7XG5pbXBvcnQgeyBCYXNlLCBNb2RlbCwgUHJpbWVkIH0gZnJvbSBcInByaW1lZC1tb2RlbFwiO1xuXG5jb25zdCBQcmltZWRFbmdpbmUgPSAoZW5naW5lOiBFbmdpbmUpID0+IHtcbiAgaWYgKGVuZ2luZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IEVuZ2luZSgpO1xuICByZXR1cm4gZW5naW5lO1xufTtcblxuQE1vZGVsXG5leHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIEJhc2U8R2FtZT4ge1xuICBAUHJpbWVkKFByaW1lZEVuZ2luZSlcbiAgcHVibGljIHJlYWRvbmx5IGVuZ2luZSE6IEVuZ2luZTtcblxuICBwcml2YXRlIF9sYXN0VGltZXN0YW1wID0gMDtcbiAgLy9wcml2YXRlIF9lbnRpdGllcyE6IEVudGl0eVtdO1xuXG4gIGF3YWtlKCk6IHZvaWQge1xuICAgIC8vIE1ha2Ugc3VyZSBVcGRhdGUgc3RhcnRzIGFmdGVyIGFsbCBlbnRpdGllcyBhcmUgYXdha2VuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBzZXQgaW5pdGlhbCB0aW1lc3RhbXBcbiAgICAgIHRoaXMuX2xhc3RUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAvLyBzdGFydCB1cGRhdGUgbG9vcFxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkZWx0YSA9IChEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFRpbWVzdGFtcCkgLyAxMDAwO1xuXG4gICAgdGhpcy5lbmdpbmUudXBkYXRlKGRlbHRhKTtcblxuICAgIC8vIHVwZGF0ZSB0aGUgdGltZXN0YW1wXG4gICAgdGhpcy5fbGFzdFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAvLyBJbnZva2Ugb24gbmV4dCBmcmFtZVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGlzcGF0Y2g/KCk6IHZvaWQ7XG59XG4iXX0=