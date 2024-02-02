
  



const fotoinput=document.querySelector("#Fotografia");
const nombreinput= document.querySelector("#Nombre");
const marcainput=document.querySelector("#Marca");
const cilindrajeinput=document.querySelector("#Cilindraje");
const placainput=document.querySelector("#placa");
const soatinput=document.querySelector("#Soat");
const combustiblesInput=document.querySelector("#Ccombustible");
const descripcioninput=document.querySelector("#Descripcion");
const btnenviar=document.querySelector("#enviar");

const Contenedormotos=document.querySelector("#motos");

const formulario=document.querySelector("#nueva-moto");
formulario.addEventListener('submit',nuevamoto);


let array1=[]

let editando= false;
eventListeners()

function eventListeners(){

    fotoinput.addEventListener("change", (e)=>{
        odjetomotos[e.target.name] = e.target.files[0]
    });

    nombreinput.addEventListener("change",datosmoto);
    marcainput.addEventListener("change",datosmoto);
    cilindrajeinput.addEventListener("change",datosmoto);
    placainput.addEventListener("change",datosmoto);
    soatinput.addEventListener("change",datosmoto);
    combustiblesInput.addEventListener("change",datosmoto);
    descripcioninput.addEventListener("change",datosmoto);

    
};

const odjetomotos={
    foto:"",
    nombre:"",
    marca:"",
    cilindraje:"",
    placa:"",
    soat:"",
    combustible:"",
    descripcion:""
}


function datosmoto(e){
    odjetomotos[e.target.name]=e.target.value

   

   storage()

    console.log(odjetomotos)
   
}


// CLasses
class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(moto) {
        this.citas = [...this.citas, moto];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( moto => moto.id === citaActualizada.id ? citaActualizada : moto)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( moto => moto.id !== id);
    }
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

   imprimirCitas({citas}) { // Se puede aplicar destructuring desde la función...
       
        this.limpiarHTML();

        citas.forEach(moto => {
            const {foto, nombre, marca, cilindraje, placa, soat, combustible,descripcion, id } = moto;

          

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // scRIPTING DE LOS ELEMENTOS...
            const mostrarfoto = document.createElement('img');
            mostrarfoto.classList.add('card-title', 'font-weight-bolder');
            mostrarfoto.style.width = "200px";

            const reader= new FileReader();
            reader.onload=(e)=>{
                {mostrarfoto.src = e.target.result}

            }
            reader.readAsDataURL(foto);

            const mostrarnombre = document.createElement('p');
            mostrarnombre.innerHTML = `<span class="font-weight-bolder">Nombre: </span> ${nombre}`;

            const mostrarmarca = document.createElement('p');
            mostrarmarca.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${marca}`;

            const mostrarcilindraje = document.createElement('p');
            mostrarcilindraje.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${cilindraje}`;

            const mostrarplaca = document.createElement('p');
            mostrarplaca.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${placa}`;

            const mostrarsoat = document.createElement('p');
            mostrarsoat.innerHTML = `<span class="font-weight-bolder">Soat: </span> ${soat}`;

            const mostrarcombustible = document.createElement('p');
            mostrarcombustible.innerHTML = `<span class="font-weight-bolder">combustible: </span> ${combustible}`;
            const mostrardescrpcion = document.createElement('p');
            mostrardescrpcion.innerHTML = `<span class="font-weight-bolder">descripcion: </span> ${descripcion}`;

            // Agregar un botón de eliminar...
            const btnEliminar = document.createElement('button');
            btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            // Añade un botón de editar...
            const btnEditar = document.createElement('button');
            btnEditar.onclick = () => cargarEdicion(moto);

            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = 'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'

            // Agregar al HTML
            divCita.appendChild(mostrarfoto);
            divCita.appendChild(mostrarnombre);
            divCita.appendChild(mostrarmarca);
            divCita.appendChild(mostrarcilindraje);
            divCita.appendChild(mostrarplaca);

            divCita.appendChild(mostrarsoat);
            divCita.appendChild(mostrarcombustible);
            divCita.appendChild(mostrardescrpcion);
            
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            Contenedormotos.appendChild(divCita);
        });   
   }

   limpiarHTML() {
        while(Contenedormotos.firstChild) {
            Contenedormotos.removeChild(Contenedormotos.firstChild);
        }
   }
}

const ui = new UI();
const administrarCitas = new Citas();

function nuevamoto(e) {
    e.preventDefault();
    

    const {foto,nombre, marca, cilindraje, placa, soat, combustible,descripcion } = odjetomotos;

    // Validar
    if( foto === '' || nombre=== '' ||marca === '' || cilindraje === ''  || placa === '' || soat === '' || combustible==='' || descripcion==='' ) {
        ui.imprimirAlerta('Todos los mensajes son Obligatorios', 'error')

        return;
    }

    if(editando) {
        // Estamos editando
        administrarCitas.editarCita( {...odjetomotos} );

        ui.imprimirAlerta('Guardado Correctamente');

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    } else {
        // Nuevo Registrando

        // Generar un ID único
        odjetomotos.id = Date.now();
        
        // Añade la nueva cita
        administrarCitas.agregarCita({...odjetomotos});

        // Mostrar mensaje de que todo esta bien...
        ui.imprimirAlerta('Se agregó correctamente')
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas(administrarCitas);

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();
    
}

function reiniciarObjeto() {
    // Reiniciar el objeto
    
   odjetomotos.foto="";
   odjetomotos.nombre="";
   odjetomotos.marca="";
   odjetomotos.cilindraje="";
   odjetomotos.placa="";
   odjetomotos.soat="";
   odjetomotos.combustible="";
   odjetomotos.descripcion="";

}

function eliminarCita(id) {
    administrarCitas.eliminarCita(id);
    ui.imprimirCitas(administrarCitas);
    reiniciarObjeto();
    formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
    editando = false;

}


function cargarEdicion(moto) {
    const { foto, nombre, marca, cilindraje, placa, soat, combustible, descripcion, id } = moto;

    // Reiniciar el objeto
    odjetomotos.foto = foto;
    odjetomotos.nombre = nombre;
    odjetomotos.marca = marca;
    odjetomotos.cilindraje = cilindraje;
    odjetomotos.placa = placa;
    odjetomotos.soat = soat;
    odjetomotos.combustible = combustible;
    odjetomotos.descripcion = descripcion;
    odjetomotos.id = id;

    // Llenar los Inputs
    fotoinput.files[0] = foto;
    nombreinput.value = nombre;
    marcainput.value = marca;
    cilindrajeinput.value = cilindraje;
    placainput.value = placa;
    soatinput.value = soat;
    combustiblesInput.value = combustible;
    descripcioninput.value = descripcion;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;

}

f