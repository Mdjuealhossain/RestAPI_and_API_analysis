import React from "react";

const PromiseChaining = () => {
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

  taskOne()
    .then((res) => {
      console.log(res);
    })
    .then(taskTwo)
    .then((res) => {
      console.log(res);
    })
    .then(taskThree)
    .then((res) => {
      console.log(res);
    })
    .then(taskFoure)
    .then((res) => {
      console.log(res);
    })
    .then(taskFive)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("bye");

  return <div>PromiseChaining</div>;
};

export default PromiseChaining;
