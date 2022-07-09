// function calcImc(){
//     let peso = document.getElementById('Pesotxt')
//     let altura = document.getElementById('Alturatxt')
    
//     if (peso.value.length === 0 || altura.value.length === 0){
//         window.alert('[ERRO] Preencha todo os campos corretamente e tente novamente')
//         return;
//     }

//     if (peso.value < 0 || altura.value < 0){
//         window.alert('[ERRO] Valor inválido, tente novamente')
//         return;
//     }

//     if (peso.value.length != 0 && altura.value.length !=0 && peso.value > 0 && altura.value > 0){
//         let imc = peso.value / Math.pow(altura.value, 2)
//         if (imc < 18.5){
//             painel2.innerHTML = `
//             <p>Seu imc é ${imc.toFixed(2)}</p>
//             <p>Você está abaixo do seu peso ideal</p>`
//             return;
//         }
//         if (imc >= 18.5 && imc<=24.9){
//             painel2.innerHTML = `
//             <p>Seu imc é ${imc.toFixed(2)}</p>
//             <p>Você está no seu peso ideal</p>`
//             return;
//         }
//         if (imc >= 25 && imc <=29.9){
//             painel2.innerHTML = `
//             <p>Seu imc é ${imc.toFixed(2)}</p>
//             <p>Cuidado, você está com sobrepeso, recomendamos uma mudança nos seus hábitos</p>`
//             return;
//         }
//         if(imc >= 30 && imc <= 34.9){
//             painel2.innerHTML = `
//             <p>Seu imc é ${imc.toFixed(2)}</p>
//             <p>Atenção! Você está com sobrepeso grau 1! Recomendamos uma visita a um profissional</p>`
//             return;
//         }
//         if (imc >= 35 && imc <= 39.9){
//             painel2.innerHTML = `
//             <p>Seu imc é ${imc.toFixed(2)}</p>
//             <p>Atenção! Você está com sobrepeso grau 2! Recomendamos uma visita a um profissional</p>`
//             return;
//         }
//         if(imc >= 40){
//             painel2.innerHTML = `
//             <p>Seu imc é ${imc.toFixed(2)}</p>
//             <p>Atenção! Você está com sobrepeso grau 3! Recomendamos uma visita a um profissional</p>`
//             return;
//         }
//     }
// }



function calcImc(){
    
}