import { useEffect, useState } from 'react'
import type { DummyProduct } from '../../module/dummyJson'
import { getDummyProducts } from '../../services/dummyService'
import ProductCard from './components/ProductCard'
import { HStack } from '@chakra-ui/react'

const Home = () => {
    const [products, setProducts] = useState<Array<DummyProduct>>([])

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDummyProducts()
            setProducts(data)
        }

        getProducts()
    }, [])

    return (
        <HStack flexWrap='wrap' m='0 auto' gap='2em' justifyContent='center'>
            {
                products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))
            }
        </HStack>
    )
}

export default Home