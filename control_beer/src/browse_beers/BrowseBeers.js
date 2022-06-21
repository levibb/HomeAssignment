import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BeerCard } from '../base_components/beer_card/BeerCard';
import { LoadingSpinner } from '../base_components/spinner/LoadingSpinner';
import { BASE_URL, errorHandling, RES_PER_PAGE, setOptionalParams  } from '../common/common';
import { getData, resetData } from '../features/beers';
import { FoodPairingFilter } from './food_pairing_filter/FoodPairingFilter';
import { setError } from '../features/error';

export function BrowseBeers(props) {

    const beers = useSelector((state) => state.beers);
    const search = useSelector((state) => state.search.value);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(true);
    const [page, setPage] = useState(0)


    // this function send API request with page number and send it the beer's global state and add it to prev data.
    function loadData(){

        if ((nextPage) && (page > 0)){ // page 0 return error - first page result is 1
            setLoading(true)

            axios.get(BASE_URL+'?per_page='+RES_PER_PAGE+'&page='+page, 
                     { params:setOptionalParams(search)})

                 .then((response) => {
                     if (response.status === 200){
                        if (response.data.length === 0){
                            setNextPage(false)
                            console.log('end of data - no next',nextPage)
                            {return}
                        }
                        dispatch(getData([...response.data]));
                        setLoading(false)
                        console.log('API called',response)
                        } 
                    })
                .catch(function (error) { 
                    const errorResult = errorHandling(error)
                        dispatch(setError(errorResult))
                    })
        }
    }

    // this calculate the point where the user reached the bottom of page and need to load more data, by updating page value
    function handleScroll(e){
        let top = e.target.documentElement.scrollTop
        let win = window.innerHeight
        let height = e.target.documentElement.scrollHeight

        if (top + win + 1 >= height){
            setPage((prevState) => (prevState+1))
            console.log('got to bottom of the page')
            }
        }
    
    // this function reset the page to top and first page results only
    function firstLoad(){
        window.scrollTo(0, 0);
        setNextPage(true)
        dispatch(resetData());
        if (page===1){
            loadData() // trigger loadData without dependency on page change
        }else{
            setPage(1) // this will trigger the loadData function by useEffect callback
        }
    }

    // this calls each time theres a new data request and it add event listener to scroll, untill there is no more data to add
    useEffect(() => {
        if (nextPage) {
        window.addEventListener('scroll',handleScroll)
        console.log('added event listener to scroll',nextPage)

        // calls before will un mount
        return(() => { 
            setLoading(false)
            window.removeEventListener('scroll',handleScroll)
            console.log('inside return -removed event listener from scroll',nextPage) 
            })}
    }
    ,[nextPage])


    // this is a callback for each time the result's page updating up, and it calls next data to load
    useEffect(() => {
        loadData()}
    ,[page])

    // this function runs each time the page is routed and presented, and it reset the beers data to first page only 
    useEffect(() => {
        console.log('first time load - use effect')
        firstLoad() 
        },[]);

    return  <>
                <FoodPairingFilter firstLoad={firstLoad}/>
                {beers.map(beer => {return( <BeerCard key={beer.id} beer={beer} /> )})} 
                {loading && <LoadingSpinner/> }
            </>
  }