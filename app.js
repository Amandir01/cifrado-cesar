function cifradoCesar(){
    var yourText = prompt('Escribe una frase');
    var newArray = []
for ( var i = 0 ; i < yourText.length; i++){
    var caDena = yourText.charCodeAt(i)

    var desCifrando = ( caDena- 65 + 33)% 26 + 65;
    var cifrando = String.fromCharCode(desCifrando);
}
return newArray.push(cifrando)

}
cifradoCesar()
