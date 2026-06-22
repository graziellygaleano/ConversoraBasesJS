
export function apagaHistorico () {
    const tituloHistorico = document.getElementById('tituloHistorico')
    const historicoLista = document.getElementById('historicoLista')

    localStorage.removeItem('historico')
    tituloHistorico.innerText = ""
    historicoLista.innerHTML = ""
    

}

export function addHistorico(tipo,chave,valor) {


    const historico = JSON.parse(localStorage.getItem('historico')) || []   
    const novaConversao = {decimal: chave, [tipo]: valor}

    historico.push(novaConversao)  
    localStorage.setItem('historico',JSON.stringify(historico))

}

export function imprimeHistorico() {
    const historico = JSON.parse(localStorage.getItem('historico')) || []


    // INSERE TITULO HISTÓRICO
    const tituloHistorico = document.getElementById('tituloHistorico')
    tituloHistorico.innerHTML = "Histórico de Conversões:"

    // INSERE LINHAS DO HISTÓRICO
    let historicoFinal = ''

    for (const objeto of historico) {
        historicoFinal += `<li>`
        
        for (const item in objeto) {
            const valor = objeto[item]
            historicoFinal += `${item} : ${valor} | `
        }

        historicoFinal += `</li>`  
        
    }

    const historicoLista = document.getElementById('historicoLista')
    historicoLista.innerHTML = historicoFinal   
}