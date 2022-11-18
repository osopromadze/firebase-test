// Dependencies
import { window } from 'browser-monads'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

// Types
import { User } from '@/interfaces'

export const firebaseConfig = JSON.parse(
  Buffer.from(process.env.NEXT_PUBLIC_FIREBASE_CONFIG as string, 'base64').toString('ascii')
)

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
if (window) {
  !firebase.apps.length && firebase.analytics()
}

// Firestore exports
export const firestore = firebase.firestore()
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
export const fromMillis = firebase.firestore.Timestamp.fromMillis
export const increment = firebase.firestore.FieldValue.increment

// Storage exports
export const storage = firebase.storage()
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED

const mapUserFromFirebaseAuthToUser = (user: firebase.User): User => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (
  onChange: React.Dispatch<React.SetStateAction<User | null | undefined>>
): firebase.Unsubscribe => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}

/**
 * Login/register with Google
 */
export const loginWithGoogle = (): Promise<firebase.auth.UserCredential> => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  return firebase.auth().signInWithPopup(googleProvider)
}

/**
 * Login/register with GitHub
 */
export const loginWithGitHub = (): Promise<firebase.auth.UserCredential> => {
  const githubProvider = new firebase.auth.GithubAuthProvider()

  return firebase.auth().signInWithPopup(githubProvider)
}

/**
 * Login/register with Twitter
 */
export const loginWithTwitter = async (): Promise<firebase.auth.UserCredential> => {
  const twitterProvider = new firebase.auth.TwitterAuthProvider()

  return firebase.auth().signInWithPopup(twitterProvider)
}

/**
 * Upload image helper
 *
 * @param file - The file to upload
 */
export const uploadImage = (file: File): firebase.storage.UploadTask => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)

  return task
}
