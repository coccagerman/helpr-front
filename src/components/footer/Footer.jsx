import { useRef, useState, useEffect } from 'react'

export default function Footer() {

    const ref = useRef()
    const [footerBottomDistance, setFooterBottomDistance] = useState(0)

    // FIX - Conditional styling for footer so it always renders at the bottom independent of the page content
    // useEffect(() => setFooterBottomDistance(window.innerHeight - ref.current.getBoundingClientRect().bottom))

    return (
        <footer className={footerBottomDistance > 0 ? 'stickyFooter' : 'footer'} ref={ref}>
            <div className='footer-div'>
                <p>Sobre nosotros</p>
                <p>Contactanos</p>
            </div>
        </footer>
    )
}