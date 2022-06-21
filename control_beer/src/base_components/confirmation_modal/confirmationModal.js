import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../../features/favorites";

export function ConfirmationModal(props) {

    const dispatch = useDispatch()
    let navigate = useNavigate();

    function confirmAction(){
        dispatch(removeAll())
        props.onHide()
        navigate("/browse_beers")
    }
    return (
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Action Confirmation</Modal.Title>
        </Modal.Header>

        <Modal.Body>This action will remove all favorites beers. Are you sure ?</Modal.Body>

        <Modal.Footer>
          <Button size='xs' variant="danger" onClick={props.onHide}>
             No
          </Button>

          <Button size='xs' variant="dark" onClick={() => confirmAction()}>
             Yes
          </Button>
          
        </Modal.Footer>
      </Modal>
    );
  }
  