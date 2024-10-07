let pronombre = ["la", "el", "los", "quien"];
let adjetivo = ["mayor", "intoxicado", "perfecto", "genial"];
let nombre = ["porqueria", "mapache", "colacom", "trenes"];
let extension = ["com", "net", "es", "io"];

function generadorDominio(){

    //Almacenamos los valores de pronombre en a
    for (let i = 0; i < pronombre.length; i++) {
        let a = pronombre[i];

        //Almacenamos los valores de adjetivo en b
        for (let j = 0; j < adjetivo.length; j++) {
            let b = adjetivo[j];

            //Almacenamos los valores de nombre en c
            for (let k = 0; k < nombre.length; k++) {
                let c = nombre[k];

                //Almacenamos los valores de extension en d
                for (let l = 0; l < extension.length; l++) {
                    let d = extension[l];

                    //Comprobamos si c acaba en alguna extension
                    if (c.slice(-2) === extension.find(o => o === c.slice(-2))) {
                        let r = "." + c.slice(-2);

                        //sustituimos el final por el .extension
                        let p = c.replace(c.slice(-2), r);
                        console.log(a + b + p);
            
                    }
                    if (c.slice(-3) === extension.find(z => z === c.slice(-3))) {
                        let s = "." + c.slice(-3);

                        //sustituimos el final por el .extension
                        let q = c.replace(c.slice(-3), s);
                        console.log(a + b  + q);
                    
                    } else {
                        console.log(a + b + c + "." + d);
                    }
                }
            }
        }
    }
}

generadorDominio();
