import { MouseEvent, useCallback, useState } from "react";
import Canvas from "../Canvas";
import { StyledPaint, StyledTitle } from "./style";

export default function Paint() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    setMousePosition({ x, y });
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsClicked(false);
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsClicked(true);
  };

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    if (isClicked) {
      ctx.beginPath();
      ctx.roundRect(mousePosition.x, mousePosition.y, 10, 10, 10);
      ctx.fill();
    }
  }, [mousePosition, isClicked]);
  return (
    <StyledPaint>
      <StyledTitle>Paint</StyledTitle>
      <Canvas
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        draw={draw}
        width={900}
        height={400}
        isPaint
      />
    </StyledPaint>
  );
}
