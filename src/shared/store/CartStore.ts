import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { DummyProduct } from '../../module/dummyJson'

interface CartStore {
    cart: [] | Array<DummyProduct>
    addItem: (product: DummyProduct) => void
    removeItem: () => void
}

const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            cart: [],
            addItem: (product) => {

            },

            removeItem: () => {

            }
        }),
        {
            name: 'cart'
        }
    )
)

export default useCartStore