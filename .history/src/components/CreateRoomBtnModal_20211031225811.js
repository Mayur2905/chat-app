/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal } from 'rsuite';
import { useModalState } from '../misc/custom-hooks';

const CreateRoomBtnModal = () => {
    const {isOpen,open,close} = useModalState();

    return (
        <div className="mt-1">
            <Button block color="green" onClick={open}>
                <Icon icon="creative"/> Create new chat room
            </Button>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header >
                    <Modal.Title> New chat room </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>Room Name</ControlLabel>
                            <FormControl name="name" palceholder="Enter Chat Room Name.."/>
                        </FormGroup>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                   <Button block appearance='primary'>
                       Create new chat room
                    </Button> 
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CreateRoomBtnModal;
