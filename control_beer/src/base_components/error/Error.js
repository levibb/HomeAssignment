import React from 'react'
import { Card } from "react-bootstrap";
import { useSelector } from 'react-redux';
import './Error.css'

export function Error(props) {

    const error = useSelector((state) => state.error);

    return (
        <div style={{alignItems:'center'}} className='flex-box '>
            <Card className='alert middle vertical-center large-font'>
                <Card.Header className='transparent'>Hold on... Something went wrong!</Card.Header>
                <Card.Body className='flex-box'>
                    <Card.Title> But dont worry - our beers still waiting for you!</Card.Title>
                    <br/>
                    <Card.Text> {error.value} {error.message}</Card.Text>
                </Card.Body>
            </Card> 
        </div>   
    )}