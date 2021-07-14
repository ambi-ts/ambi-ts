"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polygon = void 0;

var _ = require("../../..");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Polygon = /*#__PURE__*/function () {
  function Polygon(vertices) {
    _classCallCheck(this, Polygon);

    this.vertices = vertices;
  }

  _createClass(Polygon, [{
    key: "area",
    value: function area() {
      return Math.abs(this.signedDoubleArea() * 0.5);
    }
  }, {
    key: "polyWinding",
    value: function polyWinding() {
      var signedDoubleArea = this.signedDoubleArea();

      if (signedDoubleArea < 0) {
        return _.Winding.CLOCKWISE;
      }

      if (signedDoubleArea > 0) {
        return _.Winding.COUNTERCLOCKWISE;
      }

      return _.Winding.NONE;
    }
  }, {
    key: "signedDoubleArea",
    value: function signedDoubleArea() {
      var nextIndex;
      var n = this.vertices.size;
      var signedDoubleArea = 0;

      for (var index = 0; index < n; index++) {
        nextIndex = (index + 1) % n;
        var point = this.vertices.get(index);
        var next = this.vertices.get(nextIndex);
        signedDoubleArea += point.x * next.y - next.x * point.y;
      }

      return signedDoubleArea;
    }
  }]);

  return Polygon;
}();

exports.Polygon = Polygon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9nZW9tZXRyeS9wb2x5Z29uLnRzIl0sIm5hbWVzIjpbIlBvbHlnb24iLCJ2ZXJ0aWNlcyIsIk1hdGgiLCJhYnMiLCJzaWduZWREb3VibGVBcmVhIiwiV2luZGluZyIsIkNMT0NLV0lTRSIsIkNPVU5URVJDTE9DS1dJU0UiLCJOT05FIiwibmV4dEluZGV4IiwibiIsInNpemUiLCJpbmRleCIsInBvaW50IiwiZ2V0IiwibmV4dCIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRWFBLE87QUFDWCxtQkFBNkJDLFFBQTdCLEVBQXNEO0FBQUE7O0FBQUEsU0FBekJBLFFBQXlCLEdBQXpCQSxRQUF5QjtBQUFFOzs7O1dBRXhELGdCQUFzQjtBQUNwQixhQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLQyxnQkFBTCxLQUEwQixHQUFuQyxDQUFQO0FBQ0Q7OztXQUNELHVCQUF1QjtBQUNyQixVQUFNQSxnQkFBZ0IsR0FBRyxLQUFLQSxnQkFBTCxFQUF6Qjs7QUFDQSxVQUFJQSxnQkFBZ0IsR0FBRyxDQUF2QixFQUEwQjtBQUN4QixlQUFPQyxVQUFRQyxTQUFmO0FBQ0Q7O0FBQ0QsVUFBSUYsZ0JBQWdCLEdBQUcsQ0FBdkIsRUFBMEI7QUFDeEIsZUFBT0MsVUFBUUUsZ0JBQWY7QUFDRDs7QUFDRCxhQUFPRixVQUFRRyxJQUFmO0FBQ0Q7OztXQUNELDRCQUFtQztBQUNqQyxVQUFJQyxTQUFKO0FBQ0EsVUFBTUMsQ0FBQyxHQUFHLEtBQUtULFFBQUwsQ0FBY1UsSUFBeEI7QUFDQSxVQUFJUCxnQkFBZ0IsR0FBRyxDQUF2Qjs7QUFFQSxXQUFLLElBQUlRLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHRixDQUE1QixFQUErQkUsS0FBSyxFQUFwQyxFQUF3QztBQUN0Q0gsUUFBQUEsU0FBUyxHQUFHLENBQUNHLEtBQUssR0FBRyxDQUFULElBQWNGLENBQTFCO0FBQ0EsWUFBTUcsS0FBSyxHQUFHLEtBQUtaLFFBQUwsQ0FBY2EsR0FBZCxDQUFrQkYsS0FBbEIsQ0FBZDtBQUNBLFlBQU1HLElBQUksR0FBRyxLQUFLZCxRQUFMLENBQWNhLEdBQWQsQ0FBa0JMLFNBQWxCLENBQWI7QUFDQUwsUUFBQUEsZ0JBQWdCLElBQUlTLEtBQUssQ0FBQ0csQ0FBTixHQUFVRCxJQUFJLENBQUNFLENBQWYsR0FBbUJGLElBQUksQ0FBQ0MsQ0FBTCxHQUFTSCxLQUFLLENBQUNJLENBQXREO0FBQ0Q7O0FBRUQsYUFBT2IsZ0JBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiQG1hdGhcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiQHV0aWxzXCI7XG5pbXBvcnQgeyBXaW5kaW5nIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGNsYXNzIFBvbHlnb24ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2VzOiBMaXN0PFZlY3RvcjI+KSB7fVxuXG4gIHB1YmxpYyBhcmVhKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuc2lnbmVkRG91YmxlQXJlYSgpICogMC41KTtcbiAgfVxuICBwb2x5V2luZGluZygpOiBXaW5kaW5nIHtcbiAgICBjb25zdCBzaWduZWREb3VibGVBcmVhID0gdGhpcy5zaWduZWREb3VibGVBcmVhKCk7XG4gICAgaWYgKHNpZ25lZERvdWJsZUFyZWEgPCAwKSB7XG4gICAgICByZXR1cm4gV2luZGluZy5DTE9DS1dJU0U7XG4gICAgfVxuICAgIGlmIChzaWduZWREb3VibGVBcmVhID4gMCkge1xuICAgICAgcmV0dXJuIFdpbmRpbmcuQ09VTlRFUkNMT0NLV0lTRTtcbiAgICB9XG4gICAgcmV0dXJuIFdpbmRpbmcuTk9ORTtcbiAgfVxuICBwcml2YXRlIHNpZ25lZERvdWJsZUFyZWEoKTogbnVtYmVyIHtcbiAgICBsZXQgbmV4dEluZGV4OiBudW1iZXI7XG4gICAgY29uc3QgbiA9IHRoaXMudmVydGljZXMuc2l6ZTtcbiAgICBsZXQgc2lnbmVkRG91YmxlQXJlYSA9IDA7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbjsgaW5kZXgrKykge1xuICAgICAgbmV4dEluZGV4ID0gKGluZGV4ICsgMSkgJSBuO1xuICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLnZlcnRpY2VzLmdldChpbmRleCk7XG4gICAgICBjb25zdCBuZXh0ID0gdGhpcy52ZXJ0aWNlcy5nZXQobmV4dEluZGV4KTtcbiAgICAgIHNpZ25lZERvdWJsZUFyZWEgKz0gcG9pbnQueCAqIG5leHQueSAtIG5leHQueCAqIHBvaW50Lnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25lZERvdWJsZUFyZWE7XG4gIH1cbn1cbiJdfQ==