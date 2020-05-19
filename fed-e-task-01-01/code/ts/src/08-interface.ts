export {}

// 接口
// interface Post {
//   title:string
//   content:string
// }
// // 使用接口
// function printPost (post: Post) {
//   console.log(post.title)
//   console.log(post.content)
  
// }
// printPost({title:'234',content:'23'})
//  ? 标示可选
// interface Post {
//   title:string
//   content:string,
//   subtitle?:string
// }
// // 使用接口
// function printPost (post: Post) {
//   console.log(post.title)
//   console.log(post.content)
  
// }

// //  readonly 只读
// interface Post {
//   title:string
//   content:string,
//   subtitle?:string,
//   readonly sun:string
// }
// // 使用接口
// function printPost (post: Post) {
//   console.log(post.title)
//   console.log(post.content)
  
// }
//  任意类型的属性
interface Post {
  [prop:string]:string
}
// 使用接口
const cache:Post={
  name:'sdffs',
  title:'s'
}