import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Catalog from './components/Catalog'
import AddEvent from './components/AddEvent'
import Footer from './components/Footer'
import About from './components/About'



function App() {
//1 - Global

const [cards, setCards] = useState ([])

useEffect(()=>  {
    const getCards = async () => {
      const eventsFromServer = await fetchEvents()
      setCards(eventsFromServer)
    }
    getCards()
    //fetchEvents()
},[])

const fetchEvents = async () => {
  const res = await fetch('http://localhost:5000/events')
  const data = await res.json()
  //console.log(data)
  return data
}

const fetchCard = async (id) => {
  const res = await fetch(`http://localhost:5000/events/${id}`)
  const data = await res.json()
  //console.log(data)
  return data
}

//Delete
const deleteCard = async (id) => {
  await fetch(`http://localhost:5000/events/${id}`, {
    method: 'DELETE',
  })
  //console.log(id)
  setCards(cards.filter((event) => event.id !== id))
}

// Update
const editCard = async (id) => {
  const getCard = await fetchCard(id)
  const buttonAdd = document.querySelector(".button-add");

  buttonAdd.click();


  if(buttonAdd.click(id)){
    const res = await fetch(`http://localhost:5000/events/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(cards)
  })
  const editedEvents = await res.json()
  setCards([...cards, editedEvents]);
  
  }

  // renvoyer la donnée
  return getCard;

 
}


//TogglePromotion
const toggleReminder = async (id) => {
  console.log("toggle")
  const cardToToggle = await fetchCard(id)
  const editPromotion= {...cardToToggle, promotion: !cardToToggle.promotion}
  //console.log(updTask)
  const res = await fetch(`http://localhost:5000/events/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(editPromotion)
  })
  const data = await res.json()
 // console.log(id)
  setCards(cards.map((event) => event.id === id ? { ...event, promotion:data.promotion} : event))

}

//Add
const addEvent =  async (event) => {
  
    const res = await fetch('http://localhost:5000/events', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(event)
  })
  //console.log(task)
  //const id = Math.floor(Math.random() * 1000)
  //const newTask = {id, ...task}
  //console.log(newTask)
  const newEvent = await res.json()
  setCards([...cards, newEvent])
}

//toggle Form

const [showAddEvent, setShowAddEvent] = useState(false)

  return (
    <BrowserRouter>
      <>
        <Header onAdd={() => setShowAddEvent(!showAddEvent)} showAdd={showAddEvent}/>
        
        { showAddEvent && <AddEvent onAdd={addEvent}  event={editCard}/> }
        <Routes>
            <Route path="/" element={<Catalog tasks={cards} onDeleteMany={deleteCard} onEditMany={editCard} onToggleMany={toggleReminder}/>}/>
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