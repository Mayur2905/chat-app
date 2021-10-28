import React from 'react'
import firebase from 'firebase/app';
import { Alert, Button, Col, Container, Grid, Icon } from 'rsuite'
import { auth, database } from '../misc/firebase'

const SignIn = () => {
    const signInWithProvider = async(provider)=>{
        try{
            const {additionalUserInfo,user} = await auth.signInWithPopup(provider);
            if(additionalUserInfo.isNewUser){
                database.ref(`/profiles/${user.uid}`).set({
                    name:user.displayName,
                    createdAt:firebase.database.ServerValue.TIMESTAMP
                })
            }
            
            
            Alert.success('Signed in',4000)
        }catch(err){
            Alert.error(err.message,4000);
        }

    }
    const onFacebookSignin=()=>{
        signInWithProvider(new firebase.auth.FacebookAuthProvider() )
    };
    const onGoogleSignin=()=>{
        signInWithProvider(new firebase.auth.GoogleAuthProvider())
    };

    return (
        <Container>
            <Grid className="mt-page">
                <Col xs={24} md={12} mdOffset={6}>
                    <div className="text-center">
                        <h2>Welcome to Chat</h2>
                        <p>Progressive chat platform for neophytes</p>
                    </div>
                    <div className="mt-3">
                        <Button block color='blue' onClick={onFacebookSignin}>
                            <Icon icon='facebook' /> Continue with Facebook
                        </Button>
                        <Button block color='red' onClick={onGoogleSignin}>
                            <Icon icon='google' /> Continue with Google
                        </Button>
                    </div>
                </Col>
            </Grid>
        </Container>
    )
}

export default SignIn
