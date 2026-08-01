import { Outlet } from 'react-router-dom'
import NavLayout from '../../shared/layout/NavLayout'

const ProductOutlet = () => {
    return (
        <NavLayout>
            <Outlet />
        </NavLayout>
    )
}

export default ProductOutlet