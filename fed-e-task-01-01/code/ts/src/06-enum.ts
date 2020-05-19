// 枚举
//  注意 enum 是采用  = 赋值

// enum PostStatus {
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }


//----------------------------
//  可以不用赋值 默认从0开始

// enum PostStatus {
//   Draft , //0
//   Unpublished , //1
//   Published  //2
// }

//----------------------------
//  给第一个赋值 后面的会在第一个基础上自加

// enum PostStatus {
//   Draft =6, //6
//   Unpublished , //7
//   Published  //8
// }

//  编译后
// var PostStatus;
// (function (PostStatus) {
//     PostStatus[PostStatus["Draft"] = 0] = "Draft";
//     PostStatus[PostStatus["Unpublished"] = 1] = "Unpublished";
//     PostStatus[PostStatus["Published"] = 2] = "Published"; //2
// })(PostStatus || (PostStatus = {}));

// 常量枚举
const enum PostStatus {
  Draft=1 , //0
  Unpublished , //1
  Published  //2
}
const post ={
status:PostStatus.Draft
}