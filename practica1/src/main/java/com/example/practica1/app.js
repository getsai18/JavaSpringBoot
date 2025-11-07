const formulario = document.querySelector(".formulario");
 const elementos = document.querySelectorAll(".campoObligatorio");
    const mostrarError = document.querySelector(".mostrarError");

formulario.addEventListener("submit", (e) => {
    let hayError = false
    mostrarError.innerHtml="";

    for(let elemento of elementos){
        if(elemento.value.trim() === ""){

            hayError = true;
            elemento.classList.remove("invalido");
            elemento.classList.add("valido");
            e.preventDefault();
            mostrarError.innerHtml="<p>Falta llenar campos</p>";
        }else{
            elemento.classList.remove("valido");
            elemento.classList.add("invalido");
        }



    }


    if (hayError) {
        e.preventDefault(); // no envía el formulario
        mostrarError.innerHTML = "<p style='color:red;'>Faltan campos por llenar</p>";
    }
});


elementos.forEach((campo) => {
    campo.addEventListener("keyup", () => {
        if (campo.value.trim() === "") {
            campo.classList.remove("valido");
            campo.classList.add("invalido");
        } else {
            campo.classList.remove("invalido");
            campo.classList.add("valido");
        }
    });
});