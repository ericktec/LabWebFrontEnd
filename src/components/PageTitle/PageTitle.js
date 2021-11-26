import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import editIcon from './editIcon.png';
import './PageTitle.scss';
import TournamentModal from '../Modals/TournamentModal/TournamentModal';
const PageTitle = ( props ) => {

    const title = props.title;
    const modal = props.modal;

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container fluid className='box-header-gradient'>
            <Row>
                <Col className='text-title p-3 px-4'>
                    <div>{ title }</div>
                </Col>
                <Col className='text-right p-4'>
                    <div className="d-flex">
                        <Button className='editButton' onClick={() => setModalShow(true)}>
                            <Image id='editIcon' src={ editIcon }/>
                        </Button>
                    </div>
                </Col>
            </Row>

            <TournamentModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>

    );

}

export default PageTitle;