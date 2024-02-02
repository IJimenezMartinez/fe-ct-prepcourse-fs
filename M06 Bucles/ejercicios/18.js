function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
var acomulador =1

for (var i = a; i <= b; i++) {
  
  acomulador *= i
}

if (acomulador === -0){
  return 0;
}
  return acomulador;


}

module.exports = productoEntreNúmeros;