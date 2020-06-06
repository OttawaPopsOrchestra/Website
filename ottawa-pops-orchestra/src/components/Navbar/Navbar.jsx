import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { grey } from "../../constants/colors";
import { Button } from "@material-ui/core";

const NavbarStyles = styled.div`
  .MuiPaper-root {
    background-color: ${grey};
  }

  button {
    color: white;
    font-size: 18px;
    font-weight: 700;
  }
`;

export default () => {
  return (
    <NavbarStyles>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Logo />
          </IconButton>
          <div className="menuButtons">
            <Button>About Us</Button>
            <Button>Concerts</Button>
            <Button>Orchestra</Button>
            <Button>Community</Button>
            <Button>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </NavbarStyles>
  );
};
