import AsideMenu from "../components/AsideMenu"

function Dalle2() {
    return (
      <>
      <div className="row">
        <AsideMenu sections={sections} technologieName="Dalle-2" imgTechnologie="../../src/assets/openaiLogo.png">Soy aside</AsideMenu>
        <div>chatgpt</div>
      </div>
      </>
    )
  }
  
  const sections = [];
sections.push({
  to: "/dalle2/introduccion",
  text: "Introducción",
});
sections.push({
  to: "/dalle2/precision",
  text: "Precision",
});
sections.push({
  to: "/dalle2/estructura",
  text: "estructura",
});
sections.push({
  to: "/dalle2/masfunciones",
  text: "Más funciones",
});
sections.push({
  to: "/dalle2/limites",
  text: "Límites",
});
sections.push({
  to: "/dalle2/informacionSensible",
  text: "informacionSensible",
});
sections.push({
  to: "/dalle2/variedadArtistica",
  text: "Variedad artistica",
});
sections.push({
  to: "/dalle2/contexto",
  text: "Contexto",
});
sections.push({
  to: "/dalle2/consejosBasicos",
  text: "Concejos basicos",
});

  export {Dalle2}