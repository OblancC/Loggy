    const dados = [{
        "nome": "Dr. João Guilherme da Conceição",
        "endereco": "Setor Eduarda Santos, 93, Caiçara - Adelaide, 97425-229 Ferreira da Serra / RR",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Pendente"
    }, {
        "nome": "Cauê Rocha",
        "endereco": "Viaduto de da Conceição, 87, Esplanada, 17927052 Pereira / MT",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Pendente"
    }, {
        "nome": "Vitor Hugo Oliveira",
        "endereco": "Praia João Vitor Farias, 19, Serra Verde, 92877124 Melo / SE",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Pendente"
    }, {
        "nome": "Srta. Maria Alice Gomes",
        "endereco": "Vale Alves, 45, Dona Clara, 18779591 Martins / SE",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Pendente"
    }, {
        "nome": "Carolina Pinto",
        "endereco": "Feira da Conceição, 841, Aarão Reis, 32407680 Barros / CE",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Andamento"
    }, {
        "nome": "João Lucas Sales",
        "endereco": "Travessa Daniela Monteiro, 577, Acaba Mundo, 22578-619 Moraes dos Dourados / BA",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Concluido"
    }, {
        "nome": "Yago da Paz",
        "endereco": "Sítio Moraes, Baleia, 80680249 Melo / SC",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Pendente"
    }, {
        "nome": "Fernando Almeida",
        "endereco": "Via Jesus, 6, Trevo, 11783-927 da Conceição / BA",
        "tipo": "Instalação de Aparelho",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Pendente"
    }, {
        "nome": "Danilo Pereira",
        "endereco": "Favela Duarte, 971, Jardim Alvorada, 70601-707 da Rocha / CE",
        "tipo": "Reparo de Antena",
        "observacao": "Após se pendurar no telhado a antena quebrou.",
        "status": "Pendente"
    }];

    function createCard(data) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = 
        `
        <div class="status-circle status-${data.status.toLowerCase()}"></div>
        <p><strong>Tipo:</strong> ${data.tipo}</p>
        <p><strong>Cliente:</strong> ${data.nome}</p>
        <p><strong>Status:</strong> ${data.status}</p>
        `;
        card.addEventListener('click', () => {
            showdetalhes(data);
        });
        return card;
    }

    function showdetalhes(data) {
        const detalhes = document.createElement('div');
        detalhes.classList.add('card-detalhes');
        detalhes.innerHTML = 
        `
        <p><strong>Tipo:</strong> ${data.tipo}</p>
        <p><strong>Nome:</strong> ${data.nome}</p>
        <p><strong>Endereço:</strong> ${data.endereco}</p>
        <p><strong>Observação:</strong> ${data.observacao}</p>
        <p><strong>Status:</strong> ${data.status}</p>
        `;
        const cardsContainer = document.getElementById('cards-container');
        const detalhesContainer = document.getElementById('detalhes');
        cardsContainer.style.display = 'none';
        const filt = document.getElementById('filtros');
        filt.style.display = 'none';
        detalhesContainer.innerHTML = '';
        detalhesContainer.appendChild(detalhes);
        detalhesContainer.style.display = 'block';
    }

    function filtroStatus(status) {
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.innerHTML = '';
        dados
            .filter(data => data.status.toLowerCase() === status.toLowerCase())
            .forEach(data => {
                const card = createCard(data);
                cardsContainer.appendChild(card);
            });
    }

    const cardsContainer = document.getElementById('cards-container');
    dados.forEach((data) => {
        const card = createCard(data);
        cardsContainer.appendChild(card);
    });

    const filterPendenteBtn = document.getElementById('filtro-pendente');
    filterPendenteBtn.addEventListener('click', () => {
        filtroStatus('Pendente');
    });

    const filterConcluidoBtn = document.getElementById('filtro-concluido');
    filterConcluidoBtn.addEventListener('click', () => {
        filtroStatus('Concluido');
    });

    const filterAndamentoBtn = document.getElementById('filtro-andamento');
    filterAndamentoBtn.addEventListener('click', () => {
        filtroStatus('Andamento');
    });
