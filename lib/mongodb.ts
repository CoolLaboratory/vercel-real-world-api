import { MongoClient, ServerApiVersion, MongoClientOptions } from 'mongodb'

const uri = process.env.ATLAS_URI!;

const connectionOptions: MongoClientOptions = {
  serverApi: ServerApiVersion.v1, 
  retryWrites: true, 
  w: 'majority'
}



export const config = {
  platform: 'node'
}

export const client = new MongoClient(uri, connectionOptions);

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });