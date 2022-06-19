import { Form } from "react-bootstrap";
import "./Rank.css"

export function Rank(props) {

    return (
            <Form.Select className="rank_box">
                <option defaultValue="">rank</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
    )
    }