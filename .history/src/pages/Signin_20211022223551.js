/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Button, Col, Container,Grid,Icon,Panel,Row} from 'rsuite';

// import { Icon } from '@rsuite/icons';


const SignIn = () => {
    return (
        <Container>
          <Grid>
              <Row>
                <Col xs={24} md={12} mdOffset={6}>
                    <Panel>
                        <div className="text-center">
                            <h2>Welcome to Chat</h2>
                            <p>Progressive chat platform for neophytes</p>
                        </div>
                        <div className="mt-3">
                            <Button block color="blue">
                                <Icon icon="facebook" /> Continue with Facebook
                            </Button>
                        </div>
                        <div>
                            <Button block color="green">
                                <Icon icon="google " /> Continue with Google
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
