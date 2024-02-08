import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import {Spinner,Button} from 'flowbite-react';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchPost();
  }, [postSlug]);

  if(loading) return(
    <div className="flex justify-center items-center min-h-screen">
        <Spinner size='xl'/>
    </div>

  )
  return (

    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
     <h1 className='text-center text-3xl m-10 font-serif max-w-2xl lg:text-4xl capitalize mx-auto'>{post && post.title}</h1>
      <Link className="self-center mt-5" to={`/search?category=${post && post.category}`}>
      <Button pill color='gray' size='xs' >{post && post.category}</Button>
      </Link>
    <img src={post && post.image} alt={post && post.title}  className="mt-12 p-3 max-h-[600px] 
    w-full object-cover "/>

    <div className="p-3 flex justify-between border-b-2 border-slate-500 w-full max-w-2xl mx-auto text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span>{post && (post.content.length/1000).toFixed(0)} mins read</span>
    </div>
    <div  className="p-3 max-w-2xl mx-auto w-full post-content" dangerouslySetInnerHTML={{__html:post && post.content}}>

    </div>

    </main>

  )
}
