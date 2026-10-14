// ---------------------------------------------------------
  // Quiz (quiz.html)
  // COLE ESTE BLOCO inteiro logo DEPOIS do fechamento do
  // "if (chatCorpo) { ... }" e ANTES de "const btnSim = ..."
  // (se colar depois, o "return" lá embaixo impede o quiz de rodar)
  // ---------------------------------------------------------
  const quizEl = document.getElementById('quiz');

  if (quizEl) {
    // Edite as perguntas à vontade. "correta" é o índice da resposta certa (0 a 3).
    const perguntas = [
      {
        pergunta: 'Qual foi o dia da nossa primeira conversa?',
        opcoes: ['19/08', '22/07', '12/07', '02/08'],
        correta: 1,
        acerto: 'Oia onde tudo começou ',
        erro: 'Por poucooo'
      },
      {
        pergunta: 'Quando nos se casou?',
        opcoes: ['22/08', '13/08', '14/08', '18/08'],
        correta: 2,
        acerto: 'Impossivel esquecer nee',
        erro: 'ce errou de propisito q eu sei!'
      },
      {
        pergunta: 'Qual foi a primeira serie que nos assistimos (so eu e voce)',
        opcoes: [
          'A porcaria da Ayla sla oq',
          'Demon Slayer',
          'Horimiya',
          'Link Click'
        ],
        correta: 0,
        acerto: 'Esse ai fica de exemplo para eu nunca mais escolher nada',
        erro: 'Quem dera viu'
      },
      {
        pergunta: 'As pessoas que olham para as estrelas e desejam...',
        opcoes: [
          'As estrelas que ouvem e aos sonhos são atendidos.',
          'As estrelas que não ouvem e aos sonhos não são atendidos.',
          'Aos sonhos sao atendidos',
          'As estrelas que me ouvem e aos que desejam'
        ],
        correta: 0,
        acerto: '...',
        erro: 'nao acredito que vc errou essa dq'
      },
      {
        pergunta: 'O que eu mais gosto de fazer com você?',
        opcoes: ['Assistir serie', 'Conversar ate tarde', 'Perturbar sua paz', 'Tudo e mais um pouco'],
        correta: 3,
        acerto: 'Nossa, foi obvio nee',
        erro: 'So uma coisa é muito pouco'
      }
    ];

    const elContador = document.getElementById('quiz-contador');
    const elBarra = document.getElementById('quiz-barra-preenchida');
    const elPergunta = document.getElementById('quiz-pergunta');
    const elOpcoes = document.getElementById('quiz-opcoes');
    const elFeedback = document.getElementById('quiz-feedback');
    const btnProximo = document.getElementById('quiz-proximo');
    const cardFinal = document.getElementById('quiz-final');
    const elFinalTitulo = document.getElementById('quiz-final-titulo');
    const elFinalTexto = document.getElementById('quiz-final-texto');

    let atual = 0;
    let acertosDePrimeira = 0;
    let errouNestaPergunta = false;

    function mostrarPergunta() {
      const q = perguntas[atual];
      errouNestaPergunta = false;

      elContador.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
      elBarra.style.width = `${(atual / perguntas.length) * 100}%`;
      elPergunta.textContent = q.pergunta;
      elFeedback.textContent = '';
      btnProximo.hidden = true;
      elOpcoes.innerHTML = '';

      q.opcoes.forEach((texto, i) => {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'quiz-opcao';
        botao.textContent = texto;
        botao.addEventListener('click', () => responder(botao, i));
        elOpcoes.appendChild(botao);
      });
    }

    function responder(botao, indice) {
      const q = perguntas[atual];

      if (indice === q.correta) {
        botao.classList.add('correta');
        elFeedback.textContent = q.acerto;
        if (!errouNestaPergunta) acertosDePrimeira++;

        // Trava todas as opções e libera o botão de avançar
        elOpcoes.querySelectorAll('.quiz-opcao').forEach((b) => (b.disabled = true));
        btnProximo.textContent = atual === perguntas.length - 1 ? 'Ver resultado' : 'Próxima';
        btnProximo.hidden = false;
      } else {
        errouNestaPergunta = true;
        elFeedback.textContent = q.erro;
        botao.classList.add('errada');
        botao.disabled = true; // pode tentar as outras até acertar
      }
    }

    function mostrarResultado() {
      elBarra.style.width = '100%';
      quizEl.hidden = true;

      const total = perguntas.length;
      if (acertosDePrimeira === total) {
        elFinalTitulo.textContent = 'oiaa, voce acertou tudoo (ainda bem)';
        elFinalTexto.textContent = `Voce acertou ${acertosDePrimeira} de ${total}, sabe muito`;
      } else if (acertosDePrimeira >= 3) {
        elFinalTitulo.textContent = 'Ta bom';
        elFinalTexto.textContent = `Você acertou ${acertosDePrimeira} de ${total}, sabe praticamente de tudo`;
      } else {
        elFinalTitulo.textContent = 'é isso ai';
        elFinalTexto.textContent = `Você acertou ${acertosDePrimeira} de ${total}, mas o importante é participar!!!!!!!`;
      }

      cardFinal.hidden = false;
      if (typeof confetti === 'function') {
        confetti({ particleCount: 90, spread: 90, origin: { y: 0.6 },
                   colors: ['#A569BD', '#D4E6F1', '#E8DAEF', '#1B4F72'] });
      }
    }

    btnProximo.addEventListener('click', () => {
      atual++;
      if (atual < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    });

    mostrarPergunta();
  }