const Button = ({onClick, text, value}) => {
  return (
      <button value={value} onClick={onClick}> 
        {text}
      </button>
    )
}

export default Button