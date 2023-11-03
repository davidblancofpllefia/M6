console.log('Hola')

const personajes = [
    {
        nombre: "Albert Einstein",
        imagenURL: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg    ",
        frase: "La imaginación es más importante que el conocimiento."
    },
    {
        nombre: "Martin Luther King Jr.",
        imagenURL: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
        frase: "Tengo un sueño."
    },
    {
        nombre: "Mahatma Gandhi",
        imagenURL: "https://img.txalaparta.eus/Autores/1045-Mahatma-Gandhi.jpg",
        frase: "Sé el cambio que quieres ver en el mundo."
    },
    {
        nombre: "William Shakespeare",
        imagenURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/640px-Shakespeare.jpg",
        frase:"Ser o no ser, esa es la cuestión."
    },
    {
        nombre: "Marilyn Monroe",
        imagenURL: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/06/17/16554544433581.jpg",
        frase: "Dale a una chica los zapatos adecuados y conquistará el mundo."
    },
    {
        nombre: "Abraham Lincoln",
        imagenURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/1200px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
        frase: "El gobierno del pueblo, por el pueblo y para el pueblo no perecerá de la Tierra."
    },
    {
        nombre: "Winston Churchill",
        imagenURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/800px-Sir_Winston_Churchill_-_19086236948.jpg",
        frase: "Nunca en la historia de la humanidad tantos le deben tanto a tan pocos."
    },
    {
        nombre: "Coco Chanel",
        imagenURL: "https://historia.nationalgeographic.com.es/medio/2021/12/28/imagen-de-coco-chanel-tomada-en-paris-durante-el-ano-1937_acada8d1_550x574.jpeg",
        frase:"La moda pasa, el estilo permanece."
    },
    {
        nombre: "Nelson Mandela",
        imagenURL: "https://confilegal.com/wp-content/uploads/2021/08/Nelson-Mandela-South-African-copia.jpg",
        frase: "La educación es el arma más poderosa que puedes usar para cambiar el mundo."
    },
    {
        nombre: "Steve Jobs",
        imagenURL: "https://www.angelv.es/wp-content/uploads/2019/10/Steve_Jobs_Headshot_2010-CROP_cropped_2.jpg",
        frase: "Innovación es lo que distingue a un líder de un seguidor."
    },
    {
        nombre: "Audrey Hepburn",
        imagenURL: "https://cdn.aarp.net/content/dam/aarp/entertainment/movies/2018/11/1140-2-audrey-hepburn-breakfast-at-tiffanys-esp.jpg",
        frase: "La belleza es ser la mejor versión de ti mismo por dentro y por fuera."
    },
    {
        nombre: "Mark Twain",
        imagenURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/640px-Mark_Twain_by_AF_Bradley.jpg",
        frase: "El informe de mi muerte ha sido muy exagerado."
    }
];
//Capturamos todo lo que necesitamos
const selectPersonaje = document.querySelector("#personaje");
const verPersonajeButton = document.querySelector("#verPersonaje");
const personajeImagen = document.querySelector("#personajeImagen");
const personajeNombre = document.querySelector("#personajeNombre");
const fraseCelebre = document.querySelector("#frase");


//Hacemos un forEach para poder ver todos los personajes en el select
personajes.forEach(personaje => {
    selectPersonaje.innerHTML += `<option value="${personaje.nombre}">${personaje.nombre}</option>`;
});

//Esta función toma un objeto de personaje y muestra su información en la tarjeta.
function mostrarInformacionPersonaje(personaje) {
    // Establecemos  la imagen con la URL del personaje
    personajeImagen.src = personaje.imagenURL;
    
    // Actualizamos el nombre del personaje
    personajeNombre.textContent = `Nombre: ${personaje.nombre}`;
    
    // Actualizamos el contenido del elemento con la frase  del personaje
    frase.textContent = `${personaje.frase}`;

     // Obtenemos el tiempo de la consulta y lo mostramos
     const consulta = tiempo();
     const consultaHTML = `${consulta}`
     document.querySelector("#consulta").innerHTML = consultaHTML;
     
}

function tiempo() {
    // Creamos un nuevo objeto Date para obtener la fecha y hora actual.
    const dia = new Date();
    // Obtenemos las horas de la fecha actual.
    const hora = dia.getHours(); 
    // Obtenemos los minutos de la fecha actual.
    const minuto = dia.getMinutes();
    // Obtenemos los segundos de la fecha actual.
    const segundo = dia.getSeconds();
    // Retornamos una cadena con el tiempo en hora,minuto y segundo.
    return `${hora}:${minuto}:${segundo}`;
}

//Funcion para poder mostrar el personaje
function verPersonaje() {
    //Cogemos el valor 
    const valorPersonaje = selectPersonaje.value;
    //Hacemos un for para poder mostrar el personaje seleccionado en el select
    for (let i = 0; i < personajes.length; i++) {
        if (personajes[i].nombre === valorPersonaje) {
            personajeEncontrado = personajes[i];
        }
    }
    //Si se a encontrado lo mostramos
    if (personajeEncontrado) {
        mostrarInformacionPersonaje(personajeEncontrado);
    }
}

// Agregamos un evento para el boton de ver el personaje
verPersonajeButton.addEventListener("click", verPersonaje);



// Definimos una función para buscar y resaltar palabras
function buscarPalabra() {
    const palabraBuscada = buscarInput.value;
    const frase = fraseCelebre.textContent;

    if (frase.includes(palabraBuscada)) {
        // Si la palabra buscada se encuentra en la frase, la destacamos en verde
        fraseCelebre.innerHTML = frase.replace(new RegExp(palabraBuscada, "gi"), match => `<span style="color: green">${match}</span>`);
    }
}

//Agregamos un evento para el boton de buscar palabras
buscarButton.addEventListener("click", buscarPalabra);

