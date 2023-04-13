import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'

export const LocationInformation = ({ userState: { location, twitter_username: twitter, blog, company } }) => {
  const doesExist = (value) => {
    return value || 'Not available'
  }
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: '15px' }}
    >
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LocationOnIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }} color='primary' />
          <Typography sx={{ fontSize: { xs: '.7rem', md: '1rem' } }} color='primary'>{doesExist(location)}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <TwitterIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }} color='primary' />
          <Typography sx={{ fontSize: { xs: '.7rem', md: '1rem' } }} color='primary'>@{doesExist(twitter)}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LanguageIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }} color='primary' />
          <a href={blog || null} target='_blank' rel='noopener noreferrer'><Typography sx={{ fontSize: { xs: '.7rem', md: '1rem' } }} color='primary'>{doesExist(blog)}</Typography></a>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <BusinessIcon sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }} color='primary' />
          <Typography sx={{ fontSize: { xs: '.7rem', md: '1rem' } }} color='primary'>{doesExist(company)}</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}
