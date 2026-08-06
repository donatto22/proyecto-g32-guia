import { Box, Button, Heading, HStack, Link, VStack } from '@chakra-ui/react'
import type { FC, ReactNode } from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Paths } from '../../router/routes'
import useUserStore from '../store/UserStore'
import CartDrawer from '../components/CartDrawer'

interface NavLayoutType {
    children: ReactNode
}

const NavLayout: FC<NavLayoutType> = ({ children }) => {
    const user = useUserStore((state) => state.user)
    const logout = useUserStore((state) => state.logout)

    return (
        <>
            <VStack gap='1em' align='start'>
                <HStack w='100%' bgColor='gray.100' borderBottom='2px solid' borderColor='gray.300'>

                    <HStack justifyContent='space-between' w='90%' m='0 auto' p='1em 0'>
                        <Heading fontSize='2xl'>MyStore</Heading>

                        <HStack gap={6}>
                            <Link as={RouterLink} to={Paths.home}>Home</Link>
                            {
                                user ?
                                    <>
                                        <Button onClick={logout} size='sm'
                                            variant='outline' colorScheme='purple'>Cerrar sesión</Button>

                                        <CartDrawer />
                                    </>
                                    :
                                    <Link as={RouterLink} to={Paths.login}>Login</Link>
                            }
                        </HStack>
                    </HStack>
                </HStack>

                <Box w='90%' m='0 auto' minH='calc(100vh - 96px)'>
                    {children}
                </Box>
            </VStack>
        </>
    )
}

export default NavLayout