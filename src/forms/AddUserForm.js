import PropTypes from 'prop-types'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

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

    console.log(name)
    console.log(value)

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
      <TextField
        type="text"
        color="primary"
        name="firstName"
        label="First name"
        fullWidth
        margin="normal"
        required
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: '2px'
          }
        }}
        value={user.firstName}
        onChange={handleInputChange}
      />
      <TextField
        type="text"
        name="lastName"
        color="primary"
        label="Last name"
        fullWidth
        margin="normal"
        required
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: '2px'
          }
        }}
        value={user.lastName}
        onChange={handleInputChange}
      />
      <TextField
        type="email"
        name="email"
        color="primary"
        label="Email"
        fullWidth
        margin="normal"
        required
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: '2px'
          }
        }}
        value={user.email}
        onChange={handleInputChange}
      />
      <TextField
        type="number"
        name="phone"
        label="Phone"
        color="primary"
        fullWidth
        margin="normal"
        required
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: '2px'
          }
        }}
        value={user.phone}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        size="medium"
        type="submit"
        fullWidth
        sx={{ margin: '1rem 0' }}
      >
        Add
      </Button>
    </form>
  )
}

AddUserForm.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default AddUserForm
