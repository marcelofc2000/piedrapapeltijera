let jugada1 = prompt("elegí una opción. 1.Piedra 2.Papel 3.Tijera")
let sistema1 = Math.random()
let totJugada1 = "nada"
let totSistema1 = "nada"
let ganador = "nada"
sistema1 = sistema1 * 3
sistema1 = Math.ceil(sistema1)
document.write(jugada1)

document.write("<br></br>")
// document.write("Jugador= ", jugada1, " ", totJugada1, " - Sistema = ", sistema1," ",totSistema1)

document.write("<br><br>")
document.write(jugada1)
document.write("<br>")
document.write(sistema1)
document.write("<br>")

if(jugada1 == 1){
    totJugada1 = "Piedra"
} else if(jugada1 == 2) {
    totJugada1 = "Papel"
} else {
    totJugada1 = "Tijera"
}

if (sistema1 == 1){
    totSistema1 = "Piedra"
} else if (sistema1 == 2){
    totSistema1 = "Papel"
} else {
    totSistema1 = "Tijera"
}
document.write( usuario, " elige ","<span class='eleccion'>", totJugada1, "</span>","<br>","Sistema elige ","<span class='eleccion'>",totSistema1,"</span>")
document.write("<br>")

if(jugada1==1 && sistema1 ==3 || jugada1==2 && sistema1 == 1 || jugada1==3 && sistema1==2){
    document.write("Gana ", usuario," Felicitaciones!!")
} else if (jugada1==1 && sistema1 ==2 || jugada1==2 && sistema1==3 || jugada1==3 && sistema1==1){
    document.write("Gana Sistema")
} else {
    document.write("empate")
}


// document.write(jugada1 ," ",sistema1)
// if (jugada1 == 1 && sistema1 == 3 || jugada1 == 2 && sistema1 == 1 || jugada1 == 3 && sistema1 == 2){
//     Document.write("Gana Jugador. Felicitaciones!!!")
// } else if(jugada1 == 1 && sistema1 == 2 || jugada1==2 && sistema1== 3 || jugada1==3 && sistema1== 1){
//     Document.write("Gana el Sistema.  Perdedor buuuuuu")
// } else {
//     "Empate 🤷"
// }
