import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getRequest } from '../../ultils/httpRequests'
import { iDonationReceiver } from './interfaces/donation-receiver.interface'

export async function getServerSideProps() {
  const res = await getRequest('/donation-receivers')
    .then((data: Array<iDonationReceiver>) => {
      return data
    })

  return {
    props: {
      donationReceiverList: res
    }
  }
}

export default function Home({donationReceiverList}) {
  // let [donationReceiverList, setdonationReceiverList] = useState([])

  // useEffect(() => {
  //   fetch(`http://localhost:3000/pokemon-json/pokemons.json`)
  //   .then((r) => r.json())
  //   .then((data) =>{
  //     setdonationReceiverList(data)
  //   })
  // }, [])

  return (
    <>
      <Head>
        <title>Donation App | Donation Receivers</title>
      </Head>

      <div className='donation-receiver-list'>
        {donationReceiverList.map((el: iDonationReceiver) => (
          <Link href={``} key={el.id}>
            <div className='pokemon-element'>
              {el.businessName}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
