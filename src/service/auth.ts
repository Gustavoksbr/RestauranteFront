import { api } from './api'

interface TokenResponse {
    token: string
}

interface LoginRequest {
    username: string
    password: string
}

interface LoginResponse {
    token?: string
    username?: string
    password?: string
}

export async function postLogin(data: LoginRequest): Promise<LoginResponse> {
    try {
        const response = await api.post('/login', data)
        return response.data
    } catch (error) {
        throw error
    }
}

interface Login2FARequest {
    username: string
    password: string
    codigo: string
}


export async function postLogin2FA(data: Login2FARequest): Promise<TokenResponse> {
    try {
        const response = await api.post('/login2fa', data)
        return response.data
    } catch (error) {
        throw error
    }
}

interface Cadastro{
    username: string
    password: string
    email: string
}

export async function cadastro(data: Cadastro): Promise<TokenResponse> {
    try {
        const response = await api.post('/cadastro', data)
        return response.data
    } catch (error) {
        throw error
    }
}