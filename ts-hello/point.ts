// Class
export class Point {
    constructor(private _x?: number, private _y?: number){
        // Question maak makes variable not necessary
        // Private prevents it from changing its value
        // if private/public is used in the parameters, then you dont need to use this
    }

    draw() {
        console.log("X: " + this._x + ", Y:" + this._y)
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('values cannot be less than 0.');
        this._x = value;
    }
}
