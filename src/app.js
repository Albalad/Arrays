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

        //Comprobamos si c acaba en alguna extension
        // if (c.slice(-2) === extension[2]) {
        //   let p = c.replace(c.slice(-2), "." + extension[2]);
        //   posiblesDominios += a + b + p + "<br>";
        // }

        //Almacenamos los valores de extension en d
        for (let l = 0; l < extension.length; l++) {
          let d = extension[l];

          if (c.slice(-2) === extension.find(o => o === c.slice(-2))) {
            let r = "." + c.slice(-2);
            let p = c.replace(c.slice(-2), r);
            posiblesDominios += a + b + p + "<br>";

            // sustituimos el final por el .extension
          }
          if (c.slice(-3) === extension.find(z => z === c.slice(-3))) {
            let s = "." + c.slice(-3);

            //sustituimos el final por el .extension
            let q = c.replace(c.slice(-3), s);
            posiblesDominios += a + b + q + "<br>";
          }
          // posiblesDominios += a + b + c + "." + d + "<br>";
        }
      }
    }
  }
  document.getElementById("posiblesDominios").innerHTML = posiblesDominios;
}

window.onload = function() {
  generadorDominio();
};

//for (let i = 0; i < pronoun.length; i++) {
// for (let j = 0; j < adj.length; j++) {
//   for (let k = 0; k < noun.length; k++) {
//     for (let l = 0; l < domain.length; l++) {
//       let strDomainName = pronoun[i] + adj[j] + noun[k] + domain[l];
