import { Box, Button, Container, Flex, Heading,useColorMode,useColorModeValue } from '@chakra-ui/react'
import { memo } from 'react'
import type { FC } from 'react'
import NextLink from "next/link"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Header: FC = memo(() => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box px={4} bgColor="gray.100" bg={useColorModeValue("gray.100", "gray.900")}>
            <Container maxW="container.lg">
                <Flex as="header" py="4" justifyContent="space-between" alignItems="center" color={useColorModeValue("gray.600", "white")}>
                    <NextLink href="/" passHref>
                        <Heading as='h1' fontSize="2xl" cursor="pointer" fontFamily="Renner*">
                            Hanas App
                        </Heading>
                    </NextLink>
                    <Button size="lg" onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                    </Button>
                </Flex>
            </Container>
        </Box>
    )
})

Header.displayName = 'MyHeader'

