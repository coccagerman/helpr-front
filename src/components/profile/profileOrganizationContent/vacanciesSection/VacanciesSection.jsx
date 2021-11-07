import { Icon } from '@iconify/react'
import { useState } from 'react'
import VacancyRecord from './vacancyRecord/VacancyRecord'
import NewVacancyRecordModal from './newVacancyRecordModal/NewVacancyRecordModal'

export default function VacanciesSection() {

    const [vacanciesRecords, setVacanciesRecords] = useState([
        {
            position: 'Diseñador gráfico',
            beginDate: '2014-02-09',
            endDate: '2014-04-09',
            clasification: 'Diseño',
            detail: 'Diseño de piezas gráficas para redes sociales de la organización.',
            requisites: 'Manejo de photoshop e illustrator. Conocimiento de redes sociales.'
        }
    ])

    const addNewVacancyRecord = recordToAdd => setVacanciesRecords([...vacanciesRecords, recordToAdd])
    const deleteVacancyRecord = recordToDelete => setVacanciesRecords(vacanciesRecords.filter(record => (record !== recordToDelete)))

    const [showNewVacancyRecordModal, setShowNewVacancyRecordModal] = useState(false)

    return (
        <div className='vacancies profileSection'>
            <div className='profileSection-header'>
                <h2>Vacantes disponibles</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowNewVacancyRecordModal(true)}/>
            </div>

            {vacanciesRecords.length > 0 ? 
                vacanciesRecords.map((record, i) => <VacancyRecord record={record} key={i} deleteVacancyRecord={deleteVacancyRecord} />)
                :
                'Aún no has cargado vacantes disponibles.'
            }
            
            <NewVacancyRecordModal showNewVacancyRecordModal={showNewVacancyRecordModal} setShowNewVacancyRecordModal={setShowNewVacancyRecordModal} addNewVacancyRecord={addNewVacancyRecord} vacanciesRecords={vacanciesRecords}/>
        </div>
    )
}