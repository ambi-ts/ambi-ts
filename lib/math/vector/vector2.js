"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector2 = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector2 = /*#__PURE__*/function () {
  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "toString",
    value: function toString() {
      return "[Vector2]" + this.x + "," + this.y;
    }
  }, {
    key: "magnitude",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var magnitude = this.magnitude;
      this.x /= magnitude;
      this.y /= magnitude;
      return this;
    }
  }, {
    key: "distanceSquare",
    value: //public GetHashCode(): number {}
    function distanceSquare(v) {
      return Vector2.distanceSquare(this, v);
    }
  }, {
    key: "equals",
    value: function equals(v) {
      return this.x == v.x && this.y == v.y;
    }
  }, {
    key: "notEquals",
    value: function notEquals(v) {
      return this.x != v.x || this.y != v.y;
    }
  }, {
    key: "lessThan",
    value: function lessThan(v) {
      return this.x < v.x && this.y < v.y;
    }
  }, {
    key: "add",
    value: function add(p) {
      return new Vector2(this.x + p.x, this.y + p.y);
    }
  }, {
    key: "sub",
    value: function sub(p) {
      return new Vector2(this.x - p.x, this.y - p.y);
    }
  }, {
    key: "times",
    value: function times(v) {
      return new Vector2(this.x * v.x, this.y * v.y);
    }
  }], [{
    key: "normalize",
    value: function normalize(a) {
      var magnitude = a.magnitude;
      return new Vector2(a.x / magnitude, a.y / magnitude);
    }
  }, {
    key: "distanceSquare",
    value: function distanceSquare(a, b) {
      var cx = b.x - a.x;
      var cy = b.y - a.y;
      return cx * cx + cy * cy;
    }
  }, {
    key: "equals",
    value: function equals(a, b) {
      return a.equals(b);
    }
  }, {
    key: "notEquals",
    value: function notEquals(a, b) {
      return a.notEquals(b);
    }
  }, {
    key: "lessThan",
    value: function lessThan(a, b) {
      return a.lessThan(b);
    }
  }, {
    key: "add",
    value: function add(a, b) {
      return a.add(b);
    }
  }, {
    key: "sub",
    value: function sub(a, b) {
      return a.sub(b);
    }
  }, {
    key: "times",
    value: function times(a, b) {
      return a.times(b);
    }
  }, {
    key: "min",
    value: function min(a, b) {
      return new Vector2(Math.min(a.x, b.x), Math.min(a.y, b.y));
    }
  }, {
    key: "max",
    value: function max(a, b) {
      return new Vector2(Math.max(a.x, b.x), Math.max(a.y, b.y));
    }
  }]);

  return Vector2;
}();

