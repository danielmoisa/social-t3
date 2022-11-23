import Image from 'next/image'
import { type RouterOutputs } from '../utils/trpc';

type PostByIdOutput = RouterOutputs['posts']['byId'];

const Post = (props: { post: PostByIdOutput }) => {
    const { post } = props;

    return (
        <article className='border-b-[1px] border-gray-700 p-4 text-[15px] bg-[#282C37]'>
            <div className='py-2 flex flex-row'>
                <Image
                    className='rounded-sm'
                    src={post.author.image ?? "/profilePic.jpeg"}
                    height={46}
                    width={46}
                    alt={post.author.name ?? ""}
                />
                <div className='pl-3'>
                    <p>
                        {post.author?.username}
                    </p>
                    <p className='text-[#606984]'>
                        {`@${post.author.name ?? ""}`}
                    </p>
                </div>
            </div>
            <div>{post.content}</div>
        </article>
    )
}

export default Post