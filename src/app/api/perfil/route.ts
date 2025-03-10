import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get('token');
  const response = await fetch('https://api.origamid.online/conta/perfil', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token?.value,
    },
    cache: 'no-cache'
  });

  const data = await response.json();

  return Response.json(data);
}
