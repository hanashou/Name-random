import type { NextPage } from 'next'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Header } from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <Heading
    p="25px"
    textAlign="center"
    fontFamily="Renner*"
    >トップページ</Heading>
    <Box
    textAlign="center"
    >
        <Text>そでたけ</Text>
        <Text>きたけ</Text>
        <Text>かたはば</Text>
        <Text>みはば</Text>
    </Box>
    </>
  )
}

export default Home
