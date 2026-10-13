// =========================================================
// script.js — lógica interativa do site de aniversário/pedido
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------------------
  // Simulação de conversa estilo Discord (memorias.html)
  // ---------------------------------------------------------
  const chatCorpo = document.getElementById('chat-corpo');

  if (chatCorpo) {
    // Nomes e fotos de perfil exibidos no chat — troque pelos de vocês.
    // Coloque as imagens na pasta "img" (ao lado dos arquivos .html).
    // Se a imagem não carregar, aparece a inicial do nome no lugar.
    const USUARIOS = {
      eu:   { nome: 'Tiana ✨', foto: 'img/ela.jpg' },
      voce: { nome: 'w_ke✦',   foto: 'img/eu.jpg' }
    };

    // Edite as mensagens abaixo com a conversa real de vocês
    const conversa = [
      { de: 'voce', texto: 'oii', hora: 'Hoje às 02:01' },
      { de: 'eu',   texto: 'oii', hora: 'Hoje às 02:01' },
      { narrador: 'Então você passa seu insta...' },
      { de: 'voce', texto: 'vou seguir', hora: 'Hoje às 02:02' },
      { de: 'voce',   texto: 'to com foto de um gatinho', hora: 'Hoje às 02:02' },
      { de: 'eu',   texto: 'ok', hora: 'Hoje às 02:03' },
      { de: 'eu',   texto: 'to com foto minha e meus cabelos nos dias de gloria', hora: 'Hoje às 02:03' },
      { de: 'voce', texto: 'KKKKKKK', hora: 'Hoje às 02:03' },
      { de: 'voce', texto: 'queria ter cachos', hora: 'Hoje às 02:03' },
      { de: 'eu', texto: 'eu tbm 😭', hora: 'Hoje às 02:04' },
      { de: 'voce', texto: 'nossa, li sua msg toda errada kakskaks', hora: 'Hoje às 02:04' },
      { de: 'eu',   texto: 'leu como?', hora: 'Hoje às 02:05' },
      { de: 'voce', texto: 'to com foto minha e meus cachos nos dias de gloria', hora: 'Hoje às 02:05' },
      { de: 'voce', texto: 'sou analfabeto', hora: 'Hoje às 02:05' },
      { narrador: 'E a gente so parou de conversar beeeem tarde' },
      { de: 'voce', texto: 'e sabe, Isa, eu não esperava nada disso, para ser bem sincero kkkk', hora: 'Dia que estou fazendo a surpresa' },
      { de: 'voce', texto: 'Mas eu sou tão grato por tudo isso, você não tem ideia', hora: 'Dia que estou fazendo a surpresa' },
    ];

    let indice = 0;
    let autorAnterior = null;

    function mostrarDigitando(remetente) {
      const indicador = document.createElement('div');
      indicador.className = 'discord-digitando';
      indicador.id = 'indicador-digitando';
      indicador.innerHTML =
        '<span class="pontos"><span></span><span></span><span></span></span>' +
        `<span><strong>${USUARIOS[remetente].nome}</strong> está digitando...</span>`;
      chatCorpo.appendChild(indicador);
      chatCorpo.scrollTop = chatCorpo.scrollHeight;
    }

    function removerDigitando() {
      const indicador = document.getElementById('indicador-digitando');
      if (indicador) indicador.remove();
    }

    function inserirMensagem(msg) {
      const usuario = USUARIOS[msg.de];
      // Mensagens seguidas do mesmo autor são agrupadas, como no Discord
      const ehInicioDeBloco = msg.de !== autorAnterior;

      const linha = document.createElement('div');
      linha.className = `msg${ehInicioDeBloco ? ' msg-inicio' : ''}`;

      const avatar = ehInicioDeBloco
        ? `<div class="msg-avatar msg-avatar-${msg.de}">
             <span class="msg-avatar-inicial">${usuario.nome.charAt(0).toUpperCase()}</span>
             <img src="${usuario.foto}" alt="Foto de ${usuario.nome}" onerror="this.remove()">
           </div>`
        : '<div class="msg-avatar-vazio"></div>';

      const cabecalho = ehInicioDeBloco
        ? `<div class="msg-cabecalho">
             <span class="msg-autor msg-autor-${msg.de}">${usuario.nome}</span>
             <span class="msg-hora">${msg.hora}</span>
           </div>`
        : '';

      const reacao = msg.reacao
        ? `<div class="msg-reacao">${msg.reacao}</div>`
        : '';

      linha.innerHTML = `
        ${avatar}
        <div class="msg-conteudo">
          ${cabecalho}
          <div class="msg-texto">${msg.texto}</div>
          ${reacao}
        </div>
      `;

      chatCorpo.appendChild(linha);
      chatCorpo.scrollTop = chatCorpo.scrollHeight;
      autorAnterior = msg.de;
    }

    // Fala do narrador: aparece no meio da conversa, sem avatar e sem "digitando"
    function inserirNarrador(texto) {
      const linha = document.createElement('div');
      linha.className = 'narrador';
      linha.innerHTML = `<span class="narrador-texto">${texto}</span>`;
      chatCorpo.appendChild(linha);
      chatCorpo.scrollTop = chatCorpo.scrollHeight;
      // Depois do narrador, a próxima mensagem volta a mostrar avatar e nome
      autorAnterior = null;
    }

    function proximaMensagem() {
      if (indice >= conversa.length) return;

      const msg = conversa[indice];

      if (msg.narrador) {
        inserirNarrador(msg.narrador);
        indice++;
        // Pausa um pouco maior para dar tempo de ler
        setTimeout(proximaMensagem, 1400);
        return;
      }

      mostrarDigitando(msg.de);

      // Tempo de digitação proporcional ao tamanho da mensagem
      const tempoDigitando = Math.min(500 + msg.texto.length * 22, 1800);

      setTimeout(() => {
        removerDigitando();
        inserirMensagem(msg);
        indice++;
        setTimeout(proximaMensagem, 450 + Math.random() * 350);
      }, tempoDigitando);
    }

    setTimeout(proximaMensagem, 500);
  }


  const btnSim = document.getElementById('btn-sim');
  const btnNao = document.getElementById('btn-nao');
  const grupoBotoes = document.getElementById('grupo-botoes');
  const cardComemoracao = document.getElementById('card-comemoracao');

  // Só executa a lógica abaixo se estivermos na página do pedido
  if (!btnSim || !btnNao || !grupoBotoes) return;

  const MARGEM = 12; // margem de segurança das bordas da tela, em px

  /**
   * Move o botão "Não" para uma posição aleatória dentro dos limites
   * visíveis da viewport, evitando que ele saia da tela.
   */
  function fugirBotaoNao() {
    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;

    const larguraDisponivel = window.innerWidth - larguraBotao - MARGEM * 2;
    const alturaDisponivel = window.innerHeight - alturaBotao - MARGEM * 2;

    const novoX = MARGEM + Math.random() * Math.max(larguraDisponivel, 0);
    const novoY = MARGEM + Math.random() * Math.max(alturaDisponivel, 0);

    btnNao.style.position = 'fixed';
    btnNao.style.left = `${novoX}px`;
    btnNao.style.top = `${novoY}px`;
  }

  // Computador: foge ao passar o mouse por cima
  btnNao.addEventListener('mouseover', fugirBotaoNao);

  // Celular: foge ao tocar (touchstart) ou ao primeiro contato do ponteiro
  btnNao.addEventListener('touchstart', (evento) => {
    evento.preventDefault();
    fugirBotaoNao();
  }, { passive: false });

  btnNao.addEventListener('pointerdown', (evento) => {
    // Evita disparo duplo em dispositivos que também emitem touchstart
    if (evento.pointerType === 'touch') return;
    fugirBotaoNao();
  });

  // Reposiciona o botão "Não" se a tela for redimensionada/rotacionada,
  // garantindo que ele continue dentro dos limites visíveis.
  window.addEventListener('resize', () => {
    if (btnNao.style.position === 'fixed') {
      fugirBotaoNao();
    }
  });

  /**
   * Ação do botão "SIM": dispara confete e mostra o card de comemoração.
   */
  btnSim.addEventListener('click', () => {
    dispararConfete();
    grupoBotoes.style.display = 'none';
    cardComemoracao.classList.add('mostrar');
  });

  function dispararConfete() {
    if (typeof confetti !== 'function') return;

    const duracao = 3 * 1000;
    const fimEm = Date.now() + duracao;

    const cores = ['#A569BD', '#D4E6F1', '#E8DAEF', '#1B4F72'];

    (function disparo() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: cores
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: cores
      });

      if (Date.now() < fimEm) {
        requestAnimationFrame(disparo);
      }
    })();

    // Uma explosão central logo de início, para um impacto imediato
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 },
      colors: cores
    });
  }
});