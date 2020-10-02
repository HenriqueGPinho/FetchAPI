const listarClientes = () => {
  return fetch('http://localhost:4000/clientes')
  .then(resposta => {
    return resposta.json();
  })
  .then(json => {
    return json;
  });
}

const cadastrarCliente = (nome, cpf) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  });
  
  return fetch('http://localhost:4000/clientes/cliente', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: json 
  })
  .then(resposta => {
    return resposta.body;
  });
}

const removerCliente = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'DELETE'
  });
}

const detalharCliente = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'GET'
  })
  .then(resposta => {
    return resposta.json();
  })
}

const editarCliente = (id, cpf, nome) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  });
  
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: json 
  });
}