let sugestoes = [];
let comentarios = [];

function loadSubmitSug() {
    const sugSalva = localStorage.getItem('sugestoes');
    if (sugSalva) {
        sugestoes = JSON.parse(sugSalva);
    } else {
        sugestoes = [];
    }
    attSubmitSug();
}
function saveSubmitSug() {
    localStorage.setItem('sugestoes', JSON.stringify(sugestoes));
}
function attSubmitSug() {
    const infoSugElement = document.getElementById('out-infoSug');
    const msgVaziaElement = document.getElementById('out-msgVazia'); //lembre de botar d-none no class dessa mensagem e colocar que não há sugestões
    infoSugElement.innerHTML = '';

    if (sugestoes.length === 0) {
        msgVaziaElement.classList.remove('d-none');
    } else {
        msgVaziaElement.classList.add('d-none');
        sugestoes.forEach(sugestao => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `
            <span><strong>${sugestao.nomeP}</strong> ${sugestao.pais} ${sugestao.email}
            <button class="btn btn-danger btn-sm remover-sugestao-btn" dataid="${sugestao.id}">Remover</button>`;
            infoSugElement.appendChild(listItem);
        });
        const botoesRemover = document.getElementByTagName('button');
        for (let i = 0; i < botoesRemover.length; i++) {
            if (botoesRemover[i].classList.contains('remover-sugestao-btn')) {
                botoesRemover[i].addEventListener('click', function() {
                    const sugestaoId = parseInt(this.dataset.id);
                    remSugestao(sugestaoId);
                });
            }
        }
    }
}
function addSugestao(nomeP, pais, email) {
    const id = Date.now();
    const novaSugestao = {id, nomeP, pais, email};
    sugestoes.push(novaSugestao);
    saveSubmitSug();
    attSubmitSug();
}
function remSugestao(id) {
    sugestoes = sugestoes.filter(sugestao => sugestao.id !== id);
    saveSubmitSug();
    attSubmitSug();
}
function lmpAll() {
    if(confirm("Tem certeza que deseja remover TODAS as sugestões e comentários?")) {
        localStorage.clear();
        attSubmitSug();
    }
}
function lmpSug() {
    if(confirm("Tem certeza que deseja remover TODAS as sugestões?")) {
        localStorage.removeItem('sugestoes');
        attSubmitSug();
    }
}


function loadSubmitCom() {
    const comSalva = localStorage.getItem('comentarios');
    if (comSalva) {
        comentarios = JSON.parse(comSalva);
    } else {
        comentarios = [];
    }
    attSubmitCom();
}
function saveSubmitCom() {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}
function attSubmitCom() {
    const infoComElement = document.getElementById('out-infoCom');
    const msgVaziaComElement = document.getElementById('out-msgVaziaCom');
    infoComElement.innerHTML = '';

    if (comentarios.length === 0) {
        msgVaziaComElement.classList.remove('d-none');
    } else {
        msgVaziaComElement.classList.add('d-none');
        comentarios.forEach(comentario => {
            const listItemCom = document.createElement('li');
            listItemCom.classList.add('list-group-item');
            listItemCom.innerHTML = `
            <span><strong>${comentario.nomePC}</strong> ${comentario.paisC} ${comentario.emailC}
            <button class="btn btn-danger btn-sm remover-comentario-btn" data-id="${comentario.idC}">Remover</button>`;
            infoComElement.appendChild(listItemCom);
        });
        const botoesRemoverCom = document.getElementByTagName('button');
        for (let i = 0; i < botoesRemoverCom.length; i++) {
            if (botoesRemoverCom[i].classList.contains('remover-comentario-btn')) {
                botoesRemoverCom[i].addEventListener('click', function() {
                    const comentarioId = parseInt(this.dataset.id);
                    remComentario(comentarioId);
                });
            }
        }
    }
}
function addComentario(nomePC, paisC, emailC) {
    const idC = Date.now();
    const novoComentario = {idC, nomePC, paisC, emailC};
    comentarios.push(novoComentario);
    saveSubmitCom();
    attSubmitCom();
}
function remComentario(idC) {
    comentarios = comentarios.filter(comentario => comentario.idC !== idC);
    saveSubmitCom();
    attSubmitCom();
}