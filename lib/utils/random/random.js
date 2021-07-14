"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Random = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Random = /*#__PURE__*/function () {
  function Random() {
    _classCallCheck(this, Random);

    this.RandGP = function (max) {
      return Math.floor(Math.random() * max);
    };
  }

  _createClass(Random, [{
    key: "nextDouble",
    value: function nextDouble() {
      return Math.random();
    }
  }]);

  return Random;
}();

exports.Random = Random;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9yYW5kb20vcmFuZG9tLnRzIl0sIm5hbWVzIjpbIlJhbmRvbSIsIlJhbmRHUCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFhQSxNOzs7O1NBQ0pDLE0sR0FBUyxVQUFDQyxHQUFEO0FBQUEsYUFBeUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILEdBQTNCLENBQXpCO0FBQUEsSzs7Ozs7V0FDaEIsc0JBQTRCO0FBQzFCLGFBQU9DLElBQUksQ0FBQ0UsTUFBTCxFQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmFuZG9tIHtcbiAgcHVibGljIFJhbmRHUCA9IChtYXg6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICBwdWJsaWMgbmV4dERvdWJsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpO1xuICB9XG59XG4iXX0=