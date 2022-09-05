import type { NextPage } from 'next'
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
    <Heading
    p="25px"
    textAlign="center"
    >HelloWorld</Heading>
    <Box
    textAlign="center"
    >
      <UnorderedList>
        <ListItem>そでたけ</ListItem>
        <ListItem>きたけ</ListItem>
        <ListItem>かたはば</ListItem>
        <ListItem>みはば</ListItem>
      </UnorderedList>
    </Box>
    </>
  )
}

export default Home
