import { FC } from "react";
import Head from "next/head"

import {Navbar} from '../ui'

interface Props{
    children: JSX.Element;
    title?: string;
  }

  const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({children, title}) => {

 

  return (
    <>
     <Head>
         <title>{title ?? "pokemonApp"}</title>
         <meta name="author" content="Isai Trejo"/>
         <meta name="description" content={`información sobre el pokemon ${title}`}/>
         <meta name="keywords" content={`${title}, pokemon , pokedex`}/>
         <meta property="og:title" content={`Información sobre ${title}`}/>
         <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
         <meta property="og:image" content={`${origin}/img/banner.png`} />
     </Head>
    <Navbar/>
    <main>
        {children}
    </main>
    </>
  )
}
