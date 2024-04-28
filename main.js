//funcion general que reproduce el sonido cuando hago click en la tecla
function playSonido (idAudio) {
    document.querySelector(idAudio).play();
}

//Creamos una lista de teclas
//Almacenar los elementos en una lista
//facilita el acceso a ellos en el código.
//En lugar de tener que buscar los elementos
//cada vez que necesites trabajar con ellos, puedes simplemente iterar sobre la lista.
const listaDeTeclas = document.querySelectorAll(`.tecla`)

//Utilizamos la instrucción for para recorrer cada elemento en la lista de teclas.
//Este proceso nos permite definir el comportamiento individual para cada tecla en la aplicación.
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    //Dentro del bucle, accedemos a cada elemento individual (tecla) utilizando el índice contador. 
    //Esto nos permite interactuar con cada tecla de manera individual

    const tecla = listaDeTeclas [contador];

    //se accede a la segunda clase CSS de cada tecla, que se asume que representa el instrumento asociado. 
    //Esta información es necesaria para determinar qué sonido debe reproducirse cuando se presiona la tecla correspondiente.

    const instrumento = tecla.classList[1];

    //Aquí se construye un selector CSS para el elemento de audio asociado a la tecla actual. 
    //Se utiliza la interpolación de cadenas (template literals) para insertar el nombre del
    //instrumento en el selector, que está precedido por "#sonido_". Esto se hace para identificar
    //el elemento de audio correspondiente al instrumento de la tecla actual.

    const idAudio = `#sonido_${instrumento}`;

    //Este código asigna un evento onclick a cada tecla. Cuando se hace clic en una tecla, se ejecutará la función playSonido
    //con el idAudio correspondiente, lo que reproducirá el sonido asociado a esa tecla.

    tecla.onclick = function () {
        playSonido(idAudio);
    }

    //Cuando se presiona una tecla, este evento se dispara. La función asociada verifica si la tecla presionada es la barra
    // espaciadora (Space) o la tecla de entrada (Enter). Si lo son, agrega la clase CSS 'activa' a la tecla
    
    tecla.onkeydown = function(evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    };

    //Se asigna un evento onkeyup a cada tecla. Cuando se suelta una tecla, este evento se dispara.
    //La función asociada simplemente elimina la clase CSS 'activa' de la tecla, indicando visualmente que la tecla ya no está presionada.
    
    tecla.onkeyup = function() {
        tecla.classList.remove(`activa`);
    }

}