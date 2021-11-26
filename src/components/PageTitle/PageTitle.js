import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import editIcon from './editIcon.png';
import './PageTitle.scss';
const PageTitle = ( props ) => {

    const title = props.title;

    return (
        <Container fluid className='box-header-gradient'>
            <Row>
                <Col className='text-title p-3 px-4'>
                    <div>{ title }</div>
                </Col>
                <Col className='text-right p-4'>
                    <div className="d-flex">
                        <Image id='editIcon' src={ editIcon }/>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default PageTitle;