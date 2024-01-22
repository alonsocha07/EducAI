import { NavLink } from "react-router-dom";
import "../css/homePage.css";

function HomePage() {
  return (
    <>
      <div className="homePageContainer">
        <div>

        <h1>EducAI</h1>
        <h2>
          Ya no es solo tu <span>inteligencia</span>
        </h2>

        <NavLink to="/chatgpt/introduccion">
            <button >Empezar</button>
        </NavLink>
        </div>
      </div>
    </>
  );
}

export { HomePage };
