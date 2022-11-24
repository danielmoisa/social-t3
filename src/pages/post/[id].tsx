import { useRouter } from "next/router";
import NextError from 'next/error';
import { trpc } from "../../utils/trpc";
import Post from "../../components/Post";


const SinglePost = () => {
    const id = useRouter().query.id as string;
    const postQuery = trpc.posts.byId.useQuery({ id });

    if (postQuery.error) {
        return (
            <NextError
                title={postQuery.error.message}
                statusCode={postQuery.error.data?.httpStatus ?? 500}
            />
        );
    }

    if (postQuery.status !== 'success') {
        return <>Loading...</>;
    }
    const { data } = postQuery;
    return <Post post={data} />;
}

export default SinglePost