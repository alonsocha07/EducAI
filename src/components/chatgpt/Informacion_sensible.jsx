function informacion_sensible() {
  return (
    <div>
      <p>
        Aunque Open AI afirma que la información que recibe el chat no se
        comparte con terceros, es mejor no compartir información delicada.
        Además de que queda registrado el historial en tu navegador.
      </p>
      <br/>
      <ul>
        <li>
          <span className="red">
            No compartir información personal identificable con el chatbot
          </span>
          : Evita compartir información como tu nombre completo, dirección,
          número de seguro social, número de tarjeta de crédito o cualquier otra
          información que pueda identificarte personalmente.
        </li>
        <li>
          <span className="red">
            No compartas información que esté protegida bajo un acuerdo de
            confidencialidad
          </span>
          : Esto podría meterte en problemas y afectar a la empresa u
          organizaciones con las que colabores.{" "}
        </li>
        <li>
          <span className="red">Tener cuidado con la información médica</span>:
          Consulta con tu profesional de la salud para compartir información
          sobre tus condiciones médicas, medicamentos o tratamientos con
          ChatGPT.{" "}
        </li>
        <li>
          <span className="red">Evita compartir contraseñas</span>: Los chatbots no
          necesitan esa información para proporcionarte ayuda. Es posible que si
          la soliciten se trate de un clon malicioso{" "}
        </li>
        <li>
          <span className="red">
            Asegúrate de estar en un entorno seguro. Evita utilizar ChatGPT en
            redes públicas o abiertas de Wi-Fi.
          </span>
          : Utiliza una conexión segura y privada, como una red Wi-Fi doméstica,
          una conexión celular o una VPN.{" "}
        </li>
        <li>
          <span className="red">
            Revisa los términos y condiciones de uso de ChatGPT.
          </span>
          : Asegúrate de leer los términos y condiciones de uso de ChatGPT y
          comprende cómo se maneja y protege tu información. Si tienes preguntas
          o inquietudes, ponte en contacto con el equipo de soporte de ChatGPT.{" "}
        </li>
      </ul>
    </div>
  );
}

export default informacion_sensible;
