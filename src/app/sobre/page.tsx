import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página SOBRE',
  description: 'Esta é a página SOBRE',
};
export default function SobrePage() {
  return (
    <main>
      <h2>Sobre</h2>
      <h2 id="empresa" style={{ margin: '1600px 0' }}>
        A empresa
      </h2>
    </main>
  );
}
