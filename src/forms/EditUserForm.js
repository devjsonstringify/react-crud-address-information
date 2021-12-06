import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const { currentUser, setEditing, updateUser } = props
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(currentUser)
  }, [props])
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        updateUser(user.id, user)
      }}
    >
      <label>First name</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <label>Last name</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Phone</label>
      <input
        type="number"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
      />
      <button>Update</button>
      <button
        onClick={() => setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

EditUserForm.propTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired
  }),
  setEditing: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
}

export default EditUserForm
