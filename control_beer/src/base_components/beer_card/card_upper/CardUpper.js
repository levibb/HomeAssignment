import { Badge, Container, Col, Row } from "react-bootstrap";
import { Star } from 'react-bootstrap-icons';
import { Rank } from "../rank/Rank";
import './CardUpper.css'
import { AbvAmount } from "../../../common/common";
import { useEffect, useState } from "react";


export function CardUpper(props) {

    // this state and use effect function check the abv value of the beer and compare it with 3 levels of values, 
    // to choose the right color for the badge. for example: 11% is red, 4% is green
    const [abvText, setAbvText] = useState('success');

    useEffect(() => {
        for (let i = 0; i < AbvAmount.length; i++) {
            if (props.beer.abv >= AbvAmount[i].abv){
                setAbvText(AbvAmount[i].text)
                break;
            }
          }
      });

return <Container className='p-3'>
            <Row >
                <Col>
                    <Badge className='abv' bg={abvText}>{props.beer.abv}</Badge>
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