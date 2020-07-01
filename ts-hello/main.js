"use strict";
// function log(message) {
//     console.log(message);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// var message = 'Hello World!';
// log(message);
// let count = 2;
// // Type Assertions
// let message;
// message = 'abd';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// // Regular Functions
// let log = function(message) {
//     console.log(message);
// }
// // Arrow functions
// let doLog = (message) => console.log(message);
// // Interfaces
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint = (point: Point) => {
// }
// drawPoint({
//     x:5,
//     y:6
// })
// import {Point} from './point'
// let point = new Point();
// point.draw();
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + " isSelected: " + component.isSelected);
