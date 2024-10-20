import './App.css'
import { Listing } from './components/Listing'
import { ParseList } from './components/ParseList'


function App() {


  return (

    <ParseList render={(accounts) => <Listing items={accounts} />} />

  )
}

export default App
