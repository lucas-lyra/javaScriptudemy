function compras (trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2
    const compraTV50 = trabalho1 && trabalho2
    //const compraTV32 = !!(trabalho1 ^ trabalho2)///bitwise xor
    const compraTV32 = trabalho1 != trabalho2
    const mantersaudavel = !compraSorvete // operador unário 

    return { compraSorvete, compraTV50, compraTV32, mantersaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false,true));
console.log(compras(false, false));
