import React, { useState, useEffect } from 'react'
import os from 'os'
// get the current date


import NavBar from "../../NavBar/NavBar"


export default function MarsRoverPhotos(){
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;
  
  // rovers
  const [curiosity, setCuriosity] = useState(false);
  const [opportunity, setOpportunity] = useState(false);
  const [spirit, setSpirit] = useState(false);



// curiosity photos
 const [curiosityFHAZ, setCuriosityFHAZ] = useState([]);
 const [curiosityFHAZState, setCuriosityFHAZState] = useState(false);
 const [curiosityRHAZ, setCuriosityRHAZ] = useState([]);
 const [curiosityRHAZState, setCuriosityRHAZState] = useState(false);
 const [curiosityMAST, setCuriosityMAST] = useState([]);
 const [curiosityMASTState, setCuriosityMASTState] = useState(false);
 const [curiosityCHEMCAM, setCuriosityCHEMCAM] = useState([]);
 const [curiosityCHEMCAMState, setCuriosityCHEMCAMState] = useState(false);
 const [curiosityMAHLI, setCuriosityMAHLI] = useState([]);
 const [curiosityMAHLIState, setCuriosityMAHLIState] = useState(false);
 const [curiosityMARDI, setCuriosityMARDI] = useState([]);
 const [curiosityMARDIState, setCuriosityMARDIState] = useState(false);
 const [curiosityNAVCAM, setCuriosityNAVCAM] = useState([]);
 const [curiosityNAVCAMState, setCuriosityNAVCAMState] = useState(false);
 const [curosiotyToday, setCuriosityToday] = useState([]);
 const [curiosityTodayState, setCuriosityTodayState] = useState(false);



// opportunity photos
// spirit photos




// get the current date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();



useEffect(() => {
  let getMarsRoverPhtotos = async () => {
    // curiosity photos
    const curiosityFHAZresponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`)
    const curiosityFHAZ = await curiosityFHAZresponse.json();
    const curiosityRHAZresponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=${API_KEY}`)
    const curiosityRHAZ = await curiosityRHAZresponse.json();
    const curiosityMASTresponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=${API_KEY}`)
    const curiosityMAST = await curiosityMASTresponse.json();
    const curiosityCHEMCAMresponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=chemcam&api_key=${API_KEY}`)
    const curiosityCHEMCAM = await curiosityCHEMCAMresponse.json();
    const curiosityMAHLIresponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mahli&api_key=${API_KEY}`)
    const curiosityMAHLI = await curiosityMAHLIresponse.json();
    const curiosityMARDIresponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mardi&api_key=${API_KEY}`)
    const curiosityMARDI = await curiosityMARDIresponse.json();
    const curiosityNAVCAMresponse= await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${API_KEY}`)
    const curiosityNAVCAM = await curiosityNAVCAMresponse.json();
    const curosityTodayResponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${API_KEY}`)
    const curosiotyToday = await curosityTodayResponse.json()
    setCuriosityFHAZ(curiosityFHAZ.photos);
    setCuriosityRHAZ(curiosityRHAZ.photos);
    setCuriosityMAST(curiosityMAST.photos);
    setCuriosityCHEMCAM(curiosityCHEMCAM.photos);
    setCuriosityMAHLI(curiosityMAHLI.photos);
    setCuriosityMARDI(curiosityMARDI.photos);
    setCuriosityNAVCAM(curiosityNAVCAM.photos);
    setCuriosityToday(curosiotyToday.photos);




    // opportunity photos
    // spirit photos



  }
  getMarsRoverPhtotos();
}, []);








  return (
    <div className="mars-rover-photos">
      <NavBar/>
      <h1>Mars Rover Photos</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      {/* three buttons that show a sub category of "curiosity", "opportunity" and "spirit" */}
      <div className="mars-rover-photos-buttons">
        <button onClick={() => setCuriosity(!curiosity,setOpportunity(false), setSpirit(false))}>Curiosity</button>
        <button onClick={() => setOpportunity(!opportunity,setCuriosity(false),setSpirit(false))}>Opportunity</button>
        <button onClick={() => setSpirit(!spirit,setCuriosity(false),setOpportunity(false))}>Spirit</button>
      </div>
    
 
 
     {/* curiosity */}
     {curiosity && <div className="mars-rover-photos-buttons">
        <h2>curiosity</h2>
        <button onClick={() => setCuriosityFHAZState(!curiosityFHAZState, setCuriosityRHAZState(false),setCuriosityMASTState(false),setCuriosityCHEMCAMState(false),setCuriosityMAHLIState(false),setCuriosityMARDIState(false),setCuriosityNAVCAMState(false))} >Front Hazard Avoidance Camera</button>
        <button onClick={() => setCuriosityRHAZState(!curiosityRHAZState,setCuriosityFHAZState(false),setCuriosityMASTState(false),setCuriosityCHEMCAMState(false),setCuriosityMAHLIState(false),setCuriosityMARDIState(false),setCuriosityNAVCAMState(false))}>Rear Hazard Avoidance Camera	</button>
        <button onClick={() => setCuriosityMASTState(!curiosityMASTState,setCuriosityFHAZState(false), setCuriosityRHAZState(false),setCuriosityCHEMCAMState(false),setCuriosityMAHLIState(false),setCuriosityMARDIState(false),setCuriosityNAVCAMState(false))}>Mast Camera</button>
        <button onClick={() => setCuriosityCHEMCAMState(!curiosityCHEMCAMState,setCuriosityFHAZState(false), setCuriosityRHAZState(false),setCuriosityMASTState(false),setCuriosityMAHLIState(false),setCuriosityMARDIState(false),setCuriosityNAVCAMState(false))}>Chemistry and Camera Complex</button>
        <button onClick={() => setCuriosityMAHLIState(!curiosityMAHLIState,setCuriosityFHAZState(false), setCuriosityRHAZState(false),setCuriosityMASTState(false),setCuriosityCHEMCAMState(false),setCuriosityMARDIState(false),setCuriosityNAVCAMState(false))}>Mars Hand Lens Imager</button>
        <button onClick={() => setCuriosityMARDIState(!curiosityMARDIState,setCuriosityFHAZState(false), setCuriosityRHAZState(false),setCuriosityMASTState(false),setCuriosityCHEMCAMState(false),setCuriosityMAHLIState(false),setCuriosityNAVCAMState(false))}>	Mars Descent Imager</button>
        <button onClick={() => setCuriosityNAVCAMState(!curiosityNAVCAMState,setCuriosityFHAZState(false), setCuriosityRHAZState(false),setCuriosityMASTState(false),setCuriosityCHEMCAMState(false),setCuriosityMAHLIState(false),setCuriosityMARDIState(false))}>Navigation Camera</button>
        <button onClick={() => setCuriosityTodayState(!curiosityTodayState,setCuriosityFHAZState(false), setCuriosityRHAZState(false),setCuriosityMASTState(false),setCuriosityCHEMCAMState(false),setCuriosityMAHLIState(false),setCuriosityMARDIState(false),setCuriosityNAVCAMState(false))}>Today's Photos</button>
        </div>}
        {/* curiosityFHAZState */}
      {curiosityFHAZState && <div className="mars-rover-photos-buttons">
        <h2>Front Hazard Avoidance Camera</h2>
        <ul>
          {curiosityFHAZ.map((photo, index) => {
            return (
              <li key={index}>
                <img src={photo.img_src} alt={photo.img_src}/>
              </li>
            )
          })}
        </ul>

        </div>}
        {/* curiosityRHAZState */}
      {curiosityRHAZState && <div className="mars-rover-photos-buttons">
        <h2>Rear Hazard Avoidance Camera</h2>
        <ul>
          {curiosityRHAZ.map((photo, index) => {
            return (
              <li key={index}>
                <img src={photo.img_src} alt={photo.img_src}/>
              </li>
            )
          })}
        </ul>
        </div>}
        {/* curiosityMASTState */}
      {curiosityMASTState && <div className="mars-rover-photos-buttons">
        <h2>Mast Camera</h2>
        <ul>
          {curiosityMAST.map((photo, index) => {
            return (
              <li key={index}>
                <img src={photo.img_src} alt={photo.img_src}/>
              </li>
            )
          })}
        </ul>
        </div>}
        {/* curiosityCHEMCAMState */}
      {curiosityCHEMCAMState && <div className="mars-rover-photos-buttons">
        <h2>Chemistry and Camera Complex</h2>
        <ul>
          {curiosityCHEMCAM.map((photo, index) => {
            return (
              <li key={index}>
                <img src={photo.img_src} alt={photo.img_src}/>
              </li>
            )
          })}
        </ul>
        </div>}
        {/* curiosityMAHLIState */}
      {curiosityMAHLIState && <div className="mars-rover-photos-buttons">
        <h2>Mars Hand Lens Imager</h2>
        <ul>
          {curiosityMAHLI.map((photo, index) => {
            return (
              <li key={index}>
                <img src={photo.img_src} alt={photo.img_src}/>
              </li>
            )
          })}
        </ul>
        </div>}
        {/* curiosityMARDIState */}
      {curiosityMARDIState && <div className="mars-rover-photos-buttons">
        <h2>Mars Descent Imager</h2>
        <ul>
          {curiosityMARDI.map((photo, index) => {
            return (
              <li key={index}>
                <img src={photo.img_src} alt={photo.img_src}/>
              </li>
            )
          })}
        </ul>
        </div>}
        {/* curiosityNAVCAMState */}
      {curiosityNAVCAMState && <div className="mars-rover-photos-buttons">
        <h2>Navigation Camera</h2>
        <ul>
          {curiosityNAVCAM.map((photo, index) => {
            return (
              <li key={index}>
                <img src={photo.img_src} alt={photo.img_src}/>
              </li>
            )
          })}
        </ul>
        </div>}
        {/* curiosityToday */}
        {curiosityTodayState && <div className="mars-rover-photos-buttons">
        <h2>Today's Images</h2>
        <ul>
          {curosiotyToday.map((photo, index) => <li key={index}><img src={photo.img_src} alt={photo.img_src}/></li>)}
        </ul>
        {curosiotyToday.length === 0 && <p>No photos for today.</p>}
        </div>}






    {/* opportunity */}
     {opportunity && <div className="mars-rover-photos-buttons">
        <h2>opportunity</h2>
        <button >Front Hazard Avoidance Camera</button>
        <button >Rear Hazard Avoidance Camera	</button>
        <button >Navigation Camera</button>
        <button >Panoramic Camera	</button>
        <button >Miniature Thermal Emission Spectrometer (Mini-TES)</button>
        </div>}
    {/* spirit */}
     {spirit && <div className="mars-rover-photos-buttons">
        <h2>spirit</h2>
        <button >Front Hazard Avoidance Camera</button>
        <button >Rear Hazard Avoidance Camera	</button>
        <button >Navigation Camera</button>
        <button >Panoramic Camera	</button>
        <button >Miniature Thermal Emission Spectrometer (Mini-TES)</button>
        </div>}

      </div>
    )
  }
