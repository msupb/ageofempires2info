import React from 'react';
import strings from '../../services/strings';
import HomeColumn from './homeColumn';

const HomeComponent = () => {
    const categories: Array<string> = strings.getCategories();
    return(
        <div className="container">
            <h1>{strings.title}</h1>
            <h4>{strings.subTitle}</h4>
            <div className="row">
                {categories.map((value) => {
                    return(
                        <HomeColumn key={value} columnCategory={value}></HomeColumn>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeComponent;