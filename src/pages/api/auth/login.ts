// Dependencies
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { setAuthCookies } from 'next-firebase-auth'

// Libraries
import initAuth from '@/lib/initAuth'

// Utils
import firebaseAdmin from '@/utils/firebase/admin'

initAuth()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await setAuthCookies(req, res)

    if (!req.headers.authorization) {
      return res.status(400).json({ error: 'Missing JWT in authorization headers' })
    }

    const token = req.headers.authorization

    const { user_id: uid, name, email } = jwt.decode(token) as {
      [key: string]: any
    }

    // check if the user already exists in the database
    const user = await firebaseAdmin().firestore.collection('users').doc(uid).get()

    if (!user.exists) {
      await firebaseAdmin()
        .firestore.collection('users')
        .doc(uid)
        .set({
          name,
          email,
        } as any)
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  return res.status(200).json({ success: true })
}

export default handler
