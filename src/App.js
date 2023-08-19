import React, { useState } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query';

import Books from './components/Books'
import Authors from './components/Authors';

const queryClient = new QueryClient()

function App() {
  const [section, setSection] = useState('Home')

  return (
    <QueryClientProvider client={queryClient}>
      <h1 style={{ textAlign: 'center'}}>GraphQL client</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <p onClick={()=> setSection('Home')} 
          style={{
            cursor: 'pointer',
            color: section === 'Home' ? 'black' : 'grey'
          }}>Home</p>
        <p onClick={()=> setSection('Authors')} 
          style={{
            cursor: 'pointer',
            color: section === 'Authors' ? 'black' : 'grey'
          }}>Authors</p>
        <p onClick={()=> setSection('Books')} 
          style={{
            cursor: 'pointer',
            color: section === 'Books' ? 'black' : 'grey'
          }}>Books</p>
      </div>
      <div style={{ padding: '24px 48px', }}>
        {
          section === 'Home' && (
            <h3>Home</h3>
          )
        }

        {
          section === 'Books' && (
            <Books/>
          )
        }

        {
          section === 'Authors' && (
            <Authors/>
          )
        }
      </div>
    </QueryClientProvider>
  );
}

export default App;
