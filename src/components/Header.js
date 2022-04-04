import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavbarBrand, NavItem } from "reactstrap";

export const Header = () => {
  return (
    <Navbar color="dark" dark>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <NavbarBrand href="/">메모장</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              메모 추가
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
