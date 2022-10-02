import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../actions";
import './searchBar.css'


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameCountries(name))
    }

    return (
        <div className="search_container">
            <input className="search_bar" type="text"
                placeholder="Busca tu país..."
                onChange={(e) => handleInputChange(e)}
                
            />
            <button className="search_button" type='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>
    )



}