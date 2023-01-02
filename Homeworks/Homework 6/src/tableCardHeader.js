import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import { BsFillPersonPlusFill } from 'react-icons/bs';
import "./tableCardHeader.css"
import VeriEkle from './veriEkle.js';

function TableCardHeader({ callBack, view, onSwitch }) {
    return (
        <Container fluid>
            <Row>
                <Col className="bold" style={{ textAlign: 'start' }}>Öğrenci Listesi</Col>
                <Col md="auto">
                    <Button variant="primary" type="button">
                        <Form.Switch reverse
                            id="formSwitch"
                            label={view === "card" ? "Card View" : "Table View"}
                            onClick={onSwitch}
                            value={view === "card"} />
                    </Button>
                </Col>
                <Col md="auto">
                    <VeriEkle variant="primary" callBack={callBack} child={<BsFillPersonPlusFill />} detail={null} tid={-1} />
                </Col>
            </Row>
        </Container>
    )
}


export default TableCardHeader;