import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } from "../../redux/api";

function CommentForm() {

    const [createComment] = useCreateCommentMutation();
    const [updateComment] = useUpdateCommentMutation();
    const [deleteComment] = useDeleteCommentMutation();

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (form.comment === "") {
            setError("Please provide a title and a rating");
            return;
        }

        if (error) {
            setError(error.data.message);
            return;
        }
    };

    return (
        <div>
            <h2>Create New Comment</h2>
            <form>
                <label>
                    Comment:
                    <input name="comment" value={comments.comment} />
                </label>

            </form>
        </div>
    )
};

export default CommentForm;