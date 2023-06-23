import Country from './Country'

const Content = ({matches, onClick}) => {

  if (matches.length > 10){
  return (
    <div>
      <p>Too many matches, specify another filter</p>
    </div>
  )
  }
  else if (matches.length <= 10 && matches.length > 1){
  return (
    <div>
      <ul>
      {matches.map((names) => 
        <li key={names.name.common}>{names.name.common}</li> 
        )}
      </ul>
    </div>
  )
  }
  else if (matches.length === 1){
    return (
      <div>
        <Country name={matches[0].name.common} capital={matches[0].capital[0]} area={matches[0].area} languages={matches[0].languages} flag={matches[0].flags.png}/>
      </div>
    )
  }
  else {
    return (
      <div>
        No matches, please specify in filter
      </div>
    )
  }
}

export default Content

// <Country name={matches[0].name.common} capital={matches[0].capital[0]} area={matches[0].area} languages={matches[0].languages} flag={matches[0].flags}