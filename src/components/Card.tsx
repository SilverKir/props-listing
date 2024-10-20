
import { IListing } from '../models'

export const Card = (item: IListing) => {

    const itemTitle: string = item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title;

    let itemPrice: string;

    if (item.currency_code === "USD") {
        itemPrice = "$" + item.price
    } else if (item.currency_code === "EUR") {
        itemPrice = "€" + item.price;
    } else {
        itemPrice = item.price + " " + item.currency_code;
    }

    const itemQuantity: string = item.quantity <= 10 ? "low" : item.quantity <= 20 ? "medium" : "high";

    return (
        <div className="item" >
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={itemTitle} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{itemTitle}</p>
                <p className="item-price">{itemPrice}</p>
                <p className={`item-quantity level-${itemQuantity}`}>{item.quantity} left</p>
            </div>
        </div>
    )
}
