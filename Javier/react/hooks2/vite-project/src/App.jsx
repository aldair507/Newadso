// import  { useEffect, useRef} from 'react'

// const App = () => {
//   const [like]=useRef(0)

//   const mostar=()=>{
//     like.current + 1
//   }
//   const menos=()=>{
//     like.current - 1
//   }

//   useEffect(()=>{
//     console.log(` los likes han cambiaso a ${like.current}`)
//   },)
//   return (
//     <div>
//       <p>{like}</p>
//       <button onClick={mostar}>mas</button>
//       <button onClick={menos}>menos</button></div>
//   )
// }

// export default App

import { useState } from "react";

const App = () => {
  const [mensaje, setmensaje] = useState({
    mensaje: "hola",
    numero: 3,
  });
  const [nombres, setnombres] = useState(['jose']);

  const addname=()=>{
    setnombres([...nombres,'aldair'])
  }

  const handle = () => {
    setmensaje({ numero: 8, mensaje: mensaje.mensaje });
  };
  return (
    <div>
      <h2>useState</h2>
      <p>{mensaje.mensaje}</p>
      <p>{mensaje.numero}</p>
      <button onClick={handle}>hola</button>
      <button onClick={addname}>agregar</button>

      <ul>
      { nombres.map((nombre) => {
  return <li>{nombre}</li>;
})}

      </ul>
    </div>
  );
};

export default App;
