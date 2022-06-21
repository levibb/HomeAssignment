import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useDispatch, useSelector } from "react-redux";
import { BeerCard } from "../base_components/beer_card/BeerCard"
import { BASE_URL, errorHandling, idsForApiRequest } from "../common/common";
import { LoadingSpinner } from "../base_components/spinner/LoadingSpinner";
import { getFavoriteData } from "../features/favoritesData";
import { setError } from "../features/error";

export function FavoriteBeers(props) {

    const [loading, setLoading] = useState(true);

    const favorites = useSelector((state) => state.favorites);
    const favoritesData = useSelector((state) => state.favoritesData);
    const dispatch = useDispatch()


    useEffect(() => {
        console.log('favorites',favorites)
        window.scrollTo(0, 0);

        axios.get(BASE_URL+'?ids='+idsForApiRequest(favorites)) // this function create a string of id's as request by API
        .then((response) => {
            setLoading(false)
            dispatch(getFavoriteData([...response.data]))
        })
        .catch(function (error) { 
            const errorResult = errorHandling(error)
                dispatch(setError(errorResult))
            })

    },[favorites]);

    return <>
            {loading ?  
                <LoadingSpinner/>      
                :
                <>
                    {favoritesData.length > 0 ?
                        <>
                        {favoritesData.map(beer => {return( <BeerCard key={beer.id} beer={beer}/> 
                            )})}
                        </>
                        :
                        <>
                            <hr/>
                            <hr/>
                            <h4 style={{color:'white',opacity:"80%"}} >No favorites beers to present yet</h4>
                        </>
                    }
                </>
            }       
            </>
}

