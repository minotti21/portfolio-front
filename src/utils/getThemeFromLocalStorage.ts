import { black, colors, white } from "../constants/colors";

const getThemeFromLocalStorage = () => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === null) {
        const theme = {
            defaultColor: colors[0],
            backgroundColor: black,
            fontColor: white,
        }

        localStorage.setItem('theme', JSON.stringify(theme));

        return theme;
    }

    return JSON.parse(storedTheme);
}

export default getThemeFromLocalStorage;