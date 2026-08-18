import { useState } from 'react'
import sites from '../../assets/sites.json'
import './style.css'

function Site() {
    let [position,setPosition] = useState(0)
    let [modale,setModale] = useState(false)
    const toggleModale = () => {
        setModale(!modale);
    }

    if (modale === false) {
        return(
            <section id='site'>
                <article className='sites'>
                    <h2>Mes projets</h2>
                    <h3>{sites[position].nom}</h3>
                    <div className='carrousel'>
                        <button onClick={()=>{position === 0 ? setPosition(position=sites.length-1) : setPosition(position-1)}}>
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </button>
                        <div className='image'>
                            <img src={sites[position].image} alt={sites[position].alt} onClick={toggleModale} tabIndex={0}/>
                        </div>
                        <button onClick={()=>{position === sites.length-1 ? setPosition(position=0) : setPosition(position+1)}}>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </button>
                    </div>
                    <p className='indicator'>{position+1}/{sites.length}</p>
                </article>
            </section>
        )
    }else{
        return(
            <section id='site'>
                <aside>
                    <section id='modale'>
                        <article className='wrapper'>
                            <button  onClick={toggleModale}>
                                <i className="fa-regular fa-circle-xmark"></i>
                            </button>
                            <h3>{sites[position].nom}</h3>
                            <div className='contenu'>
                                <img src={sites[position].image}/>
                                <div className='info'>
                                    <div>
                                        <h4>Contexte</h4>
                                        <p>{sites[position].contexte}</p>
                                    </div>
                                    <div>
                                        <h4>Compétences apprises</h4>
                                        <p>{sites[position].competences}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='liens'>
                                <a href={sites[position].github} target="_blank">Repo Github</a>
                                <a href={sites[position].link} target="_blank">Lien vers le site</a>
                            </div>
                        </article>
                    </section>
                </aside>
                <article className='sites'>
                    <h2>Mes projets</h2>
                    <h3>{sites[position].nom}</h3>
                    <div className='carrousel'>
                        <button onClick={()=>{position === 0 ? setPosition(position=sites.length-1) : setPosition(position-1)}}>
                            <i className="fa-solid fa-circle-arrow-left"></i>
                        </button>
                        <div className='image'>
                            <img src={sites[position].image} alt={sites[position].alt} onClick={toggleModale}/>
                        </div>
                        <button onClick={()=>{position === sites.length-1 ? setPosition(position=0) : setPosition(position+1)}}>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                        </button>
                    </div>
                    <p className='indicator'>{position+1}/{sites.length}</p>
                </article>
            </section>
        )
    }
}

export default Site