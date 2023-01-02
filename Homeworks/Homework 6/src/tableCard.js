import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./tableCard.css"
import './element.css'
import Elements from "./elements";
import TableCardHeader from './tableCardHeader';

export default function TableCard() {
    const [state, setState] = useState({
        children: [],
        currentPage: 1,
        pageLimit: 10,
        pageCount: 1,
        lower: 0,
        upper: 0,
        view: "row",
    });

    const updateState = (newState) => {
        let length = (newState.children ?? state.children).length
        let _pageLimit = newState.pageLimit ?? state.pageLimit
        let _currentPage = newState.currentPage ?? state.currentPage
        let _pageCount = Math.ceil(length / _pageLimit)
        _currentPage = _pageCount > _currentPage ? _currentPage : _pageCount

        let _lower = (_currentPage - 1) * _pageLimit + 1
        _lower = Math.min(length, _lower)

        let _upper = _currentPage * _pageLimit
        _upper = Math.min(length, _upper)

        newState.currentPage = _currentPage
        newState.pageCount = _pageCount
        newState.lower = _lower
        newState.upper = _upper

        console.log(({
            ...state,
            ...newState
        }))

        setState(previous => ({
            ...previous,
            ...newState
        }))
    }

    async function initialize() {
        let list = []
        await fetch('http://localhost:8000/students/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(async (response) => {
                let res = await response.json()
                res.map(el => {
                    let data = {
                        "tid": el.id,
                        "firstname": el.fname,
                        "lastname": el.lname,
                        "number": el.num,
                        "departmant": el.dept,
                        "placeOfBirth": el.pob,
                        "dateOfBirth": el.dob,
                    }
                    list = [...list, data]
                })
            })
        console.log(list.length)
        updateState({ children: list })
    }

    useEffect(() => {

        initialize();
    }, [state.children.length])

    return <Container className="text-center table" fluid>
        <TableCardHeader callBack={initialize} view={state.view} onSwitch={() => updateState({ view: state.view === "row" ? "card" : "row" })} />
        {state.view === "card" ? <></> : <Row className="table-header">
            <Col>İsim Soyisim</Col>
            <Col className="number">Öğrenci Numarası</Col>
            <Col className="dept">Bölüm</Col>
            <Col>Yetkiler</Col>
        </Row>}

        <Elements view={state.view} children={state.children} bottom={state.lower} top={state.upper} callBack={initialize} />

        <Row className="tableFooter">
            <Col className="pageNo">
                <span className="bold">{state.children.length}</span> öğrenciden <span className="bold"> {state.lower}-{state.upper}</span> arası gösteriliyor
            </Col>
            <Col className="sayfalamaCSS" md="auto">
                {Array.from({ length: state.pageCount }).map((_, idx) => {
                    return <div key={idx}
                        className={`${(state.currentPage === idx + 1) ? 'current' : ''}`}
                        onClick={() => updateState({ currentPage: idx + 1 })}>
                        {idx + 1}</div>
                })}
            </Col>
            <Col className="totalPage">
                <div className={`${(state.pageLimit === 5) ? 'current' : ''}`} onClick={() => updateState({ pageLimit: 5 })}>5</div>
                <div className={`${(state.pageLimit === 8) ? 'current' : ''}`} onClick={() => updateState({ pageLimit: 8 })}>8</div>
                <div className={`${(state.pageLimit === 10) ? 'current' : ''}`} onClick={() => updateState({ pageLimit: 10 })}>10</div>
            </Col>
        </Row>
    </Container>
}
