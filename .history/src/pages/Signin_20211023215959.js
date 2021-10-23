/* eslint-disable no-unused-vars */
import React from 'react'
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    getAdditionalUserInfo,
  } from 'firebase/auth';
import {Button, Col, Container,Grid,Icon,Panel,Row} from 'rsuite';
import {auth} from '../misc/firebase'
// import { Icon } from '@rsuite/icons';


const SignIn = () => {
    
const signInWithProvider = async (provider) => {
    
    const result = await auth.signInWithPopup(provider);
    console.log(result,'result')
};
const onFacebookSignIn = () => {
    signInWithProvider(new FacebookAuthProvider());
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new GoogleAuthProvider());
  };

    return (
        <Container>
          <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>

                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
        </Container>
        
    );
};

export default SignIn;
