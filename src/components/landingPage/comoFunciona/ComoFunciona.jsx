export default function ComoFunciona() {
    return (
        <section className='comoFunciona'>
            <h2>Cómo funciona?</h2>

            <div className='organizaciones'>
                <h3>Para organizaciones</h3>

                <div className='steps'>
                    <article>
                        <div className='number'>1</div>
                        <p>Registrate como organización y publicá tus proyectos.</p>
                    </article>

                    <article>
                        <div className='number'>2</div>
                        <p>Recibí postulaciones de voluntarios interesados o buscá candidatos en nuestra base de datos.</p>
                    </article>

                    <article>
                        <div className='number'>3</div>
                        <p>Contactate directamente con los voluntarios que se ajusten a tu búsqueda.</p>
                    </article>
                </div>
            </div>

            <div className='voluntarios'>
                <h3>Para voluntarios</h3>
                <div className='steps'>
                    <article>
                        <div className='number'>1</div>
                        <p>Registrate como voluntario y completá la información de tu perfil.</p>
                    </article>

                    <article>
                        <div className='number'>2</div>
                        <p>Postulate a proyectos que te interesen o recibí contactos espontáneos de organizaciones.</p>
                    </article>

                    <article>
                        <div className='number'>3</div>
                        <p>Contactate directamente con las organizaciones que se ajusten a tu búsqueda.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}