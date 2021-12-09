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
import { motion, AnimatePresence } from 'framer-motion'
import NoDataFound from '../components/NoDataFound/NoDataFound'

const UserTable = ({ users, editRow, deleteUser }) => {
  return (
    <Box>
      {users.length > 0
        ? (
        <TableContainer>
          <Table
            size="medium"
            sx={{
              minWidth: 650,
              overflow: 'hidden',
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
              <AnimatePresence>
                {users.map((user, idx) => (
                  <TableRow
                    component={motion.tr}
                    key={user.id}
                    initial={{
                      opacity: 0,
                      translateY: 50
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.25 }}
                    exit={{
                      opacity: 0.5,
                      transition: {
                        duration: 0.5,
                        ease: 'easeOut'
                      }
                    }}
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
              </AnimatePresence>
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
