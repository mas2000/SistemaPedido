
    //-- --------------------          Javascript       -------------------------- //
    // -------- -- -- -- -- -- -- -- 1er Formulario -- -- -- -- -- -- --  -------- //


    
    //Calendario
        
    var date = new Date();
    var year = date.getFullYear();
    var month = String(date.getMonth()+1).padStart(2,'0');
    var todayDate = String(date.getDate()+4).padStart(2,'0');
    var datePattern = year + '-' + month + '-' + todayDate;
    document.getElementById("calendario").value = datePattern;

    //Elementos

	const form = document.getElementById('formulario');
    const tabla = document.getElementById('tabla');
	const seccion1 = document.getElementById('seccion-1');
	const cliente = document.getElementById('cliente');
	const calendario = document.getElementById('calendario');
    const domicilio = document.getElementById('domicilio');
    const btnAnterior00 = document.getElementById('btn-anterior');
    const btnAnterior01 = document.getElementById('btn-anterior1');
    const btnAnterior02 = document.getElementById('btn-anterior2');
    const btnAnterior03 = document.getElementById('btn-anterior3');
    const btnPedido = document.getElementById('btn-pedido');
	const btnSiguiente00 = document.getElementById('btn-siguiente');
    const btnSiguiente01 = document.getElementById('btn-siguiente1');


    //Deshabilitar "Siguiente"

    btnSiguiente00.disabled = true;

    // Habilitar el botón "Siguiente" cuando se completen todos los campos requeridos
		
    form.addEventListener('input', () => {
			if (cliente.validity.valid && calendario.validity.valid && domicilio.validity.valid) {
				btnSiguiente00.disabled = false;
			} else {
				btnSiguiente00.disabled = true;
			}
		});

        btnPedido.addEventListener('click', () => {
            btnAnterior00.style.display = 'none';
            btnAnterior01.style.display = 'none';
            btnPedido.style.display = 'none';
			btnSiguiente00.style.display = 'none';
            btnSiguiente01.style.display = 'none';
			seccion1.style.display = 'none';
            tabla.style.display = 'none';
            btnAnterior02.style.display = 'block';
			formulario.style.display = 'block';

		});

        btnSiguiente00.addEventListener('click', () => {
            btnAnterior00.style.display = 'none';
            btnAnterior01.style.display = 'block';
			seccion1.style.display = 'none';
            tabla.style.display = 'block';
			formulario.style.display = 'none';
            btnPedido.style.display = 'block';
			btnSiguiente00.style.display = 'none';
            btnSiguiente01.style.display = 'block';
		});



    // -------- -- -- -- -- -- -- -- Final 1er Formulario -- -- -- -- -- -- --  -------- //



    // -------- -- -- -- -- -- -- -- 2do Formulario + Tabla -- -- -- -- -- -- --  -------- //

    function agregarElemento() {
            // Obtenemos el valor de los campos del formulario
            var codigo = document.getElementById("codigo").value;
            var cantidad = document.getElementById("cantidad").value;
            var precio = document.getElementById("precio").value;
    
            // Creamos un nuevo elemento "tr"
            var fila = document.createElement("tr");
    
            // Creamos un nuevo elemento "td" para cada campo del formulario
            var celdaCodigo = document.createElement("td");
            var celdaCantidad = document.createElement("td");
            var celdaPrecio = document.createElement("td");
    
            // Asignamos los valores de los campos del formulario a las celdas correspondientes
            celdaCodigo.textContent = codigo;
            celdaCantidad.textContent = cantidad;
            celdaPrecio.textContent = precio;
    
            // Creamos un nuevo elemento "td" para el botón de eliminación
            var celdaEliminar = document.createElement("td");
    
            // Creamos un nuevo botón
            var botonEliminar = document.createElement("button");
    
            // Asignamos un texto al botón
            botonEliminar.textContent = "Eliminar";
    
            // Agregamos un evento "click" al botón para eliminar la fila
            botonEliminar.addEventListener("click", function() {
                fila.parentNode.removeChild(fila);
                actualizarBotonSiguiente1();
            });
    
            // Agregamos el botón de eliminación a la celda correspondiente
            celdaEliminar.appendChild(botonEliminar);
    
            // Agregamos las celdas a la fila
            fila.appendChild(celdaCodigo);
            fila.appendChild(celdaCantidad);
            fila.appendChild(celdaPrecio);
            fila.appendChild(celdaEliminar);
    
            // Agregamos la fila a la tabla
            document.getElementById("tabla-body").appendChild(fila);
    
            // Limpiamos los campos del formulario
            document.getElementById("codigo").value = "";
            document.getElementById("cantidad").value = "";
            document.getElementById("precio").value = "";
    
            // Deseleccionamos el botón de agregar
            document.getElementById("btn-agregar").disabled = true;
            actualizarBotonSiguiente1();
        }
    
    function actualizarBotonSiguiente1() {
            var botonSiguiente1 = document.getElementById("btn-siguiente1");
            var tabla = document.getElementById("tabla-body");

            if (tabla.children.length > 0) {
                botonSiguiente1.disabled = false;
            } else {
             botonSiguiente1.disabled = true;
         }
        }


        // Obtenemos los elementos del formulario y el botón de agregar
        const formulario = document.getElementById("formulario1");
        const codigo = document.getElementById("codigo");
        const cantidad = document.getElementById("cantidad");
        const precio = document.getElementById("precio");
        const btnAgregar = document.getElementById("btn-agregar");
    
        // Deshabilitamos el botón de agregar al inicio
        btnAgregar.disabled = true;
    
        // Agregamos un listener al formulario para habilitar o deshabilitar el botón de agregar según la validez de los campos del formulario
        formulario.addEventListener("input", function() {
            if (codigo.validity.valid && cantidad.validity.valid && precio.validity.valid) {
                btnAgregar.disabled = false;
            } else {
                btnAgregar.disabled = true;
            }
        });

        btnAgregar.addEventListener('click', () => {
            btnAnterior01.style.display = 'block';
            btnSiguiente01.style.display = 'block';
            btnPedido.style.display = 'block';
            tabla.style.display = 'block';
            formulario.style.display = 'none';

        })

            btnAnterior01.addEventListener('click', () => {
            btnAnterior00.style.display = 'block'
            btnSiguiente00.style.display = 'block';
			seccion1.style.display = 'block';
            tabla.style.display = 'none';
			formulario.style.display = 'none';
            btnAnterior01.style.display = 'none';
            btnSiguiente01.style.display = 'none';
            btnPedido.style.display = 'none';
		});


            btnSiguiente01.addEventListener('click', () => {
            tabla.style.display = 'none';
			formulario.style.display = 'none';
            btnAnterior03.style.display = 'block'; 
            form3.style.display= 'block';
            btnAnterior01.style.display = 'none';
            btnSiguiente01.style.display = 'none';
            btnPedido.style.display = 'none';
            btnFinalizado.style.display = 'none'
        })


        // Agregamos un listener al botón de siguiente para mostrar un mensaje en la consola
        btnSiguiente01.addEventListener("click", function() {
            console.log("Botón Siguiente presionado.");
}       );


        
    // -------- -- -- -- -- -- -- -- Fin 2do Formulario + Tabla -- -- -- -- -- -- --  -------- //


        // -------- -- -- -- -- -- -- -- 3er Formulario -- -- -- -- -- -- --  -------- //

    
    //Elementos

	const form3 = document.getElementById('formulario3');
	const seccion2 = document.getElementById('seccion-final');
    const ultimadata = document.getElementById('ultimadata');
	const comentarios = document.getElementById('comentarios');
	const btnFinal = document.getElementById('btn-final');
    const btnFinalizado = document.getElementById('finalizado');


    
    btnAnterior02.addEventListener('click', () => {
            tabla.style.display = 'block';
			formulario.style.display = 'none';
            form3.style.display= 'none';
            btnAnterior01.style.display = 'block';
            btnSiguiente01.style.display = 'block';
            btnAnterior02.style.display= 'none';
            btnPedido.style.display = 'block';
        })

    // Volver a la tabla
    
    btnAnterior03.addEventListener('click', () => {
            tabla.style.display = 'block';
			formulario.style.display = 'none';
            form3.style.display= 'none';
            btnAnterior01.style.display = 'block';
            btnSiguiente01.style.display = 'block';
            btnAnterior02.style.display= 'none';
            btnPedido.style.display = 'block';
        })

    //Deshabilitar "Finalizar"

    btnFinal.disabled = true;

    // Habilitar el botón "Finalizar" cuando se completen todos los campos requeridos
		
    form3.addEventListener('input', () => {
			if (ultimadata.validity.valid && comentarios.validity.valid ) {
				btnFinal.disabled = false;
			} else {
				btnFinal.disabled = true;
			}
		});

        // Ventana de finalizacion
        btnFinal.addEventListener('click', () => {
            btnFinalizado.style.display = 'block';
            tabla.style.display = 'none';
			formulario.style.display = 'none';
            form3.style.display= 'none';
            btnAnterior01.style.display = 'none';
            btnSiguiente01.style.display = 'none';
            btnAnterior02.style.display= 'none';
            btnPedido.style.display = 'none';
        })

