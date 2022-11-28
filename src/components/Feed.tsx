import Post from './Post'
import { trpc } from "../utils/trpc";

const Feed = () => {
    const { data, isLoading } = trpc.post.getAll.useQuery();

    if (!!data || isLoading) <div>Loading...</div>

    return (
        <>
            {data?.map(post => <Post key={post.id} post={post} />)}
        </>
    )


}

export default Feed