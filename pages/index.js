import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/pokemon-json/pokemons.json`)
    .then((r) => r.json())
    .then((data) => {
      return data
    })

  return {
    props: {
      pokemonList: res
    }
  }
}

export default function Home({pokemonList}) {
  // let [pokemonList, setPokemonList] = useState([])

  // useEffect(() => {
  //   fetch(`http://localhost:3000/pokemon-json/pokemons.json`)
  //   .then((r) => r.json())
  //   .then((data) =>{
  //     setPokemonList(data)
  //   })
  // }, [])

  return (
    <>
      <Head>
        <title>Pokemon App | Home</title>
      </Head>

      <div className='pokemon-list'>
        {pokemonList.map((el) => (
          <Link href={`/pokemon/${el.id}`} key={el.name}>
            <div className='pokemon-element'>
            
              <Image
                src={`/${el.name}.png`}
                width={200}
                height={200}
                alt="Picture of the author"
              />

              {el.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
