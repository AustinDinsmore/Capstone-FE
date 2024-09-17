import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } from "../../redux/api";

function CommentForm({ token, comment, setCommentEdit }) {
    console.log(comment);
    const initialForm = {
        comment: comment?.comment || "",
    };

    const { review_id, id } = useParams();
    const [createComment] = useCreateCommentMutation();
    const [updateComment] = useUpdateCommentMutation();
    const [deleteComment] = useDeleteCommentMutation();

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [form, updateForm] = useState(initialForm);

    const removeComment = async () => {
        await deleteComment({ id: comment.id, token });
    };

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

        const { error } = comment
            ? await updateComment({ token, body: form, id: comment.id })
            : await createComment({ token, body: form, review_id })

        if (error) {
            setError(error.data.message);
            return;
        }

        if (comment) {
            setCommentEdit(false);
        }

        navigate(`/item/${id}`);
    };

    return (
        <div>
            <h2>{comment ? "Update Comment" : "Create New Comment"}</h2>
            {error ? <p>Please provide a comment!</p> : <span />}
            <form>
                <label>
                    Comment:
                    <input name="comment" value={form.comment} onChange={handleChange} />
                </label>
                <br />
                <button onClick={handleSubmit}>{comment ? "Update" : "Submit"}</button>
                <br />
                <button onClick={removeComment}>Remove Comment</button>
            </form>
        </div>
    )
};

export default CommentForm;