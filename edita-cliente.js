const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalharCliente(id).then(dados => {
  inputCPF.value = dados[0].cpf
  inputNome.value = dados[0].nome
});

const formEdicao = document.querySelector('[data-form]');

const mensagem = (mensagem, status) => {
  const linha = document.createElement('tr');

  let conteudoLinha;

  if (status === 'sucesso') {
    conteudoLinha = `
      <div class="alert alert-success" role="alert">
        ${mensagem}
      </div>
    `
  }

  if (status === 'erro') {
    conteudoLinha = `
    <div class="alert alert-warning" role="alert">
      ${mensagem}
    </div>
  `
  }

  linha.innerHTML = conteudoLinha;

  return linha;
}

formEdicao.addEventListener('submit', event => {
  event.preventDefault();

  if(!validaCPF(inputCPF.value)) {
    alert("Esse CPF não é válido!");
    return;
  }

  editarCliente(id, inputCPF.value, inputNome.value).then(resposta => {
    if (resposta.status === 200) {
      formEdicao.appendChild(mensagem('Cliente editado com sucesso!', 'sucesso'));
    } else {
      formEdicao.appendChild(mensagem('Não foi possível editar o cliente!', 'erro'));
    }
  });
});