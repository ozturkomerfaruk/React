import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./tableCard.css"
import CustomNavigation from "./c-sayfalama.css"


class TableCard extends Component {
    render() {
        return (
            <Container className="text-center table" fluid>
                <Row className="table-header">
                    <Col>İsim Soyisim</Col>
                    <Col className="number">Öğrenci Numarası</Col>
                    <Col className="dept">Bölüm</Col>
                    <Col>Yetkiler</Col>
                </Row>
                <c-sayfalama>
                    <Row className="table-footer">
                        <Col class="pageNumber">
                            <span class="bold">25</span> öğrenciden
                            <span class="bold">1-8</span> arası gösteriliyor
                        </Col>
                        <Col className="paginationNumbers"></Col>
                        <Col className="pageCounter">
                            <div>5</div>
                            <div>8</div>
                            <div>10</div>
                        </Col>
                    </Row>
                </c-sayfalama>

            </Container>
        )
    }
}


export default TableCard;