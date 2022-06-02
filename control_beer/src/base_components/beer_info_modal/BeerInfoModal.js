import { Button, Modal } from "react-bootstrap";

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
            {props.beer.name}
            {props.beer.description}
            
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  