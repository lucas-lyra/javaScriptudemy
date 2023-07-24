let isAtivo = false
console.log(isAtivo);


isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);
console.log(!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!'');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo= true));
//todos esses de cima sao dados para verdadeiro

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
//todos sao dados para falso = false

console.log('pra finalisar...');
console.log(!!(''|| null || 0 ||' ' ));

let nome = 'lucas'
console.log(nome || 'Desconhecido');
