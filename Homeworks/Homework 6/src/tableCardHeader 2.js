import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./tableCardHeader.css"
import "./modal.js"
import VeriEkle from './veriEkle';


class TableCardHeader extends Component {
    render() {
        return (
            <Container fluid className="sec-container">
                <div className="header bold">Öğrenci Listesi</div>
                <VeriEkle></VeriEkle>
            </Container>
        )

    }
}


export default TableCardHeader;