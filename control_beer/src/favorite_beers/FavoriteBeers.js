import axios from "axios";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { BeerCard } from "../base_components/beer_card/BeerCard"
import { BASE_URL, idsForApiRequest } from "../common/common";

export function FavoriteBeers(props) {

    const [favoritesData, setFavoritesData] = useState([]);
    const favorites = useSelector((state) => state.favorites);


    useEffect(() => {
        console.log('favorites',favorites)
        window.scrollTo(0, 0);
        axios.get(BASE_URL+'?ids='+idsForApiRequest(favorites))
        .then((response) => {
            setFavoritesData(response.data)
            console.log('API called with IDs for faavorites beers')
        });
    },[favorites]);

    return <>
            {favoritesData.map(beer => {return( <BeerCard key={beer.id} beer={beer}/> 
                )})}  

            </>
}

