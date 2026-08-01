import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Text, Tooltip, useDisclosure } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'

const CartDrawer = () => {
    const { onClose, onOpen, isOpen } = useDisclosure()

    return (
        <>
            <Tooltip label='Carrito' hasArrow>
                <Button size='sm' onClick={onOpen}>
                    <FiShoppingCart />
                </Button>
            </Tooltip>


            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <HStack>
                            <FiShoppingCart /> <Text>Carrito</Text>
                        </HStack>
                    </DrawerHeader>

                    <DrawerBody>
                        <Text>Hola</Text>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button colorScheme='purple'>Comprar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default CartDrawer