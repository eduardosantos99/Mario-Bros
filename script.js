

const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function puxandoFormulario(){
form.style.left = "50%"
form.style.transform = "translateX(-50%)"
mascara.style.visibility = "visible"
}

function normal(){
    form.style.left = "-300px"
    form.style.transform = "traslateX(-50%)"
    mascara.style.visibility = "hidden"
}