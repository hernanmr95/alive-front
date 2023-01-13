import React from "react";

export default function Card(ser){
    return (
      <div width={230} className="solo-card">
        <div className="card-header">
          <h3>{ser.nombre}</h3>
        </div>
        <p>{ser.taxon}</p>
        <p>{ser.habitat}</p>
      </div>
    );
  }