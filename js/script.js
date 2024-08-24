let entraTexto = document.querySelector("#ingresarTexto");
let tarjetaContenedor = document.querySelector(".subcontenedor2");

let btnEncriptar = document.querySelector(".boton-uno");
let btnDesencriptar = document.querySelector(".boton-dos");

btnEncriptar.addEventListener("click", () => {
  if (entraTexto.value === "") {
    alert("no has ingresado texto aun!");
    return;
  }
  tarjetaContenedor.innerHTML = "";
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = `
      <div class="cuerpo-tarjeta">
          <p class="texto-tarjeta">${encriptar(entraTexto.value)}</p>
      </div>
      <div class="tarjeta-footer">
          <button class="boton-dos boton-copiar">Copiar</button>
      </div>
    `;
   tarjetaContenedor.appendChild(tarjeta);
  let cuerpoTarjeta = document.querySelector(".cuerpo-tarjeta");
  cuerpoTarjeta.style.justifyContent = "space-between";
  // Cuando se hace click en el boton de copiar se copia el texto encriptado
  tarjeta.querySelector(".boton-copiar").addEventListener("click", () => {
    let texto = tarjeta.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
    entraTexto.value = ""; // Borrar el texto en el campo de texto
  });
});

function encriptar(texto) {
  let textoEncriptado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      textoEncriptado += "ai";
    } else if (texto[i] === "e") {
      textoEncriptado += "enter";
    } else if (texto[i] === "i") {
      textoEncriptado += "imes";
    } else if (texto[i] === "o") {
      textoEncriptado += "ober";
    } else if (texto[i] === "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += texto[i];
    }
  }

  return textoEncriptado;
}
btnDesencriptar.addEventListener("click", () => {
  if (entraTexto.value === "") {
    alert("no has ingresado texto aun!");
    return;
  }
  tarjetaContenedor.innerHTML = "";
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.innerHTML = `
        <div class="cuerpo-tarjeta">
            <p class="texto-tarjeta">${desencriptar(entraTexto.value)}</p>
        </div>
        <div class="tarjeta-footer">
          <button class="boton-dos boton-copiar">Copiar</button>
        </div>
      `;
  tarjetaContenedor.appendChild(tarjeta);
  let cuerpoTarjeta = document.querySelector(".cuerpo-tarjeta");
  cuerpoTarjeta.style.justifyContent = "space-between";
  // Cuando se hace click en el boton de copiar se copia el texto desencriptado
  tarjeta.querySelector(".boton-copiar").addEventListener("click", () => {
    let texto = tarjeta.querySelector("p").innerText;
    navigator.clipboard.writeText(texto);
    entraTexto.value = ""; // Borrar el texto en el campo de texto
  });
});

function desencriptar(textoEncriptado) {
  let texto = "";

  for (let i = 0; i < textoEncriptado.length; i++) {
    if (textoEncriptado[i] === "a" && textoEncriptado[i + 1] === "i") {
      texto += "a";
      i++;
    } else if (
      textoEncriptado[i] === "e" &&
      textoEncriptado[i + 1] === "n" &&
      textoEncriptado[i + 2] === "t" &&
      textoEncriptado[i + 3] === "e" &&
      textoEncriptado[i + 4] === "r"
    ) {
      texto += "e";
      i += 4;
    } else if (
      textoEncriptado[i] === "i" &&
      textoEncriptado[i + 1] === "m" &&
      textoEncriptado[i + 2] === "e" &&
      textoEncriptado[i + 3] === "s"
    ) {
      texto += "i";
      i += 3;
    } else if (
      textoEncriptado[i] === "o" &&
      textoEncriptado[i + 1] === "b" &&
      textoEncriptado[i + 2] === "e" &&
      textoEncriptado[i + 3] === "r"
    ) {
      texto += "o";
      i += 3;
    } else if (
      textoEncriptado[i] === "u" &&
      textoEncriptado[i + 1] === "f" &&
      textoEncriptado[i + 2] === "a" &&
      textoEncriptado[i + 3] === "t"
    ) {
      texto += "u";
      i += 3;
    } else {
      texto += textoEncriptado[i];
    }
  }

  return texto;
}
