import React from 'react'
import { Grid,Row,Col, Sidebar } from 'rsuite'

const Home = () => {
    return (
        <Grid fluid className = "h-100">
            <Row>
                <Col xs={24} md={8}>
                    <Sidebar/>
                </Col>
            </Row>
        </Grid>
    )
}

export default Home
