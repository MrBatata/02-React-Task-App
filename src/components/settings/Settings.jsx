import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import useBoolean from '../../hooks/useBoolean'

/**
 * * MUI
 */
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export default function Settings() {
  const [bool, setBool] = useBoolean(false)
  const isThemeDark = useLocalStorage('darkTheme', bool)

  const handleThemeChange = (e) => {
    e.preventDefault()
    setBool.toggle()
    isThemeDark.setvalue(bool)
  }

  return (
    <div>
      <h1>Settings</h1>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3
        }}
      >
        {(isThemeDark.value) ? 'Dark mode' : 'Light mode'}
        <IconButton sx={{ ml: 1 }} onClick={handleThemeChange} color="inherit">
          {(isThemeDark.value) ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      {/* <button type="button" onClick={handleDarkClick}>
        Change to dark color
      </button> */}
    </div>
  )
}
