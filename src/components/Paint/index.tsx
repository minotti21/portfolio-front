import { MouseEvent, useCallback, useContext, useState } from "react";
import { RxEraser } from "react-icons/rx";
import { IoBrushOutline } from "react-icons/io5";
import Canvas from "../Canvas";
import {
  Description,
  StyledBrushSize,
  StyledPaint,
  StyledPaintContainer,
  StyledSideBar,
  StyledTitle,
} from "./style";
import { UserThemeContext } from "@/context/UserThemeContext";
import { Brush } from "./enum";
import rgbUtils from "@/utils/rgbUtils";

export default function Paint() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [pickedBrush, setPickedBrush] = useState(Brush.medium);
  const [isErasing, setIsErasing] = useState(false);

  const { theme } = useContext(UserThemeContext);

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

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      let brushSize = 28;

      switch (pickedBrush) {
        case Brush.extraSmall: {
          brushSize = 12;
          break;
        }
        case Brush.small: {
          brushSize = 20;
          break;
        }
        case Brush.medium: {
          brushSize = 28;
          break;
        }
        case Brush.big: {
          brushSize = 36;
          break;
        }
        case Brush.large: {
          brushSize = 44;
          break;
        }
      }

      if (isClicked) {
        ctx.beginPath();
        ctx.fillStyle = isErasing ? "#fff" : theme.defaultColor;
        ctx.roundRect(
          mousePosition.x - brushSize / 2,
          mousePosition.y - brushSize / 2,
          brushSize,
          brushSize,
          111,
        );
        ctx.fill();
      }
    },
    [mousePosition, isClicked],
  );

  return (
    <StyledPaint>
      <StyledTitle>Ateliê Digital 🎨🖌️</StyledTitle>
      <StyledPaintContainer>
        <StyledSideBar>
          <StyledBrushSize
            onClick={() => setPickedBrush(Brush.extraSmall)}
            $size={12}
            $isSelected={pickedBrush == Brush.extraSmall}
          />
          <StyledBrushSize
            onClick={() => setPickedBrush(Brush.small)}
            $size={20}
            $isSelected={pickedBrush == Brush.small}
          />
          <StyledBrushSize
            onClick={() => setPickedBrush(Brush.medium)}
            $size={28}
            $isSelected={pickedBrush == Brush.medium}
          />
          <StyledBrushSize
            onClick={() => setPickedBrush(Brush.big)}
            $size={36}
            $isSelected={pickedBrush == Brush.big}
          />
          <StyledBrushSize
            onClick={() => setPickedBrush(Brush.large)}
            $size={44}
            $isSelected={pickedBrush == Brush.large}
          />
          <IoBrushOutline
            size={44}
            cursor={"pointer"}
            color={
              isErasing
                ? theme.backgroundColor == "rgb(14, 14, 14)"
                  ? rgbUtils.lightenRGBColor(theme.backgroundColor, 60)
                  : rgbUtils.darkenRGBColor(theme.backgroundColor, 60)
                : theme.defaultColor
            }
            style={{ transition: "0.3s" }}
            onClick={() => setIsErasing(false)}
          />
          <RxEraser
            size={44}
            cursor={"pointer"}
            style={{ transition: "0.3s" }}
            color={
              isErasing
                ? theme.defaultColor
                : theme.backgroundColor == "rgb(14, 14, 14)"
                  ? rgbUtils.lightenRGBColor(theme.backgroundColor, 60)
                  : rgbUtils.darkenRGBColor(theme.backgroundColor, 60)
            }
            onClick={() => setIsErasing(true)}
          />
        </StyledSideBar>
        <Canvas
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          draw={draw}
          width={800}
          height={400}
        />
      </StyledPaintContainer>

      <Description>Semelhante ao jogo da cobrinha, utilizei React Hooks e HTML Canvas para fazer.</Description>
    </StyledPaint>
  );
}
