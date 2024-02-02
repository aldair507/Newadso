import { useEffect, useState } from "react"


const Effect = () => {

    const [mensaje,setmensaje]=useState('')

    const [count, setount]=useState(0)

    useEffect(()=>{
        console.log('effect')
    },[mensaje])

  return (
    <div>
        <h2>hola render</h2>
        <p>
            {mensaje}
        </p>
        <p>
            {count}
        </p>
        <button onClick={()=> setount(count + 1)}>click</button>
        <input type="text"  onChange={(event)=>{
            setmensaje(event.target.value)
        }}/>
    </div>
  )
}

export default Effect