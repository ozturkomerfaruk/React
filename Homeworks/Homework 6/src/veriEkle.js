import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';

import "./modal.css"

const VeriEkle = ({ tid, detail, callBack, child, variant }) => {
    const [title, setTitle] = useState("")
    const [buttonName, setButtonName] = useState("")

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
            const { ogrNo, isim, soyisim, dep, dogumTarihi, dogumYeri } = form
            if (tid === -1 || tid === null) {
                let data = {
                    "fname": isim,
                    "lname": soyisim,
                    "num": ogrNo,
                    "dept": dep,
                    "pob": dogumYeri,
                    "dob": dogumTarihi
                }
                console.log('New Student')
                fetch('http://localhost:8000/students', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then((response) => {
                        console.log('New Student', response.status)
                    })
            } else {
                let data = {
                    "id": tid,
                    "fname": isim,
                    "lname": soyisim,
                    "num": ogrNo,
                    "dept": dep,
                    "pob": dogumYeri,
                    "dob": dogumTarihi
                }
                console.log('Update Student')
                fetch('http://localhost:8000/students/' + tid, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then((response) => {
                        console.log('Update Student', response.status)
                    })
            }
            callBack()
            setShow(false)
        }
    }

    useEffect(() => {
        if (detail !== null && tid !== null && tid !== -1) {
            setTitle("Öğrenci Detay Bilgileri")
            setButtonName("")
        } else if (tid !== null && tid !== -1) {
            setTitle("Güncellenecek Öğrenci Bilgileri")
            setButtonName("Güncelle")
        } else {
            setTitle("Eklenecek Öğrenci Bilgileri")
            setButtonName("Ekle")
        }
    }, [detail, tid])


    const findFormErrors = () => {
        const { ogrNo, isim, soyisim, dep, dogumTarihi, dogumYeri } = form
        const newErrors = {}

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

    async function initialize() {
        await fetch('http://localhost:8000/students/' + tid, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(async (response) => {
                let _response = await response.json()
                console.log("initialize", _response)
                setForm({
                    isim: _response.fname,
                    soyisim: _response.lname,
                    ogrNo: _response.num,
                    dep: _response.dept,
                    dogumYeri: _response.pob,
                    dogumTarihi: _response.dob,
                })
            })
        handleShow()
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={() => initialize()} variant={variant} data-toggle="modal" data-target="#studentAdd">{child}
            </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title id="studentAdd">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form class="needs-validation" noValidate>
                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>İsim</Form.Label>
                                <Form.Control
                                    type='text'
                                    disabled={buttonName === ""}
                                    value={form.isim}
                                    onChange={e => setField('isim', e.target.value)}
                                    isInvalid={errors.isim}
                                />
                                {!errors.isim ? <Form.Control.Feedback>Looks good!</Form.Control.Feedback> : <Form.Control.Feedback type='invalid'>{errors.isim}</Form.Control.Feedback>}
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Soyisim</Form.Label>
                                <Form.Control
                                    type='text'
                                    disabled={buttonName === ""}
                                    value={form.soyisim}
                                    onChange={e => setField('soyisim', e.target.value)}
                                    isInvalid={errors.soyisim}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.soyisim}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Öğrenci Numarası</Form.Label>
                                <Form.Control
                                    disabled={buttonName === ""}
                                    type='number'
                                    value={form.ogrNo}
                                    onChange={e => setField('ogrNo', e.target.value)}
                                    isInvalid={errors.ogrNo}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.ogrNo}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label>Bölüm</Form.Label>
                                <Form.Control
                                    disabled={buttonName === ""}
                                    as={Form.Select}
                                    onChange={e => setField('dep', e.target.value)}
                                    isInvalid={errors.dep}
                                    value={form.dept}>
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
                                    disabled={buttonName === ""}
                                    type='text'
                                    value={form.dogumYeri}
                                    onChange={e => setField('dogumYeri', e.target.value)}
                                    isInvalid={errors.dogumYeri}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.dogumYeri}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label>Doğum Tarihi</Form.Label>
                                <Form.Control
                                    disabled={buttonName === ""}
                                    type='date'
                                    value={form.dogumTarihi}
                                    onChange={e => setField('dogumTarihi', e.target.value)}
                                    isInvalid={errors.dogumTarihi}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.dogumTarihi}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} type="button" variant="secondary" data-dismiss="modal">Kapat</Button>
                    {buttonName === "" ? <></> : <Button type='submit' onClick={handleSubmit}>{buttonName}</Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default VeriEkle;