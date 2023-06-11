import './App.css'
import { Routes, Route} from 'react-router-dom'
import Apple from './pages/ApplePages/Apple'
import Smorodina from './pages/Smorodina/Smorodina'
import Layout from './component/layout'
import Abrikos from './pages/Abrikos/Abrikos'
import Project from './pages/Project/Project'
import Shop from './pages/Shop/Shop'
import Malina from './pages/Malina/Malina'
import Home from './pages/Home/Home'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
              <Route index element={<Home/>}/>
              <Route path='about' element={<Apple/>} />
              <Route path='posts' element={<Smorodina/>} />
              <Route path='malina' element={<Malina/>} />
              <Route path='abrikos' element={<Abrikos/>} />
              <Route path='project' element={<Project/>} />
              <Route path='shop' element={<Shop/>} />
        </Route>
      </Routes>
    </>
  )  
}

export default App