import React from "react";

const AsyncCallBack = () => {
  //callback

  const taskOne = (callback: any) => {
    console.log("task 1 is complete");
    callback();
  };

  const taskTwo = (callback: any) => {
    setTimeout(() => {
      console.log("task 2 is dataloading");
      callback();
    }, 4000);
  };
  const taskThree = (callback: any) => {
    console.log("task 3 is complete");
    callback();
  };
  const taskFoue = () => {
    console.log("task 4 is complete");
  };

  taskOne(() => {
    taskTwo(() => {
      taskThree(() => {
        taskFoue();
      });
    });
  });

  return <div>PromiseChaining</div>;
};

export default AsyncCallBack;
