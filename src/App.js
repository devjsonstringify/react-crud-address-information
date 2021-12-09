import React, { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import { ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import { theme } from './theme'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 2,
  borderRadius: '1rem',
  padding: '1rem'
}

const App = () => {
  // Data
  const userAddress = [
    {
      id: 1,
      firstName: 'Dan',
      lastName: 'Abramov',
      email: 'dan@reactjs.org',
      phone: '821999'
    },
    {
      id: 2,
      firstName: 'Julianna',
      lastName: 'Chaucer',
      email: 'jchaucer0@google.co.jp',
      phone: '1119435154'
    },
    {
      id: 3,
      firstName: 'Langsdon',
      lastName: 'Capes',
      email: 'lcapes1@youtu.be',
      phone: '5851190741'
    },
    {
      id: 4,
      firstName: 'Freeman',
      lastName: 'Terlinden',
      email: 'fcheng3@senate.gov',
      phone: '9682084196'
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
  const [isModalOpen, setIsModelOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [userQuery, setUserQuery] = useState('')

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setIsEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setIsEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  const editRow = (user) => {
    setIsEditing(true)
    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone
    })
  }

  const onHandleModalOpen = () => setIsModelOpen((prev) => !prev)
  const onHandleSearch = (event) => {
    const { value } = event.target
    setUserQuery(value)
  }

  const results = !userQuery
    ? users
    : users.filter(
      (user) =>
        user.firstName
          .toLowerCase()
          .includes(userQuery.toLocaleLowerCase()) ||
          user.lastName.toLowerCase().includes(userQuery.toLocaleLowerCase())
    )

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: '1rem',
          boxSizing: 'border-box',
          bgcolor: '#f1f1f3',
          display: 'center',
          height: '100%'
        }}
      >
        <Container maxWidth="lg" sx={{ margin: '5rem auto 0' }}>
          <Typography variant="h4">Users</Typography>
          <Box
            sx={{
              mb: '1rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '2rem'
            }}
          >
            <Box>
              <Button
                onClick={onHandleModalOpen}
                variant="contained"
                size="medium"
                sx={{
                  margin: '1rem 0'
                }}
              >
                <AddIcon /> Add
              </Button>
            </Box>
            <Box>
              <TextField
                name="search"
                type="text"
                label="search user"
                placeholder="Search user"
                fullWidth
                size="small"
                margin="normal"
                onChange={onHandleSearch}
                sx={{
                  bgcolor: '#fff',
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                    borderWidth: '2px'
                  }
                }}
              />
            </Box>
          </Box>

          <Modal
            open={isModalOpen}
            onClose={onHandleModalOpen}
            aria-labelledby="modal-add-user"
            closeAfterTransition
          >
            <Box sx={modalStyle}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  width: '100%'
                }}
              >
                <Typography variant="h6" color="primary" fontWeight="500">
                  New user
                </Typography>
                <IconButton
                  aria-label="cancel"
                  onClick={onHandleModalOpen}
                  variant="contained"
                  size="small"
                  sx={{
                    margin: '0',
                    ':hover': { border: 0 }
                  }}
                >
                  <CloseIcon
                    sx={{
                      fill: '#ffff',
                      bgcolor: 'primary.main',
                      borderRadius: '5px'
                    }}
                  />
                </IconButton>
              </Box>
              <AddUserForm addUser={addUser} />
            </Box>
          </Modal>
          {isEditing
            ? (
            <Box
              sx={{
                borderRadius: '1rem',
                bgcolor: '#fff',
                padding: '1rem',
                boxSizing: 'border-box'
              }}
            >
              <EditUserForm
                editing={isEditing}
                setEditing={setIsEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Box>
              )
            : (
            <Box sx={{ bgcolor: '#fff' }}>
              <UserTable
                users={results}
                editRow={editRow}
                deleteUser={deleteUser}
              />
            </Box>
              )}
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
