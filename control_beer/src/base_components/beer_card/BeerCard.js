import React, { useState } from 'react';
import { Card, Col } from "react-bootstrap";
import './BeerCard.css'
import {BeerInfoModal} from '../beer_info_modal/BeerInfoModal'
import { CardUpper } from './card_upper/CardUpper.js'
import { useLocation } from 'react-router-dom';

export function BeerCard(props) {

    const [showInfoModal, setShowInfoModal] = useState(false);
    const location = useLocation();

    return <>        
            
                <Col className="py-2 mt-2">  
                    <Card className='animate'>
                        <CardUpper location={location.pathname} beer={props.beer}/>
                        <div className='click-area' onClick={() => setShowInfoModal(true)}>
               
                            <Card.Img className='card-img' variant="bottom" src={props.beer.image_url} />
             
                            <Card.Body> 
                                <div style={{marginTop: '12px'}}>
                                 
                                    <Card.Title className='bg' > {  props.beer.name.length < 15 ? 
                                                                    props.beer.name : 
                                                                    props.beer.name.slice(0,15)}</Card.Title>

                                    <Card.Text > {   props.beer.tagline.length < 40 ?
                                                     props.beer.tagline :
                                                     props.beer.tagline.slice(0,40)} </Card.Text>
                                    
                                </div>
                            </Card.Body>
                        </div>
                    </Card>   
                </Col>

            {showInfoModal &&
                <BeerInfoModal  beer={props.beer} 
                                show={showInfoModal} 
                                onHide={() => setShowInfoModal(false)}/>}
            </>
}