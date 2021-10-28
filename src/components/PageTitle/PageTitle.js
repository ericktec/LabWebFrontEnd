import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import editIcon from './editIcon.png';
import './PageTitle.scss';
const PageTitle = ( props ) => {

    const title = props.title;

    return (
        <Container fluid className='box-header-gradient'>
            <Row>
                <Col className='text-title'>
                    <div>{ title }</div>
                </Col>
                <Col className='text-right'>
                    <Image id='ediIcon' src={ editIcon }/>
                </Col>
            </Row>
        </Container>
    );

}

export default PageTitle;