import './style.css'
import profilepicture from '../../assets/profile.png'

function Profile() {
    return(
        <div className='profile'>
            <section className='profilepicture'>
                <img src={profilepicture}/>
            </section>
            <section className='competences'>
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
            </section>
        </div>
    )
}

export default Profile