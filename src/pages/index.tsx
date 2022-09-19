import type { NextPage } from 'next'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Header } from '../components/Header/Header'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const catImages: string[] = [
  "https://cdn2.thecatapi.com/images/bpc.jpg",
  "https://cdn2.thecatapi.com/images/eac.jpg",
  "https://cdn2.thecatapi.com/images/6qi.jpg",
]

const randomCatImage = ():string => {
  const index = Math.floor(Math.random() * catImages.length)
  return catImages[index]
}

interface CatCategoty {
  id:number
  name:string
}

interface SearchCatImage {
  breeds: string[]
  categories: CatCategoty[]
  id:string
  url:string
  width:number
  height: number
}

type SearchCatImageResponse = SearchCatImage[]

const fetchCatImage = async (): Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  const result = (await res.json()) as SearchCatImageResponse
  return result[0]
}


const Home: NextPage = () => {
  const [catImageUrl, setCatImageUrl] = useState(
  "https://cdn2.thecatapi.com/images/bpc.jpg"
)
const handleClick = async () => {
  const image = await fetchCatImage()
  setCatImageUrl(image.url)
}
  return (
    <>
    <Header/>
    <Heading
    p="25px"
    textAlign="center"
    >
      トップページ
    </Heading>
    <Box
    textAlign="center"
    p="2%"
    >
      <Button
    onClick={handleClick}
    >
      ねこの世界へようこそ
    </Button>
    </Box>
    <Box
    textAlign="center"
    >
      <Image 
      alt="cat"
      src={catImageUrl}
      width={800}
      height={600}
      />
    
        <Text>そでたけ</Text>
        <Text>きたけ</Text>
        <Text>かたはば</Text>
        <Text>みはば</Text>
    </Box>
    </>
  )
}

export default Home
