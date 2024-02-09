function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

 var resultado = resultadosTest.reduce(function(suma, item){
    return suma = suma + item
  })   
 
  return resultado / resultadosTest.length;
}

module.exports = promedioResultadosTest;
