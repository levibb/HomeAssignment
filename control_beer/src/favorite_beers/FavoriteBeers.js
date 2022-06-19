import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeerCard } from "../base_components/beer_card/BeerCard"
import { FoodPairingFilter } from "../browse_beers/food_pairing_filter/FoodPairingFilter"
import { BASE_URL, idsForApiRequest } from "../common/common";

export function FavoriteBeers(props) {

    const [favoritesData, setFavoritesData] = useState([]);
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('favorites',favorites)
        axios.get(BASE_URL+'?ids='+idsForApiRequest(favorites))
        .then((response) => {
            setFavoritesData(response.data)
            console.log('API called with IDs for faavorites beers')
        });
    },[]);

    return <>
            <FoodPairingFilter/>
            {favoritesData.map(beer => {return( <BeerCard key={beer.id} beer={beer} /> )})}   
            </>
}

