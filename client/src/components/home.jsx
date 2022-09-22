import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation} from "../actions";
import {Link} from 'react-router-dom'
import Card from "./card";
import Paginado from "./Paginado";

export default function Home(){

const dispatch = useDispatch()
const allCountries = useSelector((state) => state.countries)
const [orden, setOrden] = useState('')
const [currentPage, setCurrentPage] = useState(1) //pagina actual inicia en 1
const [countriesPerPage, setCountriesPerPage] = useState(9)//cantidad de paises por pagina
const indexOfLastCountries = currentPage * countriesPerPage //ultimo pais 
const indexOfFirsCountries = indexOfLastCountries - countriesPerPage//
const currentCountries = allCountries.slice(indexOfFirsCountries,indexOfLastCountries)//agarra un array y toma  una porcion(depende lo que le paso por parametro)


const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}


useEffect(()=>{
    dispatch(getCountries())
},[dispatch])

function handleClick(e){
    e.preventDefault()
    dispatch(getCountries())
}
function handleFilterName(e){
    console.log(e)
    dispatch(filterCountriesByContinent(e.target.value))
}

function handleSort(e){
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
}

function handleSortPob(e){
    e.preventDefault()
    dispatch(orderByPopulation(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
}



return(
<div>

    {/* creo que aca iba /activities */}
    <Link to= '/activities'>crear activities</Link>
    <h1>Los paises</h1>
    <button onClick= {e =>{handleClick(e)}}>Volver a cargar los paises</button>
<div>
    <select onChange={e => handleSort(e)}>
        <option value= 'asc'>A - Z</option>
        <option value= 'desc'>Z - A</option>
    </select>

    <select onChange={e => handleSortPob(e)}>
        <option value= 'ascPob'>Menor poblacion</option>
        <option value= 'descPob'>Mayor poblacion</option>
    </select>

    <select onChange={e => handleFilterName(e)}>  
        <option value= "All">Continentes</option>
        <option value= "South America">Sur-America</option>
        <option value="North America">Norte-America</option>
        <option value="Europe">Europa</option>
        <option value="Africa">Africa</option>
        <option value= "Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value= "Antarctica">Antartida</option>
      
    </select>
<select>
<option value= "activities">Actividades</option>
    
</select>

<Paginado
countriesPerPage={countriesPerPage}
allCountries= {allCountries.length}
paginado = {paginado}


/>



{currentCountries?.map( (e) =>{
return (<div>
    <Link to= {"/home"}>
        <Card name={e.name} image={e.flags} continents= {e.continents} id={e.id}/>
    </Link>

</div>

)})}



</div>

</div>

)



}