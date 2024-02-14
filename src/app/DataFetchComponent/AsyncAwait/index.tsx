import React from "react";

const AsyncAwait = () => {
  console.log("wellcome");

  const taskOne = () => {
    return new Promise((resolve, rejects) => {
      resolve(" complete promise 1 ");
    });
  };
  const taskTwo = () => {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        resolve(" complete promise 2 ");
      }, 2000);
    });
  };
  const taskThree = () => {
    return new Promise((resolve, rejects) => {
      resolve(" complete promise 3 ");
    });
  };
  const taskFoure = () => {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        rejects(" incomplete promise 4");
      }, 3000);
    });
  };
  const taskFive = () => {
    return new Promise((resolve, rejects) => {
      resolve(" complete promise 5");
    });
  };
  const allTask = async () => {
    try {
      const t1 = await taskOne();
      console.log(t1);
      const t2 = await taskTwo();
      console.log(t2);
      const t3 = await taskThree();
      console.log(t3);
      const t4 = await taskFoure();
      console.log(t4);
      const t5 = await taskFive();
      console.log(t5);
    } catch (err) {
      console.log(err);
    }
  };
  allTask();

  console.log("bye");
  return <div>AsincAwait</div>;
};

export default AsyncAwait;
