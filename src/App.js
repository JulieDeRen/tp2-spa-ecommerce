import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Catalog from './components/Catalog'
import AddEvent from './components/AddEvent'
import Footer from './components/Footer'
import About from './components/About'



function App() {
//1 - Global

const [tasks, setCards] = useState ([])

useEffect(()=>  {
    const getCards = async () => {
      const eventsFromServer = await fetchTasks()
      setCards(eventsFromServer)
    }
    getCards()
    //fetchTasks()
},[])

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  //console.log(data)
  return data
}

const fetchCard = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  //console.log(data)
  return data
}

//Delete
const deleteCard = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  //console.log(id)
  setCards(tasks.filter((task) => task.id !== id))
}

// Update
const editCard = async (task, id) => {
  const buttonAdd = document.querySelector(".button-add");
  console.log(buttonAdd);
  buttonAdd.click();

  if(buttonAdd.click()){
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
  })
  const newTask = await res.json()
  setCards([...tasks, newTask])
  }
 
}


//TogglePromotion
const toggleReminder = async (id) => {
  const taskToToggle = await fetchCard(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  //console.log(updTask)
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
  })
  const data = await res.json()
 // console.log(id)
  setCards(tasks.map((task) => task.id === id ? { ...task, reminder:data.reminder} : task))

}

//Add
const addTask =  async (task) => {
  
    const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  //console.log(task)
  //const id = Math.floor(Math.random() * 1000)
  //const newTask = {id, ...task}
  //console.log(newTask)
  const newTask = await res.json()
  setCards([...tasks, newTask])
}

//toggle Form

const [showAddTask, setShowAddTask] = useState(false)

  return (
    <BrowserRouter>
      <>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        
        { showAddTask && <AddEvent onAdd={addTask}/> }
        <Routes>
            <Route path="/" element={<Catalog tasks={tasks} onDeleteMany={deleteCard} onEditMany={editCard} onToggleMany={toggleReminder}/>}/>
          </Routes>
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;


//https://codeshare.io/wnvlEK