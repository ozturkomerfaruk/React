import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsExclamationTriangleFill } from "react-icons/bs";

import "./modal.css"

const VeriSil = ({ id, fname, lname, callBack, child, variant = "danger" }) => {

    function deleteFunc() {
        fetch('http://localhost:8000/students/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        callBack()
        handleClose()
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button onClick={handleShow} type="button" variant={variant}>
                {child}
            </Button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <BsExclamationTriangleFill style={{ color: "red" }} />
                    <Modal.Title id="studentDelete" style={{ paddingLeft: "20px" }}>Sil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>{fname} {lname}</strong> isimli öğrenciyi siliyorsunuz. Bu işlem geri alınamaz. Devam
                        etmek istediğinize emin misiniz?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" variant="secondary" data-dismiss="modal" onClick={handleClose}>Kapat</Button>
                    <Button type='submit' onClick={deleteFunc}>Sil</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default VeriSil;