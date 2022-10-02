import React from "react";
import { Link } from 'react-router-dom';
import "./card.css";

export default function Card({ name, image, continents, id }) {

    return (
        <Link to={`/countries/${id}`} style={{textDecoration: 'none'}} >
            <div className="card" >
                <div >
                    <h2 className="text" >{name}</h2>
                    <h3>{continents}</h3>
                    <img src={image} width="200px" height="150px" alt='Bandera' ></img>
                </div>
            </div>
        </Link>
    )
}