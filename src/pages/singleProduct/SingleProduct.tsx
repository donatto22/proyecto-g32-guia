import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { DummyProduct } from '../../module/dummyJson'
import { getProductById } from '../../services/dummyService'
import { Button, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import useUserStore from '../../shared/store/UserStore'
import { toast } from 'sonner'

const SingleProduct = () => {
    const { id } = useParams()
    const user = useUserStore((state) => state.user)

    const [product, setProduct] = useState<DummyProduct | null>(null)

    useEffect(() => {
        const getProduct = async () => {
            const data = await getProductById(Number(id))
            console.log(data)
            setProduct(data)
        }

        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addToCard = (product) => {
        if (user) {
            toast.success('Se agregó al carrito')
        } else {
            toast.error('Necesitas iniciar sesión')
        }
    }

    if (product == null) {
        return <div>Cargando...</div>
    }

    return (
        <HStack gap='2em' w='900px' m='0 auto'>
            <Image src={product.thumbnail} />

            <VStack align='start' gap='1em'>
                <VStack align='start'>
                    <Text fontStyle='italic'>{product.brand}</Text>
                    <Heading mb={2}>{product.title}</Heading>
                    <Tag colorScheme='purple'>{product.category}</Tag>
                </VStack>
                <Text fontSize='sm' lineHeight='2'>{product.description}</Text>
                <Text fontSize='3xl' fontWeight='bold'>${product.price}</Text>
                <Button colorScheme='purple' onClick={() => addToCard(product)}>Agregar al carrito</Button>
            </VStack>
        </HStack>
    )
}

export default SingleProduct