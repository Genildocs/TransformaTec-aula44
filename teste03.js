

new Promise((resolve, rejeita)=>{
    
    console.log("Promessa pendente")

    let r = 0
    
    resolve(r + 5)
}).then((res)=>{
    console.log("Sucesso:", res)

}).catch((erro)=>{
    console.log("Erro: ", erro)
    
}).finally(()=>{
    console.log("Execução finalizada")
})