import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCreateReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation } from "../../redux/api";

function ReviewForm({ token, setToken, items }) {
    const initialForm = {
        txt: "",
        score: 0,
    };

    const { id } = useParams();
    const [createReview] = useCreateReviewMutation();
    const [updateReview] = useUpdateReviewMutation();
    const [deleteReview] = useDeleteReviewMutation();

    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [form, updateForm] = useState(initialForm);

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

        const { error } = items
            ? await updateReview({ token, body: form, id })
            : await createReview({ token, body: form, id })

        if (error) {
            setError(error.data.message);
            return;
        }
        navigate(`/item/${id}`);
    };

    return (
        <div>
            <h2>Create New Review</h2>
            {error ? <p>Please provide a title and a rating!</p> : <span />}
            <form>
                <label>
                    Title:
                    <input name="txt" value={location.state.items.reviews.txt} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Rating:
                    <input name="score" type="number" step={0.5} value={location.state.items.reviews.score} min={1} max={5} onChange={handleChange} />
                </label>
                <br />
                <button onClick={handleSubmit}>Create</button>

            </form>
        </div>
    )
};

export default ReviewForm;