
import { IListing } from "../models/index";
import data from '../data/etsy.json';
import React from "react";

interface ParseListProps {
    render: (items: IListing[]) => React.ReactNode;
}

export const ParseList = ({ render }: ParseListProps) => {

    const dataList: IListing[] = [];

    data.forEach((item) => {
        if (item.currency_code && item.quantity > 0) {
            const listing: IListing = {
                listing_id: item.listing_id,
                url: item.url,
                MainImage: { url_570xN: item.MainImage.url_570xN },
                title: item.title,
                currency_code: item.currency_code,
                price: item.price,
                quantity: item.quantity
            };
            dataList.push(listing);
        }
    });

    return <>{render(dataList)}</>;
}


