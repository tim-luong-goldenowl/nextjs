import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

export async function getServerSideProps({params}) {
    const res = await fetch(`http://localhost:3000/pokemon-json/pokemon-details.json`)
        .then((r) => r.json())
        .then((data) =>{
            return data[params.idd.toString()]
    })
  
    return {
      props: {
        pokemon: res
      }
    }
}

export default function Details({pokemon}) {
//   const [pokemon, setPokemon] = useState(null)

//   const {
//     query: { id }
//   } = useRouter();

//   useEffect(() => {
//     if(id) {
//         fetch(`http://localhost:3000/pokemon-json/pokemon-details.json`)
//         .then((r) => r.json())
//         .then((data) =>{
//             setPokemon(data[id.toString()])
//         })
//     }
    
//   }, [id])

  let pokemonContent = null
  if (pokemon) {
    pokemonContent = (
        <div className='pokemon-details'>
            <div className='pokemon-image'>
                <Image
                    src={`/${pokemon.name}.png`}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                />
            </div>
            <div className='pokemon-information'>
                <h1 className='name'>
                    Name: {pokemon.name}
                </h1>
                <h3 className='hp'>
                    HP: {pokemon.abilities.join(", ")}
                </h3>
                <h3 className='hp'>
                    HP: {pokemon.hp}
                </h3>
                <h3 className='attack'>
                    Attack: {pokemon.attack}
                </h3>
                <h3 className='defense'>
                    Defense: {pokemon.defense}
                </h3>
                <h3 className='speed'>
                    Speed: {pokemon.speed}
                </h3>
            </div>
        </div>
    )
  } else {
    'Nothing'
  }
  return (
    <>
      <Head>
        <title>Pokemon App | Details</title>
      </Head>

      {pokemonContent}
    </>
  )
}
