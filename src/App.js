import { useState } from 'react';
import Nav from './components/Nav/Nav.jsx';
import Tareas from "./components/Tareas/Tareas";


function App() {
   const [tareas,setTareas]=useState([]);

  return (
    <div>
       <Nav setTareas={setTareas} tareas={tareas}></Nav>
       <Tareas tareas={tareas} setTareas={setTareas}></Tareas>
    </div>
  )
}
export default App;
