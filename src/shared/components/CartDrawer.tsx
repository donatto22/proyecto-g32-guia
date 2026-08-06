import { Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Text, Tooltip, useDisclosure, VStack } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import useCartStore, { type CartProduct } from '../store/CartStore'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import CartItem from './CartItem'

const CartDrawer = () => {
    const { onClose, onOpen, isOpen } = useDisclosure()
    const cart = useCartStore((state) => state.cart)
    const clearCart = useCartStore((state) => state.clearCart)
    const getTotalItems = useCartStore((state) => state.getTotalItems)
    const getTotalPrice = useCartStore((state) => state.getTotalPrice)

    return (
        <>
            <Tooltip label='Carrito' hasArrow>
                <Button size='sm' onClick={onOpen}>
                    <FiShoppingCart />
                </Button>
            </Tooltip>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <HStack>
                            <FiShoppingCart /> <Text>Carrito: {getTotalItems()}</Text>
                        </HStack>
                    </DrawerHeader>

                    <DrawerBody>
                        {
                            cart.length == 0 ? <VStack h='100%' justifyContent='center'>
                                <MdOutlineRemoveShoppingCart size='100' />
                                <Text>No tienes items en tu carrito</Text>
                            </VStack> : <VStack gap='1em'>
                                {
                                    cart.map((i: CartProduct) => (
                                        <CartItem product={i} />
                                    ))
                                }
                            </VStack>
                        }
                    </DrawerBody>

                    {
                        cart.length != 0 && <DrawerFooter>
                            <ButtonGroup>
                                <Button variant='outline' onClick={onClose}>
                                    Cerrar
                                </Button>
                                <Button colorScheme='red' variant='outline' onClick={clearCart}>
                                    Vaciar carrito
                                </Button>
                                <Button colorScheme='purple'>Pagar ${getTotalPrice().toFixed(2)}</Button>
                            </ButtonGroup>
                        </DrawerFooter>
                    }
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CartDrawer