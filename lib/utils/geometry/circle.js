"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = void 0;

var _vector = require("../../math/vector");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle = /*#__PURE__*/function () {
  function Circle(centerX, centerY, radius) {
    _classCallCheck(this, Circle);

    this.center = void 0;
    this.radius = void 0;
    this.center = new _vector.Vector2(centerX, centerY);
    this.radius = radius;
  }

  _createClass(Circle, [{
    key: "toString",
    value: function toString() {
      return "Circle (center: " + this.center + "; radius: " + this.radius + ")";
    }
  }]);

  return Circle;
}();

exports.Circle = Circle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9nZW9tZXRyeS9jaXJjbGUudHMiXSwibmFtZXMiOlsiQ2lyY2xlIiwiY2VudGVyWCIsImNlbnRlclkiLCJyYWRpdXMiLCJjZW50ZXIiLCJWZWN0b3IyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRWFBLE07QUFJWCxrQkFBWUMsT0FBWixFQUE2QkMsT0FBN0IsRUFBOENDLE1BQTlDLEVBQThEO0FBQUE7O0FBQUEsU0FIdkRDLE1BR3VEO0FBQUEsU0FGdkRELE1BRXVEO0FBQzVELFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxlQUFKLENBQVlKLE9BQVosRUFBcUJDLE9BQXJCLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztXQUNELG9CQUEwQjtBQUN4QixhQUFPLHFCQUFxQixLQUFLQyxNQUExQixHQUFtQyxZQUFuQyxHQUFrRCxLQUFLRCxNQUF2RCxHQUFnRSxHQUF2RTtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJAbWF0aC92ZWN0b3JcIjtcblxuZXhwb3J0IGNsYXNzIENpcmNsZSB7XG4gIHB1YmxpYyBjZW50ZXI6IFZlY3RvcjI7XG4gIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihjZW50ZXJYOiBudW1iZXIsIGNlbnRlclk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIpIHtcbiAgICB0aGlzLmNlbnRlciA9IG5ldyBWZWN0b3IyKGNlbnRlclgsIGNlbnRlclkpO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICB9XG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNpcmNsZSAoY2VudGVyOiBcIiArIHRoaXMuY2VudGVyICsgXCI7IHJhZGl1czogXCIgKyB0aGlzLnJhZGl1cyArIFwiKVwiO1xuICB9XG59XG4iXX0=