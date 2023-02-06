import React from 'react'
import { useState } from 'react';
import style from "./nav.module.css";
export default function Nav(props) {
    const [input,setInput]=useState("");
const handleInputChange=(e)=>{
     setInput(e.target.value);   
   }
const aniadir=()=>{
    props.setTareas([
        ...props.tareas,
        input
    ]);
    setInput("");
}   
    return (
    <div className={style.nav}>
            <input className={style.input} value={input} type="text" placeholder='Ingrese su Tarea' onChange={handleInputChange} />
            <button className={style.btn} onClick={aniadir}>Agregar</button>
    </div>
  )
}
