/**
 * @jest-environment jsdom
 */
import { Vector2 } from "math";
import { Color, Canvas, Rect } from "utils";

describe(">>> Canvas", () => {
  const canvasRect = new Rect(0, 0, 100, 100);
  let canvas: Canvas;

  beforeEach(() => {
    canvas = new Canvas(canvasRect);
  });

  it("should create and attach canvas to the DOM when awakens", () => {
    const createElmSpy = jest.spyOn(document, "createElement");
    const appendChildSpy = jest.spyOn(document.body, "appendChild");

    expect(createElmSpy).not.toBeCalled();
    expect(appendChildSpy).not.toBeCalled();

    canvas.awake();

    expect(createElmSpy).toBeCalled();
    expect(appendChildSpy).toBeCalled();
  });

  describe(">> API", () => {
    beforeEach(() => {
      canvas.awake();
    });

    it("should draw and fill the rect", () => {
      const rect = new Rect(0, 0, 10, 10);

      const beginPathSpy = jest.spyOn(canvas.context, "beginPath");
      const rectSpy = jest.spyOn(canvas.context, "rect");
      const fillSpy = jest.spyOn(canvas.context, "fill");

      canvas.fillRect(rect, new Color(255, 255, 255, 1));

      expect(beginPathSpy).toBeCalled();
      expect(rectSpy).toBeCalledWith(rect.x, rect.y, rect.width, rect.height);
      expect(fillSpy).toBeCalled();
      expect(canvas.context.fillStyle).toBe<string>("#ffffff");
    });

    it("should clear the rect", () => {
      const rect = new Rect(0, 0, 10, 10);

      const spy = jest.spyOn(canvas.context, "clearRect");
      expect(spy).not.toBeCalled();

      canvas.clearRect(rect);

      expect(spy).toBeCalledWith(rect.x, rect.y, rect.width, rect.height);
    });

    it("should draw and fill the circle", () => {
      const center = new Vector2(0, 0);
      const radius = 1;

      const beginPathSpy = jest.spyOn(canvas.context, "beginPath");
      const arcSpy = jest.spyOn(canvas.context, "arc");
      const fillSpy = jest.spyOn(canvas.context, "fill");

      canvas.fillCircle(center, radius, new Color(255, 255, 255, 1));

      expect(beginPathSpy).toBeCalled();
      expect(arcSpy).toBeCalledWith(center.x, center.y, radius, 0, Math.PI * 2);
      expect(fillSpy).toBeCalled();
      expect(canvas.context.fillStyle).toBe("#ffffff");
    });

    it("should set css style", () => {
      const zIndex = "1";
      expect(canvas.element.style.zIndex).not.toBe<string>(zIndex);

      canvas.setStyle({ zIndex });

      expect(canvas.element.style.zIndex).toBe<string>(zIndex);
    });

    describe(">>> calculate local point by global", () => {
      beforeEach(() => {
        canvas.element.getBoundingClientRect = jest.fn().mockReturnValue({
          top: 20,
          left: 20,
          width: 500,
          height: 500,
        });
      });

      it("should return null if point is out of canvas boundaries", () => {
        expect(canvas.calcLocalPointFrom(new Vector2(0, 0))).toBeNull();
        expect(canvas.calcLocalPointFrom(new Vector2(541, 400))).toBeNull();
        expect(canvas.calcLocalPointFrom(new Vector2(400, 541))).toBeNull();
      });

      it("should return local point otherwise", () => {
        expect(canvas.calcLocalPointFrom(new Vector2(200, 300))).toEqual(
          new Vector2(180, 280)
        );
      });
    });
  });
});
