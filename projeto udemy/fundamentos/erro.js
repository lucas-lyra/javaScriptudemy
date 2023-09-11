function imprimirNomeGritando(obj){
    try{
        console.log(obj.neme.toUpperCase()+ '!!!');
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final');
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)