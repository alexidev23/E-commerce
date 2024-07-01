import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import GoogleLogin from 'react-google-login'

export function Login () {
  const clientID = '689407445936-mkvqc6adeumvldcfvmdfkv07van8o1ob.apps.googleusercontent.com'

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID
      })
    }

    gapi.load('client:auth2', start)
  }, [])

  const onSuccess = (response) => {
    console.log(response)
  }

  const onFailure = () => {
    console.log('Hubo un problema')
  }

  return (
    <div className='text-white'>
      Iniciar sesion
      <div>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy='single_host_policy'
        />
      </div>
    </div>
  )
}
