import { Table } from "react-bootstrap";

export function InfoTable(props) {
    return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Food Pairing</th>
                    </tr>
                </thead>
                <tbody>
                    {props.beer.food_pairing.map((pair,index) => {return( <tr key={index}><td >{pair}</td></tr> )})}
                </tbody>
            </Table>
    )
}
