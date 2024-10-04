let pronombre = ['la', 'el'];
let adjetivo = ['mayor', 'intoxicado'];
let nombre = ['porqueria', 'mapache'];
let d=(".com");

for(let i = 0; i < pronombre.length; i++){
  let a = pronombre[i];
  for(let j = 0; j < adjetivo.length; j++){
    let b = adjetivo[j];
    for(let k = 0; k < nombre.length; k++){
      let c = nombre[k];
      console.log(a+b+c+d);
    }
  }
}