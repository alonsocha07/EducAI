import { useParams } from "react-router-dom";
import { chatgptPlayground } from "../data/chatgpt/ChatGPTPlayground";
import DOMPurify from 'dompurify';

import "../css/playground.css";
import { useEffect, useState } from "react";

function PLaygroundContainer() {
  const { slug } = useParams();

  const playground = chatgptPlayground.find((post) => post.slug === slug);
  const [dynamicComponent, setDynamicComponent] = useState(null);

  const p = document.getElementById('prompt')
  const clickBtn1 = (playground) => {
    p.innerHTML = playground.prompt
  };
  const clickBtn2 = (playground) => {
    p.innerHTML = playground.prompt2
  };
  const clickBtn3 = (playground) => {
    p.innerHTML = playground.prompt3
  };

  useEffect(() => {
    const loadDynamicComponent = async () => {
      try {
        console.log('module', `/src/components/chatgpt/${slug}`);
        const module = await import(`/src/components/chatgpt/${slug}`);

        const DynamicComponent = module.default;

        setDynamicComponent(<DynamicComponent />);

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });

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
              <div className="buttons-container">
                {
                  playground.prompt2 && (
                    <button className="b-prompt" onClick={() => clickBtn1(playground)}>{playground.b_prompt}</button>
                  )
                }
                {
                  playground.prompt2 && (
                    <button className="b-prompt" onClick={() => clickBtn2(playground)}>{playground.b_prompt2}</button>
                  )
                }
                {
                playground.prompt3 && (
                    <button className="b-prompt" onClick={() => clickBtn3(playground)}>{playground.b_prompt3}</button>
                  )
                }
              </div>
              <div className="prompt-container">
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(playground.prompt) }} id="prompt" ></p>
              </div>
              <div className="respuesta-container">
                <p>
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
