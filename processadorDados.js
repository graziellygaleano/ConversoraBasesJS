import { decPbin } from "./conversores.js";

// separa em variavel os elementos 
const forms = document.getElementById('formConversorBase')
const resultado = document.getElementById('numeroConvertido')
const historicoConvertido = document.getElementById('historicoConvertido')
const tituloHistorico = document.getElementById('tituloHistorico')
const apagaHistorico = document.getElementById('apagaHistorico')

apagaHistorico.addEventListener('click', function(event) {
    localStorage.removeItem('historico')
    historicoConvertido.innerText = ""
    tituloHistorico.innerText = ""
})

// começa a buscar o evento dentro de "forms"
forms.addEventListener('submit', function (event) {

    // essa função criada é uma função "anônima", por não precisar ser chamada em nenhum outro contexto além desse evento, ela não é "salva" de fato. Outro exemplo de fuc anônima, são as arrows func 
    // (event) => {
    //     event.preventDefault();
    // }

    // "event" é nossa variavel anterior. "preventDefault" é pq tds as tags html tem comportamento padrão, no caso de forms é enviar e atualizar a página após o envio. Aqui a gente fala "ei, não atualzia ainda, faz isso primeiro" sendo o "isso", processar o dado. O default é dessa forma, pois no próprio envio ele já tem os dados de bakend, requisão e etc
    event.preventDefault()

    const dadosForm = new FormData(forms)
    // "FormData" é uma função que "varre" o forms e todos os campos que tiverem "name" e salva tudo em um objeto temporário (por isso o "new", igual em c++, ele cria um objeto {e nesse caso, não precisa apagar ele dps})

    const dec = Number(dadosForm.get('numeroConversao'))
    // Aqui eu crio uma variavel pra isolar APENAS o input dos forms que eu desejo mexer, nesse caso, o número inserido. A função "Number" é MUITO IMPORTANTE pois em html, todo input é escrito como string. Number é bem criterioso, se houver número e letra na string a ser convertida, ele da erro. SÓ USAR QUANDO TIVER TRATAMENTO. No meu caso o tratamento é o próprio type do input.

    const { numero, nBinario } = decPbin(dec)

    // Por fim, vamos inserir o resultado na página.

    resultado.innerText = `O número ${numero} em binário é ${nBinario}`

    // imprime o historico de conversões na tela (vai precisar de um for, pois o historico foi salvo em um dic)

    tituloHistorico.innerHTML = "Histórico de Conversões:"

    const historico = JSON.parse(localStorage.getItem('historico')) || []
    const novaConversao = {decimal: numero, binario: nBinario}
    historico.push(novaConversao)
    
    localStorage.setItem('historico', JSON.stringify(historico))

    let historicoFinal = ''

    for (const iten of historico) {

        historicoFinal += `Decimal: ${iten.decimal} Binário: ${iten.binario}\n`

    }

    historicoConvertido.innerText = historicoFinal
})






