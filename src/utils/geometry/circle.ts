import { Vector2 } from "@math/vector";

export class Circle {
  public center: Vector2;
  public radius: number;

  constructor(centerX: number, centerY: number, radius: number) {
    this.center = new Vector2(centerX, centerY);
    this.radius = radius;
  }
  public toString(): string {
    return "Circle (center: " + this.center + "; radius: " + this.radius + ")";
  }
}
