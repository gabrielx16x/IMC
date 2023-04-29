function calc_imc() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    document.getElementById("imc").innerHTML = "Seu IMC é: " + (peso/(altura*altura)).toFixed(2);
    var imc = peso/(altura*altura).toFixed(2);
    var img = document.getElementById("img");
  
  
    if (imc >= 0 && imc < 18.5) {
        document.getElementById("qualimc").innerHTML = 'Abaixo do Peso';
        img.src = "../img/1.png"
    }
    else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("qualimc").innerHTML = 'Peso Normal';
        img.src = "../img/2.png"
    }
    else if (imc >= 25 && imc < 29.9) {
        document.getElementById("qualimc").innerHTML = 'Acima do Peso';
        img.src = "../img/3.png"
    }
    else if (imc >= 30 && imc < 34.9) {
        document.getElementById("qualimc").innerHTML = 'Obesidade I';
        img.src = "../img/4.png"
    }
    else if (imc >= 35 && imc < 39.9) {
        document.getElementById("qualimc").innerHTML = 'Obesidade II';
        img.src = "../img/5.png"
    }
    else if (imc >= 40) {
        document.getElementById("qualimc").innerHTML = 'Obesidade III';
        img.src = "../img/6.png"
    }
    else {
        document.getElementById("qualimc").innerHTML = 'IMC inválido';
        img.src = "../img/imc.jpg"
    }
  }