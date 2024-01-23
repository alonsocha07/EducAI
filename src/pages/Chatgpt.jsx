import { Outlet } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";

function Chatgpt() {
  return (
    <>
      <div className="gridContainer">

        <AsideMenu sections={sections} technologieName="Chat GPT" imgTechnologie="/assets/openAILogo.svg">Soy aside</AsideMenu>
        <div className="sectionRight">

          <Outlet/>
         
        </div>
      </div>
    </>
  );
}



 const sections = [];
 sections.push({
   to: "/chatgpt/Introduccion",
   slug: "Introduccion",
   text: "Introducción",
   sub: false
 });
 sections.push({
   to: "/chatgpt/Precision",
   slug: "Precision",
   text: "Precisión",
   sub: false
 });

sections.push({
  to: "/chatgpt/estructura",
  slug: "estructura",
  text: "Estructura",
  sub: false
});
sections.push({
  to: "/chatgpt/limites",
 
  text: "Límites",
  sub: false
});
sections.push({
  to: "/chatgpt/informacion_sensible",
  slug: "informacion_sensible",
  text: "Información Sensible",
  sub: false
});
sections.push({
  to: "/chatgpt/tips_basicos",
  slug: "tips_basicos",
  text: "Tips básicos",
  sub: false,
  title: true
});
sections.push({
  to: "/chatgpt/iniciar_sencillo",
  slug: "iniciar_sencillo",
  text: "Iniciar sencillo",
  sub: true
});
sections.push({
  to: "/chatgpt/ser_especifico",
  slug: "ser_específico",
  text: "Ser específico",
  sub: true
});
sections.push({
  to: "/chatgpt/evitar_ambiguedades",
  slug: "evitar_ambiguedades",
  text: "Evitar ambigüedades",
  sub: true
});
sections.push({
  to: "/chatgpt/reafirmar",
  slug: "reafirmar",
  text: "Reafirmar",
  sub: true
});
sections.push({
  to: "/chatgpt/conocer_la_audiencia_objetivo",
  slug: "conocer_la_audiencia_objetivo",
  text: "Conocer la audiencia objetivo",
  sub: true
});
sections.push({
  to: "/chatgpt/dar_ejemplo",
  slug: "dar_ejemplo",
  text: "Dar ejemplo",
  sub: true
});
sections.push({
  to: "/chatgpt/errores_comunes",
  slug: "errores_comunes",
  text: "Errores comunes",
  sub: false,
  title: true
});
sections.push({
  to: "/chatgpt/texto_demasiado_complejo",
  slug: "texto_demasiado_complejo",
  text: "Texto demasiado complejo",
  sub: true
});
sections.push({
  to: "/chatgpt/jergas_o_ambiguedades",
  slug: "jergas_o_ambiguedades",
  text: "Jergas o ambigüedades",
  sub: true
});
sections.push({
  to: "/chatgpt/limitaciones_del_modelo",
  slug: "limitaciones_del_modelo",
  text: "Limitaciones del modelo",
  sub: true
});
sections.push({
  to: "/chatgpt/supuestos",
  slug: "supuestos",
  text: "Supuestos",
  sub: true
});
sections.push({
  to: "/chatgpt/tecnica_promt_engineering",
  slug: "tecnica_promt_engineering",
  text: "Técnica promt engineering",
  title: true
});
sections.push({
  to: "/chatgpt/shots",
  slug: "shots",
  text: "Shots",
  sub: true
});

/*
const sections = [];
sections.push({
  to: "/chatgpt/introduccion",
  text: "Introducción",
  sub: false
});
sections.push({
  to: "/chatgpt/precision",
  text: "Precision",
  sub: false
});
sections.push({
  to: "/chatgpt/estructura",
  text: "Estructura",
  sub: false
});
sections.push({
  to: "/chatgpt/limites",
  text: "Límites",
  sub: false
});
sections.push({
  to: "/chatgpt/informacionSensible",
  text: "Informacion Sensible",
  sub: false
});
sections.push({
  to: "/chatgpt/iniciarSencillo",
  text: "Tips basicos",
  sub: false,
  title: true
});
sections.push({
  to: "/chatgpt/iniciarSencillo",
  text: "Iniciar sencillo",
  sub: true
});
sections.push({
  to: "/chatgpt/serEspecifico",
  text: "Ser específico",
  sub: true
});
sections.push({
  to: "/chatgpt/evitarAmbiguedades",
  text: "Evitar ambigüedades",
  sub: true
});
sections.push({
  to: "/chatgpt/reafirmar",
  text: "Reafirmar",
  sub: true
});
sections.push({
  to: "/chatgpt/conocerAudiencia",
  text: "Conocer la audiencia objetivo",
  sub: true
});
sections.push({
  to: "/chatgpt/darEjemplo",
  text: "Dar ejemplo",
  sub: true
});
sections.push({
  to: "/chatgpt/textoDemasiadoComplejo",
  text: "Errores comunes",
  sub: false,
  title: true
});
sections.push({
  to: "/chatgpt/textoDemasiadoComplejo",
  text: "Texto demasiado complejo",
  sub: true
});
sections.push({
  to: "/chatgpt/Jergas",
  text: "Jergas o ambiguedades",
  sub: true
});
sections.push({
  to: "/chatgpt/limitacionesDelModelo",
  text: "Limitaciones del modelo",
  sub: true
});
sections.push({
  to: "/chatgpt/supuestos",
  text: "Supuestos",
  sub: true
});
sections.push({
  to: "/chatgpt/prompEngineering",
  text: "Tecnica promt engineering",
  sub: true
});
*/
export { Chatgpt };
