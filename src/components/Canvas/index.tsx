import { KeyboardEventHandler, useEffect, useRef } from "react";
import { StyledCanvas } from "./styles";

export default function Canvas({
  draw,
  tabIndex,
  onKeyDown,
  width,
  height
}: {
  draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
  tabIndex: number;
  onKeyDown: KeyboardEventHandler<HTMLCanvasElement>;
  width: number;
  height: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  let frameCount = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    (function render() {
      frameCount += 1;
      if (ctx) draw(ctx, frameCount);
      animationFrameRef.current = requestAnimationFrame(render);
    })();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [draw]);

  return (
    <StyledCanvas
      ref={canvasRef}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      width={width}
      height={height}
    />
  );
}
