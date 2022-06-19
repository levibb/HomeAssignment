import { Col, Container, Spinner } from "react-bootstrap";

export function LoadingSpinner(props) {
    return (              
            <Container>      
                    <Col>
                        <Spinner style={{margin:'auto'}} animation="border" variant="warning"/>
                    </Col>
                    <Col>
                        <h3 style={{color:'white'}}>Loading...</h3>
                    </Col>
            </Container>
    )}