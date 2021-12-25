import RecommendationsRecord from './recommendationsRecord/RecommendationsRecord'

export default function RecommendationsSection() {

    return (
        <div className='Recommendations profileSection'>
            <div className='profileSection-header'>
                <h2>Recomendaciones recibidas</h2>
            </div>
            <RecommendationsRecord />
        </div>
    )
}