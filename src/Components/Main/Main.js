import React, { useEffect, useState } from "react";
import os from "os";
import NavBar from "../NavBar/NavBar";





export default function Main() {

  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

useEffect(() => {
  let data = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data;
  };
  data()
}, []);



  return (
    <div>
      <NavBar/>
      <h1>{os.hostname()}</h1>
      <h2>Main</h2>
    </div>
  );
}