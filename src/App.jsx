
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Read from './Components/Read'
import Pop from './Components/Pop'

function App() {
 

  return (
 <>

<Navbar/>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Read' element={<Read/>}/>
 

 </Routes>
 </>
  )
}

export default App
