import Link from 'next/link';

import Post from './Post'
import { trpc } from "../utils/trpc";

const Feed = () => {
    const { data, isLoading } = trpc.posts.getAll.useQuery();

    if (!!data || isLoading) <div>Loading...</div>

    return data?.map(post => <Link href={`/post/${post.id}`} key={post.id}><Post post={post} />
    </Link>)


}

export default Feed