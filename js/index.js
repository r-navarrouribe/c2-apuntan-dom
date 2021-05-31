import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

for (const { nombre, foto, profesion, estado, twitter } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;
  const profesionSenyor = senyorElemento.querySelector(".profesionSenyor");
  profesionSenyor.textContent = profesion;
  const estadoSenyor = senyorElemento.querySelector(".estadoSenyor");
  estadoSenyor.textContent = estado;
  const twitterSenyor = senyorElemento.querySelector(".twitterSenyor");
  twitterSenyor.textContent = twitter;

  principal.append(senyorElemento);
}
