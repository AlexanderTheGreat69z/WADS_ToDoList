import { doc, collection, onSnapshot, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from "react"
import { AnimatePresence } from 'framer-motion'

import { db } from "../firebase.js"
import axios from "axios"

import Logo from './components/Logo.jsx'
import AddButton from './components/AddButton.jsx'
import ToDo from './components/ToDo.jsx'
import Note from './components/Note.jsx'
import AddNoteModal from './modals/AddNoteModal.jsx'
import AddTodoModal from './modals/AddTodoModal.jsx'

import './App.css'

function App() {

  const [qa, setQA] = useState({})
  useEffect(() => {getQA()}, [])

  const [toDoList, setToDo] = useState([])
  const [showAddTodoModal, setShowATM] = useState(false)
  useEffect(() => getData("to-do", setToDo), []);

  const [noteList, setNote] = useState([])
  const [showAddNoteModal, setShowANM] = useState(false)
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

  const updateData = async (docID) => {
    const docRef = doc(db, "users", docID);
    await updateDoc(docRef, {
      age: 30
    });
    console.log("Document updated!");
  }

  const addToDo = async (e) => {
    e.preventDefault()
    const form = e.target
    const task = form.task.value
    const docRef = await addDoc(collection(db, "to-do"), {
      task: task,
      completed: false,
    })
    setToDo([...toDoList, {id: docRef.id, task: docRef.task, completed: docRef.completed}])
    setShowATM(false)
  }

  const addNote = async (e) => {
    e.preventDefault()
    const form = e.target
    const content = form.content.value
    const docRef = await addDoc(collection(db, "notes"), {
      content: content,
    })
    setNote([...noteList, {id: docRef.id, content: docRef.content}])
    setShowANM(false)
  }

  const deleteData = async (col, docId) => {
    await deleteDoc(doc(db, col, docId));
    console.log("Document deleted!");
  };

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
                {noteList.map((note, index) => <Note key={index} content={note.content} ontrash={() => deleteData("notes", note.id)} />)}
                <AddButton text="Add some notes too!" onclick = {() => {setShowANM(true)}}/>
              </div>
          </div>
          <div className='interface-container w-[60%] ml-2 flex-auto'>
            <h1 className='font-extrabold text-3xl pb-2 mb-4 border-b-2 border-white'>To-do:</h1>
            <div className='to-do'>
              {toDoList.map((todo, i) => <ToDo key={i} todo={todo.task} onCheck={() => deleteData("to-do", todo.id)}></ToDo>)}
              <AddButton text="Add something to do!" onclick={() => {setShowATM(true)}}/>
            </div>
          </div>
        </section>
        <section className="quote">
          <p><b><i>"{qa.quote}"</i> <br></br>- {qa.author}</b></p>
        </section>
      </main>

      <AddNoteModal isOpen={showAddNoteModal} onClose={() => setShowANM(false)} onSubmit={addNote} />
      <AddTodoModal isOpen={showAddTodoModal} onClose={() => setShowATM(false)} onSubmit={addToDo} />
    </>
  )
}

export default App
