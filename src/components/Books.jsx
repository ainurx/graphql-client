import React from 'react'

import axios from 'axios'

import { useQuery } from 'react-query'

import AddBook from './AddBooks'

const getAllBooks = `
  query {
    books{
      id
      name
    }
  }
`

const Books = () =>{
  const { data, isLoading, err } = useQuery('books', async ()=>
    (await axios.post('http://localhost:5000/graphql', {
      query: getAllBooks
    })).data.data.books
  )

  if(isLoading) return 'Loading....'
  if(err) return <p>{err.message}</p>

  return (
    <>
      <h3>Books</h3>
      <AddBook/>
      <ul>
        {
          data.map((b)=>(
            <li key={b.id}>{b.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Books