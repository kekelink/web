"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function (food) {
        console.log(food);
    };
    Person.prototype.run = function (distance) {
        console.log(distance);
    };
    return Person;
}());
//  泛型 定义
function fn(str) {
    var arr = Array(length).fill(str);
    return arr;
}
//# sourceMappingURL=10-implements.js.map