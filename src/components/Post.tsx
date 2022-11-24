import dayjs from 'dayjs';
import Image from 'next/image'
import Link from 'next/link';
import { FaBookmark, FaEllipsisH, FaGlobeAmericas, FaReply, FaRetweet, FaShareAlt, FaStar } from 'react-icons/fa';
import { type RouterOutputs } from '../utils/trpc';

type PostByIdOutput = RouterOutputs['post']['byId'];

const Post = (props: { post: PostByIdOutput }) => {
    const { post } = props;

    return (
        <article className='border-b-[1px] border-gray-700 p-4 text-[15px] bg-[#282C37]'>
            <div className='py-2 flex flex-row items-center justify-between'>
                <div className='flex flex-row'>
                    <Image
                        className='rounded-sm'
                        src={post.author.image ?? "/profilePic.jpeg"}
                        height={46}
                        width={46}
                        alt={post.author.name ?? ""}
                    />
                    <div className='pl-3'>
                        <p>
                            {post.author?.name}
                        </p>
                        <p className='text-[#606984]'>
                            {`@${post.author.username ?? ""}`}
                        </p>
                    </div>

                </div>
                <div className='flex items-center justify-center text-sm text-[#606984]'>
                    <>
                        <FaGlobeAmericas className='mr-1' /> {formatPostDate(post.createdAt)}
                    </>
                </div>
            </div>
            <Link href={`/post/${post.id}`} >
                <div>
                    {post.content}
                </div>
            </Link>
            <div className='flex flex-row items-center justify-between mt-2 py-2'>
                <button className='flex items-center justify-center text-sm text-[#606984] hover:bg-[rgba(96,105,132,.15)] p-[2px] rounded-sm transition ease-in-out '><FaReply size={18} className='mr-2' /> 1+</button>
                <button className='flex items-center justify-center text-sm text-[#606984] hover:bg-[rgba(96,105,132,.15)] p-[2px] rounded-sm transition ease-in-out '><FaRetweet size={18} className='mr-2' /> 44</button>
                <button className='flex items-center justify-center text-sm text-[#606984] hover:bg-[rgba(96,105,132,.15)] p-[2px] rounded-sm transition ease-in-out '><FaStar size={18} className='mr-2' /> 12</button>
                <button className='flex items-center justify-center text-sm text-[#606984] hover:bg-[rgba(96,105,132,.15)] p-[2px] rounded-sm transition ease-in-out '><FaBookmark size={18} className='mr-2' /></button>
                <button className='flex items-center justify-center text-sm text-[#606984] hover:bg-[rgba(96,105,132,.15)] p-[2px] rounded-sm transition ease-in-out '><FaShareAlt size={18} className='mr-2' /></button>
                <button className='flex items-center justify-center text-sm text-[#606984] hover:bg-[rgba(96,105,132,.15)] p-[2px] rounded-sm transition ease-in-out '><FaEllipsisH size={18} className='mr-2' /></button>
            </div>
        </article>
    )
}

const formatPostDate = (date: Date) => {
    const oneDay = 24 * 60 * 60 * 1000
    return date.getMilliseconds() < oneDay ? `${dayjs(date).format('HH')}h` : dayjs(date).format('MMM YY')
}

export default Post

