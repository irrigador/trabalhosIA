const form = document.querySelector('#form');
const mensagem = document.querySelector('#mensagem');
const eventoDiv = document.querySelector('#evento');
const eventos = [];

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const nome = document.querySelector('#nome').value;
	const data = document.querySelector('#data').value;
	const hora = document.querySelector('#hora').value;
	const descricao = document.querySelector('#descricao').value;

	const evento = {
		nome: nome,
		data: data,
		hora: hora,
		descricao: descricao
	};

	// Verifica se há conflitos de horários com eventos existentes
	if (verificarConflitos(evento)) {
		mensagem.innerHTML = 'Conflito de horário com outro evento.';
	} else {
		eventos.push(evento);
		mensagem.innerHTML = 'Evento agendado com sucesso!';
		atualizarEventoDiv(evento);
	}
});

function verificarConflitos(evento) {
	// Percorre a lista de eventos e verifica se há conflitos de horários
	for (let i = 0; i < eventos.length; i++) {
		if (evento.data === eventos[i].data && evento.hora === eventos[i].hora) {
			return true;
		}
	}

	return false;
}

function atualizarEventoDiv(evento) {
	// Atualiza a div com as informações do evento agendado
	eventoDiv.innerHTML = `
		<p><strong>Nome:</strong> ${evento.nome}</p>
		<p><strong>Data:</strong> ${evento.data}</p>
		<p><strong>Hora:</strong> ${evento.hora}</p>
		<p><strong>Descrição:</strong> ${evento.descricao}</p>
	`;
}
