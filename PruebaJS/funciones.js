var acceso = true

/*
var accesoU = function (a){
    return a
}
*/

var accesoU = (a,b) => (`Usuario ${a} con permisos de ${b}`)

var accesoU1 = (u,p) =>{
    document.write("Inicia ejecución:   ")
    console.log(p)
    if(p == true){
        document.write(`Usuario ${u} con permisos otorgados sobre los archivos`)
    }
    else{
        document.write(`Usuario ${u} sin permisos otorgados sobre los archivos`)
    }

}


cPermisos = (binarioP) =>{

    var longitud = binarioP.length
    var arrayBin = Array.from(binarioP)
    var arrayEl = [4,2,1]
    var iterator = arrayEl.values();
    var h = 0
    var restric = 0
    document.write (`Valor binario ingresado: ${binarioP}, valor en restricción: `)

    if (binarioP.length != 9){
        document.write ("Longitud invalida.")
    }
    else{
        arrayBin.forEach(function(element,index)  {
            
            if(element != 0 && element != 1)
                document.write(`valor ingresado errado: revisar  ${element} `)
            else{
                var iteI = iterator.next()

                if (iteI.done == true) {
                    iteI.done = false
                    iterator = arrayEl.values();
                    var iteI = iterator.next()
                    document.write(restric)
                    restric = 0
                }
                    var k = iteI.value
                    var multi = element * k
                    restric += multi 
                    if (index+1 == arrayBin.length)
                        document.write(restric)
                    h += 1                
            }
        }
    )  
            
    }
}

cPermisos('010100111')

//document.write(accesoU('juan', 'Consumir'))

accesoU(acceso) ==   true
? document.write("Usuario permitido")
: document.write("Usuario denegado")


isInteger = (a) => Number.isInteger(a)
parseIntFunction = (a) => Number.parseInt(a)
limitarDecimales = (a) => Number.parseFloat(a).toFixed(3)

console.log(`numero ingresado es entero : ${limitarDecimales(23.54555343)}`)