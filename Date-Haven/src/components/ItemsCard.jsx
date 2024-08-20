import { NavLink } from "react-router-dom";


function ItemsCard({ items }) {
    const { name, description, reviews } = items;

    return (
        <NavLink to={`/api/item/${items.id}`}>
            <section>
                <h3>
                    Name: {name}
                </h3>
                <h4>
                    Description: {description}
                    reviews: {reviews}
                </h4>
            </section>
        </NavLink>
    );
};

export default ItemsCard;