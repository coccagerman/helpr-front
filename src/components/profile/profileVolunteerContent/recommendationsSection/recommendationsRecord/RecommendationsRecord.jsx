import { Icon } from '@iconify/react'

export default function RecommendationsRecord() {
    return (
        <article className='recommendationsRecord'>
            <div className='icon-container'>
                <Icon icon='grommet-icons:form-view-hide' color='#406bc8' className='icon'/>
            </div>

            <div className='horizontal-container'>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Nombre:</h3>
                        <p>Loremememe</p>
                    </div>
                    <div className='record-data'>
                        <h3>Posición:</h3>
                        <p>Loremememe</p>
                    </div>
                    <div className='record-data'>
                        <h3>Empresa:</h3>
                        <p>Loremememe</p>
                    </div>
                </div>
                <div className='horizontal-division'>
                    <div className='record-data'>
                        <h3>Fecha:</h3>
                        <p>1/2/1998</p>
                    </div>
                </div>
            </div>

            <div className='record-data work-description'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio odit blanditiis numquam velit mollitia, pariatur quam impedit deserunt earum corporis laboriosam magni provident minus nam incidunt nulla ipsa sequi similique. Eum provident consequuntur molestias amet ad esse excepturi! Laudantium sapiente, recusandae reiciendis dignissimos nihil quod repellat expedita laboriosam quos libero.</p>
            </div>
        </article>
    )
}