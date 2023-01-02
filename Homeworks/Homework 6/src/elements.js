import { Container, Row, Col, Card } from 'react-bootstrap';
import VeriSil from './veriSil';
import VeriEkle from './veriEkle';
import './element.css'
import { BsPen, BsInfoCircle, BsTrash } from 'react-icons/bs';

function TableRow({ data, callBack }) {
    const depts = {
        "1": "Bilgisayar Müh.",
        "2": "Elektrik-Elektronik Müh.",
        "3": "Endüstri Müh.",
        "4": "İnşaat Müh.",
    };
    return <Row>
        <Col>{data.firstname} {data.lastname}</Col>
        <Col className='number'>{data.number}</Col>
        <Col className='dept'>{depts[data.departmant]}</Col>
        <Col>
            <VeriSil callBack={callBack} id={data.tid} fname={data.firstname} lname={data.lastname} child={<p style={{ margin: '0px' }}>Sil</p>} />
            <VeriEkle callBack={callBack} variant="primary" child={<p style={{ margin: '0px' }}>Düzenle</p>} detail={null} tid={data.tid} />
            <VeriEkle callBack={callBack} variant="success" child={<p style={{ margin: '0px' }}>Detay</p>} detail={0} tid={data.tid} />
        </Col>
    </Row>
}

function CardView({ data, callBack }) {
    const depts = {
        "1": "Bilgisayar Müh.",
        "2": "Elektrik-Elektronik Müh.",
        "3": "Endüstri Müh.",
        "4": "İnşaat Müh.",
    };
    return <Card className='cardView'>
        <Col>
            <p className='bold'>{data.firstname} {data.lastname}</p>
            <p className='number'> {data.number}</p>
            <p className='dept'>{depts[data.departmant]}</p>
            <Row xs="auto">
                <Col><VeriSil callBack={callBack} variant="" id={data.tid} fname={data.firstname} lname={data.lastname} child={<BsTrash color="red" />} /></Col>
                <Col><VeriEkle callBack={callBack} variant="" child={<BsPen color='blue' />} detail={null} tid={data.tid} /></Col>
                <Col><VeriEkle callBack={callBack} variant="" child={<BsInfoCircle color='green' />} detail={0} tid={data.tid} /></Col>
            </Row>
        </Col>
    </Card>
}

export default function Elements({ children, bottom, top, callBack, view }) {
    return <Container className='elements' fluid style={{ padding: '0px' }}>
        {children.slice(bottom - 1, top).map((e, idx) => view === "card" ?
            <CardView key={idx} data={e} callBack={callBack} /> :
            <TableRow key={idx} data={e} callBack={callBack} />
        )}
    </Container>
}