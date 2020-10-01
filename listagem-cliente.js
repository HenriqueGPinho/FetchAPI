const removeCliente = id => {
  if (confirm("Deseja excluir o cliente?")) {
    removerCliente(id);
  }
}

const corpoTabela = document.querySelector("[data-conteudo]");

listarClientes().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
  });
})

function exibeCliente(cpf, nome, id) {
  const linha = document.createElement('tr');
  const conteudoLinha = 
    `
      <td>${cpf}</td>
      <td>${nome}</td>
      <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    `;

  linha.innerHTML = conteudoLinha;
  return linha;
}
