import { Stack, Typography } from '@mui/material'
import React from 'react'

export const PrincipalInformation = ({ userState: { name, login, created_at: createdAt } }) => {
  return (
    <>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Typography variant='h4' color='primary'>{name}</Typography>
        <Typography variant='subtitle2' color='#57585B'>{createdAt}</Typography>
      </Stack>
      <Typography variant='caption' color='#57585B' sx={{ paddingLeft: '5px' }}>@{login}</Typography>
    </>
  )
}
