import { useState } from 'react'
import sites from '../../assets/sites.json'
import './style.css'

function Site() {
    let [position,setPosition] = useState(0)
    console.log(position)

    return(
        <div className='site'>
            <section className='sites'>
                <img src={sites[position].image} />
                <div className='description'>
                    <h2>Mes projets</h2>
                    <h3>{sites[position].nom}</h3>
                    <a href={sites[position].github} target="_blank">Repo Github</a>
                    <a href={sites[position].link} target="_blank">Lien vers le site</a>
                    <div className='selector'>
                        <i className="fa-solid fa-circle-arrow-left" onClick={()=>{position === 0 ? setPosition(position=sites.length-1) : setPosition(position-1)}}></i>
                        <p>{position+1}/{sites.length}</p>
                        <i className="fa-solid fa-circle-arrow-right" onClick={()=>{position === sites.length-1 ? setPosition(position=0) : setPosition(position+1)}}></i>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Site