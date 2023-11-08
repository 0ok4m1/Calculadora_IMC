const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    // Previne o comportamento padrão do evento submit do js, ou seja, impede o recarregamento da pagina.
    event.preventDefault();

    const peso = document.getElementById('weight').value;

    const altura = document.getElementById('height').value;

    const imc = peso / (altura ^ 2);

    const campoImc = document.getElementById('value'); //aonde aparece o IMC

    let descricao;

    campoImc.classList.add('beware');

    // campoImc.style.color = 'red' //Opção mais fácil

    if ( imc < 17) {
        descricao = (`Cuidado! Você está muito abaixo do peso.`)
    } else if ((imc >= 17) && (imc <= 18.5 )) {
        descricao = (`Você está abaixo do peso.`)
        campoImc.classList.remove('beware');
        campoImc.classList.add('attention');
    } else if ((imc >= 18.5) && (imc <= 25)) {
        descricao = (`Você está no peso ideal. Continue assim!`)
        campoImc.classList.remove('attention');
        campoImc.classList.remove('beware');
        campoImc.classList.add('normal');
    } else if ((imc >= 25) && (imc <= 30)) {
        descricao = (`Você está no sobrepeso.`)
        campoImc.classList.remove('beware');
        campoImc.classList.add('attention');
    } else if ((imc >= 30) && (imc <= 35)) {
        descricao = (`Você está na obesidade. Melhor se cuidar.`)
        campoImc.classList.remove('beware');
        campoImc.classList.add('attention');
    } else if ((imc >= 35) && (imc <= 40)) {
        descricao = (`Cuidado! Você está na obesidade severa.`)
    } else if (imc > 40) {
        descricao =  (`Misericórdia! Você está na obesidade mórbida!`)
    }

    document.getElementById('infos').classList.remove('hidden');
    // condições do IMC



    campoImc.textContent = imc.toFixed(2);
    document.getElementById('description').textContent = descricao;
});