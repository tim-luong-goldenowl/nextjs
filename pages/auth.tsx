import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

async function getUser() {
  try {
    return false
  } catch (error) {
    return false
  }
}

function withAuthen(C: React.FunctionComponent) {
  return (props) => {
    const router = useRouter();
    const [loggedin, setLoggedIn] = useState(false)
  
    useEffect(() => {
      (async () => {
        const isLoggedIn = await getUser()
  
        if(!isLoggedIn) {
          setLoggedIn(false)
          router.push('/users/sign-in')
          return
        } {
          setLoggedIn(true)
        }
      })()
    }, [])
  
    if(loggedin) {
      return <C {...props} />;
    }
  }
}

export default withAuthen
