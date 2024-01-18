import { useNavigate, useParams } from "react-router-dom";
import { chatgptPlayground } from "../data/ChatGPTPlayground";
import "../css/playground.css";

function PLaygroundContainer() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const playground = chatgptPlayground.find((post) => post.slug === slug);
  const returnToBlog = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container">
        <h2 className="pg-title">{playground.title}</h2>

        <p className="pg-description">{playground.description}</p>

        <div className="playground-container">
          <div className="prompt-container">
            <p>Dame una descripción resumida de qué es ChatGPT</p>
          </div>
          <div className="respuesta-container">
            <p id="p-respuesta-chatgpt__Introduccion">(Respuesta de ChatGPT)</p>
          </div>
        </div>
        <button className="botonGPT" id="botonDescripcionGPT">Generar descripción</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={returnToBlog}>Volver al blog</button>
      </div>
    </>
  );
}

export { PLaygroundContainer };
