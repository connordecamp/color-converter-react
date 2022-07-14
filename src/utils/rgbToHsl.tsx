export default function rgbToHsl(red: number, green: number, blue: number): string {

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