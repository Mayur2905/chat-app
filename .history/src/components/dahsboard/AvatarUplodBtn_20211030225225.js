import React from 'react'
import { Modal,Button } from 'rsuite';

const fileInputTypes =".png, .jpeg, .jpg";

const AvatarUplodBtn = () => {
    const { isOpen,open,close}=useModalState()  

    return (<div className='mt-3 text-center'>
            <div>
                <label 
                htmlFor="avatar-upload" 
                className="d-block cursor-pointer padded"> 
                    Select new Avatar
                    <input id="avatar-upload" type="file" className="d-none" accept={fileInputTypes}/>
                </label>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header><Modal.Title>
                    Adjust and upload new avatar
                    </Modal.Title></Modal.Header>
                <Modal.Body>XXX</Modal.Body>
                <Modal.Footer>
                    <Button block appearance="ghost">
                        Upload New Avatar
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
};

export default AvatarUplodBtn
