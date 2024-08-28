import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import date from "../img/soop-kim-7Nyt3uDKKSo-unsplash.jpg";
import { useGetItemQuery } from "../../redux/api";

function ItemDetail() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetItemQuery(id);
    let items;
    if (data) {
        console.log(data);
        items = data.itemId;
        console.log("items", items)
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <h3>{error.data.message}</h3>;
    }
    if (items) {
        const { img_url, name, description } = items;
        return (
            <section>
                <h2>{name}</h2>
                <img src={img_url || date} />
                <h3>{description}</h3>
            </section>

        );
    }
}

export default ItemDetail;