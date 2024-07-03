//interpolação interpolando um string
const primeiroNome = "Alexsandro";
console.log(`Olá, ${primeiroNome}`);

//interpolação de numero
const idade = 30;
console.log(`sua idade é ${idade} anos `);

//interpolação com expressão
const resultado = 2+2;
console.log(`o resultado do cálculo é ${resultado}`);


//boolean - verdadeiro e falso
const tarde = true;
const noite = false;

console.log(tarde);
console.log(noite);

const maioridade = 18;
const consultaMaiorDeIdade = maioridade > 17;

console.log(consultaMaiorDeIdade);

//comparação
const numero1 = 1;
const numero2 = 5;

console.log(numero1<numero2);
console.log(numero1>numero2);

const numero3 = 18;
const numero4 = 18;

console.log(numero3 >= numero4);
console.log(numero4 <= numero3);

//comparação de igualdade
const a = 1;
const b = 1;

console.log(a===b);

const c = 1;
const d = "12";

console.log(c==d);

//comparação de diferenciação
const e = 1;
const f = "1";

console.log(f != e);

const g = 1;
const h = 2;

console.log(g !== h);

//operadores lógicos - tabela verdade

const condicao1A = true;
const condicao1B = true;
const condicao3 = !true;
const condicao4 = !false;

console.log(condicao1A && condicao1B);
console.log(condicao1A || condicao1B);
console.log(condicao3 && condicao4);

console.log(condicao3);
console.log(condicao4);


//let e var - variáveis com dados alterados
let email = "alexsandro.ljesus@senacsp.edu.br";
email = "alxandrrr.com.br";
console.log(email);

let num1 = 10;
var num2 = 20;

num1 = 25;
num2 = 35;

console.log(num1);
console.log(num2);

//Valores vazios - empty values
let x;
let y = null;
let z = "";

console.log(x);
console.log(y);
console.log(z);

//Conversão do tipo automática
let x1 = 10;
let x2 = "10";
let x3 = x1*x2;

console.log(typeof x1);
console.log(typeof x2);
console.log(typeof x3);
console.log(x3);
console.log(x1 + x2);