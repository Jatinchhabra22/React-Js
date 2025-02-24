import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const[data , setdata] = useState({})

    // useEffect(() => {
     
    //     fetch('https://api.github.com/users/Jatinchhabra22')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // }, [])
    

  return (
    <div className='text-center m-4 bg-gray-700 text-white text-3xl p-4'>
        Github Followers : {data.followers}

        <img src={data.avatar_url} alt="Git - pic"  width={300}/>
        </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Jatinchhabra22')
    return response.json()
}