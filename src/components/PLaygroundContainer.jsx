import { useParams } from "react-router-dom";
import { chatgptPlayground } from "../data/chatgpt/ChatGPTPlayground";
import DOMPurify from 'dompurify';

import "../css/playground.css";

import Precision from './chatgpt/Precision'
import Introduccion from "./chatgpt/Introduccion";

import Limites from "./chatgpt/Limites";
import Informacion_sensible from "./chatgpt/Informacion_sensible";
import Tips_basicos from "./chatgpt/Tips_basicos";
import Iniciar_sencillo from "./chatgpt/Iniciar_sencillo";
import Ser_especifico from "./chatgpt/Ser_especifico";
import Evitar_ambiguedades from "./chatgpt/Evitar_ambiguedades";
import Reafirmar from "./chatgpt/Reafirmar";
import Conocer_la_audiencia_objetivo from "./chatgpt/Conocer_la_audiencia_objetivo";
import Dar_ejemplo from "./chatgpt/Dar_ejemplo";
import Errores_comunes from "./chatgpt/Errores_comunes";
import Texto_demasiado_complejo from "./chatgpt/Texto_demasiado_complejo";
import Jergas_o_ambiguedades from "./chatgpt/Jergas_o_ambiguedades";
import Limitaciones_del_modelo from "./chatgpt/Limitaciones_del_modelo";
import Supuestos from "./chatgpt/Supuestos";
import Tecnica_promt_engineering from "./chatgpt/Tecnica_promt_engineering";
import Shots from "./chatgpt/Shots";


function PLaygroundContainer() {
  const { slug } = useParams();

  const playground = chatgptPlayground.find((post) => post.slug === slug);
  
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

  /* This use effect import dynamically components, but in netlify server doesn't works good so I import all and change it by the 
  useEffect(() => {
    const loadDynamicComponent = async () => {
      try {
        const module = await import(`./chatgpt/${slug}`);

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
  }, [slug]);*/

  return (
    <>
    
      <div className="container">
        <h2 className="pg-title">{playground.title}</h2>
              
              {/*{dynamicComponent} The dynamic component would go here, but due to netlify inconveniences I decided to import all the components and show them depending on the slug*/}

              {playground.slug == 'introduccion' ? <Introduccion/> : null}
              {playground.slug == 'precision' ? <Precision/> : null}
            
              {playground.slug === 'limites' && <Limites />}
              {playground.slug === 'informacion_sensible' && <Informacion_sensible />}
              {playground.slug === 'tips_basicos' && <Tips_basicos />}
              {playground.slug === 'iniciar_sencillo' && <Iniciar_sencillo />}
              {playground.slug === 'ser_especifico' && <Ser_especifico />}
              {playground.slug === 'evitar_ambiguedades' && <Evitar_ambiguedades />}
              {playground.slug === 'reafirmar' && <Reafirmar />}
              {playground.slug === 'conocer_la_audiencia_objetivo' && <Conocer_la_audiencia_objetivo />}
              {playground.slug === 'dar_ejemplo' && <Dar_ejemplo />}
              {playground.slug === 'errores_comunes' && <Errores_comunes />}
              {playground.slug === 'texto_demasiado_complejo' && <Texto_demasiado_complejo />}
              {playground.slug === 'jergas_o_ambiguedades' && <Jergas_o_ambiguedades />}
              {playground.slug === 'limitaciones_del_modelo' && <Limitaciones_del_modelo />}
              {playground.slug === 'supuestos' && <Supuestos />}
              {playground.slug === 'tecnica_promt_engineering' && <Tecnica_promt_engineering />}
              {playground.slug === 'shots' && <Shots />}
              

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
