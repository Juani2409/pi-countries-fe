import React from "react";
import {Link} from 'react-router-dom';


export default function Card({ name, image, continents, id}){

    return(
        <Link to= {`/countries/${id}`}>
        <div className="container">
        <div className="card">
            <h3>{name}</h3>
            <h5>{continents}</h5>
            <img src={image} width="200px" height="250px"></img>
            </div>
        </div>
        </Link>
    )
}