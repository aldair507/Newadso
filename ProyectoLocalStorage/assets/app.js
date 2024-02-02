const formulario=document.querySelector("#formulario");
const listatweets=document.querySelector("#lista-tweets");
let tweets=[];

// aqui voy a crear los liseners 
eventlistener();
function eventlistener(){
    formulario.addEventListener('submit',agregarTweet);

    document.addEventListener('DOMContentLoaded', () => {
        tweets=JSON.parse(localStorage.getItem("tweets")) || [];
        contarlike=JSON.parse(localStorage.getItem("contarlike")) ||
        console.log(tweets);
        crearHtml();
    })
    
}


// crear funciones  

function agregarTweet(e){
    e.preventDefault();
    console.log('hola2');
    const tweet=document.querySelector('#tweet');
    

    const imagen=tweet.files[0]
    console.log(tweet);


    if(!imagen){
     
        mostrarError("no se permite espacios en blanco");

        return;
    }
    const tweetObje={
        id: Date.now(),
        imagen: URL.createObjectURL(imagen)
    }

    tweets=[...tweets, tweetObje];
    console.log(tweets);
   crearHtml();
   formulario.reset();
}


function mostrarError(error){
    const mensajeerror=document.createElement('p');
    mensajeerror.textContent=error;
    mensajeerror.classList.add("error");
    

    const contenido=document.querySelector("#contenido");
    contenido.appendChild(mensajeerror);

    setTimeout(() => {
        
   mensajeerror.remove(); }, 1000);
}


function crearHtml(){ limpiarhrml();
    if(tweets.length>0){
        tweets.forEach(imagen=>{

            // const botonborrar= document.createElement("a");
            // botonborrar.classList='borrar-tweet';
            // botonborrar.innerHTML='X';

            const botonx=document.createElement("button");
            botonx.classList='borrar-tweet';
            botonx.style.borderRadius="25px";
            botonx.textContent="X";

            const botoncorazon=document.createElement("button");
            botoncorazon.style.borderRadius="25px";
            botoncorazon.textContent="like";
            botoncorazon.classList='borrar-tweet';
            
            

 

            const img= document.createElement("img");
            // añade el texto 
            img.src=imagen.imagen;
            img.style.width="200px";
            img.style.position="relative";

            // inserta en el thml 
            listatweets.appendChild(img);
            

            img.appendChild(botonx);
            listatweets.appendChild(botonx);

            const li=document.createElement("li");
            listatweets.appendChild(img);
            li.appendChild(botonx)
            li.appendChild(botoncorazon);
            listatweets.appendChild(li)

            botonx.onclick=() => {
                borrartweet(imagen.id)
            }
           
            // botoncorazon.addEventListener("click", ()=>{
            //     if(botoncorazon.style.backgroundColor==='white') {
            //         botoncorazon.style.backgroundColor = 'red';
            //     } else{
            //         botoncorazon.style.backgroundColor = 'white ';

                   
                    
            //     }
            // })
            
            
            
            let contarlike =  localStorage.getItem('contarlike') || 0;

            botoncorazon.addEventListener('click', () => {
                contarlike++;
                numerolikes();

                localStorage.setItem("contarlike", contarlike);
                
            })

            function numerolikes() {
                botoncorazon.textContent = ` like (${contarlike} )`;
            }

                
                
        })
    }
    agregarstorage();
}

function limpiarhrml(){
    while(listatweets.firstChild){
        listatweets.removeChild(listatweets.firstChild);
    }
}


function agregarstorage(){
    localStorage.setItem("tweets", JSON.stringify(tweets));
    localStorage.setItem("", JSON.stringify(contarlike))
   
}

function borrartweet(id){
    
    tweets=tweets.filter(imagen=>imagen.id!=id);
    crearHtml();
}



