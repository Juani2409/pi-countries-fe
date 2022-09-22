
const intialState = {
    countries: [],
    allCountry: []
}

function rootReducer(state = intialState, action) {

    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountry: action.payload
            }


        case 'FILTER_BY_CONTINENT':
            {
                const allCountries = state.allCountry
                const statusFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continents === action.payload)

                return {
                    ...state,
                    countries: statusFiltered
                }
            }


        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0
                }) :


                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0
                })

            return {
                ...state,
                countries: sortedArr
            }

        case 'ORDER_BY_POPULATION':
            let sortedPob = action.payload === 'ascPob' ?
                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0
                }) :


                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
                        return 1;
                    }
                    return 0
                })

            return {
                ...state,
                countries: sortedPob
            }


        //          case 'FILTER_CREATED':
        //             const allCountries = state.allCountries
        //             const createdFilter = action.payload === 'activities' ? allCountries.filter(el => el.createdInDb) : allCountries.filter(el => !el.createdInDb)
        //    return{
        //     ...state,
        //     countries: action.payload === 'activities' state.allCountries
        //    }
        default:
            return state;
    }




}

export default rootReducer;