

import UserContext from "../conte/UserContext"
import Moreinfo from "../components/Moreinfo"
const contexto = () => {
    const userData={
        name:"aldair",
        years: 19
    }
  return (
    <UserContext.Provider value={userData} >
           <div>contexto</div>
           <Moreinfo/>
    </UserContext.Provider>
 
  )
}

export default contexto