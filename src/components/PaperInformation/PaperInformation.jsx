import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export const PaperInformation = ({ userState: { public_repos: repos, followers, following, id } }) => {
  const userInformation = [
    { title: 'Public Repos', value: repos },
    { title: 'Followers', value: followers },
    { title: 'Following', value: following }
  ]
  return (
    <Paper elevation={3}>
      <Stack
        sx={{ margin: '20px' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-evenly'
        alignItems='center'
        spacing={3}
      >
        {userInformation.map(({ title, value }, index) => (
          <Stack key={index} spacing={1} textAlign='center'>
            <Typography color='primary' variant='h5'>{title}</Typography>
            <Typography color='secondary' variant='h6'>{value}</Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  )
}
