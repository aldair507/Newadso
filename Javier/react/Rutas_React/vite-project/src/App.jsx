import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { Admin, Analitics, Dashboard, Home, Landing } from './pages'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import { ProtectRoute } from './components/ProtectRoute'

const App = () => {
  
  const [user, setUser]= useState(null)

  const Login=()=>{
    // request login
    setUser({
      id:1,
      name:'aldair',
      Permissions:[],
      roles:['admin']
    })
  }

  const Logout=()=>setUser(null)

  return (
    <BrowserRouter>

    <Navigation/>
    {
    user ? (
      <button onClick={Logout}>Logout</button>

    ):(
      <button onClick={Login}>Login</button>
    )}
      <Routes>
      
      <Route index element={<Landing/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
      <Route element={<ProtectRoute isAllowed={!!user}/>}>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Route>
     
      <Route path='/analitycs' element={
        <ProtectRoute  isAllowed={!!user && user.Permissions.includes('analize')} 
        redirectTo='/home'>
          <Analitics/>
        </ProtectRoute>
      }></Route>
      <Route path='/admin' element={<ProtectRoute isAllowed={!!user && user.roles.includes('admin')}
      redirectTo='/home'>
        <Admin/>
      </ProtectRoute>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

function Navigation(){

  return <nav>
    <ul>
      <li>
        <Link to='/landing'>Landing</Link>
      </li>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/analitycs'>Analitycs</Link>
      </li>
      <li>
        <Link to='/admin'>Admin</Link>
      </li>
    </ul>
    
  </nav>
}

export default App