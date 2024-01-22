import React from 'react';

import { Box, Card, CardContent, CardMedia, Typography, TextField, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
interface propChild {
  dataImage: string; // Define el tipo de miVariable
}

const CardConfirmation:React.FC<propChild> = ({ dataImage }) => {
  const copyToClipboard = () => {
    const source = document.getElementById('clipBoardValue') as HTMLInputElement | null;
    
    if (source != null) {
      navigator.clipboard.writeText(source.value)
    }
  }

  console.log(dataImage);


  return (
    <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.10)' }}>
      <CardContent sx={{ width: { sm: 620, xs: 300}, textAlign: 'center' }}>
        <CheckCircleIcon sx={{ color: 'rgba(33, 150, 83, 1)', fontSize: { sm: '55px', xs: '37px'}, mt: 2 }} fontSize='inherit'/>
        <Typography variant='h1' sx={{ fontSize: { sm: '40px', xs: '27px'}, fontWeight: 600, color: '#4F4F4F', mt: 2 }}>
          Uploaded Successfully!
        </Typography>
        
        <CardMedia
          sx={{
            objectFit: 'contain',
            borderRadius: '20px',
            mt: 4
          }}
          component="img"
          height="350"
          image= {dataImage}
          alt="Imagen Subida"
        />
        <Box
        sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          
        }}
        >
          <TextField
            sx={{ width: { sm: 510, xs: 300 } }}
            id='clipBoardValue'
            value={dataImage}
            variant="outlined"
          />
          <Button 
            sx={{
              width: { sm: 145, xs: 140 },
              height: { sm: 47, xs: 37 },
              mt: 1
            }}
            variant="contained"
            onClick={() => copyToClipboard()}
          >
            Copy Link
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardConfirmation;