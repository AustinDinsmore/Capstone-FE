import { NavLink } from "react-router-dom";
import date from "../img/soop-kim-7Nyt3uDKKSo-unsplash.jpg";

function ItemsCard({ items }) {
    const { id, name, img_url, description } = items;

    return (
        <NavLink to={`/item/${id}`}>
            <section>
                <img src={img_url || date} />
                <h3>
                    Name: {name}
                </h3>
                <h4>
                    Description: {description}
                </h4>
            </section>
        </NavLink>
    );
};

export default ItemsCard;