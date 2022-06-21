import React from 'react'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { changeValue, resetValue } from '../../features/search';
import './FoodPairingFilter.css'

export function FoodPairingFilter(props) {

    const search = useSelector((state) => state.search.value);
    const dispatch = useDispatch();

    return (
        <>
            <Container className=' search_box pt-4'
                       style={{ position: 'sticky', top: 55, zIndex: 100}}>
                <Form>
                    <Form.Group className="mb-3">
                            <Row>
                                <Col sm={2}>
                                    <Form.Label style={{color:'white'}}>Food Pairing Filter</Form.Label>
                                </Col>

                                <Col sm={4}>
                                    <Form.Control placeholder="Smoked chicken wings / Miso ramen / Garlic butter"
                                                  value={search}
                                                  onChange={(e) => dispatch(changeValue(e.target.value))}/>
                                </Col>

                                <Col sm={1}>
                                    <Button variant='dark'       
                                            onClick={() => props.firstLoad()} //this funcion reset current results and eventualy loads the first page for search request
                                            >Search</Button>
                                </Col>

                                <Col>
                                    {search &&
                                        <Button variant='danger' 
                                                style = {{opacity:'60%f'}}
                                                onClick={() => dispatch(resetValue())}
                                                >Reset</Button>}
                                </Col>
                            </Row>
                    </Form.Group>
                </Form>
            </Container>
        </>
        )
}