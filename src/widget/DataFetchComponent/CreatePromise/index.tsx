import React from "react";
import { Typography } from "@mui/material";

const CreatePromise = () => {
  console.log("start");
  // create a promise 3 step:- panding,resolve reject

  // const promis1 = new Promise((resolve, rejects) => {

  //   let completedPromise = true;

  //   if (completedPromise) {
  //     resolve(" complete promise 1 ");
  //   } else {
  //     rejects(" incomplete promise 1");
  //   }
  // });
  // const promis2 = new Promise((resolve, rejects) => {
  //   resolve(" complete promise 2 ");
  // });

  // Promise.all([promis1, promis2]).then((res) => {
  //   console.log(res);
  // });

  // distructure

  // Promise.all([promis1, promis2]).then(([res1, res2]) => {
  //   console.log(res1, res2);
  // });

  // race

  const promis1 = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(" complete promise 1 ");
    }, 3000);
  });
  const promis2 = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve(" complete promise 2 ");
    }, 1000);
  });

  Promise.race([promis1, promis2]).then((res) => {
    console.log(res);
  });

  console.log("end");

  return <Typography>CreatePromise</Typography>;
};

export default CreatePromise;
