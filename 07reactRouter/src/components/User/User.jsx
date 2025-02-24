import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()

  return (
    <div className='bg-orange-800 text-white p-4 rounded-lg'>User : {userid} </div>
  )
}

export default User