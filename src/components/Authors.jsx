import React from 'react'

import axios from 'axios'
import { useQuery } from 'react-query'

import AddAuthors from './AddAuthors'

const Authors = `
  query {
    authors {
      id
      name
    }
  }
`

const Author = () => {
  const { data, isLoading, err} = useQuery('authors',  async ()=>
    (
      await axios.post('http://localhost:5000/graphql',{
        query: Authors
      })).data.data.authors
  )

  if (isLoading) return 'Loading ...'
  if(err) return <p>{err.message}</p>

  return (
    <>
      <h3>Authors</h3>

      <AddAuthors totalAuthor={data.length}/>

      <ul>
        {
          data.map(d=>(
            <li key={d.id}>{d.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Author