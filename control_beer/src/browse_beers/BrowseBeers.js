import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BeerCard } from '../base_components/beer_card/BeerCard';
import { LoadingSpinner } from '../base_components/spinner/LoadingSpinner';
import { BASE_URL, RES_PER_PAGE, setOptionalParams  } from '../common/common';
import { getData, resetData } from '../features/beers';
import { FoodPairingFilter } from './food_pairing_filter/FoodPairingFilter';

export function BrowseBeers(props) {

    const beers = useSelector((state) => state.beers);
    const [loading, setLoading] = useState(true);
    const [next, setNext] = useState(true);
    const dispatch = useDispatch();
    const [page, setPage] = useState(0)
    const [searchValue, setSearchValue] = useState('');

    // this function send API request with page number and send it the beer's global state and add it to prev data.
    function loadData(){
        if ((next) && (page > 0)){ // page 0 return error - first page result is 1
            axios.get(BASE_URL+'?page='+page+'&per_page='+RES_PER_PAGE, 
            { params: setOptionalParams(searchValue)})
            .then((response) => {
                if (response.data.length === 0){
                    setNext(false)
                    console.log('end of data - no next')
                    {return}
                }
                dispatch(getData([...response.data]));
                setLoading(false)
                console.log('API called',response)
            });
        }}

    // this calculate the point where the user reached the bottom of page and need to load more data, by updating page value
    const handleScroll = (e) => {
        let top = e.target.documentElement.scrollTop
        let win = window.innerHeight
        let height = e.target.documentElement.scrollHeight

        if ((top + win + 1 >= height) && (next)){
            console.log('got to bottom of the page')
            setPage((prevState) => (prevState+1))
            setLoading(true)
            console.log(next) // error -doent change to false - check
            }
        }
    
    // this function reset the page to top and first page results only
    function firstLoad(){
        window.scrollTo(0, 0);
        dispatch(resetData());
        if (page===1){
            loadData() // trigger loadData without dependency on page change
        }
        else{
            setPage(1) // this will trigger the loadData function by useEffect callback
        }
        window.addEventListener('scroll',handleScroll)
    }

    // this is a callback for each time the result's page updating up, and it calls next data to load
    useEffect(() => {
        loadData()}
    ,[page])

    // this function runs each time the page is routed and presented, and it reset the beers data to first page only 
    useEffect(() => {
        firstLoad()
        },[]);

    return  <>
                <FoodPairingFilter  searchValue={searchValue} 
                                    setSearchValue={setSearchValue}
                                    firstLoad={firstLoad}
                                    loadData={loadData}/>

                {beers.map(beer => {return( <BeerCard key={beer.id} beer={beer} /> )})} 
                
                {loading && <LoadingSpinner/> }
            </>
  }