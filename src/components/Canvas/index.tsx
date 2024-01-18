import { useEffect, useRef } from "react";
import { StyledCanvas } from "./styles";

export default function Canvas({
  draw,
  tabIndex,
  width,
  height,
}: {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
  tabIndex: number;
  width: number;
  height: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let frameCount = 0;
  let animationFrame = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    function render() {
      if (ctx) draw(ctx, frameCount);
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
      tabIndex={tabIndex}
      width={width}
      height={height}
    />
  );
}
