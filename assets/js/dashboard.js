function exibirBoasVindas() {
    const usuario = prompt("Digite seu nome e sobrenome:");
    const agora = new Date();

    const diasSemana = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];

    const diaSemana = diasSemana[agora.getDay()];
    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();

    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");
    const fusoHorario = `- ${String(agora.getTimezoneOffset() / 60).padStart(2, "0")}:00`;

    const mensagem = `Olá, ${usuario}! Hoje é ${diaSemana}, ${dia}/${mes}/${ano} – ${hora}:${minuto} (${fusoHorario})`;

    document.getElementById("boas-vindas").textContent = mensagem;
}