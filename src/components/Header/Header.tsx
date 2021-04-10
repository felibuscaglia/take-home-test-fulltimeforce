import React from 'react';
import { Navbar } from 'react-bootstrap';
const style = require('./Header.module.css');

function Header(): JSX.Element {
    return (
        <Navbar id={style.header} bg="dark">
            <img src="https://www.pngkey.com/png/full/178-1787243_github-icon-png-github-icon-white-png.png" id={style.logo} />
            <span>Created by Felipe Buscaglia 🧑‍💻</span>
        </Navbar>
    )
}

export default Header;