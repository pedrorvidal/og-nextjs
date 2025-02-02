'use client';

import React from 'react';

export default function Width() {
  const [width, setWidth] = React.useState(0);
  // função anônima, dependência (vazia, neste caso)
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    //limpa o efeito quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <h2 style={{ color: ativo ? '#11EE11' : '#ff4b00' }}>
        Largura da tela {width}
      </h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  );
}
