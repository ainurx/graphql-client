import axios from 'axios'
import React, { useState} from 'react'

import { useQuery } from 'react-query'

const getAuthors = `
  query {
    authors {
      id
      name
    }
  }
`

const AddBook = () => {
  const { data, isLoading, err } = useQuery('', async()=>
    (
      await axios.post('http://localhost:5000/graphql', {
        query: getAuthors
      })
    ).data.data.authors
  )
  
  const [authorId, setAuthorId] = useState()




  return(
    <form>
      <select onChange={e => setAuthorId(e.target.value)}>
        {
          isLoading ? 
          <option>Load author data</option>
          :
          data.map(d=> (
            <option value={d.id}>{d.name}</option>
          ))
        }
      </select>
      <input type='text' placeholder='Title'/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddBook