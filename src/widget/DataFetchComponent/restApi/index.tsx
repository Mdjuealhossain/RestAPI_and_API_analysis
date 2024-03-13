// import React, { useState, FormEvent } from "react";

// export default function Page() {
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   async function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     setIsLoading(true); // Set loading to true when the request starts
//     try {
//       const formData = new FormData(event.currentTarget);
//       const response = await fetch("/api/submit", {
//         method: "POST",
//         body: formData,
//       });

//       // Handle response if necessary
//       const data = await response.json();
//       // ...
//     } catch (error) {
//       // Handle error if necessary
//       console.error(error);
//     } finally {
//       setIsLoading(false); // Set loading to false when the request completes
//     }
//   }

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" />
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? "Loading..." : "Submit"}
//       </button>
//     </form>
//   );
// }

export type Posts = {
  id: string;
  title: string;
};

export const posts: any = [
  { id: "1", title: "my name is jueal" },
  { id: "2", title: "my name is masum" },
  { id: "3", title: "my name is seam" },
  { id: "4", title: "my name is ahosan" },
];
