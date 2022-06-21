// Criando um novo objeto da classe Promise e colocando o objeto na variavel promessa para tratar o fluxo de resposta.
const promessa = new Promise((resolve, rejeita)=>{

    let a = 2 + a;

    setTimeout(
        () => resolve(a), 
        3000
    )
})

// then: quando a promessa é cumprida // catch: quando a promessa não é cumprida retorna um erro. 

promessa.
then(
    soma => {
        console.log("Soma:", soma)
    }
).catch(
    erro => {
        console.log("Erro!")
        
    }
)