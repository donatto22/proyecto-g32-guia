import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { DummyProduct } from '../../module/dummyJson'

interface CartStore {
    cart: [] | Array<DummyProduct>
    addItem: (product: DummyProduct) => void
    removeItem: (id: number) => void
}

const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            cart: [],
            addItem: (product) => {
                set((state) => ({
                    cart: [...state.cart, product]
                }))
            },

            removeItem: (id: number) => {
                set((state) => ({
                    cart: state.cart.filter((product: DummyProduct) => product.id != id)
                }))
            }
        }),
        {
            name: 'cart'
        }
    )
)

export default useCartStore