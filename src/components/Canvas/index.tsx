import { MouseEventHandler, useEffect, useRef } from "react";
import { StyledCanvas, StyledScore } from "./styles";

export default function Canvas({
  draw,
  width,
  height,
  score,
  onMouseMove,
  onMouseDown,
  onMouseUp,
}: {
  draw: (ctx: CanvasRenderingContext2D) => void;
  width: number;
  height: number;
  score?: number;
  onMouseMove?: MouseEventHandler<HTMLCanvasElement>;
  onMouseDown?: MouseEventHandler<HTMLCanvasElement>;
  onMouseUp?: MouseEventHandler<HTMLCanvasElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let frameCount = 0;
  let animationFrame = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    function render() {
      if (ctx && frameCount % 8 == 0) draw(ctx);
      frameCount += 1;
      animationFrame = window.requestAnimationFrame(render);
    }

    render();

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [draw]);

  return (
    <StyledCanvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {!!score && <StyledScore>{score}</StyledScore>}
    </StyledCanvas>
  );
}
