class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
 
 
Rectangle.prototype.area = function() {
    return this.w * this.h;
};
class Square extends Rectangle {
    constructor(s) {
        super(s, s);
    }
}
function main() {
    const rec = new Rectangre(3, 4);
    const sqr = new Square(3);
    console.log(rec.area());
    console.log(sqr.area());
}
