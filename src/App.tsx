import { useState, lazy, Suspense } from 'react';

import Footer from './components/footer/Footer.tsx';
import LoadingCard from './components/loadingCard/LoadingCard.tsx';
const CardUploader = lazy(() => import('./components/cardUploader/CardUploader'));
const CardConfirmation = lazy(() => import('./components/cardConfirmation/CardConfirmation.tsx'));

import { Box } from '@mui/material';

//const API: string = "https://imageuploader-challengue.1.us-1.fl0.io";  //! Endpoint web
const API: string = "http://localhost:8080";  //! Endpoint local

const App/* : React.FC<dataSending>  */= () => {
  const [latestImage, setLatestImage] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);
  
  const manejarInformacionDelHijo = (info: boolean) => {
    setCheck(info)
  };
  
  if( check === true ){
    fetch(`${API}/getImage`)
      .then((response) => response.json())
      .then((data) => { setLatestImage(data); })
      .catch((error) => { console.error('Error fetching latest image:', error); });
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          height: '95vh', mt: 0
        }}
      >
        <Suspense fallback={ <LoadingCard /> }>
          {check ? <CardConfirmation dataImage={latestImage}/> : <CardUploader enviarInformacion={manejarInformacionDelHijo} urlAPI={API}/>}
        </Suspense>
        <Box sx={{  mt: 15 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default App;