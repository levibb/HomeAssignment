import { Button, Modal } from "react-bootstrap";

export function ConfirmationModal(props) {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
      
            <Modal.Body>
            <p>Are you sure?</p>
            </Modal.Body>
      
            <Modal.Footer>
            <Button variant="secondary">No</Button>
            <Button variant="primary">Yes</Button>
            </Modal.Footer>
      </Modal.Dialog>
    );
  }
  