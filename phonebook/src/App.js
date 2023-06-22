import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Content from './components/Content'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '407-555-5555', id: 1 },
    { name: "test friend", number: '155-555-4444', id: 2}
  ]) 
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if (persons.some(el => el.name === personObject.name))  
    {setNewName(''); setNewNumber(''); return alert(`${personObject.name} is already in phonebook`)}
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const regex = new RegExp( newFilter, 'i' )
    const filtered = () => persons.filter(person => person.name.match(regex))
    setFilteredPersons(filtered)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Content filteredPersons={filteredPersons} persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App