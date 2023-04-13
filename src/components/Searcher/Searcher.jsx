import React, { useState } from 'react'
import { Stack, TextField, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const stackStyles = {
  marginTop: '40px',
  width: '80%'

}
const textFieldStyles = {
  width: '90%',
  margin: '0 auto'
}

export const Searcher = ({ setInputUser, notFound }) => {
  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (e) => {
    setValueInput(e.target.value)
  }
  const handleSubmit = (e) => {
    setInputUser(valueInput)
  }

  return (
    <Stack sx={stackStyles} direction='row'>
      <TextField
        name='searchbar'
        sx={textFieldStyles}
        type='search'
        autoComplete='off'
        label='Github user'
        id='outlined-basic'
        variant='outlined'
        color={notFound ? 'error' : 'primary'}
        placeholder='JMRodriguez-work'
        value={notFound ? 'User Not Found' : valueInput}
        onChange={onSearchValueChange}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSubmit}>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack>
  )
}
