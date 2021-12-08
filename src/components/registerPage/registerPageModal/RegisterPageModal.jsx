import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

export default function RegisterPageModal({showRegisterPageModal, setShowRegisterPageModal, registerPageModalMessage, registerPageModalTypeSuccess}) {

    return (
        <Modal show={showRegisterPageModal} onHide={() => setShowRegisterPageModal(false)} className='aboutRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>{registerPageModalTypeSuccess ? 'Tu cuenta fue creada exitosamente' : 'Hubo un problema al crear tu cuenta'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{registerPageModalMessage}</p>
            </Modal.Body>
            <Modal.Footer>
                {registerPageModalTypeSuccess ? 
                    <Link to='/login'><button className='btn btn-primary'>Ingresá</button></Link>
                    :
                    <button className='btn btn-primary' onClick={() => setShowRegisterPageModal(false)}>Reintentar</button>
                }
            </Modal.Footer>
        </Modal>
    )
}