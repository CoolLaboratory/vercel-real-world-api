export const config = {
  runtime: 'experimental-edge',
};

export default async function handle(request: Request) {

  const body = await request.json()
  const { email, username, password } = body
  return new Response(
    JSON.stringify({email, username}), {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}