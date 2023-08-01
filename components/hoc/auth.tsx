import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getRequest } from '../../ultils/httpRequests'

async function getUser() {
  let userData = undefined

  await getRequest('/users/me')
    .then((data) => {
      userData = data
    })

  return userData;
}

function withAuthen(C: React.FunctionComponent) {
  return (props) => {
    const router = useRouter();
    const [loggedin, setLoggedIn] = useState(false)

    useEffect(() => {
      (async () => {
        const isLoggedIn = await getUser()

        if (!isLoggedIn) {
          setLoggedIn(false)
          router.push('/users/sign-in')
          return
        } {
          setLoggedIn(true)
        }
      })()
    }, [])

    if (loggedin) {
      return <C {...props} />;
    }
  }
}

export default withAuthen
