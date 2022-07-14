export default function rgbToCmyk(red: number, green: number, blue: number): string{

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