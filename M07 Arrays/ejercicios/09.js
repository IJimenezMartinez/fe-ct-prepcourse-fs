function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
var elementoMayor = array.filter(function(elemento){
  return elemento > 10;
  }
)

return elementoMayor.length;

}

module.exports = contarElementosMayoresA10;
