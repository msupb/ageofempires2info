import React, { useEffect, useState } from 'react';
import utilities from '../../../services/utilities';
import HttpService from '../../../services/http/httpService';
import { IModelBase } from '../../../models/modelBase';
import strings from '../../../services/strings';
import ItemBuilder from '../../../services/itemBuilder';
import LinkDetail from './linkDetail';

interface ILinkDetailsProps {
    links: Array<string>;
}

const LinkDetailsComponent = <T extends IModelBase>(props: ILinkDetailsProps) => {

    const [itemFetched, setItemFetched] = useState<boolean>(false);
    const [linkedItems, setLinkedItems] = useState({items: []});

    const formatLinks = (links: Array<string>): Array<Array<string>> => {
        let formatted: Array<Array<string>> = [];
        links.forEach((url: string) => {
            let link = utilities.trimUrl(url);

            formatted.push(link);
        });

        return formatted;
    }

    const internalItemFactory = (item: any, link: string): T => {
        if(link === strings.civilization)
            item = ItemBuilder.GetItem(item, strings.civilizations);
        if(link === strings.unit)
            item = ItemBuilder.GetItem(item, strings.units);
        if(link === strings.technology)
            item = ItemBuilder.GetItem(item, strings.technologies);
        if(link === strings.structure)
            item = ItemBuilder.GetItem(item, strings.structures);

        return item as T;
    }

    const internalListFactory = (list: Array<T>, link: string): Array<T> => {
        if(link === strings.civilization)
            list = ItemBuilder.GetList(list, strings.civilizations);
        if(link === strings.unit)
            list = ItemBuilder.GetList(list, strings.units);
        if(link === strings.technology)
            list = ItemBuilder.GetList(list, strings.technologies);
        if(link === strings.structure)
            list = ItemBuilder.GetList(list, strings.structures);
        
        return list;
    }

    const formatted: Array<Array<string>> = formatLinks(props.links);

    useEffect(() => {
        const getItems = ((links: Array<Array<string>>) => {
            let items: any = [];
            links.forEach(async(link) => {
                
                let data: any = await HttpService.get(link[0], link[1]);
    
                if(data.constructor === Array) {
                    data = internalListFactory(data, link[0])
                    items = data;
                } else {
                    data = internalItemFactory(data, link[0]);
                    items.push(data);
                }

                setLinkedItems({items: [...items as never]});
    
            });

            
            setItemFetched(true);

        });

        getItems(formatted);

        return () => {
            console.log('DISPOSED');
        };

    }, []);

    return(
        <div data-testid="linkDetailComponent" className="link-card card">
            {(itemFetched && linkedItems) && <LinkDetail itemList={linkedItems.items as Array<IModelBase>}></LinkDetail>}
        </div>
    )
}

export default LinkDetailsComponent;