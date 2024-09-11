import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation } from "../../redux/api";

function ReviewForm({ token, setToken, items }) {
    const initialForm = {
        txt: "",
        score: "",
    };
    console.log(items)
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

        const { error } = items
            ? await updateReview({ token, body: form, id: items_id })
            : await createReview({ token, body: form })

        if (error) {
            setError(error.data.message);
            return;
        }
    };

    return (
        <div>
            <h2>Create New Review</h2>
            <form>
                <label>
                    Title:
                    <input name="txt" value={location.state.items.reviews.txt} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Rating:
                    <input name="score" type="number" value={location.state.items.reviews.score} min={1} max={5} onChange={handleChange} />
                </label>
                <br />
                <button onClick={handleSubmit}>Create</button>
                {console.log(location.state.items.reviews)}
            </form>
        </div>
    )
};

export default ReviewForm;