import React from 'react';
import { Link } from 'react-router-dom';
import strings from '../../services/strings';

interface IHomeColumnProps {
    columnCategory: string;
}

const HomeColumn = (props: IHomeColumnProps) => {
    const columnStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + props.columnCategory +'.jpg'})`,
        backgroundSize: 'cover',
    };
    return(
        <Link to={`/${props.columnCategory}`}>
            <div style={columnStyle} className="column start-column">
                <h2>{props.columnCategory.toUpperCase()}</h2>
            </div>
        </Link>
    )
}

export default HomeColumn;