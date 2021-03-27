var nome = prompt('Dimmi il tuo nome?');
console.log('Questo è il tuo nome: ' , nome);


var risultato = miaFunzione(nome);
console.log(risultato);


if (risultato == true) {
    console.log('è palindromo');
} else {
    console.log('non è palindromo');
}

function miaFunzione(nomUtente) {

    var nameReverse = '';
    for( var i = nomUtente.length - 1; i >= 0 ; i--) {
        

        nameReverse += nomUtente[i]; 
        console.log(nameReverse);
    }

    var palindromo = false;
    if(nomUtente === nameReverse) {
        palindromo = true;
    }

    return palindromo;

}



