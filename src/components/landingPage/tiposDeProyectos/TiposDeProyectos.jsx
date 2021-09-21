import { Icon } from '@iconify/react'

export default function TiposDeProyectos() {
    return (
        <section className='tiposDeProyectos'>
            <h2>Elegí entre un mundo de proyectos y voluntarios!</h2>

            <div className='types'>
                <article>
                    <p>Desarrollo de software</p>
                    <Icon className='icon' icon='clarity:computer-line' color='#406bc8'/>
                </article>

                <article>
                    <p>Diseño e ilustración</p>
                    <Icon className='icon' icon='clarity:design-line' color='#406bc8'/>
                </article>

                <article>
                    <p>Educación</p>
                    <Icon className='icon' icon='carbon:education' color='#406bc8'/>
                </article>

                <article>
                    <p>Redacción de contenido y traducción</p>
                    <Icon className='icon' icon='jam:write' color='#406bc8'/>
                </article>

                <article>
                    <p>Edición de audio y video</p>
                    <Icon className='icon' icon="ant-design:video-camera-outlined" color='#406bc8'/>
                </article>

                <article>
                    <p>Marketing</p>
                    <Icon className='icon' icon='icon-park-outline:sales-report' color='#406bc8'/>
                </article>

                <article>
                    <p>Análisis y presentación de datos</p>
                    <Icon className='icon' icon='clarity:data-cluster-line' color='#406bc8'/>
                </article>
            </div>

        </section>
    )
}