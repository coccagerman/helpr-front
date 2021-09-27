import Modal from 'react-bootstrap/Modal'

export default function ExperienceRecordModal({showExperienceRecordModal, setShowExperienceRecordModal, experienceRecordModalContent, experienceRecordModalType, mockExperiences, setMockExperiences}) {
    
    
    return (
        <>
            {experienceRecordModalType === 'delete' ? 
                    <div className='experienceRecordModal'>
                    <Modal show={showExperienceRecordModal} onHide={() => setShowExperienceRecordModal(false)}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>Estás seguro que querés eliminar este registro? No podrás recuperarlo después.</Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-secondary" onClick={() => setShowExperienceRecordModal(false)}>Cancelar</button>
                            <button className="btn btn-primary" onClick={() => {
                                setMockExperiences(mockExperiences.filter(exp => exp !== experienceRecordModalContent))
                                setShowExperienceRecordModal(false)
                            }}>Eliminar</button>
                        </Modal.Footer>
                    </Modal>
                </div>
                :
                <div className='experienceRecordModal'>
                    <Modal show={showExperienceRecordModal} onHide={() => setShowExperienceRecordModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-secondary" onClick={() => setShowExperienceRecordModal(false)}>Cancelar</button>
                            <button className="btn btn-primary" onClick={() => setShowExperienceRecordModal(false)}>Guardar</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            }
        </>
    )
}