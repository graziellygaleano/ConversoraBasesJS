// VARIAVEL GLOBAL
const historico = {}

// FUNÇÃO DE CONVERTER DECIMAL P/ BINÁRIO
export function decPbin(n) {
	let binario = []
	let p = 0
	const numero = n
	
	if (n === 0) {
		let nBinario = "0"
		historico[numero] = nBinario
		return {numero, nBinario, historico}
	}
		


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
	let nBinario = binario.reverse().join('')
	historico[numero] = nBinario

	return {numero, nBinario, historico}
}


