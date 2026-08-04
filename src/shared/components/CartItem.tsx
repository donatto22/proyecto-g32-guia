import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md'
import type { DummyProduct } from '../../module/dummyJson'
import type { FC } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import useCartStore from '../store/CartStore'

interface CartItemType {
    product: DummyProduct
}

const CartItem: FC<CartItemType> = ({ product }) => {
    const removeItem = useCartStore((state) => state.removeItem)

    return (
        <HStack w='100%' justifyContent='space-between'
            outline='1px solid' outlineColor='gray.300' p='20px' pl='10px' borderRadius='14px'>
            <HStack gap='1em'>
                <Image src={product.thumbnail} w='80px' />
                <VStack align='start'>
                    <Text>{product.title}</Text>
                    <Text fontWeight='bold'>${product.price}</Text>
                    <HStack>
                        <Button size='xs'>
                            <FiMinus />
                        </Button>
                        <Text>1</Text>
                        <Button size='xs'>
                            <FiPlus />
                        </Button>
                    </HStack>
                </VStack>
            </HStack>

            <Button colorScheme='red' variant='outline' onClick={() => removeItem(product.id)}>
                <MdDelete />
            </Button>
        </HStack>
    )
}

export default CartItem