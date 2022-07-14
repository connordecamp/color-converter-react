export default function rgbToHex(red: number, green: number, blue: number): string{

    if(red < 0 || red > 255)
        return '#000000';

    if(green < 0 || green > 255)
        return '#000000';

    if(blue < 0 || blue > 255)
        return '#000000';

    const hexString = [red, green, blue].map(x =>  {
        let part = x.toString(16).toUpperCase();
        return (part.length === 1) ? `0${part}` : part;
    }).join("");
    return `#${hexString}`; 
}