import axios from "axios";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { BeerCard } from "../base_components/beer_card/BeerCard"
import { BASE_URL, idsForApiRequest } from "../common/common";
import { LoadingSpinner } from "../base_components/spinner/LoadingSpinner";

export function FavoriteBeers(props) {

    const [favoritesData, setFavoritesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const favorites = useSelector((state) => state.favorites);


    useEffect(() => {
        console.log('favorites',favorites)
        window.scrollTo(0, 0);
        axios.get(BASE_URL+'?ids='+idsForApiRequest(favorites))
        .then((response) => {
            setLoading(false)
            setFavoritesData(response.data)
            console.log('API called with IDs for faavorites beers')
        });
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

