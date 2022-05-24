import {FC} from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '../pokemon';

interface Props{
  pokemon: number[];
 
}

export const FavoritesPokemon: FC <Props> = ({pokemon}) => {


  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
         {
           pokemon.map(id =>(
              <FavoriteCardPokemon key={id} id={id}/>
           ))
         }
        </Grid.Container>
  )
}
