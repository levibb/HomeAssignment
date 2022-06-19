import { Badge, Container, Col, Row } from "react-bootstrap";
import { Star, StarFill } from 'react-bootstrap-icons';
import { Rank } from "../rank/Rank";
import './CardUpper.css'
import { AbvAmount } from "../../../common/common";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../../features/favorites";
import { useEffect, useState } from "react";


export function CardUpper(props) {

const dispatch = useDispatch();
const favorites = useSelector((state) => state.favorites);
const [isFavorite, setIsFavorite] = useState(false);


useEffect(() => {
    console.log('card upper use efect');
    if(favorites.some(elem => elem['beerId'] == props.beer.id)) {
        setIsFavorite(true);
    }
    if ((isFavorite) && (!favorites.some(elem => elem['beerId'] == props.beer.id))){
        dispatch(addToFavorites(props.beer.id))
    }
},[isFavorite]);

return <Container className='p-3'>
            <Row >
                <Col>

                    {props.beer.abv >= AbvAmount[0].abv &&   
                        <Badge  className='abv' bg={AbvAmount[0].text} > {props.beer.abv}</Badge>}

                    { AbvAmount[0].abv > props.beer.abv && props.beer.abv >= AbvAmount[1].abv &&   
                        <Badge  className='abv' bg={AbvAmount[1].text} > {props.beer.abv}</Badge>}

                    { AbvAmount[1].abv > props.beer.abv && props.beer.abv >= AbvAmount[2].abv &&   
                        <Badge  className='abv' bg={AbvAmount[2].text} > {props.beer.abv}</Badge>}
                </Col>
                <Col xs={5}>
                    {props.location === '/favorite' && 
                        <Rank/>
                        }
                </Col>
                <Col>
                    {!isFavorite && <Star onClick={() => setIsFavorite(true)}/>}
                    {isFavorite && <StarFill  onClick={() => setIsFavorite(false)}/>}
                </Col>
            </Row>
        </Container>
}