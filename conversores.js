// VARIAVEL GLOBAL

// FUNÇÃO DE CONVERTER DECIMAL P/ BINÁRIO
export function decPbin(n) {
	const binario = []
	let p = 0
	const numero = n
	let nBinario = ""
	
	if (n === 0) {
		nBinario = "0"
		return {numero, nBinario}
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
	nBinario = binario.reverse().join('')
	
	return {numero, nBinario}


}


