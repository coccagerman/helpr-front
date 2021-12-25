import { useState, useContext, useEffect } from 'react'
import ProfileContext from '../../context/ProfileContext'

export default function SelectAccountType() {

    const [accountType, setAccountType] = useState('volunteer')

    const { fetchProfileData, profileData, editUserRecord } = useContext(ProfileContext)

    const checkIfAlreadyHasAccountTypeAndRedirect = () => {
        if (profileData && profileData.accountType) window.location = 'http://localhost:3000/myProfile'
    }

    useEffect(() => {
        fetchProfileData()
        checkIfAlreadyHasAccountTypeAndRedirect()
    }, [])

    return (
        <section className='selectAccountType'>
            
            <div className='txt'>
                <p>Elegí tu tipo de cuenta según lo que estés buscando.</p>
                <p>Contemplá que según el tipo de cuenta que elijas los contenidos del sitio que se te habilitarán serán diferentes.</p>
                <p>No podrás cambiar esta configuración más adelante. En caso que quieras utilizar otro tipo de cuenta, tendrás que crear otro usuario diferente.</p>
            </div>

            <article className='input-container'>
                <label htmlFor='accountType'>Seleccioná tu tipo de cuenta</label>
                <select id='accountType' name='accountType' required onChange={e => setAccountType(e.target.value)}>
                    <option value='volunteer'>Soy voluntario</option>
                    <option value='organization'>Busco voluntarios</option>
                </select>
            </article>

            <button className='btn btn-primary' onClick={() => {
                if (editUserRecord('accountType', accountType)) window.location = 'http://localhost:3000/myProfile'
            }}>Avanzar</button>

        </section>
    )
}