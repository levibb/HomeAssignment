import { Container, Form, Row, Col, Button } from "react-bootstrap";
import './FoodPairingFilter.css'

export function FoodPairingFilter(props) {

    // this function store the searach value on the upper level component 
function handleOnChange(e){
    console.log('handleOnChange',e.currentTarget.value)
    props.setSearchValue(e.currentTarget.value) 
}

function handleReset(e){
    console.log('handleReset')
    props.setSearchValue('')
}

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
                                                  value={props.searchValue}
                                                  onChange={(e)=> handleOnChange(e)}/>
                                </Col>

                                <Col sm={1}>
                                    <Button variant='dark'       
                                            onClick={() => props.firstLoad()} //this funcion reset current results and eventualy loads the first page for search request
                                            >Search</Button>
                                </Col>

                                <Col>
                                    {props.searchValue &&
                                        <Button variant='danger' 
                                                style = {{opacity:'60%f'}}
                                                onClick={() => handleReset()}
                                                >Reset</Button>}
                                </Col>
                            </Row>
                    </Form.Group>
                </Form>
            </Container>
        </>
        )
}