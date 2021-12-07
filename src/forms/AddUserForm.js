import PropTypes from 'prop-types'
import React, { useState } from 'react'

const AddUserForm = (props) => {
  const { addUser } = props
  const initialFormState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.firstName || !user.lastName || !user.email || !user.phone) {
          return
        }

        addUser(user)
        setUser(initialFormState)
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
      <button>Add new user</button>
    </form>
  )
}

AddUserForm.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default AddUserForm
