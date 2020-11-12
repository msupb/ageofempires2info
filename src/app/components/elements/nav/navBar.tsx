import React from 'react';
import { Link } from "react-router-dom";
import Strings from '../../../services/strings';

interface INavBarProps {
    paths: Array<string>;
    navClass: string;
    linkClass: string;
}

const NavBar = (props: INavBarProps) => {
    return (
        // <nav className={props.navClass}>
        //     {props.paths.map((path) => <Link key={path} className={props.linkClass} to={`/${path}`}>{path.toUpperCase()}</Link>)}
        // </nav>
        <div className="sidebar-container">
            <div className="sidebar-logo">
                {Strings.sideBarText}
            </div>
            <ul className="sidebar-navigation">
                {props.paths.map((path) => <Link key={path} className={props.linkClass} to={`/${path}`}>{path.toUpperCase()}</Link>)}
            </ul>
        </div>
    )
}

export default NavBar;