import './style.css'

function Interet() {
    return(
        <section id='interet'>
            <h2>Mes centres d'intérêts</h2>
            <article className='interets'>
                <div>
                    <i className="fa-solid fa-microchip"></i>
                    <p>L'informatique (soft/hard ware)</p>
                </div>
                <div>
                    <i className="fa-solid fa-gamepad"></i>
                    <p>Les jeux vidéo</p>
                </div>
                <div>
                    <i className="fa-solid fa-plane"></i>
                    <p>L'aéronautique (détenteur du BIA)</p>
                </div>
                <div>
                    <i className="fa-solid fa-satellite"></i>
                    <p>L'aérospatiale</p>
                </div>
                <div>
                    <i className="fa-solid fa-flag-checkered"></i>
                    <p>Les Sports automobile</p>
                </div>
                <div>
                    <i className="fa-solid fa-music"></i>
                    <p>La musique (pratique piano et guitare)</p>
                </div>
            </article>
        </section>
    )
}

export default Interet