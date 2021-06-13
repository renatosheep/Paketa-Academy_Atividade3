var strings = ["Renato", "Carneiro", "Fernandes"];

var retorno = strings.reduce(function (atual, proximo) {
  return atual.length > proximo.length ? atual : proximo;
});
console.log(retorno);