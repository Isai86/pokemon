import NextLink from 'next/link';
import { Spacer, Text, useTheme,Link } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'

export const Navbar = () => {
  const {theme} = useTheme();
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0px 20px',
        backgroundColor:theme?.colors.gray50.value
    }}>
  <Image 
  src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"}
  alt="icono de la app"
  width={80}
  height={80}
  />
  <NextLink href="/" passHref>
  <Link>
  <Text color='white'>
  <h2>P</h2>
  </Text>
  <Text color='white'>
  <h3>okémon</h3>
  </Text>
  </Link>
  </NextLink>
  <Spacer css={{flex: 1}}/>
  <NextLink href='/favorites'>
   <Link>
  <Text color='white'>
  <h3>Favoritos</h3>
  </Text>
  </Link>
  </NextLink>
  </div>
  )
}
