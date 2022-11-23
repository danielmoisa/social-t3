import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import Post from './Post'

const mockPosts = [
    {
        id: 1,
        createdAt: Date.now().toLocaleString(),
        authorName: "Mike Reversio",
        authorUsername: "mikereversio",
        authorPic: "/profilePic.jpeg",
        content: "I cannot stress strongly enough that genocides do not start with death camps. That is where they end. No, they start with dangerous rhetoric that whips up violence against marginalized groups."
    },
    {
        id: 2,
        createdAt: Date.now().toLocaleString(),
        authorName: "Mike Reversio",
        authorUsername: "mikereversio",
        authorPic: "/profilePic.jpeg",
        content: "I cannot stress strongly enough that genocides do not start with death camps. That is where they end. No, they start with dangerous rhetoric that whips up violence against marginalized groups."
    },
    {
        id: 3,
        createdAt: Date.now().toLocaleString(),
        authorName: "Mike Reversio",
        authorUsername: "mikereversio",
        authorPic: "/profilePic.jpeg",
        content: "I cannot stress strongly enough that genocides do not start with death camps. That is where they end. No, they start with dangerous rhetoric that whips up violence against marginalized groups."
    }
]

const Feed = () => {
    return (
        <div className='w-full max-w-[580px] bg-[#313543] h-[300vh] rounded-md'>
            <div className='sticky top-5 px-4 py-3 bg-[#313543]'><FaHashtag size={20} className='inline mr-1' /> Explore</div>

            <div>
                {
                    mockPosts.map(post => <Post key={post.id} {...post} />)
                }
            </div>
        </div>
    )
}

export default Feed