//armazenando uma funçao em uma variavel
const imprimirSoma = function( a, b) {
    console.log(a+b);

}
imprimirSoma (2, 3)

//Armazenado uma funçao arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3));

//retorno implicito 
const subtraçao = (a, b) => a - b
console.log(subtraçao(2, 3));