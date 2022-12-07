import { signOut, useSession } from 'next-auth/react';
import RouteGuard from '../components/RouteGuard';

const Profile = () => {
    const { data: sessionData } = useSession();

    return (
        <RouteGuard>
            <div className='p-3'>
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
                <button onClick={() => signOut()} className='bg-[#595aff] hover:bg-[#6364ff] px-5 py-[6px] rounded-sm block font-semibold'>Sign out</button>

            </div>
        </RouteGuard>

    )
}

export default Profile