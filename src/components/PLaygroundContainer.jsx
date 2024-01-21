import { useNavigate, useParams } from "react-router-dom";
import { chatgptPlayground } from "../data/chatgpt/ChatGPTPlayground";

import "../css/playground.css";
import { useEffect, useState } from "react";

function PLaygroundContainer() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const playground = chatgptPlayground.find((post) => post.slug === slug);
  const [dynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    const loadDynamicComponent = async () => {
      try {
        const module = await import(`./chatgpt/${slug}`);

        const DynamicComponent = module.default;

        setDynamicComponent(<DynamicComponent />);
      } catch (error) {
        console.error("Error cargando el componente dinámico:", error);
      }
    };

    loadDynamicComponent();
  }, [slug]);

  return (
    <>
      <div className="container">
        <h2 className="pg-title">{playground.title}</h2>

        {dynamicComponent}

        {playground.prompt && (
          <div>
            <div className="playground-container">
              <div className="prompt-container">
                <p>{playground.prompt}</p>
              </div>
              <div className="respuesta-container">
                <p id="p-respuesta-chatgpt__Introduccion">
                  (Respuesta de ChatGPT)
                </p>
              </div>
            </div>
            <button className="botonGPT" id="botonDescripcionGPT">
              Generar descripción
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export { PLaygroundContainer };
