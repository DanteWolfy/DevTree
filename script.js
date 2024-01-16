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
