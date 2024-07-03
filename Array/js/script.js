//(create) Array
const array = ["João", "Maria", "José"];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

//(update) Adcionando um elemento no final do array
const listaNomes = ["Juliana", "Bianca"];
listaNomes.push("Beatriz");
console.log(listaNomes);

//(delete) Removendo o ultimo elemento do array
listaNomes.pop();
console.log(listaNomes);

//(delete) Removendo um elemento específico do array
array.splice(1,1);
console.log(array);

//(update) Alterando o elemento do array
const arrayNomes = ["Marcela", "Paulo", "Bruno"];
arrayNomes[0] = "Pedro";
console.log(arrayNomes);

// (read) Percorrendo um array com o loop for
const listaFrutas = ["Uva", "Abacaxi", "Manga", "Abacate"];

for(let i = 0; i < listaFrutas.length; i++){
    console.log(listaFrutas[i]);
}

//(read) Percorrendo um array com um loop forEach
const listaCores = ["Verde", "Azul", "Roxo", "Amarelo"];

listaCores.forEach((cores) => {
console.log (cores);
});

// Concatenar dois arrays
const numeros = [6, 7, 8];
console.log(numeros.length);

const outrosNumeros = [3, 9, 2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);

//(delete) Removendo o primeiro elemento do array
const coresNovas = listaCores.shift();
// elemento que foi removido
console.log(coresNovas);
// Nova lista após remoção do primeiro elemento
console.log(listaCores);

//(update) Adcionando um ou mais elementos ao início do array
const numerosTeste = [1, 2, 3];
numerosTeste.unshift(0);
console.log(numerosTeste);

// indexOf
const frutas1 = ["Maçã", "Banana", "Manga", "Abacaxi"];
console.log(frutas1.indexOf("Maçã"));
console.log(frutas1.indexOf("Laranja"));

// lastIndexOf
const letras = ["a", "b", "c", "a", "d"];
console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));

// Reverse
const testandoReverse = [1,2,3,4,5];
testandoReverse.reverse();
console.log(testandoReverse);

// spread (reverter)
const testandoSpread = ["a", "b", "c", "d", "e"];
const novaLetras = [...testandoSpread].reverse();
console.log(novaLetras);

// upperCase (Transformando em letras maiusculas)
const fraseA = "Boas vindas!";
const upper = fraseA.toUpperCase();
console.log(upper);

// lowerCase (Transformando em letras minusculas)
const fraseB = "QUE LEGAL!";
const lower = fraseB.toLowerCase();
console.log(lower);