import { IListing } from "../models";
import { Card } from "./Card";

export interface ListingProps {
    items: IListing[];
}

export const Listing = ({ items }: ListingProps) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <Card key={item.listing_id}{...item} />
            ))
            }
        </div >
    );
}



