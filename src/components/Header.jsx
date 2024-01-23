import '../css/header.css'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="header-image-container">
        <NavLink to="/">
            <img
              src="../src/assets/course-xq-coxiy.svg"
              alt="EducAI logo"
              />
        </NavLink>
         
        </div>
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.text} >
                <NavLink 
                to={route.to}
                style={({ isActive }) => ({
                   borderBottom: isActive ? "1px solid #1f816f" : ""
                })}
                >{route.text}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/chatgpt/introduccion",
  text: "Chat GPT",
  private: false,
});
routes.push({
  to: "/dalle2",
  text: "Dall-E 2",
  private: true,
});

export { Header };
