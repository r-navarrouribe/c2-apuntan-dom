import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");

for (const { nombre, foto, profesion, estado, twitter, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");

  // Nombre
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;

  // Imagen
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;

  // Profesión
  const profesionSenyor = senyorElemento.querySelector(".profesionSenyor");
  profesionSenyor.textContent = profesion;

  // Estado
  const estadoSenyor = senyorElemento.querySelector(".estadoSenyor");
  estadoSenyor.textContent = estado;

  // Twitter
  const twitterSenyor = senyorElemento.querySelector(".twitterSenyor");
  twitterSenyor.textContent = twitter;

  // Inicial

  const letraInicial = senyorElemento.querySelector(".inicial");
  const nombreSeparado = nombre.split(" ");
  const primeraPalabra = nombreSeparado[0];
  const segundaPalabra = nombreSeparado[1];

  letraInicial.textContent =
    primeraPalabra.length < 3
      ? segundaPalabra.slice(0, 1)
      : primeraPalabra.slice(0, 1);

  // Marcado?

  const iconoMarcado = senyorElemento.querySelector(".icono");
  const imgMarcada = senyorElemento.querySelector("img");
  if (marcado) {
    iconoMarcado.classList.add("icono-marcado");
    imgMarcada.classList.add("img-marcada");
  }

  principal.append(senyorElemento);
}

// Contador de senyores marcados

const contadorSenyores = document.querySelector(".contador-marcados");

let contadorSenyoresMarcados = 0;
for (const { marcado } of senyores) {
  if (marcado) {
    contadorSenyoresMarcados++;
  }
}
contadorSenyores.textContent = `${contadorSenyoresMarcados} señores que te apuntan con el dedo marcados`;
