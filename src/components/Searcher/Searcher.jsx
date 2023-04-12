import React from 'react'
import { Stack, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const Searcher = () => {
  const stackStyles = {
    marginTop: '40px',
    width: '80%'

  }
  const textFieldStyles = {
    width: '90%',
    margin: '0 auto'
  }

  return (
    <Stack sx={stackStyles} direction='row'>
      <TextField
        sx={textFieldStyles}
        type='search'
        autoComplete='off'
        label='Github user'
        id='outlined-basic'
        variant='outlined'
        placeholder='JMRodriguez-work'
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack>
  )
}
