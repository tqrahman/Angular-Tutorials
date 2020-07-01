// function log(message) {
//     console.log(message);
// }

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

import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);

component.onClick();
console.log(`likesCount: ${component.likesCount} isSelected: ${component.isSelected}`);