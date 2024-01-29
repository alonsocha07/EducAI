import { useParams } from "react-router-dom";
import { chatgptPlayground } from "../data/chatgpt/ChatGPTPlayground";
import DOMPurify from 'dompurify';

import "../css/playground.css";
import { Suspense, lazy, useEffect, useState } from "react";


import Precision from './chatgpt/Precision'
import Introduccion from "./chatgpt/Introduccion";


function PLaygroundContainer() {
  const { slug } = useParams();

  const playground = chatgptPlayground.find((post) => post.slug === slug);
  const [dynamicComponent, setDynamicComponent] = useState(null);

  
  const clickBtn1 = (playground) => {
    let p = document.getElementById('prompt')
    p.innerHTML = playground.prompt
  };
  const clickBtn2 = (playground) => {
    let p = document.getElementById('prompt')
    p.innerHTML = playground.prompt2
  };
  const clickBtn3 = (playground) => {
    let p = document.getElementById('prompt')
    p.innerHTML = playground.prompt3
  };

  useEffect(() => {
    const loadDynamicComponent = async () => {
      try {
      
  //      module = lazy(()=> import(`./chatgpt/${slug}`))
    //    setDynamicComponent(module);
        
      //const module = await import(`./chatgpt/${slug}.jsx`);
      //const DynamicComponent = module.default;

      //setDynamicComponent(() => <DynamicComponent />);

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


        {playground.prompt && (
          <div>
            <div className="playground-container">
              {playground.slug == 'introduccion' ? <Introduccion/> : null}
              {playground.slug == 'precision' ? <Precision/> : null}
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
