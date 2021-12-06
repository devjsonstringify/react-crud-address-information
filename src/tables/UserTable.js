import PropTypes from 'prop-types'
import React from 'react'

const UserTable = (props) => {
  const { users, editRow, deleteUser } = props

  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 // eslint-disable-line
          ? (
              users.map((user) => ( // eslint-disable-line
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  onClick={() => {
                    editRow(user)
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td>
            </tr>
              ))
            )
          : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
            )}
      </tbody>
    </table>
  )
}

UserTable.propTypes = {
  users: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired
  }),
  editRow: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default UserTable
