import Illustration from '../../assets/registerPage-illustration.jpg'
import { Icon } from '@iconify/react'

export default function RegisterPage() {

    return (
        <section className='registerPage'>
            <h1>Creá tu cuenta en Helpr!</h1>

            <div className='horizontal-division'>
                <form action='post'>
                    <article className='input-container'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' id='name' name='name' required />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' required />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='emailCheck'>Volvé a escribir tu email</label>
                        <input type='email' id='emailCheck' name='emailCheck' required />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='password'>Volvé a escribir tu password</label>
                        <input type='password' id='password' name='password' required />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='type'>Seleccioná tu tipo de cuenta</label>
                        <select id='type' name='type' required >
                            <option value='volunteer'>Soy voluntario</option>
                            <option value='organization'>Busco voluntarios</option>
                        </select>
                    </article>

                    <button type='submit' className='btn btn-primary'>Registrate</button>
                </form>

                <img src={Illustration} alt='Illustration.' />
            </div>

            <h2>O registrate con alguna de estas opciones:</h2>

            <div className='registerMethods'>
                <article>
                    <Icon className='icon' icon='akar-icons:google-contained-fill' color='#406bc8'/>
                    <p>Registrate con Google</p>
                </article>
                <article>
                    <Icon className='icon' icon='akar-icons:facebook-fill' color='#406bc8'/>
                    <p>Registrate con Facebook</p>
                </article>
                <article>
                    <Icon className='icon' icon='ant-design:twitter-circle-filled' color='#406bc8'/>
                    <p>Registrate con Twitter</p>
                </article>
            </div>
        </section>
    )
}