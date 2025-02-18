import Acessos from '@/components/acessos'; //server component
import Width from '@/components/width'; // client component

export default async function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <Width />
      <Acessos />
    </main>
  );
}
