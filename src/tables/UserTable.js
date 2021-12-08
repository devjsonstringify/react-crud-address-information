import PropTypes from 'prop-types'
import React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import ActionButtons from '../components/ActionsButton/ActionButtons'
import NoDataFound from '../components/NoDataFound/NoDataFound'

const UserTable = (props) => {
  const { users, editRow, deleteUser } = props

  return (
    <Box>
      {users.length > 0
        ? (
        <TableContainer>
          <Table
            size="medium"
            sx={{
              minWidth: 650,
              marginBottom: '0',
              'tr:first-of-type': {
                '.MuiTableCell-root': {
                  borderTop: ' 0.5rem solid #f1f1f3'
                }
              }
            }}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">First name</TableCell>
                <TableCell align="left">Last name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left" sx={{ textAlign: 'center' }}>
                  <MoreHorizIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '.MuiTableCell-root': {
                      borderBottom: ' 0.5rem solid #f1f1f3'
                    }
                  }}
                >
                  <TableCell component="th" scope="row">
                    {user.firstName}
                  </TableCell>
                  <TableCell align="left">{user.lastName}</TableCell>
                  <TableCell align="left">
                    <Typography color="secondary">{user.email}</Typography>
                  </TableCell>
                  <TableCell align="left">{user.phone}</TableCell>
                  <TableCell align="left">
                    <ActionButtons
                      onHandleEdit={() => editRow(user)}
                      onHandleDelete={() => deleteUser(user.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          )
        : (
        <NoDataFound />
          )}
    </Box>
  )
}

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    })
  ),
  editRow: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default UserTable
