
    // this dictionary is used for setting the levels of coloring the ABV (Alcohol By Volume) value on the beer card
export const AbvAmount = [  {'abv':10,'text':'danger'},
                            {'abv':5,'text':'dark'},
                            {'abv':0,'text':'success'}]

export const RES_PER_PAGE = 15

export const BASE_URL = 'https://api.punkapi.com/v2/beers'

export function setOptionalParams (optionalParams='') {

    // the next condition check if there are any search parameters to use, and if so, it replace spaces with _ and creates the 
    // path params dictionary to send with API request
    let paramsDict = {}
    if (optionalParams) {
        paramsDict['food'] = optionalParams.replace(/ /g, '_')
    }
    {return(paramsDict)}
}
    
    // this function create a string for API request with specific beer ids.
export function idsForApiRequest(idsList){
    let idString = ''
    for (let i = 0; i < idsList.length; i++) {
        idString = idString + idsList[i]['beerId'] + '|' 
        }
        console.log('result:', idString)
        return idString
    }

    // this function handle the errors which could happen when trying to send API request and it creates the response
    // for the error global state, which would be presented as a messege to the user.
export function errorHandling (error){
        if (error.response) {
            // Request made and server responded
            console.log('error',error);
            return({value: 400, message : error.message })

        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            return({value: 500, message : 'No response from server' })
            
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            return({value: 400, message : error.message })
        }
        }