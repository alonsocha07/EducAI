import '../css/asideMenu.css'
import { NavLink } from "react-router-dom";


function AsideMenu({sections, imgTechnologie, technologieName}) {
  return (
    <div className="asideMenu">
        <div className='MenuHeader'>
            <img src={imgTechnologie} alt="Technologie image" />
            <h2>{technologieName}</h2>
        </div>
        <ul>
            {sections.map((route) => {
            return (
              <li key={route.text}>
                <NavLink to={route.to}
                style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    marginLeft: route.sub ? "20px" : "",
                    fontWeight: route.title ? "bold" : ""
                  })}
                >{route.text}</NavLink>
              </li>
            );
          })}
        </ul>
    </div>
  )
}

export default AsideMenu