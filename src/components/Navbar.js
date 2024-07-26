import React from 'react'
// import { Link } from 'react-router-dom';
//remember, to change some content to js, use {}, backticks and $ wherever needed ((eg) 3 lines below)

export default function Navbar(props) {
  // for color palette
  // const [bgColor, setBgColor] = useState('light');
  // const changeColor = (id) => {
  //   document.body.style.backgroundColor=id;}

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li> */}

            {/* color pallette */}
            {/* <li className="nav-item">
              a className="nav-link" href="#">{colorPalette}</Link>
            </li> */}
            {/* <li className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Color palette
                </button>
                <ul className="dropdown-menu">
                    <button id="red" type="button" onClick={(e) => changeColor(e.target.id)}className="btn btn-danger mx-2 my-2">Red</button>
                    <button id="blue" type="button" onClick={(e) => changeColor(e.target.id)} className="btn btn-info mx-2 my-2">Blue</button>
                    <button id="yellow" type="button" onClick={(e) => changeColor(e.target.id)} className="btn btn-warning mx-2 my-2">Yellow</button>
                    <button id="black" type="button" onClick={(e) => changeColor(e.target.id)} className="btn btn-dark mx-2 my-2">Dark</button>
                    <button id="white" type="button" onClick={(e) => changeColor(e.target.id)} className="btn btn-light mx-2 my-2" mx-2>Light</button>

                </ul>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
          
        </div>
      </div>
    </nav>
  )
}
