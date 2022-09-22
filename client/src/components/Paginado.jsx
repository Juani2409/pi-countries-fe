import React from "react";


export default function Paginado({countriesPerPage, allCountries, paginado}){
const pageNumber= []

for (let i=0; i<=Math.ceil(allCountries/countriesPerPage); i++){
    pageNumber.push(i+1)
}


return(
//aca se renderizan los numeritos de las paginas
<nav>
    <ul className="paginado">
        {pageNumber && pageNumber.map(number =>(
            <li className="number" key={number}>
            <a onClick={() => paginado(number)}>{number}</a>
            </li>

        ))}
    </ul>
</nav>

)


}