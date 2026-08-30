import './App.css'
import Apropos from './composants/apropos/apropos'
import Competences from './composants/competences/competences'
import Contact from './composants/contact/contact'
import Cv from './composants/cv/cv'
import Interet from './composants/interet/interet'
import Profile from './composants/profile/profile'
import Site from './composants/site/site'

function App() {

  return (
    <main>
      <Profile/>
      <Site/>
      <Competences/>
      <section className='me'>
        <Apropos/>
        <Interet/>
      </section>
      <section className='about'>
        <Cv/>
        <Contact/>
      </section>
    </main>
  )
}

export default App
