import './style.css'

function Contact() {
    return(
        <section id='contact'>
            <h2>Contact</h2>
            <article>
                <p>Je suis joignable sur :</p>
                <ul className='tel'>
                    <li><i className="fa-solid fa-mobile"></i> 06.87.84.18.17</li>
                    <li><i className="fa-solid fa-clock"></i> De 8h à 17h</li>
                    <li><i className="fa-regular fa-calendar-days"></i>5 J/7</li>
                </ul>
                <ul className='mail'>
                    <li><i className="fa-solid fa-at"></i> p.balp39@gmail.com</li>
                    <li><i className="fa-solid fa-clock"></i> H24</li>
                    <li><i className="fa-regular fa-calendar-days"></i>7 J/7</li>
                </ul>
            </article>
        </section>
    )

}

export default Contact
