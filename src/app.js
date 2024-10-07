let pronombre = ["la", "el", "los", "quien"];
let adjetivo = ["mayor", "intoxicado", "perfecto", "genial"];
let nombre = ["porqueria", "comicom", "camion", "trusous"];
let extension = [".com", ".net", ".us", ".io"];

function generadorDominio() {
  let posiblesDominios = "";
  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
      for (let k = 0; k < nombre.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          if (nombre[k].slice(-2) === extension[l].slice(1)) {
            let replace = nombre[k].slice(0, -2) + extension[l];
            posiblesDominios += console.log(
              pronombre[i] + adjetivo[j] + replace
            );
          }

          if (nombre[k].slice(-3) === extension[l].slice(1)) {
            let replace = nombre[k].slice(0, -3) + extension[l];
            posiblesDominios += console.log(
              pronombre[i] + adjetivo[j] + replace
            );
          } else {
            posiblesDominios += console.log(
              pronombre[i] + adjetivo[j] + nombre[k] + extension[l]
            );
          }
        }
      }
    }
  }
}

generadorDominio();
