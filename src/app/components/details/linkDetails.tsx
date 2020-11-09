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

    const [itemFetched, setItemFetched] = useState<boolean>(false);
    const [linkedItems, setLinkedItems] = useState<Array<IModelBase>>([]);

    const formatLinks = (links: Array<string>): Array<Array<string>> => {
        let formatted: Array<Array<string>> = [];
        links.forEach((url: string) => {
            let link = utilities.trimUrl(url);

            formatted.push(link);
        });

        return formatted;
    }

    const internalItemFactory = (link: string, item: any): any => {
        let test: IModelBase = {};

        if(link === strings.civilization)
            test = ListFactory.GetItem(item, strings.civilizations);
        if(link === strings.unit)
            test = ListFactory.GetItem(item, strings.units);
        if(link === strings.technology)
            test = ListFactory.GetItem(item, strings.technologies);
        if(link === strings.structure)
            test = ListFactory.GetItem(item, strings.structures);

        return test;
    } 

    const formatted: Array<Array<string>> = formatLinks(props.links);

    useEffect(() => {       
        const getItems = ((links: Array<Array<string>>) => {
            let items: Array<IModelBase> = [];
            links.forEach(async(link) => {
                // data is of type any since an object or an array can be returned 
                let data: any = await HttpService.get(link[0], link[1]);
    
                if(data.constructor === Array) {
                    data.forEach(item => {
                        item = internalItemFactory(link[0], item);
                        items.push(item);
                        console.log('Is array', items);
                    })
                    console.log('Is array');
                } else {
                    data = internalItemFactory(link[0], data);
                    items.push(data);
                }
    
            });
            setLinkedItems(items);
            setItemFetched(true);
        });
    
        getItems(formatted);
        
        return () => {
            console.log('DISPOSED');
        };

    }, [])

    useEffect(() => {
        if(itemFetched)
            console.log('Has values', linkedItems)
    }, [itemFetched])

    return(
        <div className="card">
            {linkedItems.map((item, i) => {
                return ( 
                        <div>
                            <p key={item.localId}>{item.name}</p>
                            <Link to={`/details/${item.category}/${item.id}`}>
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