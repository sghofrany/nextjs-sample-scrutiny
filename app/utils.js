export function sampleA() {
    let a = 10;
    let b = 20 * a;
    let c = b * 5 * a * b * Math.random();
    return `This is A ${c}`;
}