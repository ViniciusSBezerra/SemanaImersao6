import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
 
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>

      <style>
        {`.Header{
          background-color: #041370;
        }`}
      </style>

      <Navbar className="Header" dark expand="md">
        <Container>
        <NavbarBrand href="/">Orçamentos SI6</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/orcamento">Orçamentos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/listaOrcamento">lista de orcamentos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header ;
