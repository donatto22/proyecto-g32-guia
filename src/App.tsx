import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Toaster />
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App