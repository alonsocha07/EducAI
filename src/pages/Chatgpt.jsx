import AsideMenu from "../components/AsideMenu";

function Chatgpt() {
  return (
    <>
      
        <AsideMenu sections={sections} technologieName="Chat GPT" imgTechnologie="../../src/assets/openaiLogo.png">Soy aside</AsideMenu>
        <div className="sectionRight">
        fergggggggggggggg hyhhhhhhhhy          uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu             lllllllllllllllllllllll yyyyyyyyyyyyyyyyyyyyyyyyyy eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn gggggggggggggggggggggggggggggg zzzzzzzzzzzzzzzzzzzzzzzz
      </div>
    </>
  );
}

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

export { Chatgpt };
