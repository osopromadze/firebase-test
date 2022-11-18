// Dependencies
import * as admin from 'firebase-admin'
import crypto from 'crypto'

// Utils
import key from '@/utils/service-account.enc'

interface FirebaseAdminResult {
  app: admin.app.App
  firestore: admin.firestore.Firestore
  auth: admin.auth.Auth
  messaging: admin.messaging.Messaging
  serverTimestamp: admin.firestore.FieldValue
  getDataWithId: <T>(doc: admin.firestore.DocumentSnapshot) => T
}

const algorithm = 'aes-128-cbc'
const decipher = crypto.createDecipheriv(
  algorithm,
  process.env.FIREBASE_ADMIN_ENCRYPTION_KEY as string,
  process.env.FIREBASE_ADMIN_CREDENTIALS_IV as string
)

export const getDecryptedSecret = (): Record<string, unknown> => {
  let decrypted = decipher.update(key.encrypted, 'base64', 'utf8')

  decrypted += decipher.final('utf8')

  return JSON.parse(decrypted)
}

export default function firebaseAdmin(): FirebaseAdminResult {
  if (!admin.apps.length) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert(getDecryptedSecret()),
        databaseURL: process.env.FIREBASE_ADMIN_DATABASE_URL,
      })
    } catch (error) {
      console.error('Firebase admin initialization error', error.stack)
    }
  }

  const getDataWithId = <T>(doc: admin.firestore.DocumentSnapshot): T => {
    return ({
      ...doc.data(),
      id: doc.id,
    } as unknown) as T
  }

  return {
    app: admin.app(),
    auth: admin.auth(),
    messaging: admin.messaging(),
    firestore: admin.firestore(),
    serverTimestamp: admin.firestore.FieldValue.serverTimestamp(),
    getDataWithId,
  }
}
