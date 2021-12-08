import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

export default function LoginPageModal({showLoginPageModal, setShowLoginPageModal}) {

    return (
        <Modal show={showLoginPageModal} onHide={() => setShowLoginPageModal(false)} className='aboutRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Hubo un problema con tu log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Por favor reintentá ingresar. En caso que no tengas una cuenta creada aún, registrate antes de ingresar.</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to='/register'><button className='btn btn-secondary'>Registrate</button></Link>
                <button className='btn btn-primary' onClick={() => setShowLoginPageModal(false)}>Reintentar</button>
            </Modal.Footer>
        </Modal>
    )
}