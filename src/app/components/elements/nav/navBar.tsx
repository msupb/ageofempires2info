import React from 'react';
import { Link } from "react-router-dom";
import Strings from '../../../services/strings';

interface INavBarProps {
    paths: Array<string>;
    navClass: string;
    linkClass: string;
}

const NavBar = (props: INavBarProps) => {

    const navStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/image8.jpg'})`,
        backgroundSize: 'cover',
    };

    return (
        <div style={navStyle} className="sidebar-container">
            <div className="sidebar-logo">
                {Strings.title}
            </div>
            <ul data-testid="navul" className="sidebar-navigation">
                {props.paths.map((path) => <Link key={path} className={props.linkClass} to={`/${path}`}>{path.toUpperCase()}</Link>)}
            </ul>
        </div>
    )
}

export default NavBar;