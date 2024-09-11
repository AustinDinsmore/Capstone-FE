import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import date from "../img/soop-kim-7Nyt3uDKKSo-unsplash.jpg";
import { useGetItemQuery } from "../../redux/api";


function ItemDetail() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetItemQuery(id);
    const [viewComments, setViewComments] = useState(false);
    const navigate = useNavigate();

    let items = {};

    if (data) {
        items = data.itemId;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <h3>{error.data.message}</h3>;
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        navigate(`/review/${id}`, { state: { items } });
    }


    if (items) {
        const { img_url, name, description } = items;
        return (
            <section>
                <h2>{name}</h2>
                <img src={img_url || date} />
                <h3>{description}</h3>
                {!viewComments && (<div>
                    <button onClick={() => setViewComments(!viewComments)}>View Comments</button>
                </div>)}
                {viewComments && data.itemId.reviews && data.itemId.reviews.map((a) => {
                    return (
                        <div key={a.id}>
                            <p>Review: {a.txt}</p>
                            <p>Rating: {a.score}</p>
                            {a.comments.map((b) => {
                                return (
                                    <p key={b.id}>Comment: {b.comment}</p>
                                )
                            })}
                        </div>
                    )
                })}
                <button onClick={handleSubmit}>Create Review</button>
                <button></button>
            </section>
        );
    }
}

export default ItemDetail;