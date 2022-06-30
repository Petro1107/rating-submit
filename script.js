/* Tomar los elementos del boton y la página para accionar el desplazamiento */

const btnSubmit = document.getElementById("btnSubmit");
const pagina = document.querySelector(".pagina");

const radioBtns = document.querySelectorAll('input[name="valor"]');
const valorFinal = document.getElementById("valor-final");

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault;
});

const findSelected = () => {
  const selected = document.querySelector('input[name="valor"]:checked');
  console.log(selected.id);
  valorFinal.textContent = selected.id;
};

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelected);
});

btnSubmit.addEventListener("click", () => {
  //   console.log("test");
  let valid = false;
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      valid = true;
      break;
    }
  }

  if (valid) {
    pagina.style.position = "relative";
    pagina.style.top = "-100%";
  } else {
    alert("Por favor seleccione un valor");
  }
});

console.log(radioBtns.length);
