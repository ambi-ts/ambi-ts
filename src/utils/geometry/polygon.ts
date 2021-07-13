import { Vector2 } from "math";
import { List } from "utils";
import { Winding } from ".";

export class Polygon {
  constructor(private readonly vertices: List<Vector2>) {}

  public area(): number {
    return Math.abs(this.signedDoubleArea() * 0.5);
  }
  polyWinding(): Winding {
    var signedDoubleArea = this.signedDoubleArea();
    if (signedDoubleArea < 0) {
      return Winding.CLOCKWISE;
    }
    if (signedDoubleArea > 0) {
      return Winding.COUNTERCLOCKWISE;
    }
    return Winding.NONE;
  }
  private signedDoubleArea(): number {
    var nextIndex: number;
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
}
