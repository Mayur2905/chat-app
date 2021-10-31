/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Icon, Modal } from 'rsuite';
import { useModalState } from '../misc/custom-hooks';

const CreateRoomBtnModal = () => {
    const {isOpen ,open,close} = useModalState()
    return (
        <div>
            <Button block color='green' onClick={open}>
                <Icon icon="creative"/> Create new chat room
            </Button>
            <Modal>
                <Modal.Header >
                    <Modal.Title> New chat room </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    xxx
                </Modal.Body>
                <Modal.Footer>
                   <Button block appearance='primary'>
                       Create new chat room</Button> 
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateRoomBtnModal;
