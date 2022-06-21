import { Badge, Container, Col, Row, Button } from "react-bootstrap";
import { Star, StarFill } from 'react-bootstrap-icons';
import { Rank } from "../rank/Rank";
import './CardUpper.css'
import { AbvAmount } from "../../../common/common";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../../features/favorites";
import { useEffect, useState } from "react";


export function CardUpper(props) {

const dispatch = useDispatch();
const favorites = useSelector((state) => state.favorites);
const [isFavorite, setIsFavorite] = useState(false);
const [confirm, setConfirm] = useState(false);

// gets the index of the beer on the favorite array state. lookup by beer Id
const idx = favorites.findIndex(checkBeer);

function checkBeer(beer) {
    return beer.beerId === props.beer.id;
}

useEffect(() => {
    // console.log('card upper use efect',props.beer.id);
    if(idx !== -1) {
        setIsFavorite(true);
    }
},[]);

function handleAdd() {
    dispatch(addToFavorites(props.beer.id))
    setIsFavorite(true);
};

function handleRemove() {
    dispatch(removeFromFavorites(props.beer.id))
    setConfirm(false)
    setIsFavorite(false);
};

return <> 
        <Container className='p-3'>
            {!confirm ?
                <Row >
                    <Col>

                        {props.beer.abv >= AbvAmount[0].abv &&   
                            <Badge  className='abv' bg={AbvAmount[0].text} > {props.beer.abv.toFixed(1)} %</Badge>}

                        { AbvAmount[0].abv > props.beer.abv && props.beer.abv >= AbvAmount[1].abv &&   
                            <Badge  className='abv' bg={AbvAmount[1].text} > {props.beer.abv.toFixed(1)} %</Badge>}

                        { AbvAmount[1].abv > props.beer.abv && props.beer.abv >= AbvAmount[2].abv &&   
                            <Badge  className='abv' bg={AbvAmount[2].text} > {props.beer.abv.toFixed(1)} %</Badge>}
                    </Col>

                    <Col xs={5}>

                        {/* this condintion check if this is a favorite beer, so rank props wont be undefined */}
                        {idx !== -1 &&
                            <>
                                {props.location === '/favorite' && 
                                    <Rank beerId={props.beer.id} rank={favorites[idx].rank}/>
                                }
                            </>
                        }
                    </Col>

                    <Col>
                        {!isFavorite && <Star onClick={() => handleAdd()}/>}
                        {isFavorite && <StarFill  style={{color:'gold'}} onClick={() => setConfirm(true)}/>}
                    </Col>
                </Row>
                :
                <Row>
                    <Col>
                            <h6>Remove?</h6>
                    </Col>
                    <Col>
                            <Button size="sm" variant="dark" onClick={() => handleRemove()}>Yes</Button>
                            <Button size="sm" variant="danger" onClick={() => setConfirm(false)}>No</Button>
                    </Col>
                </Row>}
            </Container>

        </>
}

