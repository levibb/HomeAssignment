import { Container, Form, Row, Col } from "react-bootstrap";
import './FoodPairingFilter.css'

export function FoodPairingFilter(props) {
    return (
        <>
            <Container className=' search_box pt-4'
                       style={{ position: 'sticky',
                                top: 50, 
                                zIndex: 100}}>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col sm={2}>
                                <Form.Label style={{color:'white'}}>Food Pairing Filter</Form.Label>
                            </Col>
                            <Col sm={4}>
                                <Form.Control placeholder="Smoked chicken wings / Miso ramen / Garlic butter"/>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        </>
        )
}