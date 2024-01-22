function toggleMode() {
  const body = document.querySelector("body")
  {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light")
    } else {
      document.body.classList.add("light")
    }
  }
}
/*       document.body.classList.toggle('light');      */

/* A presente função me causou problemas não consegui inserir no html, portanto tive que usar uma alternativa */

const img = querySelector("#profile img")
if (document.body.classList.contains("light")) {
  img.setAttribute("src", "./assets/images/avatar-light.png")
} else {
  img.setAttribute("src", "./assets/images/avatar.png")
}

// animação

var div = document.getElementById("log")
var texto = "Olá meu nome é Carlos Victor, seja bem vindo!"

function escrever(str, el) {
  var char = str.split("").reverse()
  var typer = setInterval(function () {
    if (!char.length) return clearInterval(typer)
    var next = char.pop()
    el.innerHTML += next
  }, 100)
}

escrever(texto, div);
