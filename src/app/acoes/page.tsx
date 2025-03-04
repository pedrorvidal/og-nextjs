'use client';

import React from "react";

type Acao = {
  simbolo: string;
  atualizada: string;
}

export default function AcoesPage() {
  const [acao, setAcao] = React.useState<Acao | null>(null);
  React.useEffect(() => {

    fetch('https://api.origamid.online/acoes/lua')
      .then(response => response.json()
        .then(json => setAcao(json)));
  }, []);

  if (acao === null) return null;
  return (
    <div>
      <h1>{acao.simbolo}</h1>
      <h2>{acao.atualizada}</h2>
    </div>
  )
}
