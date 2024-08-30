import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import date from "../img/soop-kim-7Nyt3uDKKSo-unsplash.jpg";
import { useGetItemQuery } from "../../redux/api";


function ItemDetail() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetItemQuery(id);
    const [viewComments, setViewComments] = useState(false);

    let items;

    if (data) {
        items = data.itemId;
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
                {/* button with view button
                then map through reviews and comments when button is clicked */}
                <div>
                    {data.itemId.reviews && data.itemId.reviews.map((a) => {
                        return (
                            <div>
                                <p>Review</p>
                                <p>{a.txt}</p>
                                <p>{a.score}</p>
                                {a.comments.map((b) => {
                                    return (
                                        <p>Comment: {b.comment}</p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

            </section>

        );
    }
}

export default ItemDetail;