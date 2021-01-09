//class:variable and functions
var Point = /** @class */ (function () {
    //?-optional
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point(3, 4);
//point.x = 1;
//point.y = 2;
point.draw();
//# sourceMappingURL=class.js.map