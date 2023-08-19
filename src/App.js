import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query';

import Books from './components/Books'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 style={{ textAlign: 'center'}}>GraphQL client</h1>
      <Books/>
    </QueryClientProvider>
  );
}

export default App;
