import React, { useState,useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { Modal,Button, Alert } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import {useModalState} from '../../misc/custom-hooks';
import { database, storage } from '../../misc/firebase';

const fileInputTypes =".png, .jpeg, .jpg";

const AvatarUplodBtn = () => {
    const { isOpen,open,close}=useModalState();
    const {profile} = useProfile();
    const [img,setImg] = useState(null);
    const avatarEditorRef= useRef();

    const acceptedFileTypes =['image/png', 'image/jpeg','image/pjpg'];
    const isValidFile =(file) => acceptedFileTypes.includes(file.type);
    const getBlob = (canvas) =>{
        return new Promise((resolve,reject)=>{
            canvas.toBlob((blob)=>{
            if(blob) {
                resolve(blob);
            } else {
                reject(new Error('File process error'));
            }
        });

    });
    }
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
    const onUploadClick=async () =>{
            const canvas = avatarEditorRef.current.getImageScaledToCanvas();

            try{
              const blob = await getBlob(canvas);
              const avatarFileRef = storage.ref(`/profile/${profile.uid}`).child('avatar')
                const uploadAvatarResult = await avatarFileRef.put( blob,{
                    cacheControl : `public,max-age=${3600*34*3}`
                });

                const downloadUrl = await uploadAvatarResult.ref.getDownloadURL()
                const userAvatarRef = database.ref(`/profiles/${profile.uid}`).child('avatar');

                await userAvatarRef.set(downloadUrl);
                Alert.info('avatar has been uploaded',4000);
            }catch (err){
                Alert.error(err.message,4000)

            }
    };

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
                    ref={avatarEditorRef}
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
