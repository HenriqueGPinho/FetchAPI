const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome]');

detalharCliente(id).then(dados => {
  inputCPF.value = dados[0].cpf
  inputNome.value = dados[0].nome
});

const formEdicao = document.querySelector('[data-form]');

formEdicao.addEventListener('submit', event => {
  event.preventDefault();

  if(!validaCPF(inputCPF.value)) {
    alert("Esse CPF não é válido!");
    return;
  }

  editarCliente(id, inputCPF.value, inputNome.value);
});