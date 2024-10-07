let pronombre = ["la", "el", "los", "quien"];
let adjetivo = ["mayor", "intoxicado", "perfecto", "genial"];
let nombre = ["porqueria", "mapache", "camion", "trusous"];
let extension = [".com", ".net", ".us", ".io"];

for (let i = 0; i < pronombre.length; i++) {
  let a = pronombre[i];
  for (let j = 0; j < adjetivo.length; j++) {
    let b = adjetivo[j];
    for (let k = 0; k < nombre.length; k++) {
      let c = nombre[k];
      for (let l = 0; l < extension.length; l++) {
        let d = extension[l];

        if (c.slice(-2) === d.slice(1)) {
          let replace = c - c.slice(-2);
          let exten = replace + d;

          // console.log("el slice es", c.slice(-2));
          console.log(a + b + exten);
        } else {
          console.log(a + b + c + d);
        }
      }
    }
  }
}
