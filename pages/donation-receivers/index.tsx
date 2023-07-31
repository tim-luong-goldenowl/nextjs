import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getRequest } from '../../ultils/httpRequests'
import withAuthen from '../auth'


function Index() {
  let [donationReceiverList, setdonationReceiverList] = useState([])

  useEffect(() => {
    getRequest('/donation-receivers')
      .then((data) => {
        setdonationReceiverList(data)
      })
  }, [])

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

export default withAuthen(Index);
