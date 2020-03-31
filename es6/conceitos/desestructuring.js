const usuario = {
  nome: 'Lucas',
  idade: 22,
  endereco: {
    cidade: 'Curitiba',
    estado: 'PR'
  },
};

// let nome = usuario.nome;
// let idade = usuario.idade;
// let cidade = usuario.endereco.cidade;

// Desestruturação
const { nome, idade, endereco: { cidade } } = usuario;

function mostraNome({ nome }) {
  console.log(nome);
}

mostraNome(usuario);