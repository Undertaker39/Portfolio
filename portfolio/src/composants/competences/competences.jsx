import './style.css'
import sites from '../../assets/sites.json'

function Competences() {
    return(
        <section id='compétences'>
            <h2>Mes compétences</h2>
            <h3>En informatique</h3>
            <ul>
                {sites.map(({nom, competences}) =>
                <li key={nom}>{competences}</li>)}
            </ul>
            <h3>En industrie</h3>
            <ul>
                <li>SST(Sauveteur Secouriste du Travail)</li>
                <li>Cariste 1.3.5</li>
                <li>travail en hauteru avec le port du harnais</li>
                <li>Habilitation électrique BS/BE</li>
            </ul>
        </section>
    )
}

export default Competences