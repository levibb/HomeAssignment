import { Badge, Container, Col, Row, Button } from "react-bootstrap";
import { Star, StarFill } from 'react-bootstrap-icons';
import { Rank } from "../rank/Rank";
import './CardUpper.css'
import { AbvAmount } from "../../../common/common";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../../features/favorites";
import { useEffect, useState } from "react";
import { ConfirmationModal } from "../../confirmation_modal/ConfirmationModal";


export function CardUpper(props) {

const dispatch = useDispatch();
const favorites = useSelector((state) => state.favorites);
const [isFavorite, setIsFavorite] = useState(false);
const [confirm, setConfirm] = useState(false);


useEffect(() => {
    console.log('card upper use efect');
    if(favorites.some(elem => elem['beerId'] == props.beer.id)) {
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

