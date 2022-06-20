import { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { ConfirmationModal } from "../confirmation_modal/ConfirmationModal"
import "./RemoveAllButton.css"

export function RemoveAllButton(props) {

    const favorites = useSelector((state) => state.favorites);
    const [showConfirmModal, setConfirmModal] = useState(false);

    return (
            <>
            {favorites.length > 0 &&
                <Button variant='dark' 
                onClick={() => setConfirmModal(true)}
                >remove all favorites</Button>}

            {showConfirmModal &&
            <ConfirmationModal onHide={() => setConfirmModal(false)} show={showConfirmModal}/>}
            </>
    )
    }