import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation, getActivities, filterCountriesByActivity } from "../../actions";
import { Link } from 'react-router-dom'
import Card from "../Card/card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/searchBar";
import './home.css';


export default function Home() {

    const dispatch = useDispatch()
    const allActivities = useSelector((state) => state.activities)
    const allCountries = useSelector((state) => state.countries)
    const [orden, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1) //pagina actual inicia en 1
    const [countriesPerPage, setCountriesPerPage] = useState(9)//cantidad de paises por pagina
    const indexOfLastCountries = currentPage * countriesPerPage //ultimo pais 
    const indexOfFirsCountries = indexOfLastCountries - countriesPerPage//
    const currentCountries = allCountries.slice(indexOfFirsCountries, indexOfLastCountries)//agarra un array y toma  una porcion(depende lo que le paso por parametro)


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getCountries())
    }
    function handleFilterName(e) {
        console.log(e)
        dispatch(filterCountriesByContinent(e.target.value))
    }

    function handleFilterAct(e) {
        console.log(e)
        dispatch(filterCountriesByActivity(e.target.value))
    }

    function handleSort(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleSortPob(e) {
        e.preventDefault()
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }



    return (


        <div className="home">




            <Link to='/activities'>
                <button className="boton">Crear Actividades</button>
            </Link>
            {/* <h1>Los paises</h1> */}
            <button className="boton2" onClick={e => { handleClick(e) }}>Cargar los Paises</button>

            <div>
                <div>
                    {/* <h2>Filtros</h2> */}
                    <SearchBar />
                    <select onChange={e => handleSort(e)} >
                        <option disabled selected>Alfabético</option>
                        <option value='asc' >A - Z</option>
                        <option value='desc'>Z - A</option>
                    </select>

                    <select onChange={e => handleSortPob(e)}>
                        <option disabled selected>Población</option>
                        <option value='ascPob'>Menor población</option>
                        <option value='descPob'>Mayor población</option>
                    </select>

                    <select onChange={e => handleFilterName(e)}>//volver a 0
                        <option disabled selected>Continente</option>
                        <option value="All">Todos</option>
                        <option value="South America">Sur-America</option>
                        <option value="North America">Norte-America</option>
                        <option value="Europe">Europa</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antartida</option>

                    </select>
                    <select onChange={e => handleFilterAct(e)}>
                        <option disabled selected>Actividades</option>
                        <option value="All"> Todas </option>



                        {allActivities.map((a) => (
                            <option value={a.id}>{a.name}</option>
                        ))}

                    </select>
                </div>

                <Paginado
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    paginado={paginado}


                />



                {currentCountries?.map((e) => {
                    return (<div className="style" >
                        <Link>
                            <Card name={e.name} 
                            image={e.flags} 
                            continents={e.continents} 
                            id={e.id} />
                        </Link>

                    </div>

                    )
                })}



            </div>

        </div>

    )



}