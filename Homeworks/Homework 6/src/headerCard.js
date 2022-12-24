import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./headerCard.css"


class HeaderCard extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="my-3">
                    <Col>
                        <img id="logoEsogu" src="esogu-logo.png" />
                    </Col>
                    <Col className="my-4">
                        <span className="bold header">Eskişehir Osmangazi Üniversitesi</span>
                        <br />
                        Öğrenci Yönetim Sistemi
                    </Col>
                    <Col className="closeApp">
                        <div className="m-0">Merhaba, John Doe</div>
                        <div><Button variant="secondary">Close</Button></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HeaderCard;
