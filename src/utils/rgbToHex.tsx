
export default function rgbToHex(red: number, green: number, blue: number): string{

    if(red < 0 || red > 255)
        return '';

    if(green < 0 || green > 255)
        return '';

    if(blue < 0 || blue > 255)
        return '';

    const hexString = [red, green, blue].map(x => x.toString(16).toUpperCase()).join("");
    return `#${hexString}`; 
}