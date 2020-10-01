const formCadastroCliente = document.querySelector('[data-form]');

formCadastroCliente.addEventListener("submit", evento => {
  evento.preventDefault();

  const nome = evento.target.querySelector('[data-nome]').value;
  const cpf = evento.target.querySelector('[data-cpf]').value;

  if (validaCPF(cpf)) cadastrarCliente(nome, cpf);
  else alert('O CPF não é válido!');
})