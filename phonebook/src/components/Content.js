import Person from './Person'

const Content = ({filteredPersons, persons, newFilter, deletePerson}) => {
  if (newFilter.length === 0) {
    return (
      <ul>
        {persons.map((person, i) => 
          <Person key={i} person={person} deletePerson={deletePerson} />
          )}
      </ul>
    )
  }
  else {
    return (
      <ul>
      {filteredPersons.map((person, i) =>
          <Person key={i} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
  }
}

export default Content;