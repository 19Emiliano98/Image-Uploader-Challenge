import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Typography 
        variant='caption'
        sx={{
          fontSize: { sm: '18px', xs: '11px' },
          color: '#A9A9A9'
        }}
      >
        created by <b>19Emiliano98</b> - devChallenges.io
      </Typography>
    </>
  )
}

export default Footer