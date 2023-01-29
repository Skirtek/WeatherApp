import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Search } from './components/Search';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Search />
    </ChakraProvider>
  );
}

export default App;
