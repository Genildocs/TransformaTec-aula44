// Criando um novo objeto da classe Promise e colocando o objeto na variavel promessa para tratar o fluxo de resposta.
const promessa = new Promise((resolve, rejeita)=>{

    let a = 2 + 2;
    let b = 2 * 4
    let c = 2 ** 4

    // criando um objeto de resultado
    const resultado ={
        "a": a,
        "b": b,
        "c": c
    }
    setTimeout(
        () => resolve(resultado), 
        1000
    )
})

// then: quando a promessa é cumprida // catch: quando a promessa não é cumprida retorna um erro. 

promessa.
then(
    res => {
        console.log("Resultado:", res)
    }
).catch(
    erro => {
        console.log("Erro!")
        
    }
)