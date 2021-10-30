import React, { useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Modal,Button, Alert } from 'rsuite';
import {useModalState} from '../../misc/custom-hooks';

const fileInputTypes =".png, .jpeg, .jpg";

const AvatarUplodBtn = () => {
    const { isOpen,open,close}=useModalState();
    const [img,setImg] = useState(null);

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
                    {img &&
                <AvatarEditor
                  image="http://example.com/initialimage.jpg"
                  width={250}
                  height={250}
                  border={50}
                  color={[255, 255, 255, 0.6]} // RGBA
                  scale={1.2}
                  rotate={0}
                />
                    }
                </Modal.Body>
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
