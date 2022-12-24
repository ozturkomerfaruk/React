import React, { useState } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

import "./modal.css"

const VeriEkle = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })

        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            alert('Thank you for your feedback!')
        }
    }

    const findFormErrors = () => {
        const { ogrNo, isim, soyisim, dep, dogumTarihi, dogumYeri } = form
        const newErrors = {}
        // name errors
        if (!ogrNo || ogrNo === '' || ogrNo.length < 3) newErrors.ogrNo = ' 3 harf '
        else if (ogrNo.length > 12) newErrors.ogrNo = 'çok girdin'

        if (!isim || isim === '' || isim.length < 3) newErrors.isim = ' 3 harf '
        else if (isim.length > 12) newErrors.isim = 'çok girdin'

        if (!soyisim || soyisim === '' || soyisim.length < 3) newErrors.soyisim = ' 3 harf '
        else if (soyisim.length > 12) newErrors.soyisim = 'çok girdin'

        if (!dep || dep === '') newErrors.dep = 'select a food!'

        if (!dogumTarihi || dogumTarihi === '') newErrors.dogumTarihi = ' 3 harf '
        else if (dogumTarihi.length > 12) newErrors.dogumTarihi = 'çok girdin'

        if (!dogumYeri || dogumYeri === '' || dogumYeri.length < 3) newErrors.dogumYeri = ' 3 harf '
        else if (dogumYeri.length > 12) newErrors.dogumYeri = 'çok girdin'

        return newErrors
    }

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
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title id="studentAdd">"title"</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form class="needs-validation" noValidate>
                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>İsim</Form.Label>
                                <Form.Control
                                    type='text'
                                    onChange={e => setField('isim', e.target.value)}
                                    isInvalid={!!errors.isim}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.isim}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Soyisim</Form.Label>
                                <Form.Control
                                    type='text'
                                    onChange={e => setField('soyisim', e.target.value)}
                                    isInvalid={!!errors.soyisim}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.soyisim}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Öğrenci Numarası</Form.Label>
                                <Form.Control
                                    type='number'
                                    onChange={e => setField('ogrNo', e.target.value)}
                                    isInvalid={!!errors.ogrNo}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.ogrNo}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label>Bölüm</Form.Label>
                                <Form.Control
                                    as='Select'
                                    onChange={e => setField('dep', e.target.value)}
                                    isInvalid={!!errors.dep}
                                >
                                    <option value=''>Bölüm Seçiniz</option>
                                    <option value='bm'>Bilgisayar Müh.</option>
                                    <option value='eem'>Elektrik-Elektronik Müh.</option>
                                    <option value='em'>Endüstri Müh.</option>
                                    <option value='im'>İnşaat Müh.</option>
                                </Form.Control>
                                <Form.Control.Feedback type='invalid'>{errors.dep}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Doğum Yeri</Form.Label>
                                <Form.Control
                                    type='text'
                                    onChange={e => setField('dogumYeri', e.target.value)}
                                    isInvalid={!!errors.dogumYeri}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.dogumYeri}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label>Doğum Tarihi</Form.Label>
                                <Form.Control
                                    type='date'
                                    onChange={e => setField('dogumTarihi', e.target.value)}
                                    isInvalid={!!errors.dogumTarihi}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.dogumTarihi}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</Button>
                    {"asd" === "" ? '' : <Button type='submit' onClick={handleSubmit}>Submit</Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default VeriEkle;