import { Icon } from '@iconify/react'
import { useContext, useState, useEffect } from 'react'
import ProfileContext from '../../../../context/ProfileContext'
import VacancyRecord from './vacancyRecord/VacancyRecord'
import NewVacancyRecordModal from './newVacancyRecordModal/NewVacancyRecordModal'

export default function VacanciesSection() {

    const { fetchVacanciesRecords, vacanciesRecords } = useContext(ProfileContext)

    const [showNewVacancyRecordModal, setShowNewVacancyRecordModal] = useState(false)

    useEffect(() => fetchVacanciesRecords(), [])

    return (
        <div className='vacancies profileSection'>
            <div className='profileSection-header'>
                <h2>Vacantes disponibles</h2>
                <Icon icon='akar-icons:plus' color='#406bc8' className='icon' onClick={() => setShowNewVacancyRecordModal(true)}/>
            </div>

            {(vacanciesRecords && vacanciesRecords.length > 0) ? 
                vacanciesRecords.map(record => <VacancyRecord record={record} key={record._id} />)
                :
                'Aún no has cargado vacantes disponibles.'
            }
            
            <NewVacancyRecordModal showNewVacancyRecordModal={showNewVacancyRecordModal} setShowNewVacancyRecordModal={setShowNewVacancyRecordModal} />
        </div>
    )
}