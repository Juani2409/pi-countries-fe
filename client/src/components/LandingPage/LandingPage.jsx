import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'



export default function LandingPage() {
    return (
        <div className="full">
            <h1>Bienvenidos a Countries</h1>
            <Link to='/home'>
                <button className="button">Explorar</button>
            </Link>  
            {/* <p className='info'> Esta aplicación contine información muy importante de todos los países y podrás incluirle actividades</p> */}
            <div className='Lnombre'> <h2> Por :  Juan Ignacio Grodz</h2></div>
        </div>
       
    )
}