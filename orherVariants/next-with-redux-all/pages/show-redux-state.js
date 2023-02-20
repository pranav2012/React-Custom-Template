import { useSelector } from 'react-redux'
import Link from 'next/link'

const ShowReduxState = () => {
  const state = useSelector((state) => state)

  return (
    <>
      <pre className='bg-[#ebebeb] border-gray-100 w-96 p-2 mb-2'>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </>
  )
}

export default ShowReduxState
