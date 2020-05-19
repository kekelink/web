// 写法1
var arr1 = [1, 2, 3];
// 写法2
var arr2 = [1, 2, 3];
var arr3 = ["1", "2"];
var arr4 = ["1", "2"];
// 小案例
// 如果是 JS，需要判断是不是每个成员都是数字
// 使用 TS，类型有保障，不用添加类型判断
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2, 3); // => 6
//# sourceMappingURL=04-arr.js.map