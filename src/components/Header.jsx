import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="header-image-container">
        <NavLink to="/">
            <img
              src="../../src/assets/marca/Educai-logo2.jpg"
              alt="EducAI logo"
              />
        </NavLink>
         
        </div>
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.text}>
                <NavLink to={route.to}>{route.text}</NavLink>
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
  to: "/chatgpt",
  text: "Chat GPT",
  private: false,
});
routes.push({
  to: "/dalle2",
  text: "Dall-E 2",
  private: true,
});

export { Header };
