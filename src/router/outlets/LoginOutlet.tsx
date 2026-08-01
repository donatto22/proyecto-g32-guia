import { Navigate, Outlet } from 'react-router-dom'
import { Paths } from '../routes'
import useUserStore from '../../shared/store/UserStore'

const LoginOutlet = () => {
    const user = useUserStore((state) => state.user)

    return (
        user ? <Navigate to={Paths.home} /> : <Outlet />
    )
}

export default LoginOutlet