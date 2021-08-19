import React, { useState, useEffect } from "react";
import os from "os";
import './MarsRoverPhotos.css'

import NavBar from "../../NavBar/NavBar";

export default function MarsRoverPhotos() {
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
  const [opportunityFHAZ, setOpportunityFHAZ] = useState([]);
  const [opportunityFHAZState, setOpportunityFHAZState] = useState(false);
  const [opportunityRHAZ, setOpportunityRHAZ] = useState([]);
  const [opportunityRHAZState, setOpportunityRHAZState] = useState(false);
  const [opportunityNAVCAM, setOpportunityNAVCAM] = useState([]);
  const [opportunityNAVCAMState, setOpportunityNAVCAMState] = useState(false);
  const [opportunityPANCAM, setOpportunityPANCAM] = useState([]);
  const [opportunityPANCAMState, setOpportunityPANCAMState] = useState(false);
  const [opportunityMINITES, setOpportunityMINITES] = useState([]);
  const [opportunityMINITESState, setOpportunityMINITESState] = useState(false);
  const [opportunityToday, setOpportunityToday] = useState([]);
  const [opportunityTodayState, setOpportunityTodayState] = useState(false);

  // spirit photos
  const [spiritFHAZ, setSpiritFHAZ] = useState([]);
  const [spiritFHAZState, setSpiritFHAZState] = useState(false);
  const [spiritRHAZ, setSpiritRHAZ] = useState([]);
  const [spiritRHAZState, setSpiritRHAZState] = useState(false);
  const [spiritNAVCAM, setSpiritNAVCAM] = useState([]);
  const [spiritNAVCAMState, setSpiritNAVCAMState] = useState(false);
  const [spiritPANCAM, setSpiritPANCAM] = useState([]);
  const [spiritPANCAMState, setSpiritPANCAMState] = useState(false);
  const [spiritMINITES, setSpiritMINITES] = useState([]);
  const [spiritMINITESState, setSpiritMINITESState] = useState(false);
  const [spiritToday, setSpiritToday] = useState([]);
  const [spiritTodayState, setSpiritTodayState] = useState(false);

  // get the current date
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  useEffect(() => {
    let getMarsRoverPhtotos = async () => {
      // curiosity photos
      const curiosityFHAZresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=700&camera=fhaz&api_key=${API_KEY}`
      );
      const curiosityFHAZ = await curiosityFHAZresponse.json();
   
      const curiosityRHAZresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=${API_KEY}`
      );
      const curiosityRHAZ = await curiosityRHAZresponse.json();
      const curiosityMASTresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=${API_KEY}`
      );
      const curiosityMAST = await curiosityMASTresponse.json();
      const curiosityCHEMCAMresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=chemcam&api_key=${API_KEY}`
      );
      const curiosityCHEMCAM = await curiosityCHEMCAMresponse.json();
      const curiosityMAHLIresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mahli&api_key=${API_KEY}`
      );
      const curiosityMAHLI = await curiosityMAHLIresponse.json();
      const curiosityMARDIresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mardi&api_key=${API_KEY}`
      );
      const curiosityMARDI = await curiosityMARDIresponse.json();
      const curiosityNAVCAMresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${API_KEY}`
      );
      const curiosityNAVCAM = await curiosityNAVCAMresponse.json();
      const curosityTodayResponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${API_KEY}`
      );
      const curosiotyToday = await curosityTodayResponse.json();
      setCuriosityFHAZ(curiosityFHAZ.photos);
      setCuriosityRHAZ(curiosityRHAZ.photos);
      setCuriosityMAST(curiosityMAST.photos);
      setCuriosityCHEMCAM(curiosityCHEMCAM.photos);
      setCuriosityMAHLI(curiosityMAHLI.photos);
      setCuriosityMARDI(curiosityMARDI.photos);
      setCuriosityNAVCAM(curiosityNAVCAM.photos);
      setCuriosityToday(curosiotyToday.photos);

      // opportunity photos
      const opportunityFHAZresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?camera=fhaz&api_key=${API_KEY}`
      );
      const opportunityFHAZ = await opportunityFHAZresponse.json();
      const opportunityRHAZresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=rhaz&api_key=${API_KEY}`
      );
      const opportunityRHAZ = await opportunityRHAZresponse.json();
      const opportunityNAVCAMresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=navcam&api_key=${API_KEY}`
      );
      const opportunityNAVCAM = await opportunityNAVCAMresponse.json();
      const opportunityPANCAMresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=pancam&api_key=${API_KEY}`
      );
      const opportunityPANCAM = await opportunityPANCAMresponse.json();
      const opportunityMINITESresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=minites&api_key=${API_KEY}`
      );
      const opportunityMINITES = await opportunityMINITESresponse.json();
      
      const opportunityTodayResponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=${year}-${month}-${day}&api_key=${API_KEY}`
      );
      const opportunityToday = await opportunityTodayResponse.json();
      setOpportunityFHAZ(opportunityFHAZ.photos);
      setOpportunityRHAZ(opportunityRHAZ.photos);
      setOpportunityNAVCAM(opportunityNAVCAM.photos);
      setOpportunityPANCAM(opportunityPANCAM.photos);
      setOpportunityMINITES(opportunityMINITES.photos);
      setOpportunityToday(opportunityToday.photos);

      // spirit photos
      const spiritFHAZresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`
      );
      const spiritFHAZ = await spiritFHAZresponse.json();
      const spiritRHAZresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=rhaz&api_key=${API_KEY}`
      );
      const spiritRHAZ = await spiritRHAZresponse.json();
      const spiritNAVCAMresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=navcam&api_key=${API_KEY}`
      );
      const spiritNAVCAM = await spiritNAVCAMresponse.json();
      const spiritPANCAMresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=pancam&api_key=${API_KEY}`
      );
      const spiritPANCAM = await spiritPANCAMresponse.json();
      const spiritMINITESresponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=minites&api_key=${API_KEY}`
      );
      const spiritMINITES = await spiritMINITESresponse.json();
      const spiritTodayResponse = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${year}-${month}-${day}&api_key=${API_KEY}`
      );
      const spiritToday = await spiritTodayResponse.json();
      setSpiritFHAZ(spiritFHAZ.photos);
      setSpiritRHAZ(spiritRHAZ.photos);
      setSpiritNAVCAM(spiritNAVCAM.photos);
      setSpiritPANCAM(spiritPANCAM.photos);
      setSpiritMINITES(spiritMINITES.photos);
      setSpiritToday(spiritToday.photos);
    };
    getMarsRoverPhtotos();

  }, []);

  return (
    <div className="mars-rover-photos">
      <NavBar />
      <h1>Mars Rover Photos</h1>
      <p>
      Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date.
      </p>
      {/* three buttons that show a sub category of "curiosity", "opportunity" and "spirit" */}
      <div className="mars-rover-photos-buttons">
        <button
          onClick={() =>
            setCuriosity(!curiosity, setOpportunity(false), setSpirit(false))
          }
        >
          Curiosity
        </button>
        <button
          onClick={() =>
            setOpportunity(!opportunity, setCuriosity(false), setSpirit(false))
          }
        >
          Opportunity
        </button>
        <button
          onClick={() =>
            setSpirit(!spirit, setCuriosity(false), setOpportunity(false))
          }
        >
          Spirit
        </button>
      </div>

      {/* curiosity */}
      {curiosity && (
        <div className="mars-rover-photos-buttons">
          <h2>curiosity</h2>
          <button
            onClick={() =>
              setCuriosityFHAZState(
                !curiosityFHAZState,
                setCuriosityRHAZState(false),
                setCuriosityMASTState(false),
                setCuriosityCHEMCAMState(false),
                setCuriosityMAHLIState(false),
                setCuriosityMARDIState(false),
                setCuriosityNAVCAMState(false)
              )
            }
          >
            Front Hazard Avoidance Camera
          </button>
          <button
            onClick={() =>
              setCuriosityRHAZState(
                !curiosityRHAZState,
                setCuriosityFHAZState(false),
                setCuriosityMASTState(false),
                setCuriosityCHEMCAMState(false),
                setCuriosityMAHLIState(false),
                setCuriosityMARDIState(false),
                setCuriosityNAVCAMState(false)
              )
            }
          >
            Rear Hazard Avoidance Camera{" "}
          </button>
          <button
            onClick={() =>
              setCuriosityMASTState(
                !curiosityMASTState,
                setCuriosityFHAZState(false),
                setCuriosityRHAZState(false),
                setCuriosityCHEMCAMState(false),
                setCuriosityMAHLIState(false),
                setCuriosityMARDIState(false),
                setCuriosityNAVCAMState(false)
              )
            }
          >
            Mast Camera
          </button>
          <button
            onClick={() =>
              setCuriosityCHEMCAMState(
                !curiosityCHEMCAMState,
                setCuriosityFHAZState(false),
                setCuriosityRHAZState(false),
                setCuriosityMASTState(false),
                setCuriosityMAHLIState(false),
                setCuriosityMARDIState(false),
                setCuriosityNAVCAMState(false)
              )
            }
          >
            Chemistry and Camera Complex
          </button>
          <button
            onClick={() =>
              setCuriosityMAHLIState(
                !curiosityMAHLIState,
                setCuriosityFHAZState(false),
                setCuriosityRHAZState(false),
                setCuriosityMASTState(false),
                setCuriosityCHEMCAMState(false),
                setCuriosityMARDIState(false),
                setCuriosityNAVCAMState(false)
              )
            }
          >
            Mars Hand Lens Imager
          </button>
          <button
            onClick={() =>
              setCuriosityMARDIState(
                !curiosityMARDIState,
                setCuriosityFHAZState(false),
                setCuriosityRHAZState(false),
                setCuriosityMASTState(false),
                setCuriosityCHEMCAMState(false),
                setCuriosityMAHLIState(false),
                setCuriosityNAVCAMState(false)
              )
            }
          >
            {" "}
            Mars Descent Imager
          </button>
          <button
            onClick={() =>
              setCuriosityNAVCAMState(
                !curiosityNAVCAMState,
                setCuriosityFHAZState(false),
                setCuriosityRHAZState(false),
                setCuriosityMASTState(false),
                setCuriosityCHEMCAMState(false),
                setCuriosityMAHLIState(false),
                setCuriosityMARDIState(false)
              )
            }
          >
            Navigation Camera
          </button>
          <button
            onClick={() =>
              setCuriosityTodayState(
                !curiosityTodayState,
                setCuriosityFHAZState(false),
                setCuriosityRHAZState(false),
                setCuriosityMASTState(false),
                setCuriosityCHEMCAMState(false),
                setCuriosityMAHLIState(false),
                setCuriosityMARDIState(false),
                setCuriosityNAVCAMState(false)
              )
            }
          >
            Today's Photos
          </button>

          {/* curiosityFHAZState */}
          {curiosityFHAZState && (
            <div className="mars-rover-photos-buttons">
              <h2>Front Hazard Avoidance Camera</h2>
              <ul>
                {curiosityFHAZ.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {curiosityFHAZ.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* curiosityRHAZState */}
          {curiosityRHAZState && (
            <div className="mars-rover-photos-buttons">
              <h2>Rear Hazard Avoidance Camera</h2>
              <ul>
                {curiosityRHAZ.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {curiosityRHAZ.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* curiosityMASTState */}
          {curiosityMASTState && (
            <div className="mars-rover-photos-buttons">
              <h2>Mast Camera</h2>
              <ul>
                {curiosityMAST.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {curiosityMAST.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* curiosityCHEMCAMState */}
          {curiosityCHEMCAMState && (
            <div className="mars-rover-photos-buttons">
              <h2>Chemistry and Camera Complex</h2>
              <ul>
                {curiosityCHEMCAM.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {curiosityCHEMCAM.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* curiosityMAHLIState */}
          {curiosityMAHLIState && (
            <div className="mars-rover-photos-buttons">
              <h2>Mars Hand Lens Imager</h2>
              <ul>
                {curiosityMAHLI.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {curiosityMAHLI.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* curiosityMARDIState */}
          {curiosityMARDIState && (
            <div className="mars-rover-photos-buttons">
              <h2>Mars Descent Imager</h2>
              <ul>
                {curiosityMARDI.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {curiosityMARDI.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* curiosityNAVCAMState */}
          {curiosityNAVCAMState && (
            <div className="mars-rover-photos-buttons">
              <h2>Navigation Camera</h2>
              <ul>
                {curiosityNAVCAM.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {curiosityNAVCAM.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* curiosityToday */}
          {curiosityTodayState && (
            <div className="mars-rover-photos-buttons">
              <h2>Today's Images</h2>
              <ul>
                {curosiotyToday.map((photo, index) => (
                  <li key={index}>
                    <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                  </li>
                ))}
              </ul>
              {curosiotyToday.length === 0 && <p>No photos for today.</p>}
            </div>
          )}
        </div>
      )}

      {/* opportunity */}
      {opportunity && (
        <div className="mars-rover-photos-buttons">
          <h2>opportunity</h2>
          <button
            onClick={() =>
              setOpportunityFHAZState(
                !opportunityFHAZState,
                setOpportunityRHAZState(false),
                setOpportunityNAVCAMState(false),
                setOpportunityPANCAMState(false),
                setOpportunityMINITESState(false),
                setOpportunityTodayState(false)
              )
            }
          >
            Front Hazard Avoidance Camera
          </button>
          <button
            onClick={() =>
              setOpportunityRHAZState(
                !opportunityRHAZState,
                setOpportunityFHAZState(false),
                setOpportunityNAVCAMState(false),
                setOpportunityPANCAMState(false),
                setOpportunityMINITESState(false),
                setOpportunityTodayState(false)
              )
            }
          >
            Rear Hazard Avoidance Camera
          </button>
          <button
            onClick={() =>
            
              setOpportunityNAVCAMState(
                !opportunityNAVCAMState,
                setOpportunityFHAZState(false),
                setOpportunityRHAZState(false),
                setOpportunityPANCAMState(false),
                setOpportunityMINITESState(false),
                setOpportunityTodayState(false)
              )
            }
          >
            Navigation Camera
          </button>
          <button
            onClick={() =>
              setOpportunityPANCAMState(
                !opportunityPANCAMState,
                setOpportunityFHAZState(false),
                setOpportunityRHAZState(false),
                setOpportunityNAVCAMState(false),
                setOpportunityMINITESState(false),
                setOpportunityTodayState(false)
              )
            }
          >
            Panoramic Camera
          </button>
          <button
            onClick={() =>
              setOpportunityMINITESState(
                !opportunityMINITESState,
                setOpportunityFHAZState(false),
                setOpportunityRHAZState(false),
                setOpportunityNAVCAMState(false),
                setOpportunityPANCAMState(false),
                setOpportunityTodayState(false)
              )
            }
          >
            Miniature Thermal Emission Spectrometer
          </button>
          <button
            onClick={() =>
              setOpportunityTodayState(
                !opportunityTodayState,
                setOpportunityFHAZState(false),
                setOpportunityRHAZState(false),
                setOpportunityNAVCAMState(false),
                setOpportunityPANCAMState(false),
                setOpportunityMINITESState(false)
              )
            }
          >
            Today's Images
          </button>

          {/* opportunityFHAZState */}
          {opportunityFHAZState && (
            <div className="mars-rover-photos-buttons">
              <h2>Front Hazard Avoidance Camera</h2>
              <ul>
                {opportunityFHAZ.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {opportunityFHAZ.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* opportunityRHAZState */}
          {opportunityRHAZState && (
            <div className="mars-rover-photos-buttons">
              <h2>Rear Hazard Avoidance Camera</h2>
              <ul>
                {opportunityRHAZ.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {opportunityRHAZ.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* opportunityNAVCAMState */}
          {opportunityNAVCAMState && (
            <div className="mars-rover-photos-buttons">
              <h2>Navigation Camera</h2>
              <ul>
                {opportunityNAVCAM.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {opportunityNAVCAM.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* opportunityPANCAMState */}
          {opportunityPANCAMState && (
            <div className="mars-rover-photos-buttons">
              <h2>Panoramic Camera</h2>
              <ul>
                {opportunityPANCAM.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {opportunityPANCAM.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* opportunityMINITESState */}
          {opportunityMINITESState && (
            <div className="mars-rover-photos-buttons">
              <h2>Miniature Thermal Emission Spectrometer</h2>
              <ul>
                {opportunityMINITES.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {opportunityMINITES.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* opportunityTodayState */}
          {opportunityTodayState && (
            <div className="mars-rover-photos-buttons">
              <h2>Today's Images</h2>
              <ul>
                {opportunityToday.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {opportunityToday.length === 0 && <p>No photos for today.</p>}
            </div>
          )}
        </div>
      )}
      {/* spirit */}
      {spirit && (
        <div className="mars-rover-photos-buttons">
          <h2>spirit</h2>
          <button
            onClick={() =>
              setSpiritFHAZState(
                !spiritFHAZState,
                setSpiritRHAZState(false),
                setSpiritNAVCAMState(false),
                setSpiritPANCAMState(false),
                setSpiritMINITESState(false),
                setSpiritTodayState(false)
              )
            }
          >
            Front Hazard Avoidance Camera
          </button>
          <button
            onClick={() =>
              setSpiritRHAZState(
                !spiritRHAZState,
                setSpiritFHAZState(false),
                setSpiritNAVCAMState(false),
                setSpiritPANCAMState(false),
                setSpiritMINITESState(false),
                setSpiritTodayState(false)
              )
            }
          >
            Rear Hazard Avoidance Camera
          </button>
          <button
            onClick={() =>
              setSpiritNAVCAMState(
                !spiritNAVCAMState,
                setSpiritFHAZState(false),
                setSpiritRHAZState(false),
                setSpiritPANCAMState(false),
                setSpiritMINITESState(false),
                setSpiritTodayState(false)
              )
            }
          >
            Navigation Camera
          </button>
          <button
            onClick={() =>
              setSpiritPANCAMState(
                !spiritPANCAMState,
                setSpiritFHAZState(false),
                setSpiritRHAZState(false),
                setSpiritNAVCAMState(false),
                setSpiritMINITESState(false),
                setSpiritTodayState(false)
              )
            }
          >
            Panoramic Camera
          </button>
          <button
            onClick={() =>
              setSpiritMINITESState(
                !spiritMINITESState,
                setSpiritFHAZState(false),
                setSpiritRHAZState(false),
                setSpiritNAVCAMState(false),
                setSpiritPANCAMState(false),
                setSpiritTodayState(false)
              )
            }
          >
            Miniature Thermal Emission Spectrometer
          </button>
          <button
            onClick={() =>
              setSpiritTodayState(
                !spiritTodayState,
                setSpiritFHAZState(false),
                setSpiritRHAZState(false),
                setSpiritNAVCAMState(false),
                setSpiritPANCAMState(false),
                setSpiritMINITESState(false)
              )
            }
          >
            Today's Images
          </button>
          {/* spiritFHAZState */}
          {spiritFHAZState && (
            <div className="mars-rover-photos-buttons">
              <h2>Front Hazard Avoidance Camera</h2>
              <ul>
                {spiritFHAZ.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {spiritFHAZ.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* spiritRHAZState */}
          {spiritRHAZState && (
            <div className="mars-rover-photos-buttons">
              <h2>Rear Hazard Avoidance Camera</h2>
              <ul>
                {spiritRHAZ.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {spiritRHAZ.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* spiritNAVCAMState */}
          {spiritNAVCAMState && (
            <div className="mars-rover-photos-buttons">
              <h2>Navigation Camera</h2>
              <ul>
                {spiritNAVCAM.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {spiritNAVCAM.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* spiritPANCAMState */}
          {spiritPANCAMState && (
            <div className="mars-rover-photos-buttons">
              <h2>Panoramic Camera</h2>
              <ul>
                {spiritPANCAM.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {spiritPANCAM.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* spiritMINITESState */}
          {spiritMINITESState && (
            <div className="mars-rover-photos-buttons">
              <h2>Miniature Thermal Emission Spectrometer</h2>
              <ul>
                {spiritMINITES.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {spiritMINITES.length === 0 && <p>No photos.</p>}
            </div>
          )}
          {/* spiritTodayState */}
          {spiritTodayState && (
            <div className="mars-rover-photos-buttons">
              <h2>Today's Images</h2>
              <ul>
                {spiritToday.map((photo, index) => {
                  return (
                    <li key={index}>
                      <img className='mars-rover-photos-group' src={photo.img_src} alt={photo.img_src} />
                    </li>
                  );
                })}
              </ul>
              {spiritToday.length === 0 && <p>No photos for today.</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
