

export default function NavBar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <i class="fas fa-bars"></i>
          </button>
          <a className="navbar-brand" href="#">
            {/* <i className="fa fa-home"><a href="/">Home</a></i> */}
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
              <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">APOD</a>
            </li>
            <li>
              <a href="#">Asteroids NeoWs</a>
            </li>
            <li>
              <a href="#">DONKI</a>
            </li>
            <li>
              <a href="#">Earth</a>
            </li>
            <li>
              <a href="#">EONET</a>
            </li>
            <li>
              <a href="#">EPIC</a>
            </li>
            <li>
              <a href="#">Exoplanet</a>
            </li>
            <li>
              <a href="#">GeneLab</a>
            </li>
            <li>
              <a href="#">Insight</a>
            </li>
            <li>
              <a href="/MarsRover">Mars Rover Photos</a>
            </li>
            <li>
              <a href="#">NASA Image and Video Library</a>
            </li>
            <li>
              <a href="#">TechTransfer</a>
            </li>
            <li>
              <a href="#">Satellite Situation Center</a>
            </li>
            <li>
              <a href="#">SSD/CNEOS</a>
            </li>
            <li>
              <a href="#">Techport</a>
            </li>
            <li>
              <a href="#">TLE API</a>
            </li>
            <li>
              <a href="#">Vesta/Moon/Mars Trek WMTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
