import { FC } from 'react'
import { NextPage } from 'next'
import FirebaseAuth from '../components/organisms/FirebaseAuth'

const Auth: NextPage = () => {
  return (
    <div className="p-20">
      <h3>Sign in</h3>
      <div>
        <p>
          This auth page is <b>static</b>. It will redirect on the client side
          if the user is already authenticated.
        </p>
      </div>
      <div>
        <p>Firebase Auth</p>
        <FirebaseAuth />
      </div>
    </div>
  )
}

export default Auth
