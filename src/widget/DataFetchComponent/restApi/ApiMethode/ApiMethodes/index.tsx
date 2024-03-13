import { posts } from "../..";

export const fetchData = async (setComment: any) => {
  fetch("api/speed")
    .then((res) => res.json())
    .then((data) => setComment(data));
};

//   export async function postMet(event: any) {
//    event.preventDefault();

//    try {
//      const response = await fetch("/api/submit", {
//        method: "POST",
//        body: JSON.stringify({ input }),
//        headers: {
//          "Content-Type": "application/json",
//        },
//      });
//      const data = await response.json();
//      console.log("data", data);
//    } catch (error) {
//      console.error(error);
//    }
//  }
