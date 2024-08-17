
import { TwitterFollowCard } from './TwitterFollowCard/TwitterFollowCard'
import './App.css'

function App() {

  const formatUserName = (userName) => `@${userName}`


  return (
    <>

      <section className='App'>

        <TwitterFollowCard formatUserName={formatUserName}  userName='midudev'>
         Miguel Angel Duran
        </TwitterFollowCard>

        <TwitterFollowCard formatUserName={formatUserName}  userName='elonmusk' >
          Elon Musk
        </TwitterFollowCard>

        <TwitterFollowCard formatUserName={formatUserName}  userName='jmilei'>
          Javier Gerardo Milei
        </TwitterFollowCard>

        <TwitterFollowCard formatUserName={formatUserName}  userName='GordoDan_'>
          El Gordo Dan
        </TwitterFollowCard>

      </section>


            </>
            )
}

            export default App
