import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } from "../../redux/api";

function CommentForm({ token, setToken, reviews }) {
    const initialForm = {
        comment: "",
    };

    const { review_id, id } = useParams();
    console.log(review_id)
    const [createComment] = useCreateCommentMutation();
    const [updateComment] = useUpdateCommentMutation();
    const [deleteComment] = useDeleteCommentMutation();

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
        if (form.comment === "") {
            setError("Please provide a comment");
            return;
        }

        const { error } = reviews
            ? await updateComment({ token, body: form, review_id })
            : await createComment({ token, body: form, review_id })

        if (error) {
            setError(error.data.message);
            return;
        }

        navigate(`/item/${id}`);
    };
    console.log(location.state.items.reviews.comments)
    return (
        <div>
            <h2>Create New Comment</h2>
            {error ? <p>Please provide a comment!</p> : <span />}
            <form>
                <label>
                    Comment:
                    <input name="comment" value={form.comment} onChange={handleChange} />
                </label>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};

export default CommentForm;