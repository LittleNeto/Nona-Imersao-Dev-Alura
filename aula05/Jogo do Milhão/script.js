//código realizado no site codepen.io
// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      "pergunta": "Qual filme ganhou o Oscar de Melhor Filme em 2023?",
      "respostas": [
        {opcao: "Avatar: O Caminho da Água", correto: false},
        {opcao: "Os Fabelmans", correto: false},
        {opcao: "Top Gun: Maverick", correto: false},
        {opcao: "Triângulo da Tristeza", correto: false},
        {opcao: "Tudo em Todo o Lugar ao Mesmo Tempo", correto: true}
      ]
    },
    {
      "pergunta": "Quem dirigiu o filme 'Parasita'?",
      "respostas": [
        {opcao: "Bong Joon-ho", correto: true},
        {opcao: "Choi Dong-hoon", correto: false},
        {opcao: "Kim Ki-duk", correto: false},
        {opcao: "Lee Chang-dong", correto: false},
        {opcao: "Park Chan-wook", correto: false}
      ]
    },
    {
      "pergunta": "Qual ator interpretou Coringa no filme 'O Cavaleiro das Trevas'?",
      "respostas": [
        {opcao: "Cesar Romero", correto: false},
        {opcao: "Heath Ledger", correto: true},
        {opcao: "Jack Nicholson", correto: false},
        {opcao: "Jared Leto", correto: false},
        {opcao: "Joaquin Phoenix", correto: false}
      ]
    },
    {
      "pergunta": "Em qual filme aparece a famosa frase 'Que a Força esteja com você'?",
      "respostas": [
        {opcao: "Blade Runner", correto: false},
        {opcao: "Duna", correto: false},
        {opcao: "Matrix", correto: false},
        {opcao: "Star Trek", correto: false},
        {opcao: "Star Wars", correto: true}
      ]
    },
    {
      "pergunta": "Qual é o nome da princesa protagonista do filme de animação 'Frozen'?",
      "respostas": [
        {opcao: "Anna", correto: false},
        {opcao: "Aurora", correto: false},
        {opcao: "Branca de Neve", correto: false},
        {opcao: "Cinderela", correto: false},
        {opcao: "Elsa", correto: true}
      ]
    },
    {
      "pergunta": "Quem dirigiu o filme 'Pulp Fiction'?",
      "respostas": [
        {opcao: "Francis Ford Coppola", correto: false},
        {opcao: "Martin Scorsese", correto: false},
        {opcao: "Quentin Tarantino", correto: true},
        {opcao: "Steven Spielberg", correto: false},
        {opcao: "Woody Allen", correto: false}
      ]
    },
    {
      "pergunta": "Qual filme de ficção científica se passa no planeta Pandora?",
      "respostas": [
        {opcao: "Avatar", correto: true},
        {opcao: "Distrito 9", correto: false},
        {opcao: "Elysium", correto: false},
        {opcao: "Interestelar", correto: false},
        {opcao: "Perdido em Marte", correto: false}
      ]
    },
    {
      "pergunta": "Qual atriz ganhou o Oscar de Melhor Atriz por 'La La Land'?",
      "respostas": [
        {opcao: "Cate Blanchett", correto: false},
        {opcao: "Emma Stone", correto: true},
        {opcao: "Julianne Moore", correto: false},
        {opcao: "Meryl Streep", correto: false},
        {opcao: "Natalie Portman", correto: false}
      ]
    },
    {
      "pergunta": "Qual o filme que mais ganhou oscar na história?",
      "respostas": [
        {opcao: "Amor, Sublime Amor (1961)", correto: true},
        {opcao: "Ben-Hur (1959)", correto: true},
        {opcao: "Gigi (1958)", correto: false},
        {opcao: "O Senhor dos Anéis: O Retorno do Rei (2003)", correto: true},
        {opcao: "Titanic", correto: true}
      ]
    },
    {
      "pergunta": "Qual o gênero principal do filme 'Um Sonho de Liberdade' (The Shawshank Redemption)?",
      "respostas": [
        {opcao: "Ação", correto: false},
        {opcao: "Comédia", correto: false},
        {opcao: "Drama", correto: true},
        {opcao: "Suspense", correto: false},
        {opcao: "Terror", correto: false}
      ]
    }
  ]
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          //acertos = acertos + 1;
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  