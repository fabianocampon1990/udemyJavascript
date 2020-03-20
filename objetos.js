user = 'fabian'

var objeto = {
    //clave:valor
    nombre:"Fabian Ocampo",
    edad: 2020,
    importante: true,
    texto : `Usuario ${user}`,
    miFuncion: (a,b) => a+b,
    otrObjeto : {
        nombre: 'alejo',
        clave: 1234
    },
    fecha:new Date()
}


//console.log(objeto)
//console.log(objeto.miFuncion(3,4))
//console.log(objeto.otrObjeto)
//console.log(objeto.fecha.toDateString())

//Desestructuración de objetos
//var {nombre} = objeto
//console.log(nombre)

//Desestructuracion por función
//var otraFuncion = ({texto}) => texto
//console.log(otraFuncion(objeto))

//Desestructuracion por función manera 2
var otraFuncion = ({texto},{otrObjeto}) => {
    console.log(texto)
    console.log(otrObjeto)
}
otraFuncion(objeto,objeto)