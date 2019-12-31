import React, { Component } from 'react';
import {Link} from '@reach/router';
import { GiCastle } from 'react-icons/gi';


class Nav extends Component {
    render() {
        return(
        <div>
            <nav className="nav-bar">
                <GiCastle className="castle-icon"/>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="about">About</Link>
                <Link className="link" to="projects">Projects</Link>
                <Link className="link" to="contact">Contact</Link>
                <Link className="link" to="castles">Castles</Link>
            </nav>
        </div>
        )
    }
}

export default Nav;
