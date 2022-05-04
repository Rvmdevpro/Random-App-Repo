import React from 'react'
import Characters from "./Components/Characters"
import { QueryClientProvider, QueryClient } from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const queryClient = new QueryClient()

export default function App() {
  return (
    
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar bg="dark" variant='dark'>
      <Nav >
      <NavLink>US</NavLink>
      <NavLink >CH</NavLink>
      <NavLink>Men</NavLink>
      <NavLink>Women</NavLink>
      </Nav>

      <Nav>
         <NavDropdown title="Number Displayed" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">10</NavDropdown.Item>
          <NavDropdown.Item href="#action4">20</NavDropdown.Item>
          <NavDropdown.Item href="#action5">30</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
      <Router>
        <Routes>
          <Route path="/"element={<Characters/>}/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </Router>
    


    </QueryClientProvider>
   </div>


  )
}
