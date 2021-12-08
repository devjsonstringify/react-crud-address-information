import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

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
      <TextField
        type="text"
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
      <Box sx={{ margin: '1rem 0' }}>
        <Button type="submit" variant="contained" color="primary" sx={{ mr: '1rem' }}>
          Update
        </Button>
        <Button type="cancel" variant="text" onClick={() => setEditing(false)}>
          Cancel
        </Button>
      </Box>
    </form>
  )
}

EditUserForm.propTypes = {
  currentUser: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  setEditing: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
}

export default EditUserForm
