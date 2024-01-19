import React from 'react';

import { ImageUploadForm } from './ImageUploadForm.tsx';

import { Card, CardContent, Typography } from '@mui/material';

interface dataSending {
  enviarInformacion: (info: boolean) => void;
  urlAPI: string;
}

const CardUploader: React.FC<dataSending> = ({ enviarInformacion, urlAPI }) => {
  
  const manejarInformacionDelHijo = (info: boolean) => {
    enviarInformacion(info);
  };

  return (
    <Card sx={{ borderRadius: '12px', boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.10)' }}>
      <CardContent sx={{ width: { sm: 620, xs: 300}, textAlign: 'center' }}>
        <Typography variant='h1' sx={{ fontSize: { sm: '40px', xs: '29px'}, fontWeight: 600, color: '#4F4F4F', mt: 3 }}>
          Upload your image
        </Typography>
        
        <Typography variant='body1' sx={{ fontSize: { sm: '18px', xs: '14px'}, color: '#828282', mt: 2, mb: 4 }}>
          File should be Jpeg, Png,...
        </Typography>
        
        <ImageUploadForm enviarInformacion={manejarInformacionDelHijo} urlAPI={urlAPI}/>
        
        <Typography variant='body2' sx={{ fontSize: { sm: '18px', xs: '14px'}, color: '#828282', mt: 3, mb: 8 }}>Or</Typography>
      </CardContent>
    </Card>
  )
}

export default CardUploader;