exports.Vector2 = Vector2;
Vector2.ZERO = new Vector2(0, 0);
Vector2.zero = new Vector2(0, 0);
Vector2.one = new Vector2(1, 1);
Vector2.right = new Vector2(1, 0);
Vector2.left = new Vector2(-1, 0);
Vector2.up = new Vector2(0, 1);
Vector2.down = new Vector2(0, -1);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRoL3ZlY3Rvci92ZWN0b3IyLnRzIl0sIm5hbWVzIjpbIlZlY3RvcjIiLCJ4IiwieSIsIk1hdGgiLCJzcXJ0IiwibWFnbml0dWRlIiwidiIsImRpc3RhbmNlU3F1YXJlIiwicCIsImEiLCJiIiwiY3giLCJjeSIsImVxdWFscyIsIm5vdEVxdWFscyIsImxlc3NUaGFuIiwiYWRkIiwic3ViIiwidGltZXMiLCJtaW4iLCJtYXgiLCJaRVJPIiwiemVybyIsIm9uZSIsInJpZ2h0IiwibGVmdCIsInVwIiwiZG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFhQSxPO0FBU1gsbUJBQTBCQyxDQUExQixFQUE0Q0MsQ0FBNUMsRUFBdUQ7QUFBQTs7QUFBQSxTQUE3QkQsQ0FBNkIsR0FBN0JBLENBQTZCO0FBQUEsU0FBWEMsQ0FBVyxHQUFYQSxDQUFXO0FBQUU7Ozs7V0FFekQsb0JBQTBCO0FBQ3hCLGFBQU8sY0FBYyxLQUFLRCxDQUFuQixHQUF1QixHQUF2QixHQUE2QixLQUFLQyxDQUF6QztBQUNEOzs7U0FFRCxlQUErQjtBQUM3QixhQUFPQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLSCxDQUFMLEdBQVMsS0FBS0EsQ0FBZCxHQUFrQixLQUFLQyxDQUFMLEdBQVMsS0FBS0EsQ0FBMUMsQ0FBUDtBQUNEOzs7V0FFRCxxQkFBNEI7QUFDMUIsVUFBTUcsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FBQ0EsV0FBS0osQ0FBTCxJQUFVSSxTQUFWO0FBQ0EsV0FBS0gsQ0FBTCxJQUFVRyxTQUFWO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztXQU9EO0FBRUEsNEJBQXNCQyxDQUF0QixFQUEwQztBQUN4QyxhQUFPTixPQUFPLENBQUNPLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkJELENBQTdCLENBQVA7QUFDRDs7O1dBV0QsZ0JBQWNBLENBQWQsRUFBbUM7QUFDakMsYUFBTyxLQUFLTCxDQUFMLElBQVVLLENBQUMsQ0FBQ0wsQ0FBWixJQUFpQixL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LENBQVA7QUFDRDs7O1dBQ0QsYUFBa0JPLENBQWxCLEVBQThCQyxDQUE5QixFQUFtRDtBQUNqRCxhQUFPLElBQUlWLE9BQUosQ0FBWUcsSUFBSSxDQUFDaUIsR0FBTCxDQUFTWCxDQUFDLENBQUNSLENBQVgsRUFBY1MsQ0FBQyxDQUFDVCxDQUFoQixDQUFaLEVBQWdDRSxJQUFJLENBQUNpQixHQUFMLENBQVNYLENBQUMsQ0FBQ1AsQ0FBWCxFQUFjUSxDQUFDLENBQUNSLENBQWhCLENBQWhDLENBQVA7QUFDRDs7Ozs7OztBQXhGVUYsTyxDQUNZcUIsSSxHQUFPLElBQUlyQixPQUFKLENBQVksQ0FBWixFQUFlLENBQWYsQztBQURuQkEsTyxDQUVZc0IsSSxHQUFPLElBQUl0QixPQUFKLENBQVksQ0FBWixFQUFlLENBQWYsQztBQUZuQkEsTyxDQUdZdUIsRyxHQUFNLElBQUl2QixPQUFKLENBQVksQ0FBWixFQUFlLENBQWYsQztBQUhsQkEsTyxDQUlZd0IsSyxHQUFRLElBQUl4QixPQUFKLENBQVksQ0FBWixFQUFlLENBQWYsQztBQUpwQkEsTyxDQUtZeUIsSSxHQUFPLElBQUl6QixPQUFKLENBQVksQ0FBQyxDQUFiLEVBQWdCLENBQWhCLEM7QUFMbkJBLE8sQ0FNWTBCLEUsR0FBSyxJQUFJMUIsT0FBSixDQUFZLENBQVosRUFBZSxDQUFmLEM7QUFOakJBLE8sQ0FPWTJCLEksR0FBTyxJQUFJM0IsT0FBSixDQUFZLENBQVosRUFBZSxDQUFDLENBQWhCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVmVjdG9yMiB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgWkVSTyA9IG5ldyBWZWN0b3IyKDAsIDApO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHplcm8gPSBuZXcgVmVjdG9yMigwLCAwKTtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBvbmUgPSBuZXcgVmVjdG9yMigxLCAxKTtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSByaWdodCA9IG5ldyBWZWN0b3IyKDEsIDApO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGxlZnQgPSBuZXcgVmVjdG9yMigtMSwgMCk7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdXAgPSBuZXcgVmVjdG9yMigwLCAxKTtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBkb3duID0gbmV3IFZlY3RvcjIoMCwgLTEpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7fVxuXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIltWZWN0b3IyXVwiICsgdGhpcy54ICsgXCIsXCIgKyB0aGlzLnk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG1hZ25pdHVkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIHB1YmxpYyBub3JtYWxpemUoKTogVmVjdG9yMiB7XG4gICAgY29uc3QgbWFnbml0dWRlID0gdGhpcy5tYWduaXR1ZGU7XG4gICAgdGhpcy54IC89IG1hZ25pdHVkZTtcbiAgICB0aGlzLnkgLz0gbWFnbml0dWRlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBub3JtYWxpemUoYTogVmVjdG9yMik6IFZlY3RvcjIge1xuICAgIGNvbnN0IG1hZ25pdHVkZSA9IGEubWFnbml0dWRlO1xuICAgIHJldHVybiBuZXcgVmVjdG9yMihhLnggLyBtYWduaXR1ZGUsIGEueSAvIG1hZ25pdHVkZSk7XG4gIH1cblxuICAvL3B1YmxpYyBHZXRIYXNoQ29kZSgpOiBudW1iZXIge31cblxuICBwdWJsaWMgZGlzdGFuY2VTcXVhcmUodjogVmVjdG9yMik6IG51bWJlciB7XG4gICAgcmV0dXJuIFZlY3RvcjIuZGlzdGFuY2VTcXVhcmUodGhpcywgdik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc3RhbmNlU3F1YXJlKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpOiBudW1iZXIge1xuICAgIGNvbnN0IGN4ID0gYi54IC0gYS54O1xuICAgIGNvbnN0IGN5ID0gYi55IC0gYS55O1xuICAgIHJldHVybiBjeCAqIGN4ICsgY3kgKiBjeTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZXF1YWxzKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gYS5lcXVhbHMoYik7XG4gIH1cbiAgcHVibGljIGVxdWFscyh2OiBWZWN0b3IyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMueCA9PSB2LnggJiYgdGhpcy55ID09IHYueTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIG5vdEVxdWFscyhhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGEubm90RXF1YWxzKGIpO1xuICB9XG4gIHB1YmxpYyBub3RFcXVhbHModjogVmVjdG9yMik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnggIT0gdi54IHx8IHRoaXMueSAhPSB2Lnk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBsZXNzVGhhbihhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGEubGVzc1RoYW4oYik7XG4gIH1cbiAgcHVibGljIGxlc3NUaGFuKHY6IFZlY3RvcjIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy54IDwgdi54ICYmIHRoaXMueSA8IHYueTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpOiBWZWN0b3IyIHtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cbiAgcHVibGljIGFkZChwOiBWZWN0b3IyKTogVmVjdG9yMiB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc3ViKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpOiBWZWN0b3IyIHtcbiAgICByZXR1cm4gYS5zdWIoYik7XG4gIH1cbiAgcHVibGljIHN1YihwOiBWZWN0b3IyKTogVmVjdG9yMiB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdGltZXMoYTogVmVjdG9yMiwgYjogVmVjdG9yMik6IFZlY3RvcjIge1xuICAgIHJldHVybiBhLnRpbWVzKGIpO1xuICB9XG4gIHB1YmxpYyB0aW1lcyh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCAqIHYueCwgdGhpcy55ICogdi55KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbWluKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpOiBWZWN0b3IyIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5taW4oYS54LCBiLngpLCBNYXRoLm1pbihhLnksIGIueSkpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgbWF4KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpOiBWZWN0b3IyIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5tYXgoYS54LCBiLngpLCBNYXRoLm1heChhLnksIGIueSkpO1xuICB9XG59XG4iXX0=