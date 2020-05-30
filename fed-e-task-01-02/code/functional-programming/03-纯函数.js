 let arr = [1,2,3,4,5,6]
//  纯函数
console.log(arr.slice(0,3))
console.log(arr.slice(0,3))
console.log(arr.slice(0,3))


// 不纯的函数
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));

// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]


// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// []