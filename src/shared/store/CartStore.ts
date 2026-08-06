import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { DummyProduct } from '../../module/dummyJson'

export interface CartProduct extends DummyProduct {
    quantity: number
}

interface CartStore {
    cart: [] | Array<CartProduct>
    addItem: (product: DummyProduct) => void
    removeItem: (id: number) => void
    decreaseQuantity: (product: DummyProduct) => void
    clearCart: () => void
}

const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            cart: [],
            addItem: (product) => {
                set((state) => {
                    const existe = state.cart.find((p: CartProduct) => p.id == product.id)

                    if (existe) {
                        return {
                            cart: state.cart.map((p: CartProduct) => p.id == product.id ? {
                                ...p, quantity: p.quantity + 1
                            } : p)
                        }
                    } else {
                        return {
                            cart: [...state.cart, { ...product, quantity: 1 }]
                        }
                    }
                })
            },

            removeItem: (id: number) => {
                set((state) => ({
                    cart: state.cart.filter((product: CartProduct) => product.id != id)
                }))
            },

            decreaseQuantity: (product) => {
                set((state) => {
                    const existente = state.cart.find((p: CartProduct) => p.id == product.id)
                    if (!existente) return state

                    const newQuantity = existente.quantity - 1

                    if (newQuantity <= 0) {
                        return {
                            cart: state.cart.filter((p: CartProduct) => p.id != product.id)
                        }
                    }

                    return {
                        cart: state.cart.map((p: CartProduct) => p.id == product.id ? {
                            ...p, quantity: newQuantity
                        } : p)
                    }
                })
            },

            clearCart: () => {
                set({ cart: [] })
            }
        }),
        {
            name: 'cart'
        }
    )
)

export default useCartStore