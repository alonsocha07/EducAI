import { Outlet } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";

function Chatgpt() {
  return (
    <>
      <div className="gridContainer">

        <AsideMenu sections={sections} technologieName="Chat GPT" imgTechnologie="../../src/assets/openaiLogo.png">Soy aside</AsideMenu>
        <div className="sectionRight">

          <Outlet/>
         
        </div>
      </div>
    </>
  );
}



 const sections = [];
 sections.push({
   to: "/chatgpt/introduccion",
   slug: "introduccion",
   text: "Introducción",
   sub: false
 });
 sections.push({
   to: "/chatgpt/precision",
   slug: "precision",
   text: "Precision",
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
  to: "/chatgpt/informacion-sensible",
  slug: "informacion-sensible",
  text: "Informacion Sensible",
  sub: false
});
sections.push({
  to: "/chatgpt/tips-basicos",
  slug: "tips-basicos",
  text: "Tips basicos",
  sub: false,
  title: true
});
sections.push({
  to: "/chatgpt/iniciar-sencillo",
  slug: "iniciar-sencillo",
  text: "Iniciar sencillo",
  sub: true
});
sections.push({
  to: "/chatgpt/ser-especifico",
  slug: "ser-específico",
  text: "Ser específico",
  sub: true
});
sections.push({
  to: "/chatgpt/evitar-ambiguedades",
  slug: "evitar-ambiguedades",
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
  to: "/chatgpt/conocer-la-audiencia-objetivo",
  slug: "conocer-la-audiencia-objetivo",
  text: "Conocer la audiencia objetivo",
  sub: true
});
sections.push({
  to: "/chatgpt/dar-ejemplo",
  slug: "dar-ejemplo",
  text: "Dar ejemplo",
  sub: true
});
sections.push({
  to: "/chatgpt/errores-comunes",
  slug: "errores-comunes",
  text: "Errores comunes",
  sub: false,
  title: true
});
sections.push({
  to: "/chatgpt/texto-demasiado-complejo",
  slug: "texto-demasiado-complejo",
  text: "Texto demasiado complejo",
  sub: true
});
sections.push({
  to: "/chatgpt/jergas-o-ambiguedades",
  slug: "jergas-o-ambiguedades",
  text: "Jergas o ambigüedades",
  sub: true
});
sections.push({
  to: "/chatgpt/limitaciones-del-modelo",
  slug: "limitaciones-del-modelo",
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
  to: "/chatgpt/tecnica-promt-engineering",
  slug: "tecnica-promt-engineering",
  text: "Técnica promt engineering",
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
