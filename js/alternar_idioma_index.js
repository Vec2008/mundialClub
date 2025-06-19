const switchIdioma = document.querySelector(".switch input");

const traducoes = {
  pt: {
    titulo: "O que é o Mundial de Clubes?",
    descricao:
      "O Mundial de Clubes da FIFA (ou apenas “Mundial de Clubes”) é um torneio internacional de futebol que reúne os clubes campeões de cada continente, além de um representante do país-sede. É organizado pela FIFA (Federação Internacional de Futebol) e serve para determinar o melhor clube do mundo em determinado ano.",
    participantes: "Quem são os participantes?",
    cards: [
      "Campeão da Europa (Liga dos Campeões da UEFA)",
      "Campeão da América do Sul (Copa Libertadores da CONMEBOL)",
      "Campeão da Ásia (Liga dos Campeões da AFC)",
      "Campeão da África (Liga dos Campeões da CAF)",
      "Campeão da América do Norte, Central e Caribe (Liga dos Campeões da CONCACAF)",
      "Campeão da Oceania (Liga dos Campeões da OFC)"
    ],
    importancia: "Qual a importância do Mundial de Clubes?",
    boxes: [
      "Título máximo para clubes",
      "É considerado o maior título que um clube de futebol pode conquistar, pois reúne os campeões de todos os continentes. Vencer o Mundial coloca o clube no topo do futebol mundial.",
      "Valorização da marca e do elenco",
      ["Maior visibilidade global", "Aumento do valor de mercado dos jogadores", "Interesse de patrocinadores e investidores internacionais"],
      "Prestígio histórico",
      "Ganhar o Mundial dá ao clube e aos seus torcedores um status histórico, entrando para um grupo seleto de campeões mundiais, ao lado de gigantes como Real Madrid, Bayern de Munique, Corinthians, Milan, Barcelona, entre outros.",
      "Retorno financeiro",
      ["Premiações em dinheiro", "Aumento nas vendas de camisas", "Crescimento da base de torcedores internacionais"],
      "Intercâmbio entre continentes",
      "Promove o encontro de diferentes estilos de jogo e culturas futebolísticas. É a única competição oficial onde um time da América do Sul pode enfrentar, por exemplo, um europeu valendo um título mundial."
    ],
    grupoA: "Conheça os times do Grupo A",
    footer: "Todos os direitos reservados",
    marca: "TECHRÔNIO"
  },
  en: {
    titulo: "What is the Club World Cup?",
    descricao:
      "The FIFA Club World Cup (or just “Club World Cup”) is an international football tournament that brings together the champion clubs from each continent, plus a representative from the host country. It is organized by FIFA (Fédération Internationale de Football Association) and aims to determine the best club in the world each year.",
    participantes: "Who are the participants?",
    cards: [
      "European Champion (UEFA Champions League)",
      "South American Champion (CONMEBOL Libertadores Cup)",
      "Asian Champion (AFC Champions League)",
      "African Champion (CAF Champions League)",
      "North, Central American and Caribbean Champion (CONCACAF Champions League)",
      "Oceania Champion (OFC Champions League)"
    ],
    importancia: "What is the importance of the Club World Cup?",
    boxes: [
      "Top title for clubs",
      "It is considered the highest title a football club can win, as it brings together the champions of all continents. Winning the Club World Cup puts the club at the top of world football.",
      "Brand and squad value boost",
      ["Greater global visibility", "Increased player market value", "Attraction of international sponsors and investors"],
      "Historical prestige",
      "Winning the Club World Cup gives the club and its fans historical status, joining a select group of world champions like Real Madrid, Bayern Munich, Corinthians, Milan, Barcelona, among others.",
      "Financial return",
      ["Cash prizes", "Increase in shirt sales", "Growth of international fanbase"],
      "Continental exchange",
      "Promotes the meeting of different playing styles and football cultures. It is the only official competition where a South American team can face, for example, a European team for a world title."
    ],
    grupoA: "Meet the Group A teams",
    footer: "All rights reserved",
    marca: "TECHRÔNIO"
  }
};

switchIdioma.addEventListener("change", () => {
  const idioma = switchIdioma.checked ? "en" : "pt";
  const t = traducoes[idioma];

  // Título principal
  document.querySelectorAll("h2")[0].textContent = t.titulo;

  // Descrição principal
  document.querySelector(".intro p").textContent = t.descricao;

  // Título participantes
  document.querySelectorAll("h2")[1].textContent = t.participantes;

  // Texto dos cards participantes
  const cardTexts = document.querySelectorAll(".card-text");
  cardTexts.forEach((el, i) => {
    if (t.cards[i]) el.textContent = t.cards[i];
  });

  // Título importância
  document.querySelectorAll("h2")[2].textContent = t.importancia;

  // Caixas de importância
  const boxes = document.querySelectorAll(".section-middle .box");
  if (boxes.length >= 5) {
    boxes[0].querySelector("h3").textContent = `1. ${t.boxes[0]}`;
    boxes[0].querySelector("p").textContent = t.boxes[1];

    boxes[1].querySelector("h3").textContent = `2. ${t.boxes[2]}`;
    const ul1 = boxes[1].querySelector("ul");
    if (ul1) {
      ul1.innerHTML = "";
      t.boxes[3].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul1.appendChild(li);
      });
    }

    boxes[2].querySelector("h3").textContent = `3. ${t.boxes[4]}`;
    boxes[2].querySelector("p").textContent = t.boxes[5];

    boxes[3].querySelector("h3").textContent = `4. ${t.boxes[6]}`;
    const ul2 = boxes[3].querySelector("ul");
    if (ul2) {
      ul2.innerHTML = "";
      t.boxes[7].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul2.appendChild(li);
      });
    }

    boxes[4].querySelector("h3").textContent = `5. ${t.boxes[8]}`;
    boxes[4].querySelector("p").textContent = t.boxes[9];
  }

  // Título Grupo A
  document.querySelector(".section-bottom h2").textContent = t.grupoA;

  // Rodapé
  document.querySelector(".rodape__marca").textContent = t.marca;
  document.querySelector(".rodape__direitos-autorais").textContent = `Copyright © 2025 ${t.marca}. ${t.footer}`;
});
