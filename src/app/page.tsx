import Acessos from '@/components/acessos'; //server component
import Width from '@/components/width'; // client component
import ServerFetch from './components/serverFetch';

export default async function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <ServerFetch />
      {/* <Width /> */}
      {/* <Acessos /> */}
    </main>
  );
}
