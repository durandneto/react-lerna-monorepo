import React from 'react'
// import PropTypes from 'prop-types'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import WarningIcon from '@material-ui/icons/Warning'

import {
  VHSnackbarContent,
  VHSnackbarMessageContent,
} from './index.styles'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

function VHSnackBar(props) {
  const { message, onClose, type } = props
  const Icon = type ? variantIcon[type] : variantIcon['info']
  const success = type && type === 'success'
  const error = type && type === 'error'
  const warning = type && type === 'warning'

  return (
    <VHSnackbarContent
      success={success}
      error={error}
      warning={warning}
      message={
        <VHSnackbarMessageContent>
          <Icon/>
          {message}
        </VHSnackbarMessageContent>
      }
      action={[
        <IconButton
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}

    />
  )
}

// VHSnackBar.propTypes = {
//   message: PropTypes.node,
//   onClose: PropTypes.func,
//   variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
// }

export default VHSnackBar
