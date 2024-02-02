function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var textoInvertido = texto.split('').reverse().join('');
  return textoInvertido;
  }
  




module.exports = invertirTexto;