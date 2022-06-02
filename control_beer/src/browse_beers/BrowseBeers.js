import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { BeerCard } from '../base_components/beer_card/BeerCard';
import { GetData } from '../common/common';
import {beers} from '../temp.js'
import { FoodPairingFilter } from './food_pairing_filter/FoodPairingFilter';

export function BrowseBeers(props) {

      // Declare a new state variable, which we'll call "count"
    const [beersData, setBeersData] = useState([]);

    useEffect(() => {
      var data = GetData()
      console.log('data:',data)
      setBeersData(data)
    }
    );


    return  <>
                {/* <h3>Hello, {props.name}</h3>;
                <h4>The count state value is: {count}</h4>
                <button onClick={() => setCount(count + 2)}>update count</button> */}
                <FoodPairingFilter/>

                {beers.map(beer => {return( <BeerCard key={beer.id} beer={beer} /> )})}
            </>
  }