/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal } from 'rsuite';
import { useModalState } from '../misc/custom-hooks';

const INITIAL_FORM ={
    name:'',
    Discription:''
}


const CreateRoomBtnModal = () => {
    const {isOpen,open,close} = useModalState();
    const [formValue,setFormValue] = useState();

    return (
        <div className="mt-1">
            <Button block color="green" onClick={open}>
                <Icon icon="creative"/> Create new chat room
            </Button>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header >
                    <Modal.Title> New Chat Room </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>Room Name</ControlLabel>
                            <FormControl name="name" palceholder="Enter Chat Room Name.."/>
                        </FormGroup>
                        <FormGroup>
                        <ControlLabel>Discription</ControlLabel>
                        <FormControl componentClass="textarea" row={5} 
                        name="Discription"
                        palceholder="Enter Chat Room Discription.."/>
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
