import React from 'react'
// import React, { useState, useEffect } from 'react'

// import apiService from '../service/index'

import axios from 'axios'

import { useQuery } from 'react-query'

const getAllBooks = `
  query {
    books{
      id
      name
    }
  }
`

const Books = () =>{
  const { data, isLoading, err } = useQuery('', async ()=>
    (await axios.post('http://localhost:5000/graphql', {
      query: getAllBooks
    })).data.data.books
  // {
  //   const res = await axios.post('http://localhost:5000/graphql', {
  //     query: getAllBooks
  //   })
  //   console.log(res)
  //   return res.data.data.books
  // }
  )
  // const [data, setData] = useState([])
  
  // useEffect(()=>{
  //   fetchBook()
  // }, [])

  // const fetchBook = async () =>{
  //   try{
      // const res = await axios.get('http://localhost:5000/grapghql')
     
      // console.log(res)
  //   } catch(err){
  //     console.log(err)
  //   }
  // }

  if(isLoading) return 'Loading....'
  if(err) return <p>{err.message}</p>

  return (
    <>
      <h3>List of books</h3>
      <ul>
        {
          data.map((b)=>(
            <li>{b.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Books