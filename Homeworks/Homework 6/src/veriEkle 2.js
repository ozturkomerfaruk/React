import React, { Component, useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

import "./modal.css"

function FormAreaValidate({ name, valid, invalid, callback }) {
    const [value, setValue] = useState("")
    function handleChange(event) {
        setValue(event.target.value)
        callback(event.target.value)
    }
    return <Col className='form-group' md="6">
        <label for="isim">{name}</label>
        <input type="text" class="form-control" value={value} onChange={handleChange} />
        <div class="valid">{valid}</div>
        <div class="invalid">{invalid}</div>
    </Col>;
}

export default function VeriEkle({ title }) {
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        //name is valid ?? name <3 
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    };


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} variant="primary" data-toggle="modal" data-target="#studentAdd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus"
                viewBox="0 0 16 16">
                <path
                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path fillRule="evenodd"
                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
            </svg>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="exampleModalLabel">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form class="needs-validation" novalidate>
                        <Row>
                            <FormAreaValidate name="İsim" valid="Geçerli" invalid="İsim en az 3 harf içermelidir" callback={e => { setName(e) }} />
                            <div class="col-md-6 form-group" id="soyadFormu">
                                <label for="soyad">Soyisim</label>
                                <input type="text" class="form-control" id="soyad" />
                                <div class="valid">Geçerli</div>
                                <div class="invalid">İsim en az 3 harf içermelidir</div>
                            </div>
                        </Row>
                        <Row>

                            <div class="col-md-6 form-group" id="ogrNoFormu">
                                <label for="ogrNo">Öğrenci Numarası</label>
                                <input type="number" class="form-control" id="ogrNo" />
                                <div class="valid">Geçerli</div>
                                <div class="invalid">Öğrenci numarası en az 12 rakam içermelidir.</div>
                            </div>
                            <div class="col-md-6 form-group" id="depFormu">
                                <label for="dep">Bölüm</label>
                                <select class="form-control" id="dep">
                                    <option selected>Bölüm Seçiniz</option>
                                    <option value="1">Bilgisayar Müh.</option>
                                    <option value="2">Elektrik-Elektronik Müh.</option>
                                    <option value="3">Endüstri Müh.</option>
                                    <option value="4">İnşaat Müh.</option>
                                </select>
                                <div class="valid">Geçerli</div>
                                <div class="invalid">Bölüm seçiniz</div>
                            </div>
                        </Row>
                        <Row>
                            <div class="row">
                                <div class="col-md-6 form-group" id="dogumYeriFormu">
                                    <label for="dogumYeri">Doğum Yeri</label>
                                    <input type="text" class="form-control" id="dogumYeri" />
                                    <div class="valid">Geçerli</div>
                                    <div class="invalid">Doğum yeri en az 3 harf içermelidir</div>
                                </div>
                                <div class="col-md-6 form-group" id="dogumTarihiFormu">
                                    <label for="dogumTarihi">Doğum Tarihi</label>
                                    <input type="date" class="form-control" id="dogumTarihi" />
                                    <div class="valid">Geçerli</div>
                                    <div class="invalid">Tarih giriniz</div>
                                </div>
                            </div>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                        {"asd" === "" ? '' : <input type="submit" value={"buttonName"} class="btn btn-primary" onClick={handleSubmit} />}
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}