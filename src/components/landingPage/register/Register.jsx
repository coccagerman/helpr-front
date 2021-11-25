import { Icon } from '@iconify/react'

export default function Register() {
    return (
        <section className='register'>
            <h2>Registrate y encontrá lo que buscás con la ayuda de Helpr!</h2>
            <div className='registerMethods'>

                <button className='btn btn-primary'>Registrate</button>
                <button className='btn btn-secondary'>Ingresá</button>
                {/* <article>
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
                </article> */}
            </div>
        </section>
    )
}