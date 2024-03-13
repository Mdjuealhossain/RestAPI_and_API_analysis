import React from "react";

const XmlHttpRequest = () => {
  // event - onload() , onerror()
  // property - response,responseText,responseTypes,responseUrl,status,statusText
  // function - open(), send(),sendRequest( )

  const makeRequest = (method: any, url: any, data?: any) => {
    var XMLHttpRequest = require("xhr2");
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };
    xhr.error = () => {
      console.log("error is here");
    };
    xhr.send(JSON.stringify(data));
  };
  const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/todos");
  };
  getData();
  const postData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/todos", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
  };
  // postData();
  const updateData = () => {
    makeRequest("PUT", "https://jsonplaceholder.typicode.com/todos/1", {
      id: 1,
      title: "This is bussines",
      body: "Here you go and catch this soon",
      userId: 1,
    });
  };
  // updateData();
  const updateSingleData = () => {
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/todos/200", {
      title: "This is bussines",
    });
  };

  // updateSingleData();

  const deleteData = () => {
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/todos/200");
  };
  deleteData();

  return <div>XmlHttpRequest</div>;
};

export default XmlHttpRequest;
