import React, { useCallback, useEffect, useState } from 'react';
import utilities from '../../services/utilities';
import HttpService from '../../services/http/httpService';
import CusButton from '../elements/button/cusButton';
import { Link } from "react-router-dom";
import DetailsFactoryComponent from './detailsFactoryComponent';
import { IModelBase } from '../../models/modelBase';
import strings from '../../services/strings';
import HomeComponent from '../home/homeComponent';
import EmitDetailsContext from '../../services/contexts/emitDetailsContext';
import ListFactory from '../../services/listFactory';

interface ILinkDetailsProps {
    links: Array<string>;
}

const LinkDetails = (props: ILinkDetailsProps) => {

    const [itemFetched, setItemFetched] = useState(false);
    const [linkedItems, setLinkedItems] = useState([]);

    const formatLinks = (links: Array<string>): Array<Array<string>> => {
        let formatted: Array<Array<string>> = [];
        links.forEach((url: string) => {
            let link = utilities.trimUrl(url);

            formatted.push(link);
        });

        return formatted;
    }

    let formatted: Array<Array<string>> = formatLinks(props.links);

    useEffect(() => {

        const getItems = (links: Array<Array<string>>) => { 
            let items: any = [];
            links.forEach((link) => {
                const itemPromise = new Promise<IModelBase>(async (resolve, reject) => {
                    resolve(await HttpService.get(link[0], link[1]));
                });

                itemPromise.then((data) => {
                    //let item: IModelBase = {};

                    // if(link[0] === strings.civilization)
                    //     item = ListFactory.GetItem(data, strings.civilizations);
                    // if(link[0] === strings.unit)
                    //     item = ListFactory.GetItem(data, strings.units);
                    // if(link[0] === strings.technology)
                    //     item = ListFactory.GetItem(data, strings.technologies);
                    // if(link[0] === strings.structure)
                    //     item = ListFactory.GetItem(data, strings.structures);
                    
                    // items.push(item)

                    //items.push(data);

                    let test = [];

                    test.push(data);

                    if(link[0] === strings.civilization)
                         items = ListFactory.GetList(test, strings.civilizations);
                    if(link[0] === strings.unit)
                        items = ListFactory.GetList(test, strings.units);
                    if(link[0] === strings.technology)
                        items = ListFactory.GetList(test, strings.technologies);
                    if(link[0] === strings.structure)
                        items = ListFactory.GetList(test, strings.structures);
                    
         
                    
                });
            });
            
            setLinkedItems(items);
        }
            
        getItems(formatted);
        setItemFetched(true);

        return () => {
            console.log('DISPOSED');
        }

    }, [])

    useEffect(() => {
        if(itemFetched)
            console.log('Has values', linkedItems)
    }, [itemFetched])

    return(
        <div className="card">
            {itemFetched && formatted.map((details: any, i) => {
                return ( 
                        <div>
                            <p key={details[1]}>{details[1]}</p>
                            <Link to={`/details/${details[0]}/${details[1]}`}>
                                <EmitDetailsContext.Consumer>
                                    {(value) => <CusButton btnType={'button'} btnText={strings.goTo} onClickMethod={() => value?.clickMethod(linkedItems[i])}></CusButton> }    
                                </EmitDetailsContext.Consumer>
                            </Link>
                        </div>
                    )
                }
            )
        }
        </div>
    )
}

export default LinkDetails;