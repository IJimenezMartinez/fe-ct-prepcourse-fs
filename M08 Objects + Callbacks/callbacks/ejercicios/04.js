function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var resultado = arrayOfNumbers.reduce(function(acum, num){
    return acum += num;
  })

  cb(resultado);
}

module.exports = sumarArray;
