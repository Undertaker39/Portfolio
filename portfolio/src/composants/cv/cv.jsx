import './style.css'
import cv from '../../assets/CV.pdf'

function Cv() {
    return(
        <section id='cv'>
            <h2>Cv</h2>
            <article>
                <ul>
                    <li>BALP Pierre</li>
                    <li>31 ans</li>
                    <li>Permis A et B</li>
                    <li>Véhicules personnels</li>
                    <li>"Diplome en developpement web front-end"</li>
                    <li>9 ans en industrie agroalimentaire</li>
                    <li>Maitrise de l'anglais</li>
                </ul>
                <a href={cv} target='_blank'>Voir mon CV</a>
            </article>
        </section>
    )
}

export default Cv