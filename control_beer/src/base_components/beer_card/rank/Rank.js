import { Form } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { updateRank } from "../../../features/favorites";
import "./Rank.css"

export function Rank(props) {

    const dispatch = useDispatch()

    function handleChooseRank(e){
        console.log('event',e.target.value)
        dispatch(updateRank({   beerId : props.beerId,
                                rank : e.target.value
                            }))
    }

    return (
            <Form.Select onChange={(e) => handleChooseRank(e)} value={props.rank} className="rank_box">
                <option value="">rank</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
    )
    }