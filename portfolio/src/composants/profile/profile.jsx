import './style.css'
import profilepicture from '../../assets/profile.png'

function Profile() {
    return(
        <div className='profile'>
            <section className='profilepicture'>
                <img src={profilepicture}/>
            </section>
            <section className='competences'>
                <div className='ico'>
                    <i class="fa-solid fa-laptop-code"></i>
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3"></i>
                    <i class="fa-brands fa-square-js"></i>
                    <i class="fa-brands fa-react"></i>
                </div>
                <div className='legend'>
                    <p>Developpeur front-end</p>
                    <p>Html</p>
                    <p>Css : Sass : Scss</p>
                    <p>Javascript</p>
                    <p>React</p>
                </div>
            </section>
        </div>
    )
}

export default Profile