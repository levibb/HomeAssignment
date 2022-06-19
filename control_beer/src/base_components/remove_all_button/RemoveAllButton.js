import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { removeAll } from "../../features/favorites"
import "./RemoveAllButton.css"

export function RemoveAllButton(props) {

    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites);

    function resetFavorites(){
        dispatch(removeAll())
    }

    return (
            <>
            {favorites.length > 0 &&
                <Button variant='dark' 
                onClick={() => resetFavorites()}
                >remove all favorites</Button>}
            </>
    )
    }