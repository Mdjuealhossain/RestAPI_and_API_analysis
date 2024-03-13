"use client";
import axios from "axios";
import React from "react";

const AxiosApiMethod = () => {
  // axios (config)
  // axios (url [,config])

  //   axios returns response object - data,status,statusText,Headers,config

  //   axios.get(url ,config)

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/101")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));

  // axios.post(url ,config)
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "axios update",
        body: " this is axio put mathode",
        userId: 1,
      }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  // axios.put(url ,config)
  axios
    .put("https://jsonplaceholder.typicode.com/posts/10", {
      method: "PUT",
      body: JSON.stringify({
        id: 10,
        title: "axios post",
        body: " this is axio post mathode",
        userId: 1,
      }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  // axios.patch(url ,config)
  axios
    .patch("https://jsonplaceholder.typicode.com/posts/10", {
      method: "PATCH",
      body: JSON.stringify({
        title: "axios post of put methode",
      }),
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  // axios.delete(url ,config)
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/10", {
      method: "DELETE",
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  return <div></div>;
};

export default AxiosApiMethod;
