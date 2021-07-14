"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color = /*#__PURE__*/function () {
  function Color(r, g, b, a) {
    _classCallCheck(this, Color);

    this.R = void 0;
    this.G = void 0;
    this.B = void 0;
    this.A = void 0;

    if (!Color.isValidChannel(r)) {
      throw new Error("Provided incorrect value for Red channel");
    }

    if (!Color.isValidChannel(g)) {
      throw new Error("Provided incorrect value for Green channel");
    }

    if (!Color.isValidChannel(b)) {
      throw new Error("Provided incorrect value for Blue channel");
    }

    if (!Color.isValidChannel(a, true)) {
      throw new Error("Provided incorrect value for Alpha channel");
    }

    this.R = r;
    this.G = g;
    this.B = b;
    this.A = a;
  }

  _createClass(Color, [{
    key: "asString",
    value: function asString() {
      return "rgba(".concat(this.R, ", ").concat(this.G, ", ").concat(this.B, ", ").concat(this.A, ")");
    }
  }], [{
    key: "isValidChannel",
    value: function isValidChannel(v) {
      var isAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var max = isAlpha ? 1 : 255;

      if (v < 0 || v > max) {
        return false;
      }

      if (!isAlpha && v % 1 !== 0) {
        return false;
      }

      return true;
    }
  }, {
    key: "fromString",
    value: function fromString(str) {
      var arr = str.replace(new RegExp(/\(|\)|[A-Za-z]/g), "").split(",");
      var r = Number(arr[0]),
          g = Number(arr[1]),
          b = Number(arr[2]),
          a = Number(arr[3]);

      if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
        throw new Error("Invalid string");
      }

      return new Color(r, g, b, a);
    }
  }]);

  return Color;
}();

