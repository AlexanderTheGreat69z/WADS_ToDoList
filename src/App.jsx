import { useState } from 'react'
import Logo from './components/Logo.jsx'
import AddButton from './components/AddButton.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <section className='title'>
          <h1 contentEditable className='font-bold'>My To-do List</h1>
        </section>
        <section className='interface'>
          <div className='interface-container notes'>
              <h1 className='font-extrabold text-3xl pb-2 mb-4 border-b-2 border-white'>Notes:</h1>
              <AddButton text="Add some notes too!" />
          </div>
          <div className='interface-container to-do-list'>
            <h1 className='font-extrabold text-3xl pb-2 mb-4 border-b-2 border-white'>To-do:</h1>
            <AddButton text="Add something to do!" />
          </div>
        </section>
        <footer className='quote'>

        </footer>
      </main>
    </>
  )
}

export default App
