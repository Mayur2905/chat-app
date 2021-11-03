import React from 'react'
import { Modal,Button } from 'rsuite'
import { useCurrentRoom } from '../../../context/current.room.context'
import { useModalState } from '../../../misc/custom-hooks'

const RoomInfoBtnModal = () => {
    const {isOpen,close,open} = useModalState()
    const description=  useCurrentRoom(v=>v.description)
    const name = useCurrentRoom(v=>v.name)
    return (
        <>
            <Button apperance ="link" className="px-0" >
                Room Information
            </Button>
            <Modal show={isOpen} onHide={close}>
            <Modal.Header>
                <Modal.Title>
                    About{name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className="mb-1">{description}</h6>
            </Modal.Body>
            <Modal.Footer>
                <Button block onClick={close}>Close</Button>
            </Modal.Footer>

            </Modal>
        </>
    )
}

export default RoomInfoBtnModal
