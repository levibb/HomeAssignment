import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { BeerCard } from '../base_components/beer_card/BeerCard';
import {beers} from '../temp.js'
import { FoodPairingFilter } from './food_pairing_filter/FoodPairingFilter';

export function BrowseBeers(props) {

      // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title = `You clicked ${count} times`;
      });

    return  <>
                {/* <h3>Hello, {props.name}</h3>;
                <h4>The count state value is: {count}</h4>
                <button onClick={() => setCount(count + 2)}>update count</button> */}
                <FoodPairingFilter/>

                {beers.map(beer => {return( <BeerCard beer={beer} /> )})}
            </>
  }