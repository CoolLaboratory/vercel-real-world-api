import  { verify, type JwtPayload } from 'jsonwebtoken'

export const checkJwt = (authHeader: string|null, secret: string) => {
  if(!authHeader) return null
  if(!authHeader.startsWith('Bearer ')) return null

  const token = authHeader.split(' ')[1]
  
  const decoded = verify(token, secret) as JwtPayload
  
  const auth = {
    userId: decoded.sub as string
  }
  return auth
}