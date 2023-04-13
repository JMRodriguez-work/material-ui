import { Stack, Typography } from '@mui/material'
import React from 'react'
import { PaperInformation } from '../../components/PaperInformation/PaperInformation'
import { LocationInformation } from '../../components/LocationInformation/LocationInformation'

export const Description = ({ userState }) => {
  const bio = userState.bio
  return (
    <>
      <Stack sx={{
        justifyContent: 'center'
      }}
      >
        <Typography sx={{ marginBottom: '10px' }} variant='body1' color='text.primary'>
          {bio || 'No description'}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  )
}
