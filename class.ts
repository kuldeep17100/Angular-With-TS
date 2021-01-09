//class:variable and functions
class Point {
    x: number;
    y: number;
    //?-optional
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;

    }
    draw() {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    }
    getDistance(another: Point) {

    }
}

let point = new Point(3,4);
//point.x = 1;
//point.y = 2;
point.draw();