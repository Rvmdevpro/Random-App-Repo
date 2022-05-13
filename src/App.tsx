import React from 'react'
import Characters from "./Components/Characters"
import { QueryClientProvider, QueryClient } from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import 'react-bootstrap-submenu/dist/index.css'
import RandomUS from './Components/RandomUS';
import RandomCH from './Components/RandomCH';
import RandomGuys from './Components/RandomGuys';
import RandomGirls from './Components/RandomGirls';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Random10CH from './Components/Random10CH';
import Random10US from './Components/Random10US';
import Random10Guys from './Components/Random10Guys';
import Random10Girls from './Components/Random10Girls';
import Random20CH from './Components/Random20CH';
import Random20US from './Components/Random20US';
import Random20Guys from './Components/Random20Guys';
import Random20Girls from './Components/Random20Girls';

const queryClient = new QueryClient()

export default function App() {
  return (
    
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
        <Navbar bg="dark" variant='dark'>
      <Nav >
        <LinkContainer to="/">
        <NavLink>HOME</NavLink>
        </LinkContainer>
      <LinkContainer to="/US">
        <NavLink>US</NavLink>
        </LinkContainer>
      <LinkContainer to="/CH">
        <NavLink>CH</NavLink>
        </LinkContainer>
      <LinkContainer to="/RandomGuys">
        <NavLink>MEN</NavLink>
        </LinkContainer>
      <LinkContainer to="/RandomGirls">
        <NavLink>WOMEN</NavLink>
        </LinkContainer>
      </Nav>

      <Nav>
         <NavDropdown title="Number Displayed" id="navbarScrollingDropdown">
        <div>Display 10</div>
          <DropdownItem divider/>
          <LinkContainer to="/Random10US">
          <NavDropdown.Item >Americans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/Random10CH">
          <NavDropdown.Item >Swiss</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/Random10Guys">
          <NavDropdown.Item >Men</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/Random10Girls">
          <NavDropdown.Item >Women</NavDropdown.Item>
          </LinkContainer>
          <div>Display 20</div>
          <DropdownItem divider/>
          <LinkContainer to="/Random20US">
          <NavDropdown.Item >Americans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/Random20CH">
          <NavDropdown.Item >Swiss</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/Random20Guys">
          <NavDropdown.Item >Men</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/Random20Girls">
          <NavDropdown.Item >Women</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>
      
    </Navbar>
      

        <Routes>

          <Route path="/"element={<Characters/>}/>
          <Route path="/US" element={<RandomUS/>}/>
          <Route path='/CH' element={<RandomCH/>}/>
          <Route path='/RandomGuys' element={<RandomGuys/>}/>
          <Route path='/RandomGirls' element={<RandomGirls/>}/>
          <Route path='/Random10CH' element={<Random10CH/>}/>
          <Route path='/Random10US' element={<Random10US/>}/>
          <Route path='/Random10Guys' element={<Random10Guys/>}/>
          <Route path='/Random10Girls' element={<Random10Girls/>}/>
          <Route path='/Random20CH' element={<Random20CH/>}/>
          <Route path='/Random20US' element={<Random20US/>}/>
          <Route path='/Random20Guys' element={<Random20Guys/>}/>
          <Route path='/Random20Girls' element={<Random20Girls/>}/>
        </Routes>
      </Router>
    


    </QueryClientProvider>
   </div>


  )
}
