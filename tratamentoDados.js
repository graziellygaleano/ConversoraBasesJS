export function tratarDado(texto) {
    if (!texto) return ""; 

    // 1. Faz todo o tratamento passo a passo e guarda numa variável temporária
    const textoTratado = texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "");

    // 2. Devolve o resultado
    return textoTratado; 
}