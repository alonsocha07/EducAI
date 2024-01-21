const chatgptPlayground = [];

chatgptPlayground.push({
    title: 'Empecemos por definir qué es ChatGPT.',
    slug: 'introduccion',
    prompt: 'Dame una descripción resumida de qué es ChatGPT'
})
chatgptPlayground.push({
    title: 'Precisión de la respuesta',
    slug: 'precision',
    prompt: '¿Cuál es la fórmula de la equivalencia entre masa y energía? <span>Respuesta concisa sin explicación</span>',
    prompt2: '¿Cuál es la fórmula de la equivalencia entre masa y energía? Respuesta resumida',
    prompt3: '¿Cuál es la fórmula de la equivalencia entre masa y energía? Respuesta de un párrafo',
})
chatgptPlayground.push({
    title: 'Estructura de un prompt?',
    slug: 'estructura',
    prompt: `<span class="blue">Actúa como un experto en historia del arte,</span> <span
    class="green">compara y contrasta</span> las pinturas <span class="brown">“La Última Cena” de
    Leonardo Da Vinci y “El Guernica” de Pablo Picasso,</span> <span class="rose">y entrégame
    las comparaciones en numerales</span></p>`
})
chatgptPlayground.push({
    title: 'Límites y uso ético',
    slug: 'limites',
})


chatgptPlayground.push({
    title: 'Información sensible',
    slug: 'informacion_sensible',
})
chatgptPlayground.push({
    title: 'Tips básicos',
    slug: 'tips_basicos',

})
chatgptPlayground.push({
    title: 'Iniciar sencillo y agregar detalles.',
    slug: 'iniciar_sencillo',
    prompt: 'Escribe una receta de pasta',
    prompt2: 'Eres un chef italiano. Crea una receta original de pasta con ingredientes tradicionales italianos',
    prompt3: 'Eres un chef italiano. Crea una receta original de pasta con ingredientes tradicionales italianos y que sea fácil de preparar en casa para alguien que no es experto en cocina. Lista de los pasos numerables'
})
chatgptPlayground.push({
    title: 'Ser específico',
    slug: 'ser_especifico',
    prompt: 'Redacta una carta de recomendación de un estudiante llamado Juan Pérez para su solicitud de ingreso a la maestría de Ciencias de la computación. Menciona su habilidad en programación, capacidad para trabajar en equipo y habilidades de comunicación. la carta debe incluir una introducción cuerpo y conclusión y debe contener no más de 3 párrafos'
})
chatgptPlayground.push({
    title: 'Evitar ambigüedades',
    slug: 'evitar_ambiguedades',
    prompt: 'Usa de 2 a 3 oraciones para explicar el concepto de prompt engineering a un estudiante de Secundaria'
})
chatgptPlayground.push({
    title: 'Reafirmar',
    slug: 'reafirmar',
    prompt: 'Actúa como un experto en historia del arte, compara y contrasta las pinturas “La Última Cena” de Leonardo Da Vinci y “El Guernica” de Pablo Picasso, y entrégame las comparaciones en numerales ¿Entendiste tu propósito?'
})
chatgptPlayground.push({
    title: 'Conocer la audiencia objetivo',
    slug: 'conocer_la_audiencia_objetivo',
    prompt: 'Actúa como un experto en física y aplica el conocimiento de la teoría de la relatividad de Einstein a un niño de 12 años. Describe de manera simple y con analogías cotidianas los distintos conceptos alrededor de esta teoría'
})
chatgptPlayground.push({
    title: 'Dar ejemplo',
    slug: 'dar_ejemplo',
    prompt: `Your work is to describe a scene in a beautiful photo in your very detail way. your description can’t exceed 70 words and should be similar to the next example <br/><br/>

    Example: “a photographer capturing the beauty and intricacy of a handcrafted piece of pottery with the texture and details of the clay surface adding visual interest and depth. the use of soft light and shallow depth of field creates a sense of focus on intricate powers and forms, emphasizing the beauty of human craftsmanship and creativity.”`
})
chatgptPlayground.push({
    title: 'Errores comunes',
    slug: 'errores_comunes',
    prompt: ''
})
chatgptPlayground.push({
    title: 'Texto demasiado complejo',
    slug: 'texto_demasiado_complejo',
    prompt: ''
})
chatgptPlayground.push({
    title: 'Jergas o ambigüedades',
    slug: 'jergas_o_ambiguedades',
    prompt: ''
})
chatgptPlayground.push({
    title: 'Limitaciones del modelo',
    slug: 'limitaciones_del_modelo',
        prompt: ''
})
chatgptPlayground.push({
    title: 'Supuestos',
    slug: 'supuestos',
    prompt: ''
})
chatgptPlayground.push({
    title: 'Tecnicas de prompt engineering',
    slug: 'tecnica_promt_engineering',
})
chatgptPlayground.push({
    title: 'Shots',
    slug: 'shots',
    prompt: 'Diseña 10 preguntas de deletreo para un niño de 7 años',
    prompt2:'Diseña 10 preguntas de deletreo para un niño de 7 años, sigue el siguiente ejemplo: Como se escribe la palabra del animal que ladra',
    prompt3:'Te voy a pasar una serie de ejemplos de notas de estudiantes y vas a tener que responder de una manera parecida basado en los ejemplos. Ejemplo 1:Nota de 90 a 100, Felicidades!!!! Aprobaste con un nota increíble, te deseo los mejores exitos. Ejemplo 2: Nota 70 a 90< Pasaste el curso, Suerte en los siguientes. Ejemplo 3: Nota inferior a 70, Lo intentaste pero no lo conseguiste, sigue estudiando y seguro apruebas la proxima. Si el estudiante obtuvo 78, Cual seria tu respuesta?    '
})

export {chatgptPlayground}