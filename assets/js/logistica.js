const pesquisa = document.querySelector('#campoBusca')
const dadosTabela = document.querySelectorAll('.buscaDadosTabela tr')

campoBusca.addEventListener("keydown", (evento) => {

    if (evento.key === 'Enter') {
        const textoBusca = campoBusca.value.toLowerCase();

        dadosTabela.forEach(function(linha) {
            const textoLinha = linha.textContent.toLowerCase();

            if (!textoBusca == textoLinha)
                alert("Valor não encontrado!")

            if (textoLinha.includes(textoBusca)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }
        });
    }
});


// campoBusca.addEventListener("keydown", (evento) => {
//     if (evento.key === 'Enter') {
//         let valorDigitado = evento.target.value.toLowerCase()

//         dadosTabela.forEach((linhaDado) => {
//             if (!String(linhaDado.textContent).toLowerCase().includes(valorDigitado)){
//                 linhaDado.style.display = 'none'
//             }
//         })
//     }
// });