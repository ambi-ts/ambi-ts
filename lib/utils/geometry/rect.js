"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rect = void 0;

var _math = require("../../math");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rect = /*#__PURE__*/function () {
  function Rect(x, y, width, height) {
    _classCallCheck(this, Rect);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Rect, [{
    key: "left",
    get: function get() {
      return this.x;
    }
  }, {
    key: "right",
    get: function get() {
      return this.x + this.width;
    }
  }, {
    key: "top",
    get: function get() {
      return this.y;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.y + this.height;
    }
  }, {
    key: "topLeft",
    get: function get() {
      return new _math.Vector2(this.left, this.top);
    }
  }, {
    key: "bottomRight",
    get: function get() {
      return new _math.Vector2(this.right, this.bottom);
    }
  }]);

  return Rect;
}();

exports.Rect = Rect;
Rect.zero = new Rect(0, 0, 0, 0);
Rect.one = new Rect(1, 1, 1, 1);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9nZW9tZXRyeS9yZWN0LnRzIl0sIm5hbWVzIjpbIlJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiVmVjdG9yMiIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsInplcm8iLCJvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFYUEsSTtBQUlYLGdCQUNTQyxDQURULEVBRVNDLENBRlQsRUFHU0MsS0FIVCxFQUlTQyxNQUpULEVBS0U7QUFBQTs7QUFBQSxTQUpPSCxDQUlQLEdBSk9BLENBSVA7QUFBQSxTQUhPQyxDQUdQLEdBSE9BLENBR1A7QUFBQSxTQUZPQyxLQUVQLEdBRk9BLEtBRVA7QUFBQSxTQURPQyxNQUNQLEdBRE9BLE1BQ1A7QUFBRTs7OztTQUVKLGVBQTBCO0FBQ3hCLGFBQU8sS0FBS0gsQ0FBWjtBQUNEOzs7U0FDRCxlQUEyQjtBQUN6QixhQUFPLEtBQUtBLENBQUwsR0FBUyxLQUFLRSxLQUFyQjtBQUNEOzs7U0FDRCxlQUF5QjtBQUN2QixhQUFPLEtBQUtELENBQVo7QUFDRDs7O1NBQ0QsZUFBNEI7QUFDMUIsYUFBTyxLQUFLQSxDQUFMLEdBQVMsS0FBS0UsTUFBckI7QUFDRDs7O1NBRUQsZUFBOEI7QUFDNUIsYUFBTyxJQUFJQyxhQUFKLENBQVksS0FBS0MsSUFBakIsRUFBdUIsS0FBS0MsR0FBNUIsQ0FBUDtBQUNEOzs7U0FDRCxlQUFrQztBQUNoQyxhQUFPLElBQUlGLGFBQUosQ0FBWSxLQUFLRyxLQUFqQixFQUF3QixLQUFLQyxNQUE3QixDQUFQO0FBQ0Q7Ozs7Ozs7QUE3QlVULEksQ0FDWVUsSSxHQUFPLElBQUlWLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQztBQURuQkEsSSxDQUVZVyxHLEdBQU0sSUFBSVgsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJAbWF0aFwiO1xuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgemVybyA9IG5ldyBSZWN0KDAsIDAsIDAsIDApO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IG9uZSA9IG5ldyBSZWN0KDEsIDEsIDEsIDEpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB4OiBudW1iZXIsXG4gICAgcHVibGljIHk6IG51bWJlcixcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcixcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXJcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXQgbGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLng7XG4gIH1cbiAgcHVibGljIGdldCByaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xuICB9XG4gIHB1YmxpYyBnZXQgdG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuICBwdWJsaWMgZ2V0IGJvdHRvbSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG9wTGVmdCgpOiBWZWN0b3IyIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XG4gIH1cbiAgcHVibGljIGdldCBib3R0b21SaWdodCgpOiBWZWN0b3IyIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pO1xuICB9XG59XG4iXX0=