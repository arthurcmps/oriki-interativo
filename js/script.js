const orikis = {
    exu: {
        poetico: [
            "Senhor das encruzilhadas, mensageiro dos mundos.",
            "Exu dança entre os caminhos com o segredo no olhar."
        ],
        cerimonial: [
            "Laroiê Exu! Guardião dos portais, condutor da palavra.",
            "Salve Exu, o que primeiro come, o que abre e fecha os caminhos."
        ],
        infantil: [
            "Exu corre ligeiro, com seu chapéu de lado e sorriso travesso.",
            "Ele abre a estrada e protege quem bate o pé forte no chão."
        ]
    },
    ogum: {
        poetico: [
            "Caminhante das guerras, forjador de destino no ferro em brasa.",
            "Ogum avança com a coragem vestida em aço."
        ],
        cerimonial: [
            "Ogunhê meu pai Ogum! Senhor do ferro, do progresso e da luta.",
            "Com seu facão corta o mato do mundo, abrindo trilhas de vitória."
        ],
        infantil: [
            "Ogum é bravo e forte, com espada que brilha no sol.",
            "Ele cuida dos guerreiros e dos meninos corajosos."
        ]
    }
};

document.getElementById('gerar').addEventListener('click', () => {
    const tema = document.getElementById('tema').value;
    const tom = document.getElementById('tom').value;

    if (orikis[tema] && orikis[tema][tom]) {
        const versos = orikis[tema][tom];
        const versoEscolhido = versos[Math.floor(Math.random() * versos.length)];
        document.getElementById('oriki').textContent = versoEscolhido;
    } else {
        document.getElementById('oriki').textContent = "Oríkì ainda não disponível para esse orixá ou tom.";
    }
});
