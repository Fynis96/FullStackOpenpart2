import {useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Content from './components/Content'



const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if(newFilter) {
    const regex = new RegExp(newFilter, 'i')
    const filtered = () => countries.filter(country => country.name.common.match(regex))
    setMatches(filtered)
    }
  }

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <Content matches={matches} />
    </div>
  )
}

export default App;
