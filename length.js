/* Exemplo 01 

No exemplo a seguir demonstramos como obter o tamanho de uma string: */

var stringExemplo = "Aprendendo JavaScript";
var tamanho = stringExemplo.length;
console.log(tamanho);

/* Exemplo 02 

No exemplo a seguir demonstramos como utilizar a propriedade length quando é preciso conhecer o tamanho de um array: */

var frutas = ["banana", "abacaxi", "abacate", "laranja", "morango", "abacate"];
console.log(frutas.length);

/* Exemplo 03 

No exemplo a seguir demonstramos como verificar se uma string está vazia, algo que precisa ser validado em formulários 
e pode prejudicar o funcionamento da aplicação:*/

var stringVazia = "";
if (stringVazia.length == 0) {
  console.log("String Vazia");
}

/* Exemplo 04 
Também podemos utilizar a propriedade para validar o tamanho de uma senha: */

var senha = "12345";
if (senha.length < 6) {
  console.log("A senha precisa ter 6 (seis) caracteres");
}

/* Exemplo 05 

No exemplo a seguir demonstramos como fazer uma validação simples de CPF: */

var cpf = "124.587.748-15";

if (cpf.length == "14") {
  console.log("CPF com o tamanho correto");
} else {
  console.log("Verificar campo do CPF");
}

/* Exemplo 06 

No exemplo a seguir iremos iterar sobre um array utilizando a propriedade length. */

var frutas = ["banana", "abacaxi", "abacate", "laranja", "morango", "abacate"];
for (var posicao = 0; posicao < frutas.length; posicao++) {
  console.log(frutas[posicao]);
}
