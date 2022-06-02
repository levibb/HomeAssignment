import axios from "axios"

// this dictionary is used for setting the levels of coloring the ABV value on the beer card
export const AbvAmount = [  {'abv':10,'text':'danger'},
                            {'abv':5,'text':'dark'},
                            {'abv':0,'text':'success'}]


export const BASE_URL = 'https://api.punkapi.com/v2/beers'


export function GetData (optionalParams='') {
    console.log('get data function with optional path params: ',optionalParams)

    // the next condition check if there are any search parameters to use, and if so, it replace spaces with _ and creates the 
    // path params dictionary to send with API request
    let paramsDict = {}
    if (optionalParams) {
        paramsDict['food'] = optionalParams.replace(/ /g, '_')
    }

    axios.get(BASE_URL,{params: paramsDict})
        .then(response => {
            console.log('response from api: ',response)
            })
        .catch(error => {
        console.log('error ')
            if (error.response.status === 404) {
                console.log(404)
    }})
    }