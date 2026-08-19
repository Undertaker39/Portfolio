import './style.css'
import profilepicture from '../../assets/profile.webp'
import fondpicture from '../../assets/fond_profile.webp'

function Profile() {
    return(
        <section id='profile'>
            <article className='profilepicture'>
                <img className='fond' src={fondpicture} fetchPriority='low' alt='Contour de la photo de profile'></img>
                <img className='picture' src={profilepicture} alt='Photo de Pierre BALP' fetchPriority='high'/>
            </article>
            <article className='competences'>
                <div className='code'>
                    <i className="fa-solid fa-laptop-code"></i>
                    <p>Developpeur front-end</p>
                </div>
                <div className='html'>
                    <i className="fa-brands fa-html5"></i>
                    <p>Html</p>                  
                </div>
                <div className='css'>
                    <i className="fa-brands fa-css3"></i>
                    <p>Css : Sass : Scss</p>                  
                </div>
                <div className='js'>
                    <i className="fa-brands fa-square-js"></i>
                    <p>Javascript</p>
                </div>
                <div className='react'>
                    <i className="fa-brands fa-react"></i>
                    <p>React</p>
                </div>
            </article>
        </section>
    )
}

export default Profile