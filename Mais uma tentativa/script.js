fetch('arquivo.txt')
	.then(response => response.text())
	.then(texto => {
		document.getElementById('conteudo-arquivo').innerHTML = texto;
	})
	.catch(err => {
		console.log('Erro ao ler o arquivo: ' + err);
	});