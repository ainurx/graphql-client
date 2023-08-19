import React, { useState } from 'react'

import { useMutation, useQueryClient } from 'react-query'


const AddAuthors = ({ totalAuthor }) => {
  const queryClient = new useQueryClient()
  const [name, setName] = useState('')

  const mutation = useMutation(``, {
    onSuccess: () =>{
      queryClient.invalidateQueries('books')
    }
  })

  const onSubmit = (e) =>{
    e.preventDefault()
    mutation.mutate({
      name
    })
  }

  return(
    <>
      <h4>Add new author</h4>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='Full name' onChange={(e)=> setName(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>
    </>
  )
}

export default AddAuthors