import "../css/asideMenu.css";
import { Link, NavLink } from "react-router-dom";

function AsideMenu({ sections, imgTechnologie, technologieName }) {
  const whiteText = getComputedStyle(document.documentElement).getPropertyValue(
    "--white-text"
  );
  const green = getComputedStyle(document.documentElement).getPropertyValue(
    "--green"
  );
  console.log("Color primario:", whiteText);
  console.log(sections);
  return (
    <div className="asideMenu">
      <div className="MenuHeader">
        <img src={imgTechnologie} alt="Technologie image" />
        <h2>{technologieName}</h2>
      </div>
      <ul>
        {sections.map((route) => {
          console.log("route", route);
          return (
            <li key={route.text} style={ {marginTop: route.title ? "22px" : ""}}>

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
