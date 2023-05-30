function resultado(x){
    if(x == 1){
        return "Piedra"
    } else if(x == 2) {
        return "Papel"
    } else {
        return "Tijera"
    }
}

function fotopng(y){
    if(y == 1){
        return "piedra.png"
    } else if(y == 2) {
        return "papel.png"
    } else {
        return "tijera.png"
}
}



let nomUsuario1 = "nada"
let nomSistema1 = "nada"
let fotoUs="nada.png"
let fotoSis="nada.png"
let tanteadorUsuario = 0
let tanteadorSistema = 0
let serie = 0
let contador=1


while(serie<3){

let usuario1 = prompt("Jugada "+contador+". Elegí una opción. 1.Piedra 2.Papel 3.Tijera")
let sistema1 = Math.random()

sistema1 = Math.ceil(sistema1 * 3)



while(sistema1==usuario1){
    sistema1 = Math.random()
    sistema1 = Math.ceil(sistema1*3)
}

nomUsuario1 = resultado(usuario1)
nomSistema1 = resultado(sistema1)
fotoUs = fotopng(usuario1)
fotoSis = fotopng(sistema1)



alert("elegiste "+nomUsuario1+". El sistema eligió "+nomSistema1)

if(usuario1==1 && sistema1 ==3 || usuario1==2 && sistema1 == 1 || usuario1==3 && sistema1==2){
    tanteadorUsuario +=1
} else {
    tanteadorSistema += 1
}

document.write("<div class='fila'>")
document.write("<div class='casilla1'><span>",nomUsuario1 ,"</span><span class='espLat'> </span><span><img src='./assets/imgs/",fotoUs,"' height='100px' width='auto' alt='piedra'></span></div>")
document.write("<div class='casilla2'>",tanteadorUsuario," - ",tanteadorSistema,"</div>")
document.write("<div class='casilla1'><span><img src='./assets/imgs/",fotoSis,"' height='100px' width='auto' alt='piedra'></span><span class='espLat'> </span><span>",nomSistema1 ,"</span></div>")
document.write("</div>")

serie = Math.max(tanteadorSistema, tanteadorUsuario)
contador +=1
}
