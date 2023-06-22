const Content = ({filteredPersons, persons, newFilter}) => {
  if (newFilter.length === 0) {
    return (
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name} - {person.number}</li>
          )}
      </ul>
    )
  }
  else {
    return (
      <ul>
      {filteredPersons.map((person) =>
          <li key={person.name}>{person.name} - {person.number}</li>
        )}
      </ul>
    )
  }
}

export default Content;