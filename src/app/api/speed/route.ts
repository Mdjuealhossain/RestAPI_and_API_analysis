import { posts } from "@/widget/DataFetchComponent/restApi";

export const GET = () => {
  return Response.json(posts);
};

// export async function Post(request: Request) {
//   const title = request.body.comment;
//   console.log("object,title", title);
//   const userId = posts.length + 1;
//   const comment = {
//     id: userId.toString,
//     title: title,
//   };
//   posts.push(comment);
// }
