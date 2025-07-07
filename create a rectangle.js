function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
}
function main() {
    const a = parseInt(readLine());
    const b = parseInt(readLine());
    const rect = Rectangle(a, b);
    
    console.log(rect.length),
    console.log(rect.width);
    console.log(rect.perimeter);
    console.log(rect.area);
}
