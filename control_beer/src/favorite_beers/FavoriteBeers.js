import { BeerCard } from "../base_components/beer_card/BeerCard"
import {beers} from '../temp.js'

export function FavoriteBeers(props) {
    return <>
            {beers.map(beer => {return( <BeerCard beer={beer} /> )})}   
            </>
}