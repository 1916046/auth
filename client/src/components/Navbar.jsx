import React from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar> 
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/add" color="inherit">
            Add User
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
