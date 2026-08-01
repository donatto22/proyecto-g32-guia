import { Button, FormControl, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import { signIn } from '../../services/dummyService'
import useUserStore from '../../shared/UserStore'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../router/routes'

interface LoginData {
    username: string
    password: string
}

const Login = () => {
    const { login2 } = useUserStore()
    const navigate = useNavigate()

    const dummyLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formulario = e.currentTarget
        const formData = new FormData(formulario)
        const data = Object.fromEntries(formData) as unknown as LoginData

        const result = await signIn(data.username, data.password)
        login2(result)

        navigate(Paths.home)
    }

    return (
        <VStack h='100vh' bg='linear-gradient(cyan, purple)' justifyContent='center'>
            <VStack align='start'>
                <VStack gap='2em' align='start' p='2em' w='300px' bgColor='rgba(255, 255, 255, .2)' borderRadius='20px'>
                    <VStack align='start'>
                        <Link fontStyle='italic'>Volver al home</Link>
                        <Heading fontSize='lg'>Iniciar Sesión</Heading>
                    </VStack>

                    <VStack as='form' gap='3em' onSubmit={(e) => dummyLogin(e)}>
                        <FormControl>
                            <FormLabel>Correo</FormLabel>
                            <Input name='username' border='0' outline='1px solid' outlineColor='blue.500' />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <Input name='password' border='0' outline='1px solid' outlineColor='blue.700' />
                        </FormControl>

                        <Button w='100%' colorScheme='blue' type='submit'>Ingresar</Button>
                    </VStack>
                </VStack>

                <Link color='violet'>Crear cuenta</Link>
            </VStack>
        </VStack>
    )
}

export default Login