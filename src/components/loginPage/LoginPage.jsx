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

    const submitLoginForm = async e => {
        e.preventDefault()

        if (!email || !password) setShowLoginPageModal(true)
        else {
            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
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
                return history.push('/profile')
            }

            setShowLoginPageModal(true)
        }
    }

    return (
        <section className='loginPage'>
            <h1>Entrá a Helpr!</h1>

            <div className='horizontal-division'>                

                <form action='http://localhost:3001/users/login' method='POST'>

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
                <a href='http://localhost:3001/users/googleAuth'>
                    <article>
                        <Icon className='icon' icon='akar-icons:google-contained-fill' color='#406bc8'/>
                        <p>Ingresá con Google</p>
                    </article>
                </a>

                <a href='http://localhost:3001/users/facebookAuth'>
                    <article>
                        <Icon className='icon' icon='akar-icons:facebook-fill' color='#406bc8'/>
                        <p>Ingresá con Facebook</p>
                    </article>
                </a>

                <a href='http://localhost:3001/users/twitterAuth'>
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