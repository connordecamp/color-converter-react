function toHex(red: number, green: number, blue: number): string{

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

function toHsl(red: number, green: number, blue: number): string {

    for(let val of [red, green, blue]) {
        if (val < 0 || val > 255)
            return '';
    }

    const rPrime = red / 255.0;
    const gPrime = green / 255.0;
    const bPrime = blue / 255.0;

    const cMax = Math.max(rPrime, gPrime, bPrime);
    const cMin = Math.min(rPrime, gPrime, bPrime);

    const delta = cMax - cMin;

    // HSL will be decimals in range [0,1]
    // Calculations from https://www.rapidtables.com/convert/color/rgb-to-hsl.html
    let hue = 0;
    let saturation = 0;
    let lightness = (cMax + cMin) / 2;

    if (delta !== 0) {
        if (rPrime > gPrime && rPrime > bPrime) {
            hue = 60 * (((gPrime - bPrime) / delta) % 6);
        }

        if (gPrime > rPrime && gPrime > bPrime) {
            hue = 60 * (((bPrime - rPrime) / delta) + 2);
        }

        if (bPrime > rPrime && bPrime > gPrime) {
            hue = 60 * (((rPrime - gPrime) / delta) + 4);
        }
    }

    saturation = delta / (1 - Math.abs(2 * lightness - 1));

    let hueDegrees = Math.round(hue);
    let saturationPercent = Math.round(saturation * 100);
    let lightnessPercent = Math.round(lightness * 100);

    return `hsl(${hueDegrees}, ${saturationPercent}%, ${lightnessPercent}%)`;
}

function toHsv(red: number, green: number, blue: number): string {

    for(let val of [red, green, blue]) {
        if (val < 0 || val > 255)
            return '';
    }

    // Make RGB values into percentages
    const rPrime = red / 255.0;
    const gPrime = green / 255.0;
    const bPrime = blue / 255.0;

    const cMax = Math.max(rPrime, gPrime, bPrime);
    const cMin = Math.min(rPrime, gPrime, bPrime);

    const delta = cMax - cMin;

    // https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB

    let hue = 0;
    let saturation = 0;
    let value = cMax;

    if(cMax !== 0) {
        saturation = delta / value;
    }

    if (delta !== 0) {
        if (rPrime > gPrime && rPrime > bPrime) {
            hue = 60 * (((gPrime - bPrime) / delta) % 6);
        }

        if (gPrime > rPrime && gPrime > bPrime) {
            hue = 60 * (((bPrime - rPrime) / delta) + 2);
        }

        if (bPrime > rPrime && bPrime > gPrime) {
            hue = 60 * (((rPrime - gPrime) / delta) + 4);
        }
    }

    hue = Math.round(hue);
    saturation = Math.round(saturation * 100);
    value = Math.round(value * 100);

    return `hsv(${hue}, ${saturation}%, ${value}%)`;
}

function toHwb(red: number, green: number, blue: number): string {
    for(let val of [red, green, blue]) {
        if (val < 0 || val > 255)
            return '';
    }

    const rPrime = red / 255.0;
    const gPrime = green / 255.0;
    const bPrime = blue / 255.0;

    const cMax = Math.max(rPrime, gPrime, bPrime);
    const cMin = Math.min(rPrime, gPrime, bPrime);

    const delta = cMax - cMin;

    // white and black will be decimals in range [0,1]
    // https://en.wikipedia.org/wiki/HWB_color_model

    let hue = 0;
    let whiteness = Math.min(rPrime, gPrime, bPrime);
    let blackness = 1 - Math.max(rPrime, gPrime, bPrime);

    if (delta !== 0) {
        if (rPrime > gPrime && rPrime > bPrime) {
            hue = 60 * (((gPrime - bPrime) / delta) % 6);
        }

        if (gPrime > rPrime && gPrime > bPrime) {
            hue = 60 * (((bPrime - rPrime) / delta) + 2);
        }

        if (bPrime > rPrime && bPrime > gPrime) {
            hue = 60 * (((rPrime - gPrime) / delta) + 4);
        }
    }

    hue = Math.round(hue);
    whiteness = Math.round(whiteness * 100);
    blackness = Math.round(blackness * 100);

    return `hwb(${hue}, ${whiteness}%, ${blackness}%)`;
}

function toCmyk(red: number, green: number, blue: number): string{

    /* Algorithm
     * 1. Map rgb values into range [0,1] (called rgb')
     * 2. K = 1 - max(rgb')
     * 3. C = (1-r'-k) / (1 - k)
     * 4. M = (1-g'-k) / (1 - k)
     * 5. Y = (1-b'-k) / (1 - k)
     */
    const rPrime = red / 255.0;
    const gPrime = green / 255.0;
    const bPrime = blue / 255.0;

    let K = 1 - Math.max(rPrime, gPrime, bPrime);

    const multiplier = 1 / (1 - K);
    
    let C = (1 - rPrime - K) * multiplier;
    let M = (1 - gPrime - K) * multiplier;
    let Y = (1 - bPrime - K) * multiplier;

    C = Math.round(C * 100);
    M = Math.round(M * 100);
    Y = Math.round(Y * 100);
    K = Math.round(K * 100);


    return `cmyk(${C}%, ${M}%, ${Y}%, ${K}%)`;
}

export default {toHex, toHsl, toHsv, toHwb, toCmyk};