import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getRequest } from '../../ultils/httpRequests'

export async function getServerSideProps() {
  const res = await getRequest('/donation-receivers')
    .then((data) => {
      return data
    })

  return {
    props: {
      donationReceiverList: res
    }
  }
}

export default function Home({donationReceiverList}) {
  return (
    <>
      <Head>
        <title>Donation App | Donation Receivers</title>
      </Head>

      <div className='donation-receiver-list'>
        {donationReceiverList.map((el) => (
          <Link href={``} key={el.id}>
            <div className='pokemon-element'>
              {el.email}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
