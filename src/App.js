import React, { useState, Fragment } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
  // Data
  const userAddress = [
    {
      id: 1,
      firstName: 'Dan',
      lastName: 'Abramov',
      email: 'dan@reactjs.org',
      phone: '08222222'
    }
  ]

  const initialFormState = {
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  // Setting state
  const [users, setUsers] = useState(userAddress)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone
    })
  }

  return (
    <Box>
      <Container maxWidth="lg">
        <h1>Users adress Information</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing
              ? (
              <Fragment>
                <h2>Edit address</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
                )
              : (
              <Fragment>
                <h2>Add address</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
                )}
          </div>
          <div className="flex-large">
            <h2>View address</h2>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default App
