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

import FetchRequest from "@/widget/FetchRequest";
import XmlHttpRequest from "@/widget/XmlHttpRequest";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, FormEvent, Suspense } from "react";

export default function Page() {
  return (
    <Box>
      <FetchRequest />
    </Box>
  );
}
