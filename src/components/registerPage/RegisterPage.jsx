import { useState, useContext, useEffect } from 'react'
import AuthenticationContext from '../../context/AuthenticationContext'
import Illustration from '../../assets/registerPage-illustration.jpg'
import { Icon } from '@iconify/react'
import RegisterPageModal from './registerPageModal/RegisterPageModal'

export default function RegisterPage() {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [emailCheck, setEmailCheck] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordCheck, setPasswordCheck] = useState(null)
    const [accountType, setAccountType] = useState('volunteer')

    const [showRegisterPageModal, setShowRegisterPageModal] = useState(false)
    const [registerPageModalTypeSuccess, setRegisterPageModalTypeSuccess] = useState(true)
    const [registerPageModalMessage, setRegisterPageModalMessage] = useState(null)

    const { checkIfAlreadyAuthenticatedAndRedirect } = useContext(AuthenticationContext)
    useEffect(() => checkIfAlreadyAuthenticatedAndRedirect(), [])

    const submitRegisterForm = async e => {
        e.preventDefault()
        let data

        if (!name || !email || !emailCheck || !password || !passwordCheck) {
            setRegisterPageModalTypeSuccess(false)
            setRegisterPageModalMessage('Por favor complete todos los campos.')
            return setShowRegisterPageModal(true)
        } else if (email !== emailCheck) {
            setRegisterPageModalTypeSuccess(false)
            setRegisterPageModalMessage('Las direcciones de mail que escribiste no coinciden.')
            return setShowRegisterPageModal(true)
        } else if (password !== passwordCheck) {
            setRegisterPageModalTypeSuccess(false)
            setRegisterPageModalMessage('Las passwords que escribiste no coinciden.')
            return setShowRegisterPageModal(true)
        } else {
            const response = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    accountType: accountType
                })
            })

            data = await response.json()
        }
        
        if (data === 'Success - User created') {
            setRegisterPageModalTypeSuccess(true)
            setRegisterPageModalMessage('Tu cuenta fue creada exitosamente, ahora ingresá con tus datos.')
            setShowRegisterPageModal(true)
        } else {
            setRegisterPageModalTypeSuccess(false)
            
            if (data === 'Email already used') { setRegisterPageModalMessage('Ya existe un usuario creado con esa dirección de email. Por favor elegí otra dirección de mail.') }
            else { setRegisterPageModalMessage('Por favor reintentá crear tu cuenta.') }

            setShowRegisterPageModal(true)
        }
    }

    return (
        <section className='registerPage'>
            <h1>Creá tu cuenta en Helpr!</h1>

            <div className='horizontal-division'>
                <form>
                    <article className='input-container'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' id='name' name='name' required onChange={e => setName(e.target.value)}/>
                    </article>

                    <article className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' required onChange={e => setEmail(e.target.value)} />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='emailCheck'>Volvé a escribir tu email</label>
                        <input type='email' id='emailCheck' name='emailCheck' required onChange={e => setEmailCheck(e.target.value)} />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required onChange={e => setPassword(e.target.value)} />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='passwordCheck'>Volvé a escribir tu password</label>
                        <input type='password' id='passwordCheck' name='passwordCheck' required onChange={e => setPasswordCheck(e.target.value)} />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='accountType'>Seleccioná tu tipo de cuenta</label>
                        <select id='accountType' name='accountType' required onChange={e => setAccountType(e.target.value)}>
                            <option value='volunteer'>Soy voluntario</option>
                            <option value='organization'>Busco voluntarios</option>
                        </select>
                    </article>

                    <button type='submit' className='btn btn-primary' onClick={e => submitRegisterForm(e)}>Registrate</button>
                </form>

                <img src={Illustration} alt='Illustration.' />
            </div>

            <h2>O registrate con alguna de estas opciones:</h2>

            <div className='registerMethods'>
                <a href='http://localhost:3001/users/googleAuth'>
                    <article>
                        <Icon className='icon' icon='akar-icons:google-contained-fill' color='#406bc8'/>
                        <p>Registrate con Google</p>
                    </article>
                </a>

                <a href='http://localhost:3001/users/facebookAuth'>
                    <article>
                        <Icon className='icon' icon='akar-icons:facebook-fill' color='#406bc8'/>
                        <p>Registrate con Facebook</p>
                    </article>
                </a>
                
                <a href='http://localhost:3001/users/twitterAuth'>
                    <article>
                        <Icon className='icon' icon='ant-design:twitter-circle-filled' color='#406bc8'/>
                        <p>Registrate con Twitter</p>
                    </article>
                </a>

            </div>

            <RegisterPageModal showRegisterPageModal={showRegisterPageModal} setShowRegisterPageModal={setShowRegisterPageModal} registerPageModalMessage={registerPageModalMessage} registerPageModalTypeSuccess={registerPageModalTypeSuccess} />

        </section>
    )
}