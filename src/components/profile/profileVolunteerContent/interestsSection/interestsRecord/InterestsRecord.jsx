export default function InterestsRecord() {

    const interests = ['Deportes', 'Educación', 'Tecnología']

    return (
        <section className='interestsRecord'>
            {interests.map(item => <article className='record-data'>{item}</article>)}
        </section>
    )
}