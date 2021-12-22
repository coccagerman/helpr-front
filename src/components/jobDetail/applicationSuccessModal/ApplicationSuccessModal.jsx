import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

export default function ApplicationSuccessModal({showApplicationSuccessModal, setShowApplicationSuccessModal}) {

    return (
        <Modal show={showApplicationSuccessModal} onHide={() => setShowApplicationSuccessModal(false)} className='applicationSuccessModal'>
            <Modal.Header closeButton>
                <Modal.Title>Postulación enviada</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Tu postulación se ha enviado correctamente. En caso que seas seleccionado, la organización te contactará directamente.</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to='/searchJobs'>
                    <button className='btn btn-primary'>Buscar más oportunidades</button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}