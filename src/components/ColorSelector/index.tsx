import { RefObject, createRef, useContext, useRef, useState } from "react";
import {
  StyledBorderColorSelectorIcon,
  StyledColorSelector,
  ColorSelectorContainer,
  StyledColorIcon,
} from "./styles";
import { UserThemeContext } from "@/context/UserThemeContext";
import { isEqual } from "lodash";
import { colors } from "@/constants/colors";

export default function ColorSelector() {
  const { theme, changeTheme } = useContext(UserThemeContext);
  const [showColors, setShowColors] = useState(false);
  const refs = useRef([]);

  refs.current = colors.map((_, i) => refs.current[i] ?? createRef());

  const handleMouseEnter = (div: RefObject<HTMLDivElement>) => {
    if (div.current) {
      const computedStyle = window.getComputedStyle(div.current);
      const backgroundColor = computedStyle.backgroundColor;
      const newTheme = {
        ...theme,
        defaultColor: backgroundColor,
      };

      if (isEqual(theme, newTheme)) {
        return;
      }

      changeTheme(newTheme);
    }
  };

  return (
    <ColorSelectorContainer>
      <StyledBorderColorSelectorIcon
        onClick={() => setShowColors(!showColors)}
      />

      <StyledColorSelector $showColors={showColors}>
        {colors.map((color, i) => (
          <StyledColorIcon
            ref={refs.current[i]}
            onMouseEnter={() => handleMouseEnter(refs.current[i])}
            onClick={() => setShowColors(false)}
            key={color}
            color={color}
          />
        ))}
      </StyledColorSelector>
    </ColorSelectorContainer>
  );
}
