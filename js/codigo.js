function cambiarColorImpar() {


    for (let i = 0; i <= document.getElementsByClassName("impar").length; i++) {
        document.getElementsByClassName("impar")[i].style.backgroundColor = 'red';
        document.getElementsByClassName("par")[i].style.backgroundColor = 'white';

    }

}

function cambiarColorPar() {


    for (let i = 0; i <= document.getElementsByClassName("par").length; i++) {
        document.getElementsByClassName("par")[i].style.backgroundColor = 'blue';
        document.getElementsByClassName("impar")[i].style.backgroundColor = 'white';

    }

}