import React from 'react'
import { Modal } from 'rsuite'
import { useCurrentRoom } from '../../../context/current.room.context'
import { useModalState } from '../../../misc/custom-hooks'

const RoomInfoBtnModal = () => {
    const {isOpen,open,close} = useModalState()
    const description=  useCurrentRoom(v=>v.description)
    const name = useCurrentRoom(v=>v.name)
    return (
        <div>
            <Button apperance ="link" className = >
                Room Information
            </Button>
            <Modal.Header>
                <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body><h6 className="mb-1">{description}</h6></Modal.Body>
            <Modal.Footer><Button block onClick={close}>Close</Button></Modal.Footer>


        </div>
    )
}

export default RoomInfoBtnModal
