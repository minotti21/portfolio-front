import { KeyboardEvent, useCallback, useState } from "react";
import Canvas from "../Canvas";
import { useTheme } from "styled-components";
import apple from "/apple.png";

const generateNewApplePosition = () => {
  return {
    x: Math.floor(Math.random() * 50) * 10,
    y: Math.floor(Math.random() * 50) * 10,
  };
};

export default function SnakeGame() {
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [snakePosition, setSnakePosition] = useState([{ x: 250, y: 250 }]);
  const [snakeDirection, setSnakeDirection] = useState<
    "right" | "left" | "up" | "down"
  >("right");
  const [snakeAcceleration, setSnakeAcceleration] = useState(10);
  const [applePosition, setApplePosition] = useState(
    generateNewApplePosition(),
  );

  const theme = useTheme();

  const moveSnake = (direction: string) => {
    switch (direction) {
      case "right": {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].x == 490) {
          newSnakePosition.unshift({
            x: 0,
            y: snakePosition[0].y,
          });
        } else {
          newSnakePosition.unshift({
            x: snakePosition[0].x + 10,
            y: snakePosition[0].y,
          });
        }

        newSnakePosition.pop();

        setSnakePosition(newSnakePosition);

        break;
      }
      case "left": {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].x == 0) {
          newSnakePosition.unshift({
            x: 500,
            y: snakePosition[0].y,
          });
        } else {
          newSnakePosition.unshift({
            x: snakePosition[0].x - 10,
            y: snakePosition[0].y,
          });
        }

        newSnakePosition.pop();

        setSnakePosition(newSnakePosition);

        break;
      }
      case "up": {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].y == 0) {
          newSnakePosition.unshift({
            y: 500,
            x: snakePosition[0].x,
          });
        } else {
          newSnakePosition.unshift({
            y: snakePosition[0].y - 10,
            x: snakePosition[0].x,
          });
        }

        newSnakePosition.pop();

        setSnakePosition(newSnakePosition);

        break;
      }
      case "down": {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].y == 490) {
          newSnakePosition.unshift({
            y: 0,
            x: snakePosition[0].x,
          });
        } else {
          newSnakePosition.unshift({
            y: snakePosition[0].y + 10,
            x: snakePosition[0].x,
          });
        }

        newSnakePosition.pop();

        setSnakePosition(newSnakePosition);

        break;
      }
    }
  };

  const checkLose = (position: { x: number; y: number }) => {
    const headOnBody = snakePosition.some(({ x, y }, i) => {
      if (i == 0) return false;

      return position.x == x && position.y == y;
    });

    if (headOnBody) {
      setGameRunning(false);
    }
  };

  const checkAppleGrab = (
    snakePosition: { x: number; y: number },
    applePosition: { x: number; y: number },
  ) => {
    if (
      snakePosition.x == applePosition.x &&
      snakePosition.y == applePosition.y
    ) {
      setApplePosition(generateNewApplePosition());
      feedSnake();
      setScore(score + 10);
    }
  };

  const feedSnake = () => {
    switch (snakeDirection) {
      case "right": {
        setSnakePosition((prevPosition) => {
          return [
            { x: prevPosition[0].x + 10, y: prevPosition[0].y },
            ...prevPosition,
          ];
        });

        break;
      }
      case "left": {
        setSnakePosition((prevPosition) => {
          return [
            { x: prevPosition[0].x - 10, y: prevPosition[0].y },
            ...prevPosition,
          ];
        });

        break;
      }
      case "up": {
        setSnakePosition((prevPosition) => {
          return [
            { y: prevPosition[0].y - 10, x: prevPosition[0].x },
            ...prevPosition,
          ];
        });

        break;
      }
      case "down": {
        setSnakePosition((prevPosition) => {
          return [
            { y: prevPosition[0].y + 10, x: prevPosition[0].x },
            ...prevPosition,
          ];
        });

        break;
      }
    }
  };

  const switchDirection = (e: KeyboardEvent) => {
    e.preventDefault();

    if (
      snakePosition[0].x == 500 ||
      snakePosition[0].x == -10 ||
      snakePosition[0].y == 500 ||
      snakePosition[0].y == -10
    ) {
      return;
    }

    switch (e.code) {
      case "ArrowRight":
      case "KeyD": {
        if (snakeDirection != "left") {
          setSnakeDirection("right");
        } else if (snakePosition.length == 1) {
          setSnakeDirection("right");
        }

        break;
      }
      case "ArrowLeft":
      case "KeyA": {
        if (snakeDirection != "right") {
          setSnakeDirection("left");
        } else if (snakePosition.length == 1) {
          setSnakeDirection("left");
        }

        break;
      }
      case "ArrowUp":
      case "KeyW": {
        if (snakeDirection != "down") {
          setSnakeDirection("up");
        } else if (snakePosition.length == 1) {
          setSnakeDirection("up");
        }

        break;
      }
      case "ArrowDown":
      case "KeyS": {
        if (snakeDirection != "up") {
          setSnakeDirection("down");
        } else if (snakePosition.length == 1) {
          setSnakeDirection("down");
        }

        break;
      }
    }
  };

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, frameCount: number) => {
      ctx.clearRect(0, 0, 500, 500);

      if (frameCount % 3 == 0) {
        moveSnake(snakeDirection);
        checkLose(snakePosition[0]);
        checkAppleGrab(snakePosition[0], applePosition);
      }

      ctx.fillStyle = "#333";
      snakePosition.forEach(({ x, y }) => {
        ctx.fillRect(x, y, 10, 10);
      });

      if (theme) ctx.fillStyle = theme.defaultColor;
      ctx.beginPath();
      ctx.roundRect(applePosition.x, applePosition.y, 10, 10, 8);
      ctx.fill();
    },
    [snakePosition, snakeDirection],
  );

  const startGame = () => {
    setGameRunning(true);
    setScore(0);
    setSnakePosition([{ x: 250, y: 250 }]);
    setApplePosition(generateNewApplePosition());
    setGameOver(false);
  };

  if (!gameRunning) {
    return <button onClick={startGame}>Começar o jogo</button>;
  }

  return (
    <div>
      <h1>{score}</h1>
      <Canvas
        draw={draw}
        tabIndex={0}
        onKeyDown={switchDirection}
        width={500}
        height={500}
      />
    </div>
  );
}
