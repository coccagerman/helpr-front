import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AuthenticationContext from '../../context/AuthenticationContext'
import Illustration from '../../assets/loginPage-illustration.jpg'
import { Icon } from '@iconify/react'
import LoginPageModal from './loginPageModal/LoginPageModal'

export default function LoginPage() {

    const history = useHistory()
    const { setIsLoggedIn, checkIfAlreadyAuthenticatedAndRedirect } = useContext(AuthenticationContext)
    useEffect(() => checkIfAlreadyAuthenticatedAndRedirect(), [])

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [showLoginPageModal, setShowLoginPageModal] = useState(false)

    const serverUrl = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVSERVER_URL : process.env.REACT_APP_PRODSERVER_URL

    const submitLoginForm = async e => {
        e.preventDefault()

        if (!email || !password) setShowLoginPageModal(true)
        else {
            const response = await fetch(`${serverUrl}/users/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            if (response.status === 401) return setShowLoginPageModal(true)

            const data = await response.json()

            if (data.accessToken) {
                localStorage.setItem('accessToken', `Bearer ${data.accessToken}`)
                setIsLoggedIn(true)
                return history.push('/myProfile')
            }

            setShowLoginPageModal(true)
        }
    }

    return (
        <section className='loginPage'>
            <h1>Entrá a Helpr!</h1>

            <div className='horizontal-division'>                

                <form action={`${serverUrl}/users/login`} method='POST'>

                    <article className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' required onChange={e => setEmail(e.target.value)} />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required onChange={e => setPassword(e.target.value)} />
                    </article>

                    <button type='submit' className='btn btn-primary' onClick={e => submitLoginForm(e)}>Ingresá</button>
                </form>

                <img src={Illustration} alt='Illustration.' />
            </div>

            <h2>O ingresá con alguna de estas opciones:</h2>

            <div className='loginMethods'>
                <a href={`${serverUrl}/users/googleAuth`}>
                    <article>
                        <Icon className='icon' icon='akar-icons:google-contained-fill' color='#406bc8'/>
                        <p>Ingresá con Google</p>
                    </article>
                </a>

                <a href={`${serverUrl}/users/facebookAuth`}>
                    <article>
                        <Icon className='icon' icon='akar-icons:facebook-fill' color='#406bc8'/>
                        <p>Ingresá con Facebook</p>
                    </article>
                </a>

                <a href={`${serverUrl}/users/twitterAuth`}>
                    <article>
                        <Icon className='icon' icon='ant-design:twitter-circle-filled' color='#406bc8'/>
                        <p>Ingresá con Twitter</p>
                    </article>
                </a>

            </div>

            <LoginPageModal showLoginPageModal={showLoginPageModal} setShowLoginPageModal={setShowLoginPageModal} />

        </section>
    )
}