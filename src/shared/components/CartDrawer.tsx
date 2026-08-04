import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Text, Tooltip, useDisclosure, VStack } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import useCartStore from '../store/CartStore'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import type { DummyProduct } from '../../module/dummyJson'
import CartItem from './CartItem'

const CartDrawer = () => {
    const { onClose, onOpen, isOpen } = useDisclosure()
    const cart = useCartStore((state) => state.cart)

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
                            <FiShoppingCart /> <Text>Carrito</Text>
                        </HStack>
                    </DrawerHeader>

                    <DrawerBody>
                        {
                            cart.length == 0 ? <VStack h='100%' justifyContent='center'>
                                <MdOutlineRemoveShoppingCart size='100' />
                                <Text>No tienes items en tu carrito</Text>
                            </VStack> : <VStack gap='1em'>
                                {
                                    cart.map((i: DummyProduct) => (
                                        <CartItem product={i} />
                                    ))
                                }
                            </VStack>
                        }
                    </DrawerBody>

                    {
                        cart.length != 0 && <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cerrar
                            </Button>
                            <Button colorScheme='purple'>Comprar</Button>
                        </DrawerFooter>
                    }
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CartDrawer