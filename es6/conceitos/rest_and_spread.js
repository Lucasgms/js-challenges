// REST

const usuario = {
  nome: 'Lucas',
  idade: 22,
  empresa: 'Contabilizei'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

// function soma(a, b, c) {
//   return a + b + c;
// }

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const usuario1 = {
  nome: 'Lucas',
  idade: 22,
  empresa: 'Contabilizei'
};

const usuario2 = { ...usuario1, nome: 'Luquita' };

console.log(usuario2);
