import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import Post from './Post'
import { trpc } from "../utils/trpc";

const Feed = () => {
    const { data, isLoading } = trpc.posts.getAll.useQuery();


    if (!!data || isLoading) <div>Loading...</div>

    return (
        <div className='w-full max-w-[580px] bg-[#313543] h-[300vh] rounded-md'>
            <div className='sticky top-5 px-4 py-3 bg-[#313543]'><FaHashtag size={20} className='inline mr-1' /> Explore</div>

            <div>
                {
                    data?.map(post => <Post key={post.id}
                        authorName={post.author.name}
                        authorUsername={post.author.username}
                        authorPic="/profilePic.jpeg"
                        createdAt={post.createdAt}
                        content={post.content}
                    />)
                }
            </div>
        </div>
    )
}

export default Feed