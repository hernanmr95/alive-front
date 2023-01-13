 import Card from "./Card.js"
 import React, { useState, useEffect } from "react"

export default function Grid() { 

    const [data, setData] = useState([]);
    function bringData() {
        fetch('http://localhost:8000/data')
            .then(res => res.json())
            .then(data => {
                setData(data)})
            .catch((err) => console.log(err));
    }

    useEffect(() => { //que vuelva a ocurrir cuando SUBMIT
        bringData();
        console.log(data);
    }, [])

    const cards = data.map(ser => {
        return (
            <Card key={ser.nombre} nombre={ser.nombre} taxon={ser.taxon} habitat={ser.habitat} />
        )
    })
    return (
        <div className="grid-total">
            {cards}
        </div>
    )
 }
