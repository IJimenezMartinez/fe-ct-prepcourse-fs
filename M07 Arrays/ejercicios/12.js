function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var resultado = arrayOfNums.reduce(function(suma, item){
    return suma = suma + item
  })   
 
  return resultado;

}

module.exports = agregarNumeros;
