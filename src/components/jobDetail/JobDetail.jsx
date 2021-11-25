export default function JobDetail() {

    return (
        <section className='jobDetail'>
            
            <div className='titleAndPublisher'>
                <h1>JS Developer</h1>
                <h2>- Aerolab</h2>
            </div>

            <div className='mainDetails'>
                <div>
                    <h3>Clasificación</h3>
                    <p>Desarrollo de software</p>

                    <h3>Fecha de publicación</h3>
                    <p>25/11/2021</p>
                </div>

                <div>
                    <h3>Tiempo estimado</h3>
                    <p>3 semanas</p>

                    <h3>Dedicación horaria</h3>
                    <p>Part time</p>
                </div>
            </div>

            <h3>Descripción</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo labore quaerat officiis placeat dicta magni dolore aspernatur, libero at obcaecati, magnam odio unde quae eum quod nesciunt incidunt eaque maiores qui suscipit molestiae accusamus. Ad aspernatur deserunt omnis debitis est ullam sunt quae fugiat dolorem quaerat perferendis quis, veniam nam, eveniet beatae eum tempore magnam. Repudiandae modi adipisci fuga magni reprehenderit minima, quae molestias voluptates possimus atque porro. Recusandae optio alias nobis eveniet quidem! Facilis qui vel optio temporibus doloremque at cumque consequatur expedita repudiandae repellat excepturi, dicta dolorum, similique atque laborum rerum natus. Nulla consectetur accusamus fuga et neque dolore nemo animi praesentium voluptas vero accusantium sapiente quaerat a inventore quidem dolorem perspiciatis harum, ducimus ullam eos excepturi corrupti maxime! Aliquam quos maxime adipisci, repellat reprehenderit nostrum quisquam. Maiores delectus saepe numquam veniam eum quidem adipisci itaque fugit iure libero est magnam, ea neque provident vel excepturi, praesentium debitis asperiores. Nostrum et, possimus incidunt provident iste distinctio nemo! Sint quasi nobis magni quia delectus eveniet velit libero, tempora repellat explicabo amet blanditiis nesciunt iusto dolorem ipsa. Exercitationem aspernatur eos in deserunt, magnam assumenda ratione atque quaerat, obcaecati est sed? Hic eius nisi, libero modi.</p>

            <h3>Requisitos</h3>
            <ul>
                <li>Seas crack en JavaScript o TypeScript y puedas construir aplicaciones desde cero con buenos patrones de código.</li>
                <li>Tengas buenos conocimientos de React y gestión de estados con Context, Redux u otras herramientas (y si no sabés React, Vue o Angular cuentan también).</li>
                <li>Tengas conocimiento sobre unit e integration tests con Jest + React Testing Library (Mocha + Chai, Jest + Enzyme o similar también suman).</li>
                <li>Estés familiarizado/a con la modalidad Agile y puedas aplicarla en un trabajo en equipo.</li>
                <li>Sepas Inglés (nivel intermedio oral y escrito).</li>
            </ul>

            <button className='btn btn-primary'>Postular</button>
        </section>
    )
}