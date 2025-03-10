import { cookies } from "next/headers";

export async function GET() {
  const response = await fetch('https://api.origamid.online/conta/login',
    {
      method: 'POST',

      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: "dog",
        password: "dog",
      }),

      cache: 'no-cache'
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return Response.json({ erro: 'Erro na api' });
  }

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  });

  return Response.json(data);
}
