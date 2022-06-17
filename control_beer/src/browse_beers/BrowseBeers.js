import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeerCard } from '../base_components/beer_card/BeerCard';
import { BASE_URL } from '../common/common';
import { getData } from '../features/beers';
import { FoodPairingFilter } from './food_pairing_filter/FoodPairingFilter';

// export function GetData (optionalParams='') {
//     console.log('get data function with optional path params: ',optionalParams)

//     // the next condition check if there are any search parameters to use, and if so, it replace spaces with _ and creates the 
//     // path params dictionary to send with API request
//     let paramsDict = {}
//     if (optionalParams) {
//         paramsDict['food'] = optionalParams.replace(/ /g, '_')
//     }

//     axios.get(BASE_URL,{params: paramsDict})
//         .then(response => {
//             console.log('response from api: ',response)
//             })
//         .catch(error => {
//         console.log('error ')
//             if (error.response.status === 404) {
//                 console.log(404)
//     }})
//     }

export function BrowseBeers(props) {

    const beers = useSelector((state) => state.beers.value);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(BASE_URL)
        .then((response) => {
            dispatch(getData([...response.data]));
            console.log('API called')
        });
    },[]);

    return  <>
                <FoodPairingFilter/>
                {beers.map(beer => {return( <BeerCard key={beer.id} beer={beer} /> )})}
            </>
  }