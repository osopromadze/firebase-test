// Dependencies
import 'firebase/analytics'
import 'firebase/firestore'
import { init } from 'next-firebase-auth'

// Utils
import { firebaseConfig } from '@/utils/firebase/client'

export default function initAuth() {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/auth/login', // required
    logoutAPIEndpoint: '/api/auth/logout', // required
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL as string,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
          ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace('/\\n/g', '\n')
          : '',
      },
      databaseURL: process.env.FIREBASE_ADMIN_DATABASE_URL as string,
    },
    firebaseClientInitConfig: firebaseConfig,
    cookies: {
      name: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string, // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV !== 'development', // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}
