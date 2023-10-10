import { colors } from "./colors";

const getThemeFromLocalStorage = () => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem('theme') : null;

    if (storedTheme == null) {
        const theme = {
            defaultColor: colors[0],
            backgroundColor: 'rgb(17, 17, 17)',
            fontColor: 'rgb(248, 250, 252)',
        }

        typeof window !== 'undefined' && localStorage.setItem('theme', JSON.stringify(theme));

        return theme;
    }

    return JSON.parse(storedTheme);
}

export default getThemeFromLocalStorage;