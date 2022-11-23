import Image from 'next/image'
import React from 'react'

interface IPost {
    authorName: string,
    authorUsername: string,
    authorPic: string,
    createdAt: string,
    content: string
}

const Post = ({ authorName, authorUsername, authorPic, createdAt, content }: IPost) => {
    return (
        <article className='border-b-[1px] border-gray-700 p-4 text-[15px] bg-[#282C37]'>
            <div className='py-2 flex flex-row'>
                <Image
                    className='rounded-sm'
                    src={authorPic}
                    height={46}
                    width={46}
                    alt={authorUsername}
                />
                <div className='pl-3'>
                    <p>
                        {authorName}
                    </p>
                    <p className='text-[#606984]'>
                        {`@${authorUsername}`}
                    </p>
                </div>
            </div>
            <div>{content}</div>
        </article>
    )
}

export default Post