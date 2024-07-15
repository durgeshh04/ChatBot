import React, { useState, useEffect } from 'react'
import Chat from './components/Chat'

const App = () => {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) {
  //   return (
  //     <div className='flex items-center justify-center h-screen'>
  //       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900'></div>
  //     </div>
  //   )
  // }

  return (
    <div className=''>
      <Chat/>
    </div>
  )
}

export default App
