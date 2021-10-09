import React from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';
import './Dashboard.scss';


const Dashboard = () => {

    return (
        <div>
            <Container fluid>
                <Row>
                    <div className='box-header-gradient'>Torneos</div>    
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;