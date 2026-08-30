import './style.css'

function Contact() {
    return(
        <section id='contact'>
            <h2>Contact</h2>
            <article>
                <p>Je suis joignable sur :</p>
                <ul className='tel'>
                    <li><i className="fa-solid fa-mobile"></i> 06.87.84.18.17</li>
                </ul>
                <ul className='mail'>
                    <a href='mailto:p.balp39@gmail.com'><li><i className="fa-solid fa-at"></i> p.balp39@gmail.com</li></a>
                </ul>
            </article>
        </section>
    )

}

export default Contact
