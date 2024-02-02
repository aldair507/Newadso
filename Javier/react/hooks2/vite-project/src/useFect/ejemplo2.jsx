import {useState,useEffect} from 'react'

const Ejemplo2 = () => {
    const [users, setuser]=useState([])

    useEffect(()=>{
        fetch('https://reqres.in/api/users')
        .then(data=> data.json())
        .then(json => setuser(json.data))
    },[])
  return (
    <div>ejemplo2
    <ul>
        {users.map(user=>(
            <li>{user.first_name} {user.last_name}</li>
        ))}
    </ul>
    </div>
  )
}

export default Ejemplo2