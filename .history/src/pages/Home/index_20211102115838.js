/* eslint-disable import/named */
import React from 'react'
import { Switch,Route } from 'react-router';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../../components/Sidebar'
import { RoomsProvider } from '../../context/rooms.context';
import Chat from './Chat';

const Home = () => {
    return(
        <RoomsProvider>
        <Grid fluid className='h-100'>
            <Row className='h-100'>
                <Col xs={24} md={8} className='h-100'>
                    <Sidebar />
                </Col>
                <Switch>
                    <Route exact path="/chat/:chatId">
                        <Col xs={24} md={16} className="h-100">
                        <Chat/>
                        </Col>
                    </Route>
                </Switch>
            </Row>
        </Grid>
        </RoomsProvider>
    );
};

export default Home;
