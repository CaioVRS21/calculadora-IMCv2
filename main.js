function getDados(){
    let peso = (document.querySelector('#Pesonum').value)
    let altura = (document.querySelector('#Alturanum').value)
    peso = peso.replace(',' , '.')
    altura = altura.replace(',' , '.')
    const pesoNum = Number(peso)
    const alturaNum = Number(altura)
    //console.log(typeof alturaNum)
    if (check(pesoNum, alturaNum) === true){
        calcImc(pesoNum, alturaNum);}
}

function calcImc(pesoNum, alturaNum){
    const result = pesoNum / Math.pow(alturaNum, 2)
    const tipos = ['abaixo do peso', 'no peso normal', 'com sobrepeso', 'com obesidade grau 1', 'com obesidade grau 2', 'com obesidade grau 3']

    if (result <= 18.5){
        painel2.innerHTML = `<p>O seu IMC é de ${result.toFixed(2)}</p>
        <p>Você está ${tipos[0]}</p>`
        return;
    }

    if(result > 18.5 && result <= 24.9){
        painel2.innerHTML = `<p>O seu IMC é de ${result.toFixed(2)}</p>
        <p>Você está ${tipos[1]}</p>`
        return;
    }

    if(result > 24.9 && result <= 29.9){
        painel2.innerHTML = `<p>O seu IMC é de ${result.toFixed(2)}</p>
        <p>Você está ${tipos[2]}</p>`
        return;
    }

    if(result > 29.9 && result <= 34.9){
        painel2.innerHTML = `<p>O seu IMC é de ${result.toFixed(2)}</p>
        <p>Você está ${tipos[3]}</p>`
        return;
    }

    if(result > 34.9 && result <= 39.9){
        painel2.innerHTML = `<p>O seu IMC é de ${result.toFixed(2)}</p>
        <p>Você está ${tipos[4]}</p>`
        return;
    }

    if(result > 39.9){
        painel2.innerHTML = `<p>O seu IMC é de ${result.toFixed(2)}</p>
        <p>Você está ${tipos[5]}</p>`
        return;
    }

}

function check(pesoNum, alturaNum){
    if (isNaN(pesoNum) === true || isNaN(alturaNum) === true){
        window.alert('[ERRO] Valor inválido, por favor insira um valor númerico e tente novamente')
        console.log(typeof pesoNum)
        return false;
    }

    if(pesoNum.length === 0 || alturaNum.length === 0 || pesoNum <= 0 || alturaNum <=0){
        window.alert('[ERRO] Valor inválido, por favor insira um valor válido, ou não deixe nenhum campo em branco e tente novamente')
        return false;
    } else {
        return true;
    }
}