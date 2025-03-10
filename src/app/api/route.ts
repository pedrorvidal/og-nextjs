export async function GET() {
  const response = await fetch('https://api.origamid.online/vendas',
    {
      headers: {
        apikey: 'ORIGAMID123456'
      },
      cache: 'no-cache'
    }
  );
  const vendas = await response.json();

  return Response.json(vendas);
}
