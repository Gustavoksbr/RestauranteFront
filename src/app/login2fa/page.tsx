'use client'

import React, { useState, useEffect } from 'react'
import { postLogin2FA,postLogin } from '@/service/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { handleError } from '@/service/errorHandler'

const Login2FAPage: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    // Recuperar username e password da query string
    const username = searchParams.get('username') || ''
    const password = searchParams.get('password') || ''

    const [codigo, setCodigo] = useState('')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!username || !password) {
            router.push('/login') // Redireciona para a página de login
        }
    }, [username, password, router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)

        try {
            const response = await postLogin2FA({ username, password, codigo })
            localStorage.setItem('token', response.token)
            router.push('/') // Redireciona para a página inicial
        } catch (err) {
            alert(handleError(err)) ;
        }
    }

    const reenviar = async (e: React.FormEvent) => { postLogin({ username, password }) }

    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Autenticação de 2 Fatores</h1>
                {error && <div style={{ color: 'red', fontSize: '14px' }}>{error}</div>}
                <input
                    type="text"
                    placeholder="Código"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>
                    Verificar Código
                </button>
                <a onClick={reenviar} style={{ padding: '10px', color: 'blue',  cursor: 'pointer',  textAlign: 'center' }}>
                    Reenviar Código
                </a>
            </form>
        </div>
    )
}

export default Login2FAPage
