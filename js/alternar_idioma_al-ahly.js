
  const switchIdioma = document.querySelector(".switch input");

  const traducoes = {
    pt: {
      titulo: "Al Ahly",
      conhecaTitulo: "Conheça o Al Ahly",
      conhecaTexto: "Conhecido como gigante egípcio, Al Ahly é o maior campeão africano, com dezenas de títulos continentais. O time é sediado no Cairo, Egito, e tem como rivais históricos o Zamalek e outros clubes do Norte da África. Um dos seus grandes ídolos é o egípcio Mohamed Aboutrika. Atualmente, o time é comandado pelo técnico suíço Marcel Koller, e entre os principais jogadores estão o goleiro Mohamed El Shenawy, o zagueiro Rami Rabia e os atacantes Percy Tau e Mahmoud Kahraba.",
      classificacaoTitulo: "Como se classificou?",
      classificacaoTexto: "O Al Ahly se classificou para o Mundial de Clubes da FIFA de 2025 ao conquistar a Liga dos Campeões da CAF de 2020/21, 2022/23 e 2023/24. Devido ao novo formato da competição, com 32 clubes, o Egito foi um dos representantes da África. O Al Ahly também chegou à final da edição 2021/22, sendo vice-campeão. O time foi o clube africano com melhor desempenho na Liga dos Campeões nas últimas temporadas, garantindo sua vaga no Mundial de Clubes da FIFA 2025 entre os quatro melhores do continente.",
      historiaTitulo: "História do time",
      historiaTexto1: "O Al Ahly foi fundado em 24 de abril de 1907. A ideia de criar um clube para reunir jovens estudantes egípcios foi apoiada por Omar Lotfy Bey. Desde sua fundação, o clube se consolidou como potência esportiva na África e no mundo árabe. Conhecido como o 'Clube do Século' pela CAF, é o maior vencedor do Egito e um dos mais populares do Oriente Médio.",
      historiaTexto2: "O Al Ahly viveu inúmeras épocas de glória, sempre mantendo destaque no cenário internacional. Hitos: 43 títulos do Campeonato Egípcio, 38 Copas do Egito e 12 títulos da Liga dos Campeões da CAF. O time também detém o recorde em títulos internacionais na África.",
      craquesTitulo: "Craques do time",
      caracteristicasTitulo: "Características do Al Ahly",
      caracteristicas: [
        "Maior vencedor da Liga dos Campeões da CAF com 12 títulos.",
        "Mais de 40 conquistas do Campeonato Egípcio.",
        "Reconhecido pela CAF como 'Clube do Século' na África.",
        "Torcida extremamente apaixonada e ativa em todo o mundo árabe.",
        "Grande rivalidade com o Zamalek, em um dos maiores clássicos africanos."
      ]
    },
    en: {
      titulo: "Al Ahly",
      conhecaTitulo: "Meet Al Ahly",
      conhecaTexto: "Known as the Egyptian giant, Al Ahly is the most successful African champion, with dozens of continental titles. The team is based in Cairo, Egypt, and has historical rivals such as Zamalek and other North African clubs. One of its greatest idols is Egyptian star Mohamed Aboutrika. Currently, the team is coached by Swiss manager Marcel Koller, and key players include goalkeeper Mohamed El Shenawy, defender Rami Rabia, and forwards Percy Tau and Mahmoud Kahraba.",
      classificacaoTitulo: "How Did They Qualify?",
      classificacaoTexto: "Al Ahly qualified for the 2025 FIFA Club World Cup by winning the CAF Champions League in 2020/21, 2022/23, and 2023/24. With the new format featuring 32 clubs, Egypt secured one of Africa's spots. Al Ahly also reached the final in the 2021/22 edition, finishing as runner-up. The team was the best-performing African club in the Champions League in recent seasons, earning their place among the top four from the continent.",
      historiaTitulo: "Team History",
      historiaTexto1: "Al Ahly was founded on April 24, 1907. The idea of creating a club to bring together young Egyptian students was supported by Omar Lotfy Bey. Since its foundation, the club has established itself as a sporting powerhouse in Africa and the Arab world. Known as the 'Club of the Century' by CAF, it is Egypt’s most decorated club and one of the most popular in the Middle East.",
      historiaTexto2: "Al Ahly has experienced many glorious eras, always standing out internationally. Highlights include: 43 Egyptian Premier League titles, 38 Egypt Cups, and 12 CAF Champions League trophies. The club also holds the record for most international titles in Africa.",
      craquesTitulo: "Team Stars",
      caracteristicasTitulo: "Al Ahly Characteristics",
      caracteristicas: [
        "Most CAF Champions League titles with 12 trophies.",
        "Over 40 Egyptian Premier League championships.",
        "Recognized by CAF as 'Club of the Century' in Africa.",
        "Extremely passionate fan base across the Arab world.",
        "Fierce rivalry with Zamalek in one of Africa's biggest derbies."
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

    // Recriar lista
    elementos.caracteristicasLista.innerHTML = "";
    t.caracteristicas.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      elementos.caracteristicasLista.appendChild(li);
    });
  });

