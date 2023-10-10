import { useContext, useState } from "react";
import { StyledBorderColorSelectorIcon, StyledColorSelector, ColorSelectorContainer, StyledColorIcon } from "./styles";
import { ThemeContext } from "@/app/layout";
import { isEqual } from "lodash";
import { colors } from "@/utils/colors";


export default function ColorSelector() {
    const [showColors, setShowColors] = useState(false);

    const { theme, changeTheme } = useContext(ThemeContext);

    const handleClick = (code: string) => {
        const newTheme = {
            ...theme,
            defaultColor: code,
        }

        if (isEqual(theme, newTheme)) {
            return;
        }

        changeTheme(newTheme);
        setShowColors(false);
    };

    return (
        <ColorSelectorContainer>
            <StyledBorderColorSelectorIcon onClick={() => setShowColors(!showColors)}>
            </StyledBorderColorSelectorIcon>
            {showColors && (
                <StyledColorSelector>
                    {colors.map(color => (
                        <StyledColorIcon onClick={() => handleClick(color)} key={color} color={color} />
                    ))}
                </StyledColorSelector>
            )}
        </ColorSelectorContainer>
    );
}