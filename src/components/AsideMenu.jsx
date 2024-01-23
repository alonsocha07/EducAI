import { useState } from "react";
import "../css/asideMenu.css";
import { Link, NavLink } from "react-router-dom";

function AsideMenu({ sections, imgTechnologie, technologieName }) {
  const [arrow, setArrow] = useState('/assets/arrowLeft.svg')
  const whiteText = getComputedStyle(document.documentElement).getPropertyValue(
    "--white-text"
  );
  const green = getComputedStyle(document.documentElement).getPropertyValue(
    "--green"
  );

  
  function handleMenu(){
    const aMenu = document.getElementById("asideMenu");

    if (aMenu.classList.contains('MoveLeftMenu')) {

      aMenu.classList.remove('MoveLeftMenu');
      aMenu.classList.add('MoveRightMenu');
      setArrow('/assets/arrowRight.svg')
    } else {
      aMenu.classList.add('MoveLeftMenu');
      setArrow('/assets/arrowLeft.svg')
    }
    
  }

  return (
    <div className="asideMenu" id="asideMenu">
      <div className="arrowContainer" onClick={handleMenu}>
        <div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="MenuHeader">
        <img src={imgTechnologie} alt="Technologie image" />
        <h2>{technologieName}</h2>
      </div>
      <ul>
        {sections.map((route) => {
          return (
            <li 
            key={route.text} 
            style={ {marginTop: route.title ? "22px" : ""}}
            onClick= {() => window.innerWidth < 950 && handleMenu()}
            >

              <NavLink
                to={route.to}
                style={({ isActive }) => ({
                  color: isActive ? `${green}` : `${whiteText}`,
                  marginLeft: route.sub ? "20px" : "",
                  fontWeight: route.title ? "900" : "",
                  fontSize: route.title ? "2.2rem": ""
                })}
              >
                {route.text}
              </NavLink>

              {/* <ChatgptLink sections= {route} /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ChatgptLink({ sections }) {
  return (
    <li>
      <Link to={`/chatgpt/${sections.slug}`}> {sections.text} </Link>
    </li>
  );
}

export default AsideMenu;
