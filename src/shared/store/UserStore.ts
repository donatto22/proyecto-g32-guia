import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { DummyAuth } from '../../module/dummyJson'

interface UserState {
    user: DummyAuth | null
    login2: (userData: DummyAuth) => void
    logout: () => void
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            login2: (userData) => {
                set({ user: userData })
            },
            logout: () => {
                set({ user: null })
            }
        }),
        {
            name: 'user'
        }
    )
)

export default useUserStore