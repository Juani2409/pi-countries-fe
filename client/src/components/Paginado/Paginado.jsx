import React from "react";
import './Paginado.css'

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
    const pageNumber = []

    for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage) - 1; i++) {
        pageNumber.push(i + 1)
    }


    return (
        //aca se renderizan los numeritos de las paginas
        <nav>
            <ul className="paginado">
                {pageNumber && pageNumber.map(number => (
                    <button className="number" key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </button>

                ))}
            </ul>
        </nav>

    )


}