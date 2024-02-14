// "use client";

// import { Box } from "@mui/material";
// import CreatePromise from "./DataFetchComponent/CreatePromise";
// import AsyncCallBack from "./DataFetchComponent/AsyncCallBack";
// import PromiseChaining from "./DataFetchComponent/CreatePromise/PromiseChaining";
// import AsyncAwait from "./DataFetchComponent/AsyncAwait";
// import { usePathname } from "next/navigation";
// import { Profile } from "./DataFetchComponent/restApi";

// const Home = () => {
//   const pathname = usePathname();

//   // function switchLocale(locale: string) {
//   //   // e.g. '/en/about' or '/fr/contact'
//   //   const newPath = `/${locale}${pathname}`;
//   //   window.history.replaceState(null, "", newPath);
//   // }

//   return (
//     <Box>
//       <Profile />

//       {/* <>
//         <button onClick={() => switchLocale("en")}>English</button>
//         <button onClick={() => switchLocale("fr")}>French</button>
//       </>
//       {/* <CreatePromise /> */}

//       {/* <AsyncCallBack /> */}
//       {/* <PromiseChaining /> */}
//       {/* <AsyncAwait /> */}
//     </Box>
//   );
// };

// export default Home;

"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, FormEvent, Suspense } from "react";
import { fetchData } from "./DataFetchComponent/restApi/ApiMethode/ApiMethodes";

export default function Page() {
  const [comment, setComment] = useState<any>([]);
  const [input, setInput] = useState("");

  async function postMet(event: any) {
    event.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ input }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData(setComment);

  return (
    <>
      <Suspense>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        ></TextField>
        <Button variant="contained" type="submit" onClick={postMet}>
          Submit
        </Button>
      </Suspense>
      {comment.map((com: any) => {
        return (
          <Box key={com.id}>
            <Typography>{com.title}</Typography>
          </Box>
        );
      })}
    </>
  );
}
