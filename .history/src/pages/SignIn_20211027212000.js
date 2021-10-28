import React from 'react'
import firebase from 'firebase/app'
import { Container, Grid, Panel, Row, Col, Button, Icon, Alert } from 'rsuite'
import { auth, database } from '../misc/firebase'



const Signin = () => {



    const signinWithProvider = async (provider) => {



        try {
            const { additionalUserInfo, user } = auth.signInWithPopup(provider)
            if (additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                })
            }



            Alert.success('Signed in', 4000)



        } catch (err) {
            Alert.error(err.message, 4000)



        }



    }



    const onFacebookSignIn = () => {
        signinWithProvider(new firebase.auth.FacebookAuthProvider())
    }
    const onGoogleSignIn = () => {
        signinWithProvider(new firebase.auth.GoogleAuthProvider())
    }



    return <Container>
        <Grid className="mt-page">
            <Row>
                <Col xs={24} md={12} mdOffset={6}>
                    <Panel>
                        <div className="text-center">
                            <h2>Welcome to chat</h2>
                            <p>
                                Progressive chat platform for neophytes
                                </p>
                        </div>
                        <div className="mt-3">
                            <Button block color="blue" onClick={onFacebookSignIn}>
                                <Icon icon="facebook" /> Countinue with Facebook
                                </Button>
                            <Button block color="green" onClick={onGoogleSignIn}>
                                <Icon icon="google" /> Countinue with Google
                                </Button>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>



    </Container>


}



export default SignIn;


