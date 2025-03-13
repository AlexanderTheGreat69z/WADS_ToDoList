import { collection, addDoc, Timestamp } from 'firebase/firestore'
import db  from "../firebase.js"

import { useState, useEffect } from "react"
import axios from "axios"
import './App.css'

import Logo from './components/Logo.jsx'
import AddButton from './components/AddButton.jsx'
import ToDo from './components/ToDo.jsx'
import Note from './components/Note.jsx'

function App() {
  const todo_DefaultData = {
    id: 1,
    task: "Do something"
  }
  const [qa, setQA] = useState({})
  const [toDoList, setToDo] = useState([
    "Do the dishes",
    "Get the laundry",
    "Throw trash bag",
  ])
  const [noteList, setNote] = useState([
    "Mom loves strawberries and hates chocolate. Dont buy a chocolate cake",
  ])

  const getQA = async () => {
    try{
      const res = await axios.get("http://api.quotable.io/random")
      setQA({quote: res.data.content, author: res.data.author})
    }
    catch (err) {
      console.error("ERR", err)
    }
  }

  useEffect(() => {getQA()}, [])

  // const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     try {
  //         await addDoc(collection(db, 'tasks'), {
  //             title     : title,
  //             desc      : desc,
  //             completed : false,
  //             created   : Timestamp.now(),
  //         })
  //         onclose()
  //     }
  //     catch (err){
  //         alert(err)
  //     }
  // }
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <section className='title'>
          <h1 contentEditable className='font-bold'>My To-do List</h1>
        </section>
        <section className='interface flex'>
          <div className='interface-container w-[30%] mr-2 flex-auto'>
              <h1 className='font-extrabold text-3xl pb-2 mb-4 border-b-2 border-white'>Notes:</h1>
              <div className='notes'>
                {noteList.map((note) => <Note content={note}></Note>)}
                <AddButton text="Add some notes too!" onclick = {() => {setNote(noteList.concat("Notes to remember:"))}}/>
              </div>
          </div>
          <div className='interface-container w-[60%] ml-2 flex-auto'>
            <h1 className='font-extrabold text-3xl pb-2 mb-4 border-b-2 border-white'>To-do:</h1>
            <div className='to-do'>
              {toDoList.map((todo) => <ToDo todo={todo}></ToDo>)}
              <AddButton text="Add something to do!" onclick={() => {setToDo(toDoList.concat("Do something"))}}/>
            </div>
          </div>
        </section>
        <section className="quote">
          <p><b><i>"{qa.quote}"</i> <br></br>- {qa.author}</b></p>
        </section>
      </main>
    </>
  )
}

export default App
