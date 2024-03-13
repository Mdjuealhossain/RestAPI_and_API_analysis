"use client";
import { error } from "console";
import React from "react";

// fetch()- has replaced XMLHTTPREQEST
// fetch()- global method for making HTTP request
// 2 way to call - then ,async awit

// + fetch() is very easy to use compare to XmlHttpRequest
// + fetch() retuns a promise
// - returened promise can only hyandle network error

const FetchRequest = () => {
  // then start......

  const makeRequest = (url: any, methode?: any, data?: any) => {
    fetch(url, {
      method: methode,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          const msg = `Error :${response.status}`;
          throw new Error(msg);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts");
  };
  // getData();
  const postData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
      title: "POST REQUEST",
      body: "This is post request ",
      userId: 1,
    });
  };
  // postData();

  const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
      title: "UPDATE DATA",
      body: "This is PUT request for updating data id 1 ",
      userId: 1,
    });
  };
  // updateData();
  const updateSingleData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PATCH", {
      title: "UPDATE DATA",
    });
  };
  // updateSingleData();

  const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE");
  };

  // deleteData();

  // then end......

  //uses async awit start......

  const makeRequestAsnAW = async (url: any, config?: any) => {
    const res = await fetch(url, config);

    if (!res.ok) {
      const msg = `Error :${res.status}`;
      throw new Error(msg);
    }
    const data = res.json();
    return data;
  };

  const getData2 = () => {
    makeRequestAsnAW("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  // getData2();

  const sendData2 = () => {
    makeRequestAsnAW("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Async awit post title",
        body: "This is a send data methode",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  // sendData2();
  const updateData2 = () => {
    makeRequestAsnAW("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "Async awit PUT title",
        body: "This is a update data methode",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  // updateData2();

  const updateSingleData2 = () => {
    makeRequestAsnAW("https://jsonplaceholder.typicode.com/posts/8", {
      method: "PATCH",
      body: JSON.stringify({
        title: "Async awit PUT title",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  // updateSingleData2();
  const deleteData2 = () => {
    makeRequestAsnAW("https://jsonplaceholder.typicode.com/posts/8", {
      method: "DELETE",
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  deleteData2();

  return <div>FetchRequest</div>;
};

export default FetchRequest;
