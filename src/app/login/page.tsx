'use client'

import React, { useState } from 'react'
import { postLogin } from '@/service/auth'
import { handleError } from '@/service/errorHandler'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()



    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h1>

                <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>
                    Entrar
                </button>
                <a href="/cadastro" style={{ fontSize: '14px', color: '#007BFF', textAlign: 'center', textDecoration: 'none' }}>Criar uma conta</a>
            </form>
        </div>
    )
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
    
        try {
            const response = await postLogin({ username, password })
            if (response.token) {
                // Save the token in local storage or context
                localStorage.setItem('token', response.token)
                router.push('/')
            } else if(response.username && response.password) {
                router.push(`/login2fa?username=${response.username}&password=${response.password}`)
            }
        } catch (error) {
           alert(handleError(error)) ;
        }
    }
}
