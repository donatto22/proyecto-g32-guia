import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md'
import type { FC } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import useCartStore, { type CartProduct } from '../store/CartStore'

interface CartItemType {
    product: CartProduct
}

const CartItem: FC<CartItemType> = ({ product }) => {
    const removeItem = useCartStore((state) => state.removeItem)
    const addItem = useCartStore((state) => state.addItem)
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)

    return (
        <HStack w='100%' justifyContent='space-between'
            outline='1px solid' outlineColor='gray.300' p='20px' pl='10px' borderRadius='14px'>
            <HStack gap='1em'>
                <Image src={product.thumbnail} w='80px' />
                <VStack align='start'>
                    <Text>{product.title}</Text>
                    <Text fontWeight='bold'>${(product.price * product.quantity).toFixed(2)}</Text>
                    <HStack>
                        <Button size='xs' onClick={() => decreaseQuantity(product)}>
                            <FiMinus />
                        </Button>
                        <Text>{product.quantity}</Text>
                        <Button size='xs' onClick={() => addItem(product)}>
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