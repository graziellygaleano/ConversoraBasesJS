export function imprimeResultado(base,chave,valor) {
    const numeroConvertido = document.getElementById('numeroConvertido')

    numeroConvertido.innerText = `Decimal: ${chave} ${base}: ${valor}` 
}

