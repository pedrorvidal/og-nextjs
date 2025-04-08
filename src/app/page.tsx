'use client';

import { setCookie } from '../../actions/set-cookies';

export default function HomePage() {
  function handleClick() {
    console.log('Button clicked');
    setCookie('segredo', '123456');
  }
  return (
    <main>
      <h1>Home</h1>
      <button onClick={handleClick}>Definir cookie</button>
    </main>
  );
}
