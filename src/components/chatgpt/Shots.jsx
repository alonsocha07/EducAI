export default function Shots() {
  return (
    <div>
        <p className="p-definicion">En la ingenieria de prompts se puede utilizar la palabra "shot" para referirse a un ejemplo explicito. ChatGPT funciona bien sin la necesidad de darle ejemplos, pero en ciertas ocasiones podemos mejorar el promt agregandole shots</p>
        <br />
        <p className="p-definicion">En los siguientes 3 ejemplos vamos a ver las 3 tecnicas de shots.</p>
                
        <br />
        <p> <span className="white">Zero-Shot:</span> No pasarle ningun shot</p>
        <br />
        <p> <span className="white">One-Shot:</span> Pasarle un shot</p>
        <br />
        <p> <span className="white">Few-Shots:</span> Pasarle algunos shots</p>
    </div>
  )
}
