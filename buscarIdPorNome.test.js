// Importe a função que você deseja testar
const buscarIdPorNome = require('./buscarIdPorNome');

// Descrição do teste
test('Deve retornar o ID correto para um nome existente', () => {
  // Mock do objeto `id` com alguns valores
  const id = {
    1: 'Caique',
    2: 'Karol',
    3: 'João',
  };

  // Chame a função com o nome "Caique"
  const idEncontrado = buscarIdPorNome('Caique');

  // Verifique se o ID retornado é igual ao esperado (neste caso, o ID 1)
  expect(idEncontrado).toBe('1');
});

test('Deve retornar null para um nome inexistente', () => {
  // Mock do objeto `id` vazio (sem valores)
  const id = {};

  // Chame a função com um nome que não existe no objeto `id`
  const idEncontrado = buscarIdPorNome('Maria');

  // Verifique se o resultado é null (indicando que o nome não foi encontrado)
  expect(idEncontrado).toBeNull();
});
