import { CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { PrincipalInformation } from '../../components/PrincipalInformation/PrincipalInformation'
import { Description } from '../Description/Description'

export const UserCard = ({ userState, notFound }) => {
  const avatarUrl = userState.avatar_url
  if (notFound) {
    return (
      <Typography
        variant='h3'
        color='text.primary'
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >USER NOT FOUND
      </Typography>
    )
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px'
      }}
    >
      <Grid item xs={2}>
        <CardMedia
          component='img'
          alt='Github User'
          image={avatarUrl}
          sx={{
            borderRadius: '50%',
            marginLeft: '5px'
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction='column'
          spacing='1'
          sx={{
            margin: '30px'
          }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}
