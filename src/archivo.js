let pronombre = ["la", "el", "los", "quien"];
let adjetivo = ["mayor", "intoxicado", "perfecto", "genial"];
let nombre = ["porqueria", "mapache", "colacom", "trenes"];
let extension = ["com", "net", "es", "io"];

function generadorDominio() {
  // Variable para almacenar los resultados
  let posiblesDominios = "";

  //Almacenamos los valores de pronombre en a
  for (let i = 0; i < pronombre.length; i++) {
    let a = pronombre[i];

    //Almacenamos los valores de adjetivo en b
    for (let j = 0; j < adjetivo.length; j++) {
      let b = adjetivo[j];

      //Almacenamos los valores de nombre en c
      for (let k = 0; k < nombre.length; k++) {
        let c = nombre[k];
        for (let l = 0; l < extension.length; l++) {
            let d = extension[l];
            posiblesDominios = a + b + c + "." + d;
            return posiblesDominios;
        }
        }
    }
  }
  
}

console.log(generadorDominio());