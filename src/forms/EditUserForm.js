import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  console.log(user);

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
      <label>First name</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
      <label>Last name</label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
      <label>Email</label>
      <input type="email" name="email" value={user.email} onChange={handleInputChange} />
      <label>Phone</label>
      <input type="number" name="phone" value={user.phone} onChange={handleInputChange} />
      <button>Update</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
} 

export default EditUserForm
