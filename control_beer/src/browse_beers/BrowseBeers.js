import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeerCard } from '../base_components/beer_card/BeerCard';
import { LoadingSpinner } from '../base_components/spinner/LoadingSpinner';
import { BASE_URL } from '../common/common';
import { getData, resetData } from '../features/beers';
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

    const beers = useSelector((state) => state.beers);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)

    // this function send API request with page number and send it the beer's global state and add it to prev data.
    function loadData(){
        axios.get(BASE_URL+'?page='+page+'&per_page=12')
        .then((response) => {
            dispatch(getData([...response.data]));
            setLoading(false)
            console.log('API called',response)
        });
    }

    // this calculate the point where the user reached the bottom of page and need to load more data, by updating page value
    const handleScroll = (e) => {
        let top = e.target.documentElement.scrollTop
        let win = window.innerHeight
        let height = e.target.documentElement.scrollHeight
        if (top + win + 1 >= height){
            console.log('got to bottom of the page')
            setPage((prevState) => (prevState+1))
            setLoading(true);
            }
        }

    // this is a callback for each time the result's page updating up, and it calls next data to load
    useEffect(() => {
        loadData()}
    ,[page])

    // this function runs each time the page is routed and presented, and it reset the beers data to first page only 
    useEffect(() => {
        dispatch(resetData());
        window.addEventListener('scroll',handleScroll)
        },[]);

    return  <>
                <FoodPairingFilter/>
                {beers.map(beer => {return( <BeerCard key={beer.id} beer={beer} /> )})} 
                {loading && <LoadingSpinner/> }
            </>
  }