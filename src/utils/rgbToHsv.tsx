export default function rgbToHsv(red: number, green: number, blue: number): string {

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