import { Badge, Container, Col, Row } from "react-bootstrap";
import { Star } from 'react-bootstrap-icons';
import { Rank } from "../rank/Rank";
import './CardUpper.css'
import { AbvAmount } from "../../../common/common";


export function CardUpper(props) {


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
                    <Star className='star'/>
                </Col>
            </Row>
        </Container>
}