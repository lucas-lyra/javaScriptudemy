let valor // não inicializada
console.log(valor);


valor = null // ausêmcia de valor
console.log(valor);
//console.log(valor.toString()); // erro!

const produto = {}
console.log(produto.preço);
console.log(produto);

produto.preço = 3.50
console.log(produto);

produto.preço = undefined //evite atribuir undefined
console.log(!!produto.preço);
//delete produto.preço
console.log(produto);

produto.preço = null // sem preço 
console.log(!! produto.preço);
console.log(produto);