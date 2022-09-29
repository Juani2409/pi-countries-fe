import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import './detail.css'


export default function Detail(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])
    const myCountry = useSelector((state) => state.detail)
    return (
        <div className="detail">
            {
                myCountry.length > 0 ?
                    <div>

                        <h1> País: {myCountry[0].name}</h1>
                        <img src={myCountry[0].flags} width="400px" height="250px" />
                        <h2> Continente: {myCountry[0].continents}</h2>
                        <h2> Código: {myCountry[0].id}</h2>
                        <h2> Capital: {myCountry[0].capital}</h2>
                        <h2> Subregión: {myCountry[0].subregion}</h2>
                        <h2> Área: {myCountry[0].area} km<sup>2</sup></h2>
                        <h2> Población: {myCountry[0].population}</h2>
                        <h2><ul className="ulActividades"> Actividades:

                            {myCountry[0].Activities.map(el => <li>{el.name}</li>)}

                        </ul></h2>

                    </div> :


                    <p>Loading...</p>
            }

            <Link to='/home'>
                <button className="button">Volver</button>
            </Link>

        </div>
    )
}