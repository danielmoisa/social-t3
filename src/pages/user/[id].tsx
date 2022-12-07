import { useRouter } from "next/router";
import NextError from 'next/error';
import Image from 'next/image'
import { trpc } from "../../utils/trpc";
import Post from "../../components/Post";
import { useState } from "react";
import { useSession } from "next-auth/react";

const SingleUser = () => {
    const id = useRouter().query.id as string;
    const { data: sessionData } = useSession();
    const [postValue, setPostValue] = useState("");
    const userQuery = trpc.user.byId.useQuery({ id });
    const userMutation = trpc.post.create.useMutation()
    console.log(sessionData)

    if (userQuery.error) {
        return (
            <NextError
                title={userQuery.error.message}
                statusCode={userQuery.error.data?.httpStatus ?? 500}
            />
        );
    }

    if (userQuery.status !== 'success') {
        return <>Loading...</>;
    }

    const { data } = userQuery;
    console.log(data)
    return <>
        <Image
            src="/cover.png"
            width={580}
            height={145}
            alt="user cover"
        />

        <div className="px-4 flex items-center justify-between">
            <Image src={data.image ?? '/profile.png'} height={90} width={90} alt="profile picture" className="mt-[-35px]" />
            <button className='bg-[#595aff] hover:bg-[#6364ff] px-5 py-[6px] rounded-sm block font-semibold'>Follow</button>
        </div>

        <div className="p-4">
            <p className="font-bold">{data.name}</p>
            <p className="text-[#9baec8]">{`@${data.username}`}</p>
        </div>

        <div className="p-4 flex items-center justify-start text-[14px] bg-[#282C37]">
            <p>{data.posts.length} <span className="text-[#9baec8] mr-[1rem]">Posts</span></p>
            <p>{data.following.length} <span className="text-[#9baec8] mr-[1rem]">Following</span></p>
            <p>{data.followers.length} <span className="text-[#9baec8] mr-[1rem]">Followers</span></p>
        </div>

        <div className="p-2 mb-3">
            <textarea onChange={(e) => setPostValue(e.target.value)} rows={4} className='w-full bg-[#313543] rounded-sm outline-none' placeholder="Add a new post..." />
            <button onClick={() => userMutation.mutate({ authorId: sessionData?.user?.id as string, content: postValue })} className='bg-[#595aff] hover:bg-[#6364ff] px-5 py-[6px] rounded-sm block font-semibold'>Publish</button>


        </div>

        <div>
            {data?.posts?.map((post) => <Post key={post.id} post={post} />)}
        </div>
    </>
}

export default SingleUser