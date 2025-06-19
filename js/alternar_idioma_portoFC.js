document.addEventListener("DOMContentLoaded", () => {
  const switchButton = document.getElementById("languageSwitch");

  const textos = {
    pt: {
      titulo: "Porto FC",
      conhecaTitulo: "Conheça o FC Porto",
      conhecaTexto:
        "Fundado em 1893, o Futebol Clube do Porto é um dos clubes mais bem-sucedidos de Portugal. Com sede na cidade do Porto, é conhecido como “Dragões”. O clube possui títulos internacionais, incluindo duas Ligas dos Campeões da UEFA. É famoso por sua formação tática, disciplina e grandes nomes que passaram pelo clube. Jogadores como Pepe, Diogo Costa e Galeno são os destaques atuais.",
      classificacaoTitulo: "Como se classificou?",
      classificacaoTexto:
        "O FC Porto garantiu sua vaga para o Mundial de Clubes 2025 graças ao seu desempenho nas edições recentes da Liga dos Campeões da UEFA. Com campanhas consistentes e presença constante nas fases eliminatórias, acumulou pontos suficientes no ranking de clubes da UEFA, sendo um dos representantes europeus na competição.",
      historiaTitulo: "História do time",
      historiaTexto1:
        "O FC Porto foi fundado em 1893 e se consolidou como uma das potências do futebol europeu. Conquistou a UEFA Champions League em 1987 e 2004, além de diversas ligas portuguesas e copas nacionais. É conhecido por sua mentalidade competitiva e por revelar talentos que brilham em grandes ligas.",
      historiaTexto2:
        "Sob comando de treinadores lendários como José Mourinho, o clube construiu sua fama internacional. Seu estádio, o Estádio do Dragão, é um símbolo da modernidade e da paixão dos torcedores.",
      craquesTitulo: "Craques do time",
      jogador1: {
        nome: "Pepe",
        descricao:
          "Zagueiro veterano e líder do elenco. Combina experiência, raça e força defensiva."
      },
      jogador2: {
        nome: "Diogo Costa",
        descricao:
          "Um dos goleiros mais promissores da Europa, com reflexos rápidos e boa saída de bola."
      },
      jogador3: {
        nome: "Galeno",
        descricao:
          "Atacante veloz e habilidoso, peça fundamental no setor ofensivo do FC Porto."
      },
      caracteristicasTitulo: "Características do FC Porto",
      caracteristicas: [
        "Bicampeão da UEFA Champions League (1987, 2004).",
        "Clube com mais títulos da Taça de Portugal.",
        "Reconhecido por sua formação de jovens talentos.",
        "Estádio do Dragão é referência em estrutura e modernidade.",
        "Rivalidade histórica com o Benfica no 'Clássico dos Clássicos'."
      ]
    },
    en: {
      titulo: "Porto FC",
      conhecaTitulo: "Meet FC Porto",
      conhecaTexto:
        "Founded in 1893, Futebol Clube do Porto is one of the most successful clubs in Portugal. Based in the city of Porto, it is known as the 'Dragons'. The club has international titles, including two UEFA Champions League trophies. It is famous for its tactical formation, discipline, and the great players who have passed through its ranks. Players like Pepe, Diogo Costa, and Galeno are current standouts.",
      classificacaoTitulo: "How did they qualify?",
      classificacaoTexto:
        "FC Porto secured its spot in the 2025 Club World Cup thanks to its recent performances in the UEFA Champions League. With consistent campaigns and regular appearances in the knockout stages, it earned enough points in the UEFA club ranking to become one of Europe's representatives.",
      historiaTitulo: "Team History",
      historiaTexto1:
        "FC Porto was founded in 1893 and established itself as a powerhouse of European football. It won the UEFA Champions League in 1987 and 2004, in addition to several Portuguese league and cup titles. It is known for its competitive mindset and for developing talents who shine in top leagues.",
      historiaTexto2:
        "Under legendary coaches like José Mourinho, the club built its international fame. Its stadium, Estádio do Dragão, is a symbol of modernity and fan passion.",
      craquesTitulo: "Team Stars",
      jogador1: {
        nome: "Pepe",
        descricao:
          "Veteran defender and team leader. Combines experience, grit, and defensive strength."
      },
      jogador2: {
        nome: "Diogo Costa",
        descricao:
          "One of Europe's most promising goalkeepers, with quick reflexes and great ball distribution."
      },
      jogador3: {
        nome: "Galeno",
        descricao:
          "Fast and skillful forward, a key player in FC Porto's offensive line."
      },
      caracteristicasTitulo: "FC Porto Features",
      caracteristicas: [
        "Two-time UEFA Champions League winners (1987, 2004).",
        "Club with the most Portuguese Cup titles.",
        "Renowned for developing young talents.",
        "Estádio do Dragão is a benchmark in structure and modernity.",
        "Historic rivalry with Benfica in the 'Clássico dos Clássicos'."
      ]
    }
  };

  function traduzirPara(lingua) {
    const conteudo = textos[lingua];

    document.title = conteudo.titulo;
    document.querySelector(".secao-conheca h2").textContent = conteudo.conhecaTitulo;
    document.querySelector(".secao-conheca p").textContent = conteudo.conhecaTexto;
    document.querySelector(".secao-classificacao h2").textContent = conteudo.classificacaoTitulo;
    document.querySelector(".secao-classificacao p").textContent = conteudo.classificacaoTexto;
    document.querySelector(".secao-historia h2").textContent = conteudo.historiaTitulo;
    document.querySelectorAll(".secao-historia p")[0].textContent = conteudo.historiaTexto1;
    document.querySelectorAll(".secao-historia p")[1].textContent = conteudo.historiaTexto2;
    document.querySelector(".secao-craques h2").textContent = conteudo.craquesTitulo;
    document.querySelectorAll(".carousel-caption h5")[0].textContent = conteudo.jogador1.nome;
    document.querySelectorAll(".carousel-caption p")[0].textContent = conteudo.jogador1.descricao;
    document.querySelectorAll(".carousel-caption h5")[1].textContent = conteudo.jogador2.nome;
    document.querySelectorAll(".carousel-caption p")[1].textContent = conteudo.jogador2.descricao;
    document.querySelectorAll(".carousel-caption h5")[2].textContent = conteudo.jogador3.nome;
    document.querySelectorAll(".carousel-caption p")[2].textContent = conteudo.jogador3.descricao;
    document.querySelector(".caracteristicas-al-ahly h2").textContent = conteudo.caracteristicasTitulo;

    const lista = document.querySelector(".caracteristicas-al-ahly ul");
    lista.innerHTML = "";
    conteudo.caracteristicas.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });
  }

  switchButton.addEventListener("change", () => {
    if (switchButton.checked) {
      traduzirPara("en");
    } else {
      traduzirPara("pt");
    }
  });
});
