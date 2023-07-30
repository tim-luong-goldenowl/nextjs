import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getRequest } from '../ultils/httpRequests'

export default function Home({donationReceiverList}) {
  return (
    <>
      <Head>
        <title>Donation App | Donation Receivers</title>
      </Head>

      <div className='donation-receiver-list'>
          
      </div>
    </>
  )
}
