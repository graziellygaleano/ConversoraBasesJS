const historico = {}


while (true) {
	let binario = []
	let p = 0

	alert("A seguir insira o valor que deseja transformar em binario:\n")

	let n = Number(prompt("Insira o valor que deseja converter para binário: "))
	const numero = n
	alert(`O numero digitado foi: ${numero}`)



	while (n > 0) {
		if (n % 2 === 0) {
			binario[p] = 0
			p++
		}
		
		else {
			binario[p] = 1
			p++
		}

		n = Math.floor(n/2)
	}
	nBinario = binario.reverse().join('')
	historico[numero] = nBinario 

	alert(`O valor em binario e: ${nBinario}`);

	let comando = prompt('Digite "sair" se quiser fechar ou "historia" para ver historico:')
	if (comando === "sair") {
		break
	}
	else if (comando === "historia") {
		for (let i in historico) {
			alert(`Decimal: ${i}, Binário: ${historico[i]}`)
		}
	}
	
}

// add função com loop pra sair da calculadora quando eu quiser e o binario ser salvo em um dic
