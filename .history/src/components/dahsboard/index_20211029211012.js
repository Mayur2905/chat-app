/* eslint-disable no-unused-vars */
import React from 'react'
import { Alert, Button, Divider, Drawer } from 'rsuite'
import { useProfile } from '../../context/profile.context'
import Editableinput from '../Editableinput';
import {database} from "../../misc/firebase"

const Dashboard = ({onSignOut}) => {
    const {profile} = useProfile();
    const onSave = async newData=>{
        const userNickNameRef = database.ref(`/profiles/${profile.uid}`).child('name');
        try{

            await userNickNameRef.set(newData);

            Alert.success('Nickname has been updated',4000);
        }catch(err){
            Alert.error(err.message,4000);
        }
    };


    return (
        <>
        <Drawer.Header>
            <Drawer.Title>
                Dashboard
            </Drawer.Title> 
        </Drawer.Header>
        <Drawer.Body>
        <h3>Hey,{profile.name}</h3>
        <Divider/>
        <Editableinput 
            name="nickname"
            initialValue = {profile.name}
            onSave={onSave}
            label ={<h6 className = "mb-2">Nickname</h6>}
        />
        </Drawer.Body>
        <Drawer.Footer>
            <Button block color='red' onClick={onSignOut} >
            Sign out
            </Button>
        </Drawer.Footer>
        </>
    )
}

export default Dashboard;
