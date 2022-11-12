import { VercelApiHandler } from '@vercel/node'
import type { UpdateFilter } from 'mongodb'
import { client } from '../../lib/mongodb'


declare type User = {
  email: string
  token: string
  username: string
  bio?: string|undefined
  image?: string|undefined
}

const findOrCreate = (collection, query) => {

}






const handler: VercelApiHandler = async (req, res) => {

  if(req.method === 'POST') { // REGISTER NEW USER
    const { body } = req
    
    // todo: connect and create user
    try {
      await client.connect()
      const db = client.db('realWolrd_staging')
      const { email, username, password } = body

      // db.collection('users').findOne({email})

      const fillter = { email }
      const update: UpdateFilter<Document> =  {
        $setOnInsert: { foo: "bar" }
      }
      // db.collection('users').findOneAndUpdate(fillter, update, {
      //   upsert: true,
      //   returnNewDocument: true
      // })

      const user: User = {
        email, username, token: 'asdasfcasdvSdv'
      }
      res.json({user})
      
    } catch (error) {
      console.log(error)
      res.status(500).json({error: { message: 'INTERNAL_ERROR' }})
    } finally {
      // await client.close()
    }


    return 
  }
  res.json({error: { message: 'METHOD_NOT_ALLOWED' }})
}

export default handler