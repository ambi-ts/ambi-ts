"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, List);

    this.items = void 0;
    this.items = items;
  }

  _createClass(List, [{
    key: "clear",
    value: function clear() {
      this.items = [];
    }
  }, {
    key: "size",
    get: function get() {
      return this.items.length;
    }
  }, {
    key: "insert",
    value: function insert(index, value) {
      this.items[index] = value;
    }
  }, {
    key: "add",
    value: function add(value) {
      this.items.push(value);
    }
  }, {
    key: "get",
    value: function get(index) {
      return this.items[index];
    }
  }, {
    key: "sort",
    value: function sort(callback) {
      return this.items.sort(function (a, b) {
        return callback(a, b);
      });
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.items.forEach(function (item) {
        return callback(item);
      });
    }
  }, {
    key: "findAll",
    value: function findAll(callback) {
      var list = new List();
      list.items = this.items.filter(function (item) {
        return callback(item);
      });
      return list;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      return this.items.reverse();
    }
  }]);

  return List;
}();

exports.List = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9saXN0L2xpc3QudHMiXSwibmFtZXMiOlsiTGlzdCIsIml0ZW1zIiwibGVuZ3RoIiwiaW5kZXgiLCJ2YWx1ZSIsInB1c2giLCJjYWxsYmFjayIsInNvcnQiLCJhIiwiYiIsImZvckVhY2giLCJpdGVtIiwibGlzdCIsImZpbHRlciIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBYUEsSTtBQUdYLGtCQUFrQztBQUFBLFFBQXRCQyxLQUFzQix1RUFBSixFQUFJOztBQUFBOztBQUFBLFNBRjFCQSxLQUUwQjtBQUNoQyxTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztXQUVELGlCQUFjO0FBQ1osV0FBS0EsS0FBTCxHQUFhLEVBQWI7QUFDRDs7O1NBRUQsZUFBbUI7QUFDakIsYUFBTyxLQUFLQSxLQUFMLENBQVdDLE1BQWxCO0FBQ0Q7OztXQUVELGdCQUFPQyxLQUFQLEVBQXNCQyxLQUF0QixFQUFzQztBQUNwQyxXQUFLSCxLQUFMLENBQVdFLEtBQVgsSUFBb0JDLEtBQXBCO0FBQ0Q7OztXQUNELGFBQUlBLEtBQUosRUFBb0I7QUFDbEIsV0FBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCRCxLQUFoQjtBQUNEOzs7V0FFRCxhQUFJRCxLQUFKLEVBQXNCO0FBQ3BCLGFBQU8sS0FBS0YsS0FBTCxDQUFXRSxLQUFYLENBQVA7QUFDRDs7O1dBRUQsY0FBS0csUUFBTCxFQUFpRDtBQUMvQyxhQUFPLEtBQUtMLEtBQUwsQ0FBV00sSUFBWCxDQUFnQixVQUFDQyxDQUFELEVBQU9DLENBQVA7QUFBQSxlQUFnQkgsUUFBUSxDQUFDRSxDQUFELEVBQUlDLENBQUosQ0FBeEI7QUFBQSxPQUFoQixDQUFQO0FBQ0Q7OztXQUVELGlCQUFRSCxRQUFSLEVBQTJDO0FBQ3pDLFdBQUtMLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQixVQUFDQyxJQUFEO0FBQUEsZUFBYUwsUUFBUSxDQUFDSyxJQUFELENBQXJCO0FBQUEsT0FBbkI7QUFDRDs7O1dBRUQsaUJBQVFMLFFBQVIsRUFBaUQ7QUFDL0MsVUFBTU0sSUFBSSxHQUFHLElBQUlaLElBQUosRUFBYjtBQUNBWSxNQUFBQSxJQUFJLENBQUNYLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdZLE1BQVgsQ0FBa0IsVUFBQ0YsSUFBRDtBQUFBLGVBQWFMLFFBQVEsQ0FBQ0ssSUFBRCxDQUFyQjtBQUFBLE9BQWxCLENBQWI7QUFDQSxhQUFPQyxJQUFQO0FBQ0Q7OztXQUVELG1CQUFvQjtBQUNsQixhQUFPLEtBQUtYLEtBQUwsQ0FBV2EsT0FBWCxFQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGlzdDxUPiB7XG4gIHByaXZhdGUgaXRlbXM6IEFycmF5PFQ+O1xuXG4gIGNvbnN0cnVjdG9yKGl0ZW1zOiBBcnJheTxUPiA9IFtdKSB7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG5cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBpbnNlcnQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zW2luZGV4XSA9IHZhbHVlO1xuICB9XG4gIGFkZCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBnZXQoaW5kZXg6IG51bWJlcik6IFQge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcbiAgfVxuXG4gIHNvcnQoY2FsbGJhY2s6IChhOiBULCBiOiBUKSA9PiBudW1iZXIpOiBBcnJheTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuc29ydCgoYTogVCwgYjogVCkgPT4gY2FsbGJhY2soYSwgYikpO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjazogKGl0ZW06IFQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW06IFQpID0+IGNhbGxiYWNrKGl0ZW0pKTtcbiAgfVxuXG4gIGZpbmRBbGwoY2FsbGJhY2s6IChpdGVtOiBUKSA9PiBib29sZWFuKTogTGlzdDxUPiB7XG4gICAgY29uc3QgbGlzdCA9IG5ldyBMaXN0PFQ+KCk7XG4gICAgbGlzdC5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtOiBUKSA9PiBjYWxsYmFjayhpdGVtKSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICByZXZlcnNlKCk6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5yZXZlcnNlKCk7XG4gIH1cbn1cbiJdfQ==