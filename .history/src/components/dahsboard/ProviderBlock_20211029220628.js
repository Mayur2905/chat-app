/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Alert, Button, Icon, Tag } from 'rsuite';
import firebase from 'firebase/app';
import { auth } from '../../misc/firebase';

const ProviderBlock = () => {
    const [isConnected,setIsConnected] = useState({
        'google.com': auth.currentUser.providerData.some(
            data=>data.providerId === 'google.com'),

        'facebook.com': auth.currentUser.providerData.some(
            data=>data.providerId === 'facebook.com'),

    });
    const updateIsConnected = (providerId,value)=>{
        setIsConnected(p=>{
            return{
                ...p,
                [providerId]:value,
            };
        });
    }

    const unlink =async (providerId) =>{
        try{
            if(auth.currentUser.providerData.length ===1){
                throw new Error(`You con not disconnect from ${providerId}`)
            }
            await auth.currentUser.unlink(providerId)

            updateIsConnected(providerId,false);

        }catch(err){
            Alert.error(err.message, 4000);
            Alert.info(`Disconnected from ${providerId}`,4000);
        }
    }
    const unlinkFacebook =()=>{
        unlink('facebook.com');
    }
    const unlinkGoogle =()=>{
        unlink('google.com');
    }
    const link =(provider)=>{
        // new firebase.auth.FacebookAuthProvider()
    }

    const linkFacebook =()=>{
        link(new firebase.auth.FacebookAuthProvider())
    }
    const linkGoogle =()=>{
        link(new firebase.auth.GoogleAuthProvider())
    }

    return <div>
        {isConnected["google.com"] && (
        <Tag color='green' closable onClose={unlinkGoogle}>
            <Icon icon="google"/> Connected
        </Tag>)
        }
        {isConnected['facebook.com'] && (
        <Tag color='blue' closable onClose={unlinkFacebook}>
            <Icon icon="facebook"/> Connected
        </Tag>)
        }
            <div className='mt-2'>
                {!isConnected['google.com']&&(
                <Button block color='green' onClick={linkGoogle}>
                    <Icon icon="google"/> Link to Google
                </Button>
                )
                }
                {!isConnected['facebook.com']&&(
                <Button block color='blue'onClick={linkFacebook}>
                    <Icon icon="facebook"/> Link to Facebook
                </Button>
                )}
            </div>

         </div>
}

export default ProviderBlock
