import React, { useState, useEffect } from 'react'
import os from 'os'
// get the current date


import NavBar from "../NavBar/NavBar"


export default function MarsRoverPhotos(){
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  const [photos1, setPhotos1] = useState([]);
  const [photos1State, setPhotos1State] = useState(false);
  const [photos2, setPhotos2] = useState([]);
  const [photos2State, setPhotos2State] = useState(false);
  const [photos3, setPhotos3] = useState([]);
  const [photos3State, setPhotos3State] = useState(false);
  const [photos4, setPhotos4] = useState([]);
  const [photos4State, setPhotos4State] = useState(false);
  console.log(photos4);


// get the current date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

useEffect(() => {
  let getMarsRoverPhtotos = async () => {
    const response1 = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`)
    const data1 = await response1.json()
    const response2 = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
    const data2 = await response2.json()
    const response3 = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`)
    const data3 = await response3.json()
    const response4 = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${API_KEY}`)
    const data4 = await response4.json()
    setPhotos1(data1.photos)
    setPhotos2(data2.photos)
    setPhotos3(data3.photos)
    setPhotos4(data4.photos)


  }
  getMarsRoverPhtotos();
}, []);








  return (
    <div className="mars-rover-photos">
      <NavBar/>
      <h1>Mars Rover Photos</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     {/* set three buttons to show either photos1, photos2 or photos3 and hide the photos that are not clicked*/}
      <button onClick={() => setPhotos1State(!photos1State, setPhotos2State(false), setPhotos3State(false),setPhotos4State(false))}>Photos1</button>
      <button onClick={() => setPhotos2State(!photos2State, setPhotos1State(false), setPhotos3State(false),setPhotos4State(false))}>Photos2</button>
      <button onClick={() => setPhotos3State(!photos3State, setPhotos2State(false), setPhotos1State(false),setPhotos4State(false))}>Photos3</button>
      <button onClick={() => setPhotos4State(!photos4State, setPhotos2State(false), setPhotos1State(false),setPhotos3State(false))}>Today</button>
      {/* if photos1 is clicked, show the photos1 and hide the photos2 and photos3 and photos4*/}
      <div>
      {photos1State && <div>
        <h2>Photos1</h2>
        <ul>
          {photos1.map((photo, index) => <li key={index}><img src={photo.img_src}/></li>)}
        </ul>
      </div>}
      {/* if photos2 is clicked, show the photos2 and hide the photos1 and photos3 and photos4*/}
      {photos2State && <div>
        <h2>Photos2</h2>
        <ul>
          {photos2.map((photo, index) => <li key={index}><img src={photo.img_src}/></li>)}
        </ul>
      </div>}
      {/* if photos3 is clicked, show the photos3 and hide the photos1 and photos2 and photos4*/}
      {photos3State && <div>
        <h2>Photos3</h2>
        <ul>
          {photos3.map((photo, index) => <li key={index}><img src={photo.img_src}/></li>)}
        </ul>
      </div>}
        {/* if photos4 is clicked, show the photos4 and hide the photos1 and photos2 and photos3 if photos4 has no length display a message*/}
        {photos4State && <div>
          <h2>Today</h2>
          <ul>
            
            {photos4.map((photo, index) => <li key={index}><img src={photo.img_src}/></li>)}
          </ul>
          {photos4.length === 0 && <p>No photos for today</p>}
        </div>}
    
     
      </div>
    </div>
  )
}
  
