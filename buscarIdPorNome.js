let id = {
    1: "Caique",
    2: "Karol",
    3: "Clei"
  };
  
  function buscarIdPorNome(nome) {
    for (let key in id) {
      if (id[key] === nome) {
        return key;
      }
    }
    return null; 
  }
  
  let nomeBuscado = "Caique";
  let idEncontrado = buscarIdPorNome(nomeBuscado);
  
  if (idEncontrado !== null) {
    console.log(`O ID de ${nomeBuscado} é: ${idEncontrado}`);
  } else {
    console.log(`O nome ${nomeBuscado} não foi encontrado.`);
  }
  
  module.exports = buscarIdPorNome