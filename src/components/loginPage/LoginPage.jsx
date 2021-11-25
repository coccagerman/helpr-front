import Illustration from '../../assets/loginPage-illustration.jpg'
import { Icon } from '@iconify/react'

export default function LoginPage() {

    return (
        <section className='loginPage'>
            <h1>Entrá a Helpr!</h1>

            <div className='horizontal-division'>
                <form action='post'>

                    <article className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' required />
                    </article>

                    <article className='input-container'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' required />
                    </article>

                    <button type='submit' className='btn btn-primary'>Ingresá</button>
                </form>

                <img src={Illustration} alt='Illustration.' />
            </div>

            <h2>O ingresá con alguna de estas opciones:</h2>

            <div className='loginMethods'>
                <article>
                    <Icon className='icon' icon='akar-icons:google-contained-fill' color='#406bc8'/>
                    <p>Ingresá con Google</p>
                </article>
                <article>
                    <Icon className='icon' icon='akar-icons:facebook-fill' color='#406bc8'/>
                    <p>Ingresá con Facebook</p>
                </article>
                <article>
                    <Icon className='icon' icon='ant-design:twitter-circle-filled' color='#406bc8'/>
                    <p>Ingresá con Twitter</p>
                </article>
            </div>
        </section>
    )
}