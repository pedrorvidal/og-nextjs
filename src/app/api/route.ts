import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET() {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',

    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      username: 'dog',
      password: 'dog',
    }),

    cache: 'no-cache',
  });

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

export async function POST(request: NextRequest) {
  const param = request.nextUrl.searchParams.get('busca');
  const body = await request.json();

  return Response.json({ method: 'POST', response: param, body });
}
