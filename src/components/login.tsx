'use client'

import React from "react"

export default function Login() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    if (response.ok) window.location.href = '/';
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuário</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Senha</label>
      <input type="text" name="password" id="password" />
      <button>Login</button>

    </form>
  )
}
