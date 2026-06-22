import { decPbin } from "./funcoesConversores/conversorBinario.js";
import { addHistorico, imprimeHistorico, apagaHistorico } from "./manipulaHistorico.js";
import { imprimeResultado } from "./manipulaResultado.js";


imprimeHistorico()

// separa em variavel os elementos 
const forms = document.getElementById('formConversorBase')
const botaoApagar = document.getElementById('botaoApagar')
const escolherBase = document.getElementById('baseConversao')


forms.addEventListener('submit', function (event) {
    console.log('Entrou na func')

    event.preventDefault()

    const dadosForm = new FormData(forms)

    const n = Number(dadosForm.get('numeroConversao'))
    console.log(n)

    let base = dadosForm.get('baseConversao')

    switch (base) {
        case 'binario': {
            const { decimal, nBinario } = decPbin(n)
            addHistorico(base, decimal, nBinario)
            imprimeResultado(base,decimal,nBinario)
            imprimeHistorico()
            break
        }

    }

})

botaoApagar.addEventListener('click', function(event) {
    apagaHistorico()
})






