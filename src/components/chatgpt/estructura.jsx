function estructura() {
    return (
      <div>
        <p>La entrada en texto que reciben las inteligencias artificiales son llamadas "prompt". Para ChatGPT se puede
                usar una estructura sencilla para conseguir buenos resultados</p>
                
        <br/>
            <ul>
                <li><span className="blue">Contexto</span>: Instrucciones de como quiero que se desarrolle su respuesta.
                </li>
                <li><span className="green">Instrucción o tarea</span>: Objetivo principal que quiero que logre. </li>
                <li><span className="brown">Input</span>: Entradas para decirle con que quiero que ejecute la tarea</li>
                <li><span className="rose">Output</span>: Numerales, bullets points o formato específico </li>
            </ul>
            <br />
            <p><span className="white">Nota</span>: No es obligatorio usarlos todos.</p>
      </div>
    )
  }
  
  export default estructura