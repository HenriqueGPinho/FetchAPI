const infoClientes = [
  {
    cpf: 12345678912,
    nome: 'Arnaldo'
  },
  {
    cpf: 12345678913,
    nome: 'Arnalda'
  }
];

const corpoTabela = document.querySelector("[data-conteudo]");

infoClientes.forEach(indice => {
  corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
});

function exibeCliente(cpf, nome) {
  const linha = document.createElement('tr');
  const conteudoLinha = 
    `
      <td>${cpf}</td>
      <td>${nome}</td>
    `;

  linha.innerHTML = conteudoLinha;
  return linha;
}
