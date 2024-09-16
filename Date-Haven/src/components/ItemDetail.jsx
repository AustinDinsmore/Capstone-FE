import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import date from "../img/soop-kim-7Nyt3uDKKSo-unsplash.jpg";
import { useGetItemQuery } from "../../redux/api";
import ReviewForm from "./ReviewForm";
import CommentForm from "./CommentForm";


function ItemDetail({ token, setItemSelected }) {
    const { id } = useParams();
    const { data, error, isLoading } = useGetItemQuery(id);
    const [viewComments, setViewComments] = useState(false);
    const [reviewEdit, setReviewEdit] = useState(null);
    const [commentEdit, setCommentEdit] = useState(null);
    const navigate = useNavigate();
    let item = {};
    let review = {};

    if (data) {
        item = data.itemId;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <h3>{error.data.message}</h3>;
    }

    if (item) {
        review = item.reviews.id;
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        navigate(`/review/${id}`);
    }

    const newComment = async (review_id) => {
        navigate(`/comment/${review_id}/${id}`, { state: { item } });
    }

    if (reviewEdit) {
        return (
            <ReviewForm review={reviewEdit} token={token} setReviewEdit={setReviewEdit} />
        );
    }

    if (commentEdit) {
        return (
            <CommentForm comment={commentEdit} token={token} setCommentEdit={setCommentEdit} />
        );
    }

    const { name, description } = item;

    return (
        <section>
            <button onClick={() => setItemSelected(false)}>Back</button>
            <h2>{name}</h2>
            <img src={date} />
            <h3>{description}</h3>
            {!viewComments && (<div>
                <button onClick={() => setViewComments(!viewComments)}>View Comments</button>
            </div>)}
            {viewComments && item.reviews && item.reviews.map((review) => {
                return (
                    <div key={review.id}>
                        <p>Review: {review.txt}</p>
                        <p>Rating: {review.score}</p>
                        <button onClick={() => setReviewEdit(review)}>Edit Review</button>
                        <br />
                        <button onClick={() => newComment(review.id)}>Create Comment</button>
                        {review.comments.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <p>Comment: {comment.comment}</p>
                                    <br />
                                    <button onClick={() => setCommentEdit(comment)}>Edit Comment</button>
                                </div>
                            )
                        })}

                    </div>
                )
            })}
            <button onClick={handleSubmit}>Create Review</button>
            <br />
        </section>
    );
};

export default ItemDetail;