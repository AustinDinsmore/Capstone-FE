import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation } from "../../redux/api";

function CommentForm() {

    const [createComment] = useCreateCommentMutation();
    const [updateComment] = useUpdateCommentMutation();
    const [deleteComment] = useDeleteCommentMutation();

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Create New Comment</h2>
            <form>

            </form>
        </div>
    )
};

export default CommentForm;