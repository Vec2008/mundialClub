
  const switchIdioma = document.querySelector(".switch input");

  const traducoes = {
    pt: {
      titulo: "Inter Miami",
      conhecaTitulo: "Conheça o Inter Miami",
      conhecaTexto: "Fundado em 2018 e sediado em Fort Lauderdale, o Inter Miami CF é um clube da Major League Soccer conhecido mundialmente por ter Lionel Messi como seu principal astro. O clube tem como co-proprietário o ex-jogador inglês David Beckham e se destaca por sua rápida ascensão. Entre seus jogadores principais estão Messi, Luis Suárez, Sergio Busquets e Jordi Alba — grandes nomes que já brilharam no futebol europeu.",
      classificacaoTitulo: "Como se classificou?",
      classificacaoTexto: "O Inter Miami garantiu sua vaga no Mundial de Clubes da FIFA 2025 ao vencer a Leagues Cup 2023, seu primeiro grande título internacional. Liderado por Messi, o time norte-americano venceu clubes mexicanos e outros dos EUA, ganhando projeção global. Como representante da CONCACAF, o clube se classificou entre os melhores da região no novo formato de 32 clubes.",
      historiaTitulo: "História do time",
      historiaTexto1: "O Inter Miami CF foi fundado em janeiro de 2018 com o objetivo de levar o futebol internacional ao sul da Flórida. David Beckham, ídolo inglês, foi peça-chave na fundação e expansão do clube. Desde então, o clube investiu em infraestrutura, marketing e formação de elenco competitivo.",
      historiaTexto2: "A chegada de Messi em 2023 marcou um ponto de virada para o clube, que passou a figurar entre os mais assistidos e seguidos do mundo. O clube ainda é jovem, mas já constrói sua história com conquistas e grandes estrelas.",
      craquesTitulo: "Craques do time",
      caracteristicasTitulo: "Características do Inter Miami",
      caracteristicas: [
        "Clube norte-americano fundado por David Beckham em 2018.",
        "Conquistou a Leagues Cup 2023 com Lionel Messi em campo.",
        "Conta com jogadores históricos como Messi, Suárez, Alba e Busquets.",
        "Base de fãs crescente nos Estados Unidos e América Latina.",
        "Estádio DRV PNK Stadium, moderno e localizado na Flórida."
      ]
    },
    en: {
      titulo: "Inter Miami",
      conhecaTitulo: "Meet Inter Miami",
      conhecaTexto: "Founded in 2018 and based in Fort Lauderdale, Inter Miami CF is a Major League Soccer club known worldwide for having Lionel Messi as its main star. Co-owned by former English player David Beckham, the club stands out for its rapid rise. Key players include Messi, Luis Suárez, Sergio Busquets, and Jordi Alba — all legends from European football.",
      classificacaoTitulo: "How Did They Qualify?",
      classificacaoTexto: "Inter Miami secured its spot in the 2025 FIFA Club World Cup by winning the 2023 Leagues Cup, its first major international title. Led by Messi, the American team defeated clubs from Mexico and the US, gaining global attention. As a CONCACAF representative, the club qualified among the region’s best under the new 32-team format.",
      historiaTitulo: "Team History",
      historiaTexto1: "Inter Miami CF was founded in January 2018 with the aim of bringing international football to South Florida. English icon David Beckham was a key figure in the club's foundation and expansion. Since then, the club has invested in infrastructure, marketing, and building a competitive squad.",
      historiaTexto2: "Messi’s arrival in 2023 marked a turning point, making the club one of the most watched and followed in the world. Although still young, the team is building its legacy through achievements and global stars.",
      craquesTitulo: "Team Stars",
      caracteristicasTitulo: "Inter Miami Characteristics",
      caracteristicas: [
        "American club founded by David Beckham in 2018.",
        "Won the 2023 Leagues Cup with Lionel Messi on the pitch.",
        "Features legendary players like Messi, Suárez, Alba, and Busquets.",
        "Growing fan base in the US and Latin America.",
        "DRV PNK Stadium, modern and located in Florida."
      ]
    }
  };

  const elementos = {
    conhecaTitulo: document.querySelector(".secao-conheca h2"),
    conhecaTexto: document.querySelector(".secao-conheca p"),
    classificacaoTitulo: document.querySelector(".secao-classificacao h2"),
    classificacaoTexto: document.querySelector(".secao-classificacao p"),
    historiaTitulo: document.querySelector(".secao-historia h2"),
    historiaTexto1: document.querySelectorAll(".secao-historia .text-box p")[0],
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

