import type { DummyAuth, DummyProduct, DummyResponse } from '../module/dummyJson'

const API = 'https://dummyjson.com'

export const getDummyProducts = async () => {
    console.log("me ejecuté")
    const response = await fetch(`${API}/products`)
    const data = await response.json() as DummyResponse

    return data.products
}

export const getProductById = async (id: number) => {
    const response = await fetch(`${API}/products/${id}`)
    const data = await response.json() as DummyProduct

    return data
}

export const signIn = async (username: string, password: string) => {
    const response = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })

    const data = await response.json() as DummyAuth
    return data
}