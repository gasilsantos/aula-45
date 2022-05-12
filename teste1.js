const promessa = new Promise(
    (resolve,rejeita)=>{
        let a = 2 
        let b = 3

        resolve(a * c)
    }
)

promessa.then(
    resultado=>{
        console.log("resultado da  promessa:" + resultado)
    }
).catch(
    erro=>{
        console.log("Erro ao executar  a promessa. descrição do erro:\n" + erro)
    }
)