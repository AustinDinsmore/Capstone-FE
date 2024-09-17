import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation } from "../../redux/api";

function ReviewForm({ token, item, setReviewEdit, review }) {
    const initialForm = {
        txt: review?.txt || "",
        score: review?.score || 0,
    };

    const { id } = useParams();
    const [createReview] = useCreateReviewMutation();
    const [updateReview] = useUpdateReviewMutation();
    const [deleteReview] = useDeleteReviewMutation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [form, updateForm] = useState(initialForm);

    const removeReview = async () => {
        await deleteReview({ id: review.id, token });
        setReviewEdit(null);
    };

    const handleChange = async ({ target }) => {
        setError(null);
        updateForm({ ...form, [target.name]: target.value });
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (form.score === "" || form.txt === "") {
            setError("Please provide a title and a rating");
            return;
        }

        updateForm({ ...form, score: parseFloat(form.score) });
        console.log(review, "Review");
        const { error } = review

            ? await updateReview({ token, body: form, id: review.id })
            : await createReview({ token, body: form, id })

        if (error) {
            setError(error.data.message);
            return;
        }

        if (review) {
            setReviewEdit(false);
        }

        navigate(`/item/${id}`);
    };

    return (
        <div>
            <h2>{review ? "Update Review" : "Create New Review"}</h2>
            {error ? <p>Please provide a title and a rating!</p> : <span />}
            <form>
                <label>
                    Title:
                    <input name="txt" value={form.txt} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Rating:
                    <input name="score" type="number" step={0.5} value={form.score} min={1} max={5} onChange={handleChange} />
                </label>
                <br />
                <button onClick={handleSubmit}>{review ? "Update" : "Submit"}</button>
                <br />
            </form>
            <button onClick={removeReview}>Delete Review</button>
        </div>
    );
};

export default ReviewForm;