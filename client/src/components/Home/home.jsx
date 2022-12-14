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
        window.location.reload()
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


    
        let juani= [...new Set(allActivities.map(a => a.name ))]//solo permite que se cree una vex el name 
        

    return (

        <div className="full">
            
            <p className="header">Bienvenidos a Countries</p>
            <div className="Barradetareas">
            <Link to='/activities'>
                <button className="boton">Crear Actividades</button>
            </Link>
            {/* <h1>Los paises</h1> */}
            <SearchBar />
            <button className="boton" onClick={e => { handleClick(e) }}>Refrescar</button>
                        </div>
            <div>
                <div className="filter_bar">
                    {/* <h2>Filtros</h2> */}

                      <div className="filtros">                    
                    <select className="filtros" onChange={e => handleSort(e)} >
                        <option disabled selected>Alfab??tico</option>
                        <option value='asc' >A - Z</option>
                        <option value='desc'>Z - A</option>
                    </select>

                    <select className="filtros" onChange={e => handleSortPob(e)}>
                        <option disabled selected>Poblaci??n</option>
                        <option value='ascPob'>Menor poblaci??n</option>
                        <option value='descPob'>Mayor poblaci??n</option>
                    </select>

                    <select className="filtros" onChange={e => handleFilterName(e)}>//volver a 0
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
                    <select className="filtros" onChange={e => handleFilterAct(e)}>
                        <option disabled selected>Actividades</option>
                        <option value="All"> Todas </option>


                        {juani.map((a) => (
                            <option value={a}>{a}</option>
                        ))}







                    </select>
                    </div>
                </div>

                <Paginado
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    paginado={paginado}


                />



                {currentCountries?.map((e) => {
                    return (<div className="style">
                        <Link style={{textDecoration: 'none'}}>
                            <Card 
                            name={e.name} 
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