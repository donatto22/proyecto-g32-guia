import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useDisclosure, VStack } from '@chakra-ui/react'
import { QRCodeSVG } from 'qrcode.react'
import { useLocation } from 'react-router-dom'

const QrProduct = () => {
    const { pathname } = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Tooltip hasArrow label='Click para escanear QR' placement='left'>
                <Button onClick={onOpen}
                    position='absolute' bottom={0} right={0} m='1em'
                    h={20} bgColor='purple.100' borderRadius={14}>
                    <QRCodeSVG width={60} height={60} value={`http://localhost:5173${pathname}`} bgColor='transparent' />
                </Button>
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose} size='xs'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>QR</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <QRCodeSVG width={200} height={200} value={`http://localhost:5173${pathname}`} bgColor='transparent' />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default QrProduct