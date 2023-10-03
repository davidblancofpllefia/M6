console.log("Holaaa!!!")

//Creamos la funcion pintaRanking para mostrar los rankings
function pintaRanking(){
    //Generamos la tabla rankings
    let rankings = `<h2 class="text-center text-light">Ranking</h2>
                    <table class="table table-dark align-middle">
				        <theader>
							<tr class="bg-dark">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</theader>
						<tbody>
							<tr>
								<td class="fs-2">1</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
							<tr>
								<td class="fs-2">2</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
							<tr>
								<td class="fs-2">3</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
						</tbody>
						`
					//Lo mostramos por la consola
					console.log(rankings)
                    
                    
}
//Llamamos la funcion
pintaRanking();
// Definimos un array de partidas con datos 
const partidas = [
	{
	  avatar: "https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg",
	  nick: "BLANCO",
	  puntos: 777,
	  fecha: "21 AGOSTO 2023"
	},
	{
	  avatar: "https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg",
	  nick: "ALEX",
	  puntos: 333,
	  fecha: "2 MAYO 2023"
	}
  ];
  
  // Definimos un objeto con los datos 
  const datosEjemploPartida = {
	avatar: 'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
	nick: 'MANUEL',
	puntos: 100,
	fecha: '21 MAYO 2023'
  };
  
  // Función para insertar una nueva partida en el array partidas
  function insertaNuevaPartida(partida) {
	console.log('Guardando partida');
	console.log(partida);
	// Agregar la partida al array partidas
	partidas.push(partida); 
	console.log('Nuevo array de partidas:');
	//Mostrar el nuevo array de partidas
	console.log(partidas);
	// Llamar a la función pintaTabla con el nuevo array
	pintaTabla(partidas); 
  }
  
  // Función para mostrar datos de la partida y confirmar si guardarla
  function pintaDatosPartida(tablaPartida) {
	console.log("Datos de la partida:");
	console.log(tablaPartida);
	
	// Mostrar una ventana de confirmación 
	const confirmacion = confirm('¿Quieres guardar la partida?');
   // Si el usuario confirma, se guarda la partida
	if (confirmacion) {
	  insertaNuevaPartida(tablaPartida);
	}
  }
  
  // Llamamos a la función pintaDatosPartida con los datos de ejemplo
  pintaDatosPartida(datosEjemploPartida);
  
  // Función para generar y mostrar una tabla HTML de partidas
  function pintaTabla(partidas) {
	// Generamos la tabla de partidas
	let tablaHTML = `
	  <h2 class="text-center text-light">Partidas</h2>
	  <table class="table table-dark">
		<thead>
		  <tr>
			<td></td>
			<td>Nick <i class="bi bi-arrow-up-square"></i></td>
			<td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
			<td>Fecha <i class="bi bi-arrow-up-square"></i></td>
		  </tr>
		</thead>
		<tbody>
	`;
  
	// Recorremos el array de partidas para agregar filas a la tabla
	partidas.forEach((element) => {
	  tablaHTML += `
		<tr>
		  <td><img src="${element.avatar}" alt="avatar" width="50"></td> <!-- Ajusta el ancho de la foto aquí -->
		  <td>${element.nick}</td>
		  <td>${element.puntos}</td>
		  <td>${element.fecha}</td>
		</tr>
	  `;
	});
  
	// Cerramos las etiquetas de la tabla
	tablaHTML += `
		</tbody>
		<tfoot></tfoot>
	  </table>
	`;
  
	// Mostramos la tabla por consola
	console.log(tablaHTML);
  
	// Mostramos la tabla por pantalla
	const elementoPartidas = document.querySelector('#partidas');
	if (elementoPartidas) {
	  elementoPartidas.innerHTML = tablaHTML;
	}
  }
  
  // Llamamos a la función para insertar una nueva partida con los datos de ejemplo
  insertaNuevaPartida(datosEjemploPartida);

  