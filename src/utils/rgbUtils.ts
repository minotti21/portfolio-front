interface rgbUtilsType {
    lightenRGBColor: (colorString: string, amount: number) => string;
    darkenRGBColor: (colorString: string, amount: number) => string;
    makeRGBColorTransparent: (colorString: string, amount: number) => string;
}

interface rgbType {
    r: number;
    g: number;
    b: number;
    a?: number;
}

function extractRGBComponents(color: string): rgbType {
    const match = color.match(/rgb\((\d+), (\d+), (\d+)\)/);

    if (!match) {
        throw new Error("Invalid color format. Use the format rgb(r, g, b).");
    }

    const [, r, g, b] = match.map(Number);

    return { r, g, b };
}

function formatRGBColor(color: rgbType): string {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function lightenRGBColor(colorString: string, amount: number): string {
    const color = extractRGBComponents(colorString);
    color.r = Math.min(255, color.r + amount);
    color.g = Math.min(255, color.g + amount);
    color.b = Math.min(255, color.b + amount);
    return formatRGBColor(color);
}

function darkenRGBColor(colorString: string, amount: number): string {
    const color = extractRGBComponents(colorString);
    color.r = Math.max(0, color.r - amount);
    color.g = Math.max(0, color.g - amount);
    color.b = Math.max(0, color.b - amount);
    return formatRGBColor(color);
}

function makeRGBColorTransparent(colorString: string, opacity: number): string {
    const color = extractRGBComponents(colorString);
    color.a = opacity;
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
}

const rgbUtils: rgbUtilsType = {
    lightenRGBColor,
    darkenRGBColor,
    makeRGBColorTransparent,
}

export default rgbUtils;