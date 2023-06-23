import { useState, useEffect } from 'react'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Content from './components/Content'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.filter((person) =>
      person.name === newName
    )

    const personToAdd = person[0]
    const updatedPerson = { ...personToAdd, number: newNumber }

    if (person.length !== 0) {
      if (window.confirm(`${personToAdd.name} is already added to the phonebook, replace the old number with a new one ?`)) {
        personService
          .update(updatedPerson.id, updatedPerson).then(returnedPerson => {
            console.log(`${returnedPerson.name} succesfully updated`)
            setPersons(persons.map(personItem => personItem.id !== personToAdd.id ? personItem : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(
              `${updatedPerson.name} was successfully updated`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch((error) => {
            console.log(error)
            setPersons(persons.filter(person => person.id !== updatedPerson.id))
            setNewName('')
            setNewNumber('')
            setMessage(
              `[ERROR] ${updatedPerson.name} was already deleted from server`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    } else {
      const personToAdd = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personToAdd)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(
            `${newName} was successfully added`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setMessage(
            `[ERROR] ${error.response.data.error}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          console.log(error.response.data)
        })
    }
  }

  const deletePerson = (id) => {
    const filteredPerson = persons.filter(person => person.id === id)
    const personName = filteredPerson[0].name
    const personId = filteredPerson[0].id
    if (window.confirm(`Delete ${personName} ?`)) {
      personService
        .remove(personId)
      console.log(`${personName} succesfully deleted`)
      setMessage(
        `${personName} was successfully deleted`
      )
      setPersons(persons.filter(person => person.id !== personId))
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    const regex = new RegExp(newFilter, 'i')
    const filtered = () => persons.filter(person => person.name.match(regex))
    setFilteredPersons(filtered)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter value={newFilter} onChange={handleFilterChange} />
      <PersonForm onSubmit={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Content filteredPersons={filteredPersons} persons={persons} newFilter={newFilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App