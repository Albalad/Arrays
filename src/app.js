let pronombre = ["la", "el", "los", "quien"];
let adjetivo = ["mayor", "intoxicado", "perfecto", "genial"];
let nombre = ["porqueria", "mapache", "comicom", "trenes"];
let extension = ["com", "net", "es", "io"];

console.log(nombre[2].slice(-3));

for (let i = 0; i < pronombre.length; i++) {
  let a = pronombre[i];

  for (let j = 0; j < adjetivo.length; j++) {
    let b = adjetivo[j];

    for (let k = 0; k < nombre.length; k++) {
      let c = nombre[k];

      if (c.slice(-2) === extension.find(i => i === c.slice(-2))) {
        let r = "." + c.slice(-2);
        let p = c.replace(c.slice(-2), r);
        console.log(a + b + p);

      } else if (c.slice(-3) === extension.find(i => i === c.slice(-3))) {
          let s = "." + c.slice(-3);
          let q = c.replace(c.slice(-3), s);
          console.log(a + b + q);
        
      } else {
        for (let l = 0; l < extension.length; l++) {
          let d = extension[l];
          console.log(a + b + c + "." + d);
        }
      }
    }
  }
}
