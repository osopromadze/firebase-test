// Dependencies
import { NextApiRequest, NextApiResponse } from 'next'

// Utils
import db from '@/utils/firebase/admin'

export default async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<FirebaseFirestore.DocumentData[] | void> => {
  try {
    const foods = await db().firestore.collection('foods').get()
    const foodsData = foods.docs.map((food) => food.data())

    res.status(200).json(foodsData)
  } catch (error) {
    res.status(400).end()
  }
}
