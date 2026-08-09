import './App.css'
import Cv from './composants/cv/cv'
import Interet from './composants/interet/interet'
import Profile from './composants/profile/profile'
import Site from './composants/site/site'

function App() {

  return (
    <div class="articles">
      <article>
        <Profile/>
      </article>
      <article>
        <Site/>
      </article>
      <article>
        <Interet/>
      </article>
      <article>
        <Cv/>
      </article>
    </div>
  )
}

export default App
