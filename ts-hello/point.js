"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
// Class
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // Question maak makes variable not necessary
        // Private prevents it from changing its value
        // if private/public is used in the parameters, then you dont need to use this
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + ", Y:" + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('values cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
