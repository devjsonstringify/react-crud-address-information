import PropTypes from 'prop-types'
import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ActionButtons = ({ onHandleEdit, onHandleDelete }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        button: {
          margin: 'auto 1rem 0 0'
        },
        ':hover': {
          button: {
            border: '0'
          }
        }
      }}
    >
      <Button
        onClick={onHandleEdit}
        variant="contained"
        color="info"
        size="large"
      >
        Edit
      </Button>
      <Button
        onClick={onHandleDelete}
        variant="contained"
        color="error"
        size="large"
      >
        Delete
      </Button>
    </Box>
  )
}
ActionButtons.propTypes = {
  onHandleEdit: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired
}

export default ActionButtons
