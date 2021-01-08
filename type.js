var val = 5;
val = 'ab';
var a;
a = 10;
a = 'sigh';
var b;
b = 90;
b = 'abc';
var c = [9, 8, 0];
var d = [0, 'i', true];
var Red = 0;
var Blue = 1;
var Green = 2;
//by default enumm has values starting from 0
//but it is good to initialize, if we want to add more
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Green"] = 2] = "Green";
})(color || (color = {}));
;
