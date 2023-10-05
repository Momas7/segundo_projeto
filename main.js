const form = document.getElementById('form-atividade');

form.addEventListener('submit', function(e) {
    e.preventDeFault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`; 
    linha += `<td>${inputNotaAtividade >= 7 ? 'aprovado' : 'reprovado'}</td>`;
    linha += `</tr>`;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;

})