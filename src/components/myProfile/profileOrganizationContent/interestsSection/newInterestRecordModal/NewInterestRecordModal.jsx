import Modal from 'react-bootstrap/Modal'
import { useContext, useState } from 'react'
import ProfileContext from '../../../../../context/ProfileContext'

export default function NewInterestRecordModal({showNewInterestRecordModal, setShowNewInterestRecordModal}) {

    const { editUserRecord, profileData } = useContext(ProfileContext)

    const possibleInterests = ['Arte', 'Cultura', 'Data', 'Deportes', 'Economía', 'Educación', 'Idiomas', 'Marketing', 'Política', 'Tecnología']
    const availableInterests = possibleInterests.filter(item => !profileData.interests.includes(item))

    const [interest, setInterest] = useState(null)

    /* Temporary fix - Styles on CSS files not rendering on this field */
    const inputStyle = {
        width: '100%',
        margin: '1rem 0',
        padding: '.25rem'
    }

    return (
        <Modal show={showNewInterestRecordModal} onHide={() => setShowNewInterestRecordModal(false)} className='newInterestRecordModal'>
            <Modal.Header closeButton>
                <Modal.Title>Añadir nuevo registro de interés</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>

                    <div className='input-container'>
                        <label htmlFor='interest'>Detallar tus intereses ayudará a que los candidatos puedan entender mejor tu perfil y conocer el tipo de oportunidades que ofreces.</label>
                        <select name='interest' id='interest' required style={inputStyle} onChange={e => setInterest(e.target.value)}>
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