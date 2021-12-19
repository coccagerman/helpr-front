import Logo from '../../assets/logo.png'
import { Icon } from '@iconify/react'
import AuthenticationContext from '../../context/AuthenticationContext'
import { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Header() {

    const { isLoggedIn, setIsLoggedIn, checkIfAuthenticatedAndChangeState } = useContext(AuthenticationContext)
    const history = useHistory()

    useEffect(() => checkIfAuthenticatedAndChangeState(), [])

    return (
        <header className='header'>
            <img src={Logo} alt='Logo.' />

            {isLoggedIn ? 
                <div className='btn-container'>
                    <article>
                        <Icon className='icon' icon='ic:baseline-notifications' color='#3a53b7' />
                    </article>
                    <article>
                        <Link to='/searchJobs'>
                            <Icon className='icon' icon='entypo:suitcase' color='#3a53b7' />
                        </Link>
                    </article>
                    <article>

                        <Dropdown>
                            <Dropdown.Toggle id='dropdown-basic' className='dropdownToggle'>
                                <Icon className='icon' icon='bi:person-circle' color='#3a53b7' />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link to='/profile'>Ver perfil</Link></Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                        setIsLoggedIn(false)
                                        localStorage.removeItem('accessToken')
                                        history.push('/')
                                    }}>
                                    Cerrar sesión
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </article>
                </div>
                :
                <div className='btn-container'>
                    <Link to='/register'><button className='btn btn-primary'>Registrate</button></Link>
                    <Link to='/login'><button className='btn btn-secondary'>Ingresá</button></Link>
                </div>
            }
            
        </header>
    )
}