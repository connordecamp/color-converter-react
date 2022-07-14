export default function rgbToHwb(red: number, green: number, blue: number): string {
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