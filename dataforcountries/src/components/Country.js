const Country = ({name, capital, area, languages, flag}) => {
  
  return(
    <div>
      <h2>{name}</h2>
      <div>
        <p>capital {capital}</p>
        <p>area {area}</p>
      </div>
      <h3>Languages:</h3>
      <div>
        <ol>
          {Object.keys(languages).map((keyName, i) => (
            <li key={i}>{languages[keyName]}</li>
          ))}
        </ol>
      </div>
      <img src={flag} alt="flag"/>
    </div>
  )
}

export default Country

//Object.keys(languages).map((keyName, i) => {
// <li key={i}
//}