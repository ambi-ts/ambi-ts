"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Queue = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    var capacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;

    _classCallCheck(this, Queue);

    this.capacity = capacity;
    this.storage = [];
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(item) {
      if (this.size === this.capacity) {
        throw Error("Queue has reached max capacity, you cannot add more items");
      }

      this.storage.push(item);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.storage.shift();
    }
  }, {
    key: "size",
    get: function get() {
      return this.storage.length;
    }
  }]);

  return Queue;
}();

exports.Queue = Queue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9xdWV1ZS9xdWV1ZS50cyJdLCJuYW1lcyI6WyJRdWV1ZSIsImNhcGFjaXR5IiwiSW5maW5pdHkiLCJzdG9yYWdlIiwiaXRlbSIsInNpemUiLCJFcnJvciIsInB1c2giLCJzaGlmdCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFhQSxLO0FBR1gsbUJBQWlEO0FBQUEsUUFBN0JDLFFBQTZCLHVFQUFWQyxRQUFVOztBQUFBOztBQUFBLFNBQTdCRCxRQUE2QixHQUE3QkEsUUFBNkI7QUFBQSxTQUZ6Q0UsT0FFeUMsR0FGMUIsRUFFMEI7QUFBRTs7OztXQUVuRCxpQkFBUUMsSUFBUixFQUF1QjtBQUNyQixVQUFJLEtBQUtDLElBQUwsS0FBYyxLQUFLSixRQUF2QixFQUFpQztBQUMvQixjQUFNSyxLQUFLLENBQUMsMkRBQUQsQ0FBWDtBQUNEOztBQUNELFdBQUtILE9BQUwsQ0FBYUksSUFBYixDQUFrQkgsSUFBbEI7QUFDRDs7O1dBQ0QsbUJBQXlCO0FBQ3ZCLGFBQU8sS0FBS0QsT0FBTCxDQUFhSyxLQUFiLEVBQVA7QUFDRDs7O1NBQ0QsZUFBbUI7QUFDakIsYUFBTyxLQUFLTCxPQUFMLENBQWFNLE1BQXBCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUXVldWU8VD4ge1xuICBwcml2YXRlIHN0b3JhZ2U6IFRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FwYWNpdHk6IG51bWJlciA9IEluZmluaXR5KSB7fVxuXG4gIGVucXVldWUoaXRlbTogVCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNpemUgPT09IHRoaXMuY2FwYWNpdHkpIHtcbiAgICAgIHRocm93IEVycm9yKFwiUXVldWUgaGFzIHJlYWNoZWQgbWF4IGNhcGFjaXR5LCB5b3UgY2Fubm90IGFkZCBtb3JlIGl0ZW1zXCIpO1xuICAgIH1cbiAgICB0aGlzLnN0b3JhZ2UucHVzaChpdGVtKTtcbiAgfVxuICBkZXF1ZXVlKCk6IFQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2hpZnQoKTtcbiAgfVxuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UubGVuZ3RoO1xuICB9XG59XG4iXX0=