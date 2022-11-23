import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import Post from './Post'
import { trpc } from "../utils/trpc";
import Link from 'next/link';

const Feed = () => {
    const { data, isLoading } = trpc.posts.getAll.useQuery();

    if (!!data || isLoading) <div>Loading...</div>

    return (
        <div>
            {
                data?.map(post => <Link href={`/${post.id}`} key={post.id}><Post
                    authorName={post.author.name}
                    authorUsername={post.author.username}
                    authorPic="/profilePic.jpeg"
                    createdAt={post.createdAt}
                    content={post.content}
                />
                </Link>)
            }
        </div>

    )
}

export default Feed