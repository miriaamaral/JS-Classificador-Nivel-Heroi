// Vou criar um objeto para armazenar os níveis de XP
// Isso vai tornar o código mais limpo e fácil de manter
const niveis = {
    Ferro: (xp) => xp < 1000,
    Bronze: (xp) => xp >= 1000 && xp <= 2000,
    Prata: (xp) => xp >= 2001 && xp <= 5000,
    Ouro: (xp) => xp >= 5001 && xp <= 7000,
    Platina: (xp) => xp >= 7001 && xp <= 8000,
    Ascendente: (xp) => xp >= 8001 && xp <= 9000,
    Imortal: (xp) => xp >= 9001 && xp <= 10000,
    Radiante: (xp) => xp >= 10001,
  };
  
  // Defini o nome do herói e a quantidade de experiência (XP) para testar o código
  nome = "Guilherme";
  xp = 1873;
  
  // Usei a função "find" para encontrar o nível de XP do herói
  const nivel = Object.keys(niveis).find((nivel) => niveis[nivel](xp));
  
  // Adicionei uma condição para verificar se o nivel é undefined e, se for, mostrar uma mensagem de erro
  // Vai evitar que o código exiba uma mensagem de erro se o XP do herói não for encontrado nos níveis definidos
  
  // Criei um elemento HTML para exibir a mensagem, pois o console.log() não é visível no navegador
  const mensagem = document.createElement('p');
  
  if (nivel === undefined) {
    mensagem.textContent = `Erro: Nível de XP não encontrado para ${nome}`;
  } else {
    mensagem.textContent = `O Herói de nome ${nome} está no nível de ${nivel}`;
  }
  
  // Adicionei o elemento criado ao corpo do documento HTML
  document.body.appendChild(mensagem);