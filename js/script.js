
function upDate(previewPic) {
    console.log("Evento upDate disparado");
    console.log("Alt: ", previewPic.alt);
    console.log("Fuente: ", previewPic.src);

    // Cambiar el texto del elemento con id "image"
    document.getElementById('image').textContent = previewPic.alt;

    // Cambiar la imagen de fondo del elemento con id "image"
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";


}

function unDo() {
    console.log("Evento unDo disparado");

    // Restaurar la imagen de fondo original del elemento con id "image"
    document.getElementById('image').style.backgroundImage = "url('')";

    // Restaurar el texto original del elemento con id "image"
    document.getElementById('image').textContent = "Pase el cursor sobre una imagen para mostrarlo.";

}


function onFocus() {
    console.log("Evento onFocus disparado");
    // Añadir un atributo tabfocus cuando el div obtiene foco
    document.getElementById('image').setAttribute('tabfocus', true);
}

function onBlur() {
    console.log("Evento onBlur disparado");
    // Eliminar el atributo tabfocus cuando el div pierde el foco
    document.getElementById('image').removeAttribute('tabfocus');
}

function initialize() {
    console.log("Evento onload disparado");

    listaDescripcionAlt = ['Lisro para todo', 'Hola, con ganas de comenzar', 'Tengo ganas de dormir',
'Quiero Jugar', 'Tengo Hambre', 'Quiero un Abrazo'];

    // Añadir listeners para los eventos focus y blur
    document.getElementById('image').addEventListener('focus', onFocus);
    document.getElementById('image').addEventListener('blur', onBlur);

    // Obtener el contenedor de las imágenes
    var imageContainer = document.body;

    // Crear 6 imágenes dinámicamente
    for (var i = 1; i <= 6; i++) {
        var img = document.createElement('img');
        img.classList.add('preview');
        img.src = 'img/img' + i + '.jpeg'; // Asignar la URL de la imagen
        img.alt = 'Imagen ' + i; // Asignar el texto alternativo
        img.setAttribute('onmouseover', 'upDate(this)');
        img.setAttribute('onmouseout', 'unDo()');
        img.setAttribute('onfocus', 'onFocus()');
        img.setAttribute('onblur', 'onBlur()');
        img.setAttribute('tabindex', '1');
        img.setAttribute('Alt', listaDescripcionAlt[i-1]);
        imageContainer.appendChild(img);
    }
}
