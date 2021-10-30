import React, { useState,useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Modal,Button, Alert } from 'rsuite';
import {useModalState} from '../../misc/custom-hooks';

const fileInputTypes =".png, .jpeg, .jpg";

const AvatarUplodBtn = () => {
    const { isOpen,open,close}=useModalState();
    const [img,setImg] = useState(null);
    const avatarEditorRef=

    const acceptedFileTypes =['image/png', 'image/jpeg','image/pjpg'];
    const isValidFile =(file) => acceptedFileTypes.includes(file.type);
    const onFileInputChange =(ev)=>{

        const currFiles=ev.target.files;

        if(currFiles.length === 1)
        {
            const file = currFiles[0];
            if(isValidFile(file)){
                setImg(file)
                open();
            }else{
                Alert.warning(`Wrong file type ${file.type}`,4000);
            }
        }

    } ;
    const onUploadClick=() =>{

    }

    return (<div className='mt-3 text-center'>
            <div>
                <label 
                htmlFor="avatar-upload" 
                className="d-block cursor-pointer padded"> 
                    Select new Avatar
                    <input id="avatar-upload" 
                    type="file" 
                    className="d-none" 
                    accept={fileInputTypes}
                    onChange ={onFileInputChange}
                    />                </label>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header><Modal.Title>
                    Adjust and upload new avatar
                    </Modal.Title></Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center h-100">
                    {img &&(
                    <AvatarEditor
                    image={img}
                    width={200}
                    height={200}
                    border={10}
                    borderRadius={100}
                    rotate={0}
                  />
                    )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button block appearance="ghost" onClick={onUploadClick}>
                        Upload New Avatar
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
};

export default AvatarUplodBtn
