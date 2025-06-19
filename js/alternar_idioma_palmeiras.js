const switchIdioma = document.querySelector(".switch input");

const traducoes = {
  pt: {
    titulo: "Palmeiras",
    conhecaTitulo: "Conheça o Palmeiras",
    conhecaTexto:
      "O Palmeiras, conhecido como Verdão, é um dos clubes mais tradicionais e vitoriosos do Brasil. Fundado em 1914, o time tem sua sede na cidade de São Paulo. Entre seus maiores rivais está o Corinthians. Com uma gestão profissional e uma base sólida, o Palmeiras tem se destacado nacional e internacionalmente. O técnico Abel Ferreira comanda um elenco forte que conta com nomes como Endrick, Raphael Veiga, Gustavo Gómez e Weverton.",
    classificacaoTitulo: "Como se classificou?",
    classificacaoTexto:
      "O Palmeiras se classificou para o Mundial de Clubes da FIFA de 2025 ao conquistar a Copa Libertadores da América de 2020 e 2021, além de atingir boas campanhas em outras edições. Graças ao novo formato com 32 clubes, o Brasil teve representantes adicionais com base em desempenho. O Palmeiras acumulou pontos importantes ao chegar frequentemente às semifinais e finais da Libertadores.",
    historiaTitulo: "História do time",
    historiaTexto1:
      "O Palmeiras foi fundado em 26 de agosto de 1914 por imigrantes italianos. Inicialmente chamado de Palestra Italia, o clube passou por diversas fases e se consolidou como uma potência do futebol brasileiro. Com uma torcida apaixonada e uma vasta coleção de títulos, o clube é um dos maiores campeões nacionais.",
    historiaTexto2:
      "O Palmeiras acumula conquistas importantes: mais de 10 títulos do Campeonato Brasileiro, 4 Copas do Brasil, além de títulos continentais. O clube é conhecido por sua estrutura moderna, como a arena Allianz Parque, e por revelar grandes talentos da base.",
    craquesTitulo: "Craques do time",
    caracteristicasTitulo: "Características do Palmeiras",
    caracteristicas: [
      "Mais de 10 títulos do Campeonato Brasileiro.",
      "Bi-campeão da Libertadores nos anos 2020 e 2021.",
      "Estrutura moderna com centro de treinamento e estádio próprio.",
      "Elenco equilibrado com base forte e contratações pontuais.",
      "Torcida apaixonada com presença marcante em jogos no Allianz Parque."
    ]
  },
  en: {
    titulo: "Palmeiras",
    conhecaTitulo: "Meet Palmeiras",
    conhecaTexto:
      "Palmeiras, known as Verdão, is one of Brazil’s most traditional and successful football clubs. Founded in 1914, the team is based in São Paulo. Among its biggest rivals is Corinthians. With professional management and a strong foundation, Palmeiras has stood out both nationally and internationally. Coach Abel Ferreira leads a solid squad with key players such as Endrick, Raphael Veiga, Gustavo Gómez, and Weverton.",
    classificacaoTitulo: "How Did They Qualify?",
    classificacaoTexto:
      "Palmeiras qualified for the 2025 FIFA Club World Cup by winning the Copa Libertadores in 2020 and 2021, in addition to strong performances in other editions. Thanks to the new format with 32 clubs, Brazil earned additional spots based on performance. Palmeiras accumulated crucial points by frequently reaching the semifinals and finals of the Libertadores.",
    historiaTitulo: "Team History",
    historiaTexto1:
      "Palmeiras was founded on August 26, 1914 by Italian immigrants. Initially named Palestra Italia, the club went through various phases and became a powerhouse in Brazilian football. With a passionate fan base and a vast collection of trophies, it is one of the country's most successful clubs.",
    historiaTexto2:
      "Palmeiras has achieved important honors: over 10 Brazilian Championship titles, 4 Copa do Brasil trophies, and several continental titles. The club is known for its modern structure, including the Allianz Parque stadium, and for developing talented players from its youth academy.",
    craquesTitulo: "Team Stars",
    caracteristicasTitulo: "Palmeiras Characteristics",
    caracteristicas: [
      "Over 10 Brazilian Championship titles.",
      "Two-time Copa Libertadores champions in 2020 and 2021.",
      "Modern facilities with its own training center and stadium.",
      "Balanced squad with strong youth and targeted signings.",
      "Passionate fanbase with a strong presence at Allianz Parque games."
    ]
  }
};

const elementos = {
  conhecaTitulo: document.querySelector(".secao-conheca h2"),
  conhecaTexto: document.querySelector(".secao-conheca p"),
  classificacaoTitulo: document.querySelector(".secao-classificacao h2"),
  classificacaoTexto: document.querySelector(".secao-classificacao p"),
  historiaTitulo: document.querySelector(".secao-historia h2"),
  historiaTexto1: document.querySelector(".secao-historia .text-box p"),
  historiaTexto2: document.querySelectorAll(".secao-historia .text-box p")[1],
  craquesTitulo: document.querySelector(".secao-craques h2"),
  caracteristicasTitulo: document.querySelector(".caracteristicas-al-ahly h2"),
  caracteristicasLista: document.querySelector(".caracteristicas-al-ahly ul")
};

switchIdioma.addEventListener("change", () => {
  const idioma = switchIdioma.checked ? "en" : "pt";
  const t = traducoes[idioma];

  document.title = t.titulo;
  elementos.conhecaTitulo.textContent = t.conhecaTitulo;
  elementos.conhecaTexto.textContent = t.conhecaTexto;
  elementos.classificacaoTitulo.textContent = t.classificacaoTitulo;
  elementos.classificacaoTexto.textContent = t.classificacaoTexto;
  elementos.historiaTitulo.textContent = t.historiaTitulo;
  elementos.historiaTexto1.textContent = t.historiaTexto1;
  elementos.historiaTexto2.textContent = t.historiaTexto2;
  elementos.craquesTitulo.textContent = t.craquesTitulo;
  elementos.caracteristicasTitulo.textContent = t.caracteristicasTitulo;

  elementos.caracteristicasLista.innerHTML = "";
  t.caracteristicas.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    elementos.caracteristicasLista.appendChild(li);
  });
});
