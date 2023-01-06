import { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import TableExample from './components/TableExample'
import TabExample from './components/TabExample'
import CarouselExample from './components/CarouselExample'

function App() {

  return (
    <Container className="w-50">
      <div className="mb-5">
        <TableExample />
      </div>

      <div className="mb-5">
        <TabExample />
      </div>

      <div className="mb-5">
        <CarouselExample />
      </div>
    </Container>
  )
}

export default App
