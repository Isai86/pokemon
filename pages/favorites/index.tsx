import React, { useState, useEffect } from 'react'
import { Layout } from '../../components/layouts';
import { FavoritesPokemon, NoFavorites } from '../../components/ui';
import { localFavorite } from '../../utils';

const FavoritosPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorite.pokemons());
    
  }, []);
  

  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0 ?
        (<NoFavorites/>) :
        (<FavoritesPokemon pokemon={favoritePokemons}/>)
      }
     
    </Layout>
  )
}

export default FavoritosPage;