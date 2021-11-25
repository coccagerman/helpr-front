import Logo from '../../assets/logo.png'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <header className='header'>
            <img src={Logo} alt='Logo.' />

            {isLoggedIn ? 
                <div className='btn-container'>
                    <article>
                        <Icon className='icon' icon='ic:baseline-notifications' color='#3a53b7' />
                        <p>Notificaciones</p>
                    </article>
                    <article>
                        <Icon className='icon' icon='entypo:suitcase' color='#3a53b7' />
                        <p>Oportunidades</p>
                    </article>
                    <article>

                        <Dropdown>
                            <Dropdown.Toggle id='dropdown-basic' className='dropdownToggle'>
                                <Icon className='icon' icon='bi:person-circle' color='#3a53b7' />
                                <p>Perfil</p>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href='#/action-1'>Ver perfil</Dropdown.Item>
                                <Dropdown.Item href='#/action-2'>Cerrar sesión</Dropdown.Item>
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