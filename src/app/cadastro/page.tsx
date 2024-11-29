'use client'

import React, { useState } from 'react'
import { cadastro } from '@/service/auth'
import { handleError } from '@/service/errorHandler'
import { useRouter } from 'next/navigation'

const CadastroPage: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await cadastro({ username, password, email })
            localStorage.setItem('token', response.token)
            router.push('/') 
        } catch (error) {
            alert(handleError(error)) 
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px', padding: '20px', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Cadastro</h1>
                <input
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '10px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: loading ? '#ccc' : '#007BFF',
                        color: 'white',
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {loading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
                <p style={{ fontSize: '14px',textAlign: 'center'}}>Já possui uma conta?  <a href="/login" style={{ color: '#007BFF',  textDecoration: 'none' }}>Entrar</a></p>
            </form>
        </div>
    )
}

export default CadastroPage
