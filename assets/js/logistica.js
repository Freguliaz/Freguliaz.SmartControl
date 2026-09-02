const pesquisa = document.querySelector('#campoBusca')
const dadosTabela = document.querySelectorAll('.buscaDadosTabela tr')

campoBusca.addEventListener("input", function() {

    // if (evento.key === 'Enter') {
        const textoBusca = campoBusca.value.toLowerCase();

        dadosTabela.forEach(function(linha) {
            const textoLinhas = linha.textContent.toLowerCase();

            if (textoLinhas.includes(textoBusca)) {
                linha.style.display = "";
            } else {
                linha.style.display = "none";
            }
        });
    }
// }
);

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