import './App.css'
import Contact from './composants/contact/contact'
import Cv from './composants/cv/cv'
import Interet from './composants/interet/interet'
import Profile from './composants/profile/profile'
import Site from './composants/site/site'

function App() {

  return (
    <div className="articles">
      <article>
        <Profile/>
      </article>
      <article>
        <Site/>
      </article>
      <article>
        <Interet/>
      </article>
      <article className='about'>
        <Cv/>
        <Contact/>
      </article>
    </div>
  )
}

export default App
