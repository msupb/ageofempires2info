import React from 'react';
import { Link } from "react-router-dom";

interface INavBarProps {
    paths: Array<string>;
    navClass: string;
    linkClass: string;
}

const NavBar = (props: INavBarProps) => {
    return (
        <nav className={props.navClass}>
            {props.paths.map((path) => <Link key={path} className={props.linkClass} to={`/${path}`}>{path.toUpperCase()}</Link>)}
        </nav>
    )
}

export default NavBar;