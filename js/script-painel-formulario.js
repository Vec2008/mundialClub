//arrays globais
let sugestoes = [];
let comentarios = [];

//aq carrega a sugestao submitada e salvada no local storage
//e dps atualiza no painel
function loadSubmitSug() {
     //aq pega os dados do local storage ou null se nn tiver nd
    const sugSalva = localStorage.getItem('sugestoes');
    //if curto q o professor ensinou
    //atualiza o array sugestao convertendo de json () pra array
    //se nn tiver nd começa com array vazio
    sugestoes = sugSalva ? JSON.parse(sugSalva) : [];
    
    // Só executa attSubmitSug se estivermos na página do painel
    if (document.getElementById('out-infoSug')) {
        attSubmitSug();
    }
}
//função de salvar oq foi submitado
//eu acho q copiei isso do professor, nn lembro
// to há mt tempo codando isso aq
function saveSubmitSug() {
    //aq salva nosso array no localStorage
    localStorage.setItem('sugestoes', JSON.stringify(sugestoes));
}

function attSubmitSug() {
    //declara as info principal da tela do painel
    const infoSugElement = document.getElementById('out-infoSug');
    const msgVaziaElement = document.getElementById('out-msgVazia');

    //se nn tivermos no painel, acaba aq essa função, vaza
    if (!infoSugElement || !msgVaziaElement) return;
    //limpada basica pra nn ter um monte de texto atoa
    infoSugElement.innerHTML = '';
    
    if (sugestoes.length === 0) {
        //se nn tiver nd no array, mostra a msg q nn tem nd no painel
        msgVaziaElement.classList.remove('d-none');
    } else {
        //eu copiei isso aq embaixo do professor
        //a maior parte das coisas foi cópia do q o professor passou e interpretação minha
        //mas teve coisa q eu tive q fzr tb, infelizmente kk
        msgVaziaElement.classList.add('d-none');
        sugestoes.forEach(sugestao => {
            //formatação de toda parte da sugestao
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `
                <p><strong>Nome:</strong> ${sugestao.nomeP}</p>
                <p><strong>País:</strong> ${sugestao.pais}</p>
                <p><strong>Email:</strong> ${sugestao.email}</p>
                <p><strong>Sugestão:</strong> ${sugestao.sugestaoTexto}</p>
                <button class="btn btn-danger btn-sm remover-sugestao-btn" data-id="${sugestao.id}">Remover</button>
            `;
            //aplicação da formatação
            infoSugElement.appendChild(listItem);
        });
        //aq procura todos os botoes de remover pra adicionar a função dele de remover
        document.querySelectorAll('.remover-sugestao-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const sugestaoId = parseInt(this.getAttribute('data-id'));
                if (confirm('Tem certeza que deseja remover esta sugestão?')) {
                    remSugestao(sugestaoId);
                }
            });
        });
    }
}

//aq carrega o comentario submitado
function loadSubmitCom() {
    //aq eu fiz uma variavel q pega o nosso array todo do comentario
    const comSalva = localStorage.getItem('comentarios');
    //aq eh aquela estrutura de if q o professor ensinou
    //se tiver algo no array, ele converte
    //se nn, ele seta o array como nada
    comentarios = comSalva ? JSON.parse(comSalva) : [];
    
    // Só executa attSubmitCom se estivermos na página do painel
    if (document.getElementById('out-infoCom')) {
        attSubmitCom();
    }
}

function saveSubmitCom() {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

//função para atualizar lá no painel
function attSubmitCom() {
    //declara as informações principais da tela do painel
    const infoComElement = document.getElementById('out-infoCom');
    const msgVaziaComElement = document.getElementById('out-msgVaziaCom');
    //se a gnt nn tiver nessa tela (o painel), ele vai tirar o fluxo do codigo daqui
    //dá ruim se nn tiver isso
    if (!infoComElement || !msgVaziaComElement) return;

    //aq a gnt limpa a lista de informações pra nn ter sobreposição de mensagens
    //o array ja vai ficar com todas as informações ent nn precisa deicar o html com coisa ja escrita
    infoComElement.innerHTML = '';
    
    //se nnn tiver comentário no array ou seja nd no array de comentarios
    if (comentarios.length === 0) {
        //remova o d-none no html q vai fzr aparecer no painel q nn tem mensagens
        msgVaziaComElement.classList.remove('d-none');
    } else {
        //se nn, apaga isso ae pra ngm ver a msg de q nn tem nd
        msgVaziaComElement.classList.add('d-none');
        //isso aq eu copiei do professor no pdf dele
        //na hr q eu taava fzd eu sabia mais ou menos
        comentarios.forEach(comentario => {
            //aq vai criando uma formatação junto do texto pra botar dps no nosso
            //out de informação do painel
            const listItemCom = document.createElement('li');
            listItemCom.classList.add('list-group-item');
            //toda formatação ae embaixo
            listItemCom.innerHTML = `
                <p><strong>Nome:</strong> ${comentario.nomePC}</p>
                <p><strong>País:</strong> ${comentario.paisC}</p>
                <p><strong>Email:</strong> ${comentario.emailC}</p>
                <p><strong>Comentário:</strong> ${comentario.comentarioTexto}</p>
                <button class="btn btn-danger btn-sm remover-comentario-btn" data-id="${comentario.idC}">Remover</button>
            `;
            //formatacao aplicada ao nosso outinfoCom do painel
            infoComElement.appendChild(listItemCom);
        });
        //aq o queryselectorall serve pra  pegar todos os botoes dessa tela e adicionar essa funcao de remover
        //tem q ser todos os botoes pq pode ter varios ent nn faz sentido só um funcionar
        document.querySelectorAll('.remover-comentario-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const comentarioId = parseInt(this.getAttribute('data-id'));
                if (confirm('Tem certeza que deseja remover este comentário?')) {
                    remComentario(comentarioId);
                }
            });
        });
    }
}

