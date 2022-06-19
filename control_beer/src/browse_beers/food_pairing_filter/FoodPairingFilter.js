import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import './FoodPairingFilter.css'
import { GetData } from "../../common/common";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../features/favorites";
import { useLocation } from "react-router-dom";

export function FoodPairingFilter(props) {

    const [searchValue, setSearchValue] = useState('');
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const location = useLocation();


    return (
        <>
            <Container className=' search_box pt-4'
                       style={{ position: 'sticky',
                                top: 55, 
                                zIndex: 100}}>
                <Form>
                    <Form.Group className="mb-3">
                            <Row>
                                <Col sm={2}>
                                    <Form.Label style={{color:'white'}}>Food Pairing Filter</Form.Label>
                                </Col>

                                <Col sm={4}>
                                    <Form.Control placeholder="Smoked chicken wings / Miso ramen / Garlic butter"
                                                value={searchValue}
                                                onChange={(e)=> setSearchValue(e.currentTarget.value,console.log(searchValue))}/>
                                </Col>

                                <Col sm={1}>
                                    <Button variant='dark' 
                                            onClick={() => GetData(searchValue)}
                                            >Search</Button>
                                </Col>

                                <Col>
                                    {searchValue &&
                                        <Button variant='danger' 
                                                style = {{opacity:'60%f'}}
                                                onClick={() => setSearchValue('',console.log(searchValue))}
                                                >Reset</Button>}
                                </Col>
                            </Row>
                    </Form.Group>
                </Form>
            </Container>
        </>
        )
}