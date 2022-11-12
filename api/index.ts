// import { geolocation, ipAddress, next, rewrite  } from '@vercel/edge';
import { VercelApiHandler } from '@vercel/node'
import '../lib/mongodb'


export const h: VercelApiHandler = (req, res) => {
  const request = req as unknown as Request
  // const { city, country, countryRegion, region, latitude, longitude } = geolocation(request);
  // const ip = ipAddress(request)

  res.setHeader('Content-type', 'text/html')
  res.end(`
  <h1>Your location is GR, Athens</h1>
  `)
}



export default h
