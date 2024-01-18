import { useCallback, useEffect, useState } from "react";
import Canvas from "../Canvas";
import { useTheme } from "styled-components";
import { GameStates, SnakeDirections } from "./enums";
import Button from "../Button";
import {
  StyledGameScreen,
  StyledScore,
  StyledSnakeGame,
  StyledTips,
  StyledTipsTitle,
  StyledTitle,
} from "./style";

const generateNewApplePosition = (
  snakePosition: { x: number; y: number }[],
) => {
  let position = {
    x: Math.floor(Math.random() * 45) * 20,
    y: Math.floor(Math.random() * 20) * 20,
  };

  while (
    snakePosition.some(({ x, y }) => {
      return x == position.x && y == position.y;
    })
  ) {
    position = {
      x: Math.floor(Math.random() * 45) * 20,
      y: Math.floor(Math.random() * 20) * 20,
    };
  }

  return position;
};

export default function SnakeGame() {
  const [gameState, setGameState] = useState<GameStates>(GameStates.Unstarted);
  const [score, setScore] = useState(0);
  const [snakePosition, setSnakePosition] = useState([{ x: 460, y: 200 }]);
  const [snakeDirection, setSnakeDirection] = useState<SnakeDirections>(
    SnakeDirections.Right,
  );
  const [applePosition, setApplePosition] = useState(
    generateNewApplePosition(snakePosition),
  );

  useEffect(() => {
    if (gameState == GameStates.Running) {
      document.addEventListener("keydown", switchDirection);
    }

    return () => document.removeEventListener("keydown", switchDirection);
  }, [snakeDirection, gameState]);

  const theme = useTheme();

  const moveSnake = (direction: SnakeDirections) => {
    switch (direction) {
      case SnakeDirections.Right: {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].x >= 880) {
          newSnakePosition.unshift({
            x: 0,
            y: snakePosition[0].y,
          });
        } else {
          newSnakePosition.unshift({
            x: snakePosition[0].x + 20,
            y: snakePosition[0].y,
          });
        }

        newSnakePosition.pop();

        setSnakePosition(newSnakePosition);

        break;
      }
      case SnakeDirections.Left: {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].x <= 0) {
          newSnakePosition.unshift({
            x: 900,
            y: snakePosition[0].y,
          });
        } else {
          newSnakePosition.unshift({
            x: snakePosition[0].x - 20,
            y: snakePosition[0].y,
          });
        }

        newSnakePosition.pop();

        setSnakePosition(newSnakePosition);

        break;
      }
      case SnakeDirections.Up: {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].y <= 0) {
          newSnakePosition.unshift({
            y: 400,
            x: snakePosition[0].x,
          });
        } else {
          newSnakePosition.unshift({
            y: snakePosition[0].y - 20,
            x: snakePosition[0].x,
          });
        }

        newSnakePosition.pop();

        setSnakePosition(newSnakePosition);

        break;
      }
      case SnakeDirections.Down: {
        const newSnakePosition = snakePosition;

        if (snakePosition[0].y >= 380) {
          newSnakePosition.unshift({
            y: 0,
            x: snakePosition[0].x,
          });
        } else {
          newSnakePosition.unshift({
            y: snakePosition[0].y + 20,
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
      setGameState(GameStates.Over);
    }
  };

  const checkAppleGrab = (
    snakePosition: { x: number; y: number }[],
    applePosition: { x: number; y: number },
  ) => {
    if (
      snakePosition[0].x == applePosition.x &&
      snakePosition[0].y == applePosition.y
    ) {
      setApplePosition(generateNewApplePosition(snakePosition));
      feedSnake();
      setScore(score + 10);
    }
  };

  const feedSnake = () => {
    switch (snakeDirection) {
      case SnakeDirections.Right: {
        setSnakePosition((prevPosition) => {
          if (prevPosition[0].x == 880) {
            return [{ x: 0, y: prevPosition[0].y }, ...prevPosition];
          }

          return [
            { x: prevPosition[0].x + 20, y: prevPosition[0].y },
            ...prevPosition,
          ];
        });

        break;
      }
      case SnakeDirections.Left: {
        setSnakePosition((prevPosition) => {
          if (prevPosition[0].x == 0) {
            return [{ x: 900, y: prevPosition[0].y }, ...prevPosition];
          }

          return [
            { x: prevPosition[0].x - 20, y: prevPosition[0].y },
            ...prevPosition,
          ];
        });

        break;
      }
      case SnakeDirections.Up: {
        setSnakePosition((prevPosition) => {
          if (prevPosition[0].y == 0) {
            return [{ y: 400, x: prevPosition[0].x }, ...prevPosition];
          }

          return [
            { y: prevPosition[0].y - 20, x: prevPosition[0].x },
            ...prevPosition,
          ];
        });

        break;
      }
      case SnakeDirections.Down: {
        setSnakePosition((prevPosition) => {
          if (prevPosition[0].y == 380) {
            return [{ y: 0, x: prevPosition[0].x }, ...prevPosition];
          }

          return [
            { y: prevPosition[0].y + 20, x: prevPosition[0].x },
            ...prevPosition,
          ];
        });

        break;
      }
    }
  };

  const switchDirection = (e: any) => {
    e.preventDefault();

    if (
      snakePosition[0].x >= 900 ||
      snakePosition[0].x < 0 ||
      snakePosition[0].y >= 400 ||
      snakePosition[0].y < 0
    ) {
      return;
    }

    switch (e.code) {
      case "ArrowRight":
      case "KeyD": {
        if (snakeDirection != SnakeDirections.Left) {
          setSnakeDirection(SnakeDirections.Right);
          return;
        }

        if (snakePosition.length == 1) {
          setSnakeDirection(SnakeDirections.Right);
          return;
        }

        break;
      }
      case "ArrowLeft":
      case "KeyA": {
        if (snakeDirection != SnakeDirections.Right) {
          setSnakeDirection(SnakeDirections.Left);
          return;
        }

        if (snakePosition.length == 1) {
          setSnakeDirection(SnakeDirections.Left);
          return;
        }

        break;
      }
      case "ArrowUp":
      case "KeyW": {
        if (snakeDirection != SnakeDirections.Down) {
          setSnakeDirection(SnakeDirections.Up);
          return;
        }

        if (snakePosition.length == 1) {
          setSnakeDirection(SnakeDirections.Up);
          return;
        }

        break;
      }
      case "ArrowDown":
      case "KeyS": {
        if (snakeDirection != SnakeDirections.Up) {
          setSnakeDirection(SnakeDirections.Down);
          return;
        }

        if (snakePosition.length == 1) {
          setSnakeDirection(SnakeDirections.Down);
          return;
        }

        break;
      }
    }
  };

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, frameCount: number) => {
      ctx.clearRect(0, 0, 900, 400);

      for (let i = 0; i < 45; i++) {
        for (let j = 0; j < 20; j++) {
          if ((i + j) % 2 === 0) {
            ctx.fillStyle = "#f5f5f5";
          } else {
            ctx.fillStyle = "#fff";
          }

          ctx.beginPath();
          ctx.roundRect(i * 20, j * 20, 20, 20, 2);
          ctx.fill();
        }
      }

      if (frameCount % 6 == 0) {
        moveSnake(snakeDirection);
        checkLose(snakePosition[0]);
        checkAppleGrab(snakePosition, applePosition);
      }

      ctx.fillStyle = "#065c00";
      snakePosition.forEach(({ x, y }, i) => {
        ctx.beginPath();
        ctx.roundRect(x, y, 20, 20, 2);
        ctx.fill();
      });

      if (theme) ctx.fillStyle = theme.defaultColor;
      ctx.beginPath();
      ctx.roundRect(applePosition.x, applePosition.y, 20, 20, 2);
      ctx.fill();
    },
    [snakePosition, snakeDirection],
  );

  const startGame = () => {
    setGameState(GameStates.Running);
    setScore(0);
    setSnakePosition([{ x: 460, y: 200 }]);
    setApplePosition(generateNewApplePosition(snakePosition));
  };

  let gameComponent = (
    <StyledGameScreen>
      <StyledTipsTitle>Como jogar?</StyledTipsTitle>
      <StyledTips>
        Utilize as setinhas do teclado ou as teclas W A S D para movimentar a
        cobrinha
      </StyledTips>
      <Button text="Jogar" onClick={() => startGame()} />
    </StyledGameScreen>
  );

  if (gameState == GameStates.Running) {
    gameComponent = (
      <>
        <Canvas draw={draw} tabIndex={0} width={900} height={400} />
      </>
    );
  }

  if (gameState == GameStates.Over) {
    gameComponent = (
      <>
        <StyledGameScreen>
          <StyledTipsTitle>Você fez {score} pontos!</StyledTipsTitle>
          <StyledTips>Deseja jogar novamente?</StyledTips>
          <Button text="Jogar" onClick={() => startGame()} />
        </StyledGameScreen>
      </>
    );
  }

  return (
    <StyledSnakeGame>
      <StyledTitle>Snake Game</StyledTitle>
      {gameComponent}
    </StyledSnakeGame>
  );
}
