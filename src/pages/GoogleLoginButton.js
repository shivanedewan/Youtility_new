import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@mui/material';
import httpRequest from '../services/api';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const clientId = '890593488111-o10mtf4ka43e97vdnntv1cev714ipo64.apps.googleusercontent.com';

function GoogleLoginButton() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '890593488111-o10mtf4ka43e97vdnntv1cev714ipo64.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
      }); 
    }

    gapi.load('client:auth2', start);
  }, []);
  

  const navigate = useNavigate();
  let channel_id;

  const onSuccess = (response) => {
    const { accessToken } = response;
    console.log(accessToken)
  
    const a = httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/channels', 'POST', { headers: accessToken }, { 'Content-Type': 'application/json' });
    console.log("issue")  
    console.log(a);
    
    a.then((result) => {
      // Access the value from the fulfilled Promise
      const channel_id = Object.keys(result)[0];
      console.log(Object.keys(result)[0]);
      console.log("my channel i");
      console.log(channel_id);
  
      console.log("issue1") 
      console.log(channel_id)
      console.log("issue2") 
      
      return httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/analytics', 'POST', { 'channelId': channel_id, headers: accessToken }, { 'Content-Type': 'application/json' });
    })
    .then(() => {
      // Code to execute after the second request completes successfully
      navigate('/questionPage');
    })
    .catch((error) => {
      // Handle any errors that occurred during the Promise execution
      console.error(error);
    });
  }
  

  const onFailure = (error) => {
    console.log("no token")
    console.error(error)
  }

  return (

    <GoogleLogin
    clientId={clientId}
    buttonText="Get Started"
    onSuccess={onSuccess}
    onFailure={onFailure}
    scope={'https://www.googleapis.com/auth/youtube.readonly'}
    render={({ onClick, disabled }) => (
      <Button
        variant="contained"
        sx={{
          width:'300px',
          backgroundColor: '#fff',
          color: '#000',
          display: 'flex',
          justifyContent: 'center',
          margin: '40px',
          marginTop: '10px',
        }}
        onClick={onClick}
        disabled={disabled}
        startIcon={<GoogleIcon style={{ color: '#4285F4' }}/>}
      >
        Sign in with Google 
      </Button>
    )}
  />

  
  
  
  
  
  
  );
}

export default GoogleLoginButton;