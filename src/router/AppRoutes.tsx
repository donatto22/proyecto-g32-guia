import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleProduct from '../pages/singleProduct/SingleProduct'
import ProductOutlet from './outlets/ProductOutlet'
import Login from '../pages/login/Login'
import { Paths } from './routes'
import LoginOutlet from './outlets/LoginOutlet'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProductOutlet />}>
                <Route path={Paths.home} element={<Home />} />
                <Route path='/product/:id' element={<SingleProduct />} />
            </Route>

            <Route element={<LoginOutlet />}>
                <Route path={Paths.login} element={<Login />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes