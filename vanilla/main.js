
// 1---> Les variables visent les BALISES HTML


let button;
let span;
let counter = 0;


//  2---> Creation fonction onClickButton

function onClickButton(){
    counter++;

     span.textContent = counter++; // performance élevé et plus secure que innerHTML
    //span.innerHTML = counter;
    
}

//  3--> Recherche de tous les elements nécessaire Vise le Html par les ID et Class

    //span = document.querySelector('.result span'); autre méthode pour viser tous les span

span = document.querySelector('.result > span');
button = document.getElementById('button-click');

// 4--> Installation de gestionnaire d'évènements
button.addEventListener('click',onClickButton);

