import React, { useEffect, useState } from 'react';
import utilities from '../../services/utilities';
import HttpService from '../../services/http/httpService';
import CusButton from '../elements/button/cusButton';

interface ILinkDetailsProps {
    links: Array<string>;
}

const LinkDetails = (props: ILinkDetailsProps) => {

    const [urlDetails, setUrlDetails] = useState();
    const [itemFetched, setItemFetched] = useState(false);

    useEffect(() => {
        console.log(urlDetails);

        if(urlDetails) {
            let details: any = urlDetails;

            let item = {};

            const getItem = async () => {
                item = await HttpService.get(details[0], details[1]);

                console.log('FETCHED ITEM', item);

            };

            getItem();

            return () => {
                console.log('DISPOSED');
            };
        }

    }, [urlDetails])

    const formatLinks = (links: Array<string>): Array<Array<string>> => {
        let formatted: Array<Array<string>> = [];
        links.forEach((url: string) => {
            let link = utilities.trimUrl(url);

            formatted.push(link);
        });

        return formatted;
    }

    let formatted: Array<Array<string>> = formatLinks(props.links);

    console.log(formatted);

    return(
        <div className="card">
            {props.links && formatted.map((details: any) => {
                return (
                        <div>
                            <p key={details}>{details[1]}</p>
                            <CusButton btnType={'button'} btnText={'Go to'} onClickMethod={() => setUrlDetails(details)}></CusButton>
                        </div>
                    )
                }
            )
        }
        </div>
    )
}

export default LinkDetails;