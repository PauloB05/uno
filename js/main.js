

const inicio = ()=> {
  setTimeout( empezar, 1500);
}

document.addEventListener("DOMContentLoaded", inicio ) 

const empezar = ()=> {
  const numeros = document.querySelectorAll("#numero")
  numeros.forEach(x=>{
    x.textContent = parseInt(Math.random() *9)
  })
}




function color1() {
  document.querySelector(".numero1").style.color="#ff0000"
}
   function color2() {
  document.querySelector(".numero2").style.color="#ffff00"
}
function color3() {
  document.querySelector(".numero3").style.color="#00ff00"
}
function color4() {
  document.querySelector(".numero4").style.color="#ff00ff"
}
function color5() {
  document.querySelector(".numero5").style.color="#ff00f0"
}
function color6() {
  document.querySelector(".numero6").style.color="#aaaa00"
}
function color7() {
  document.querySelector(".numero7").style.color="#0000ff"
}
function color8() {
  document.querySelector(".numero8").style.color="#ff00aa"
}
function color9() {
  document.querySelector(".numero9").style.color="#00ff00" 
}
