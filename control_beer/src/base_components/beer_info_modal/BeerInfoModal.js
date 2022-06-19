import { Button, Modal } from "react-bootstrap";
import { HandThumbsUpFill, LightbulbFill } from "react-bootstrap-icons";
import { InfoTable } from "./info_table/InfoTable";

export function BeerInfoModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.beer.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.beer.tagline}</h4>
          <p>
            {props.beer.name} - 
            {props.beer.description}
          </p>
          <InfoTable beer={props.beer}/>
          <div style={{backgroundColor:'rgba(233, 233, 200,0.6)'}}>
            <h6><HandThumbsUpFill/> Brewer Tip:</h6>
            <p>{props.beer.brewers_tips}</p>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  