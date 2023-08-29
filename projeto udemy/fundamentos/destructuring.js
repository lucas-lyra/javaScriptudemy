//novo recurso do es2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco:{ 
    longradouro:'Rua ABC',
    numero:1000}
}

const {nome , idade } = pessoa
console.log(nome,idade)

const { nome: n, idade: i } = pessoa
console.log(n,i);

const { sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome,bemhumorada);

const{ endereco : {longradouro,numero,cep}} = pessoa
console.log(longradouro,numero,cep);

