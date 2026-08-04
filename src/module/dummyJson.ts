export interface DummyResponse {
    limit: number
    products: Array<DummyProduct>
    skip: number
    total: number
}

export interface DummyProduct {
    id: number
    title: string
    description: string
    price: number
    discount: number
    thumbnail: string
    stock: number
    images: Array<string>
    category: string
    brand: string
    reviews: Array<object>
}

export interface DummyAuth {
    accessToken: string,
    refreshToken: string,
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string
}