//funcao pra add sugestao no localstorage e no array
function addSugestao(nomeP, pais, email, sugestaoTexto) {
    //faz um id q a gnt vai ter q usar pra poder apagar eles mais facil dps
    const id = Date.now();
    //faz uma variavel array pra dar push no nosso array original
    const novaSugestao = {id, nomeP, pais, email, sugestaoTexto};
    //botamos essas informações no nosso array
    sugestoes.push(novaSugestao);
    //salva oq ta no array
    saveSubmitSug();
    
    // Atualiza o painel se estivermos nele
    if (document.getElementById('out-infoSug')) {
        attSubmitSug();
    }
    return true;
}

function addComentario(nomePC, paisC, emailC, comentarioTexto) {
    const idC = Date.now();
    const novoComentario = {idC, nomePC, paisC, emailC, comentarioTexto};
    comentarios.push(novoComentario);
    saveSubmitCom();
    
    // Atualiza o painel se estivermos nele
    if (document.getElementById('out-infoCom')) {
        attSubmitCom();
    }
    return true;
}

// ========== FUNÇÕES DE REMOÇÃO ========== //

function remSugestao(id) {
    sugestoes = sugestoes.filter(sugestao => sugestao.id !== id);
    saveSubmitSug();
    if (document.getElementById('out-infoSug')) {
        attSubmitSug();
    }
}

//aq eh pra apagar o comentario ao clicar no botão
function remComentario(idC) {
    //cria um array filtrado e remove o que tem id igual ao id usado no parametro
    //vi isso no youtube pesquisando como remover itens de array
    comentarios = comentarios.filter(comentario => comentario.idC !== idC);
    //funcao de salvar
    saveSubmitCom();
    //se tiver na pagina de painel, atualize
    if (document.getElementById('out-infoCom')) {
        attSubmitCom();
    }
}

//aqui vai limpar todo o localStorage pra caso tenha muito comentario ou sugestao
function lmpAll() {
    if(confirm("Tem certeza que deseja remover TODAS as sugestões e comentários?")) {
        localStorage.clear();
        sugestoes = [];
        comentarios = [];
        if (document.getElementById('out-infoSug')) {
            attSubmitSug();
            attSubmitCom();
        }
    }
}

function configurarFormularioSugestao() {
    //variavel se ta no forms ou nn
    const form = document.querySelector('.conteudo_form_sugestao form');
    //se nn tiver no forms, para de rodar o codigo
    //se tiver, pode rodar o codigo
    if (!form) return;
    //isso aq eh o evento de submit
    form.addEventListener('submit', function(e) {
        //preventdefault para cancelar a recarga da page do submit que atrapalha
        e.preventDefault();
        //trim ta servindo pra nn ter espaço
        //declaração de tudo pra guardar certinho
        const nome = document.getElementById('nome1').value.trim();
        const pais = document.getElementById('pais1').value.trim();
        const email = document.getElementById('email1').value.trim();
        const sugestao = document.getElementById('sugestao').value.trim();
        //se tiver tudo, vai enviar e ja adicionar no LocalStorage
        if (nome && pais && email && sugestao) {
            if (addSugestao(nome, pais, email, sugestao)) {
                this.reset();
                alert('Sugestão enviada com sucesso!');
            }
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
}

function configurarFormularioComentario() {
    //aq percebe se ele ta no forms
    const form = document.querySelector('.conteudo_form_contato form');
    //se for diferente do forms, saia
    //se for o forms, segue a config de como vai guardar cada info
    if (!form) return;
    form.addEventListener('submit', function(e) {
        //preventDefaulta para cancelar o evento de recarga da page isso tava atrapalhando antes
        e.preventDefault();
        //o trim tira espaços acidentais do usuário
        const nome = document.getElementById('nome2').value.trim();
        const pais = document.getElementById('pais2').value.trim();
        const email = document.getElementById('email2').value.trim();
        const comentario = document.getElementById('comentarios').value.trim();
        //se tiver todos os dados certinhos, pode enviar pro array e vai ir pro Localstorage
        if (nome && pais && email && comentario) {
            if (addComentario(nome, pais, email, comentario)) {
                this.reset();
                alert('Comentário enviado com sucesso!');
            }
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
}
//configura botao
function configurarBotaoAtualizar() {
    const btnAtualizar = document.getElementById('btn-atualizar');
    if (!btnAtualizar) return;
    btnAtualizar.addEventListener('click', function() {
        loadSubmitSug();
        loadSubmitCom();
    });
}
//pagina carrega e executa as config de tudo
document.addEventListener('DOMContentLoaded', function() {
    loadSubmitSug();
    loadSubmitCom();
    if (document.querySelector('.conteudo_form_sugestao')) {
        configurarFormularioSugestao();
        configurarFormularioComentario();
    }
    if (document.getElementById('btn-atualizar')) {
        configurarBotaoAtualizar();
    }
});
//verificação se ta na pagina do painel
window.addEventListener('pageshow', function() {
    if (document.getElementById('out-infoSug')) {
        attSubmitSug();
        attSubmitCom();
    }
});