function getInteriorAleatorio (min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do{
    opcao=getInteriorAleatorio(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}`);

}while(opcao != -1)
console.log('ate a proxima ');