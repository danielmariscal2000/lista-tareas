import React from "react";
import style from "./tareas.module.css";
export default function Tareas(props) {
  function eliminar(index){
    return props.tareas.filter((e,i)=> i!==index);
}
  return (
    <div className={style.container}>
      {props.tareas.map((element, index) => {
        return (
          <div className={style.children} key={index}>
            {element}
            <button className={style.btnX} onClick={()=>{
                let newA=eliminar(index)
                props.setTareas(newA)
            }}>x</button>
          </div>
        );
      })}
    </div>
  );
}
