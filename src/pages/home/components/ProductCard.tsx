import type { FC } from 'react'
import type { DummyProduct } from '../../../module/dummyJson'
import { Button, Heading, Image, Link, Tag, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

interface ProductCardType {
    product: DummyProduct
}

const ProductCard: FC<ProductCardType> = ({ product }) => {
    return (
        <VStack w='310px' borderRadius='20px' align='start'
            outline='1px solid' outlineColor='purple.200' p='1em'>
            <Image m='0 auto' w='130px' src={product.thumbnail} />
            <Heading size='sm' as='h3'>
                <Link as={RouterLink} to={`/product/${product.id}`}>{product.title}</Link>
            </Heading>
            <Tag colorScheme='purple'>{product.category}</Tag>
            <Text as='p' fontSize='xs'>{product.description}</Text>
            <Text as='p' fontSize='xl' fontWeight='bold'>${product.price}</Text>
            <Button size='sm' colorScheme='purple'>Agregar al carrito</Button>
        </VStack>
    )
}

export default ProductCard