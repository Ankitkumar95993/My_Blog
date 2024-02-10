import { Textarea, Button, Alert } from "flowbite-react";
import { set } from "mongoose";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Comment from "./Comment";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, SetCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  console.log(comments);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }

    try {
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        SetCommentError(null);
        setComments([data,...comments]);
      }
    } catch (error) {
      SetCommentError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getPostComments/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
          <p>signed in as:</p>
          <img
            src={currentUser.profilePicture}
            alt=""
            className="w-5 h-6 object-cover rounded-full"
          />
          <Link
            className="text-xs hover:underline text-cyan-500"
            to="/dashboard?tab=profile"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5 flex gap-1">
          you must be signed in to comment.
          <Link to={"/sign-in"}>Sign In</Link>
        </div>
      )}

      {currentUser && (
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="Add a comment..."
            rows="3"
            maxLength="200"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex items-center justify-between mt-5 ">
            <p className="text-gray-500 text-xs">
              {200 - comment.length} character remaining
            </p>
            <Button outline gradientDuoTone="purpleToBlue" type="submit ">
              Submit
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
        </form>
      )}

      {comments.length === 0 ? (
        <p className="text-sm my-5 "> No comments yet ! </p>
      ) : (
        <>
        <div className=" flex text-sm my-5  item-center gap-1 ">
          <p>comments</p>
          <div className="border border-gray-400 py-1 px-1 rounded-sm">
            <p>{comments.length}</p>
          </div>
        </div>
        {
          comments.map(comment=>(
            <Comment key={comment._id} comment={comment}/>
          ))
        }
        </>
        
      )}
    </div>
  );
}
