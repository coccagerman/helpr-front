import Logo from '../../assets/logo.png'

export default function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt='Logo.' />
            <div className='btn-container'>
                <button className='btn btn-primary'>Registrate</button>
                <button className='btn btn-secondary'>Ingresá</button>
            </div>
        </header>
    )
}