import React from 'react'

const PersonForm = ({ onSubmit, newName, handleNameChange, newNumber, handleNumberChange }) =>
    <div>
        <h2>Add new person</h2>
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </div>

export default PersonForm