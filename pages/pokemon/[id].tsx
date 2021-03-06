import { useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from "canvas-confetti";

import { Layout } from '../../components/layouts';
import localFavorites from '../../utils/localFavorites';
import { getPokemonInfo } from '../../utils';

interface Props{
  pokemon: any;
 
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));
  
  const onToggleFavorite = () =>{
    /* console.log('ID:', pokemon.id); */
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if(isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount:100,
      spread:100,
      angle:-1000,
      origin: { y: 0.6 }
    })
  }

  console.log({existeWindow: typeof window});



  return (
    <Layout title={pokemon.name}>
    <Grid.Container css={{marginTop:'5px'}} gap={2}>
      <Grid xs={12} sm={4} >
       <Card hoverable css={{padding:'30px'}}>
         <Card.Body>
           <Card.Image
           src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
           alt={pokemon.name}
           width="100%"
           height={200}
           />
         </Card.Body>
       </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{display:'flex', justifyContent: 'space-between'}}>
           <Text transform='capitalize'><h1>{pokemon.name}</h1></Text>
           <Button
           color="gradient"
           ghost={!isInFavorites}
           onClick={onToggleFavorite}
           >
           {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
           </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Variantes:</Text>
            <Container direction='row' display='flex' gap={0}>
              <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
              />
               <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={100}
              height={100}
              />
               <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
              />
               <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
    </Layout>
  )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const pokemonsTotal = [...Array(251)].map((value, index) => `${index + 1}`);


  return {
  /*   paths: [
      {
        params: {
          id: '1'
        }
      }
    ], */
    paths: pokemonsTotal.map(id =>({
     params:{id}
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const {id} = params as { id:string };
  
  
   
    return {
      props: {
       pokemon: await getPokemonInfo(id)
      }
    }
  }



export default PokemonPage;
