import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getRequest } from '../../ultils/httpRequests'
import withAuthen from '../../components/hoc/auth'

export async function getServerSideProps() {
  console.log("LLLLLLLLLsandjkasndjkasndjkasnjkd")
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

function Index({donationReceiverList}) {
  // let [donationReceiverList, setdonationReceiverList] = useState([])

  // useEffect(() => {
  //   getRequest('/donation-receivers')
  //     .then((data) => {
  //       setdonationReceiverList(data)
  //     })
  // }, [])

  return (
    <>
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