exports.Color = Color;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb2xvci9jb2xvci50cyJdLCJuYW1lcyI6WyJDb2xvciIsInIiLCJnIiwiYiIsImEiLCJSIiwiRyIsIkIiLCJBIiwiaXNWYWxpZENoYW5uZWwiLCJFcnJvciIsInYiLCJpc0FscGhhIiwibWF4Iiwic3RyIiwiYXJyIiwicmVwbGFjZSIsIlJlZ0V4cCIsInNwbGl0IiwiTnVtYmVyIiwiaXNOYU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBYUEsSztBQW1CWCxpQkFBWUMsQ0FBWixFQUF1QkMsQ0FBdkIsRUFBa0NDLENBQWxDLEVBQTZDQyxDQUE3QyxFQUF3RDtBQUFBOztBQUFBLFNBbEJ4Q0MsQ0FrQndDO0FBQUEsU0FqQnhDQyxDQWlCd0M7QUFBQSxTQWhCeENDLENBZ0J3QztBQUFBLFNBZnhDQyxDQWV3Qzs7QUFDdEQsUUFBSSxDQUFDUixLQUFLLENBQUNTLGNBQU4sQ0FBcUJSLENBQXJCLENBQUwsRUFBOEI7QUFDNUIsWUFBTSxJQUFJUyxLQUFKLENBQVUsMENBQVYsQ0FBTjtBQUNEOztBQUVELFFBQUksQ0FBQ1YsS0FBSyxDQUFDUyxjQUFOLENBQXFCUCxDQUFyQixDQUFMLEVBQThCO0FBQzVCLFlBQU0sSUFBSVEsS0FBSixDQUFVLDRDQUFWLENBQU47QUFDRDs7QUFFRCxRQUFJLENBQUNWLEtBQUssQ0FBQ1MsY0FBTixDQUFxQk4sQ0FBckIsQ0FBTCxFQUE4QjtBQUM1QixZQUFNLElBQUlPLEtBQUosQ0FBVSwyQ0FBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDVixLQUFLLENBQUNTLGNBQU4sQ0FBcUJMLENBQXJCLEVBQXdCLElBQXhCLENBQUwsRUFBb0M7QUFDbEMsWUFBTSxJQUFJTSxLQUFKLENBQVUsNENBQVYsQ0FBTjtBQUNEOztBQUVELFNBQUtMLENBQUwsR0FBU0osQ0FBVDtBQUNBLFNBQUtLLENBQUwsR0FBU0osQ0FBVDtBQUNBLFNBQUtLLENBQUwsR0FBU0osQ0FBVDtBQUNBLFNBQUtLLENBQUwsR0FBU0osQ0FBVDtBQUNEOzs7O1dBRUQsb0JBQTBCO0FBQ3hCLDRCQUFlLEtBQUtDLENBQXBCLGVBQTBCLEtBQUtDLENBQS9CLGVBQXFDLEtBQUtDLENBQTFDLGVBQWdELEtBQUtDLENBQXJEO0FBQ0Q7OztXQXRDRCx3QkFBNkJHLENBQTdCLEVBQWtFO0FBQUEsVUFBMUJDLE9BQTBCLHVFQUFoQixLQUFnQjtBQUNoRSxVQUFNQyxHQUFHLEdBQUdELE9BQU8sR0FBRyxDQUFILEdBQU8sR0FBMUI7O0FBQ0EsVUFBSUQsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHRSxHQUFqQixFQUFzQjtBQUNwQixlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFJLENBQUNELE9BQUQsSUFBWUQsQ0FBQyxHQUFHLENBQUosS0FBVSxDQUExQixFQUE2QjtBQUMzQixlQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7O1dBNkJELG9CQUF5QkcsR0FBekIsRUFBNkM7QUFDM0MsVUFBTUMsR0FBRyxHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxJQUFJQyxNQUFKLENBQVcsaUJBQVgsQ0FBWixFQUEyQyxFQUEzQyxFQUErQ0MsS0FBL0MsQ0FBcUQsR0FBckQsQ0FBWjtBQUVBLFVBQU1qQixDQUFDLEdBQUdrQixNQUFNLENBQUNKLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FBaEI7QUFBQSxVQUNFYixDQUFDLEdBQUdpQixNQUFNLENBQUNKLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FEWjtBQUFBLFVBRUVaLENBQUMsR0FBR2dCLE1BQU0sQ0FBQ0osR0FBRyxDQUFDLENBQUQsQ0FBSixDQUZaO0FBQUEsVUFHRVgsQ0FBQyxHQUFHZSxNQUFNLENBQUNKLEdBQUcsQ0FBQyxDQUFELENBQUosQ0FIWjs7QUFLQSxVQUFJSyxLQUFLLENBQUNuQixDQUFELENBQUwsSUFBWW1CLEtBQUssQ0FBQ2xCLENBQUQsQ0FBakIsSUFBd0JrQixLQUFLLENBQUNqQixDQUFELENBQTdCLElBQW9DaUIsS0FBSyxDQUFDaEIsQ0FBRCxDQUE3QyxFQUFrRDtBQUNoRCxjQUFNLElBQUlNLEtBQUosQ0FBVSxnQkFBVixDQUFOO0FBQ0Q7O0FBRUQsYUFBTyxJQUFJVixLQUFKLENBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xvciB7XG4gIHB1YmxpYyByZWFkb25seSBSOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBHOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBCOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBBOiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBpc1ZhbGlkQ2hhbm5lbCh2OiBudW1iZXIsIGlzQWxwaGEgPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1heCA9IGlzQWxwaGEgPyAxIDogMjU1O1xuICAgIGlmICh2IDwgMCB8fCB2ID4gbWF4KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpc0FscGhhICYmIHYgJSAxICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIpIHtcbiAgICBpZiAoIUNvbG9yLmlzVmFsaWRDaGFubmVsKHIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBpbmNvcnJlY3QgdmFsdWUgZm9yIFJlZCBjaGFubmVsXCIpO1xuICAgIH1cblxuICAgIGlmICghQ29sb3IuaXNWYWxpZENoYW5uZWwoZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIGluY29ycmVjdCB2YWx1ZSBmb3IgR3JlZW4gY2hhbm5lbFwiKTtcbiAgICB9XG5cbiAgICBpZiAoIUNvbG9yLmlzVmFsaWRDaGFubmVsKGIpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBpbmNvcnJlY3QgdmFsdWUgZm9yIEJsdWUgY2hhbm5lbFwiKTtcbiAgICB9XG5cbiAgICBpZiAoIUNvbG9yLmlzVmFsaWRDaGFubmVsKGEsIHRydWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlZCBpbmNvcnJlY3QgdmFsdWUgZm9yIEFscGhhIGNoYW5uZWxcIik7XG4gICAgfVxuXG4gICAgdGhpcy5SID0gcjtcbiAgICB0aGlzLkcgPSBnO1xuICAgIHRoaXMuQiA9IGI7XG4gICAgdGhpcy5BID0gYTtcbiAgfVxuXG4gIHB1YmxpYyBhc1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBgcmdiYSgke3RoaXMuUn0sICR7dGhpcy5HfSwgJHt0aGlzLkJ9LCAke3RoaXMuQX0pYDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbVN0cmluZyhzdHI6IHN0cmluZyk6IENvbG9yIHtcbiAgICBjb25zdCBhcnIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKC9cXCh8XFwpfFtBLVphLXpdL2cpLCBcIlwiKS5zcGxpdChcIixcIik7XG5cbiAgICBjb25zdCByID0gTnVtYmVyKGFyclswXSksXG4gICAgICBnID0gTnVtYmVyKGFyclsxXSksXG4gICAgICBiID0gTnVtYmVyKGFyclsyXSksXG4gICAgICBhID0gTnVtYmVyKGFyclszXSk7XG5cbiAgICBpZiAoaXNOYU4ocikgfHwgaXNOYU4oZykgfHwgaXNOYU4oYikgfHwgaXNOYU4oYSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RyaW5nXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ29sb3IociwgZywgYiwgYSk7XG4gIH1cbn1cbiJdfQ==