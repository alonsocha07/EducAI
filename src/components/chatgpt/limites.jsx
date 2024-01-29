function limites() {
  return (
    <div>
      {" "}
      <p>
        Es importante conocer los límites de esta herramienta, en esta zona se
        explican cuáles son las principales
      </p>
      <br />
      <ul>
        <li>
          <span className="red">Falta de comprensión profunda</span>: Los
          modelos lo que hacen es acomodar palabras que tengan una probabilidad
          muy alta de continuar con el hilo de texto para satisfacer el prompt.
          NO tienen una comprensión profunda de lo que dicen.
        </li>
        <li>
          <span className="red">
            Respuestas plausibles, pero pueden ser incorrectas
          </span>
          : Hay ocasiones que ocurren “Alucinaciones”. Que ChatGPT está seguro
          de lo que dice, pero esta incorrecto (Animal acuático más grande =
          elefante). Es importante saber que esto puede ocurrir, así que es
          mejor contrastar la información.{" "}
        </li>
        <li>
          <span className="red">Sensibilidad al sesgo</span>: Los modelos se
          entrañan con texto, audio o video que se encuentra en internet. Esa
          información puede ser poco ética.
        </li>
        <li>
          <span className="red">Vulnerabilidad a la manipulación</span>: Están
          entrenados para no hacer tareas que lleven al mal (Como una bomba
          casera), pero hay técnicas que permiten saltarse esos filtros.
        </li>
        <li>
          <span className="red">Dificultad de mantener contexto</span>: Puede
          ser que cuando una conversación se vuelva larga, se pierda.{" "}
        </li>
        <li>
          <span className="red">actualización en tiempo real</span>: En este
          momento la base de datos esta actualizada hasta septiembre 2021.{" "}
        </li>
        <li>
          <span className="red">Máximo de tokens</span>: Tiene un límite de
          palabras que puede recibir y generar. Ejemplo que no se pueda meter el
          quijote de la mancha entero.{" "}
        </li>
      </ul>
    </div>
  );
}

export default limites;
