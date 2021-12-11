import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function NewInterestRecordModal({showNewInterestRecordModal, setShowNewInterestRecordModal}) {

    const { editUserRecord, profileData } = useContext(ProfileContext)

    const possibleInterests = ['Arte', 'Economía', 'Educación', 'Data', 'Deportes', 'Idiomas', 'Marketing', 'Política', 'Tecnología']
    const availableInterests = possibleInterests.filter(item => !profileData.interests.includes(item))

    const [interest, setInterest] = useState(null)

    return (
        <Modal show={showNewInterestRecordModal} onHide={() => setShowNewInterestRecordModal(false)} className='newInterestRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Añadir nuevo registro de interés</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>

                    <div className='input-container'>
                        <label htmlFor='interest'>Detallar tus intereses ayudará a que otras personas puedan entender mejor tu perfil y acercarte oportunidades que te sean atractivas.</label>
                        <select name='interest' id='interest' required onChange={e => setInterest(e.target.value)}>
                            <option value=''></option>
                            {availableInterests.map((interest, i) => <option value={interest} key={i}>{interest}</option>)}
                        </select>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={() => {
                    setShowNewInterestRecordModal(false)
                    setInterest(null)
                }}>Cancelar</button>
                <button className="btn btn-primary" onClick={() => {
                    if (interest) {
                        editUserRecord('interests', interest, 'add')
                        setInterest(null)
                        setShowNewInterestRecordModal(false)
                }}}>Guardar</button>
            </Modal.Footer>
        </Modal>
    )
}