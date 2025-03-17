import { collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from "react"
import { AnimatePresence } from 'framer-motion'

import { db } from "../firebase.js"
import axios from "axios"

import Logo from './components/Logo.jsx'
import AddButton from './components/AddButton.jsx'
import ToDo from './components/ToDo.jsx'
import Note from './components/Note.jsx'

import './App.css'

function App() {

  const [qa, setQA] = useState({})
  useEffect(() => {getQA()}, [])

  const [toDoList, setToDo] = useState([])
  useEffect(() => getData("to-do", setToDo), []);

  const [noteList, setNote] = useState([])
  useEffect(() => getData("notes", setNote), []);


  const getData = (col, set) => onSnapshot(collection(db, col), (snapshot) => {
    const newList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    set(newList);
  });

  const getQA = async () => {
    try{
      const res = await axios.get("http://api.quotable.io/random")
      setQA({quote: res.data.content, author: res.data.author})
    }
    catch (err) {
      console.error("ERR", err)
    }
  }

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <section className='title'>
          <h1 className='font-bold'>My To-do List</h1>
        </section>
        <section className='interface flex'>
          <div className='interface-container w-[30%] mr-2 flex-auto'>
              <h1 className='font-extrabold text-3xl pb-2 mb-4 border-b-2 border-white'>Notes:</h1>
              <div className='notes'>
                <AnimatePresence>
                  {noteList.map((note, index) => <Note key={index} content={note.content} />)}
                </AnimatePresence>
                <AddButton text="Add some notes too!" onclick = {() => {setNote(noteList.concat("Notes to remember:"))}}/>
              </div>
          </div>
          <div className='interface-container w-[60%] ml-2 flex-auto'>
            <h1 className='font-extrabold text-3xl pb-2 mb-4 border-b-2 border-white'>To-do:</h1>
            <div className='to-do'>
              {toDoList.map((todo, i) => <ToDo key={i} todo={todo.task}></ToDo>)}
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
