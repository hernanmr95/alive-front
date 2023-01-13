import React from "react"
import Grid from './Grid.js'

export default function Form() { 
  const handleSubmit = e => {
    e.preventDefault()
    let nombre = document.getElementById("nombre").value
    let taxon = document.getElementById("taxon").value
    let habitat = document.getElementById("habitat").value
    let pass = document.getElementById("pass").value
    if (pass === "hernanmr95") { //authentication method
      if (nombre !== "" && taxon !== "" && habitat !== "") {
        let newCard = { "nombre": nombre, "taxon": taxon, "habitat": habitat }
        console.log(newCard)

        async function sendData() {
          await fetch('http://localhost:8000/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCard) })
          .then (() => {
            console.log("Adding data...")
          })
        }

        sendData()

        document.getElementById("nombre").value = ""
        document.getElementById("taxon").value = ""
        document.getElementById("habitat").value = ""

        //Y TRAERLO AUTOMATICAMENTE AL FRONT: llamar funcion de Grid o Grid entero
        Grid();

      
      } else { 
        alert("Rellena todos los campos, y sin faltas de ortografia") 
      }
    } else {
      alert("Wrong password!")
    }
  }
  return(
    <div className="form">
      <div className="form-content">
        <h2 className="form-title">Nueva tarjeta...</h2>
        <form>
          <input placeholder="Nombre" className="inputs-form" id="nombre" type="text"/><br/>
          <input placeholder="Grupo" className="inputs-form" id="taxon" type="text"/><br/>
          <select className="inputs-form" id="habitat"> 
            <option>Bosque</option>
            <option>Rio</option>
            <option>Desierto</option>
            <option>Oceano</option>
            <option>Selva</option>
            <option>Pradera</option>
            <option>Alta Montaña</option>
          </select>       
          <br/><button onClick={handleSubmit} className="submit">C R E A R</button>
        </form>
      </div>
    </div>
    ) 
}





//hacer que al submit, el valor de value en cada input id entre en una variable
//si no estan los tres campos rellenos, alert("Por favor, rellena todos los campos")
//si si, se añade un objeto al array seres.json, con las variables