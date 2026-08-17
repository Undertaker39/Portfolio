import './App.css'
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
      <Interet/>
      <section className='about'>
        <Cv/>
        <Contact/>
      </section>
    </main>
  )
}

export default App
