import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { postCountry, getCountries, getActivities, postActivity } from '../../actions/index';
import { useDispatch, useSelector } from "react-redux";
import './CreateActivity.css'


export function CreateActivity() {
    const dispatch = useDispatch()
    const history = useHistory()
    const countries = useSelector((state) => state.countries)



    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: []
    })


    // function handleCheck(e) {
    //     if (e.target.checked) {
    //         setInput({
    //             ...input,
    //             season: e.target.value
    //         })
    //     }
    // }


    function handleSelect(e) {
        setInput({
            ...input,
            country: [...input.country, e.target.value]
        })
    }




    function handleDelete(e) {
        setInput({
            ...input,
            country: input.country.filter(coun => coun !== e)
        })
    }

    const [errors, setErrors] = useState({})

    function validate(input) {
        let errors = {}

        if (!input.name) {
            errors.name = '*Coloque un nombre de Actividad'
        } else if (!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(input.name)) {
            errors.name = '*Coloque solo letras'
        }
        if (!input.duration) {
            errors.duration = '*Coloque cuantos minutos'
        } else if (!/^[0-9]+$/.test(input.duration)) {
            errors.duration = '*La duración máxima es 100'

        }
        if (!input.difficulty) {
            errors.difficulty = '*Seleccione la dificultad'
        } if (!input.season) {
            errors.season = '*Seleccione una estación'
        }
        return errors
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (Object.values(errors).length > 0) {
            alert('Debe completar todos los campos')
        }
        else if (input.name === "" || input.difficulty === "" || input.season === "" || input.duration === "") {
            alert('Debe completar todos los campos')
        }
        else {
            dispatch(postActivity(input))
            alert('Actividad creada!!!')
            setInput({

                name: "",
                difficulty: "",
                duration: "",
                season: "",
                country: []
            }

            )
            history.push('/home')
        }

    }


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // setErrors(validate({
        //     ...input,
        //     [e.target.name]: e.target.value
        // }))
    }

    function handleError(e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    // useEffect(() => {
    //     dispatch(getActivities())

    // }, [])


    return (
        <div className="create">
            <Link to='/home'>
                <button className="button">Volver</button>
            </Link>
            <h1>Crea una actividad</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Nombre :  </label>
                    <input className={errors.name && 'error'}
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    <p className=" error">{errors.name}</p>

                </div>

                <div>

                    <label  >Duración en minutos :</label>
                    <input onKeyPress={false} className={errors.duration && 'error'}
                        placeholder="1-100"

                        type="number" min="1" max="100"
                        value={input.duration}
                        name="duration"
                        onChange={(e) => handleChange(e)}
                    />
                    <p className=" error">{errors.duration}</p>
                </div>

                <div>
                    <label>Dificultad </label>
                    <select
                        className={errors.difficulty && 'error'}
                        name="difficulty"
                        onChange={(e) => handleChange(e)}
                        required>
                        <option selected value={'1'}></option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <p className=" error">{errors.difficulty}</p>
                </div>


                <div>
                    <label>Estacion:</label>

                    <label><input className={errors.season && 'error'}
                        type="radio"
                        name="season"
                        value="Winter"
                        onChange={(e) => handleChange(e)}
                    />Invierno</label>

                    <label><input className={errors.season && 'error'}
                        type="radio"
                        name="season"
                        value="Autumn"
                        onChange={(e) => handleChange(e)}
                    />Otoño</label>


                    <label><input className={errors.season && 'error'}
                        type="radio"
                        name="season"
                        value="Summer"
                        onChange={(e) => handleChange(e)}
                    />Verano</label>

                    <label><input className={errors.season && 'error'}
                        type="radio"
                        name="season"
                        value="Spring"
                        onChange={(e) => handleChange(e)}
                    />Primavera</label>

                    <p className=" error">{errors.season}</p>
                </div>
                <select onChange={(e) => handleSelect(e)}>

                    {countries.map((cou) => (
                        <option value={cou.id}>{cou.name}</option>
                    ))}

                </select>
                <p> {input.country.map(el => el + " , ")}</p>

                <button
                    // disabled={errors.name || errors.duration ||errors. difficulty || errors.season ? true:false}
                    className="button" type='submit' onClick={handleError}> Crear </button>

            </form>


            {input.country.map(el =>
                <div className="divCountry">
                    <p>{el}</p>
                    <button className="botonX" onClick={() => handleDelete(el)}>Eliminar</button>


                </div>

            )}

        </div>




    )


}




{/* {!errors.name && errors.duration && errors.difficulty} */ }


{/* onClick={handleSubmit} */ }
{/* {!errors.name && !errors.duration(<button onClick={handleSubmit} className="button" type='submit'> Crear </button>)} */ }
{/* alert('falta cmpletar datos') */ }